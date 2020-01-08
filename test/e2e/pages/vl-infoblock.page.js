const VlInfoblock = require('../components/vl-infoblock');
const { Page } = require('vl-ui-core');
const { Config } = require('vl-ui-core');

class VlInfoblockPage extends Page {
    async _getInfoblock(selector) {
        return new VlInfoblock(this.driver, selector);
    }

    async load() {
        await super.load(Config.baseUrl + '/demo/vl-infoblock.html');
    }
}

module.exports = VlInfoblockPage;
