import { twind, cssom, observe, install } from "@twind/core";
import "construct-style-sheets-polyfill";
import config from "../../twind.config.js";

// links
// https://css-tricks.com/a-complete-guide-to-links-and-buttons/


// ╭───────────────────────────────────────────────────────╮
// │                   Add the template                    │
// ╰───────────────────────────────────────────────────────╯
const template = document.createElement('template');

// ╭───────────────────────────────────────────────────────╮
// │              INCLUDES / LINKS / SCRIPTS               │
// ╰───────────────────────────────────────────────────────╯
let html = /* html */` 

`;

// ╭───────────────────────────────────────────────────────╮
// │                      STYLESHEET                       │
// ╰───────────────────────────────────────────────────────╯
html += /* html */` 
<div>
    <style>

        :host {
            /* Variables  */
            --backgroundColour: #F3F4F6;
            --foregroundColour: #000000;
            --shadow:           0 4px 6px -1px rgb(0 0 0 / 0.1), 
                                0 2px 4px -2px rgb(0 0 0 / 0.1);
            --padding:          0.5rem 1rem;
        }
        

        a {
            /* Position */
            position: relative;
            display: inline-block;

            /* Size  */
            padding: var(--padding);
            border-radius: 0.5rem;
            margin-right: auto;

            /* Presentation  */
            background: var(--backgroundColour);
            color: var(--foregroundColour);
            font-size: 1rem;
            font-weight: 400;
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Droid Sans', 'Helvetica Neue', sans-serif;
            text-decoration: none;
            text-align: center;
            line-height: 3rem;
        }

        .shadow {
            /* Presentation */
            box-shadow: var(--shadow);
        }

        .outline {
            /* Presentation */
            border: 1px solid var(--foregroundColour);
            background: transparent;
        }

        .ghost {
            /* Presentation */
            background: transparent;
        }

        .small {
            /* Size */
            padding: 0.5rem 1rem;
            border-radius: 0.5rem;

            /* Presentation */
            font-size: 0.75rem;
            line-height: 1rem;
        }

        .large {
            /* Size */
            padding: 1.5rem 3.5rem;

            /* Presentation */
            font-size: 1.5rem;
        }

        #suffix,
        #prefix {
            /* Position */
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;

            /* Presentation  */ 
            fill: var(--foregroundColour);
        }

    /*  ╭───────────────────────────────────╮
        │ HOVER STATE                       │
        ╰───────────────────────────────────╯ */
        a:hover {
            /* Presentation  */ 
            background: var(--foregroundColour);            /* Reversed */
            color: var(--backgroundColour);
        }

        a:hover #suffix,
        a:hover #prefix {
            /* Presentation  */ 
            fill: var(--backgroundColour);                  /* Glyph Hover */
        }

    /*  ╭───────────────────────────────────╮
        │ FOCUS STATE                       │
        ╰───────────────────────────────────╯ */
        a:focus {
            /* Presentation  */ 
            outline: 1px solid #333333;
        }
        

    </style>
`;


// ╭───────────────────────────────────────────────────────╮
// │                       TEMPLATE                        │
// ╰───────────────────────────────────────────────────────╯
html += /* html */`
    <a id="button" class="overflow-hidden">
        <div id="insideflex" class="flex gap-0 sm:gap-2">

            <div id="prefix">
                <slot name="prefix"></slot>
            </div>

                <div class="
                    flex
                    flex-col
                    gap-0
                    text-left
                    mr-auto
                    my-auto
                    shrink">

                    <div class="text-sm md:text-base leading-6">
                        <slot></slot>
                    </div>
                    <div id="description" class="text-xs 
                        hidden sm:block">
                        <slot name="description"></slot>
                    </div>

                </div>
            <div id="suffix">
                <slot name="suffix"></slot>
            </div>

        </div>
    </a>
</div>
`;

// ╭───────────────────────────────────────────────────────╮
// │                    ADD TO TEMPLATE                    │
// ╰───────────────────────────────────────────────────────╯
template.innerHTML = html

// ╭───────────────────────────────────────────────────────╮
// │                  DEFINE WEBCOMPONENT                  │
// ╰───────────────────────────────────────────────────────╯
class Button extends HTMLElement {

    constructor() {

        // SETUP 
        super();
        const clone = template.content.cloneNode(true);
        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild(clone);

        // TWIND Setup
        const sheet = cssom(new CSSStyleSheet());
        const tw = twind(config, sheet);
        const theshadowRoot = this.shadowRoot;
        theshadowRoot.adoptedStyleSheets = [sheet.target];
        observe(tw, theshadowRoot);

        const element = this.shadowRoot.querySelector("a");

        // Set classes on navbar
        element.classList.add(...this.classAttribute);

        // HREF
        element.href = this.hrefAttribute;

        // target
        element.target = this.targetAttribute;

        // rel
        element.rel = this.relAttribute;

        // title
        element.rel = this.titleAttribute;

        // shadow
        if (this.hasAttribute('shadow')) {
            this.shadowRoot.querySelector("#button").classList.add("shadow");
        }

        // shape
        if (this.hasAttribute('shape')) {
            this.shadowRoot.querySelector("#button")
                .classList
                .add(this.shapeAttribute);
        }

        // size
        if (this.hasAttribute('size')) {
            this.shadowRoot.querySelector("#button")
                .classList
                .add(this.sizeAttribute);
        }

        // width (minus padding)
        if (this.hasAttribute('width')) {
            element.style.width = 'calc(' + this.widthAttribute + ' - 4rem)';
        }

    }

    // ╭───────────────────────────────────────────────────────╮
    // │                   GETTERS / SETTERS                   │
    // ╰───────────────────────────────────────────────────────╯
    get hrefAttribute() {
        return this.getAttribute("href");
    }

    get targetAttribute() {
        return this.getAttribute("target");
    }

    get relAttribute() {
        return this.getAttribute("rel");
    }

    get shapeAttribute() {
        return this.getAttribute("shape");
    }

    get sizeAttribute() {
        return this.getAttribute("size");
    }

    get titleAttribute() {
        return this.getAttribute("title");
    }

    get widthAttribute() {
        return this.getAttribute("width");
    }

    get classAttribute() {
        return this.classList;
    }

    get descriptionAttribute() {
        return this.getAttribute("description");
    }
}

customElements.define("ldnpk-button", Button);