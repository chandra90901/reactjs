import { useState } from "react";

function State() {
    const [v1, cVar] = useState("blue");return (
        <h1 style={{ border: "1px", color: "red" }}>mygood one {v1}</h1>
    )
}
export default State;
