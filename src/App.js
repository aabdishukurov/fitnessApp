import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PageCategory, PageHome, PageProHome, PageProfile, PageProfileNotifications, PageProfileStatistics } from './pages';

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path={`/`} element={<PageHome />} />
          <Route path={`/pro`} element={<PageProHome />} />
          <Route path={`/categories`} element={<PageCategory />}/>
          <Route path={`/profile`} element={<PageProfile />}/>
          <Route path={`/notifications`} element={<PageProfileNotifications />}/>
          <Route path={`/statistics`} element={<PageProfileStatistics />}/>
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
