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
    const response = await axios.get('https://newsapi.org/v2/everything', {
      params: {
        q: req.query.q,
        apiKey: '216692568f3e47faa19ce006494b59be',
        sortBy: 'publishedAt',
        pageSize: 20
      }
    });

    res.status(200).json({ data: response.data });
  } catch (error) {
    res.status(500).json({ data: 'Error fetching data' });
  }
}