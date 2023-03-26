import "./App.css";
import MoviesProvider from "./context/MoviesProvider";
import Rutas from "./../routes/Rutas";
import LayoutProvider from "./context/LayoutProvider";

function App() {
  return (
    <div className="App ">
      <MoviesProvider>
        <LayoutProvider>
          <Rutas />
        </LayoutProvider>
      </MoviesProvider>
    </div>
  );
}

export default App;
