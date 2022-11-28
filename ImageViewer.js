import { Image, StyleSheet } from "react-native";

const ImageViewer = ({ PlaceholderImageSource, selectedImage }) => {
  const imageSource =
    selectedImage !== null
      ? { uri: selectedImage }
      : { uri: PlaceholderImageSource };

  return <Image source={imageSource} style={styles.image} />;
};

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18
  }
});

export default ImageViewer;
