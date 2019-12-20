import { VlElement, define } from '/node_modules/vl-ui-core/vl-core.js';
import '/node_modules/vl-ui-icon/vl-icon.js';

/**
 * VlInfoblock
 * @class
 * @classdesc 
 * 
 * @extends VlElement
 * 
 * @property 
 * 
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-infoblock/releases/latest|Release notes}
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-infoblock/issues|Issues}
 * @see {@link https://webcomponenten.omgeving.vlaanderen.be/demo/vl-infoblock.html|Demo}
 * 
 */
export class VlInfoblock extends VlElement(HTMLElement) {

    static get _observedAttributes() {
        return ['titel', 'icon'];
    }

    constructor() {
        super(`
                <style>
                    @import '../style.css';
                    @import '/node_modules/vl-ui-icon/style.css';
                    
                </style>
    
                <section class="vl-infoblock">
                    <header class="vl-infoblock__header" role="presentation">
                        <span is="vl-icon" id="infoblock_icon" class="vl-infoblock__header__icon"></span>
                        <h2 class="vl-infoblock__title" id="infoblock_title"></h2>
                    </header>
                    <div class="vl-infoblock__content" id="infoblock_content">
                       <slot></slot>
                    </div>  
                </section>
            `);
    }

    _titelChangedCallback(oldValue, newValue) {
        this._titleElement.innerText = newValue;
    }

    _iconChangedCallback(oldValue, newValue) {
        this._iconElement.setAttribute("icon", newValue);
    }

    get _titleElement() {
        return this._element.querySelector('#infoblock_title');
    }

    get _iconElement() {
        return this._element.querySelector('#infoblock_icon');
    }

}

define('vl-infoblock', VlInfoblock);
