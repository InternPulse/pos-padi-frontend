import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Settings from "./pages/Settings";
import Dashboard from "./pages/Dashboard";
import Layout from "./pages/Layout";
import AltTransactions from "./components/alt/transactions/AltTransactions";




import Agents from "./pages/Agents";
import Customers from "./pages/Customers";
import Terminals from "./pages/Terminals";
import Disputes from "./pages/Disputes";

import NotificationsPage from "./pages/NotificationsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="settings" element={<Settings />} />
          <Route path="transactions" element={<AltTransactions />} />
          <Route path='dashboard' element={<Dashboard />} />
          <Route path='agents' element={<Agents />} />
          <Route path='customers' element={<Customers />} />
          <Route path='terminals' element={<Terminals />} />
          <Route path='disputes' element={<Disputes />} />
          <Route path='settings' element={<Settings />} />
          <Route path='notifications' element={<NotificationsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
