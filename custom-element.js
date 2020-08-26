const template = document.createElement('template');

template.innerHTML = `
    <h2>Foods in my Lumen API</h2>
`;

class BigName extends HTMLElement {
    constructor() {
        super();

        this._shadowRoot = this.attachShadow({
            mode: 'open'
        });
        this._shadowRoot.appendChild(template.content.cloneNode(true));
    }
}

window.customElements.define('big-name', BigName);
