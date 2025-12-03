import { useMemo, useState } from "react"
import Child from "./Child";

function ReactMemo() {

    const [parentAge, setParentAge] = useState(30);
    // const [childAge, setchildAge] = useState(21);

    console.log('부모 컴포넌트 작동')

    // const name = {
    //     firstName: '김',
    //     lastName: '도훈'
    // }

    const name = useMemo(() => {
        return {
            firstName: '김',
            lastName: '도훈'
        }
    }, [])
    // 빈 배열 처음 랜더링 시에만 객체 생성

    return (

        <div style={
            {
                backgroundColor: 'beige',
                padding: '50px',
            }
        }>

            <h2>부모 컴포넌트</h2>
            <p>부모 나이: {parentAge}</p>

            <br />
            <button onClick={() => { setParentAge(parentAge + 1) }}>부모 나이 카운트</button>
            {/* <button onClick={() => { setchildAge(childAge + 1) }}>자식 나이 카운트</button> */}
            <br /><br />


            {/* 자식 컴포넌트 */}
            <Child name={name} />

        </div>

    )
}

export default ReactMemo