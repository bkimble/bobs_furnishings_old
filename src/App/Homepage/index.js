import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import Alert from 'react-bootstrap/lib/Alert';
import ProductList from 'components/ProductList';

import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility
} from 'semantic-ui-react';

import logo from 'assets/bob_logo.png';
import nanImage from 'assets/nan.jpg';

const HomepageHeading = ({ mobile }) => (
  <Container text>
    <Header
      as="h1"
      content="Imagine-a-Company"
      inverted
      style={{
        fontSize: mobile ? '2em' : '4em',
        fontWeight: 'normal',
        marginBottom: 0,
        marginTop: mobile ? '1.5em' : '3em'
      }}
    />
    <Header
      as="h2"
      content="Do whatever you want when you want to."
      inverted
      style={{
        fontSize: mobile ? '1.5em' : '1.7em',
        fontWeight: 'normal',
        marginTop: mobile ? '0.5em' : '1.5em'
      }}
    />
    <Button primary size="huge">
      Get Started
      <Icon name="right arrow" />
    </Button>
  </Container>
);

HomepageHeading.propTypes = {
  mobile: PropTypes.bool
};

/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */
class DesktopContainer extends React.Component {
  state = {};

  hideFixedMenu = () => this.setState({ fixed: false });

  showFixedMenu = () => this.setState({ fixed: true });


  render() {
    return (
 <Container>
    {/* Heads up! We apply there some custom styling, you usually will not need it. */}
    <style>{`
      html, body {
        background-color: #252839 !important;
      }
      p {
        align-content: center;
        background-color: #495285;
        color: #fff;
        display: flex;
        flex-direction: column;
        justify-content: center;
        min-height: 6em;
      }
      p > span {
        opacity: 0.4;
        text-align: center;
      }
    }
    `}</style>

    <Image src={logo} />
    <Header as='h2' inverted textAlign='center'>
      Products
    </Header>
    <ProductList />
    </Container>
  );
  }

