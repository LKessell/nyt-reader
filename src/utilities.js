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

export const headings = {
  arts: 'Arts', 
  automobiles: 'Automobiles', 
  books: 'Books', 
  business: 'Business', 
  fashion: 'Fashion', 
  food: 'Food', 
  health: 'Health', 
  insider: 'Insider', 
  magazine: 'Magazine', 
  movies: 'Movies', 
  nyregion: 'New York', 
  obituaries: 'Obituaries', 
  opinion: 'Opinion', 
  politics: 'Politics', 
  realestate: 'Real Estate', 
  science: 'Science', 
  sports: 'Sports', 
  sundayreview: 'Sunday Review', 
  technology: 'Technology', 
  theater: 'Theater', 
  't-magazine': 'Magazine', 
  travel: 'Travel', 
  upshot: 'Upshot', 
  us: 'U.S.', 
  world: 'World',
};