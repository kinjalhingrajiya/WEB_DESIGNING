function App() {
  const adddiv=document.getElementById('div1');
  const i1=document.getElementById('inp1');
  
  const add1=()=> 
   {
    // adddiv.innerHTML =`<li>${i1.value}</li>`;
    adddiv.innerHTML +=`<li>${i1.value}</li>`;
  }
    const handleKeyDown = (event) => {
      if (event.key === 'Enter') {
        adddiv.innerHTML +=`<li>${i1.value}</li>`;      
      }
    }
    
    const edit=()=> {
      adddiv.setAttribute("contenteditable", "true");
    }
    const eventtype= (event) => {
      if (true) {
        adddiv.innerHTML +=  event.type;
      }
    }
  return (
    <>
    <input type="text" name="" id="inp1" onKeyDown={handleKeyDown} />
    <button id="btn1" onClick={add1}>Add</button>
    <div style={{"border":"2px solid black", "height":"auto", "width":"300px","marginTop":"30px"}} id="div1"></div>
    <button onClick={edit}>Edit</button>
    <button onClick={eventtype}>Event Type Check</button>
    
    </>
  );
}

export default App;



