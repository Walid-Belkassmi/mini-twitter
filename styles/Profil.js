import { StyleSheet } from "react-native";

const profilStyles = StyleSheet.create({
  titre: {
    fontSize: 25,
    justifyContent: "center",
  },
  container: {
    borderBottomWidth: 2,
    borderColor: "#0096c7",
    margin: 10,
    padding: 10,
  },
  info: {
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
});

export default profilStyles;
