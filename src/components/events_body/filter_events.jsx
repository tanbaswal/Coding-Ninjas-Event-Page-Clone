import React,{useState} from 'react';

function Filter(props) {

  const[show,setshow]=useState(false)
  const[tagsfilter,setTagsFilter]=useState([])
  
  function filtershow(){
    document.getElementById("filters-wrapper").style.display="block"
  }

  function hidetags(){
    document.getElementById("filters-wrapper").style.display="none"
  }

  function selected(e){
      var checktag=document.getElementById(e.target.id).innerHTML
      var present=tagsfilter.indexOf(checktag)

      if(present === -1)
      {

            document.getElementById(e.target.id).classList.add("selected")
            setTagsFilter(tagsfilter => [...tagsfilter, checktag])


      }
      else{
            document.getElementById(e.target.id).classList.remove("selected")
            setTagsFilter(tagsfilter.filter(item => item !== checktag))

      }
  }


  function sendtags(){
    document.getElementById("filters-wrapper").style.display="none"
    props.mobtags(tagsfilter)
  }












  return (
<div _ngcontent-serverapp-c187="" className="filter-events-mobile ng-star-inserted" >
   <div _ngcontent-serverapp-c187="" className="drawer-button ng-star-inserted" onClick={filtershow}>
      <img _ngcontent-serverapp-c187="" src="./images/filter-events-wave.svg" alt=""/>
      <div _ngcontent-serverapp-c187="" className="text">Filter Events</div>
   </div>
    <div _ngcontent-serverapp-c187="" id="filters-wrapper" className="filters-wrapper">
   <div _ngcontent-serverapp-c187="" className="header">
      <img _ngcontent-serverapp-c187="" onClick={hidetags} src="./images/events-back.svg" alt="" />
      <div _ngcontent-serverapp-c187="" className="text">Filter Events</div>
   </div>
   <div _ngcontent-serverapp-c187="" id="body" className="body">
      <div _ngcontent-serverapp-c187="" id="Interview Preparation mob" className="tag"  onClick={selected}> Interview Preparation </div>
      <div _ngcontent-serverapp-c187="" id="Contest Solutions mob" className="tag" onClick={selected}> Contest Solutions </div>
      <div _ngcontent-serverapp-c187="" id="Competitive Programming mob" className="tag" onClick={selected}> Competitive Programming </div>
      <div _ngcontent-serverapp-c187="" id="Futuristic Tech mob" className="tag" onClick={selected}> Futuristic Tech </div>
      <div _ngcontent-serverapp-c187="" id="Coding Concepts mob" className="tag" onClick={selected}> Coding Concepts </div>
      <div _ngcontent-serverapp-c187="" id="Career Guidance mob" className="tag" onClick={selected}> Career Guidance </div>
      <div _ngcontent-serverapp-c187="" id="Web Development mob" className="tag" onClick={selected}> Web Development </div>
      <div _ngcontent-serverapp-c187="" id="Android mob" className="tag" onClick={selected}> Android </div>
      <div _ngcontent-serverapp-c187="" id="Machine Learning mob" className="tag" onClick={selected}> Machine Learning </div>
      <div _ngcontent-serverapp-c187="" id="Campus Event mob" className="tag" onClick={selected}> Campus Event </div>
      <div _ngcontent-serverapp-c187="" id="Online Coding Event mob" className="tag" onClick={selected}> Online Coding Event </div>
      <div _ngcontent-serverapp-c187="" id="Hackathon mob" className="tag" onClick={selected}> Hackathon </div>
      <div _ngcontent-serverapp-c187="" id="Women Who Code mob" className="tag" onClick={selected}> Women Who Code </div>
      <div _ngcontent-serverapp-c187="" id="GSoC mob" className="tag" onClick={selected}> GSoC </div>
      <div _ngcontent-serverapp-c187="" id="Placement mob" className="tag" onClick={selected}> Placement </div>
      <div _ngcontent-serverapp-c187="" id="Aptitude Preparation mob" className="tag" onClick={selected}> Aptitude Preparation </div>
      <div _ngcontent-serverapp-c187="" id="Efficient Coding mob" className="tag" onClick={selected}> Efficient Coding </div>
      <div _ngcontent-serverapp-c187="" id="Programming Contest mob" className="tag" onClick={selected}> Programming Contest </div>
      <div _ngcontent-serverapp-c187="" id="Coding Marathon mob" className="tag" onClick={selected}> Coding Marathon </div>
      <div _ngcontent-serverapp-c187="" id="All Night Coding mob" className="tag" onClick={selected}> All Night Coding </div>
      <div _ngcontent-serverapp-c187="" id="Code Wars mob" className="tag" onClick={selected}> Code Wars </div>
      <div _ngcontent-serverapp-c187="" id="Scholarship Test mob" className="tag" onClick={selected}> Scholarship Test </div>

   </div>
   <div _ngcontent-serverapp-c187="" className="apply-button" onClick={sendtags}> Apply Filters </div>
</div>
</div>
  );
}

export default Filter;
