import moment from "moment/moment";
import { Text, View } from "react-native";
import Twit from "../styles/twit";
// import TweetStyles from "../Styles/TweetCard";

const Twit = ({ tweet }) => {
  return (
    <View style={Twit.container}>
      <Text style={Twit.title}>{tweet.first_name}</Text>
      <Text style={Twit.content}>{tweet.Tweet}</Text>
      <Text style={Twit.date}>
        {moment(Twit.created_at).format("Do MMM YYYY")}
      </Text>
    </View>
  );
};

export default Twit;
