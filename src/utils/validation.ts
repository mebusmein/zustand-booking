export const validateProperty = (property: string | null): boolean => {
  return !!property;
};

export const validateRoom = (room: string | null): boolean => {
  return !!room;
};

export const validateDates = (checkIn: string, checkOut: string): boolean => {
  if (!checkIn || !checkOut) return false;

  const checkInDate = new Date(checkIn);
  const checkOutDate = new Date(checkOut);
  const today = new Date();

  // Set time to midnight for all dates to compare only the date component
  checkInDate.setHours(0, 0, 0, 0);
  checkOutDate.setHours(0, 0, 0, 0);
  today.setHours(0, 0, 0, 0);

  return checkInDate >= today && checkOutDate > checkInDate;
};

export const validateGuests = (adults: string, children: string): boolean => {
  const adultsNum = parseInt(adults);
  const childrenNum = parseInt(children);

  return adultsNum >= 1 && adultsNum <= 4 && childrenNum >= 0 && childrenNum <= 3;
};

export const validatePayment = (cardNumber: string, expiryDate: string, cvv: string): boolean => {
  // Basic validation for card number (16 digits)
  const cardNumberValid = /^\d{16}$/.test(cardNumber.replace(/\s/g, ''));

  // Basic validation for expiry date (MM/YY format)
  const expiryDateValid = /^(0[1-9]|1[0-2])\/([0-9]{2})$/.test(expiryDate);

  // Basic validation for CVV (3 or 4 digits)
  const cvvValid = /^\d{3,4}$/.test(cvv);

  return cardNumberValid && expiryDateValid && cvvValid;
};
