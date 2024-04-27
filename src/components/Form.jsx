import React, {useState} from 'react'

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

export default Form