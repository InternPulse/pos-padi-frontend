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
import AddTransactionDialog from "./components/form/add-transaction/AddTransactionDialog";
import AddCustomerForm from "./components/form/add-customer-form/AddCustomerForm";
import AddCustomerDialog from "./components/form/add-customer-form/AddCustomerDialog";
import LandingPageLayout from "./pages/LandingPageLayout";
import Solution from "./components/landing-page-pages/Solution";
import About from "./components/landing-page-pages/About";
import Blog from "./components/landing-page-pages/Blog";
import Product from "./components/landing-page-pages/Product";


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
        <Route path="/solution" element={<LandingPageLayout><Solution /></LandingPageLayout>} />
        <Route path="/about" element={<LandingPageLayout><About /></LandingPageLayout>} />
        <Route path="/blog" element={<LandingPageLayout><Blog /></LandingPageLayout>} />
        <Route path="/product" element={<LandingPageLayout><Product /></LandingPageLayout>} />

        <Route path="/admin-signup" element={<AdminSignUpPage />}></Route>
        <Route path="/forgot-password" element={<ForgotPasswordPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        {/* <Route path="/demo" element={<AddCustomerDialog />}></Route> */}

      </Routes>
    </BrowserRouter>
  );
}

export default App;
