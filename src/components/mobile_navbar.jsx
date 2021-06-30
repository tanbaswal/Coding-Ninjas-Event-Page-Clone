import React,{useState} from 'react';




function MobileNav(props) {

  const[dropcourse,setdropcourse]=useState(false)
  const[dropprac,setdropprac]=useState(false)

  function handledrop()
  {
    if(dropcourse === true)
    {
      document.getElementById("icon-mobcourse").classList.remove("vertical");
      setdropcourse(false)
      document.getElementById("dropdown-contents-mobile").style.display="none";
    }
    else
    {
      document.getElementById("icon-mobcourse").classList.add("vertical");
      document.getElementById("dropdown-contents-mobile").style.display="block";
      setdropcourse(true)
    }


  }

  function handledropPrac()
  {
    if(dropprac === true)
    {
      document.getElementById("drop-prac-mob").classList.remove("vertical_drop")
      setdropprac(false)
      document.getElementById("mobile-expander").style.display="none";
    }
    else
    {
      document.getElementById("drop-prac-mob").classList.add("vertical_drop");
      document.getElementById("mobile-expander").style.display="block";
      setdropprac(true)
    }


  }

  return (props.dropstate !== false) && (
    <div _ngcontent-serverapp-c98="" className="responsive-drawer animated fadeIn">
    <div _ngcontent-serverapp-c98="" className="responsive-drawer-content">
        <div _ngcontent-serverapp-c98="">
            <div _ngcontent-serverapp-c98="" className="tab-title">Home</div>
            <landing-drawer-mobile-dropdown _ngcontent-serverapp-c98="" title="Courses" _nghost-serverapp-c97="">
                <li _ngcontent-serverapp-c97="" className="mobile-dropdown">
                    <div _ngcontent-serverapp-c97="" id="course" className="tab-title" style={{color: "black"}} onClick={handledrop}> Courses <img _ngcontent-serverapp-c97="" alt="dropdown-icon" id="icon-mobcourse" className="icon" src="./images/angle-down-solid-5030.svg"/></div>
                    <ul _ngcontent-serverapp-c97="" id="dropdown-contents-mobile" className="dropdown-contents-mobile">
                        <landing-drawer-mobile-dropdown-section _ngcontent-serverapp-c97="" _nghost-serverapp-c96="">
                            <p _ngcontent-serverapp-c96="" className="header-section-title">
                                <span _ngcontent-serverapp-c96="">Foundation, Algorithmic & Advanced</span>
                            </p>

                            <landing-drawer-mobile-dropdown-section-item _ngcontent-serverapp-c96="" _nghost-serverapp-c95="">
                                <div _ngcontent-serverapp-c95="" className="dropdown-item-mobile">C++ Foundation with Data Structures</div>
                            </landing-drawer-mobile-dropdown-section-item>
                            <landing-drawer-mobile-dropdown-section-item _ngcontent-serverapp-c96="" _nghost-serverapp-c95="">
                                <div _ngcontent-serverapp-c95="" className="dropdown-item-mobile">JAVA Foundation with Data Structures</div>
                            </landing-drawer-mobile-dropdown-section-item>
                            <landing-drawer-mobile-dropdown-section-item _ngcontent-serverapp-c96="" _nghost-serverapp-c95="">
                                <div _ngcontent-serverapp-c95="" className="dropdown-item-mobile">Interview Preparation Course</div>
                            </landing-drawer-mobile-dropdown-section-item>
                            <landing-drawer-mobile-dropdown-section-item _ngcontent-serverapp-c96="" _nghost-serverapp-c95="">
                                <div _ngcontent-serverapp-c95="" className="dropdown-item-mobile">Grokking the Operating Systems Interview</div>
                            </landing-drawer-mobile-dropdown-section-item>
                            <landing-drawer-mobile-dropdown-section-item _ngcontent-serverapp-c96="" _nghost-serverapp-c95="">
                                <div _ngcontent-serverapp-c95="" className="dropdown-item-mobile">Competitive Programming Course</div>
                            </landing-drawer-mobile-dropdown-section-item>
                            <landing-drawer-mobile-dropdown-section-item _ngcontent-serverapp-c96="" _nghost-serverapp-c95="">
                                <div _ngcontent-serverapp-c95="" className="dropdown-item-mobile">Python Foundation with Data Structures</div>
                            </landing-drawer-mobile-dropdown-section-item>
                            <landing-drawer-mobile-dropdown-section-item _ngcontent-serverapp-c96="" _nghost-serverapp-c95="">
                                <div _ngcontent-serverapp-c95="" className="dropdown-item-mobile">Aptitude Preparation Course</div>
                            </landing-drawer-mobile-dropdown-section-item>

                            <p _ngcontent-serverapp-c96="" className="header-section-title">
                                <span _ngcontent-serverapp-c96="">Data & Development</span>
                            </p>

                            <landing-drawer-mobile-dropdown-section-item _ngcontent-serverapp-c96="" _nghost-serverapp-c95="">
                                <div _ngcontent-serverapp-c95="" className="dropdown-item-mobile">Machine Learning &amp; Deep Learning Course</div>
                            </landing-drawer-mobile-dropdown-section-item>
                            <landing-drawer-mobile-dropdown-section-item _ngcontent-serverapp-c96="" _nghost-serverapp-c95="">
                                <div _ngcontent-serverapp-c95="" className="dropdown-item-mobile">Advanced  Front-End Web Development with React</div>
                            </landing-drawer-mobile-dropdown-section-item>
                            <landing-drawer-mobile-dropdown-section-item _ngcontent-serverapp-c96="" _nghost-serverapp-c95="">
                                <div _ngcontent-serverapp-c95="" className="dropdown-item-mobile">Full Stack Web Development</div>
                            </landing-drawer-mobile-dropdown-section-item>
                            <landing-drawer-mobile-dropdown-section-item _ngcontent-serverapp-c96="" _nghost-serverapp-c95="">
                                <div _ngcontent-serverapp-c95="" className="dropdown-item-mobile">Data Science & Machine Learning Complete</div>
                            </landing-drawer-mobile-dropdown-section-item>
                            <landing-drawer-mobile-dropdown-section-item _ngcontent-serverapp-c96="" _nghost-serverapp-c95="">
                                <div _ngcontent-serverapp-c95="" className="dropdown-item-mobile">Android Development with Kotlin</div>
                            </landing-drawer-mobile-dropdown-section-item>

                            <p _ngcontent-serverapp-c96="" className="header-section-title">
                                <span _ngcontent-serverapp-c96="">Career Track</span>
                                <landing-career-track-cashback-prompt _ngcontent-serverapp-c96="" _nghost-serverapp-c94=""><span _ngcontent-serverapp-c94="" className="career-track-cashback-prompt"> 25% Cashback
                                    </span>
                                </landing-career-track-cashback-prompt>

                            </p>
                            <div _ngcontent-serverapp-c96="" className="tab-title cashback-offer-mobile drawer-banner pl-20"><img _ngcontent-serverapp-c96="" src="https://files.codingninjas.in/cashback_offer_mobile-4962.svg" alt="Coding Ninjas Career Track Cashback Offer"/></div>

                            <landing-drawer-mobile-dropdown-section-item _ngcontent-serverapp-c96="" _nghost-serverapp-c95="">
                                <div _ngcontent-serverapp-c95="" className="dropdown-item-mobile">Ninja Competitive Programmer Track</div>
                            </landing-drawer-mobile-dropdown-section-item>
                            <landing-drawer-mobile-dropdown-section-item _ngcontent-serverapp-c96="" _nghost-serverapp-c95="">
                                <div _ngcontent-serverapp-c95="" className="dropdown-item-mobile">Ninja Android Developer Career Track </div>
                            </landing-drawer-mobile-dropdown-section-item>
                            <landing-drawer-mobile-dropdown-section-item _ngcontent-serverapp-c96="" _nghost-serverapp-c95="">
                                <div _ngcontent-serverapp-c95="" className="dropdown-item-mobile">Ninja  Web Developer Career Track - NodeJS &amp; ReactJs</div>
                            </landing-drawer-mobile-dropdown-section-item>
                            <landing-drawer-mobile-dropdown-section-item _ngcontent-serverapp-c96="" _nghost-serverapp-c95="">
                                <div _ngcontent-serverapp-c95="" className="dropdown-item-mobile">Ninja  Web Developer Career Track - NodeJS</div>
                            </landing-drawer-mobile-dropdown-section-item>
                            <landing-drawer-mobile-dropdown-section-item _ngcontent-serverapp-c96="" _nghost-serverapp-c95="">
                                <div _ngcontent-serverapp-c95="" className="dropdown-item-mobile">Ninja Data Scientist Career Track</div>
                            </landing-drawer-mobile-dropdown-section-item>
                            <landing-drawer-mobile-dropdown-section-item _ngcontent-serverapp-c96="" _nghost-serverapp-c95="">
                                <div _ngcontent-serverapp-c95="" className="dropdown-item-mobile">Ninja Machine Learning Engineer Career Track</div>
                            </landing-drawer-mobile-dropdown-section-item>

                            <p _ngcontent-serverapp-c96="" className="header-section-title premium-course-title">
                                <span _ngcontent-serverapp-c96="">Premium Course</span>
                            </p>

                            <div _ngcontent-serverapp-c96="" className="tab-title pc-banner-mobile drawer-banner pl-20"><img _ngcontent-serverapp-c96="" src="https://files.codingninjas.in/pc-drawer-banner-6470.svg" alt="Coding Ninjas Premium Course"/></div>

                            <landing-drawer-mobile-dropdown-section-item _ngcontent-serverapp-c96="" _nghost-serverapp-c95="">
                                <div _ngcontent-serverapp-c95="" className="dropdown-item-mobile">Premium Competitive Programming Course</div>
                            </landing-drawer-mobile-dropdown-section-item>
                            <landing-drawer-mobile-dropdown-section-item _ngcontent-serverapp-c96="" _nghost-serverapp-c95="">
                                <div _ngcontent-serverapp-c95="" className="dropdown-item-mobile">Premium Data Science Course</div>
                            </landing-drawer-mobile-dropdown-section-item>
                            <landing-drawer-mobile-dropdown-section-item _ngcontent-serverapp-c96="" _nghost-serverapp-c95="">
                                <div _ngcontent-serverapp-c95="" className="dropdown-item-mobile">Premium Data structures and Algorithms [C++/Java/Python]</div>
                            </landing-drawer-mobile-dropdown-section-item>
                            <landing-drawer-mobile-dropdown-section-item _ngcontent-serverapp-c96="" _nghost-serverapp-c95="">
                                <div _ngcontent-serverapp-c95="" className="dropdown-item-mobile">Premium Machine Learning Course</div>
                            </landing-drawer-mobile-dropdown-section-item>
                            <landing-drawer-mobile-dropdown-section-item _ngcontent-serverapp-c96="" _nghost-serverapp-c95="">
                                <div _ngcontent-serverapp-c95="" className="dropdown-item-mobile">Premium Full Stack Web Development</div>
                            </landing-drawer-mobile-dropdown-section-item>
                            <landing-drawer-mobile-dropdown-section-item _ngcontent-serverapp-c96="" _nghost-serverapp-c95="">
                                <div _ngcontent-serverapp-c95="" className="dropdown-item-mobile">Premium Android App Development</div>
                            </landing-drawer-mobile-dropdown-section-item>

                        </landing-drawer-mobile-dropdown-section>
                    </ul>

                </li>

            </landing-drawer-mobile-dropdown>

            <div _ngcontent-serverapp-c98="" onClick={handledropPrac} id="codezen-new-mobile">
                <div _ngcontent-serverapp-c98="" id="mobile-nav-item-title-container">
                    <div _ngcontent-serverapp-c98="" id="mobile-nav-item-title">Practice</div>
                    <div _ngcontent-serverapp-c98="" className="new-icon-container"><img _ngcontent-serverapp-c98="" src="./images/new-tag.svg" alt="new tag"/></div>
                    <div _ngcontent-serverapp-c98="" className="dropdown-arrow">
                        <img _ngcontent-serverapp-c98="" id="drop-prac-mob" className="prac-drop" src="./images/angle-down-solid-5030.svg"  alt="dropdown-icon"/>
                    </div>
                </div>
            </div>
            <div _ngcontent-serverapp-c98="" id="mobile-expander">
                <a _ngcontent-serverapp-c98="" href="https://www.codingninjas.com/codestudio" className="mobile-expander-item mobile-expander-heading">
                    <div _ngcontent-serverapp-c98="">CodeStudio</div>
                    <div _ngcontent-serverapp-c98="" className="new-icon-container"><img _ngcontent-serverapp-c98="" src="./images/new-tag.svg" alt="new tag"/></div>
                    <img _ngcontent-serverapp-c98="" src="./images/bottom-border.svg" alt="bottom-border" class="bottom-border"/>
                </a>
                <a _ngcontent-serverapp-c98="" href="https://www.codingninjas.com/codestudio/problems" className="mobile-expander-item mobile-expander-sub-item">
                    <div _ngcontent-serverapp-c98="">Code Problems</div>
                </a>
                <a _ngcontent-serverapp-c98="" href="https://www.codingninjas.com/codestudio/interview-experiences" className="mobile-expander-item mobile-expander-sub-item">
                    <div _ngcontent-serverapp-c98="">Interview Experiences</div>
                </a>
                <a _ngcontent-serverapp-c98="" href="https://www.codingninjas.com/codestudio/guided-paths" className="mobile-expander-item mobile-expander-sub-item">
                    <div _ngcontent-serverapp-c98="">Guided Paths</div>
                    <div _ngcontent-serverapp-c98="" className="new-icon-container"><img _ngcontent-serverapp-c98="" src="./images/new-tag.svg" alt="new tag"/></div>
                </a>
                <a _ngcontent-serverapp-c98="" href="https://codezen.codingninjas.com/" className="mobile-expander-item mobile-expander-heading">
                    <div _ngcontent-serverapp-c98="">CodeZen</div>
                    <img _ngcontent-serverapp-c98="" src="./images/bottom-border.svg" alt="bottom-border" class="bottom-border"/>
                </a>
                <a _ngcontent-serverapp-c98="" href="https://codezen.codingninjas.com/dashboard" className="mobile-expander-item mobile-expander-sub-item">
                    <div _ngcontent-serverapp-c98="">Dashboard</div>
                </a>
                <a _ngcontent-serverapp-c98="" href="https://codezen.codingninjas.com/problem-of-the-day" className="mobile-expander-item mobile-expander-sub-item">
                    <div _ngcontent-serverapp-c98="">Problem of the day</div>
                </a>
                <a _ngcontent-serverapp-c98="" href="https://codezen.codingninjas.com/practice" className="mobile-expander-item mobile-expander-sub-item">
                    <div _ngcontent-serverapp-c98="">Practice</div>
                </a>
                <a _ngcontent-serverapp-c98="" href="https://classroom.codingninjas.com/app/tests" className="mobile-expander-item mobile-expander-sub-item">
                    <div _ngcontent-serverapp-c98="">Tests</div>
                </a>
            </div>

            <div _ngcontent-serverapp-c98="" className="tab-title">Events</div>
            <div _ngcontent-serverapp-c98="" className="tab-title">Campus Ninjas</div>
            <div _ngcontent-serverapp-c98="" className="tab-title">Blog</div>
            <a _ngcontent-serverapp-c98="" target="_blank" rel="noopener" className="passiveLink" href="https://classroom.codingninjas.com/app/classroom">
                <div _ngcontent-serverapp-c98="" className="tab-title">My Classroom</div>
            </a>
            <div _ngcontent-serverapp-c98="" className="tab-title"><img _ngcontent-serverapp-c98="" src="https://files.codingninjas.in/cc-mobile-2-5360.svg" alt="Coding Ninjas Career Camp | Ninjas Pro | Ninjas Scholar" className="nav-image"/></div>
        </div>
        <div _ngcontent-serverapp-c98="" className="hide-mobile">

            <auth-social-login-button _ngcontent-serverapp-c98="" _nghost-serverapp-c90="">
                <div _ngcontent-serverapp-c90="" className="login_button">Login</div>

            </auth-social-login-button>

        </div>
    </div>
</div>
  );
}

export default MobileNav;
