import React, { useEffect, useState } from 'react'

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

    return <form
        className="add-form"
        onSubmit={handleSubmit}>
        <h3>
            What do you need for your 😍 trip?
        </h3>

        <div >

            <select name='quantity'
                id='quantity'
                value={quantity}
                onChange={e => setQuantity(Number(e.target.value))}
            >
                {Array.from({ length: 20 }, (_, index) => index + 1).
                    map(num => (
                        <option value={num} key={num}>{num}</option>
                    ))}        
            </select>

            <input type="text"
                name="item"
                placeholder='Item...'
                value={ item }
                 onChange={e => setItem(e.target.value)}
                
            />
            
            <button>add</button>
        </div>

    </form>
}

const PackingList = ({items}) => { 
    return <div className="list">
        <ul>            
            {items.map((item, index) => (
                <Item key={index} item={item} />
            ))}
        </ul>
        
        <div style={{display: 'flex', gap: '15px'}}>
            <button>sort by input order</button>
            <button>clear list</button>
        </div>
    </div>
}

const Item = ({ item }) => {
    return <li>
        <input type="checkbox" />
        <span style={item.packed ? {textDecoration: 'line-through'} : {}}>
            {`${item.quantity} ${item.name}`}
        </span>
        <button style={{color: 'red'}}>X</button>
    </li>
}

const Stats = ({ totalItems, packedItems }) => {
    const [isEmpty, setIsEmpty] = useState(true);
    const [percentage, setPercentage] = useState(0);

    useEffect(() => {
        if (totalItems > 0) {
            setIsEmpty(false);

        setPercentage(totalItems); // Set percentage directly if total represents the packed percentage.
        } else {
            setIsEmpty(true);
        }
    }, [totalItems]); // Make sure to include 'total' in the dependency array to recalculate when it changes.

    return (
        <footer className="stats">
            {isEmpty ? (
                <em>Start adding some items to your packing list.</em>
            ) : (
                <em>You have {total} items on your list, and you already packed {percentage}%.</em>
            )}
        </footer>
    );
};

export default App