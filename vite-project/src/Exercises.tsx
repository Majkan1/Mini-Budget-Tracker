import {useState} from 'react';
function App() {
  return(
    <div>
      {/*
      <Input/>
      <SimpleInput/>
      <Game/>
      <NameGreeter/>
      <ToDoApp/>
      <ToDoApp1/>
      <TurnOffOn/>
      <TextArea/>
      <Input1/>
      <ButtonLiked/>
      <SimpleAgeChecker/>
      <Buttons/>
      <Read/>
      <Read1/>
      <Farenheit/>
      <Name/>
      <Lift/>
      */}
      <Map/>
    </div>
  )
}
export default App;

/*  function Counter(){

  const [value, setValue] = useState(0);

  return (
    <div className = "Main" style = {{
      marginLeft:'25px',
      backgroundColor:
      value>5?'blue':value === 0 ? 'red':'transparent'
      }}>
      {<p>{value>=10?"The value can not  go any further":value}</p>}
      <button onClick={() => setValue((v) => v + 1)}>+</button>
      <button onClick={() => setValue((v) => Math.max(0,v - 1))}>-</button>
    </div>
  );
}
function Form(){
  return (
    <form>
      <input type = "text"/>
      <input type = "email"/>
      <button type='submit'>Submit</button>
    </form>
  )
}
Form();

function BasicButton(){
  return(
    <div>
      <button onClick = {()=>{console.log('Clicked')}}>Click me </button>
    </div>
  )
}

function Text(){
  const [isOne,setisOne] = useState(false);
  return(
    <div>
      <p onClick={()=>setisOne((prev)=>(!prev))}>
        {isOne?'clicked':'Hello'}
      </p>
    </div>
  )
}

function HideText(){
  const [show,setshow] = useState(false);
  return(
    <div>
      <p onClick={()=>setshow((prev)=>(!prev))}>
        {show?'Secret message':'Click to show'}
        </p>
    </div>
  )
}


function Input(){
  const [text,settext] = useState(false);
  const [hide,sethide] = useState(false);
  const name  = "Mikołaj";
  return (
    <div>
      <p>Hello React</p>
      <p>Hi {name}</p>
      <button onClick={() => { console.log('Clicked');}}>Click me</button>
      <p onClick = {()=>{settext(prev=>!prev)}}>
        {text?'Hello':'Clicked'}
      </p>
      <p onClick = {()=>{sethide(prec=>!prec)}}>
        {hide?'Secret message':'ole'}
      </p>
      <input onChange = {()=>{}} type = 'text'/>
      <p>You typed {}</p>
    </div>
  )
}

function SimpleInput(){
  const [input,setinput] = useState('');
  return (
    <div>
      <input 
      type='text'
      value={input}
      onChange={(e)=>{setinput(e.target.value)}}/>
      <p>Text is :{input}</p>
    </div>
  )
}

function Game(){
  const [number,setnumber] = useState(0);
  return(
    <div>
      <p>{number > 10 ? 'This number is to big' : number}</p>
      <button onClick={()=>{setnumber(number+1)}}>+1</button>
      <button onClick={()=>{setnumber(number+5)}}>+5</button>
      <button onClick={()=>{setnumber(0)}}>Reset</button>
    </div>
  )
}

function NameGreeter(){
  const [name,setname] = useState('');
  return (
    <div>
      <input 
      type = 'text'
      value = {name}
      onChange = {(e)=>{setname(e.target.value)}}
      />
      <button>Click me</button>
      <p>{name.length===0?'Error':`Hello ${name}`}</p>
    </div>
  )
}

function ToDoApp(){
  const [inputValue,setInputValue] = useState('');
  const [task,setTask] = useState<string[]>([]);
  const addTask = () => {
    if(inputValue !== ''){
      setTask([...task,inputValue]);
      setInputValue('');
    }
  };
  return (
    <div>
      <h3>My To-Do list</h3>
      <h4>The number of active task :{task.length}</h4>
      <input 
      type = 'text'
      value = {inputValue}
      onChange = {(e)=>{setInputValue(e.target.value)}}
      />
      <button onClick = {addTask}>Add</button>
      <ul>
        {task.map((task,index)=> (
          <li key = {index}>{task}</li>
        ))}
      </ul>
    </div>
  );
}

function ToDoApp1(){

  const [inputValue,setInputValue] = useState('');

  const [task,setTask] = useState<string[]>([]);

  const AddTask = () =>{
    if(inputValue !== ''){
      setTask([...task,inputValue]);
      setInputValue('');
    }
  }
  return (
    <div>
      <input
      type = 'text'
      value = {inputValue}
      onChange = {(e)=>{setInputValue(e.target.value)}}
      />
      <button onClick = {AddTask}>Add</button>
      <ul>
        {task.map((task,index)=>(
          <li key = {index}>{task}</li>
        ))}
      </ul>
    </div>
  )
}

function TurnOffOn(){
  const [stan,setStan] = useState<boolean>(true);
  return (
    <div>
      <button onClick = {()=>{setStan(prev=>!prev)}}>
        {stan?'TURN OFF':'TURN ON'}
      </button>
      <p>Status is {stan?'ON':'OFF'}</p>
    </div>
  )
}

function TextArea(){
  const [tekst,setTekst] = useState('');
  return (
    <div style = {{backgroundColor:tekst.length === 20?'red':'transparent'}}>
      <textarea 
      maxLength={20}
      value = {tekst}
      onChange = {(e)=>{setTekst(e.target.value)}}/>
      <p>{tekst.length}/20</p>
    </div>
  )
}

function Input1(){
  const [isOn,setIsOn] = useState(true);
  return (
    <div>
      <input
      type = {isOn?'text':'password'}
      />
      <button onClick = {()=>{setIsOn(prev=>!prev)}}>
        {isOn?'Hide':'Show'}
      </button>
    </div>
  )
}

function ButtonLiked(){
  const [liked, setLiked] = useState(false);
  return (
    <div>
      <button onClick={() => setLiked((prev) => !prev)}>
        {liked ? '❤️ Liked' : '🤍 Like'}
      </button>
    </div>
  )
}

function SimpleAgeChecker(){
  const [age,setAge] = useState<number>(0);
  return (
    <div>
      <input
      type = "number"
      value = {age}
      onChange = {(e)=>{setAge(e.currentTarget.valueAsNumber)}}
      />
      <button>Check</button>
      <p>{age>=18?'You are adult':'You are not adult'}</p>
    </div>
  )
}

function Buttons(){
  const [color,setColor] = useState('');
  return (
    <div>
      <button  style = {{backgroundColor:color}} onClick = {()=>setColor('red')}>Red</button>
      <button style = {{backgroundColor:color}} onClick = {()=>{setColor('White')}}>White</button>
      <button style = {{backgroundColor:color}} onClick = {()=>{setColor('Blue')}}>Blue</button>
    </div>
  )
}

function Read(){
  const [isVisible,setIsVisible] = useState(true);
  const text = 'This is just a normal and plain text';
  return (
    <div>
      <p> {text.length > 20 ? text.slice(0, 20) + '...' : text}</p>
      <button onClick = {()=>{setIsVisible(e=>!e)}}>
      {isVisible?'Hide':'Show more'}
      </button>
    </div>
  )
} 

function Read1(){
  const [isVisible,setIsVisible] = useState(false);
  const text = 'This is just a normal and plain text';
  return (
    <div>
      <p> {isVisible ?text:text.slice(0,20) + '...'}</p>
      <button onClick = {()=>{setIsVisible(!isVisible)}}>
      {isVisible?'Show less':'Show more'}
      </button>
    </div>
  )
} 

function Farenheit(){
  const [temperature,setTemperature] = useState<number>(0);
  return (
    <div>
      <input 
      type = "number"
      value =  {temperature}
      onChange = {(e)=>{setTemperature(e.currentTarget.valueAsNumber)}}
      />
      <p>The temperature is :{(temperature *9/5) +32}</p>
    </div>
  )
}

function UserCard(props:{name:string,age:number,isOnline:boolean}){
  return (
    <div>
      <h1>
       <p> Hello,{props.name}</p>
       <p> Hello,{props.age}</p>
      <p>Hello,{props.isOnline ? 'Online':"Offline"}</p>
      </h1>
    </div>
  )
}

function Name(){
  return (
    <div>
      <UserCard name = "Ola"  age = {17} isOnline = {true}/>
      <UserCard name = "Piotrek" age = {18} isOnline = {false}/>
      <UserCard name = "Ilona" age = {10} isOnline = {true}/>
    </div>
  )
}

function Lift(){
  const [inside,setInside] = useState('');
  const Clear = () => {
    setInside('');
  }
  return (
    <div>
      <input
      type = "text"
      value = {inside}
      onChange = {(e)=>{setInside(e.target.value)}}
      />
      <input
      type = 'text'
      value = {inside}
      onChange = {(e)=>{setInside(e.target.value)}}/>
      <FirstInput onClear = {Clear}/>
    </div>
  )
}

function FirstInput(props :{onClear: () => void}){
  return(
    <div>
      <button onClick={props.onClear}>Clear</button>
    </div>
  )
}

function Parent(){
  const [state,isState] = useState(true);

  const Change  = () => {
    isState(prev=>!prev);
  }
  return (
    <div>
      <Switch onClick = {Change}/>
      <Text stan = {state}/>
    </div>
  )
}

function Text(props: {stan:boolean}){
  return (
    <div>
      <p>{props.stan?'ON':'OFF'}</p>
    </div>
  )
}

function Switch(props : {onClick : () => void}){
  return (
    <div>
      <button onClick = {(props.onClick)}>Switch</button>
    </div>
  )
}

function LikeIT(){
  const [count,setCount] = useState(0);
  useEffect(()=>{
    document.title = 'Count' + count;
  },[count]);
  return (
    <div>
      <button onClick = {() =>{setCount(count+1)}}>Click me</button>
    </div>
  )
}
*/
function Map(){
  const [task,setTask] = useState<string[]>([]);
  const [newTask,setNewTask] = useState('');
  const AddTask = () => {
    if(!newTask){
      alert('You must write something to add');
      return;
    }
    setTask([...task,newTask]);
    setNewTask('');
  }

  const RemoveAllItem = () => {
    setTask([]);
  }

  const RemoveItem = (indexToRemove: number) => {
    setTask(task.filter((_, index) => index !== indexToRemove));
  }
return (
  <div>
    <input
      value = {newTask}
      placeholder='Write here a task you want to add to your task list'
      onChange = {(e)=>{setNewTask(e.target.value)}}
    />
    <button onClick={AddTask}>Add</button>
    <ul>
      {task.map((task, index) => (
        <li key={index}>
          {task}
          <button onClick={() => RemoveItem(index)}>Remove single item</button>
        </li>
      ))}
    </ul>
    <button onClick={RemoveAllItem}>Remove all items</button>
  </div>
)
}