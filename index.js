function getData() {
  fetch("https://handlers.education.launchcode.org/static/astronauts.json")
    .then(function(response) {
      return response.json()
    }) 
    .then(function(data) {
      renderBios(data);
    })
}

//Function should return a component displaying an astronaut's bio
function AstronautBios(astronaut) {

  return (
    <div className="astronaut">
      <div className="bio">
       <h3>{astronaut.firstName} {astronaut.lastName}</h3>
       <ul>
          <li>Hours In Space: {astronaut.hoursInSpace}</li>
          <li>Active: {astronaut.active.toString()}</li>
          <li>Skills: {astronaut.skills.toString().split(',').join(', ')}</li>
       </ul>
      </div>
      <img className="avatar" src={astronaut.picture}/>
    </div>
  );
}

// Function should render all astronaut bios
function renderBios(data) {
  const root = document.getElementById('root');
  const container = 
  <div className='container'>
    {AstronautBios(data[0])}
    {AstronautBios(data[1])}
    {AstronautBios(data[2])}
    {AstronautBios(data[3])}
    {AstronautBios(data[4])}
    {AstronautBios(data[5])}
    {AstronautBios(data[6])}
  </div>
  
  ReactDOM.render( container, root ); 
  
  //The AstronautBios component should be repeated to display bios for all 
  //astronaunts in the returned data object.
  
  //Then attach to the 'root' div!
}



getData();


