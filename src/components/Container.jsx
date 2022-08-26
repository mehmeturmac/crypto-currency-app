import { useState } from 'react';
import axios from 'axios';

import Card from './Card';

function Container() {
  const [page, setPage] = useState(1);
  const [data, setData] = useState();

  const getData = async () => {
    try {
      const res = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=${page}&sparkline=false`);
      setData(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  getData();

  return <div className="container mx-auto py-8 px-4">{data && data.map((currency) => <Card currency={currency} key={currency.id} />)}</div>;
}

export default Container;
