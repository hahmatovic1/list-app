import React from "react";

function ListItem(props){
    return <div onClick = {() => props.onChecked(props.id)}
    >
    <li>{props.text}</li>
</div>
}


export default ListItem;