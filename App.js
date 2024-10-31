import { StatusBar } from "expo-status-bar";
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Styles } from "./Style";
import { useState, useEffect } from "react";
import * as IconsOutline from "react-native-heroicons/outline";
import { suggestVideos } from "./backend/api";
export default function App() {
  const [data, SetData] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    suggestVideos().then((result) => {
      setLoading(false);
      SetData(result.items);
    });
  }, []);
  return (
    <SafeAreaView style={Styles.container}>
      <View style={Styles.rowContainer}>
        <View style={Styles.textLogo}>
          <Text style={[Styles.LogoText, { color: "black" }]}>Free</Text>
          <Text style={Styles.LogoText}>Tube</Text>
        </View>
        {/* Added button */}
        <TouchableOpacity
          onPress={() => {
            console.log("You pressed a button");
          }}
        >
          <IconsOutline.CogIcon size={28} color={"grey"} />
        </TouchableOpacity>
      </View>
      {/* Loading videos */}
      {loading ? (
        <ActivityIndicator />
      ) : (
        // <FlatList
        //   data={data}
        //   renderItem={(e) => {
        //     <Text>Name</Text>;
        //   }}
        // />
        <></>
      )}
      <StatusBar style="auto" backgroundColor="lightgrey" />
    </SafeAreaView>
  );
}
