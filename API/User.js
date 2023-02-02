const CreateUSer = async (body) => {
  const request = await fetch(
    "https://qqjgrkrdgfbvsiudchwq.supabase.co/auth/v1/signup",
    {
      method: "Post",
      headers: {
        apikey:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFxamdya3JkZ2ZidnNpdWRjaHdxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzUwNzYzMjgsImV4cCI6MTk5MDY1MjMyOH0.CgEq3k5RRbu50PW_ieDJNGqzU4CX57yeQywkRfDipik",
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
        apikey:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFxamdya3JkZ2ZidnNpdWRjaHdxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzUwNzYzMjgsImV4cCI6MTk5MDY1MjMyOH0.CgEq3k5RRbu50PW_ieDJNGqzU4CX57yeQywkRfDipik",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }
  );
  const response = await request.json();
  return response;
};

const User = async (token) => {
  const request = await fetch(
    "https://qqjgrkrdgfbvsiudchwq.supabase.co/auth/v1/user",
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

export { CreateUSer, User, LogUSer };
