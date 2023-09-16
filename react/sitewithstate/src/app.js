Location = () => {
  navigator.geolocation.getCurrentPosition((position)=> {
   document.getElementById('p1').innerHTML =  ("Latitude is :" + position.coords.latitude);
   document.getElementById('p2').innerHTML =  ("Latitude is :" + position.coords.longitude);
})
}
function App() {
 
  return (
    <>
   <h4>Using geolocation JavaScript API in React</h4>
   <p id='p1'></p>
   <p id='p2'></p>

        <button onClick={Location}>Open GeoLocation</button>
    </>
  );
}
export default App