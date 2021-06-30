import React from 'react';


function Practice() {
  return (
  <li id="codezen-new" className="passiveLink">
  <div id="nav-content-container">
  <div id="navigator-title">Practice</div>
  <div className="new-icon-container"><img  className="new-icon-container-new-tag" height="19px" width="35px" src="./images/new-tag.svg" alt="new tag"/></div>
  <div id="dropdown-arrow"><img  src="./images/angle-down-solid-5030.svg" alt="dropdown-icon"/></div>
  </div>
  <div id="codezen-dropdown-container">
  <a  href="https://www.codingninjas.com/codestudio" target="_blank" rel="noopener" className="dropdown-item-heading-container dropdown-item">
  <div className="dropdown-heading-box">
  <div className="dropdown-heading-title">CodeStudio</div>
  <div className="new-icon-container"><img className="new-icon-container-new-tag" src="./images/new-tag.svg" alt="new tag"/></div>
  <img className="bottom-border"  src="./images/bottom-border.svg" alt="bottom-border"/>
  </div>
  </a>
  <a href="https://www.codingninjas.com/codestudio/problems" className="dropdown-new-subitem-container dropdown-item">
    <div className="dropdown-sub-heading-title"> Code Problems</div>
  </a>
  <a  href="https://www.codingninjas.com/codestudio/interview-experiences" className="dropdown-new-subitem-container dropdown-item">
    <div className="dropdown-sub-heading-title"> Interview Experiences </div>
  </a>
  <a  href="https://www.codingninjas.com/codestudio/guided-paths" className="dropdown-new-subitem-container dropdown-item">
    <div className="dropdown-sub-heading-title"> Guided Paths</div>
    <div className="new-icon-container"><img  className="new-icon-container-new-tag" src="./images/new-tag.svg" alt="new tag"/></div>
  </a>
  <a  href="https://codezen.codingninjas.com/dashboard" target="_blank" rel="noopener" className="dropdown-item-heading-container dropdown-item">
  <div className="dropdown-heading-box">
  <div className="dropdown-heading-title">CodeZen</div>
  <img className="bottom-border"  src="./images/bottom-border.svg" alt="bottom-border"/>
  </div>
  </a>
  <a  href="https://codezen.codingninjas.com/dashboard" className="dropdown-new-subitem-container dropdown-item">
  <div className="dropdown-sub-heading-title"> Dashboard</div>
  </a>
  <a  href="https://codezen.codingninjas.com/problem-of-the-day" className="dropdown-new-subitem-container dropdown-item">
    <div className="dropdown-sub-heading-title"> Problem of the day</div>
  </a>
  <a  href="https://codezen.codingninjas.com/practice" className="dropdown-new-subitem-container dropdown-item">
  <div className="dropdown-sub-heading-title"> Practice</div>
  </a>
  <a  href="https://classroom.codingninjas.com/app/tests" className="dropdown-new-subitem-container dropdown-item">
  <div className="dropdown-sub-heading-title"> Tests</div>
  </a>
  </div>
  </li>
  );
}

  export default Practice;
