// useCallback
// 메모이제이션 역할
// 특정 함수가 의존성 배열에 명시된 값이 변경 될 때만 새로 생성되도록 함.
// 불필요한 함수 재생성 방지

import { useCallback, useState } from "react"
import Box from "./Box"


function UseCallback() {

    const [size, setSize] = useState(100)

    // 모드 전환
    const [isDark, setIsDark] = useState(false);

    const boxStyle = useCallback(() => {
        return {
            width: `${size}px`,
            height: `${size}px`,
            backgroundColor: "pink",
        }
    }, [size])

    return (

        <div
            style={
                {
                    backgroundColor: isDark ? 'black' : '#f0f0f0',
                    padding: '20px',
                }
            }
        >

            {/* 모든 전환 버튼 */}
            <button onClick={() => setIsDark(!isDark)}>모드 전환</button>
            <button onClick={() => setSize(size + 10)}>박스 커짐</button>
            <button onClick={() => setSize(size - 10)}>박스 작아짐</button>

            <br /><br />

            <Box boxStyle={boxStyle} />

        </div>
    )
}

export default UseCallback



// useMemo는 값을 메모함

// useCallback는 함수를 메모함




// React.memo
// props