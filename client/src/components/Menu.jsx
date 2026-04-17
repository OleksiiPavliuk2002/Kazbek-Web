import { useState, useEffect } from "react";
import { fetchMenu } from "../api";

const FALLBACK = [
  {
    _id: "1",
    name: "Шашлик з баранини",
    type: "Гаряче",
    portion: "300 г",
    price: 380,
  },
  {
    _id: "2",
    name: "Шашлик з яловичини",
    type: "Гаряче",
    portion: "300 г",
    price: 340,
  },
  {
    _id: "3",
    name: "Шашлик з курки",
    type: "Гаряче",
    portion: "300 г",
    price: 260,
  },
  {
    _id: "4",
    name: "Люля-кебаб",
    type: "Гаряче",
    portion: "250 г",
    price: 290,
  },
  {
    _id: "5",
    name: "Хінкалі (5 шт.)",
    type: "Гаряче",
    portion: "350 г",
    price: 210,
  },
  { _id: "6", name: "Долма", type: "Гаряче", portion: "200 г", price: 195 },
  { _id: "7", name: "Чанахі", type: "Гаряче", portion: "350 г", price: 265 },
  { _id: "8", name: "Пити", type: "Суп", portion: "400 мл", price: 185 },
  { _id: "9", name: "Харчо", type: "Суп", portion: "400 мл", price: 175 },
  {
    _id: "10",
    name: "Аджапсандалі",
    type: "Закуска",
    portion: "200 г",
    price: 155,
  },
  {
    _id: "11",
    name: "Мацоні із зеленню",
    type: "Закуска",
    portion: "200 г",
    price: 120,
  },
  {
    _id: "12",
    name: "Сир Сулугуні",
    type: "Закуска",
    portion: "150 г",
    price: 140,
  },
  { _id: "13", name: "Пхали", type: "Закуска", portion: "180 г", price: 135 },
  { _id: "14", name: "Лаваш", type: "Хліб", portion: "1 шт.", price: 45 },
  { _id: "15", name: "Лобіані", type: "Хліб", portion: "1 шт.", price: 95 },
  {
    _id: "16",
    name: "Хачапурі по-аджарськи",
    type: "Хліб",
    portion: "1 шт.",
    price: 185,
  },
  { _id: "17", name: "Чурчхела", type: "Десерт", portion: "1 шт.", price: 85 },
  { _id: "18", name: "Пахлава", type: "Десерт", portion: "150 г", price: 110 },
];

export default function Menu() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeType, setActiveType] = useState("Всі");

  useEffect(() => {
    fetchMenu()
      .then((data) => setItems(data && data.length ? data : FALLBACK))
      .catch(() => setItems(FALLBACK))
      .finally(() => setLoading(false));
  }, []);

  const types = ["Всі", ...Array.from(new Set(items.map((i) => i.type)))];
  const visible =
    activeType === "Всі" ? items : items.filter((i) => i.type === activeType);

  return (
    <section id="menu">
      <div className="container">
        <p className="section-label">Наше меню</p>
        <h2 className="section-title">Страви кавказької кухні</h2>
        <div className="divider" />

        <div className="menu-filter">
          {types.map((t) => (
            <button
              key={t}
              className={`filter-btn ${activeType === t ? "active" : ""}`}
              onClick={() => setActiveType(t)}
            >
              {t}
            </button>
          ))}
        </div>

        {loading ? (
          <p className="menu-loading">Завантажуємо меню…</p>
        ) : (
          <table className="menu-table">
            <thead>
              <tr>
                <th>Назва</th>
                <th>Тип</th>
                <th>Порція</th>
                <th>Ціна</th>
              </tr>
            </thead>
            <tbody>
              {visible.map((item) => (
                <tr key={item._id}>
                  <td>{item.name}</td>
                  <td>{item.type}</td>
                  <td>{item.portion}</td>
                  <td>{item.price} ₴</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </section>
  );
}
