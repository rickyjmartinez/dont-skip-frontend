export function RoutinesIndex(props) {

  return (
    <div>
      <h1>All Routines</h1>
      {props.routines.map((routine) => (
        <div key={routine.id}>
          <h1>Routine_id:{routine.id}</h1>
          <p>Exercise_ID:{routine.exercise_id}</p>
          <p>{routine.exercise_name}</p>
          <p>Sets:{routine.sets}</p>
          <p>Reps:{routine.reps}</p>
        </div>
      ))}
    </div>
  )
}