import React from 'react';

function RemainTags(props) {


    return (props.visible) ? ( props.data.map( tag => (
      <div id={tag} onClick={props.change} className="tag" >{tag}</div>
    ))

    ) : ""
}

export default RemainTags;
