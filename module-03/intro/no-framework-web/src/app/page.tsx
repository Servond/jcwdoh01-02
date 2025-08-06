import axios from "axios";

async function fetchData() {
  try {
    const { data } = await axios.get("http://localhost:8080/api");

    console.log(data);
  } catch (err) {
    console.log(err);
  }
}

export default async function Home() {
  fetchData();
  return <div>Example</div>;
}
