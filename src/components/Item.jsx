import React from 'react'

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

export default Item