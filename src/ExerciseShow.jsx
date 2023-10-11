export function ExerciseShow(props) {
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateRoutine(params, () => event.target.reset());
  };
  
  let newExerciseForm; 


  if (localStorage.jwt === undefined) {
    newExerciseForm = (
    <>
    </>
    )
  } else {
    newExerciseForm =(
    <>
    <h1>Enter sets and reps </h1>
    <form onSubmit={handleSubmit}>
      <div>
        Sets: <input name="sets" type="text"/>
      </div>
      <div>
        Reps: <input name="reps" type="text" />
      </div>
      <div>
        <input name="exercise_id" type="hidden" defaultValue={props.exercise.id}/>
      </div>
      <br/>
      <button type="submit">Add to your routine</button>
      </form>
    </>
    )
  }

 

  return (
    <div>
      <h1>{props.exercise.name}</h1>
      <p>{props.exercise.description}</p>
      <p>Further help:{" "}
      <a href={props.exercise.video_url}>Exercise Video Tutorial</a>
      </p>

      
      {newExerciseForm}
  
    </div>
  );
}