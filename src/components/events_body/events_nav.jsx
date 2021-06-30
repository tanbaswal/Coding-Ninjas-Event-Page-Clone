import React,{useState} from 'react';

function EventsNav(props) {

    const[inputValue,setinputValue]=useState(1)
    const[defaultpage,setdefaultpage]=useState(1)
    const[allowed,setallowed]=useState(false)
    const[previousPage,setpreviousPage]=useState(1)
    const[category,setcategory]=useState("ALL_EVENTS")
    const[subcategory,setsubCategory]=useState("Upcoming")

    if(props.cat !== category)
    {
      setcategory(props.cat)

      
      setinputValue(1)
      setpreviousPage(1)

    }

    if(props.subcat !== subcategory)
    {
      setsubCategory(props.subcat)

      setinputValue(1)
      setpreviousPage(1)

    }


    function handleDecrease(){

      props.offchange(props.offvalue-20)
      setpreviousPage(inputValue-1)
      setinputValue(inputValue-1)

    }

    function handleIncrease(){
      props.offchange(props.offvalue+20)
      setpreviousPage(inputValue+1)
          setinputValue(inputValue+1)
    }

    function handleInput(e)
    {
      setinputValue(e.target.value)

    }

    function handleSubmit(event)
    {

        if(inputValue)
        {
          if( inputValue > previousPage && inputValue < props.maxpages)
          {
            const newoff=props.offvalue+(inputValue-previousPage)*20
            props.offchange(newoff)
            setpreviousPage(inputValue)
          }
          else if( inputValue < previousPage && inputValue > 1)
          {
            const newoffs=props.offvalue-(previousPage-inputValue)*20
            props.offchange(newoffs)
            setpreviousPage(inputValue)
          }
          else if( inputValue > props.maxpages || inputValue < 1)
          {
            props.offchange(0)
            setinputValue(1)
            setpreviousPage(1)
          }
        }
      else
      {
        props.offchange(0)
        setinputValue(1)
        setpreviousPage(1)
      }

    }
    console.log(props.offvalue)
    console.log(inputValue)
    console.log(previousPage)

return (

    props.visible !== 0 ? <div  className="landing-page-nav-container">
        {(inputValue > 1 || inputValue > props.maxpages) ? <a  id="left_arrow" className="landing-page-nav-arrow" onClick={handleDecrease} href="#"><img src="https://files.codingninjas.in/left-arrow-5581.svg" alt="Prev"/></a>
      :<a  id="left_arrow" className="landing-page-nav-arrow disabled"  href="#"><img src="https://files.codingninjas.in/left-arrow-5581.svg" alt="Prev"/></a>}

        <div className="landing-page-nav-input-container"> <div id="Page">Page</div> <div><form onSubmit={handleSubmit}><input  id="nav-input-change" type="number" value={inputValue} step="1" min="1" max={props.maxpages} onChange={handleInput}  className="touched pristine valid"/></form></div><div id="ofmaxpages"> of {props.maxpages}</div> </div>


      {inputValue > props.maxpages ? <a  id="right_arrow" className="landing-page-nav-arrow disabled"  href="#"><img  src="https://files.codingninjas.in/right-arrow-5582.svg" alt="Next"/></a>  : (props.maxpages > 1 && inputValue !== props.maxpages) || (inputValue === "")? <a  id="right_arrow" className="landing-page-nav-arrow" onClick={handleIncrease}  href="#"><img  src="https://files.codingninjas.in/right-arrow-5582.svg" alt="Next"/></a>
      :<a  id="right_arrow" className="landing-page-nav-arrow disabled"  href="#"><img  src="https://files.codingninjas.in/right-arrow-5582.svg" alt="Next"/></a>}
    </div> : ""

  );
}

export default EventsNav;
