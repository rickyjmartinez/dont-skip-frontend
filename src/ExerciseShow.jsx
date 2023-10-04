export function ExerciseShow(props) {

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateRoutine(params, () => event.target.reset());
  };

  return (
    <div>
      <h1>{props.exercise.name}</h1>
      <p>Further help:</p> 
      <a href={props.exercise.video_url}>Exercise Video Tutorial</a>
      <br/>

      <h1>Add sets and reps </h1>
    <form onSubmit={handleSubmit}>
    {/* <div>
      User_Id: <input name="user_id" type="text" />
    </div> */}
    <div>
      Sets: <input name="sets" type="text"/>
    </div>
    <div>
      Reps: <input name="reps" type="text" />
    </div>
    <div>
      <input name="exercise_id" type="hidden" defaultValue={props.exercise.id}/>
    </div>
    <button type="submit">Add to routine</button>
    </form>
    </div>
  );
}