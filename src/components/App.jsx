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

    function deleteItem(id){
        setItems(prevItems => {
            return prevItems.filter((item, index) => {
                return index !== id;
            });
        });
    }

    return <div class="container">
            <h1>MY LIST</h1>
            <InputField onAdd={addListItem}/>
            <div>
                <ul>
                    {items.map((toDoItem, index)=> 
                    <ListItem 
                    key={index}
                    id={index}
                    text={toDoItem}
                    onChecked={deleteItem}/>
                )}
                </ul>
            </div>

    </div>
}

export default App;