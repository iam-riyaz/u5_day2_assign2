
import './App.css';

function App() {
  let links=["Service","Project","About"]
  return (
    <div className="App">
      <div className='navbar'>
       {<Logo/>}
      
        <div id='linkdiv'> {links.map((item)=>{
           return <Links link={item} />
         })}
         </div>
       {<Button/>}
      </div>
    </div>
  );
}


// components
function Logo(){
  return <img src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" alt="logo" className='logo' />
}

function Links(props){
return <h4 className='mylink'>{props.link} </h4>
}

function Button(){
return <button className='btn'>Connect</button>
}
export default App;
