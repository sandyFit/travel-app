import React, { useEffect, useState } from 'react';
import Logo from './components/Logo';
import Form from './components/Form';
import PackingList from './components/PackingList';
import Stats from './components/Stats';

const App = () => {
    const [items, setItems] = useState([]);
    

    const addItem = (item, quantity) => {
        // Directly add the item as an object with name and quantity
        const newItem = { name: item, quantity: parseInt(quantity, 10), packed: false, id: Date.now() }; // Ensure quantity is a number
        setItems([...items, newItem]);
        
    }

    const deleteItem = (id) => {
        setItems(items => items.filter((item) => item.id !== id));
    }

    const toggleItem = id => {
        setItems(items =>
            items.map(item =>
                item.id === id ? { ...item, packed: !item.packed }
                    : item

        ))
    }

    const handleClearList = () => {
        const confirmed = window.confirm('are you sure you want to clea the list?');

        if (confirmed) setItems([]);

    }

    return (
        <main>
            <Logo />
            <Form onAddItem={ addItem }  />
            <PackingList items={items}
                onDeleteItem={deleteItem}
                onToggleItem={toggleItem}
                onClearList ={handleClearList}
            />
            <Stats items={items} />
        </main>
    )
}







const Item = ({ item, onDeleteItem, onToggleItem}) => {

    return (
        <li>
        <input type="checkbox" value={item.packed} onChange={() => onToggleItem(item.id)}/>
        <span style={item.packed ? {textDecoration: 'line-through'} : {}}>
            {`${item.quantity} ${item.name}`}
        </span>
        <button style={{ color: 'red' }}
            onClick={() => onDeleteItem(item.id)}
        >
            X
        </button>
        </li>
    )
}


export default App;
