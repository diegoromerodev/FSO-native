import React from "react";
import { View, Text } from "react-native";
import HeaderText from "./HeaderText";

const InfoIcon = ({name, number}) => {
    return (
        <View style={{flex: 1, justifyContent: "center"}} testID="infoIcon">
            <HeaderText center text={number >= 1000 ? parseFloat((number / 1000).toFixed(1)) + "k" : number} />
            <Text style={{textAlign: "center"}}>{name}</Text>
        </View>
    );
};

export default InfoIcon;