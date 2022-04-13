import React, {useEffect, useState} from 'react'
import '../styles/styles.css'
import {db} from "../firebase"
import Collapsible from 'react-collapsible'
import Items from "./Items"

function Menu() {
    const [menu, setMenu] = useState([])
    const [loading, setLoading] = useState(true)
    const DbGetMenu = async () => {
        const newItems = []
        const res = db.collection("Menu")
        const data = await res.get()
        data.docs.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            newItems.push(doc.data())
        })
        setMenu(menu.concat(newItems))
    }
    useEffect(() => {
        DbGetMenu()
    }, []);

    return (
        <div className="container">
            <div className="Flex">
                <div className="column is-flex">
                    <button className="item_s ">Pick up</button>
                    <button className="item_s ">Delivery</button>
                    <div className='set_pickup_time'>
                        <div className='pickup_time'>
                            <h1 className="pickuptime_title"> Select Pick Up Time * </h1>
                            <select className="pickup">
                                <option value="8am">8 AM</option>
                                <option value="9am">9 AM</option>
                                <option value="10am">10 AM</option>
                                <option value="11am">11 AM</option>
                            </select>
                        </div> 
                    </div>
                </div>

            </div>


            <div className="Flex">
                <div className="Flex1">

                    {
                        menu.map(((item, ind) =>
                                <div>
                                    <div className="column is-flex">
                                        <div className="field">
                                            <Collapsible key={ind} trigger={item.type}>
                                                <Items />
                                            </Collapsible>
                                        </div>
                                    </div>
                                </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Menu
