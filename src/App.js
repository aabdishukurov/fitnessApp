import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Categories } from './components';

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Categories />
        <Routes>
          <Route path='/' element={<div></div>}>
            {/*  */}
          </Route>
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
