/**
   * Format a date into a 24-hour time string with hours and minutes.
   * @param {string|number|Date} date - Date input (Date object, ISO string, or timestamp) to format.
   * @returns {string} Time formatted as "HH:MM" using a 24-hour clock.
   */
  export function formatMessageTime(date) {
    return new Date(date).toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
  }