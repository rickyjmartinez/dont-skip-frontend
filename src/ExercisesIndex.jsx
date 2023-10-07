import {useState} from "react"

export function ExercisesIndex(props) { 
  const [searchFilter, setSearchFilter] = useState("")

  let authenticationLinks; 

  if (localStorage.jwt === undefined) {
    authenticationLinks = (
    <>
    <section class="hero d-flex flex-column justify-content-center align-items-center" id="home">

<div class="bg-overlay"></div>

<div class="container">
  <div class="row">

    <div class="col-lg-8 col-md-10 mx-auto col-12">
      <div class="hero-text mt-5 text-center">

        <h1 class="text-white" data-aos="fade-up" data-aos-delay="500">Start your workout journey today</h1>

        {/* <a href="/signup" class="btn custom-btn mt-3" data-aos="fade-up" data-aos-delay="600">Signup to make a routine</a> */}

        <a href="/signup" class="btn custom-btn bordered mt-3" data-aos="fade-up"
          data-aos-delay="700">Create an account</a>

        

      </div>
    </div>

  </div>
</div>
</section>
    </>
    )
  } else {
    authenticationLinks =(
    <>
     <section class="hero d-flex flex-column justify-content-center align-items-center" id="home">

<div class="bg-overlay"></div>

<div class="container">
  <div class="row">

    <div class="col-lg-8 col-md-10 mx-auto col-12">
      <div class="hero-text mt-5 text-center">

        <h6 data-aos="fade-up" data-aos-delay="300">always have your routine on hand!</h6>

        <h1 class="text-white" data-aos="fade-up" data-aos-delay="500">Never Skip Leg Day</h1>

        {/* <a href="/myroutine" class="btn custom-btn mt-3" data-aos="fade-up" data-aos-delay="600">Check out your routine</a> */}

        <a href="/myroutine" class="btn custom-btn bordered mt-3" data-aos="fade-up"
           data-aos-delay="700">Start your workout</a>

        

      </div>
    </div>

  </div>
</div>
</section>
    </>
    )
  }
  return (
  <>
    {authenticationLinks}

    <div>
      <h1>All Exercises</h1>
      <input type="text" value={searchFilter} onChange={event => setSearchFilter(event.target.value)} placeholder="Search Exercises" list="exercises"/>
      <datalist id="exercises">
      {props.exercises.map(exercise => (
        <option key={exercise.id}>{exercise.name}</option>
      ))}
      </datalist>
      {/* {searchFilter} if you want to show what user is typing, not needed right now */}
      {props.exercises.filter(exercise => exercise.name.toLowerCase().includes(searchFilter.toLowerCase())).map((exercise)  => (
        <div key={exercise.id}>
          <h2>{exercise.name}</h2>
          <img src={exercise.image_url} width={300} height={300} />
        <br/>
        <br/> 
        <button onClick={() => props.onShowExercise(exercise)}>Exercise Info</button>
        <hr/>
          </div>
      ))}
    </div>
    </>
  );


  
}