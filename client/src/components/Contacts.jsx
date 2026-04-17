export default function Contacts() {
  return (
    <section id="contacts">
      <div className="container">
        <p className="section-label">Знайти нас</p>
        <h2 className="section-title">Контакти та режим роботи</h2>
        <div className="divider" />

        <div className="contacts-grid">
          <div>
            <div className="info-block">
              <h4>📍 Адреса</h4>
              <p>
                <strong>вул. Шевченка, 42, Дніпро</strong>
              </p>
              <p>Район: Таромське</p>
            </div>

            <div className="info-block">
              <h4>📞 Телефони</h4>
              <a href="tel:+380675287632">
                <strong>+38 (067) 528-76-32</strong>
              </a>
              <a href="tel:+380932864726">
                <strong>+38 (093) 286-47-26</strong>
              </a>
            </div>

            <div className="info-block">
              <h4>⏰ Режим роботи</h4>
              <table className="hours-table">
                <tbody>
                  {[
                    ["Понеділок – П'ятниця", "11:00 – 23:00"],
                    ["Субота", "11:00 – 00:00"],
                    ["Неділя", "12:00 – 23:00"],
                  ].map(([d, h]) => (
                    <tr key={d}>
                      <td>{d}</td>
                      <td>{h}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="info-block">
              <h4>📧 Email</h4>
              <a href="mailto:info@kazbek.cafe">info@kazbek.cafe</a>
            </div>
          </div>

          <div className="map-wrap">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2647.335818016541!2d34.79307707543421 !3d48.43089423069704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dbe7b53333479b%3A0xfe 53c26631557e9a!2z0YPQuy4g0KjQtdCy0YfQtdC90LrQviwgNDIsINCU0L3QtdC_0YAsINCU0L3QtdC_0YDQvtC_0LXRgtG A0L7QstGB0LrQsNGPINC-0LHQu9Cw0YHRgtGMLCA0OTAwMA!5e0!3m2!1sru!2sua!4v1776344846294!5m2!1sru!2sua"
              allowfullscreen=""
              loading="lazy"
              title="Мапа кафе Казбек"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
