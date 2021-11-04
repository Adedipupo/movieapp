import React from "react";
import {View,Text} from "react-native";
import { Searchbar } from "react-native-paper";


export function SearchScreen() {
    return (
      <View style={{ flex: 1,padding:5 }}>
        <Searchbar placeholder="Search your favorite movies here " />
      </View>
    );
  }