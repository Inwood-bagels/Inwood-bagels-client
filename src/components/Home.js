import React, {useState} from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

function Home() {
    return (
        <section className="hero">
            <div className="hero-body">
                <div className="is-flex is-justify-content-center">
                    <div>
                        <Carousel className="column is-half" 
                        renderThumbs={() => false}
                        showStatus={false}
                        showArrows={true}
                        autoPlay={true}
                        showIndicators={false} 
                        width={"50vw"}>
                            <div>
                                <img src="https://source.unsplash.com/random/1289x720?food" />
                                <div className="content">
                                    <h3>Something here</h3>
                                    <p>Some kind of text here</p>
                                </div>
                            </div>
                            <div>
                                <img src="https://source.unsplash.com/random/1289x720?dish" />
                                <div className="content">
                                    <h3>Something here</h3>
                                    <p>Some kind of text here</p>
                                </div>
                            </div>
                            <div>
                                <img src="https://source.unsplash.com/random/1289x720?food,dish" />
                                <div className="content">
                                    <h3>Something here</h3>
                                    <p>Some kind of text here</p>
                                </div>  
                            </div>
                        </Carousel>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}

export default Home