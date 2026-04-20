import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  header: {
    padding: 20,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: "bold",
  },
  loader: {
    flex: 1,
    justifyContent: "center",
  },
  listContent: {
    padding: 10,
  },
  movieCard: {
    flexDirection: "row",
    backgroundColor: "#fff",
    marginBottom: 15,
    borderRadius: 8,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  poster: {
    width: 100,
    height: 150,
  },
  infoContainer: {
    flex: 1,
    padding: 12,
    justifyContent: "space-around",
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
  },
  releaseDate: {
    color: "#666",
    fontSize: 14,
  },
  rating: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#e67e22",
  },
});
