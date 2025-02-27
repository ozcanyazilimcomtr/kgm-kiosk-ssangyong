import { View, Text } from "react-native";

export default function ServiceLocationItem({ location }) {
  return (
    <View
      style={{
        flex: 1,
        borderWidth: 3,
        borderColor: "#2D293E",
        borderRadius: 8,
        padding: 16,
        gap: 12,
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <View
        style={{
          flex: 1,
          alignItems: "flex-start",
          flexDirection: "row",
          justifyContent: "space-between",
          borderBottomWidth: 1,
          borderColor: "#2D293E",
          paddingBottom: 4,
        }}
      >
        <View>
          <Text style={{ fontSize: 18, fontFamily: "league-spartan-bold" }}>
            {location.title}
          </Text>
        </View>
        <View>
          <Text style={{ fontSize: 16, fontFamily: "league-spartan-regular" }}>
            {location.is_dealer ? "Satış" : ""}
            {location.is_dealer && location.is_service ? " - " : ""}
            {location.is_service ? "Servis" : ""}
          </Text>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          alignItems: "flex-start",
          justifyContent: "center",
        }}
      >
        <Text style={{ fontSize: 16, fontFamily: "league-spartan-regular" }}>
          Adres: {location.address}
        </Text>
        <Text style={{ fontSize: 16, fontFamily: "league-spartan-regular" }}>
          Telefon: {location.phone}
        </Text>
      </View>
    </View>
  );
}