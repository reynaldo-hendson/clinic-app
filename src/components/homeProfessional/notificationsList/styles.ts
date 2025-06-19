import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    marginTop: 30,

  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    marginBottom: 15,
  },
  item: {
    flexDirection: "row",
    gap: 15,
    paddingHorizontal: 15,
    paddingVertical: 10,
    cursor: "pointer",
    borderColor: "#48D1CC",
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 10,

  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 50,
  },
  content: {
    flex: 1,
  },
  name: {
    color: "#48D1CC",
    fontWeight: "500",
    marginBottom: 5,
  },
  details: {
    color: "#666",
    fontSize: 12,
  },
});