import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  data: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {

  try {
    const response = await axios.get(`${process.env.API_HOST}/top-headlines`, {
      params: {
        apiKey: process.env.API_KEY,
        sortBy: 'publishedAt',
        country: 'us',
        pageSize: 21
      }
    });

    res.status(200).json({ data: response.data });
  } catch (error) {
    res.status(500).json({ data: 'Error fetching data' });
  }
}