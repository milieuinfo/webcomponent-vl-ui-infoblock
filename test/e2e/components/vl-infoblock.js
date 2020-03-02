const { VlElement } = require('vl-ui-core').Test;
const { VlIcon } = require('vl-ui-icon').Test;
const { By } = require('selenium-webdriver');

class VlInfoblock extends VlElement {

	async getTitleSlotElements() {
		const titleSlot = await this._getTitleSlot();
		return this.getAssignedElements(titleSlot);
    }
    
    async getContentSlotNodes() {
    	const contentSlot = await this._getContentSlot();
    	return this.getAssignedNodes(contentSlot);
    }

    async getIcon() {
        return new VlIcon(this.driver, await this._getIcon());
    }

    async getType() {
        return this.getAttribute('type');
    }

    async isContact() {
        return (await this.getType()) == 'contact';
    }

    async isPublication() {
        return (await this.getType()) == 'publications';
    }

    async isFaq() {
        return (await this.getType()) == 'faq';
    }

    async isNews() {
        return (await this.getType()) == 'news';
    }

    async isTimeline() {
        return (await this.getType()) == 'timeline';
    }

    async isQuestion() {
        return (await this.getType()) == 'question';
    }

    async _getTitleSlot() {
        return this.shadowRoot.findElement(By.css('#infoblock_title slot'));
    }

    async _getContentSlot() {
        return this.shadowRoot.findElement(By.css('#infoblock_content slot'));
    }

    async _getIcon() {
        return this.shadowRoot.findElement(By.css('[is="vl-icon"]'));
    }
}

module.exports = VlInfoblock;
