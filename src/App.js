import './App.css';
import TasksList from "./components/tasksList"
import AddTask from "./components/addTask"

function App() {
  return (
    <div className="App">
       <AddTask/>
      <TasksList/>
     
    </div>
  );
}
export default App;
