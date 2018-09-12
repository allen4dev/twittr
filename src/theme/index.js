import styledNormalize from 'styled-normalize';
import { injectGlobal } from 'styled-components';

injectGlobal`
  ${styledNormalize}

  *, *::before, &::after {
    box-sizing: border-box;
  }

  html {
    font-family: Arial;
  } 

  body, h1, h2, h3, h4, ul, p, figure {
    margin: 0;
    padding: 0;
  }

  li {
    list-style: none;
  }
`;

const colors = {
  skyblue: '#3aceec',
  darkblue: '#39c6e2',
  // more colors
};

const sizes = {
  header: '3rem',
};

export default {
  colors,
  sizes,
};
