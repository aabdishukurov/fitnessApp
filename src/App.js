import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PageCategory, PageHome } from './pages';

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
        <Route path={`/`} element={<PageHome />}/>

          <Route path={`/categories`} element={<PageCategory />}/>
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
