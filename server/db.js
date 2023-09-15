// импорт монгус
const mongoose = require("mongoose");

// Функция для подключения к MongoDB
const connectToDB = async () => {
  // проверяем подключенние используем конструкцию для отлова ошибок
  try {
    // соединение с бд
    await mongoose.connect("mongodb://localhost/metro", {
      // новый парсер
      useNewUrlParser: true,
      // новая унифицированная топология
      useUnifiedTopology: true,
    });
    // вывод сообщение в консоль
    console.log("соединение to MongoDB ");
    // если есть ошибка, то записываем в переменную
  } catch (error) {
    // выводим в консоль ошибку
    console.error(error);
  }
};
// эскпорт функции
module.exports = { connectToDB };
