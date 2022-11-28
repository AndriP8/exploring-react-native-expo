import React from "react";
import { FlatList, Image, Platform, Pressable, StyleSheet } from "react-native";

const EmojiList = ({ onSelect, onCloseModal }) => {
  const [emoji] = React.useState([
    require("./assets/pleading.jpeg"),
    require("./assets/smile.png"),
    require("./assets/smirking.jpeg"),
    require("./assets/thinking.jpeg")
  ]);
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={Platform.OS === "web" ? true : false}
      data={emoji}
      contentContainerStyle={styles.listContainer}
      renderItem={({ item, index }) => {
        return (
          <Pressable
            onPress={() => {
              onSelect(item);
              onCloseModal();
            }}
          >
            <Image source={item} key={index} style={styles.image} />
          </Pressable>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 20
  }
});

export default EmojiList;
