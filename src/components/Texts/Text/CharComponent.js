import React,{useEffect,useRef} from 'react';


const CharComponent=(props)=>
{
  //useEffect is a lifecycle hook like class constructor in functional but you can have nore than one useEffect
  //useEffect called after the page renders
  //if ytou pass empty array it executed once while renders
  // if you want to use for specific prop then use [prop.persons]
  //use empty return in the useEffect to clean up the props.persons data
  //const buttonRef= useRef();

  useEffect(()=>
  {
    console.log("[CharComponent] render");

    const timer=setTimeout(()=>{
      alert("You are a genius Prasad");
    },100000);
    return()=>
    {
    console.log("[CharComponent] empty return ");
      clearTimeout(timer);
    }

  },[props.persons]);

/*useEffect(()=>
{
  buttonRef.current.click();

},[]);*/

let style=
{
  display:"inline-block",
  padding:"16px",
  textAlign:"center",
  margin:"16px",
  border:"1px solid black"

}
return(

  <div style={style}  onClick={props.click}>
  {props.textChanged}

</div>

)

}
export default React.memo(CharComponent);
