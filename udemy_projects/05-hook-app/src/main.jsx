import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import { HooksApp } from './HooksApp'
// import { CounterApp } from './01-useState/CounterApp'
// import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook'
// import { SimpleForm } from './02-useEffect/SimpleForm'
// import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook'
// import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks'
// import { FocusScreen } from './04-useRef/FocusScreen'
// import { Layout } from './05-useLayOutEffect/LayOut'
// import { Memorize } from './06-memos/Memorize'
// import { MemoHook } from './06-memos/MemoHook'
import { CallBackHook } from './06-memos/CallBackHook'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CallBackHook />
  </StrictMode>,
)
