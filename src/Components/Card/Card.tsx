/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import "./Card.css";

interface Props {
companyName: string;
ticker: string;
price: number;
}

const Card: React.FC<Props> = ({ companyName, ticker, price }: Props) : JSX.Element  => {
  return (
    <div className="card">
        <div className="details">
            <h2>{companyName} ({ticker})</h2>
            <p>USD: ${price}</p>
        </div>
        <p className="info">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos, enim veritatis cumque, praesentium quos ipsam esse, libero laboriosam distinctio consequuntur modi debitis id? Odit nisi quis illum, maxime delectus quas.</p>
    </div>
  )
}

export default Card