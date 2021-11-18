import React from 'react'
import ReactDOM from 'react-dom'
import "../styles/Styles.css"
import "../styles/menu.css"
import { Carousel } from "react-responsive-carousel";
import storeFront from "../images/Pictures/Store Front 2.JPG";
import bagels from "../images/Pictures/Cinnamon Raisin Bagel with Birthday Cake Cream Cheese 3.JPG";
import inside from "../images/Pictures/Inside store 1.JPG";
import baconEgg from "../images/Pictures/Bacon Egg and Cheese.JPG";
import brioce from "../images/Pictures/Ultimate Bacon Egg and Cheese on a Brioche.JPG";

function menuList(listOfItems) {
    return listOfItems.map((item) => (
        <option key={item} value={item}>{item}</option>
    ))
}


function Menu() {

    const breakfast = ['Bagels', 'Cream Cheese', 'Breakfast Sandwiches', 'Breakfast All Day'];
    const beverages = ['Tea', 'La Columbia Coffee', 'Hot Chocolate', 'Other'];
    const homemade = ['Cream Cheese and Spreads', 'Salads'];
    const lunch = ['Cold Inwood Sandwiches', 'Inwood Bagels Lunch', 'Wrap Sandwiches'];
    const doughnuts = ['Pastries', 'Doughnuts'];
    const health = ['Vegetarian Options', 'Inwood Soup', 'Avocado Toast', 'Inwood Salads'];
    return (
        <div className="container">
            <div className="content has-text-centered">
                <h1 className="is-size-1">Menu</h1>
            </div>
            <div className="Flex">
                <div className="Flex1">
                    <div className="column is-flex">
                        <div className="field">
                            <select className="label">
                                {menuList(breakfast)}
                                Breakfast
                            </select>                            
                        </div>
                    </div>
                    <div className="column is-flex">
                        <div className="field">
                            <select className="label">
                                {menuList(homemade)}
                            </select>                            
                        </div>
                    </div>
                    <div className="column is-flex">
                        <div className="field">
                            <select className="label">
                                {menuList(doughnuts)}
                            </select>                            
                        </div>
                    </div>
                    <div className="column is-flex">
                        <div className="field">
                            <label className="label">Catering Services</label>
                        </div>
                    </div>
                </div>
                <div className="Flex2">
                <div className="column is-flex">
                        <div className="field">
                            <select className="label">
                                {menuList(beverages)}
                            </select>                            
                        </div>
                    </div>
                    <div className="column is-flex">
                        <div className="field">
                            <select className="label">
                                {menuList(lunch)}
                            </select>                            
                        </div>
                    </div>
                    <div className="column is-flex">
                        <div className="field">
                            <select className="label">
                                {menuList(health)}
                            </select>                            
                        </div>
                    </div>
                    <div className="column is-flex">
                        <div className="field">
                            <label className="label">Bagels By The Dozen</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Menu