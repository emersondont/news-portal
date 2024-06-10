export function differenceBetweenDates(endDate: string): string {
  const start = new Date(endDate);
  const end = new Date();

  const differenceInMs = end.getTime() - start.getTime();
  const millisecondsPerHour = 60 * 60 * 1000;
  const differenceInHours = differenceInMs / millisecondsPerHour;
  const differenceInDays = differenceInHours / 24;

  if (differenceInHours < 24) {
    const roundedHours = Math.round(differenceInHours);
    return `${roundedHours} Hour${roundedHours !== 1 ? 's' : ''} Ago`;
  } else {
    const roundedDays = Math.round(differenceInDays);
    return `${roundedDays} Day${roundedDays !== 1 ? 's' : ''} Ago`;
  }
}