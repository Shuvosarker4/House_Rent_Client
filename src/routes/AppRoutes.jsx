import { Route, Routes } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Properties from "../components/Properties/Properties";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import PrivateRoute from "../components/PrivateRoute";
import ActivateAccount from "../components/Registration/ActivateAccount";
import DashboardLayout from "../layouts/DashboardLayout";
import Profile from "../pages/Profile";
import ProductDetails from "../pages/ProductDetails";
import BookingPage from "../pages/BookingPage";
import PaymentPage from "../pages/PaymentPage";
import ThankYouPage from "../pages/ThankYouPage";
import PaymentSuccess from "../pages/PaymentSuccess";

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="properties" element={<Properties />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="activate/:uid/:token" element={<ActivateAccount />} />
          <Route path="property/:productId" element={<ProductDetails />} />
          <Route path="/booking/:productId" element={<BookingPage />} />
          <Route path="/payment" element={<PaymentPage />} />
        </Route>

        {/* Private Routes  */}
        <Route
          path="dashboard"
          element={
            <PrivateRoute>
              <DashboardLayout />
            </PrivateRoute>
          }
        >
          <Route index element={<Dashboard />} />
          <Route path="profile" element={<Profile />} />
          <Route path="payment/success" element={<PaymentSuccess />} />
        </Route>
      </Routes>
    </div>
  );
};

export default AppRoutes;