  ikdrender() {
    return (
 <Container>
    {/* Heads up! We apply there some custom styling, you usually will not need it. */}
    <style>{`
      html, body {
        background-color: #252839 !important;
      }
      p {
        align-content: center;
        background-color: #495285;
        color: #fff;
        display: flex;
        flex-direction: column;
        justify-content: center;
        min-height: 6em;
      }
      p > span {
        opacity: 0.4;
        text-align: center;
      }
    }
    `}</style>

    <Image src={logo} />
    <Header as='h2' icon inverted textAlign='center'>
      Advanced Grid
      <Header.Subheader>
        This page contains some helpful examples that can be usefull for advanced layouts.
      </Header.Subheader>
    </Header>
    <Divider />
    <ProductList />
    <Header as='h2' inverted textAlign='center'>
      Basic 16
    </Header>
    <Grid>
      {/* Heads up! Grid.Row is not mandatory, Grid.Column is enough for grid to work */}
      <Grid.Row>
        <Grid.Column>
          <p />
        </Grid.Column>
        <Grid.Column>
          <p />
        </Grid.Column>
        <Grid.Column>
          <p />
        </Grid.Column>
        <Grid.Column>
          <p />
        </Grid.Column>
        <Grid.Column>
          <p />
        </Grid.Column>
        <Grid.Column>
          <p />
        </Grid.Column>
        <Grid.Column>
          <p />
        </Grid.Column>
        <Grid.Column>
          <p />
        </Grid.Column>
        <Grid.Column>
          <p />
        </Grid.Column>
        <Grid.Column>
          <p />
        </Grid.Column>
        <Grid.Column>
          <p />
        </Grid.Column>
        <Grid.Column>
          <p />
        </Grid.Column>
        <Grid.Column>
          <p />
        </Grid.Column>
        <Grid.Column>
          <p />
        </Grid.Column>
        <Grid.Column>
          <p />
        </Grid.Column>
        <Grid.Column>
          <p />
        </Grid.Column>
      </Grid.Row>
    </Grid>

    <Header as='h2' inverted textAlign='center'>
      16/5 || 4x8x4
    </Header>
    <Grid>
      <Grid.Row columns={5}>
        <Grid.Column>
          <p />
        </Grid.Column>
        <Grid.Column>
          <p />
        </Grid.Column>
        <Grid.Column>
          <p />
        </Grid.Column>
        <Grid.Column>
          <p />
        </Grid.Column>
        <Grid.Column>
          <p />
        </Grid.Column>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column width={4}>
          <p>
            <span>Four</span>
          </p>
        </Grid.Column>
        <Grid.Column width={8}>
          <p>
            <span>Eight</span>
          </p>
        </Grid.Column>
        <Grid.Column width={4}>
          <p>
            <span>Four</span>
          </p>
        </Grid.Column>
      </Grid.Row>
    </Grid>

    <Header as='h2' inverted textAlign='center'>
      Relaxed 4x8x4
    </Header>
    <Grid relaxed>
      <Grid.Row>
        <Grid.Column width={4}>
          <p>
            <span>Four</span>
          </p>
        </Grid.Column>
        <Grid.Column width={8}>
          <p>
            <span>Eight</span>
          </p>
        </Grid.Column>
        <Grid.Column width={4}>
          <p>
            <span>Four</span>
          </p>
        </Grid.Column>
      </Grid.Row>
    </Grid>

    <Header as='h2' inverted textAlign='center'>
      Floated
    </Header>
    <Grid>
      <Grid.Row columns={5}>
        <Grid.Column floated='left'>
          <p>
            <span>Left</span>
          </p>
        </Grid.Column>
        <Grid.Column floated='right'>
          <p>
            <span>Right</span>
          </p>
        </Grid.Column>
      </Grid.Row>
    </Grid>

    <Header as='h2' inverted textAlign='center'>
      Equal width
    </Header>
    <Grid columns='equal'>
      <Grid.Row columns='equal'>
        <Grid.Column>
          <p>
            <span>=</span>
          </p>
        </Grid.Column>
        <Grid.Column>
          <p>
            <span>=</span>
          </p>
        </Grid.Column>
        <Grid.Column>
          <p>
            <span>=</span>
          </p>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row columns='equal'>
        <Grid.Column>
          <p>
            <span>=</span>
          </p>
        </Grid.Column>
        <Grid.Column>
          <p>
            <span>=</span>
          </p>
        </Grid.Column>
      </Grid.Row>
    </Grid>

    <Header as='h2' inverted textAlign='center'>
      Celled
    </Header>
    <Grid celled columns={3}>
      <Grid.Row>
        <Grid.Column>
          <p />
        </Grid.Column>
        <Grid.Column>
          <p />
        </Grid.Column>
        <Grid.Column>
          <p />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <p />
        </Grid.Column>
        <Grid.Column>
          <p />
        </Grid.Column>
        <Grid.Column>
          <p />
        </Grid.Column>
      </Grid.Row>
    </Grid>

    <Header as='h2' inverted textAlign='center'>
      Internally Celled
    </Header>
    <Grid celled='internally' columns={3}>
      <Grid.Row>
        <Grid.Column>
          <p />
        </Grid.Column>
        <Grid.Column>
          <p />
        </Grid.Column>
        <Grid.Column>
          <p />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <p />
        </Grid.Column>
        <Grid.Column>
          <p />
        </Grid.Column>
        <Grid.Column>
          <p />
        </Grid.Column>
      </Grid.Row>
    </Grid>

    {/* Heads up! Override division color to make it visible on dark background. */}
    <style>{`
      .ui.grid.divided:not([class*="vertically divided"]) > .row > .column {
        box-shadow: -1px 0 0 0 #d4d4d4;
      }
      .ui[class*="vertically divided"].grid > .row:before {
        box-shadow: 0 -1px 0 0 rgba(212, 212, 212, 1.0);
      }
    `}</style>
    <Header as='h2' inverted textAlign='center'>
      Divided
    </Header>
    <Grid columns={3} divided>
      <Grid.Row>
        <Grid.Column>
          <p />
        </Grid.Column>
        <Grid.Column>
          <p />
        </Grid.Column>
        <Grid.Column>
          <p />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <p />
        </Grid.Column>
        <Grid.Column>
          <p />
        </Grid.Column>
        <Grid.Column>
          <p />
        </Grid.Column>
      </Grid.Row>
    </Grid>

    <Header as='h2' inverted textAlign='center'>
      Vertically Divided
    </Header>
    <Grid columns={3} divided='vertically'>
      <Grid.Row>
        <Grid.Column>
          <p />
        </Grid.Column>
        <Grid.Column>
          <p />
        </Grid.Column>
        <Grid.Column>
          <p />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <p />
        </Grid.Column>
        <Grid.Column>
          <p />
        </Grid.Column>
        <Grid.Column>
          <p />
        </Grid.Column>
      </Grid.Row>
    </Grid>

    <style>{`
      #nested_1, #nested_2 {
        background-color: rgba(96, 112, 175, .2);
        border: 3px dashed #495285;
      }
      #nested_1 p, #nested_2 p {
        background-color: #f2b632;
      }
      #nested_3 {
        background-color: rgba(242, 182, 50, .3);
        border: 3px dashed #f2b632;
      }
      #nested_3 p {
        background-color: #fff;
      }
    `}</style>
    <Header as='h2' inverted textAlign='center'>
      Nested
    </Header>
    <Grid columns={2}>
      <Grid.Column>
        <Grid columns={3} id='nested_1'>
          <Grid.Column>
            <p />
          </Grid.Column>
          <Grid.Column>
            <p />
          </Grid.Column>
          <Grid.Column>
            <p />
          </Grid.Column>
        </Grid>
      </Grid.Column>
      <Grid.Column>
        <p />
      </Grid.Column>
      <Grid.Column>
        <p />
      </Grid.Column>
      <Grid.Column>
        <Grid id='nested_2'>
          <Grid.Column width={4}>
            <p />
          </Grid.Column>
          <Grid.Column width={12}>
            <Grid columns='equal' id='nested_3'>
              <Grid.Column>
                <p />
              </Grid.Column>
              <Grid.Column>
                <p />
              </Grid.Column>
            </Grid>
          </Grid.Column>
        </Grid>
      </Grid.Column>
    </Grid>

    <style>{`
      #colors p {
        background-color: 000;
        opacity: 0.1;
      }
    `}</style>
    <Header as='h2' inverted textAlign='center'>
      Color variations
    </Header>
    <Grid className='ui equal width center aligned grid container' id='colors'>
      <Grid.Row>
        <Grid.Column color='red'>
          <p />
        </Grid.Column>
        <Grid.Column color='orange'>
          <p />
        </Grid.Column>
        <Grid.Column color='yellow'>
          <p />
        </Grid.Column>
        <Grid.Column color='olive'>
          <p />
        </Grid.Column>
        <Grid.Column color='green'>
          <p />
        </Grid.Column>
        <Grid.Column color='teal'>
          <p />
        </Grid.Column>
        <Grid.Column color='blue'>
          <p />
        </Grid.Column>
        <Grid.Column color='violet'>
          <p />
        </Grid.Column>
        <Grid.Column color='purple'>
          <p />
        </Grid.Column>
        <Grid.Column color='pink'>
          <p />
        </Grid.Column>
        <Grid.Column color='brown'>
          <p />
        </Grid.Column>
        <Grid.Column color='grey'>
          <p />
        </Grid.Column>
        <Grid.Column color='black'>
          <p />
        </Grid.Column>
      </Grid.Row>
    </Grid>

    <Header as='h2' inverted textAlign='center'>
      Stackable (mobile)
    </Header>
    <Grid columns={4} stackable>
      <Grid.Row>
        <Grid.Column>
          <p />
        </Grid.Column>
        <Grid.Column>
          <p />
        </Grid.Column>
        <Grid.Column>
          <p />
        </Grid.Column>
        <Grid.Column>
          <p />
        </Grid.Column>
      </Grid.Row>
    </Grid>

    <Header as='h2' inverted textAlign='center'>
      Reverse order (mobile)
    </Header>
    <Grid columns={4} reversed='mobile'>
      <Grid.Row>
        <Grid.Column>
          <p>
            <span>1</span>
          </p>
        </Grid.Column>
        <Grid.Column>
          <p>
            <span>2</span>
          </p>
        </Grid.Column>
        <Grid.Column>
          <p>
            <span>3</span>
          </p>
        </Grid.Column>
        <Grid.Column>
          <p>
            <span>4</span>
          </p>
        </Grid.Column>
      </Grid.Row>
    </Grid>

    <style>{`
      #db_1 p {
        background-color: #db2828;
      }
      #db_2 p {
        background-color: #fbbd08;
      }
      #db_3 p {
        background-color: #21ba45;
      }
    `}</style>
    <Header as='h2' inverted textAlign='center'>
      Doubling column width (mobile)
    </Header>
    <Grid doubling>
      <Grid.Row columns={8} id='db_1'>
        <Grid.Column>
          <p>
            <span>1</span>
          </p>
        </Grid.Column>
        <Grid.Column>
          <p>
            <span>2</span>
          </p>
        </Grid.Column>
        <Grid.Column>
          <p>
            <span>3</span>
          </p>
        </Grid.Column>
        <Grid.Column>
          <p>
            <span>4</span>
          </p>
        </Grid.Column>
        <Grid.Column>
          <p>
            <span>5</span>
          </p>
        </Grid.Column>
        <Grid.Column>
          <p>
            <span>6</span>
          </p>
        </Grid.Column>
        <Grid.Column>
          <p>
            <span>7</span>
          </p>
        </Grid.Column>
        <Grid.Column>
          <p>
            <span>8</span>
          </p>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row columns={6} id='db_2'>
        <Grid.Column>
          <p>
            <span>1</span>
          </p>
        </Grid.Column>
        <Grid.Column>
          <p>
            <span>2</span>
          </p>
        </Grid.Column>
        <Grid.Column>
          <p>
            <span>3</span>
          </p>
        </Grid.Column>
        <Grid.Column>
          <p>
            <span>4</span>
          </p>
        </Grid.Column>
        <Grid.Column>
          <p>
            <span>5</span>
          </p>
        </Grid.Column>
        <Grid.Column>
          <p>
            <span>6</span>
          </p>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row columns={4} id='db_3'>
        <Grid.Column>
          <p>
            <span>1</span>
          </p>
        </Grid.Column>
        <Grid.Column>
          <p>
            <span>2</span>
          </p>
        </Grid.Column>
        <Grid.Column>
          <p>
            <span>3</span>
          </p>
        </Grid.Column>
        <Grid.Column>
          <p>
            <span>4</span>
          </p>
        </Grid.Column>
      </Grid.Row>
    </Grid>

    <Header as='h2' inverted textAlign='center'>
      Custom visibility (mobile)
    </Header>
    <Grid>
      <Grid.Row only='widescreen'>
        <Grid.Column>
          <p>
            <span>Widescreen</span>
          </p>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row only='large screen'>
        <Grid.Column>
          <p>
            <span>Large Screen</span>
          </p>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row only='computer'>
        <Grid.Column>
          <p>
            <span>Computer</span>
          </p>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row only='tablet computer'>
        <Grid.Column>
          <p>
            <span>Tablet &amp; Computer</span>
          </p>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row columns={2} only='tablet'>
        <Grid.Column>
          <p>
            <span>Tablet</span>
          </p>
        </Grid.Column>
        <Grid.Column>
          <p>
            <span>Tablet</span>
          </p>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row columns={3} only='mobile'>
        <Grid.Column>
          <p>
            <span>Mobile</span>
          </p>
        </Grid.Column>
        <Grid.Column>
          <p>
            <span>Mobile</span>
          </p>
        </Grid.Column>
        <Grid.Column>
          <p>
            <span>Mobile</span>
          </p>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column mobile={3} tablet={6} computer={12} widescreen={16}>
          <p>
            <span>Different width based on screen size</span>
          </p>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Container>
      
    );
  }

