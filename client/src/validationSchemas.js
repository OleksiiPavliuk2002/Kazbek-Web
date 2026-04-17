import { z } from 'zod';

const VALID_TIMES = ['11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00','19:00','20:00','21:00','22:00'];

export const bookingSchema = z.object({
  name: z
    .string()
    .min(2, 'Ім\'я повинно бути не менше 2 символів')
    .max(100, 'Ім\'я не повинно бути довшим за 100 символів'),
  
  phone: z
    .string()
    .min(5, 'Номер телефону повинен містити мінімум 5 символів')
    .regex(/^[+\d\s\-()]*$/, 'Номер телефону містить недопустимі символи')
    .refine(val => val.replace(/\D/g, '').length >= 5, 'Номер телефону повинен містити мінімум 5 цифр'),
  
  date: z
    .string()
    .refine(
      val => {
        const selectedDate = new Date(val);
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        return selectedDate >= today;
      },
      'Дата повинна бути сьогодні або в майбутньому'
    ),
  
  time: z
    .string()
    .refine(val => VALID_TIMES.includes(val), 'Виберіть коректний час'),
  
  guests: z
    .string()
    .refine(val => !isNaN(Number(val)) && Number(val) >= 1 && Number(val) <= 20, 'Виберіть кількість гостей від 1 до 20'),
  
  comment: z
    .string()
    .max(500, 'Коментар не повинен бути довшим за 500 символів')
    .optional()
    .default(''),
});