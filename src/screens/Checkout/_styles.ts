import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
    position: "relative",
  },
  card: {
    flex: 1,
    alignItems: "center",
    margin: 5,
    padding: 10,
    backgroundColor: "#f5f5f5",
    borderRadius: 5,
    elevation: 2,
  },
  image: {
    width: 120,
    height: 120,
    resizeMode: "contain",
  },
  name: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  abilities: {
    marginTop: 5,
    fontSize: 14,
    textAlign: "center",
  },
  footer: {
    paddingVertical: 20,
  },
});

export default styles;