  erender() {
    const { children } = this.props;
    const { fixed } = this.state;

    return (
      <Responsive {...Responsive.onlyComputer}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment
            inverted
            textAlign="center"
            style={{ minHeight: 700, padding: '1em 0em' }}
            vertical
          >
            <Menu
              fixed={fixed ? 'top' : null}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size="large"
            >
              <Container>
                <Menu.Item to="/" as={Link} active>
                  Home
                </Menu.Item>
                <Menu.Item position="right">
                  <Button to="/login" as={Link} inverted={!fixed}>
                    Log in
                  </Button>
                  <Button
                    to="/signup"
                    as={Link}
                    inverted={!fixed}
                    primary={fixed}
                    style={{ marginLeft: '0.5em' }}
                  >
                    Sign Up
                  </Button>
                </Menu.Item>
              </Container>
            </Menu>
            <HomepageHeading />
          </Segment>
        </Visibility>

        {children}
      </Responsive>
    );
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node
};

class MobileContainer extends React.Component {
  state = {};

  handlePusherClick = () => {
    const { sidebarOpened } = this.state;

    if (sidebarOpened) this.setState({ sidebarOpened: false });
  };

  handleToggle = () =>
    this.setState({ sidebarOpened: !this.state.sidebarOpened });

  render() {
    const { children } = this.props;
    const { sidebarOpened } = this.state;

    return (
      <Responsive {...Responsive.onlyMobile}>
        <Sidebar.Pushable>
          <Sidebar
            as={Menu}
            animation="uncover"
            inverted
            vertical
            visible={sidebarOpened}
          >
            <Menu.Item to="/" as={Link} active>
              Home
            </Menu.Item>
            <Menu.Item to="/login" as={Link}>
              Log in
            </Menu.Item>
            <Menu.Item to="/register" as={Link}>
              Register
            </Menu.Item>
          </Sidebar>

          <Sidebar.Pusher
            dimmed={sidebarOpened}
            onClick={this.handlePusherClick}
            style={{ minHeight: '100vh' }}
          >
            <Segment
              inverted
              textAlign="center"
              style={{ minHeight: 350, padding: '1em 0em' }}
              vertical
            >
              <Container>
                <Menu inverted pointing secondary size="large">
                  <Menu.Item onClick={this.handleToggle}>
                    <Icon name="sidebar" />
                  </Menu.Item>
                  <Menu.Item position="right">
                    <Button to="/login" as={Link} inverted>
                      Log in
                    </Button>
                    <Button
                      to="/register"
                      as={Link}
                      inverted
                      style={{ marginLeft: '0.5em' }}
                    >
                      Register
                    </Button>
                  </Menu.Item>
                </Menu>
              </Container>
              <HomepageHeading mobile />
            </Segment>

            {children}
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Responsive>
    );
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node
};

const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
);

ResponsiveContainer.propTypes = {
  children: PropTypes.node
};

const HomepageLayout = () => (
  <ResponsiveContainer>
    <Segment style={{ padding: '8em 0em' }} vertical>
      <Grid container stackable verticalAlign="middle">
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as="h3" style={{ fontSize: '2em' }}>
              We Help Companies and Companions
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              We can give your company superpowers to do things that they never
              thought possible. Let us delight your customers and empower your
              needs... through pure data analytics.
            </p>
            <Header as="h3" style={{ fontSize: '2em' }}>
              We Make Bananas That Can Dance
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              Yes that's right, you thought it was the stuff of dreams, but even
              bananas can be bioengineered.
            </p>
          </Grid.Column>
          <Grid.Column floated="right" width={6}>
            <Image bordered rounded size="large" src={logo} />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign="center">
            <Button size="huge">Check Them Out</Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

    <Segment style={{ padding: '0em' }} vertical>
      <Grid celled="internally" columns="equal" stackable>
        <Grid.Row textAlign="center">
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Header as="h3" style={{ fontSize: '2em' }}>
              "What a Company"
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              That is what they all say about us
            </p>
          </Grid.Column>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Header as="h3" style={{ fontSize: '2em' }}>
              "I shouldn't have gone with their competitor."
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              <Image avatar src={nanImage} />
              <b>Nan</b> Chief Fun Officer Acme Toys
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

    <Segment style={{ padding: '8em 0em' }} vertical>
      <Container text>
        <Header as="h3" style={{ fontSize: '2em' }}>
          Breaking The Grid, Grabs Your Attention
        </Header>
        <p style={{ fontSize: '1.33em' }}>
          Instead of focusing on content creation and hard work, we have learned
          how to master the art of doing nothing by providing massive amounts of
          whitespace and generic content that can seem massive, monolithic and
          worth your attention.
        </p>
        <Button as="a" size="large">
          Read More
        </Button>

        <Divider
          as="h4"
          className="header"
          horizontal
          style={{ margin: '3em 0em', textTransform: 'uppercase' }}
        >
          <a href="#">Case Studies</a>
        </Divider>

        <Header as="h3" style={{ fontSize: '2em' }}>
          Did We Tell You About Our Bananas?
        </Header>
        <p style={{ fontSize: '1.33em' }}>
          Yes I know you probably disregarded the earlier boasts as non-sequitur
          filler content, but it's really true. It took years of gene splicing
          and combinatory DNA research, but our bananas can really dance.
        </p>
        <Button as="a" size="large">
          I'm Still Quite Interested
        </Button>
      </Container>
    </Segment>

    <Segment inverted vertical style={{ padding: '5em 0em' }}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={3}>
              <Header inverted as="h4" content="About" />
              <List link inverted>
                <List.Item as="a">Sitemap</List.Item>
                <List.Item as="a">Contact Us</List.Item>
                <List.Item as="a">Religious Ceremonies</List.Item>
                <List.Item as="a">Gazebo Plans</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header inverted as="h4" content="Services" />
              <List link inverted>
                <List.Item as="a">Banana Pre-Order</List.Item>
                <List.Item as="a">DNA FAQ</List.Item>
                <List.Item as="a">How To Access</List.Item>
                <List.Item as="a">Favorite X-Men</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={7}>
              <Header as="h4" inverted>
                Footer Header
              </Header>
              <p>
                Extra space for a call to action inside the footer that could
                help re-engage users.
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  </ResponsiveContainer>
);

export default HomepageLayout;
