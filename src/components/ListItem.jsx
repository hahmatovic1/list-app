import React from "react";

function ListItem(props){
    return <div onClick = {() => props.onChecked(props.id)}
    >
    <li><h3>{props.text}</h3></li>
</div>
}


export default ListItem;