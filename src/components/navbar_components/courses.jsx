import React from 'react';


function Courses() {
  return (

    <li className="menu-item dropdown">
    <a className="passiveLink" href="https://www.codingninjas.com/courses">Courses<div className="icon"><img  src="./images/angle-down-solid-5030.svg" alt="dropdown-icon"/></div></a>
    <ul className="courses-dropdown-items" style={{visibility: "visible"}}>
    <div className="navigation">
    <p className="header-section-title">Foundation, Algorithmic & Advanced</p>
    <hr></hr>

    <a className="passiveLink" href="https://www.codingninjas.com/courses/onlline-c-plus-plus-course"><li> C++ Foundation with Data Structures </li></a>
    <a className="passiveLink" href="https://www.codingninjas.com/courses/online-java-course"><li> Java Foundation and Data Structures </li></a>
    <a className="passiveLink" href="https://www.codingninjas.com/courses/operating-system"><li> Interview Preparation Course </li></a>
    <a className="passiveLink" href="https://www.codingninjas.com/courses/online-interview-preparation"><li> Grokking the Operating Systems Interview </li></a>
    <a className="passiveLink" href="https://www.codingninjas.com/courses/online-competitive-programming-course"><li> Competitive Programming Course </li></a>
    <a className="passiveLink" href="https://www.codingninjas.com/courses/online-python-course"><li> Python Foundation with Data Structures </li></a>
    <a className="passiveLink" href="https://www.codingninjas.com/courses/online-aptitude-preparation"><li> Aptitude Preparation Course </li></a>
    </div>
    <div className="navigation">
    <p className="header-section-title"> Data & Development </p>
    <hr></hr>
    <a className="passiveLink" href="https://www.codingninjas.com/courses/online-machine-learning-course"><li> Machine Learning and Deep Learning Course </li></a>
    <a className="passiveLink" href="https://www.codingninjas.com/courses/online-web-dev-with-react"><li> Advanced Front-End Web Development with React </li></a>
    <a className="passiveLink" href="https://www.codingninjas.com/courses/online-full-stack-node-js-web-dev-course"><li> Full Stack Web Development </li></a>
    <a className="passiveLink" href="https://www.codingninjas.com/courses/online-data-science-course"><li> Data Science & Machine Learning Complete </li></a>
    <a className="passiveLink" href="https://www.codingninjas.com/courses/online-android-Development-kotlin"><li> Android Development with Kotlin </li></a>
    </div>
    <div className="navigation">
    <p className="header-section-title"> Career Track <span className="career-track-cashback-prompt"> 25% Cashback </span></p>
    <hr></hr>
    <a className="passiveLink" href="https://www.codingninjas.com/courses/online-competitive-programming-track"><li> Ninja Competitive Programmer Track </li></a>
    <a className="passiveLink" href="https://www.codingninjas.com/courses/online-android-development-career-track"><li> Ninja Android Developer Career Track </li></a>
    <a className="passiveLink" href="https://www.codingninjas.com/courses/ninja-web-developer-career-track-mern-stack"><li> Ninja Web Developer Career Track - NodeJS & ReactJS </li></a>
    <a className="passiveLink" href="https://www.codingninjas.com/courses/web-developer-career-track"><li> Ninja Web Developer Career Track - NodeJS </li></a>
    <a className="passiveLink" href="https://www.codingninjas.com/courses/data-Scientist-career-track"><li> Ninja Data Scientist Career Track </li></a>
    <a className="passiveLink" href="https://www.codingninjas.com/courses/machine-learning-engineer-career-track"><li> Ninja Machine Learning Engineer Career Track </li></a>
    </div>
    <div className="navigation">
    <p className="header-section-title premium-course-title"> Premium Course </p>
    <a className="passiveLink" href="https://www.codingninjas.com/courses/premium-data-science-course"><li> Premium Data Science Course </li></a>
    <a className="passiveLink" href="https://www.codingninjas.com/courses/premium-android-app-development-course"><li> Premium Android App Development </li></a>
    <a className="passiveLink" href="https://www.codingninjas.com/courses/premium-foundation-course"><li> Premium Data Structures and Algoritms [C++/Java/Python] </li></a>
    <a className="passiveLink" href="https://www.codingninjas.com/courses/premium-full-stack-web-development-course"><li> Premium Full Stack Web Development </li></a>
    <a className="passiveLink" href="https://www.codingninjas.com/courses/premium-machine-learning-course"><li> Premium Machine Learning Course </li></a>
    <a className="passiveLink" href="https://www.codingninjas.com/courses/premium-competitive-course"><li> Premium Competitive Programming Course </li></a>
    </div>
    </ul>
    </li>

  );
}

export default Courses;
