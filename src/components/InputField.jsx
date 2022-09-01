import React, {useState} from "react";

function InputField(){
const [item, setItem] = useState("");

function handelChange(event){
    const newItem = event.target.value;
    setItem(newItem);  
}

return (
    <div className="form">
      
      <input type="text" onChange={handelChange} value={item} />
      {/* <p>{item}</p> testing item*/}
      <button>Add</button>
    </div>
  );
}

export default InputField;
