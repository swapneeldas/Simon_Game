import React,{useState,useRef} from 'react';
import Context from './context';

const State = (props) => {
    let green = useRef();
    let blue = useRef();
    let red = useRef();
    let yellow = useRef();
    let [comarray,setcomarray]=useState([]);
    let inputArray=useRef([])
    let [started,setstarted]=useState(false);
    let [level,setlevel]=useState(0);
    return(
    <Context.Provider value={{green,blue,red, yellow,comarray,setcomarray,started,setstarted,level,setlevel,inputArray}}>
        {props.children}
    </Context.Provider>);
}

export default State;