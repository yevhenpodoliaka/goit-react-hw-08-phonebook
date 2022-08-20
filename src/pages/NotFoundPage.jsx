import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <main>
      <h1>404 NotFound !!!</h1>
      <Link to={'/'}>Go Home Page</Link>
    </main>
  );
}
