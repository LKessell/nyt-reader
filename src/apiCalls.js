const API_KEY = process.env.REACT_APP_API_KEY;

export const fetchArticles = (type) => {
  return fetch(`https://api.nytimes.com/svc/topstories/v2/${type}.json?api-key=${API_KEY}`)
    .then(response => response.json())
}