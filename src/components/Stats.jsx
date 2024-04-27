import React from 'react'

const Stats = ({ items }) => {
    // Early return
    if (!items.length)
        return (
            <p className='stats'>
                <em>
                    Start adding items to your packing list 🚀
                </em>
            </p>
    )


    const totalItems = items.length;
    const packedItemsCount = items.filter(item => item.packed).length;
    const percentage = Math.round(packedItemsCount / totalItems * 100)
 

    return (
        
        <footer className="stats">
            <em>

                {percentage === 100 ? (
                    'You got everything ready to go ✈'
                ) : (
                        `💼 You have ${totalItems} items on your list, and you already packed 
                    ${packedItemsCount} (${percentage})% `
                )
                }
            </em>
            
        </footer>
    );
};


export default Stats