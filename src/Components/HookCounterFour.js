import React, { useState } from 'react';

function HookCounterFour(){
    const [item, setItem] = useState([])

    const addItem = () =>{
        setItem([...item, {
            id: item.length,
            value: Math.floor(Math.random() * 10) +1
        }])
    }

    return(
        <div>
            <button onClick={addItem}>Add Item</button>
            <ul>
                {
                    item.map((el)=>{
                        return <div><li key={el.id}>{el.value}</li></div>
                    })
                }
            </ul>
        </div>
    )
}
export default HookCounterFour