import React from "react";
function FetchApidata()
{
  let html=" <table border=1 width=100%><caption><h1>Product List</h1></caption><th>id</th><th>Title</th><th>Price</th><th>Description</th><th>Category</th><th>Image</th><th>Rating</th>";;
  fetch('https://fakestoreapi.com/products')
  .then((res) => { return res.json() })
  .then((data) => {
      data.map(function (products) {
          html += `
              
                  <tr>
                  <td>${products.id}</td>
                  <td>${products.title}</td>
                  <td>${products.price}</td>
                  <td>${products.description}</td>
                  <td>${products.category}</td>
                  <td><img src="${products.image}" height="100px" width="100px"></td>
                  <td>Rate=${products.rating.rate}<br/>Count=${products.rating.count}</td>
                  </tr>`
      })
      html+=`</table>`
document.getElementById('d1').innerHTML = html;
  });
  
}
function GetData(props)
{
    return(
        <>
            <p>{props.data.name}</p>
            <p>{props.data.email}</p>
            <p>{props.data.course}</p> 
           
        </>
    )
}

function Content(props) {
  const arr = [{name:"kinjal" ,id:1},{name:"Viral",id:2}, {name:"Rekha"}]


    const data = {
  
        name:"kinjal",
        email:"kinjal@gmail.com",
        course:"React JS"
    }
  
  return (
    <>
      <div className="content h1">
        <div className="header">
          <div className="content">Functional Componant
            <h5>{props.name}</h5>
            <GetData data={data}/>
            {
                    arr.map((v,i) =>
                    <li key={i}>
                        {v.name}
                    </li>
                    )
            }
          <div id="d1">
  
  </div>
          </div>
          
          <div className="content">Class Componant
          <p><Exstate/></p></div>
        </div>
        <button onClick={(event) => alert(event.type)}>Click</button>
        <button onClick={()=> { arr.map((v)=>
            alert(`${v.name}`))}}>Click data on alert</button>
            <button onClick={FetchApidata}>Fetch API Data</button>
      </div>

    </>
  );
}

export default Content;
 class Exstate extends React.Component
 {
  constructor()
    {
      super();
      this.state ={name:"kinjal"}
    }
    Detatils = () =>
    {
      // this.setState({name:"xyz"})
      this.setState((prename)=>({
        name: prename.name + " " + "sutariya"
      }))
    }
  render()
  {
    return(
      <>
     {this.state.name}
     <br/>
      <button onClick={this.Detatils}>Change State Value</button></>
    )}
       
 }