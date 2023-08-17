import React from "react";
import { View, TouchableOpacity, Text } from "react-native";

const Pagination = ({ currentPage, totalPages, onNextPage, onPrevPage }) => {
  return (
    <View style={{ flexDirection: "row", justifyContent: "center", marginTop: 10 }}>
      <TouchableOpacity
        onPress={onPrevPage}
        disabled={currentPage === 1}
        style={{ marginRight: 10 }}
      >
        <Text style={{ color: currentPage === 1 ? "gray" : "blue" }}>
          Previous Page
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={onNextPage}
        disabled={currentPage === totalPages}
      >
        <Text style={{ color: currentPage === totalPages ? "gray" : "blue" }}>
          Next Page
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Pagination;
