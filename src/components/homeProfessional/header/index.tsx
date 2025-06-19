import React from "react";
import { View, Text, Image } from "react-native";
import { styles } from "../header/styles";

interface HeaderProps {
  userName: string;
  profileImage: string;
}

const Header: React.FC<HeaderProps> = ({ userName, profileImage }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.userName}>Bem-vinda {userName}</Text>
      <View style={styles.profileImageContainer}>
        <Image
          source={{ uri: profileImage }}
          style={styles.profileImage}
          alt="Profile"
        />
      </View>
    </View>
  );
};

export default Header;