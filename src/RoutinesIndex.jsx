
export function RoutinesIndex(props) {

  return (
    
    <div>
      <h1>My Routine</h1>
      {props.routines.map((routine) => (
        <div key={routine.id}>
          <h2>{routine.exercise_name}</h2>
          <img src={routine.exercise_image_url} width={300} height={300} />
          <p>{routine.exercise_description}</p>
          <h2>Current Sets & Reps</h2>
          <p>Sets:{routine.sets}</p>
          <p>Reps:{routine.reps}</p>

          <button onClick={() => props.onShowRoutine(routine)}>Edit routine</button>
          <hr/>
        </div>
      ))}
    </div>
  )
}