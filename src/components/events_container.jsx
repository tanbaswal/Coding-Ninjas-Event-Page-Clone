import React,{useState} from 'react';
import EventsCategory from './events_components/events_categories.jsx'
import EventsSubCategory from './events_components/events_sub_categories.jsx'
import EventsBody from './events_components/events_body.jsx'
import EndFooter from './events_components/footer.jsx'
import Filter from './events_body/filter_events.jsx'
function Events() {
  const[category,setCategory]=useState("ALL_EVENTS");
  const[subcategory,setSubCategory]=useState("Upcoming")
  const[mobiletag,setMobileTag]=useState([])


  function handleCategory(mainCategory){
    setCategory(mainCategory);
  }

  function handleSubCategory(categorySub){
    setSubCategory(categorySub)
  }

  function handleMobileFilter(tags){
    setMobileTag(tags)
  }

  

  return (
    <div id="landing-container">
      <div id="landing-content">
        <div id="content">
          <div id="list-header">
              <div className="header-text">Events & News</div>
              <div className="header-subtitle">Learn, Compete & Grow</div>
          </div>
          <div  id="eventsWrapper" className="events-outer-wrapper">
              <div className="events-wrapper">
                  <EventsCategory cat={handleCategory}/>
                  <EventsSubCategory subcat={handleSubCategory}  accordtomain={category}/>
                  <EventsBody c_one={category} c_two={subcategory} mobiletagdata={mobiletag}/>
              </div>
              <Filter mobtags={handleMobileFilter}/>
          </div>
        </div>
        <EndFooter/>
      </div>
    </div>


  );
}

export default Events;
