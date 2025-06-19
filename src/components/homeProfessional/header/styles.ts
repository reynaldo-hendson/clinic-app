import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "white",
    padding: 20,
    marginBottom: 15,
  },
  userName: {
    fontSize: 18,
    fontWeight: "500",
    color: "#48D1CC",
  },
  profileImageContainer: {
    width: 40,
    height: 40,
    borderRadius: 50,
    overflow: "hidden",
  },
  profileImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
});