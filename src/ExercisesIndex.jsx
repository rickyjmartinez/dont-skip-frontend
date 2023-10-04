import {useState} from "react"

export function ExercisesIndex(props) { 
  const [searchFilter, setSearchFilter] = useState("")
  return (
    <div>
      <h1>All Exercises</h1>
      <input type="text" value={searchFilter} onChange={event => setSearchFilter(event.target.value)} placeholder="search execises" list="exercises"/>
      <datalist id="exercises">
      {props.exercises.map(exercise => (
        <option>{exercise.name}</option>
      ))}
      </datalist>
      {/* {searchFilter} if you want to show what user is typing, not needed right now */}
      {props.exercises.filter(exercise => exercise.name.toLowerCase().includes(searchFilter.toLowerCase())).map((exercise)  => (
        <div key={exercise.id}>
          <h2>{exercise.name}</h2>
          <img src={exercise.image_url} width={300} height={300} />
          <p>{exercise.description}</p>
        <br/>
        <button onClick={() => props.onShowExercise(exercise)}>Add exercise to routine</button>
        <hr/>
          </div>
      ))}
    </div>
  );
}