import React from 'react';
import {  Image, List, Message} from 'semantic-ui-react';
import { observer, inject } from 'mobx-react';

import AppWrapper from 'components/AppWrapper';
import AddToCartButton from 'components/AddToCartButton';
import { withRouter } from 'react-router-dom';

import { Form } from 'react-final-form';
import { Link } from 'react-router-dom';
import request from 'utils/request';

@inject('routing')
@observer

export default class VariationPicker extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            product: props.product,
            variations: undefined,
            variationsLoaded: false,
            err: null
        };

        this.facetWhitelist = {
            'color':'img'
        };
    }

    componentWillMount() {
      // Was a product passed in? if not, fetch the product - user is deep linking to this route
        if(this.state.variations === undefined) {
            request({
                method: 'GET',
                path: `/api/variations/${this.state.product.id}`
            })
                .then((result) => {
                    this.setState({variations: result, variationsLoaded: true});
                })
                .catch((err) => {
                    this.setState({
                        err,
                        variationsLoaded: true
                    });
                });
        }
    }

    openVariation(product, variations) {
        this.props.routing.replace({pathname:`/product/${product.sku}`, state: { product, variations}});
        this.props.switchVariation(product);
    }

    getFacets() {
        const facets = {};
        this.state.variations.forEach(v => {
            const attributes = JSON.parse(v.attributes_json);
            for(const k in attributes) {
                const facetField = this.facetWhitelist[k];
                if (facetField !== undefined) {
                    if (!facets[k]) {
                        facets[k] = [];
                    }

                    let thisLabel;

                    if (facetField == 'img') {
                        thisLabel = <div><Image avatar src={require(`assets/product_images/${v.img}`)} /><div className="attributeValue">{attributes[k]}</div></div>;
                    } else {
                        thisLabel = attributes[k];
                    }
                    
                    facets[k].push(
                        <List.Item key={v.sku}>
                            <List.Content>
                                <div onClick={() => { this.openVariation(v, this.props.variations);   }}>{thisLabel}</div>
                            </List.Content>
                        </List.Item>
                    );
                }
            }
        });

        return facets;
    }

    render() {
      if (this.state.err) {
  		  return (
          <Message
            error
            header='Unable to load Varations'
            content={this.state.err.message}
          />
  		  )
      } else if (this.state.variationsLoaded) {
            const facets = this.getFacets();
            const facetGroups = [];
            for(const k in facets) {
                facetGroups.push(
                    <div key={k}><List horizontal className="productVariations" key={k}>{facets[k]}</List></div>
                );
            }
            return (<div>{facetGroups}</div>);  
        } else {
            return (
                <div>Loading .. </div>
            );
        }
    }
}
