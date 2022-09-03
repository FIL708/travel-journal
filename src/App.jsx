import './App.css'
import Header from "./components/Header"
import Card from "./components/Card"
import dataForCards from "./data"

function App() {

  const cards = dataForCards.map(item => (
      <Card 
         key={item.id}
         {...item}
      />
  ))

  return (
    <div className="App">
      <Header />
      <section className='cards--list'>
         {cards}
      </section>
    </div>
  )
}

export default App
