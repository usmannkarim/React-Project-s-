import { useState } from "react";
import "./App.css";

function App() {
  const [list, setList] = useState([])
  const [inputText, setInputText] = useState()
  const [buttonSwitch, setButtonSwitch] = useState(false)
  const [currentIndex, setCurrentIndex] = useState()

  function updateText(e){
    const value = e.target.value
    setInputText(value)
  }

  function addItem(){
   const copyList = [...list]
   copyList.push(inputText)
   setList(copyList)
   setInputText('')
  }

  function deleteItem(index){
    const copyList = [...list]
    copyList.splice(index, 1)
    setList(copyList)
  }

  function editItem(index){
    const taskValue = list[index]
    setInputText(taskValue)
    setButtonSwitch(true)
    setCurrentIndex(index)
  }

  function updateTask(){
    const copyList = [...list]
    copyList[currentIndex] = inputText
    setList(copyList)
    setButtonSwitch(false)
    setInputText('')
  }
  

  return (
    <div className="App">
      <header className="App-header">
        <h3>Todo-List</h3>
        <div>
        <input onChange={updateText} placeholder="Enter any Task" value={inputText}/>
        {buttonSwitch ? <button onClick={updateTask}>Update Task</button> : <button onClick={addItem}>Add Task</button>}
        
        {list.map(function(item, index){
          return <ul>
          <li>{item}</li>
          <button onClick={()=> editItem(index)}>Edit Task</button>
          <button onClick={()=>deleteItem(index)}>Delete Task</button>


          </ul>
        })}
        </div>
      </header>
    </div>
  );
}

export default App;
