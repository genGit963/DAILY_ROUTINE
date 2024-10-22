// Date Utilities

/**
 * Get the current full date as a formatted string.
 * @returns {string} - Full date in the format: "Weekday, Month Day, Year HH:MM:SS"
 */
export const getFullDate = (): string => {
  const now = new Date();

  const options: Intl.DateTimeFormatOptions = {
    weekday: "long", // Full name of the weekday (e.g., "Wednesday")
    year: "numeric", // Four-digit year (e.g., "2024")
    month: "long", // Full name of the month (e.g., "October")
    day: "numeric", // Day of the month (e.g., "23")
    hour: "2-digit", // Hour in 12-hour format with leading zero (e.g., "07")
    minute: "2-digit", // Minute with leading zero (e.g., "30")
    second: "2-digit", // Second with leading zero (e.g., "15")
    hour12: true, // 12-hour time format (AM/PM)
  };

  // Use toLocaleDateString to format the date and time with the given options.
  return now.toLocaleDateString("en-US", options);
};

/**
 * Get today's date in YYYY-MM-DD format.
 * @returns {string} - Today's date as a string in the format YYYY-MM-DD.
 */
export const getTodayDate = (): string => {
  const today = new Date();
  return today.toISOString().split("T")[0]; // Extract date part from ISO string
};

/**
 * Get today's weekday as a string.
 * @returns {string} - Today's weekday (e.g., "Monday").
 */
export const getTodayWeekday = (): string => {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const today = new Date();
  return daysOfWeek[today.getDay()];
};

/**
 * Get the current year.
 * @returns {number} - The current year as a number (e.g., 2024).
 */
export const getCurrentYear = (): number => {
  return new Date().getFullYear();
};

/**
 * Get the current month as a number (1-12).
 * @returns {number} - The current month as a number (e.g., 10 for October).
 */
export const getCurrentMonth = (): number => {
  return new Date().getMonth() + 1; // getMonth() returns 0-11, so we add 1
};

/**
 * Get the current month as a formatted string.
 * @returns {string} - The full name of the current month (e.g., "October").
 */
export const getCurrentMonthName = (): string => {
  const now = new Date();

  const options: Intl.DateTimeFormatOptions = {
    month: "long", // Full name of the month (e.g., "October")
  };

  return now.toLocaleDateString("en-US", options); // Returns only the month name
};

/**
 * Get the current day of the month.
 * @returns {number} - The current day of the month (e.g., 23).
 */
export const getCurrentDay = (): number => {
  return new Date().getDate();
};

/**
 * Check if a given year is a leap year.
 * @param {number} year - The year to check.
 * @returns {boolean} - True if the year is a leap year, false otherwise.
 */
export const isLeapYear = (year: number): boolean => {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
};

/**
 * Get the number of days in a given month.
 * @param {number} year - The year of the month.
 * @param {number} month - The month (1-12).
 * @returns {number} - The number of days in the month.
 */
export const getDaysInMonth = (year: number, month: number): number => {
  return new Date(year, month, 0).getDate(); // new Date(year, month, 0) gives the last day of the previous month
};

/**
 * Format a Date object into a readable string.
 * @param {Date} date - The Date object to format.
 * @param {string} locale - The locale string (e.g., "en-US", "fr-FR").
 * @param {Intl.DateTimeFormatOptions} options - Formatting options for date.
 * @returns {string} - The formatted date string.
 */
export const formatDate = (
  date: Date,
  locale: string = "en-US",
  options?: Intl.DateTimeFormatOptions
): string => {
  return date.toLocaleDateString(locale, options);
};

/**
 * Get the difference in days between two dates.
 * @param {Date} date1 - The first date.
 * @param {Date} date2 - The second date.
 * @returns {number} - The number of days between the two dates.
 */
export const getDaysBetweenDates = (date1: Date, date2: Date): number => {
  const diffInTime = date2.getTime() - date1.getTime();
  return Math.floor(diffInTime / (1000 * 60 * 60 * 24)); // Convert time difference from milliseconds to days
};

/**
 * Add or subtract a number of days to a given date.
 * @param {Date} date - The original date.
 * @param {number} days - The number of days to add (can be negative).
 * @returns {Date} - The new date with the days added/subtracted.
 */
export const addDaysToDate = (date: Date, days: number): Date => {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
};

/**
 * Get the start of the day (00:00:00) for a given date.
 * @param {Date} date - The original date.
 * @returns {Date} - A new Date object at the start of the day.
 */
export const getStartOfDay = (date: Date): Date => {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
};

/**
 * Get the end of the day (23:59:59) for a given date.
 * @param {Date} date - The original date.
 * @returns {Date} - A new Date object at the end of the day.
 */
export const getEndOfDay = (date: Date): Date => {
  return new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
    23,
    59,
    59,
    999
  );
};

/**
 * Get the ISO week number for a given date.
 * @param {Date} date - The original date.
 * @returns {number} - The ISO week number (1-53).
 */
export const getISOWeekNumber = (date: Date): number => {
  const tempDate = new Date(date);
  tempDate.setUTCDate(tempDate.getUTCDate() + 4 - (tempDate.getUTCDay() || 7)); // Set to nearest Thursday
  const yearStart = new Date(Date.UTC(tempDate.getUTCFullYear(), 0, 1));
  const weekNo = Math.ceil(
    ((tempDate.getTime() - yearStart.getTime()) / 86400000 + 1) / 7
  );
  return weekNo;
};

/**
 * Get the relative time from now (e.g., "2 days ago", "in 3 hours").
 * @param {Date} date - The original date.
 * @returns {string} - A human-readable relative time string.
 */
export const getRelativeTime = (date: Date): string => {
  const formatter = new Intl.RelativeTimeFormat("en", { numeric: "auto" });
  const diffInSeconds = (date.getTime() - new Date().getTime()) / 1000;

  const timeUnits: { unit: Intl.RelativeTimeFormatUnit; seconds: number }[] = [
    { unit: "year", seconds: 60 * 60 * 24 * 365 },
    { unit: "month", seconds: 60 * 60 * 24 * 30 },
    { unit: "day", seconds: 60 * 60 * 24 },
    { unit: "hour", seconds: 60 * 60 },
    { unit: "minute", seconds: 60 },
    { unit: "second", seconds: 1 },
  ];

  for (const { unit, seconds } of timeUnits) {
    const delta = diffInSeconds / seconds;
    if (Math.abs(delta) >= 1) {
      return formatter.format(Math.round(delta), unit);
    }
  }
  return "just now";
};
