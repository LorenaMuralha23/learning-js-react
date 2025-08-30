import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

interface ICompontentProp {
    chosedFont: string;
    chosedFontSize: string;
    chosedFontWeight: string;
    chosedFontColor: string;
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <ComponentTest
          chosedFontSize="20px"
          chosedFontWeight="light"
          chosedFontColor="purple" 
          chosedFont={'Arial'}        
          />
      </div>
    </>
  )
}

export default App

const ComponentTest = (props: ICompontentProp) => {
  return (
    <div style={{border: "1px solid black"}}>
      <h1 style={{ fontSize: `${props.chosedFont}`, fontWeight: `${props.chosedFont}`, color: `${props.chosedFontColor}` }}>Texto com as proporiedades escolhidas</h1>
    </div>
  )
}