import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    TouchableNativeFeedback,
    ImageBackground,
  } from "react-native";
import COLORS from "../constants/Colors";
import FONTS from "../constants/Fonts";

const MovieCard = () => {
    return (
        <TouchableOpacity>
            <View style={styles.container} >
                <Text>Movie</Text>

            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
      height: 340,
      width: 230,
      borderRadius: 12,
      elevation: 5,
      marginVertical: 2,
    },
    movieTitle: {
      fontFamily: FONTS.EXTRA_BOLD,
      color: COLORS.GRAY,
      paddingVertical: 2,
      marginTop: 5,
      width: 230,
    },
    movieSubTitleContainer: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
    movieSubTitle: {
      fontSize: 12,
      fontFamily: FONTS.REGULAR,
    },
    rowAndCenter: {
      flexDirection: "row",
      alignItems: "center",
    },
    imdbContainer: {
      flexDirection: "row",
      alignItems: "center",
      alignSelf: "flex-end",
      backgroundColor: COLORS.YELLOW,
      borderBottomLeftRadius: 5,
      borderTopRightRadius: 12,
      paddingVertical: 3,
    },
    imdbImage: {
      height: 20,
      width: 50,
      borderBottomLeftRadius: 5,
    },
    imdbRating: {
      marginRight: 5,
      color: COLORS.HEART,
      fontFamily: FONTS.EXTRA_BOLD,
    },
  });
  
  MovieCard.defaultProps = {
    size: 1,
    heartLess: true,
  };
  
  export default MovieCard;