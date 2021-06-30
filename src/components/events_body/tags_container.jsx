import React,{useState,useEffect} from 'react';
import RemainTags from'./remaining_tags.jsx'
import axios from 'axios';
function TagsContainer(props) {

    const[tag,settags]=useState(null)
    const[isvisible,setisvisible]=useState(false)
    const url='https://api.codingninjas.com/api/v3/event_tags';
    const[tagsSelect,setTagsSelect]=useState([])




    useEffect(() => {
    axios.get(url).then((response) => {

      settags(response.data);
    });
  }, [url]);

  function visibility(e){

    setisvisible(true)
    document.getElementById(e.target.id).innerHTML=""
  }


  function handleChange(e)
  {
    var checktag=e.target.id



    var present=tagsSelect.indexOf(checktag)

      if(present === -1)
      {

            document.getElementById(checktag).classList.add("selected")
            setTagsSelect(tagsSelect => [...tagsSelect, checktag])
            props.addtag(checktag)

      }
      else{
            document.getElementById(checktag).classList.remove("selected")
            setTagsSelect(tagsSelect.filter(item => item !== checktag))
            props.deletetag(checktag)
      }


  }

  

  if(tag){

      const tagvisible=tag.data.tags;
      const firsttag=tagvisible.slice(0,12);
      const lasttag=tagvisible.slice(12,23)


    return (
      <div className="tags-container">
        <div className="tags-heading">Tags</div>
        <div className="tags-wrapper">
                <div id="Interview Preparation" onClick={handleChange} className="tag">{firsttag[0]}</div>
                <div id="Contest Solutions"  onClick={handleChange} className="tag">{firsttag[1]}</div>
                <div id="Competitive Programming" onClick={handleChange} className="tag">{firsttag[2]}</div>
                <div id="Futuristic Tech" onClick={handleChange} className="tag">{firsttag[3]}</div>
                <div id="Coding Concepts" onClick={handleChange} className="tag">{firsttag[4]}</div>
                <div id="Career Guidance" onClick={handleChange} className="tag">{firsttag[5]}</div>
                <div id="Web Development" onClick={handleChange} className="tag">{firsttag[6]}</div>
                <div id="Android" onClick={handleChange} className="tag">{firsttag[7]}</div>
                <div id="Machine Learning" onClick={handleChange} className="tag">{firsttag[8]}</div>
                <div id="Campus Event" onClick={handleChange} className="tag">{firsttag[9]}</div>
                <div id="Online Coding Event" onClick={handleChange} className="tag">{firsttag[10]}</div>
                <div id="Hackathon" onClick={handleChange} className="tag">{firsttag[11]}</div>
                <RemainTags visible={isvisible} data={lasttag} change={handleChange}/>
        </div>
        <div id="moretags" className="count" onClick={visibility}>See 10 more tags</div>
      </div>



    )
  }
  else{
    return (
      <div className="tags-container">

      </div>
    )
  }
  }




export default TagsContainer;
