import React from 'react'
import RoomsFilter from './RoomsFilter'
import RoomsList from './RoomsList'
import {RoomConsumer} from '../context'
import Loading from './Loading'



export default function RoomsContainer() {
    return (
        <RoomConsumer>
            {
                (value) => {
                    const { loading, sortedRoonms, rooms } = value;
                    if (loading) {
                        return <Loading />
                    }
                    return (
                        <div>
                            Hello from rooms RoomsContainer
                            <RoomsFilter></RoomsFilter>
                            <RoomsList></RoomsList>
                        </div>
                    )
                }
            }
        </RoomConsumer>
    )
}
