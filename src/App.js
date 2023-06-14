import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
