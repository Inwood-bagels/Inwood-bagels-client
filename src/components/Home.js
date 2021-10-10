import React, {useState} from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import '../styles/styles.css'
import { Carousel } from 'react-responsive-carousel'
import bagels from '../images/Bagels.jpeg'
import inside from '../images/Inside Shop.JPG'
import creamCheese from '../images/Creamcheese.jpeg'
import garden from '../images/Garden of Inwood Salad.jpeg'
import wrap from '../images/California Wrap PLatter.jpeg'

function Home() {
    return (
        <section className="hero">
            <div className="hero-body">
                <div className="is-flex is-justify-content-center">
                        <Carousel className="column is-half"
                        renderThumbs={() => false}
                        showStatus={false}
                        showArrows={true}
                        autoPlay={true}
                        showIndicators={false} 
                        width={"50vw"}
                        height={"70vw"}>
                            <div>
                                <img src={bagels} className="photo"/>
                                <div className="content">
                                    <h3>WELCOME TO INWOOD BAGELS </h3>
                                    <p></p>
                                </div>
                            </div>
                            <div>
                                <img src={creamCheese} className="photo"/>
                                <div className="content">
                                    {/*<h3>Something here</h3>*/}
                                    <p>Inwood Bagels is a small quaint bagel shop located in the Manhattan neighborhood of Inwood. </p>
                                </div>
                            </div>
                            <div>
                                <img src={inside} className="photo"/>
                                <div className="content">
                                    <p>Since May of 2017, Inwood Bagels has been serving the community with its sift bagels, and over a dozen of its homamade flavored cream cheese's. Since May of 2018, Inwood Bagels began running under new ownership and has continued to thrive ever since. </p>
                                </div>  
                            </div>
                        </Carousel>
                </div>
            </div>
        </section>
    )
}

export default Home
