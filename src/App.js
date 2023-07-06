import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path={'/'} element={<Layout />}>
            <Route path='/' element={<LandingPage />} />
          </Route>
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
