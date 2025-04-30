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
import RequireAuth from "./Authentication/RequireAuth";
import { getUserSummary, loginUser } from "./backend-functions/useractions-api";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";

// import NotificationsPage from "./pages/NotificationsPage";

function App() {
  // const isUserAuthenticated = true; // This is a placeholder for now and eventually will be derived from user authentication flow.


  // loginUser({
  //   "email": "owner1@test.com",
  //   "password": "Jonathan1@"
  // })

  // getUserSummary()


  return (
    // <BrowserRouter>
    //   {isUserAuthenticated ? (
    //     <Routes>
    //       <Route path="/" element={<Layout />}>
    //         <Route index element={<Dashboard />} />
    //         <Route path="settings" element={<Settings />} />
    //         <Route path="transactions" element={<AltTransactions />} />
    //         <Route path="dashboard" element={<Dashboard />} />
    //         <Route path="agents" element={<Agents />} />
    //         <Route path="agents/:id" element={<AgentDetails />} />
    //         <Route path="customers" element={<Customers />} />
    //         <Route path="customers/:id" element={<CustomerDetails />} />
    //         <Route path="terminals" element={<Terminals />} />
    //         <Route path="disputes" element={<Disputes />} />
    //         <Route path="settings" element={<Settings />} />
    //         {/* <Route path="notifications" element={<NotificationsPage />} /> */}
    //       </Route>
    //     </Routes>
    //   ) : (
    //     <Routes>
    //       <Route path="/" element={<LandingPage />}></Route>
    //       <Route path="/auth" element={<HomePage />}></Route>
    //     </Routes>
    //   )}
    // </BrowserRouter>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
          {/* protected routes */}
            <Route element={<RequireAuth />}>
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
          <Route path="/" element={<LandingPage />} />
          <Route path="/admin-signup" element={<AdminSignUpPage />}></Route>
          <Route
            path="/forgot-password"
            element={<ForgotPasswordPage />}
          ></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/auth" element={<HomePage />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
