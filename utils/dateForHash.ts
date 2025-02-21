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
