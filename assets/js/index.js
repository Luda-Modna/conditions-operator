/*

📋 Завдання на switch..case

Познайомитись з оператором множинного вибору
switch..case
-- альтернативою для
if (умова1)
    інструкція1
else if (умова2)
    інструкція2
else if (умова3)
    інструкція3
...
else
    інструкція

1. Запитати у користувача номер дня тижня та вивести відповідну повну рядкову назву (наприклад, якщо користувач вводить 7 – виводиться повідомлення "неділя"). Передбачити обробку помилкового введення номера дня тижня (в гілка default, з повідомленням "дня з таким номером не існує").

2. (за бажанням) У змінній day лежить якесь число з інтервалу від 1 до 31. Визначте, до якої декади місяця потрапляє це число (до першої, другої чи третьої). Наприклад, число 1 - це перша декада, 20 - друга, 25 - третя.*/

//1
const isDay = false;
if (isDay) {
  document.write(`<h2>Cвітла тема</h2>`);
} else {
  document.write(`<h2 class="night">Темна тема</h2>`);
}

//2
const isOnline = false;
if (!isOnline) {
  alert(
    "Ваше повідомлення буде відправлено при під'єднанні до мережі Інтернет"
  );
}

//3
const price = Number(prompt("Введіть суму покупки: "));

if (price > 500 && price <= 800) {
  alert("Вітаємо у вас знижка 3%");
  const sum = price - (price * 3) / 100;
  alert("Сума вашого замовлення враховуючи знижку " + sum + "грн");
} else if (price > 800) {
  alert("Вітаємо у вас знижка 5%");
  const sum = price - (price * 5) / 100;
  alert("Сума вашого замовлення враховуючи знижку " + sum + "грн");
} else {
  alert("Сума вашого замовлення " + price + "грн");
}

//4
const isLogin = true;
let isMale = prompt("Вкажіть вашу стать: жінка, чоловік, анонім");

if (isLogin && isMale === "жінка") {
  document.write(`
    <article class="container"> 
        <a href="#"><i class="fa-brands fa-blogger"></i></a>
        <div>
            <img class="foto border-color-women" src="https://images.pexels.com/photos/5704849/pexels-photo-5704849.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="foto-user">
            <h2> Name User </h2>
        </div>
    </article>`);
} else if (isLogin && isMale === "чоловік") {
  document.write(`
        <article class="container"> 
            <a href="#"><i class="fa-brands fa-blogger"></i></a>
            <div>
                <img class="foto border-color-men" src="https://images.pexels.com/photos/6147118/pexels-photo-6147118.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="foto-user">
                <h2> Name User </h2>
            </div>
        </article>`);
} else if (isLogin) {
  document.write(`
    <article class="container"> 
    <a href="#"><i class="fa-brands fa-blogger"></i></a>
    <div>
        <img class="foto border-color-anonim" src="https://images.pexels.com/photos/13031416/pexels-photo-13031416.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="foto-user">
        <h2>Name User</h2>
    </div>
</article>`);
} else {
  document.write(` 
    <article class="container"> 
        <a href="#"><i class="fa-brands fa-blogger"></i></a>
        <div>
            <button>Login</button>
            <button>Register</button>
        </div>
    </article>`);
}
