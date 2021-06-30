import React,{useState} from 'react';

function EventsCategory(props) {


  const[previousTab,setPreviousTab]=useState("ALL_EVENTS")

  function handleSelection(e){
    const elementId=e.target.id
    props.cat(elementId)
    const clicked_id=document.getElementById(elementId);
    const child=document.getElementById(previousTab).children[0]
    const childtarget=document.getElementById(elementId).children[0]
    document.getElementById(previousTab).classList.remove("selected")



    if(previousTab === "ALL_EVENTS")
    {
    child.setAttribute("src","./images/all-events-unselected.svg")
    }
    if(previousTab === "WEBINAR")
    {
    child.setAttribute("src","./images/webinar-unselected.svg")
    }
    if(previousTab === "CODING_EVENT")
    {
    child.setAttribute("src","./images/coding-events-unselected.svg")
    }
    if(previousTab === "BOOTCAMP_EVENT")
    {
    child.setAttribute("src","./images/bootcamp-events-unselected.png")
    }
    if(previousTab === "WORKSHOP")
    {
    child.setAttribute("src","./images/workshop-unselected.png")
    }


    setPreviousTab(elementId)
    clicked_id.classList.add("selected")



    if(elementId === "ALL_EVENTS")
    {
    childtarget.setAttribute("src","./images/all-events-selected.svg")
    }
    if(elementId === "WEBINAR")
    {
    childtarget.setAttribute("src","./images/webinar-selected.svg")
    }
    if(elementId === "CODING_EVENT")
    {
    childtarget.setAttribute("src","./images/coding-events-selected.svg")
    }
    if(elementId === "BOOTCAMP_EVENT")
    {
    childtarget.setAttribute("src","./images/bootcamp-events-selected.png")
    }
    if(elementId === "WORKSHOP")
    {
    childtarget.setAttribute("src","./images/workshop-selected.png")
    }
  }


  return (
    <div className="tabs event-categories">
        <a id="ALL_EVENTS" className="tab selected" href="#" onClick={handleSelection}><img id="ALL_EVENTS" className="all-events" src="./images/all-events-selected.svg"/>All Events</a>
        <a id="WEBINAR" className="tab" href="#" onClick={handleSelection}><img id="WEBINAR" className="webinar" src="./images/webinar-unselected.svg"/>Webinars</a>
        <a id="CODING_EVENT" className="tab" href="#" onClick={handleSelection}><img id="CODING_EVENT" className="coding-events" src="./images/coding-events-unselected.svg"/>Coding Events</a>
        <a id="BOOTCAMP_EVENT" className="tab" href="#" onClick={handleSelection}><img id="BOOTCAMP_EVENT" className="bootcamp-events" src="./images/bootcamp-events-unselected.png"/>Bootcamp Events</a>
        <a id="WORKSHOP" className="tab" href="#" onClick={handleSelection}><img id="WORKSHOP"   className="workshop" src="./images/workshop-unselected.png"/>Workshop</a>
    </div>
  );
}

export default EventsCategory;
