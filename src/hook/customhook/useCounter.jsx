import { useState } from "react"


// 함수 이름은 반드시 'use'로 시작
// initialValue = 0 은 기본값 설정(아무것도 안넣으면 0으로 시작)
function UseCounter(initialValue = 0) {
    // useState useEffect 등 hook을 사용할 수 있음

    const [count, setCount] = useState(initialValue);
    // count: 현재 숫자값 (처음에는 initialValue 값)

    const plusCount = () => { setCount(count + 1); }
    const minusCount = () => { setCount(count - 1); }
    const resetCount = () => { setCount(initialValue); }

    return { count, plusCount, minusCount, resetCount }
}

export default UseCounter