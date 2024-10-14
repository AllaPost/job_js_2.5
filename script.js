// Задание 1: Создание и работа с объектами

let user = {
  name: "Alla Ivanova",
  age: 28,
  email: "alla.iva@example.com",
};

console.group("Задание 1");
console.log(`Имя: ${user.name}`);
console.log(`Возраст: ${user.age}`);
console.log(`Email: ${user.email}`);
console.groupEnd();

// Задание 2: Обновление свойств объекта

user.age = 30;
user.isAdmin = true;

console.log("Задание 2 user:", user);

// Задание 3: Удаление свойства из объекта

delete user.email;

console.log("Задание 3 user:", user);

// Задание 4: Преобразование объекта

function transformUser(user) {
  return {
    name: user.name.toUpperCase(),
    email: user.email,
  };
}

let userAlla = {
  name: "Alla Ivanova",
  age: 28,
  email: "alla.iv@example.com",
};

let transformedUser = transformUser(userAlla);

console.log("Задание 4:", transformedUser);

// Задание 5: Копирование объектов

let userCopy = {
  ...user,
  name: "Jane Doe",
};

console.log("Оригинальный объект:", user);
console.log("Измененная копия:", userCopy);

// Задание 6: Преобразование объекта по условию

function filterProperties(obj, keys) {
  let filteredObj = {};

  keys.forEach((key) => {
    filteredObj[key] = obj[key] ?? "allaif@gmail.com";
  });

  return filteredObj;
}

let filteredUser = filterProperties(user, ["name", "email"]);

console.log("Задание 6: ", filteredUser);

// Задание 7: Изменение структуры данных объекта

function convertUser(user) {
  return {
    profile: {
      name: user.name,
      age: user.age,
    },
    email: user.email,
    isAdmin: user.isAdmin,
  };
}

let convertedUser = convertUser(user);
console.log("Задание 7: ",convertedUser);

// Задание 8: Объединение объектов

let user1 = {
  name: "John Doe",
  email: "john.doe@example.com",
};

let details = {
  age: 30,
  isAdmin: true,
};

let mergedUser = Object.assign({}, user1, details);

console.log("Задание 8: ",mergedUser);

// Задание 9: Динамическое создание свойств

let key1 = "name";
let key2 = "price";
let key3 = "category";

let product = {};

product[key1] = "Sample Product";
product[key2] = 29.99;
product[key3] = "Electronics";

console.log("Задание 9: ",product);
