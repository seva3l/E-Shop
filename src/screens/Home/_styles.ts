import { StyleSheet } from "react-native";
import Color from "../../constants/Color";

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
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: 100, // Set the height as desired
  },
  modalContentWrapper: {
    backgroundColor: Color.PRIMARY,
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  checkout: {
    position: "absolute",
    bottom: 20,
    right: 15,
    backgroundColor: Color.PRIMARY,
    padding: 20,
    borderRadius: 50,
  },
  checkoutText: {
    position: "absolute",
    top: 15,
    right: 15,
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
  },
  productNotFoundContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default styles;
