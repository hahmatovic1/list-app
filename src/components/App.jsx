import React, { useState } from "react";
import InputField from "./InputField";
import ListItem from "./ListItem";



function App() {

    const[items, setItems] = useState([]);

    function addListItem(newItem){
        setItems(prevItems => {
            return[...prevItems, newItem];
        })    
        
    }

    return <div class="container">
            <h1>MY LIST</h1>
            <InputField onAdd={addListItem}/>
            <div>
                <ul>
                    <ListItem text = "banana"/>
                </ul>
            </div>

    </div>
}

export default App;