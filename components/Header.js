import { useContext, useEffect } from "react";
import { Text, View } from "react-native";
import { UserContext } from "../Context/User";
import headerStyles from "../styles/Header";

const Header = () => {
  const { user } = useContext(UserContext);

  useEffect(() => {}, [user]);
  return (
    <View style={headerStyles.headerContainer}>
      <View style={headerStyles.container}>
        <Text style={headerStyles.text}>Mini Twitter</Text>
      </View>
      {user && (
        <View style={headerStyles.container}>
          <Text>{user.user_metadata.first_name}</Text>
        </View>
      )}
    </View>
  );
};

export default Header;
