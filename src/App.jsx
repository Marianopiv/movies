import './App.css'
import MoviesProvider from './context/MoviesProvider'
import Rutas from "./../routes/Rutas"



function App() {


  return (
    <div className="App">
      
      <MoviesProvider>
      <Rutas/>
      </MoviesProvider>
    </div>
  )
}

export default App
