
import{useParams , useNavigate} from "react-router-dom"


function ShowProducts() {


  const {id} = useParams()
  const abc  = () => { if( +id === 404){console.log("hi hello")
    return <h1> Page not found </h1> } 
  }

  const navigate = useNavigate()

const redirectoringToHome = () => { navigate("/") } 
const redirectoringToContact = () => { navigate("/contact") } 
const redirectoringToAbout = () => { navigate("/about") } 
  return (
  <>
{abc()}
  <h1>Hello im a product</h1>
  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis iusto praesentium labore necessitatibus nam mollitia voluptate cum repellat at ipsam assumenda voluptatibus ut, quisquam architecto ratione quis.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis iusto praesentium labore necessitatibus nam mollitia voluptate cum repellat at ipsam assumenda voluptatibus ut, quisquam architecto ratione quis.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis iusto praesentium labore necessitatibus nam mollitia voluptate cum repellat at ipsam assumenda voluptatibus ut, quisquam architecto ratione quis.</p>
  


<button className="btn btn-danger" onClick={redirectoringToHome}>Home</button>
<button className="btn btn-info" onClick={redirectoringToContact}>Contact</button>
<button className="btn btn-success" onClick={redirectoringToAbout}>About</button>


  </>
  )
}

export default ShowProducts