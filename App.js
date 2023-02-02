import { NativeRouter, Route, Routes } from "react-router-native";
import Header from "./Components/Header";
import Nav from "./Components/Nav";
import { UserContextProvider } from "./Context/User";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profil from "./pages/Profil";
import Signup from "./pages/Signup";
import Tweet from "./pages/Tweet";

const App = () => {
  return (
    <NativeRouter>
      <UserContextProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/Tweet/:id" element={<Tweet />} />
          <Route path="/Profil" element={<Profil />} />
        </Routes>
        <Nav />
      </UserContextProvider>
    </NativeRouter>
  );
};

export default App;
