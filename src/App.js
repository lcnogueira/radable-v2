import React from 'react';
import { Provider } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';

import './config/reactotron';
import { BrowserRouter } from 'react-router-dom';
import store from './store';
import Routes from './routes';

import GlobalStyle, { Container } from './styles/global';

import 'font-awesome/css/font-awesome.css';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.css';

import NavBar from './components/NavBar';

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <BrowserRouter>
        <NavBar />
        <Container>
          <Routes />
        </Container>
      </BrowserRouter>
      <ToastContainer position={toast.POSITION.TOP_CENTER} autoClose={2000} />
    </Provider>
  );
}

export default App;
