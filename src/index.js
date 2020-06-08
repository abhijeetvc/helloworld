import React from 'react';
import ReactDOM from 'react-dom';

//import App from "./App"

// function MyApp1(){
//     const firstName="John"
//     const lastName="Doe"

//     return(
//         <h1>Hello {firstName+" "+lastName}</h1>
//       //  <h1>Hello {'${firstName} ${lastName}'}!</h1>
//     )
// }

// function MyApp2(){
//     const date=new Date()

//     return(
//         <h1>It is about {date.getHours()%12} o' clock</h1>
//     )
// }

function MyApp3(){
    const date=new Date()
    const hours=date.getHours()
    let timeOfDay

   // const styles={color: "#FF8C00", backgroundColor:"#FF2D00", fontSize:"20px"}
    const styles={ fontSize: 60}

    if(hours<12){
        timeOfDay="Its Morning"
        styles.color= "#04756F"
    }else if(hours>=12 && hours<17){
        timeOfDay="Its Afternoon"
        styles.color= "#04756F"
    }else{
        timeOfDay="Its evening"
        styles.color= "#04756F"
    }

    return(
        <h1 style={styles}>Hey!!! {timeOfDay}</h1>
    )
}
ReactDOM.render(<MyApp3 />,
document.getElementById("root"));
