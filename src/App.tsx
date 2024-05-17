import { BrowserRouter, Route, Routes } from "react-router-dom";
import LayoutDefault from './layouts/Default';
import Dashboard from './pages/Dashboard';
import Produtos from "./pages/Produtos";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutDefault />}>
          <Route index element={<Dashboard />} />
          <Route path="/" element={<Dashboard />} />
          <Route path='/products' element={<Produtos />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
