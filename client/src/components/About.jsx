const FEATS = [
  { icon: "🔥", t: "Живий вогонь", d: "М'ясо на мангалі по-справжньому" },
  { icon: "🌿", t: "Свіжі спеції", d: "Привозимо з Грузії та Вірменії" },
  { icon: "🏔", t: "Гірський дух", d: "Атмосфера Кавказьких гір" },
  { icon: "👨‍🍳", t: "Дослідні кухарі", d: "Більше 15 років досвіду" },
];

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-img-wrap">
            <img
              className="about-img"
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=700&q=80"
              alt="Інтер'єр кафе Казбек"
            />
            <div className="about-img-frame" />
            <div className="about-badge">
              <strong>15</strong>
              <span>років традицій</span>
            </div>
          </div>

          <div className="about-text">
            <p className="section-label">Про нас</p>
            <h2 className="section-title">Місце, де живе традиція</h2>
            <div className="divider" />
            <p>
              Кафе "Казбек" - затишне місце, де кожен гість почувається дорогим.
              Ми готуємо за рецептами, які передаються з покоління до покоління
              на берегах Кавказьких гір.
            </p>
            <p>
              Наші кухарі — носії традицій грузинської, вірменської та
              азербайджанської. кулінарії. Тільки свіжі продукти, живий вогонь
              та справжні спеції.
            </p>
            <div className="about-features">
              {FEATS.map((f) => (
                <div className="feat" key={f.t}>
                  <div className="feat-icon">{f.icon}</div>
                  <h4>{f.t}</h4>
                  <p>{f.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
