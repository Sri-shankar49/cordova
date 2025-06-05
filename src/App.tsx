// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './layout/layout'
import { Todos } from './pages/Todos'
import Weather from './pages/Weather'
import { Dashboard } from './pages/Dashboard'

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}


      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Dashboard />} /> {/* 👈 Renders at /app/ */}
            <Route path="/Weather" element={<Weather />} /> {/* 👈 Renders at /app/ */}
            <Route path="/Todos" element={<Todos />} /> {/* 👈 Renders at /app/ */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
