import { Link } from 'react-router-dom';

export const Error = ({ error }) => {
  let errorMsg;
  switch (error) {
    case '429':
      errorMsg = 'Too many requests made. Please wait a few moments before trying again.';
      break;
    case '404':
      errorMsg = 'We\'re sorry, but the page you are looking for does not exist.';
      break;
    default:
      errorMsg = 'We are currently experiencing server issues. Please try again later!';
  }

  return (
    <>
      <h3>{errorMsg}</h3>
      <Link to='/home' className='home-link'>Back to Home</Link>
    </>
  )
}