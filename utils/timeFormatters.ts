export function minutesToClockString(minute: number): string {
  const hours = Math.floor(minute / 60) % 24;
  const minutes = minute % 60;

  return `${String(hours).length < 2 ? `0${hours}` : hours}:${String(minutes).length < 2 ? `0${minutes}` : minutes}`;
}

function formatToISOWithOffset(date: Date, offsetHours: number) {
  const offsetMillis = offsetHours * 60 * 60 * 1000;
  const adjustedDate = new Date(date.getTime() + offsetMillis);

  const year = adjustedDate.getUTCFullYear();
  const month = String(adjustedDate.getUTCMonth() + 1).padStart(2, '0');
  const day = String(adjustedDate.getUTCDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
}

export function getDateIsoString(day: number = 0): string {
  const now = new Date();
  now.setDate(now.getDate() + day);

  return formatToISOWithOffset(now, 5);
}

/*
export function getCurrentDateForHash() {
  const now = new Date();
  const year = now.getFullYear().toString().slice(2);
  const month = (now.getMonth() + 1).toString().padStart(2, '0');
  const day = now.getDate().toString().padStart(2, '0');
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');

  return `${seconds[1]}${year[0]}${seconds[0]}${year[1]}${minutes[1]}${month[0]}${minutes[0]}${month[1]}${hours[1]}${day[0]}${hours[0]}${day[1]}`;
}
*/
