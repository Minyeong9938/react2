import { useState } from "react"

function UseInput(initialValue = '') {

    const [value, setValue] = useState(initialValue);
    const changeValue = (e) => {
        setValue(e.targer.value)
    }
    const resetValue = () => {
        setValue(initialValue)
    }

    return { value, changeValue, resetValue }
}

export default UseInput