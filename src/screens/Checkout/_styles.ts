import { StyleSheet } from "react-native";
import Color from "../../constants/Color";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.WHITE,
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
  clearCartButton: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 15,
    backgroundColor: Color.RED,
    marginBottom: 10,
    borderRadius: 20,
  },
  clearCartButtonText: {
    color: Color.WHITE,
    fontSize: 16,
    fontWeight: "400",
  },
  checkoutButton: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 15,

    marginBottom: 10,
    borderRadius: 20,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: 300,
  },
  modalContentWrapper: {
    backgroundColor: Color.PRIMARY,
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  modalText: {
    color: Color.WHITE,
    fontSize: 24,
    fontWeight: "bold",
  },
  totalPrice: {
    color: Color.WHITE,
    fontSize: 18,
    fontWeight: "bold",
  },
  checkoutLabel: {
    color: Color.WHITE,
    fontSize: 16,
    fontWeight: "400",
  },
});

export default styles;
