import { useContext, useEffect, useState } from "react";
import { Button, Text, TextInput, View } from "react-native";
import { Link, useNavigate } from "react-router-native";
import { LogUSer, User } from "../API/User";
import { UserContext } from "../Context/User";
import loginStyles from "../styles/Login";
import signupStyles from "../styles/Signup";

export default Login = () => {
  const { user, setUser, setToken } = useContext(UserContext);

  const [password, setPassword] = useState("temptemp");
  const [email, setEmail] = useState("hello75@yopmail.com");

  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user]);

  const handleSubmit = async () => {
    const body = {
      email,
      password,
    };

    const response = await LogUSer(body);

    setToken(response.access_token);
  };

  return (
    <View style={signupStyles.signupContainer}>
      <Text style={signupStyles.Titre}>Login</Text>

      <View style={signupStyles.inputContainer}>
        <Text>Email</Text>

        <TextInput
          style={signupStyles.input}
          value={email}
          onChangeText={(value) => setEmail(value)}
        />
      </View>

      <View style={signupStyles.inputContainer}>
        <Text>Password</Text>

        <TextInput
          style={signupStyles.input}
          value={password}
          onChangeText={(value) => setPassword(value)}
          secureTextEntry
        />
      </View>

      <Button title="Login" onPress={handleSubmit} />
      <Link to={"/signup"} style={loginStyles.link}>
        <Text>Sign Up</Text>
      </Link>
    </View>
  );
};
