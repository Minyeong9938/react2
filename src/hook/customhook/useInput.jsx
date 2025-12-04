import { useState } from "react"

function UseInput(initialValue = '') {
    const [name, setName] = useState(initialValue);
    const [age, setAge] = useState(initialValue);
    const changeName = (e) => { setName(e.target.value) };
    const resetName = () => { setName(initialValue) };
    const changeAge = (e) => { setAge(e.target.value) };
    const resetAge = () => { setAge(initialValue) };
    return { name, age, changeName, changeAge, resetAge, resetName }
}

export default UseInput