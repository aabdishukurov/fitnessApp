import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Categories } from './components';
import {InfoExercises} from "./pages/InfoExercises/InfoExercises";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path={`/categories`} element={<Categories />}/>
            <Route path={'/InfoExercises/:id'} element={<InfoExercises />}/>
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
