import React, { useState } from 'react';
import Item from './Item';

const PackingList = ({ items, onDeleteItem, onToggleItem, onClearList }) => { 

    const [sortBy, setSortBy] = useState('input');

    let sortedItems;

    if (sortBy === 'input') sortedItems = items;

    if (sortBy === 'description') sortedItems = items.slice()
        .sort((a, b) => a.description.localeCompare(b.description));

    if (sortBy === 'packed') sortedItems = items.slice()
        .sort((a, b) => Number(a.packed) - Number(b.packed));

    
    return <div className="list">
        <ul>            
            {sortedItems.map((item) => (
                <Item key={item.id}
                    item={item}
                    onDeleteItem={onDeleteItem}
                    onToggleItem={onToggleItem}
                />
            ))}
        </ul>
        
        <div style={{ display: 'flex', gap: '15px' }}>
            <div className="actions">
                <select name=""
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                >
                    <option value="input">Sort by Input</option>
                    <option value="description">Sort by Description</option>
                    <option value="packed">Sort by Packed Status</option>
                </select>
            </div>
            
            <button onClick={onClearList}>clear list</button>
        </div>
    </div>
}

export default PackingList