class PIrado extends HTMLElement {
    constructor() {
        super();

        const template = document.createElement('template');

        let root = this.attachShadow({mode: 'open'})

        this.dataText = this.getAttribute('data-text');

        template.innerHTML = this.template();

        root.appendChild(template.content.cloneNode(true))
    }

    connectedCallback() {
      this.addEventListener("click", e => {
            const result = confirm(`Are you sure you want to go to '${this.href}'?`);
            if (!result) e.preventDefault();
          });
    }

    template() {
        return `
          ${this.styles()}
            <p>
                <slot name="slot-text">P Irado chato!</slot>
                <p>Atributo: ${this.dataText}</p>
            </p>
        `;
    }

    styles() {
        return `
          <style>
              p {
                color: red;
              }
          </style>
        `;
    }
}

customElements.define('p-irado', PIrado);

