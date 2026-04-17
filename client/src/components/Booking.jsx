import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createBooking } from "../api";
import { bookingSchema } from "../validationSchemas";
import styles from "./Booking.module.css";

const TIMES = [
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00",
  "19:00",
  "20:00",
  "21:00",
  "22:00",
];

export default function Booking() {
  const [status, setStatus] = useState(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (status === "success") {
      const timer = setTimeout(() => {
        setStatus(null);
        setMessage("");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      name: "",
      phone: "",
      date: "",
      time: "12:00",
      guests: "2",
      comment: "",
    },
  });

  const onSubmit = async (data) => {
    setStatus(null);

    try {
      const validatedData = {
        ...data,
        guests: Number(data.guests),
      };

      await createBooking(validatedData);
      setStatus("success");
      setMessage(
        "Ваш стіл заброньований! Ми зв'яжемося з вами для підтвердження.",
      );
      reset();
    } catch (err) {
      setStatus("error");
      setMessage(
        err.message ||
          "Сталася помилка. Спробуйте ще раз або зателефонуйте нам.",
      );
    }
  };

  return (
    <section id="booking">
      <div className="container">
        <div className="booking-grid">
          <div>
            <p className="section-label">Резервація</p>
            <h2 className="section-title">Забронювати стіл</h2>
            <div className="divider" />
            <p style={{ color: "var(--muted)", marginBottom: "1rem" }}>
              Зарезервуйте стіл онлайн - ми підготуємо все до вашого приходу.
              Для великих компаній телефонуйте безпосередньо.
            </p>
            <p style={{ color: "var(--gold)", fontStyle: "italic" }}>
              «Гість у будинок — радість у будинок»
            </p>
          </div>

          <form className="booking-form" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-row">
              <div className="form-group">
                <label>Ваше ім'я *</label>
                <input
                  {...register("name")}
                  placeholder="Іван Іванов"
                  className={errors.name ? styles.inputError : ""}
                />
                {errors.name && (
                  <span className={styles.fieldError}>
                    {errors.name.message}
                  </span>
                )}
              </div>
              <div className="form-group">
                <label>Телефон *</label>
                <input
                  {...register("phone")}
                  type="tel"
                  placeholder="+38 (0XX) XXX-XX-XX"
                  className={errors.phone ? styles.inputError : ""}
                />
                {errors.phone && (
                  <span className={styles.fieldError}>
                    {errors.phone.message}
                  </span>
                )}
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Дата *</label>
                <input
                  {...register("date")}
                  type="date"
                  min={new Date().toISOString().split("T")[0]}
                  className={errors.date ? styles.inputError : ""}
                />
                {errors.date && (
                  <span className={styles.fieldError}>
                    {errors.date.message}
                  </span>
                )}
              </div>
              <div className="form-group">
                <label>Час *</label>
                <select
                  {...register("time")}
                  className={errors.time ? styles.inputError : ""}
                >
                  {TIMES.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
                {errors.time && (
                  <span className={styles.fieldError}>
                    {errors.time.message}
                  </span>
                )}
              </div>
            </div>
            <div className="form-group">
              <label>Кількість гостей *</label>
              <select
                {...register("guests")}
                className={errors.guests ? styles.inputError : ""}
              >
                {[1, 2, 3, 4, 5, 6, 7, 8, 10, 12, 15, 20].map((n) => (
                  <option key={n} value={n}>
                    {n} {n === 1 ? "гість" : n < 5 ? "гостя" : "гостей"}
                  </option>
                ))}
              </select>
              {errors.guests && (
                <span className={styles.fieldError}>
                  {errors.guests.message}
                </span>
              )}
            </div>
            <div className="form-group">
              <label>Коментар</label>
              <textarea
                {...register("comment")}
                placeholder="Особливі побажання, привід, алергії..."
                className={errors.comment ? styles.inputError : ""}
              />
              {errors.comment && (
                <span className={styles.fieldError}>
                  {errors.comment.message}
                </span>
              )}
            </div>

            {status === "success" && (
              <div className={styles.formSuccess}>✅ {message}</div>
            )}
            {status === "error" && (
              <div className={styles.formError}>❌ {message}</div>
            )}

            <button className="btn" type="submit" disabled={isSubmitting}>
              <span>{isSubmitting ? "Відправлення..." : "Забронювати стіл"}</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
