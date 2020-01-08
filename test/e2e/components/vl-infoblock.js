const { VlElement } = require('vl-ui-core');
const { VlIcon } = require('vl-ui-icon');

class VlInfoblock extends VlElement {
    constructor(driver, selector) {
        super(driver, selector);
    }

    async getText() {
        const element = await this._getContent();
        return this.driver.executeScript('return arguments[0].innerText', element);
    }

    async getTitle() {
        const element = await this._getContent();
        const slots = await element.findElements(By.css('[slot]'));
        if (slots.length > 0) {
            return this.getText();
        } else {
            return this.getAttribute('title');
        }
    }

    async _getContent() {
        return await this.shadowRoot.findElement(By.css('#infoblock_content'));
    }

    async _getType() {
        return this.getAttribute('type');
    }

    async isContact() {
        return (await this._getType()) == 'contact';
    }

    async isPublication() {
        return (await this._getType()) == 'publications';
    }

    async isFaq() {
        return (await this._getType()) == 'faq';
    }

    async isNews() {
        return (await this._getType()) == 'news';
    }

    async isTimeline() {
        return (await this._getType()) == 'timeline';
    }

    async isQuestion() {
        return (await this._getType()) == 'question';
    }

    async isCalendar() {
        return (await this.getAttribute('icon')) == 'calendar';
    }


}

module.exports = VlInfoblock;
