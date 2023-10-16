import { render, screen, waitFor } from "@testing-library/react";
import user from "@testing-library/user-event";
import App from "./App";

test("uygulama dogru şekilde çalışıyor mu", async () => {
  render(<App />);

  const nameInput = screen.getByLabelText("Kullancı İsmi Girin:");
  const mailInput = screen.getByLabelText("Kullancı Mail Girin:");
  const submitBtn = screen.getByRole("button");

  // kullanıcının inputa veri girişi simülasyonu

  // kullanıcının inputa tıklaması

  user.click(nameInput);
  user.keyboard("react");

  user.type(mailInput, "react@gmail.com");

  // kullanıcının submit butonuna tıklaması
  user.click(submitBtn);

  // isim değerine karşılık gelen tablo hücresi var mı
  await screen.findByRole("cell", { name: "react", email: "react@gmail.com" });
});
