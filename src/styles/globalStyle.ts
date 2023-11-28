"use client";

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    @media screen and (min-width: 1026px) and (max-width: 1440px) {
      font-size: 90%;
    }

    @media screen and (min-width: 769px) and (max-width: 1025px) {
      font-size: 80%;
    }

    @media screen and (min-width: 541px) and (max-width: 768px) {
      font-size: 70%;
    }

    @media screen and (min-width: 301px) and (max-width: 540px) {
      font-size: 60%;
    }

    @media screen and (max-width: 300px) {
      font-size: 50%;
    }
  }

  body {
    background-color: white;
  }

  ul,
  li {
    list-style: none;
  }

  p {
    display: inline-block;
  }

  a {
    display: inline-block;
    text-decoration: none;
    color: inherit;
  }

  label {
    cursor: pointer;
  }

  input,
  textarea {
    -moz-user-select: auto;
    -webkit-user-select: auto;
    -ms-user-select: auto;
    user-select: auto;
    border: none;
    outline: none;
    resize: none;
  }

  input:focus {
    outline: none;
  }

  button {
    outline: none;
    border: none;
    background: none;
    padding: 0;
    cursor: pointer;
  }
`;

export default GlobalStyle;
