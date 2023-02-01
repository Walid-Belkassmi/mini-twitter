import { API_KEY } from "react-native-dotenv";

const FetchAllTwits = async (token) => {
  console.log(API_KEY);

  const request = await fetch(
    "https://qqjgrkrdgfbvsiudchwq.supabase.co/rest/v1/tweet?select=*",
    {
      headers: {
        apikey: API_KEY,
        Authorization: `Bearer ${token}`,
      },
    }
  );

  const response = await request.json();
  return response;
};

const CreateTwit = async (body, token) => {
  try {
    const request = await fetch(
      "https://qqjgrkrdgfbvsiudchwq.supabase.co/rest/v1/tweet",
      {
        method: "Post",
        headers: {
          apikey: API_KEY,
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
          Prefer: "return=minimal",
        },
        body: JSON.stringify(body),
      }
    );
  } catch (error) {
    console.log(error);
  }
};

export { FetchAllTwits };
