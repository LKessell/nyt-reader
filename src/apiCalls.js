const API_KEY = process.env.REACT_APP_API_KEY;

export const fetchArticles = () => {
  return fetch(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${API_KEY}`)
    .then(response => response.json())
}