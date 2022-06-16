// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";
export default async function handler(req, res) {
  const response = await axios.get("http://localhost:3001/api/tasks");
  res.status(200).json({ list: response.data });
}
