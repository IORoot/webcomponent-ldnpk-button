// links
// https://css-tricks.com/a-complete-guide-to-links-and-buttons/



// ╔══════════════════════════════════════════════════════════╗
// ║                     Add the template                     ║
// ╚══════════════════════════════════════════════════════════╝
const template = document.createElement('template');


// ╔══════════════════════════════════════════════════════════╗
// ║                INCLUDES / LINKS / SCRIPTS                ║
// ╚══════════════════════════════════════════════════════════╝
let html = /* html */` 
    <link href="https://fonts.cdnfonts.com/css/inter" rel="stylesheet">
`;


// ╔══════════════════════════════════════════════════════════╗
// ║                        STYLESHEET                        ║
// ╚══════════════════════════════════════════════════════════╝
html += /* html */` 
    <style>

        :host {
            /* Variables  */
            --backgroundColour: #F3F4F6;
            --foregroundColour: #000000;

            --shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
        }
        

        a {
            /* Position */
            position: relative;
            display: inline-block;

            /* Size  */
            padding: 1rem 2rem;
            border-radius: 0.5rem;

            /* Presentation  */
            background: var(--backgroundColour);
            color: var(--foregroundColour);
            font-size: 1rem;
            font-weight: 400;
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Droid Sans', 'Helvetica Neue', sans-serif;
            text-decoration: none;
            line-height: 1rem;
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
        }

        .large {
            /* Size */
            padding: 1.5rem 3.5rem;

            /* Presentation */
            font-size: 1.5rem;
        }

    /*  ╭──────────────────────────────────────────────────────────╮
        │                       HOVER STATE                        │
        ╰──────────────────────────────────────────────────────────╯*/
        a:hover {
            background: var(--foregroundColour);
            color: var(--backgroundColour);
        }

    /*  ╭──────────────────────────────────────────────────────────╮
        │                       FOCUS STATE                        │
        ╰──────────────────────────────────────────────────────────╯*/
        a:focus {
            outline: 1px solid #333333;
        }
        

    </style>
`;


// ╔══════════════════════════════════════════════════════════╗
// ║                         TEMPLATE                         ║
// ╚══════════════════════════════════════════════════════════╝
html += /* html */`
    <a id="button"><slot></slot></a>
`;


// ╔══════════════════════════════════════════════════════════╗
// ║                     ADD TO TEMPLATE                      ║
// ╚══════════════════════════════════════════════════════════╝
template.innerHTML =  html


// ╔══════════════════════════════════════════════════════════╗
// ║                   DEFINE WEBCOMPONENT                    ║
// ╚══════════════════════════════════════════════════════════╝
class Button extends HTMLElement {

    constructor() {

        // SETUP 
        super();
        const clone = template.content.cloneNode(true);
        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild(clone);

        const element = this.shadowRoot.querySelector("a");

        // HREF
        element.href = this.hrefAttribute;

        // target
        element.target = this.targetAttribute;

        // rel
        element.rel = this.relAttribute;
        
        // shadow
        if (this.hasAttribute('shadow')){
            this.shadowRoot.querySelector("#button").classList.add("shadow");
        }

        // style
        if (this.hasAttribute('style')){                    
            this.shadowRoot.querySelector("#button")
                .classList
                .add(this.styleAttribute);
        }

        // size
        if (this.hasAttribute('size')){                    
            this.shadowRoot.querySelector("#button")
                .classList
                .add(this.sizeAttribute);
        }

    }

    // ╭──────────────────────────────────────────────────────────╮
    // │                    GETTERS / SETTERS                     │
    // ╰──────────────────────────────────────────────────────────╯
    get hrefAttribute() {
        return this.getAttribute("href");
    }

    get targetAttribute() {
        return this.getAttribute("target");
    }

    get relAttribute() {
        return this.getAttribute("rel");
    }

    get styleAttribute() {
        return this.getAttribute("style");
    }

    get sizeAttribute() {
        return this.getAttribute("size");
    }
}

customElements.define("ldnpk-button", Button);