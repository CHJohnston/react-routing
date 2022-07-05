import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Layout } from "./shared/Layout";
import { routes } from "./utils/routes";

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          {routes.map((route, idx) => (
            <Route key={idx} {...route} />
          ))}
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
