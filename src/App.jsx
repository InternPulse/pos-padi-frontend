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
import { createAgent, getUserSummary } from "./server-actions";

// import NotificationsPage from "./pages/NotificationsPage";

function App() {
  const isUserAuthenticated = true; // This is a placeholder for now and eventually will be derived from user authentication flow.

//   console.log(createAgent(
//     {
//     "first_name": "Agent",
//     "last_name": "Agent",
//     "email": "agent1@test.com",
//     "phone": "+234000000000",
//     "nin": "00000000000"
// }
// ))

// console.log(getUserSummary("basicAuthUsername", "basicAuthPassword"))

  return (
    <BrowserRouter>

      {isUserAuthenticated ? (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="settings" element={<Settings />} />
            <Route path="transactions" element={<AltTransactions />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="agents" element={<Agents />} />
            <Route path="customers" element={<Customers />} />
            <Route path="terminals" element={<Terminals />} />
            <Route path="disputes" element={<Disputes />} />
            <Route path="settings" element={<Settings />} />
            {/* <Route path="notifications" element={<NotificationsPage />} /> */}
          </Route>
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
        </Routes>
      )}

    </BrowserRouter>
  );
}

export default App;
