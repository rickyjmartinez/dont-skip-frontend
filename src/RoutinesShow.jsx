export function RoutinesShow(props) {

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdateRoutine(props.routine.id, params, () => event.target.reset());
  }
    return (
    <div>
      <h1>Routine Information</h1>
      <p>Exercise_name: {props.routine.exercise_name}</p>
      <p>Sets:{props.routine.sets}</p>
      <p>Reps:{props.routine.reps}</p>
      <br/>
      <form onSubmit={handleSubmit}>
        <div>
          Sets: <input defaultValue={props.routine.sets} name="sets" type="text" /> 
        </div>
        <div>
          Reps: <input defaultValue={props.routine.reps} name="reps" type="text" /> 
        </div>
        <button type="submit">Update routine</button>
      </form>
    </div>
  )
}