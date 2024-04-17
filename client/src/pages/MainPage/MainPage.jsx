import { Link } from 'react-router-dom'
import "./test.css";
export default function MainPage() {
  return (
    <>
      <Link to="/create-user">
        <p>User create form</p>
      </Link>
      <Link to="/users">
        <p>User list</p>
      </Link>
    </>
  )
}
