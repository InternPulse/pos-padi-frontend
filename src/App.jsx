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
import AdminSignUpPage from "./pages/AdminSignUpPage";
import AgentDetails from "./pages/AgentDetails";
import CustomerDetails from "./pages/CustomerDetails";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import CreateNotification from "./components/CreateNotification"; // <--- ADDED THIS
import RequireAuth from "./Authentication/RequireAuth";

function App() {
  const isUserAuthenticated = false; // Update this as needed based on auth logic

  return (
    <BrowserRouter>
      <Routes>
        {isUserAuthenticated ? (
          <Route
            path="/"
            element={<RequireAuth />}>
            <Route element={<Layout />}>
              <Route
                index
                element={<Dashboard />}
              />
              <Route
                path="settings"
                element={<Settings />}
              />
              <Route
                path="transactions"
                element={<AltTransactions />}
              />
              <Route
                path="dashboard"
                element={<Dashboard />}
              />
              <Route
                path="agents"
                element={<Agents />}
              />
              <Route
                path="agents/:id"
                element={<AgentDetails />}
              />
              <Route
                path="customers"
                element={<Customers />}
              />
              <Route
                path="customers/:id"
                element={<CustomerDetails />}
              />
              <Route
                path="terminals"
                element={<Terminals />}
              />
              <Route
                path="disputes"
                element={<Disputes />}
              />
              <Route
                path="notifications/create"
                element={<CreateNotification />}
              />
            </Route>
          </Route>
        ) : (
          <>
            <Route
              path="/"
              element={<LandingPage />}
            />
            <Route
              path="/auth"
              element={<HomePage />}
            />
            <Route
              path="/admin-signup"
              element={<AdminSignUpPage />}
            />
            <Route
              path="/forgot-password"
              element={<ForgotPasswordPage />}
            />
            <Route
              path="/login"
              element={<LoginPage />}
            />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
