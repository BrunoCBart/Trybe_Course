import './App.css';


const Task = (value) => {
  return (
    <li>{value}</li>
  );
}
const toDOList = ['Acordar', 'Escovar os dentes', 'Tomar banho', 'Treinar', 'Desenhar', 'Estudar']

function App() {
  return (
    <ul>{toDOList.map(toDo => Task(toDo))}</ul>
  );
}

export default App;
