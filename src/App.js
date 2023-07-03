import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PageCategory, PageHome, PageProHome } from './pages';
import Timer from './components/timer/Timer';
import ExerPage from './pages/exerPage/ExerPage';

function App() {


  const test = {
    name: 'Глаз',
    cons: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis eius est ducimus praesentium quibusdam unde doloribus excepturi illum facilis eligendi, fuga harum perferendis ratione aliquid ab qui nemo ipsum similique '
  }



  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path={`/`} element={<PageHome />} />
          <Route path={`/timer`} element={<Timer />} />
          <Route path={`/ex`} element={<ExerPage test = {test}/>} />
          <Route path={`/pro`} element={<PageProHome />} />
          <Route path={`/categories`} element={<PageCategory />}/>
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
