import FirstSection from './Section01.jsx'
import SecondSection from './Section02.jsx'

// import { useContext } from "react"
// import { ThemeContext } from "./ThemeContext"

function Page() {

    // const data = useContext(ThemeContext);
    // console.log(data)

    return (
        <>
            <FirstSection />
            <SecondSection />
        </>
    )
}

export default Page