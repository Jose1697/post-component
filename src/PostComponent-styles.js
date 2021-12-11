/* eslint-disable no-unused-vars */
import { css, unsafeCSS } from 'lit-element';
import * as foundations from '@bbva-web-components/bbva-foundations-styles';

export default css`:host {
  display: block;
  box-sizing: border-box;
}

:host([hidden]), [hidden] {
  display: none !important;
}

*, *:before, *:after {
  box-sizing: inherit;
}

.postDetail {
  display: flex;
  justify-content: center;
}

bbva-web-card-product {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}

.coments-container {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  width: 50%;
  padding: 2%;
}

.coments {
  height: 90%;
  overflow: auto;
}

.coment {
  margin-bottom: 2%;
}

.input {
  display: flex;
}

bbva-web-form-text {
  width: 70%;
  margin-right: 4%;
}
`;