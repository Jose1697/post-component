import { LitElement, html, } from 'lit-element';
import { getComponentSharedStyles } from '@bbva-web-components/bbva-core-lit-helpers';
import styles from './PostComponent-styles.js';
import "@bbva-web-components/bbva-web-card-product/bbva-web-card-product.js";
import '@bbva-web-components/bbva-core-icon/bbva-core-icon.js';
import '@bbva-web-components/bbva-web-divider/bbva-web-divider.js';
import '@bbva-web-components/bbva-web-button-default/bbva-web-button-default.js';
import '@bbva-web-components/bbva-web-form-text/bbva-web-form-text.js';
import  * as ICONS from '@bbva-web-components/bbva-foundations-icons';

/**
![LitElement component](https://img.shields.io/badge/litElement-component-blue.svg)

This component ...

Example:

```html
<post-component></post-component>
```

##styling-doc

@customElement post-component
*/
export class PostComponent extends LitElement {
  static get is() {
    return 'post-component';
  }

  // Declare properties
  static get properties() {
    return {
      image: { type: String },
      date: { type: String },
      name: { type: String },
      description: { type: String },
      coments: { type: Array }
    };
  }

  // Initialize properties
  constructor() {
    super();
    this.image = '';
    this.date = '';
    this.name = '';
    this.description = '';
    this.coments = [];
  }

  static get styles() {
    return [
      styles,
      getComponentSharedStyles('post-component-shared-styles')
    ];
  }

  // Define a template
  render() {
    return html`
      <div class="postDetail"> 
        <bbva-web-card-product
          badge-text="Instagram"
          image="${this.image}"
          heading="${this.name}"
          preheading="${this.date}" 
        >
          <p slot="description">
            ${this.description}
          </p>
        </bbva-web-card-product>
        
        <div class="coments-container">
          <div class="coments">
            ${this.coments.map( i => 
              html`
              <div class=coment>
                <bbva-core-icon icon="${ICONS['bbvaAccount']()}"></bbva-core-icon><span>${i}</span>
                <bbva-web-divider></bbva-web-divider>
              </div>
              `
            )}
          </div>
          
          <div class="input">
            <bbva-web-form-text label="Ingrese su comentario" value=""></bbva-web-form-text> 
            <bbva-web-button-default>Aceptar</bbva-web-button-default>
          </div>
        </div>
        
      </div>
      
    `;
  }
}
