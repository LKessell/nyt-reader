export const getDateString = (dateArg) => {
  let date;
  if (!dateArg) {
    date = new Date();
  } else {
    date = new Date(dateArg);
  }
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
	const month = months[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();

  return `${month} ${day}, ${year}`;
}