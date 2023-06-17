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
<<<<<<< HEAD
          <Route path={`/`} element={<PageHome />}/>
=======
        <Route path={`/`} element={<PageHome />}/>

>>>>>>> 8c564038242bf4fc568ddd7f6c6a012359d85db2
          <Route path={`/categories`} element={<PageCategory />}/>
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
