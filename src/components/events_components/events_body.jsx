import React,{useState,useEffect} from 'react';
import TagsContainer from '../events_body/tags_container.jsx'
import EventCard from '../events_body/events_card.jsx'
import EventsNav from '../events_body/events_nav.jsx'
import axios from 'axios'

function EventsBody(props) {



  const[tagdata,setTagdata]=useState([]);
  const[posts, setPosts]=useState();
  const[loading,setLoading]=useState(false);
  const[offset,setoffset]=useState(0)
  const[category,setcategory]=useState("ALL_EVENTS")
  const[subcategory,setsubCategory]=useState("Upcoming")
  const[reset,setreset]=useState(false)
  const[mobmode,setmobMode]=useState(false)




  // props.mobiletagdata.map(tags => (
  //   setTagdata(tagdata => [...tagdata,tags])
  // ))



  if(props.c_one !== category)
  {
    tagdata.map(tag => (

      document.getElementById(tag).classList.remove("selected")
    ))

    setcategory(props.c_one)
    setsubCategory("Upcoming")
    setTagdata([])
    setoffset(0)

  }


  if(props.c_two !== subcategory)
  {
    tagdata.map(tag => (

      document.getElementById(tag).classList.remove("selected")
    ))

    setsubCategory(props.c_two)
    setTagdata([])
    setoffset(0)

  }


  function addTag(tag){
      setTagdata(tagdata => [...tagdata,tag])
  }

  function deleteTag(tag){
    setTagdata(tagdata.filter(item => item !== tag))
  }

  function handleOffset(changedvalue)
  {

    setoffset(changedvalue)

  }




  const jointag=tagdata.join()
  const subcat=encodeURI(subcategory)
  const tagparam=encodeURI(jointag)



  const url=`https://api.codingninjas.com/api/v3/events?event_category=${category}&event_sub_category=${subcat}&tag_list=${tagparam}&offset=${offset}`

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      document.getElementById("pbar").classList.remove("pbar-visible")
      const res = await axios.get(url);
      setPosts(res.data);
      setLoading(false);
      document.getElementById("pbar").classList.add("pbar-visible")
    }
    fetchPosts();
  },[url]);



  console.log(url)
  console.log(posts)
  console.log(`props1${props.c_one}`)
  console.log(`props1${props.c_two}`)
  console.log(category)
  console.log(subcategory)
  console.log(tagdata)
  console.log(props.mobiletagdata)


if(posts){

const currentPosts=posts.data.events
const size=currentPosts.length
  return (
      <div className="events-body">
            <div className="event-cards-container">
              <div className="events-container">
            <EventCard postdata={currentPosts}/>
            </div>
            <EventsNav maxpages={posts.data.page_count}  offchange={handleOffset} offvalue={offset} cat={category}  subcat={subcategory}  visible={size} />
            </div>
            <TagsContainer addtag={addTag} deletetag={deleteTag} />
      </div>
  );
}
else{
  return (<div className="events-body"></div>)
}

}

export default EventsBody;
