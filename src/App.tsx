import "./App.css"
import brandSvg from "./suau.svg?url"

function App() {
  return (
    <div className="app">
      <div className="svg-container">
        <img src={brandSvg} alt="Logo" className="svg-content" />
      </div>
    </div>
  )
}

export default App
