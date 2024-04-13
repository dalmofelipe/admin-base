

import './App.css';
import Aside from './components/Aside';
import Content from './components/Content';
import Toolbar from './components/Toolbar';

function App() {
  return (
    <div className="App">
      <Aside />
      <Toolbar />
      <Content />
    </div>
  );
}

export default App;
