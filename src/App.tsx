import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import ListLaunch from "./components/ListLaunch";
import Home from "./pages/Home";
import Details from "./pages/Details";

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/list" element={<ListLaunch />} />
          <Route path="/:id" element={<Details />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
