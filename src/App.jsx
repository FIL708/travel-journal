import './App.css'
import Header from "./components/Header"
import Card from "./components/Card"
import dataForCards from "./data"

function App() {
  return (
    <div className="App">
      <Header />
      <Card {...dataForCards[0]}/>
    </div>
  )
}

export default App
