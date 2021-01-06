export function getActualDate() {
  const actualDate = new Date();

  const date = `${actualDate.getFullYear()}-${actualDate.getMonth() + 1}-${actualDate.getDay()}T${actualDate.getHours()}:${actualDate.getMinutes()}:${actualDate.getSeconds()}.000Z`

  return date;
}
