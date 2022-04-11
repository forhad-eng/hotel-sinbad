import React from 'react'
import { Link } from 'react-router-dom'

const Room = ({ room }) => {
    const { name, price, img } = room
    return (
        <div className="shadow-lg rounded p-3">
            <img src={img} className="rounded md:w-[640px] md:h-[227px]" alt="" />
            <p className="text-2xl font-semibold">{name}</p>
            <p className="text-lg">Price: {price}/night</p>
            <Link to="/checkout">
                <button className="w-full py-3 mt-3 text-lg font-semibold text-white bg-green-500 rounded-lg">
                    Book Now
                </button>
            </Link>
        </div>
    )
}

export default Room
