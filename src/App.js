import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PageCategory } from './pages/Category/PageCategory';
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { Categories } from './components';
import Layout from './components/Layout';
import LandingPage from './pages/LandingPage';
import {InfoExercises} from "./pages/InfoExercises/InfoExercises";
import { PageCategory } from './pages';
import WaterCalculator from "./components/maksatbek/waterCalculator/WaterCalculator";


function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path={`/categories`} element={<PageCategory />}/>
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}



function App() {
  return (
    <BrowserRouter>
      <GoogleOAuthProvider clientId="1025490078098-i3aqus6h529dgc2pe3ts6o84970i5ig9.apps.googleusercontent.com">
        <Provider store={store}>
          <Routes>
          <Route path={`/categories`} element={<Categories />}/>
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </Provider>
      </GoogleOAuthProvider>
    </BrowserRouter>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path={`/categories`} element={<Categories />}/>
          <Route path={'/'} element={<Layout />}>
            <Route path='/' element={<LandingPage />} />
          </Route>
          <Route path={`/categories`} element={<Categories />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  )
}


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

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path={'/'} element={<Layout />}>
            <Route path='/' element={<LandingPage />} />
          </Route>
          <Route path={`/categories`} element={<Categories />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
