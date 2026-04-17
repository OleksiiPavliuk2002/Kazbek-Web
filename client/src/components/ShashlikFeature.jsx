export default function ShashlikFeature() {
  return (
    <div className="shashlik-feature">
      <div className="shashlik-grid">
        <img
          className="shashlik-img"
          src="https://images.unsplash.com/photo-1529066792305-5e4efa40fde9?w=900&q=80"
          alt="Шашлик на мангалі"
        />
        <div className="shashlik-text">
          <p className="section-label">Наша гордість</p>
          <h2 className="section-title">Шашлик - серце Кавказу</h2>
          <p>
            Ми маринуємо м'ясо не менше 12 годин у суміші гірських трав, цибулі
            та спецій. Готуємо виключно на дровах із фруктових дерев – це додає
            неповторний аромат та золотисту скоринку.
          </p>
          <p>
            Баранина, яловичина, курка - все з перевірених фермерських
            господарств. Ні грама заморозки.
          </p>
          <a href="#booking" className="btn" style={{ marginTop: "1.5rem" }}>
            <span>Забронювати стіл</span>
          </a>
        </div>
      </div>
    </div>
  );
}
