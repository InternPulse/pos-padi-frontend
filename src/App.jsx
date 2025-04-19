import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Settings from "./pages/Settings";
import Dashboard from "./pages/Dashboard";
import Layout from "./pages/Layout";
import Transactions from "./pages/Transactions";

import TopAgent from "./pages/TopAgent";



import Agents from "./pages/Agents";
import Customers from "./pages/Customers";
import Terminals from "./pages/Terminals";
import Disputes from "./pages/Disputes";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="settings" element={<Settings />} />
          <Route path="transactions" element={<Transactions />} />
          <Route path='dashboard' element={<Dashboard />} />
          <Route path='transactions/settings' element={<Settings />} />
          <Route path='agents' element={<Agents />} />
          <Route path='customers' element={<Customers />} />
          <Route path='terminals' element={<Terminals />} />
          <Route path='disputes' element={<Disputes />} />
          <Route path='settings' element={<Settings />} />
          <Route path='topagents' element={<TopAgent />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
