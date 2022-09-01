import React, { useState } from "react";
import InputField from "./InputField";
import ListItem from "./ListItem";

function App() {
    return <div class="container">
            <h1>MY LIST</h1>
            <InputField />
            <div>
                <ul>
                    <ListItem />
                </ul>
            </div>

    </div>
}

export default App;