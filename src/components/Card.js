import React from "react";
import { Image, View, StyleSheet, Dimensions } from "react-native";
import { Text } from "react-native-paper";
const CardItem = ({ name, image, email, phone, category, horizontal }) => {
  return (
    <View style={[styles.user, horizontal ? styles.horizontal : null]}>
      <Image
        style={[styles.image, horizontal ? styles.imageHorizontal : null]}
        resizeMode="cover"
        source={{ uri: image }}
      />
      <View style={styles.info}>
        <Text style={styles.name}>{name}</Text>
        {!!(email && phone) && (
          <Text
            style={[
              styles.subTitle,
              horizontal ? styles.subTitleHorizontal : null,
            ]}
            numberOfLines={horizontal ? 2 : 1}
            ellipsizeMode="tail"
          >
            {email} - {phone}
          </Text>
        )}
        {!!category && (
          <Text style={styles.category}>Chuyên viên: {category}</Text>
        )}
      </View>
    </View>
  );
};
export default CardItem;
const { width } = Dimensions.get("window");
const styles = StyleSheet.create({
  user: {
    flexDirection: "row",
    alignItems: "center",
  },
  horizontal: {
    flexDirection: "column",
  },
  info: {
    flexDirection: "column",
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 8,
  },
  imageHorizontal: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginRight: 0,
    marginBottom: 10,
  },
  name: {
    height: 20,
    fontWeight: "500",
    marginBottom: 2,
  },

  subTitle: {
    width: width - 90,
  },
  subTitleHorizontal: {
    width: 160,
  },
  category: {},
});
