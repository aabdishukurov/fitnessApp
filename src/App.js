<<<<<<< HEAD
import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PageCategory } from "./pages/Category/PageCategory";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { Categories } from "./components";
import Layout from "./components/Layout";
import LandingPage from "./pages/LandingPage/LandingPage";
import { InfoExercises } from "./pages/InfoExercises/InfoExercises";
import { PageHome, PageProHome } from "./pages";

function App() {
  const clientId =
    "1025490078098-i3aqus6h529dgc2pe3ts6o84970i5ig9.apps.googleusercontent.com";

  return (
    <>
      <GoogleOAuthProvider clientId={clientId}>
        <Provider store={store}>
          <BrowserRouter>
            <Routes>
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/categoriesss" element={<Category />} />
              <Route path="/categories" element={<Categories />} />
              <Route path="/InfoExercises/:id" element={<InfoExercises />} />
              <Route path="/" element={<PageHome />} />
              <Route path="/pro" element={<PageProHome />} />
              {/* <Route path="/" element={<Layout />} />
              <Route path="/" element={<LandingPage />} /> */}
            </Routes>
          </BrowserRouter>
        </Provider>
      </GoogleOAuthProvider>
    </>
=======
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
>>>>>>> 4fe244262d37734a6a085c59ae48d53750f4d310
  );
}
export default App;
