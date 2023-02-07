import './App.css';
import Content from './Components/content';
import Titlebar from './Components/titlebar';
import Update from './Components/update';


function App() {
  return (
    <div className="App">
      <Titlebar />
      <Content />
      <Update />
    </div>

  );
}

export default App;
