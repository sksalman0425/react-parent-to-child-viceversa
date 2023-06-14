import React from "react";

function Child(props){

    const email="junnukhan@gmail.com";
    const person={
        name:"salman",
        Address:"PBN"
    }

    return(
        <>
        <h1>It is Child component and name comes from parent component : {props.name}</h1>
        <button onClick={()=>props.CBFunction(email,person)}>Click me</button>
        </>

    );
}

export default Child;