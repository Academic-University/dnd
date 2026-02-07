document.addEventListener("DOMContentLoaded", function () {
  // Массив имён библиотекарей
  const librarians = [
    "Элвин",
    "Мориана",
    "Торвин",
    "Лирия",
    "Каспер",
    "Селеста",
    "Финн",
    "Эльдра",
    "Гидеон",
    "Мира",
    "Борис",
    "Астера",
    "Роланд",
    "Вивьен",
    "Орландо",
  ];

  // Получаем имя из cookie или выбираем случайное
  let librarianName = getCookie("librarian_name");

  if (!librarianName) {
    librarianName = librarians[Math.floor(Math.random() * librarians.length)];
    setCookie("librarian_name", librarianName, 8); // 8 часов
  }

  // Формируем приветственное сообщение
  const greeting = `Добро пожаловать путник, меня зовут ${librarianName}. Сегодня моя смена в библиотеке. Что Вам будет угодно почитать?`;

  // Ищем элемент для приветствия
  const greetingElement = document.getElementById("librarian-greeting");

  if (greetingElement) {
    greetingElement.textContent = greeting;
  } else {
    // Если элемент не найден, создаём его в начале контента
    const contentDiv = document.querySelector(".container") || document.body;
    const greetingDiv = document.createElement("div");
    greetingDiv.id = "librarian-greeting";
    greetingDiv.className = "librarian-greeting";
    greetingDiv.textContent = greeting;
    contentDiv.insertBefore(greetingDiv, contentDiv.firstChild);
  }
});

// Функция для получения cookie
function getCookie(name) {
  const matches = document.cookie.match(
    new RegExp(
      "(?:^|; )" + name.replace(/([.$?*|{}()[\]\\/+^])/g, "\\$1") + "=([^;]*)",
    ),
  );
  return matches ? decodeURIComponent(matches[1]) : null;
}

// Функция для установки cookie
function setCookie(name, value, hours) {
  const date = new Date();
  date.setTime(date.getTime() + hours * 60 * 60 * 1000);
  const expires = "; expires=" + date.toUTCString();
  document.cookie =
    name + "=" + encodeURIComponent(value) + expires + "; path=/";
}
