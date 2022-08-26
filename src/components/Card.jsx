import React from 'react';
import { Link } from 'react-router-dom';

function Card({ currency }) {
  return (
    <div className="bg-white border-b hover:bg-gray-300 font-semibold text-sm" key={currency.id}>
      <img className="w-6 h-6" src={currency.image} alt="a" />
      {currency.name}

      {currency.price_change_percentage_24h < 0 ? (
        <span className="  text-red-500">{currency.price_change_percentage_24h.toFixed(2)}%</span>
      ) : (
        <span className="  text-green-500">{currency.price_change_percentage_24h.toFixed(2)}%</span>
      )}

      <Link
        className="bg-green-500 text-base font-bold text-white hover:text-green-500 hover:bg-white border border-green-500 transition-all px-4 py-2 rounded-lg cursor-pointer"
        to={`/details/${currency.id}`}
      >
        Detail
      </Link>
    </div>
  );
}

export default Card;
