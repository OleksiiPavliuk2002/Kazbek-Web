const NAV = [
  { label: "Про нас", href: "#about" },
  { label: "Меню", href: "#menu" },
  { label: "Кухня", href: "#cuisine" },
  { label: "Бронь", href: "#booking" },
  { label: "Контакти", href: "#contacts" },
];

export default function Footer() {
  return (
    <footer>
      <img
        className="footer-banner"
        src="https://images.unsplash.com/photo-1544025162-d76694265947?w=1600&q=70"
        alt="Кавказький стіл"
      />
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h3>🌿 Кафе "Казбек"</h3>
            <p>
              Ми переконані — наше кафе найкраще у місті! Тут на вас чекають
              справжні смаки Кавказу, жива атмосфера та сердечна гостинність.
              Кожен гість йде ситим та щасливим.
            </p>
            <p
              style={{
                color: "var(--gold)",
                fontStyle: "italic",
                fontSize: ".9rem",
                marginBottom: "1rem",
              }}
            >
              «Там, де гарний стіл – там гарне життя»
            </p>
            <div className="delivery-badge">🛵 Доставка від 300 ₴</div>
          </div>

          <div className="footer-col">
            <h4>Навігація</h4>
            {NAV.map((n) => (
              <a key={n.href} href={n.href}>
                {n.label}
              </a>
            ))}
          </div>

          <div className="footer-col">
            <h4>Контакти</h4>
            <a href="tel:+380671234567">+38 (067) 123-45-67</a>
            <a href="tel:+380931234567">+38 (093) 123-45-67</a>
            <a href="mailto:info@kazbek.cafe">info@kazbek.cafe</a>
            <p style={{ marginTop: ".8rem" }}>вул. Шевченка, 42, Дніпро</p>
            <p>Пн–Пт: 11:00–23:00</p>
            <p>Сб: 11:00–00:00 · Нд: 12:00–23:00</p>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} Кафе "Казбек". Усі права захищені.
          </span>
          <span>Зроблено з ❤ та шашликом</span>
        </div>
      </div>
    </footer>
  );
}
