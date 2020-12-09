export const required = (value) => (value ? undefined : 'Required');
export const phoneNumber = (value) =>
  (value && /\./.test(value)) || value.length < 10
    ? 'Invalid phone number, must be 10 digits'
    : undefined;
export const minLength = (min) => (value) =>
  value && value.length < min ? `Must be at least ${min}` : undefined;
export const maxLength = (max) => (value) =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined;
export const number = (value) =>
  value && Number.isNaN(Number(value)) ? 'Must be a number' : undefined;
export const email = (value) =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,5}$/i.test(value)
    ? 'Invalid email address'
    : undefined;
