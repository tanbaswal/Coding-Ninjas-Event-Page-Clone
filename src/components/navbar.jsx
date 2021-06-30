import React,{useState} from 'react';
import Courses from'./navbar_components/courses.jsx'
import Practice from'./navbar_components/practice.jsx'
import LoginPopup from'./navbar_components/login-popup.jsx'
import MobileNav from './mobile_navbar.jsx'
function Navbar() {

  const[logpop,setlogpop]=useState(false);
  const[show,setshow]=useState(false)

  function handleShow()
  {
    if(show === true)
    {
      document.getElementById("stick-1").classList.remove("open")
      document.getElementById("stick-2").classList.remove("open")
      document.getElementById("stick-3").classList.remove("open")
      document.getElementById("stick-1").classList.add("Close")
      document.getElementById("stick-2").classList.add("Close")
      document.getElementById("stick-3").classList.add("Close")
      setshow(false)
    }

    else
    {
      document.getElementById("stick-1").classList.remove("Close")
      document.getElementById("stick-2").classList.remove("Close")
      document.getElementById("stick-3").classList.remove("Close")
      document.getElementById("stick-1").classList.add("open")
      document.getElementById("stick-2").classList.add("open")
      document.getElementById("stick-3").classList.add("open")
      setshow(true)
    }
  }

  return (
    <div>
    <main>
    <div  className="landing-header">
    <div  className="navbar">
    <div className="header-container">
    <div _ngcontent-serverapp-c98="" className="hamburger-container" onClick={handleShow}>
        <div _ngcontent-serverapp-c98="" id="stick-1" className="stick stick-1 Close"></div>
        <div _ngcontent-serverapp-c98="" id="stick-2" className="stick stick-2 Close"></div>
        <div _ngcontent-serverapp-c98="" id="stick-3" className="stick stick-3 Close"></div>
    </div>
    <div className="header-content middle-header">
    <div className="main-logo">
    <a className="passiveLink active" href="https://www.codingninjas.com/"><img src="./images/CNLOGO.svg" alt="Coding Ninjas"/></a>
    </div>
    <ul className="menu-items">
      <a className="passiveLink active" href="https://www.codingninjas.com/"><li className="menu-item">Home</li></a>
      <Courses />
      <Practice />
      <a className="passiveLink active" href="/"><li className="menu-item">Events</li></a>
      <a className="passiveLink" href="https://campus.codingninjas.com/" target="_blank" rel="noopener"><li className="menu-item">Campus Ninja</li></a>
      <a className="passiveLink" href="https://codingninjas.com/blog" target="_blank" rel="noopener"><li className="menu-item">Blog</li></a>
      <a className="passiveLink" href="https://careercamp.codingninjas.com/?utm_source=codingninjas&utm_medium=top_navigation&utm_campaign=landing_header" target="_blank" rel="noopener"><li className="menu-item"><img className="nav-image" src="./images/career_camp.svg" alt="Ninjas Career Camp" /></li></a>
    </ul>
    </div>
    <div className="header-content right-content">
    <div className="right-content-div" style={{display: "flex"}}>
    <div className="classroom_container">
      <a className="passiveLink" href="https://classroom.codingninjas.com/app/classroom" target="_blank" rel="noopener">
      <div className="classroom_button">My Classroom</div>
      </a>
    </div>
    </div>
    <div className="login_button" onClick={() => setlogpop(true)}>Login</div>
    </div>
    </div>
    <MobileNav dropstate={show}/>
    </div>
    </div>
    </main>

    <LoginPopup trigger={logpop} setTrigger={setlogpop}/>
    </div>


  );




}

export default Navbar;
