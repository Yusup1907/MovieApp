import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, ScrollView, FlatList } from "react-native";
import COLORS from "../constants/Colors";
import GenreCards from "../components/GenreCards";
import ItemSeparator from "../components/ItemSeparator";

const Genre = ["All", "Action", "Adventure", "Comedy", "Horor", "Romance"];

const HomeScreen = () => {
  const [activeGenre, setActiveGenre] = useState("All");
  const [nowPlayingMovies, setNowPlayingMovies] = useState({});
  const [upcomingMovies, setUpcomingMovies] = useState({});
  const [genres, setGenres] = useState([{ id: 10110, name: "All" }]);

//   useEffect(() => {
//     getNowPlayingMovies().then((movieResponse) =>
//       setNowPlayingMovies(movieResponse.data)
//     );
//     getUpcomingMovies().then((movieResponse) =>
//       setUpcomingMovies(movieResponse.data)
//     );
//     getAllGenres().then((genreResponse) =>
//       setGenres([...genres, ...genreResponse.data.genres])
//     );
//   }, []);
  return (
    <ScrollView style={styles.container}>
      <StatusBar
        style="auto"
        translucent={false}
        backgroundColor={COLORS.BASIC_BACKGROUND}
      />
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Now Playing Movie</Text>
        <Text style={styles.headerSubTitle}>VIEW ALL</Text>
      </View>
      <FlatList
        data={Genre}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item}
        ItemSeparatorComponent={() => <ItemSeparator width={20} />}
        ListHeaderComponent={() => <ItemSeparator width={20} />}
        ListFooterComponent={() => <ItemSeparator width={20} />}
        renderItem={({ item }) => {
          <GenreCards
            genreName={item}
            active={item.name === activeGenre ? true : false}
            onPress={setActiveGenre}
          />;
        }}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.BASIC_BACKGROUND,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  headerTitle: {
    fontSize: 20,
    // fontFamily: FONTS.REGULAR,
  },
  headerSubTitle: {
    fontSize: 13,
    color: COLORS.ACTIVE,
    // fontFamily: FONTS.BOLD,
  },
  genreListContainer: {
    paddingVertical: 10,
  },
});

export default HomeScreen;
