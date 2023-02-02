import { useContext, useEffect, useState } from "react";
import { Button, FlatList, Text, TextInput, View } from "react-native";
import {
  FetchDeleteTweet,
  FetchPutTweet,
  FetchUserTweets,
} from "../API/Tweets.js";
import { TweetCard } from "../Components/TweetCard";
import { UserContext } from "../Context/User";
import globalStyles from "../styles/Global";
import homeStyle from "../styles/Home";
import profilStyles from "../styles/Profil";

export const Profil = () => {
  const { user, token } = useContext(UserContext);

  const [tweets, setTweets] = useState([]);
  const [putTweet, setPutTweet] = useState(false);
  const [id, setId] = useState(null);
  const [newTweet, setNewTweet] = useState("");

  useEffect(() => {
    FetchTweets();
  }, []);

  const FetchTweets = async () => {
    const { id } = user;
    const response = await FetchUserTweets(id, token);
    setTweets(response);
  };

  const handlePressPut = (id) => {
    setPutTweet(true);
    setId(id);
  };

  const handleNewTweetSubmit = async () => {
    const body = {
      Tweet: newTweet,
    };
    await FetchPutTweet(id, token, body);
    setPutTweet(false);
    setId("");
    FetchTweets();
  };

  const handlePressDelete = async (id) => {
    await FetchDeleteTweet(id, token);
    FetchTweets();
  };

  return (
    <View style={globalStyles.container}>
      <View style={profilStyles.container}>
        <Text style={profilStyles.titre}>Profil</Text>
      </View>
      <View style={profilStyles.container}>
        <Text style={profilStyles.info}>
          firstName: {user.user_metadata.firstName}
        </Text>
        <Text style={profilStyles.info}>
          lastName: {user.user_metadata.lastName}
        </Text>
        <Text style={profilStyles.info}>Email: {user.email}</Text>
      </View>
      <View style={profilStyles.container}>
        <Text style={profilStyles.titre}>Mes tweets</Text>
      </View>
      {tweets && (
        <FlatList
          data={tweets}
          renderItem={({ item }) => (
            <>
              <TweetCard tweet={item} link />
              <View style={profilStyles.buttonContainer}>
                <Button title="edit" onPress={() => handlePressPut(item.id)} />
                <Button
                  title="delete"
                  color="#0096c7"
                  onPress={() => {
                    handlePressDelete(item.id);
                  }}
                />
              </View>
            </>
          )}
          keyExtractor={(item) => item.created_at}
        />
      )}

      {putTweet && (
        <View style={homeStyle.container}>
          <Text>Comment</Text>
          <TextInput
            value={newTweet}
            style={homeStyle.input}
            onChangeText={(value) => setNewTweet(value)}
          />
          <Button
            title="modifier"
            color="#0096c7"
            onPress={handleNewTweetSubmit}
          />
        </View>
      )}
    </View>
  );
};
