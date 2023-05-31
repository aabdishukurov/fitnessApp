import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Categories } from './components';
import PremiumPage from './pages/PremiumPage';

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Categories />
        <Routes>
          <Route path={'/premium'} element={<PremiumPage/>}/>
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
