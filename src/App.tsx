import { PropsWithChildren } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Shop from "./pages/shop/shop";

function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/sign-in" element={"SignIn"} />
        <Route path="/sign-up" element={"SignUp"} />

        <Route path="/" element={<Shop />} />

        <Route
          path="/user"
          element={
            <ProtectedRouteGuard>
              {/* <User /> */}
            </ProtectedRouteGuard>
          }
        >
          {/* <Route path="historic" element={<Historic />} /> */}
          {/* <Route path="messages" element={<Messages />} /> */}
          {/* <Route path="register" element={<Register />} /> */}
          {/* <Route path="order-confirmation" element={<OrderConfirmation />} /> */}
          {/* <Route path="payment" element={<Payment />} /> */}
          {/* <Route path="tracking" element={<Tracking />} /> */}
        </Route>
      </Routes>
    </Router>
  );
}

function ProtectedRouteGuard({ children } : PropsWithChildren) {
  const token = "useToken()";

  if (!token) {
    return <Navigate to="/sign-in" />;
  }

  return <>{children}</>;
}

export default App;
