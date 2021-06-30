import React,{useState} from 'react';
function EventsSubCategory(props) {

  const[previousTab,setPreviousTab]=useState("Upcoming")
  function handleSelect(e)
  {
    const elementId=e.target.id
    props.subcat(elementId)
    const clicked_id=document.getElementById(elementId);
    document.getElementById(previousTab).classList.remove("selected")
    setPreviousTab(elementId)
    clicked_id.classList.add("selected")

  }



return (


    <div className="tabs event-sub-categories">
          <a id="Upcoming" className="tab selected" href="#" onClick={handleSelect}> Upcoming </a>
            <a id="Archived" className="tab" href="#" onClick={handleSelect}> {props.accordtomain === "WEBINAR" ? 'Recorded' : 'Archived' }</a>
              <a id="All Time Favorites" className="tab star-inserted" href="#" onClick={handleSelect}> All Time Favorites</a>
    </div>

  );





}


















export default EventsSubCategory;
