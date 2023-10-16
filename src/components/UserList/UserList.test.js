import { render, screen, within } from "@testing-library/react";
import UserList from "./UserList";

const users = [
  { name: "melisa", email: "melisas@gmail.com" },
  { name: "emre", email: "emred@gmail.com" },
  { name: "can", email: "can@gmail.com" },
  { name: "hasan", email: "hasan@gmail.com" },
  { name: "melek", email: "melek@gmail.com" },
];

test("her kullanıcı için ekrana bir tablo satırı basar", () => {
  // prop olarak user liste yukarıda oluşturulan veriyi vereceğiz
  render(<UserList users={users} />);

  // tablodaki satır elemanını çekme
  const rows = within(screen.getByTestId("users")).getAllByRole("row");
  // dizideki eleman sayısı kadar tablo oluşmuşmu
  expect(rows).toHaveLength(users.length);
});

test("Her bir kullanıcı için isim ve email değeri gözükür", () => {
  render(<UserList users={users} />);

  for (const user of users) {
    // kullanıcının adını içeren tablo hücresi
    const nameCell = screen.getByText(user.name);
    expect(nameCell).toBeInTheDocument();
    // kullanıcının mail adresini içeren hücreyi çekme
    const emailCell = screen.getByText(user.email);
    // mail içi ekranda bir tablo hücresi var mı
    expect(emailCell).toBeInTheDocument();
  }
});
