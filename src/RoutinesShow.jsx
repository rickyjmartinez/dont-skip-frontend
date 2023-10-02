export function RoutinesShow(props) {
  return (
    <div>
      <h1>routine information</h1>
      <p>exercise_name: {props.routine.exercise_name}</p>
      <p>sets:{props.routine.sets}</p>
      <p>reps:{props.routine.reps}</p>
    </div>
  )
}