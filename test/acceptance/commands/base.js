module.exports = {
  sleep(ms) {
    this.api.pause(ms);
    return this;
  }
}