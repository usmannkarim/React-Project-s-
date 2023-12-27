import './App.css';
import { useState } from 'react';

function App() {
  const [list, setList] = useState([])
  const [inputText, setInputText] = useState()
  const [buttonMode, setButtonMode] = useState(false)
  const [currentIndex, setCurrentIndex] = useState()

  function updateText(e){
    const value = e.target.value
    setInputText(value)
  }

  function addItem(){
    if(inputText !==''){
    const copyList = [...list]
    copyList.push(inputText)
    setList(copyList)
    setInputText('')
    setButtonMode(false)
    }
    else{
      alert('Empty Task cannot be Entered')
      setInputText('')
    }
  }

  function deleteItem(index){
    const copyList = [...list]
    copyList.splice(index, 1)
    setList(copyList)
    setInputText('')
    setButtonMode(false)
  }

  function editItem(index){
    const taskValue = list[index]
    setInputText(taskValue)
    setButtonMode(true)
    setCurrentIndex(index)
  }

  function updateItem(index){
    const copyList = [...list]
    copyList[currentIndex] = inputText
    setList(copyList)
    setInputText('')
    setButtonMode(false)
  }
  
  function deleteAll(index){
    // add if condition to check if input is null how can we delete all entries
    const copyList = [...list]
    copyList.splice(index)
    setList(copyList)
    setInputText('')
    setButtonMode(false)
  }

  return (
    <div className="App">
      <header className="App-header">
      <h4>TodoList</h4>
       <div className='inputUser'>
       <input onChange={updateText} placeholder='Enter a Task' value={inputText}/> <br />
       {buttonMode? <button onClick={updateItem}>Update Task</button>: <button onClick={addItem}>Add Task</button>}
       <button onClick={deleteAll}>Delete All Entries in the List</button>

       {list.map(function(item, index){
        return <ul>
        <li className = {currentIndex === index ? 'edit-mode':''}>{item}
       <button onClick={()=> editItem(index)}>Edit Task</button>
      <button onClick={()=> deleteItem(index)}>Delete Task</button>
      </li>
        </ul>
       })}
       </div>
      </header>
    </div>
  );
}

export default App;
