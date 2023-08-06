function changeColor(ref,color,initialColor){
    ref.current.style.backgroundColor=color;
    setTimeout(
        ()=>{
            ref.current.style.backgroundColor=initialColor;
        }
        ,300)
        
}


export {changeColor};