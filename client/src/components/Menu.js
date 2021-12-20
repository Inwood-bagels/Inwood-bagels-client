import React, {useEffect, useState} from 'react'
import '../styles/styles.css'
import {db} from "../firebase"
import Collapsible from 'react-collapsible'
import Items from "./Items"

function Menu() {
    const [menu, setMenu] = useState([])
    const [isActive, setActive] = useState("false");
    const [isActive2, setActive2] = useState("false");

    const handleToggle = () => {
        setActive(!isActive);
    };
    const handleToggle2 = () => {
        setActive(!isActive);
        setActive2(!isActive2)
    };
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
        <>
            <div>
                <div className="buttons_delivery">
                    <button className={isActive ? "button_delivery_pick_up_chosen" : "button_delivery_pick_up "}
                            onClick={handleToggle}>Pick up
                    </button>
                    <button className={isActive2 ? "button_delivery_pick_up_chosen" : "button_delivery_pick_up "}
                            onClick={handleToggle2}>Delivery
                    </button>
                </div>

            </div>
            <div className="menu_container">


                <div className="Flex">
                    <div className="Flex1">

                        {
                            menu.map(((item, ind) =>
                                    <div>
                                        <div className="column is-flex">
                                            <div className="field">
                                                <Collapsible key={ind} trigger={item.type}>
                                                    <Items/>
                                                </Collapsible>
                                            </div>
                                        </div>
                                    </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Menu
