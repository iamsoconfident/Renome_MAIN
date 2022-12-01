import Index from "./components/organisms/index";
import data from "./injection.json";

function App() {
  return (
    <div className="app">
      <Index data={data} />
    </div>
  );
}

export default App;
