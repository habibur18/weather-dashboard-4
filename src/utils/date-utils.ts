function getFormattedDate(value: number, type: string, inMS: boolean): string {
  if (!type) return value.toString();
  if (!inMS) {
    value = value * 1000;
  }
  const date = new Date(value);
  let options: Intl.DateTimeFormatOptions | undefined; // Specify the type explicitly

  if (type === "date") {
    options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    } as Intl.DateTimeFormatOptions; // Type assertion here
  } else if (type === "time") {
    options = {
      hour: "numeric",
      minute: "numeric",
    } as Intl.DateTimeFormatOptions; // Type assertion here
  }

  return new Intl.DateTimeFormat("en-US", options).format(date);
}

export { getFormattedDate };
