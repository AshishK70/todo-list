import { useState } from "react";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Brush", quantity: 6, packed: true },
  { id: 6, description: "Charger", quantity: 1, packed: false },
];


function App() {
  return (
    <div className='app'>
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  )
}

function Logo() {
  return (
    <div className="App">
      <h1>Todo App</h1>
    </div>
  )
}

function Form() {
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    console.log(e);
    // alert("item added");
    if(!description) return;
    // when form submitted to get data 
    const newItem = {
      description,
      quantity,
      packed: false,
      id: Date.now(),
    }
    console.log(newItem);
    // reset the description and quanity 
    setDescription('');
    setQuantity(1);
  }
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <label>Pack your items: </label>
      <select value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}>
        {/* getting the options dynamically with array.form and map meethod */}
        {Array.from({ length: 20 }, (_, i) => i + 1).map(num => <option value={num} key={num}>{num}</option>)}
        {/* <option>Select Opion</option>
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option> */}
      </select>
      <input placeholder="Enter the quanity" value={description} onChange={(e) => setDescription(e.target.value)}></input>
      <button>Add</button>
    </form>
  )
}

function PackingList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map(item => <Item item={item} key={item.id} />)}
      </ul>
    </div>
  )
}

function Item({ item }) {
  return (
    <li>
      <span style={item.packed ? { textDecoration: 'line-through' } : {}} >{item.quantity} {item.description}</span>
      <button>❌</button>
    </li>
  )
}


function Stats() {
  return (
    <div className="stats">
      <em>You have <span>X</span> items in your list and you've packed <span>Y% </span> of items</em>
    </div>
  )
}


export default App;
