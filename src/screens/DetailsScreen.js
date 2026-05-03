import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";

export default function DetailsScreen({ route }) {
  const { movie } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Image
        source={{
          uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
        }}
        style={styles.image}
      />

      <Text style={styles.title}>{movie.title}</Text>

      <Text style={styles.rating}>⭐ {movie.vote_average}</Text>

      <Text style={styles.overview}>{movie.overview}</Text>

      <Text style={styles.date}>Release Date: {movie.release_date}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  image: {
    width: "100%",
    height: 300,
    borderRadius: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    marginTop: 10,
  },
  rating: {
    fontSize: 16,
    marginVertical: 5,
  },
  overview: {
    fontSize: 14,
    marginTop: 10,
  },
  date: {
    marginTop: 10,
    fontStyle: "italic",
  },
});
