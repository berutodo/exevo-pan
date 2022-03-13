import { createGlobalStyle } from 'styled-components'
import Reset from './Reset'
import CustomScrollbar from './CustomScrollbar'

const GlobalStyles = createGlobalStyle`
  ${Reset}

  :root {
    --background: #eeeeee;
    --surface: #ffffff;
    --onSurface: #000000;
    --separator: #b4b4b4;
    --primary: #3f51b5;
    --onPrimary: #ffffff;
    --primaryVariant: #c5cae9;
    --darkerPrimary: #323d8e;
    --green: #377712;
    --red: #c51313;
    --alert: #f9eec1;
    --battleGreen: #43b600;
    --battleYellow: #ffdd00;
    --primaryVariantHighlight: #e7e8ee;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font: 400 16px Roboto, sans-serif;
    background-color: var(--background);
    color: var(--onSurface);
    transition: background-color 0.2s ease-out;
    ${CustomScrollbar}

    *::selection {
      color: var(--onSurface);
      background: var(--primaryVariant);
    }
  }

  #__next > div {
    min-height: 100vh;
    display: flex;
    flex-direction: column;

    main {
      flex-grow: 1;
    }
  }

  svg {
    transition: fill 0.2s ease-out;
  }
`

export default GlobalStyles
