import React from "react";
import PropTypes from "prop-types";
class Parent1 extends React.Component {
    render() {
        return (
             < > <h1> helloo
                 </h1>
             </> )
    }
}
class Child2 extends React.Component
{
    render(){
        return(
            <>
            <h1>{this.props.name}</h1>
            </>
        )
    }
}
function Parent()
{
    return(
        <>
        <h1>functional parent</h1>
        <Parent1/>
        <Child1 name="kinjal"/>
        <Child2 name="Priyank"/>
        <Defaultpropex/>
        <Testprops age="27"/>
        </>
    )
}
function Child1(props)
{
    // const name="kinjal";
    return(
        <>
        <h1>Child function {props.name}</h1>
        </>
    )
}
function Defaultpropex(props)
{
    return(
        <>
        <h1>{
        props.arrayprop.map((val,index)=>{
            return <li>{index}:{val}</li>
        })}</h1>
        <h1>{props.numberprop}</h1>
        <h1>{props.stringprop}</h1>
        <h1>{props.boolprop}</h1>
        </>
    )
}
Defaultpropex.propTypes ={
    arrayprop : PropTypes.array,
    numberprop : PropTypes.number,
    stringprop : PropTypes.string,
    boolprop : PropTypes.bool
}
Defaultpropex.defaultProps ={
    arrayprop : ["sita","priya","Meena","Geeta"],
    numberprop : 13,
    stringprop : "Hiiii",
    boolprop : true
    
}
class Testprops extends React.Component
{
    // const age=12;   class me variable declaration nahi hoga
    constructor(age)
    {
        super();
        this.age = "13";
    }
    render()
    {
       
        return(
            <>
            <h1>{this.props.age}</h1>
            </>
        )
    }
}
export default Parent;