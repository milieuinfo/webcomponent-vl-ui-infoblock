
const { assert, driver } = require('vl-ui-core').Test;
const VlInfoblockPage = require('./pages/vl-infoblock.page');

describe('vl-infoblock', async () => {
    const vlInfoblockPage = new VlInfoblockPage(driver);

    before(() => {
        return vlInfoblockPage.load();
    });

    
    after(() => {
        driver && driver.quit();
    });
});
