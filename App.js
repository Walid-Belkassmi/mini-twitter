import { View } from "react-native";
import { NativeRouter, Routes, Route } from "react-router-native";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Login from "./pages/Login";

import globalStyles from "./styles/global";

const App = () => {
  return (
    <View style={globalStyles.container}>
      <NativeRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Nav />
      </NativeRouter>
    </View>
  );
};

export default App;
