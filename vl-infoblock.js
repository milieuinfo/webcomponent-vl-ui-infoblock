import{VlElement,define}from"/node_modules/vl-ui-core/vl-core.js";import"/node_modules/vl-ui-icon/vl-icon.js";export class VlInfoblock extends VlElement(HTMLElement){static get _observedAttributes(){return["titel","icon"]}constructor(){super(`
                <style>
                    @import '/node_modules/vl-ui-infoblock/style.css';
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
            `)}_titelChangedCallback(oldValue,newValue){this._titleElement.innerText=newValue}_iconChangedCallback(oldValue,newValue){this._iconElement.setAttribute("icon",newValue)}get _titleElement(){return this._element.querySelector("#infoblock_title")}get _iconElement(){return this._element.querySelector("#infoblock_icon")}};define("vl-infoblock",VlInfoblock);