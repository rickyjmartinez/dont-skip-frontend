export function RoutinesNew(props) {

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateRoutine(params, () => event.target.reset());
  };

  return (
  <div>
    <h1>Add exercise to routine</h1>
    <form onSubmit={handleSubmit}>
    <div>
      User_Id: <input name="user_id" type="text" />
    </div>
    <div>
      Exercise_ID: <input name="exercise_id" type="text" />
    </div>
    <div>
      Sets: <input name="sets" type="text"/>
    </div>
    <div>
      Reps: <input name="reps" type="text" />
    </div>
    <button type="submit">Add to routine</button>
    </form>
  </div>
  );
}