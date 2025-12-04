import { useState } from "react";
import UseCounter from "./useCounter";
import UseInput from "./useInput";

function CustomHook() {

    // 첫번째 카운터
    // const [count, setCount] = useState(0);
    // const plusCount = () => { setCount(count + 1); }
    // const minusCount = () => { setCount(count - 1); }
    // const resetCount = () => { setCount(0); }

    // 첫번째 카운터 customHook 사용
    const firstCount = UseCounter(0);

    // 두번째 카운터
    // const [secondCount, setSecondCount] = useState(0);
    // const plusSecondCount = () => { setSecondCount(secondCount + 1); }
    // const minusSecondCount = () => { setSecondCount(secondCount - 1); }
    // const resetSecondCount = () => { setSecondCount(0); }

    // 두번째 카운터 customHook 사용
    const secondCount = UseCounter(0);


    // ========================================================


    // input 예제

    // 이름
    // const [name, setName] = useState('');
    // const changeName = (e) => {
    //     setName(e.target.value)
    // }
    // const resetName = () => {
    //     setName('')
    // };

    const nameInput = UseInput('');

    // 나이
    const [age, setAge] = useState(0);
    const changeAge = (e) => {
        setAge(e.target.value)
    }
    const resetAge = () => {
        setAge(0);
    }


    return (

        <>
            <div>
                <h2>카운터 예제</h2>
                <p>첫번째 카운터: {firstCount.count}</p>
                <button onClick={firstCount.plusCount}>증가 +</button>
                <button onClick={firstCount.minusCount}>감소 -</button>
                <button onClick={firstCount.resetCount}>리셋</button>
            </div>
            <div>
                <h2>카운터 예제</h2>
                <p>두번째 카운터: {secondCount.count}</p>
                <button onClick={secondCount.plusCount}>증가 +</button>
                <button onClick={secondCount.minusCount}>감소 -</button>
                <button onClick={secondCount.resetCount}>리셋</button>
            </div>

            <br /><br />
            <hr />
            <br /><br />

            <div>
                <h2>입력 관리 예제</h2>
                <div>
                    <input
                        type="text"
                        value={nameInput.value}
                        onChange={nameInput.changeValue}
                        placeholder="이름을 입력해주세요"
                    />
                    <button onClick={nameInput.resetValue}>리셋</button>
                    <br />
                    <input
                        type="number"
                        value={age}
                        onChange={changeAge}
                        placeholder="나이를 입력해주세요"
                    />
                    <button onClick={resetAge}>리셋</button>
                    <p>이름 : {name}</p>
                    <p>나이 : {age}</p>
                </div>
            </div>
        </>
    )
}

export default CustomHook