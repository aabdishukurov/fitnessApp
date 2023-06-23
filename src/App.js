import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PageCategory } from './pages';
import WaterCalculator from "./components/maksatbek/waterCalculator/WaterCalculator";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
            <Route index element={<WaterCalculator/>}/>
          <Route path={`/categories`} element={<PageCategory />}/>
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
