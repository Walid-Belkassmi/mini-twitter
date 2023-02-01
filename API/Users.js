const User = async (token) => {
  const request = await fetch(
    "https://qqjgrkrdgfbvsiudchwq.supabase.co/auth/v1/user",
    {
      headers: {
        apikey: process.env.API_KEY,
        Authorization: `Bearer ${token}`,
      },
    }
  );

  const response = await request.json();
  return response;
};

const CreateUSer = async (body) => {
  const request = await fetch(
    "https://qqjgrkrdgfbvsiudchwq.supabase.co/auth/v1/signup",
    {
      method: "Post",
      headers: {
        apikey: process.env.API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }
  );
  const response = await request.json();
  return response;
};

const LogUSer = async (body) => {
  const request = await fetch(
    "https://qqjgrkrdgfbvsiudchwq.supabase.co/auth/v1/token?grant_type=password",
    {
      method: "Post",
      headers: {
        apikey: process.env.API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }
  );
  const response = await request.json();
  return response;
};

export { User, CreateUSer, LogUSer };
