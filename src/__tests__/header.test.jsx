import configureStore from "redux-mock-store";
import { thunk } from "redux-thunk";
import Header from "../pages/detail/header";
import { Provider } from "react-redux";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { mockCountryData } from "../utils/constants";
// sahte mock oluşturma fonksiyonu
const createMockStore = configureStore([thunk]);

// test1
it("store yüklenme durumundayken ekrana loader gelir", () => {
  // bu teste özel loading durumunda sahte bir store oluşturma

  const mockStore = createMockStore({ isLoading: true, data: null });

  render(
    <Provider store={mockStore}>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </Provider>
  );

  screen.getByTestId("loader");
});
// test2
it("store 'a veri geline ekrana ülke ismi ve bayrağı gelir", () => {
  // bu teste özel detay verilerine sahip sahter store oluştur
  const mockStore = createMockStore({
    isLoading: false,
    data: mockCountryData,
  });

  render(
    <Provider store={mockStore}>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </Provider>
  );

  // ekranda loader olmadıgını kontrol et
  const loader = screen.queryByTestId("loader");
  expect(loader).toBeNull();

  // ülke ismi ekranda mı
  const title = screen.getByRole("heading");
  expect(title).toHaveTextContent("Türkiye");

  // ülke bayrağı ekranda mı
  const img = screen.getByAltText(mockCountryData.flag.alt);

  // bayrağın kaynağı doğru mu
  expect(img).toHaveAttribute("src", mockCountryData.flag.png);
});
