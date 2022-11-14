import { useState } from "react";
import Form from "./components/form";
import Count from "./components/Count";
import useFetchData from "./components/FetchData";

function App() {
  const [name, setName] = useState("hidden");
  const changeName = () => {
    setName("Ikram");
  };
  const { data } = useFetchData("https://api.github.com/users");
  return (
    <div>
      <p>My name is {name}</p>
      <button onClick={changeName}> Click me to know my name</button>
      <Form />
      <Count />
      <div>
        {data &&
          data.map((user) => (
            <div className="text-white" key={user.id}>
              <h1> {user.login} </h1>
              <img
                src={user.avatar_url}
                alt="user avatar"
                width="50%"
                height="auto"
              />
            </div>
          ))}
      </div>
    </div>
  );
}

export default App;
