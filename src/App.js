import { Routes, Route } from 'react-router-dom';

// Pages
import Home from './pages/Home';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/details/:id" element={<Currency />} /> */}
    </Routes>
  );
}

export default App;
