class WFoot extends HTMLElement {
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
            <footer class="footer">
              <div class="content has-text-centered">
                <p>
                  <strong>Bulma</strong> by <a href="https://jgthms.com">Jeremy Thomas</a>. The source code is licensed
                  <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content
                  is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
                </p>
              </div>
            </footer>
        `;
    }

    styles() {
        return `
          <style>
          @import url('https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.2/css/bulma.min.css');
          </style>
        `;
    }
}

customElements.define('w-foot', WFoot);

