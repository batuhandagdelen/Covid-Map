import { render, screen, waitFor } from "@testing-library/react";
import { totalApi } from "../utils/api";
import Statistics from "../pages/home/statistics";
import { mockStatisticsData } from "../utils/constants";

// api isteği atan get fonksiyonun yerine mock bir fonksiyon koy

jest.mock("../utils/api", () => ({
  totalApi: {
    get: jest.fn(),
  },
}));

// test 1
test("Bileşen render oldugunda ekrana loader gelir", () => {
  // mocklanan fonksiyon çağırıldığında promise(yükleniyor) döndürsün
  totalApi.get.mockReturnValue(new Promise(() => {}));

  render(<Statistics />);
  // ektanda loader componenti var mı?
  screen.getByTestId("loader");
});

//test 2
test("api dan hata geldiğinde ekrana hata mesajı  gelir", async () => {
  // mocklanan fonksiyon çağırıldıgında hata döndürsün
  totalApi.get.mockRejectedValue(new Error("404 Not Found"));

  render(<Statistics />);

  await waitFor(() => screen.getByText("Üzgünüz bir sorun oluştu"));
});

// test 3
test("apidan veri gelirse ekrana istatistikler gelir", async () => {
  // mocklanacak fonksiyon çağırıldığında istatistik verileri dönsün
  totalApi.get.mockResolvedValue({ data: mockStatisticsData });

  render(<Statistics />);

  // api isteğinin atılmasını bekle
  await waitFor(() => expect(totalApi.get).toHaveBeenCalled());

  // ekrana veriler geldi mi

  screen.getByText("Toplam Vaka");
  screen.getByText("Aktif Vaka");
  screen.getByText("Toplam Vefat");
});
