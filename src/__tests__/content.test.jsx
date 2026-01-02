import { render, screen } from "@testing-library/react";
import configureStore from "redux-mock-store";
import { thunk } from "redux-thunk";
import { mockCountryData } from "../utils/constants";
import { Provider } from "react-redux";
import Content from "../pages/detail/content";

// sahte stor oluşturmaya yarayan fonksiyon
const createMockStore = configureStore([thunk]);

//test1
test("store yüklenme durumundayken loader gelir", () => {
  // test seneryosu için mock bir store oluştur
  const mockStore = createMockStore({
    isLoading: true,
    error: null,
    data: null,
  });

  render(
    <Provider store={mockStore}>
      <Content />
    </Provider>
  );

  // ekrana loader geldi mi
  screen.getByTestId("loader");
});

//test2
test("store hata durumundayken ekrana hata mesajı gelir", () => {
  // test seneryosu için mock bir store oluştur
  const mockStore = createMockStore({
    isLoading: false,
    error: "Ülke bulunamadı",
    data: null,
  });

  render(
    <Provider store={mockStore}>
      <Content />
    </Provider>
  );

  // hata mesajı ekrana geldi mi kontrol et
  screen.getByText("Ülke bulunamadı");
});

//test3
test("store a veri geldiğinde her bir değer ekrana basılır", () => {
  // test seneryosu için mock bir store oluştur
  const mockStore = createMockStore({
    isLoading: false,
    error: false,
    data: mockCountryData,
  });

  render(
    <Provider store={mockStore}>
      <Content />
    </Provider>
  );

  // data nesnesini diziye çevir

  const arr = Object.entries(mockCountryData).filter(([key]) => key !== "flag");

  // dizideki her bir key-value çifti için render yapılıyor mu

  arr.forEach((item) => {
    screen.getByText(item[0]);
    screen.getByText(item[1]);
  });
});
