const FetchAllTweets = async (token) => {
  const request = await fetch(
    "https://qqjgrkrdgfbvsiudchwq.supabase.co/rest/v1/tweet?select=*",
    {
      headers: {
        apikey:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFxamdya3JkZ2ZidnNpdWRjaHdxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzUwNzYzMjgsImV4cCI6MTk5MDY1MjMyOH0.CgEq3k5RRbu50PW_ieDJNGqzU4CX57yeQywkRfDipik",
        Authorization: `Bearer ${token}`,
      },
    }
  );

  const response = await request.json();
  return response;
};

const CreateTweet = async (body, token) => {
  const request = await fetch(
    "https://qqjgrkrdgfbvsiudchwq.supabase.co/rest/v1/tweet",
    {
      method: "Post",
      headers: {
        apikey:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFxamdya3JkZ2ZidnNpdWRjaHdxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzUwNzYzMjgsImV4cCI6MTk5MDY1MjMyOH0.CgEq3k5RRbu50PW_ieDJNGqzU4CX57yeQywkRfDipik",
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        Prefer: "return=minimal",
      },
      body: JSON.stringify(body),
    }
  );
};

const FetchTweet = async (id, token) => {
  const request = await fetch(
    `https://qqjgrkrdgfbvsiudchwq.supabase.co/rest/v1/tweet?id=eq.${id}&select=*`,
    {
      headers: {
        apikey:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFxamdya3JkZ2ZidnNpdWRjaHdxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzUwNzYzMjgsImV4cCI6MTk5MDY1MjMyOH0.CgEq3k5RRbu50PW_ieDJNGqzU4CX57yeQywkRfDipik",
        Authorization: `Bearer ${token}`,
      },
    }
  );

  const response = await request.json();

  return response;
};

const FetchUserTweets = async (id, token) => {
  const request = await fetch(
    `https://qqjgrkrdgfbvsiudchwq.supabase.co/rest/v1/tweets?user_id=eq.${id}&select=*`,
    {
      headers: {
        apikey:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFxamdya3JkZ2ZidnNpdWRjaHdxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzUwNzYzMjgsImV4cCI6MTk5MDY1MjMyOH0.CgEq3k5RRbu50PW_ieDJNGqzU4CX57yeQywkRfDipik",
        Authorization: `Bearer ${token}`,
      },
    }
  );

  const response = await request.json();
  return response;
};

const FetchPutTweet = async (id, token, body) => {
  const request = await fetch(
    `https://qqjgrkrdgfbvsiudchwq.supabase.co/rest/v1/tweet?id=eq.${id}`,
    {
      method: "Patch",
      headers: {
        apikey:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFxamdya3JkZ2ZidnNpdWRjaHdxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzUwNzYzMjgsImV4cCI6MTk5MDY1MjMyOH0.CgEq3k5RRbu50PW_ieDJNGqzU4CX57yeQywkRfDipik",
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        Prefer: "return=minimal",
      },

      body: JSON.stringify(body),
    }
  );
};

const FetchDeleteTweet = async (id, token) => {
  const request = await fetch(
    `https://qqjgrkrdgfbvsiudchwq.supabase.co/rest/v1/tweet?id=eq.${id}`,
    {
      method: "Delete",
      headers: {
        apikey:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFxamdya3JkZ2ZidnNpdWRjaHdxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzUwNzYzMjgsImV4cCI6MTk5MDY1MjMyOH0.CgEq3k5RRbu50PW_ieDJNGqzU4CX57yeQywkRfDipik",
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

export {
  FetchAllTweets,
  CreateTweet,
  FetchTweet,
  FetchUserTweets,
  FetchPutTweet,
  FetchDeleteTweet,
};
