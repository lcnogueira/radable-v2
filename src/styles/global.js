import styled, { createGlobalStyle } from 'styled-components';

import { Link } from 'react-router-dom';

export const Container = styled.div.attrs({
  className: 'container',
})`
  padding-top: 20px;
`;

export const Row = styled.div.attrs({
  className: 'row',
})`
  margin-top: 20px;
`;

export const Col = styled.div.attrs({
  className: 'col',
})``;

export const PageTitle = styled.h1`
  color: #17a2b8;
  text-align: center;
`;

export const BtnLink = styled(Link).attrs(props => ({
  className: props.addclass,
}))`
  margin-right: 5px;
`;

export const Btn = styled.button.attrs(props => ({
  className: props.addclass,
}))`
  margin-right: 5px;
`;

export const Icon = styled.i.attrs(props => ({
  className: props.name,
}))`
  margin-right: 5px;
`;

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }
  body{
    /* background: #9865E6; */
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    font-family: sans-serif;
  }
  button{
    cursor: pointer;
    color: #fff;
    border-radius: 3px;
    &:hover{
      opacity: 0.8;
    }
  }
  .bg-primary{
    background: #007bff;
    border: #007bff;
  }
  .bg-secondary{
    background: #63f5b8;
    border: #63f5b8;
  }
  .bg-danger{
    background: #dc3545;
    border: #dc3545;
  }
`;

export default GlobalStyle;
