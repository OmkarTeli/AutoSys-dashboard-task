import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import Dashboard from "./pages/Dashboard.js";
import Analytics from "./pages/Analytics.js";
import Tasks from "./pages/Tasks.js";
import Transactions from "./pages/Transactions.js";
import Topbar from "./components/Topbar.js";
import Help from "./pages/Help.js";
function App() {
  return (
    <>
      <Topbar />
      <div className="w-full flex">
        <BrowserRouter>
          <NavigationBar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/Tasks" element={<Tasks />} />
            <Route path="/transactions" element={<Transactions />} />
            <Route path="/help" element={<Help />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
