const BASE = '/api';

export const fetchMenu = async (type = '') => {
  const url = type ? `${BASE}/menu?type=${encodeURIComponent(type)}` : `${BASE}/menu`;
  const res = await fetch(url);
  if (!res.ok) throw new Error('Помилка завантаження меню');
  const data = await res.json();
  return data.data;
};

export const createBooking = async (payload) => {
  const res = await fetch(`${BASE}/bookings`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.message || 'Помилка бронювання');
  return data;
};
