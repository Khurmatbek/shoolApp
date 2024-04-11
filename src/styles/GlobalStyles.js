import { createGlobalStyle } from "styled-components"
export const GlobalStyle = createGlobalStyle`
:root {
@font-face {
  font-family: 'Gilroy-Light';
  src: local('Gilroy-Light'), url(./fonts/Gilroy-Light.ttf) format('truetype');
}
}
*{
  box-sizing: border-box;
}
body {
font-family: "Gilroy-Light", sans-serif;
font-size: 16px;
font-weight: 500;
  margin: 0;
  width: 100%;
}
.container{
  max-width: 1352px;
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;
}
body::selection{
  background-color: rgb(237, 85, 59);
  color: #000;
}

.loader {
    width: 45px;
    aspect-ratio: 0.75;
    background:
      var(--c) 0% 50%,
      var(--c) 50% 50%,
      var(--c) 100% 50%;
    background-size: 20% 50%;
    animation: loading 1s infinite linear;
  }

  @keyframes loading {
    20% {
      background-position:
        0% 0%,
        50% 50%,
        100% 50%;
    }
    40% {
      background-position:
        0% 100%,
        50% 0%,
        100% 50%;
    }
    60% {
      background-position:
        0% 50%,
        50% 100%,
        100% 0%;
    }
    80% {
      background-position:
        0% 50%,
        50% 50%,
        100% 100%;
    }
  }

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    /* display: none; <- Crashes Chrome on hover */
    -webkit-appearance: none;
    margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
}
a{
  display: block;
  
  text-decoration:none;
}
select{
  appearance: none;
}
`