import axios from "axios";

export default async function handler(req, res) {
  try {
    const {data} = await axios.post(`${process.env.API}/api/pre-order`, {
      ...req.body,
    });
    res.status(200).json(data);
  } catch (error) {
    res.status(300).json(error);
  }
}
