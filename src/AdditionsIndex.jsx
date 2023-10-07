import { useState } from "react";
import axios from "axios";

export function AdditionsIndex() {
  const [additions, setAdditions] = useState([]); 
  const [muscle, setMuscle] = useState("");
  const [difficulty, setDifficulty] = useState("");

  const getAdditionsData = () => {
    axios.get(`http://localhost:3000/additions?muscle=${muscle}&difficulty=${difficulty}`).then(response => {
      console.log(response.data)
      setAdditions(response.data)
    })
  }

  const handleSubmit = event => {
    event.preventDefault();
    getAdditionsData();
  };

  return (
  
    <div>
      <h1>Find your next challenge</h1>
      <br/>
      <form onSubmit={handleSubmit}>
      <label>
          Muscle:
          <select
            value={muscle}
            onChange={event => setMuscle(event.target.value)}
          >
            <option value="">Select a muscle</option>
            <option value="calves">Calves</option>
            <option value="hamstrings">Hamstrings</option>
            <option value="glutes">Glutes</option>
            <option value="quadriceps">Quads</option>
          </select>
        </label>
        <br/>
        <label>
          Difficulty:
          <select
            value={difficulty}
            onChange={event => setDifficulty(event.target.value)}
          >
            <option value="">Select difficulty</option>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="expert">Expert</option>
          </select>
        </label>
        <br/> 
        <button type="submit">Search</button>
      </form>
      {additions.map(addition => ( 
        <div key={addition.name}>
          <h2>{addition.name}</h2>
          <p><strong>Equipment:</strong><br/>{addition.equipment}</p>
          <p><strong>Instructions:</strong><br/>{addition.instructions}</p>
        </div>
      ))}
    </div>

  )
}   