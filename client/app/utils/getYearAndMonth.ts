export const getMonthAndYear = (dateString: string): string => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  return `${year}-${month}`;
};

export const getDayMonthAndYear = (dateString: string): string => {
  if (dateString) {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    return `${year}-${month}-${day}`;
  } else {
    return "";
  }
};

export const getTimeFromDate = (timeDate: string) => {
  const date = new Date(timeDate);
  return date.toTimeString().slice(0, 5);
};
