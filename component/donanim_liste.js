import { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default function DonanimListe({ ozellikler }) {
  const [selectedOzelliks, setSelectedOzelliks] = useState([]);

  return (
    <View
      style={{
        flex: 1,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        gap: 16,
        marginTop: 16,
      }}
    >
      {ozellikler.map((ozellik, index) => (
        <View
          key={index}
          style={{
            flex: 1,
            width: "100%",
          }}
        >
          <TouchableOpacity
            onPress={() => {
              if (selectedOzelliks.includes(index)) {
                setSelectedOzelliks(
                  selectedOzelliks.filter((item) => item !== index)
                );
              } else {
                setSelectedOzelliks([...selectedOzelliks, index]);
              }
            }}
            style={{
              flex: 1,
              width: "100%",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              borderWidth: 1,
              borderColor: "#302C4D",
              borderRadius: 8,
              padding: 16,
            }}
          >
            <Text
              style={{
                fontSize: 16,
                fontFamily: "league-spartan-bold",
                color: "white",
              }}
            >
              {ozellik.name}
            </Text>
            <Text
              style={{
                fontSize: 16,
                fontFamily: "league-spartan-bold",
                color: "white",
              }}
            >
              +
            </Text>
          </TouchableOpacity>
          {selectedOzelliks.includes(index) && (
            <View style={{ flex: 1, width: "100%", gap: 8 }}>
              {ozellik.props.map((prop, index) => (
                <View
                  key={index}
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 8,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 16,
                      fontFamily: "league-spartan-regular",
                      color: "white",
                      flex: 1,
                    }}
                  >
                    {prop}
                  </Text>
                </View>
              ))}
            </View>
          )}
        </View>
      ))}
    </View>
  );
}