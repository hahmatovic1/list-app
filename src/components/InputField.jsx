import React, {useState} from "react";

function InputField(props){
const [item, setItem] = useState("");

function handelChange(event){
    const newItem = event.target.value;
    setItem(newItem);  
}

return (
    <div className="form">
      
      <input type="text" onChange={handelChange} value={item} />
      <button onClick={()=>{
        props.onAdd(item);
      }}
      >Add</button>
    </div>
  );
}

export default InputField;
