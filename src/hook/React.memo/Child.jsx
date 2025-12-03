// React.memo

// 자식 컴포넌트가 변화가 없으면 움직이지마!! 기존 데이터 그대로 반환해줌
// 컴포넌트를 메모이제이션해서 불필요한 리랜더링을 방지하는 고차 컴포넌트

// 고차 컴포넌트

// React.memo 사용
// - 리랜더링이 필요없는 즉 props가 자주 안바뀌는 컴포넌트
// - 랜더링이 느린 컴포넌트 (로직이 복잡한 컴포넌트)
// - 같은 props로 자주 랜더링이 되는 컴포넌트


// React.memo는 props check 통해서만 랜더링 여부를 결정함
// 만약 컴포넌트 내부에서 useState, useContext, useReducer 같은 훅을 사용하여 상태를 관리할 때는 상태가 변경되면 props 와 상관없이 컴포넌트는 리랜더링됨


import { memo } from 'react';

function Child({ name }) {

    console.log('자식 컴포넌트 작동')

    return (

        <div style={
            {
                backgroundColor: 'pink',
                padding: '30px',
            }
        }>
            <h2>자식 컴포넌트</h2>
            {/* <p>이름: {name}</p> */}
            <p>성 : {name.firstName}</p>
            <p>이름: {name.lastName}</p>
            {/* <p>나이: {age}</p> */}
        </div>

    )
}

export default memo(Child)