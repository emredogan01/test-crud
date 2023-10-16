import { render, screen, waitFor } from "@testing-library/react";
import UserForm from "./UserForm";
import user from "@testing-library/user-event";

// user form bileşenini kendi içinde diğer bileşenlerden izole test edeceğiz
// form gönderilince tabloya eleman ekliyor mu kontrolü yapmayacağız
// formun mantığı doğru şekilde çalışıyor mu kontrol edeceğiz
// name ve email inputlarını doldurup kontrol edeceğiz
// addUser fonkisyonu çalışıyor
// add User fonksiyonuna doğru parametre gönderiliyor mu

test("form göndrilince kullanıcı doğru parametreleri alrak çalışıyor", async () => {
  // mock >> addUser fonksiyonunu kontrol edecek
  // ne zaman ve hangi parametreler ile çağırıldı

  const mock = jest.fn();

  render(<UserForm addUser={mock} />);

  // gerekli elemanları alma

  const nameInput = screen.getByLabelText("Kullancı İsmi Girin:");
  const emailInput = screen.getByLabelText("Kullancı Mail Girin:");

  const submitBtn = screen.getByRole("button");

  // input veri girşi için 1. yol
  // inputa veri girişi için tıklama
  user.click(nameInput);
  // veri girişi
  user.keyboard("Emre");
  // inputa 2. veri girişi yöntemi
  user.type(emailInput, "emre@gmail.com");
  // form gönderimi için tıklanma olayı
  user.click(submitBtn);
  // butona tıklanınca addUser fonksiyonunun çalışıp çalışmama durumu
  expect(mock).toBeCalled();
  // butona tıklanınca addUser Fonksiyonunun doğru parametre ile çağırılma durumu
  expect(mock).toBeCalledWith({ name: "Emre", email: "emre@gmail.com" });

  // name ve email inputlarının boşluk durumu
  await waitFor(() => expect(nameInput).toHaveValue(""));
  await waitFor(() => expect(emailInput).toHaveValue(""));
});
