import {changeColor} from '../function/helperFunction'
import React, {useContext, useEffect} from 'react';
import Context from '../context/context';
import '../App.css';
import blueS from '../Sounds/blue.mp3';
import greenS from '../Sounds/green.mp3';
import redS from '../Sounds/red.mp3';
import yellowS from '../Sounds/yellow.mp3';
import wrongS from '../Sounds/wrong.mp3';
const MainApp = () => {
    const context=useContext(Context);
    let {green,blue,red, yellow,comarray,setcomarray,started,setstarted,level,setlevel,inputArray}=context;     
     function onclick(color,ref){
        console.log(inputArray);
       switch (color) {
         case 'green': inputArray.current=[...inputArray.current,1]
           break;
         case 'blue': inputArray.current=[...inputArray.current,2]
           break;
         case 'red': inputArray.current=[...inputArray.current,3]
           break;
         case 'yellow': inputArray.current=[...inputArray.current,4]
           break;
       }
       let a=inputArray.current.length-1;
       if(a<0){
        a=0;
       }
       if(inputArray.current[a]===comarray[a]){
         changeColor(ref,'rgba(26, 134, 236, 0.836)',color);
         console.log("This is running")
         if(inputArray.current.length===comarray.length){
          console.log("This is also running")
          inputArray.current=[];
          let a=Math.floor(Math.random()*4+1);
          switch (a) {
            case 1: 
            new Audio(greenS).play(); 
            setTimeout( 
              ()=>{
             changeColor(green,'aliceblue','green')
           },200);
              break;
            case 2:  
            new Audio(blueS).play();
            setTimeout(()=>{
             changeColor(blue,'aliceblue','blue')
           },200);
              break;
            case 3:
              new Audio(redS).play(); 
              setTimeout(()=>{
             changeColor(red,'aliceblue','red')
           },200);
             break;
            case 4: 
            new Audio(yellowS).play();
            setTimeout(()=>{
             changeColor(yellow,'aliceblue','yellow')
           },200);
              break;
          }
          setcomarray([...comarray,a]);
          setlevel(level+1);
     }}
       else{
         ref.current.style.backgroundColor='black';
         document.body.style.backgroundColor='red';
         new Audio(wrongS).play();
         setTimeout(()=>{
           ref.current.style.backgroundColor=color;
           document.body.style.backgroundColor='rgb(14, 1, 14';
         },700)
         setstarted(false);
         setlevel(0);
         setcomarray([]);
         inputArray.current=[];
       }
     }
     function btn(){
      if(started){
        setstarted(false);
        setlevel(0);
        setcomarray([]);
        inputArray.current=[];
        return;
      }
       let a=Math.floor(Math.random()*4+1);
       switch (a) {
        case 1: 
        new Audio(greenS).play(); 
        setTimeout( 
          ()=>{
         changeColor(green,'aliceblue','green')
       },200);
          break;
        case 2:  
        new Audio(blueS).play();
        setTimeout(()=>{
         changeColor(blue,'aliceblue','blue')
       },200);
          break;
        case 3:
          new Audio(redS).play(); 
          setTimeout(()=>{
         changeColor(red,'aliceblue','red')
       },200);
         break;
        case 4: 
        new Audio(yellowS).play();
        setTimeout(()=>{
         changeColor(yellow,'aliceblue','yellow')
       },200);
          break;
      }
       setcomarray([...comarray,a]);
       setstarted(true);
       setlevel(1);
     }
     return (
       <div className="App">
       <h1>SIMON GAME</h1>
       <div className='center'>
       <div className='block'>
        <div className='green box' ref={green} value='green' onClick={(started)?()=>{onclick('green',green)}:null}></div>
        <div className='blue box' ref={blue} name='blue' onClick={(started)?()=>{onclick('blue',blue)}:null}></div>
        <div className='red box' ref={red} name='red' onClick={(started)?()=>{onclick('red',red)}:null}></div>
        <div className='yellow box' ref={yellow} name='yellow' onClick={(started)?()=>{onclick('yellow',yellow)}:null}></div>
       </div>
       </div>
       <button className='bt' onClick={btn}>{(!started)?`START`:`END`}</button>
       {(level!==0)?<h3 className='level'>Level {level}</h3>:<h3 className='level'>GAME NOT STARTED</h3>}
       </div>
     );
}

export default MainApp