import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Store, About, Home } from './pages/_index';

function App() {

  return (
    <Container className="mb-4">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/store" element={<Store />}/>
        <Route path="/about" element={<About />}/>
      </Routes>
    </Container>
  )
}

export default App
