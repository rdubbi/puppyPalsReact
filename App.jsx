import { useState } from "react";
import { puppyList } from "./data.js";
import "./App.css";

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);
  // console.log(puppies);
  const featuredPup = puppies.find((pup) => pup.id === featPupId);
  // console.log(featuredPup)

  return (
    <div className="App">
      <h1>Nice Pups!</h1>
      {puppies.map((puppy) => {
        return (
          <p
            className="pups"
            onClick={() => {
              setFeatPupId(puppy.id);
            }}
            key={puppy.id}
          >
            {puppy.name}
          </p>
        );
      })}

      {featPupId && (
        <div className="pups">
          <h2>You Selected:</h2>
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
// line 12 "puppy" can be changed to anything. I dont understand how this makes any sense. How does it know to draw from puppy list? Shouldnt it be puppies.name or something?
