import { useState } from "react"
import logo from "../images/logo.svg"


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(true)
  const handleOpen = ()=>{
    if (isOpen===true) {
      setIsOpen(false)
    } else {
      setIsOpen(true)
    }
  }
  return (
    <>
      <header className="header space">

        <div className="navbar">
          <img src={logo} alt="" />
          {isOpen &&(
            <div className="nav-wrapper">
              <nav>
                <ul>
                  <li><button>Features</button></li>
                  <li><button>Pricing</button></li>
                  <li><button>Resources</button></li>

                </ul>
              </nav>


              <ul className="login-btns">
                <li><button>Login</button></li>
                <li><button className="btn sign">Sign Up</button></li>
              </ul>
            </div>)}
          <div class="hamburger" onClick={handleOpen}>
            <span></span>
            <span></span>
            <span></span>
          </div>



        </div>


      </header>
    </>
  )
}
