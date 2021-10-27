import React, { useState } from 'react'

const FilterTodo = ({onFilter}) => {
const [value, setValue] = useState('')
const filterOn = () => {
    onFilter(value)
}





    return (
        <form style={{marginBottom: "5px"}}>
            <input type="text" placeholder="Filter me, please..." onChange={(event) => {setValue(event.target.value); filterOn()}}></input>
        </form>
    )
}

export default FilterTodo