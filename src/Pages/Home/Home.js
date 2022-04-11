import React, { useEffect, useState } from 'react'
import Room from './Room/Room'

const Home = () => {
    const [rooms, setRooms] = useState([])
    console.log(rooms)

    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => setRooms(data))
    }, [])

    return (
        <div className="my-5">
            <p className="text-3xl text-center my-4 font-semibold tracking-wide">Welcome To Hotel Sinbad</p>
            <div className="grid md:grid-cols-3 gap-5 px-10">
                {rooms.map(room => (
                    <Room key={room.id} room={room} />
                ))}
            </div>
        </div>
    )
}

export default Home
