// useMemo 란

// 메모이제이션
// 동일한 값을 리턴하는 함수를 반복 호출할 때, 이전에 계산된 값을 저장을 해두고, 필요할 때마다 또 다시 계산 하지 않고 메모리에서 꺼내서 재사용하는 기법
// 더 쉽게 말해 맨처음에  랜더링할 때 캐싱해두고, 그 값이 필요할 때마다 캐시해서 꺼내서 사용함

// import {useMemo} from 'react';

// function Compoments() {
//     const value = useMemo(
//         ()=> calculate(() => {
//         // 복잡한 계산
//         return 10;
//     }, [number])
// )

//     return (
//         <div>{value}</div>
//     )
// }

// function App {
//     const [number, setNumber] = useState();
//     // state
//     return (
//         <Compoments />
//     )
// }

import { useState, useMemo, useEffect } from "react";

// function calculate(num) {
//     console.log('연산 진행 중...')
//     for (let i = 0; i < 1000000000; i++) { } // 복잡한 연산 시뮬레이션
//     return num + 10000
// }

function calculate02(num) {
    console.log('빠른 연산 진행 중...')
    return num + 1
}

function UseMemo() {
    // const [number, setNumber] = useState(1); // // 복잡한 계산기

    const [Eznumber, setEzNumber] = useState(1);

    const [isDohun, setIsDohun] = useState(true);

    // const sum = calculate(number); // 복잡한 계산기

    // const sum = useMemo(() => {
    //     return calculate(number)
    // }, [number]) // 복잡한 계산기

    const sum02 = calculate02(Eznumber);

    const student = useMemo(() => {
        console.log('학생 정보 객체 만듦')
        return {
            name: isDohun ? "도훈" : "신유"
        }
    }, [isDohun])

    useEffect(() => {
        console.log('학생 이름이 변경됨:', student.name);
    }, [student])

    return (
        <>
            {/* <div>
                <h2>계산기</h2>
                <input type="number"
                    value={number}
                    onChange={(e) => { setNumber(parseInt(e.target.value)) }} // parseInt 문자열을 숫자로 변환
                />
                <span>+ 10000 = {sum}</span>
            </div> */}

            <div>
                <h2>빠른 계산기</h2>
                <input type="number"
                    value={Eznumber}
                    onChange={(e) => { setEzNumber(parseInt(e.target.value)) }} // parseInt 문자열을 숫자로 변환
                />
                <span>+ 1 = {sum02}</span>
            </div>

            <br /><hr /><br />

            <div>
                <h2>학생 이름</h2>
                <div>
                    <p>이름 : {student.name}</p>
                    <button onClick={() => setIsDohun(!isDohun)}>이름 변경</button>
                </div>
            </div>
        </>
    )
}

export default UseMemo




// 문자열, 숫자, 불리언
// const num01 = "도훈";
// const num02 = "도훈";

// num01 === num02 (true)

// 객체 형체로 담을 때
// const student01 = {
//     name: "도훈"
// }
// const student02 = {
//     name: "도훈"
// }

// student01 === student02 (false)

// 객체를 만들 때마다 새로운 주소를 받게됨
// 즉 같은 값을 써도 주소가 다르기 때문에 매번 랜더링이 됨