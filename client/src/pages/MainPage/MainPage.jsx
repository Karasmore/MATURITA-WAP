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

/*<>
<div class = "box">
  <div class = "wrap">
<h1><p>Main Page</p></h1> 

<div class = "row">
<div class ="teacher"> <button><Link to={"/createteacher"}>
   <p>Create teacher</p>
  
  </Link>
  </button>
  <button> <Link to={"/teachers"}>
    <p>Teachers</p>
   
  </Link>
  </button>
 


  <button>   <Link to={"/createstudent"}>
    <p>Create student</p>
  
  </Link>
  </button>
  <button>   <Link to={"/students"}>
    <p>Students</p>
  
  </Link>
  </button>
  </div> 
  </div>
  </div>
  </div>
</>
*/