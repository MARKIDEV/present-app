import { useState } from "react";
function Form() {
    const [name, setName] = useState("New User");
   
  
    return (
        <div>
            <form>
                <h1>Register here </h1>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your Name"
                />
                <p>{name}</p>
            </form>
        </div>
    );
}
export default Form;