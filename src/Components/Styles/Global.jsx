import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    body {
        width: 100vw;
        font-family: roboto, sans-serif;
        scrollbar-width: none;
          &::-webkit-scrollbar{
              display: none;
          }
        scroll-behavior: smooth !important;
        scroll-snap-type: y mandatory;
    }
    html {
      box-sizing: border-box;
      /* text-align: center; */
    }
    *, *::before, *::after {
      box-sizing: inherit;
      font-family: 'Montserrat', sans-serif;
    }
    body, h1, h2, h3, h4, h5, h6, p, ol, ul, div, main, nav, section, header, footer, aside {
      margin: 0;
      padding: 0;
      font-weight: normal;
    }
    ol, ul {
      list-style: none;
    }
    /* img {
      max-width: 100%;
      height: auto;
    } */
    a, a:visited, a:hover {
      text-decoration: none !important;
      color: #000;
      /* font-family: 'Roboto', sans-serif; */
      font-family: roboto, sans-serif;
    }
    input, &::placeholder, a, textarea {
        /* color: #000; */
        /* font-family: 'Roboto', sans-serif; */
        font-family: roboto, sans-serif;
    }
    /* input, textarea {
        background-color: #FFF;
        font-family: 'Montserrat', sans-serif;
        /* font-family: 'Roboto', sans-serif; */
    } */
    .App{
      /* height: 100vh; */
      position: relative;
    }
    button{
      font-family: roboto, sans-serif;
    }
`;