import React,{useState} from "react";
import Header from "./header";
import Footer from "./footer";
import Custom from "./custom"

//props = {name:"golu"}


//  first render [100,fn] second render [-250,fn]
function App(){

    const [counter,setCounter] = useState(100);

    function  btnClick(){
        setCounter(-250);
       }
    return(
        <div>
            <Header/>
            <h1>counter: {counter}</h1>
            <button onClick={btnClick}>Increase me</button>
            <button onClick={btnClick}>Decrease me</button>
            <Footer/>
            <Custom name = "golu"/> 
             
        </div>
    )
}

export default App;