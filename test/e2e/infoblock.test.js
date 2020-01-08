
const { assert, driver } = require('vl-ui-core').Test;
const VlInfoblockPage = require('./pages/vl-infoblock.page');

describe('vl-infoblock', async () => {
    const vlInfoblockPage = new VlInfoblockPage(driver);

    before(() => {
        return vlInfoblockPage.load();
    });

    it('ik kan een custom icon kiezen', async () => {
        const customIconBlock = await vlInfoblockPage.getCustomIconBlock();

        await assert.eventually.isFalse(customIconBlock.hasAttribute('type'));
        await assert.eventually.isTrue(customIconBlock.hasAttribute('icon'));
        await assert.eventually.isTrue(customIconBlock.isCalendar());
    }); 

});
