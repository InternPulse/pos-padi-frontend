import { BrowserRouter, Routes, Route } from "react-router-dom";
import Settings from "./pages/Settings";
import Dashboard from "./pages/Dashboard";
import Layout from "./pages/Layout";
import AltTransactions from "./components/alt/transactions/AltTransactions";
import Agents from "./pages/Agents";
import Customers from "./pages/Customers";
import Terminals from "./pages/Terminals";
import Disputes from "./pages/Disputes";
import AdminSignUpPage from "./pages/AdminSignUpPage";
import AgentDetails from "./pages/AgentDetails";
import CustomerDetails from "./pages/CustomerDetails";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import RequireAuth from "./Authentication/RequireAuth";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";


import AddTransactionBackup from "./components/form/add-transaction/AddTransactionBackup";
import ConfirmationModal from "./components/ConfirmationModal";
import AgentDeactivation from "./components/alt/transactions/Effects/AgentDeactivation";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RequireAuth />}>
          {/* protected routes */}
            <Route element={<Layout />}>
              <Route index element={<Dashboard />} />
              <Route path="settings" element={<Settings />} />
              <Route path="transactions" element={<AltTransactions />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="agents" element={<Agents />} />
              <Route path="agents/:id" element={<AgentDetails />} />
              <Route path="customers" element={<Customers />} />
              <Route path="customers/:id" element={<CustomerDetails />} />
              <Route path="terminals" element={<Terminals />} />
              <Route path="disputes" element={<Disputes />} />
              <Route path="settings" element={<Settings />} />
            </Route>
        </Route>
        {/* public routes */}

        <Route path="/home" element={<LandingPage />} />
        <Route path="/admin-signup" element={<AdminSignUpPage />}></Route>
        <Route path="/forgot-password" element={<ForgotPasswordPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/demo" element={<AgentDeactivation />}></Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
