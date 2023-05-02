import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import img from "../../components/img/img.png"
import img1 from "../../components/img/img_1.png"
import img2 from "../../components/img/img_2.png"
import img3 from "../../components/img/img_3.png"
import img4 from "../../components/img/img_4.png"
import img5 from "../../components/img/img_5.png"
import img6 from "../../components/img/img_6.png"
import img7 from "../../components/img/img_7.png"
import img8 from "../../components/img/img_8.png"

const Home = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 1
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <div>
            <div className="carousel_box">
                    <Carousel
                        responsive={responsive}
                        additionalTransfrom={0}
                        arrows
                        autoPlay={true}
                        autoPlaySpeed={2000}
                        centerMode={false}
                        className='carousel'
                        containerClass="container-with-dots"
                        dotListClass=''
                        draggable
                        focusOnSelect={true}
                        infinite
                        itemClass=''
                        keyBoardControl
                        minimumTouchDrag={80}
                        pauseOnHover
                        renderArrowsWhenDisabled={false}
                        renderButtonGroupOutside={false}
                        renderDotsOutside={false}
                    >
                        <div className="carousel_min_box">
                            <div className="carousel_text">
                                spring discount 10%
                            </div>
                            <div className="carousel_img_box">
                                <img src={img} alt="" className="carousel_img"/>
                                <img src={img1} alt="" className="carousel_img"/>
                                <img src={img2} alt="" className="carousel_img"/>
                            </div>
                        </div>
                        <div className="carousel_min_box">
                            <div className="carousel_text">
                                spring discount 10%
                            </div>
                            <img src={img3} alt="" className="carousel_img"/>
                            <img src={img4} alt="" className="carousel_img"/>
                            <img src={img5} alt="" className="carousel_img"/>
                        </div>
                        <div className="carousel_min_box">
                            <div className="carousel_text">
                                spring discount 10%
                            </div>
                            <img src={img6} alt="" className="carousel_img"/>
                            <img src={img7} alt="" className="carousel_img"/>
                            <img src={img8} alt="" className="carousel_img"/>
                        </div>
                    </Carousel>
            </div>
        </div>
    );
};

export default Home;