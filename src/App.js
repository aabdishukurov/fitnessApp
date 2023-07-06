import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PageBuy, PageCategory, PageLanding, PageProLanding } from "./pages";
import { PageNutritio } from "./pages/PageNutritio/PageNutritio";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path={`/`} element={<PageLanding />} />
          {/* PageLanding поместить в layout здесь он только для разработки*/}
          {/* при существующем лендинге компонент ProSection поместить в него а PageLanding удалить */}
          <Route path={`/pro`} element={<PageProLanding />} />
          {/* PageProLanding поместить в layout с условной отрисовкой при наличии подписки здесь он только для разработки*/}
          {/* при существующем лендинге для pro версии компонент NutritiosSection поместить в него а PageProLanding удалить */}
          <Route path={`/buyPro`} element={<PageBuy />} />
          <Route path={`/nutritio/:id`} element={<PageNutritio />} />
          <Route path={`/categories`} element={<PageCategory />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
