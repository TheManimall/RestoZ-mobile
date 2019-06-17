export const required = value => value ? undefined : '* Поле повинно бути заповненим';
  
const maxLength = max => value =>
value && value.length > max ? `Кількість символів не має перевищувати ${max}` : undefined

const minValue = min => value =>
  value && value < min ? `Must be at least ${min}` : undefined

export const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
  'Не вірно вказаний адрес електронної пошти' : undefined

export const maxLength15 = maxLength(15)
  
export const minValue6 = minValue(6)