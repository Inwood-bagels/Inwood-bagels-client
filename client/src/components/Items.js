import React, {useEffect, useState} from 'react'
import '../styles/styles.css'
import {db} from "../firebase";

function Items() {
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)
    const DbGetMenu = async () => {
        const newItems = []
        const res = db.collection("Item")
        const data = await res.get()
        data.docs.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            newItems.push(doc.data())
        })
        setItems(items.concat(newItems))

    }
    useEffect(() => {
        DbGetMenu()
    }, []);

    return (
        <div className="container">
            <div className="container">
                {
                    items.map(((item, ind) =>

                            <div  key={ind+3} className="menu_items">
                                <h4>{item.item_name}</h4>
                                <h2>{item.item_desc}</h2>

                                <p>Price: ${item.item_price}</p>
                                <input type="radio" value="Price" name="Item" /> Add to cart


                            </div>
                    ))
                }
            </div>
        </div>
    )


}

export default Items
