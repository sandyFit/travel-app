import React, { useState } from 'react'

const App = () => {
    const [items, setItems] = useState([]);
    const [totalItems, setTotalItems] = useState(0);

    const addItem = (item, quantity) => {
        // Directly add the item as an object with name and quantity
        const newItem = { name: item, quantity: parseInt(quantity, 10) }; // Ensure quantity is a number
        setItems([...items, newItem]);
        setTotalItems(totalItems + quantity)

    }

    return (
        <main>
            <Logo />
            <Form onAddItem={ addItem } />
            <PackingList items={items} />
            <Stats total={ totalItems } />
        </main>
    )
}

const Logo = () => { 
    return <h1>🏝 Far Away 💼</h1>
}

// onAddItem as a prop calls the function with the new item when the form is submitted.
const Form = ({ onAddItem }) => { 

    const [item, setItem] = useState(''); 
    const [quantity, setQuantity] = useState(1); // This state allows for adding multiple items at once

    const handleSubmit = e => {
        e.preventDefault();

        if (!item || quantity < 1) return;
             
        onAddItem(item, quantity);
        setItem('');
        setQuantity(1);
        
    }

    return <div className="add-form">
        <h3>
            What do you need for your 😍 trip?
        </h3>

        <form onSubmit={handleSubmit}>

            <select name='quantity'
                id='quantity'
                value={quantity}
                onChange={e => setQuantity(Number(e.target.value))}
            >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>            
            </select>

            <input type="text"
                name="item"
                placeholder='Item...'
                value={ item }
                onChange={e => setItem(e.target.value)}
                
            />
            
            <button>add</button>
        </form>

    </div>
}

const PackingList = ({items}) => { 
    return <div className="list">
        {items.map((item, index) => (
                <div key={index} >
                    <input type="checkbox" />
                    <span>{`${item.quantity} ${item.name}`}</span>
                </div>
        ))}
        
        <div style={{display: 'flex', gap: '15px'}}>
            <button>sort by input order</button>
            <button>clear list</button>
        </div>
    </div>
}

const Stats = ({ total }) => {
    return <div className="stats">
        <p> You have {total} items on your list</p>
    </div>
}
export default App