import React, { useState, useEffect } from "react";
import { View, Text, FlatList, Image, ActivityIndicator } from "react-native";
import { styles } from "../styles/styles";

const API_KEY =
  "eyJhbGciOiJIUzI1NiJ9.eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYzY0ZjNiMWY4YjZjN2U4ZDc5NzMzNWEyMzAxMTRiNiIsIm5iZiI6MTUzMzkwODgwMi42MDUsInN1YiI6IjViNmQ5NzQyMGUwYTI2N2VmODE1Mzg1MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gSxaFK2bnbxWyDEMTwnJHp3KO7P_CXaUqJJupKBOfXE.gSxaFK2bnbxWyDEMTwnJHp3KO7P_CXaUqJJupKBOfXE";

const IMAGE_URL = "https://image.tmdb.org/t/p/w500";

const BASE_URL =
  "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";
const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    console.log(
      "DEBUG: Token length is:",
      process.env.EXPO_PUBLIC_TMDB_TOKEN?.length,
    );
    console.log(
      "DEBUG: First 5 chars:",
      process.env.EXPO_PUBLIC_TMDB_TOKEN?.substring(0, 5),
    );
    try {
      // 1. Log to confirm the function starts
      console.log("Starting fetch from TMDB...");

      const response = await fetch(BASE_URL, {
        method: "GET",
        headers: {
          accept: "application/json",
          // 2. CRITICAL: Add "Bearer " before your token string
          Authorization: `Bearer ${process.env.EXPO_PUBLIC_TMDB_TOKEN}`,
        },
      });

      const data = await response.json();

      // 3. Log the response to catch errors like "Invalid API Key"
      console.log("API Response:", data);

      if (data.results) {
        setMovies(data.results);
      } else {
        console.warn("No results field in response. Check API logs.");
      }
    } catch (error) {
      console.error("Fetch Error: ", error);
    } finally {
      setIsLoading(false);
    }
  };
  const renderMovieItem = ({ item }) => (
    <View style={styles.movieCard}>
      <Image
        source={{ uri: `${IMAGE_URL}${item.poster_path}` }}
        style={styles.poster}
      />
      <View style={styles.infoContainer}>
        <Text style={styles.title} numberOfLines={2}>
          {item.title}
        </Text>
        <Text style={styles.releaseDate}>Released: {item.release_date}</Text>
        <Text style={styles.rating}>⭐ {item.vote_average}</Text>
      </View>
    </View>
  );

  if (isLoading) {
    return (
      <ActivityIndicator size="large" color="#0000ff" style={styles.loader} />
    );
  }

  return (
    <FlatList
      data={movies}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderMovieItem}
      contentContainerStyle={styles.listContent}
    />
  );
};

export default MovieList;
