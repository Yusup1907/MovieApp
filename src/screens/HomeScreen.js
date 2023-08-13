import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView, FlatList } from "react-native";
import COLORS from "../constants/Colors";

const Genre = ["All", "Action", "Adventure", "Comedy", "Horor", "Romance"];

const HomeScreen = () => {
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
        renderItem={({ item, index }) => {
          return <View></View>;
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
