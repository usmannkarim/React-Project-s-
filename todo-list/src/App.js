import "./App.css";
import {useState} from 'react'
 
function App() {
  const [list, setList] = useState([])
  const [inputText, setInputText] = useState()
  const [buttonMode , setButtonMode] = useState (false)
  const [currrentIndex, setCurrentIndex] = useState()

  function updateText(e){
    const value = e.target.value
    setInputText(value)
  }  

  function addItem(){
    if (inputText!==""){
    const copyList = [...list]
    copyList.push(inputText)
    setList(copyList)
    setInputText('')
  }
  else{
    alert('Empty Task Cannot be entered')
    setInputText('')
  }
 }

  function deleteItem(index){
    const copyList = [...list]
    copyList.splice(index, 1)
    setList(copyList)
    setButtonMode(false)
    setInputText('')
  }

  function editItem(index){
    //purpose: 
    // 1. show the value in the list to the input
    // 2. change the button from 'Add' to 'Update'
    const taskValue = list[index]
    setInputText(taskValue)
    setButtonMode(true)
    setCurrentIndex(index)
  } 

  function updateItem () {
    // purpose:
    // list[index] = newvalue
    // change button back to add
    // clear the input
    const copyList = [...list]
    copyList[currrentIndex] = inputText
    setList(copyList)
    setButtonMode(false)
    setInputText('')

  }

  return (
    <div className="App">
      <header className="App-header">
        <h3>Todo-List</h3>
        <div className="inputtask">
          <input required onChange={updateText} placeholder="Enter a Task to Your List" value={inputText}></input>
        </div>
        <div className="buttonsect">
        {buttonMode ? <button onClick={updateItem}>Update Task</button> : <button onClick={addItem}>Add Task</button>  }
        </div>
        <ul>
        {list.map(function(item, index){
          return <li>
          {item}
          {" "}
          <button onClick={()=> editItem(index)}>Edit Task</button>
          {" "}
          <button onClick={()=> deleteItem(index)}>Delete Task</button>
          </li>
        })}
        </ul>
      </header> 
    </div>
  );
}

export default App;
