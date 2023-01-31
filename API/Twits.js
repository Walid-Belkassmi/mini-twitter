import { API_KEY } from "react-native-dotenv";

const FetchAllTwits = async () => {
  console.log(API_KEY);

  const request = await fetch(
    "https://qqjgrkrdgfbvsiudchwq.supabase.co/rest/v1/tweet?select=*",
    {
      headers: {
        apikey: API_KEY,
        Authorization: `Bearer ${API_KEY}`,
      },
    }
  );

  const response = await request.json();
  return response;
};

export { FetchAllTwits };
