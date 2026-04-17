require('dotenv').config();
const mongoose = require('mongoose');
const MenuItem = require('./models/MenuItem');

const MENU_DATA = [
  { name: "Шашлик з баранини", type: "Гаряче", portion: "300 г", price: 380 },
  { name: "Шашлик з яловичини", type: "Гаряче", portion: "300 г", price: 340 },
  { name: "Шашлик із курки", type: "Гаряче", portion: "300 г", price: 260 },
  { name: "Люля-кебаб", type: "Гаряче", portion: "250 г", price: 290 },
  { name: "Хінкалі (5 шт.)", type: "Гаряче", portion: "350 г", price: 210 },
  { name: "Долма", type: "Гаряче", portion: "200 г", price: 195 },
  { name: "Чанахі", type: "Гаряче", portion: "350 г", price: 265 },
  { name: "Піті", type: "Суп", portion: "400 мл", price: 185 },
  { name: "Харчо", type: "Суп", portion: "400 мл", price: 175 },
  { name: "Аджапсандалі", type: "Закуска", portion: "200 г", price: 155 },
  { name: "Мацоні із зеленню", type: "Закуска", portion: "200 г", price: 120 },
  { name: "Сир Сулугуні", type: "Закуска", portion: "150 г", price: 140 },
  { name: "Пхали", type: "Закуска", portion: "180 г", price: 135 },
  { name: "Лаваш", type: "Хліб", portion: "1 шт.", price: 45 },
  { name: "Лобіані", type: "Хліб", portion: "1 шт.", price: 95 },
  { name: "Хачапурі по-аджарськи", type: "Хліб", portion: "1 шт.", price: 185 },
  { name: "Чурчхела", type: "Десерт", portion: "1 шт.", price: 85 },
  { name: "Пахлава", type: "Десерт", portion: "150 г", price: 110 },
];

async function seed() {
  await mongoose.connect(process.env.MONGODB_URI);
  console.log('Connected to MongoDB');
  await MenuItem.deleteMany({});
  await MenuItem.insertMany(MENU_DATA);
  console.log(`✅ Seeded ${MENU_DATA.length} menu items`);
  process.exit(0);
}

try {
  seed();
} catch (err) {
  console.error('Error seeding database:', err);
  process.exit(1);
}
