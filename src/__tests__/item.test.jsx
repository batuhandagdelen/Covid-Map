import { render, screen } from "@testing-library/react";
import Item from "../pages/home/item";
test("Gönderilen proplar doğru şekilde kullanılıyor mu?", () => {
  // test edilecek bileşeni renderlama
  render(<Item color="text-blue-500" text="İyileşen Hasta" value="100M" />);
  // gerekli elementleri çağır
  const icon = screen.getByRole("svg");
  const span = screen.getByRole("span");
  const h2 = screen.getByRole("heading");

  // color propu ile gelen değer iconunun classına ekleniyor mu
  expect(icon).toHaveClass("text-blue-500");

  // text propu ile gelen değer spana yazıldı mı
  expect(span).toHaveTextContent("İyileşen Hasta");
  //  value prop u ile gelen değer h2 ye yazıldı mı
  expect(h2).toHaveTextContent("100M");
});
