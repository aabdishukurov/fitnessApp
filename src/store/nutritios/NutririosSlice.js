// !!! ВРЕМЕННЫЙ РЕДЮСЕР ДЛЯ ДЕМОНСТРАЦИИ РАБОТЫ
import { createSlice } from "@reduxjs/toolkit";

import img1 from "../../assets/Nutritios1.jpg";
import img2 from "../../assets/Nutritios2.jpg";
import img3 from "../../assets/Nutritios3.jpg";

const initialState = {
  nutritiosArray: [
    {
      id: 1,
      name: "Олег Панков",
      age: "38 лет",
      image: img1,
      expirience: "8 лет",
      education: "Высшее медицинское",
      proffesion: "Диетолог",
      raiting: 5,
      contacts: {
        telephone: "+1 (123) 697-8973",
        whattsapp: "11236978973",
        instagram: "@caustic_exorcism_82",
      },
    },
    {
      id: 2,
      name: "Меруерт Каримова",
      age: "25 лет",
      image: img2,
      expirience: "2 года",
      education: "Сертификат “NUTRI NUR”",
      proffesion: "Нутрициолог",
      raiting: 3,
      contacts: {
        telephone: "+1 (123) 697-8973",
        whattsapp: "11236978973",
        instagram: "@caustic_exorcism_82",
      },
    },
    {
      id: 3,
      name: "Салтанат Орозова",
      age: "54 лет",
      image: img3,
      expirience: "22 года",
      education: "Высшее медицинское",
      proffesion: "Диетолог",
      raiting: 5,
      contacts: {
        telephone: "+1 (123) 697-8973",
        whattsapp: "11236978973",
        instagram: "@caustic_exorcism_82",
      },
    },
  ],
  currentNutritio: {},
};

const NutririosSlice = createSlice({
  name: "nutritios",
  initialState,
  reducers: {
    setCurrentNutritio: (state, action) => {
      state.currentNutritio = state.nutritiosArray.find(
        (el) => el.id == action.payload
      );
    },
  },
});

export const { setCurrentNutritio } = NutririosSlice.actions;
export default NutririosSlice.reducer;
