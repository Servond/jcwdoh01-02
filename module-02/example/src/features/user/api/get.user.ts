import axios from "axios";

export async function getAll() {
  try {
    const { data } = await axios.get(
      "https://solidbridge-us.backendless.app/api/data/user"
    );

    return data;
  } catch (err) {
    throw err;
  }
}
