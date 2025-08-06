import axios from "axios";

async function FetchAPI() {
  try {
    const { data } = await axios.get(
      "https://solidbridge-us.backendless.app/api/data/user"
    );

    return data;
  } catch (err) {
    console.log(err);
  }
}

export default async function About() {
  const users = await FetchAPI();

  return (
    <>
      <h1 className="text-2xl font bold">Ini Page About</h1>
      {users && users.map((user, idx) => <div key={idx}>{user.email}</div>)}
    </>
  );
}
