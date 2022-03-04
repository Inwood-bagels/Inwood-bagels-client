import React, {useEffect, useState, createContext} from 'react'

import '../styles/styles.css'
import {db} from "../firebase";

function Items() {
    const [items, setItems] = useState([])
    const [cart, setCart] = useState([]);
    const [cartTotal, setCartTotal] = useState(0);

    useEffect(() => {
        total();
    }, [cart]);

    const total = () => {
        let totalVal = 0;
        for (let i = 0; i < cart.length; i++) {
            totalVal += cart[i].price;
        }
        setCartTotal(totalVal);
    };
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
    const addToCart = (el) => {
        setCart([...cart, el]);
    };
    return (
        <div className="container">
            <div className="container">
                {
                    items.map(((item, ind) =>

                            <div  key={ind+3} className="menu_items">
                                <h4>{item.item_name}</h4>
                                <h2>{item.item_desc}</h2>

                                <p>Price: ${item.item_price}</p>
                                <button className="add" onClick={() => setCart(item)}>{console.log(cart)}Add to cart</button>
                            </div>
                    ))
                }
            </div>
        </div>
    )


}

export default Items
