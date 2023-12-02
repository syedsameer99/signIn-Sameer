import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContextProvider from "./context/MyContext";
import SignInScreen from "./components/SignInScreen";

function App() {
  return (
    <BrowserRouter>
      <ContextProvider>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in-screen" element={<SignInScreen />} />
        </Routes>
      </ContextProvider>
    </BrowserRouter>
  );
}

export default App;
