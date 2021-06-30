import React from 'react';

function EventCard(props) {

  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
          "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  const endpoint="https://www.codingninjas.com/events/";

  function getTime(millisec){
    const millisecond=`${millisec}000`
    const day=parseInt(millisecond)
    const d = new Date(day)
    const today=d.getDate();
    const month=monthNames[d.getMonth()]
    var hours = d.getHours() ;
    var AmOrPm = hours >= 12 ? 'PM' : 'AM'
    hours = (hours % 12) || 12
    var time= hours < 10 ? d.toLocaleTimeString().slice(0,4) : d.toLocaleTimeString().slice(0,5)
    var finalTime =  time + " " + AmOrPm

    var final= today + " " + month + ", " + finalTime

    return final;
  }

  function startevent(start)
  {
    const millisecond=`${start}000`
    const day=parseInt(millisecond)
    const d = new Date(day)
    const today=d.getDate();
    const month=monthNames[d.getMonth()]
    const year=d.getFullYear()
    var hours = d.getHours() ;
    var AmOrPm = hours >= 12 ? 'PM' : 'AM'
    hours = (hours % 12) || 12
    var time= hours < 10 ? d.toLocaleTimeString().slice(0,4) : d.toLocaleTimeString().slice(0,5)

    var finalTime =  time + " " + AmOrPm

    const final= finalTime + ", " + today + " " + month +" " +year

    return final

  }


  return (props.postdata.length >0) ? (

        <>
        {props.postdata.map(post => (


<a  key={post.id} className="event" href={endpoint+post.slug}>
<div  className="card">
<div className="header" >
    <div className="glass">
        <div  className="cover-image-container">
            <div  className="glass-main"></div>
            <img  src={post.cover_picture} alt=""/>
        </div>
    </div>
     {post.registration_status === "PAST" ? "" :<div  className="event-status star-inserted">
        {post.registration_status === "REGISTRATIONS_CLOSED" ?  <div  className="event-status-container star-inserted"><p>Registrations<b> closed</b></p></div> :
        <div  className="event-status-container star-inserted">
            <div  className="circle"></div>
            <p> Registrations <b> open </b> till <b>{getTime(post.end_time)}</b></p>
        </div>}
     </div>
   }
  </div>


<main>
    <p  className="event-name">{post.name}</p>
    <div  className="details star-inserted">
        <div  className="event-info-item">
            <p className="item-label"><b>Starts on</b></p>
            <p className="item-value">{startevent(post.event_start_time)}</p>
        </div>
        <div className="event-info-item price star-inserted">
            <p className="item-label"><b>Entry Fee</b></p>
            <p className="item-value star-inserted">{post.fees}</p>

        </div>

        <div className="event-info-item star-inserted">
            <p className="item-label"><b>Venue</b></p>
            <p className="item-value">{post.venue}</p>
        </div>

    </div>

    <div className="short-description"> {post.short_desc} </div>
    <div className="tag-container">
    {post.card_tags.map(card_tag => (
      <div className="tag star-inserted">{card_tag}</div>
  ))}



    </div>
</main>



{post.registered_users.top_users.length !== 0 ? <footer>
    <div className="registered-users star-inserted">
        <div id="profile-img-container">
            {post.registered_users.top_users.map(user => (
              <div className="mat-tooltip-trigger user-image star-inserted" aria-describedby={user.name} cdk-describedby-host=""><img  src={user.image_url != null ? user.image_url : "./images/no-image.png" }/></div>
          ))}

          </div>
        <p  className="count">{post.registered_users.other_users_count >0 && "and"} <b>{post.registered_users.other_users_count >0 && post.registered_users.other_users_count}</b> {post.registered_users.other_users_count >0 && "others registered"} </p>
    </div>

    <div className="status">
        {post.registration_status === "REGISTRATIONS_OPEN" && <img src="https://files.codingninjas.in/0000000000001272.png" height="30px" alt="" className="star-inserted"/>}
    </div>
</footer> :
<footer className="footer-with-no-user">
<div className="status">
    {post.registration_status === "REGISTRATIONS_OPEN" && <img src="https://files.codingninjas.in/0000000000001272.png" height="30px" alt="" className="star-inserted"/>}
</div>
</footer>}



</div>
</a>
))}

</>
): <div className="no-events">No events found with the selected tag</div>


}

export default EventCard;
