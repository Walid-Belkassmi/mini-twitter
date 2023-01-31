import { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";
import { FetchAllTwits } from "../API/Twits";
import { TweetCard } from "../Components/TweetCard";
import globalStyles from "../Styles/Global";

export default Home = () => {
  const [twits, setTwits] = useState([]);

  useEffect(() => {
    FetchTwits();
  }, []);

  const FetchTwits = async () => {
    const response = await FetchAllTwits();
    setTwits(response);
  };

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Home</Text>
      {twits && (
        <FlatList
          data={twits}
          renderItem={({ item }) => <TweetCard twit={item} />}
          keyExtractor={(item) => item.created_at}
        />
      )}
    </View>
  );
};
