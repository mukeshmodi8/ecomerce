import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import summer from "../Pages/image/summer.jpg";
// import Header from "../components/Header";
import "./Home.css";
import shop from '../Pages/image/shop.jpg';
import Feedback from "./Feedback";

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: 50.00,
      image:
        "https://www.beatsbydre.com/content/dam/beats/web/product/headphones/solo4-wireless/pdp/product-carousel/cloud-pink/pink-01-solo4.jpg",
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 1300.00,
      image:
        "https://www.jiomart.com/images/product/original/rvnjwxmr8l/punnkfunnk-kids-smart-watch-1-44-tft-display-4g-sim-card-phone-with-long-lasting-voice-call-kids-gps-music-player-alarm-clock-games-ip67-waterproof-blue-product-images-orvnjwxmr8l-p608090268-0-202402191738.jpg?im=Resize=(1000,1000)",
    },
    {
      id: 3,
      name: "Gaming Mouse",
      price: 550.00,
      image:
        "https://images-cdn.ubuy.co.in/633b97e462e47a4eee2183bd-inhanda-wired-rgb-gaming-mouse-high.jpg",
    },
    {
      id: 4,
      name: "I Pad",
      price: 500.00,
      image:
        "https://iplanet.one/cdn/shop/files/iPad_10th_generation_Wi-Fi_Pink_PDP_Image_Fall23_Position-1__en-IN_f9e5b5a9-6fe7-4d8e-a75e-27be484a0b4b.jpg?v=1718803017",
    },
    {
      id: 5,
      name: "I Phone",
      price: 1400.00,
      image:
        "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1725959411/Croma%20Assets/Communication/Mobiles/Images/309727_0_ox4325.png",
    },
    {
      id: 6,
      name: "JYX Sound Speaker",
      price: 2400.00,
      image: "https://m.media-amazon.com/images/I/713TUYjagQL.jpg",
    },
  ];


  return (
    <>
     

      {/* Slider Section */}
      <section className="banner_slider_wrapper">
        <div className="container-fluid">
          <Slider {...settings}>

            <div className="row d-flex align-items-center mx-0 mt-5" style={{ height: "100vh" }}>
              <div className="col-lg-6 col-md-12 text-center text-lg-start p-5">
                <h6 className="text-uppercase text-primary">Limited time offer!</h6>
                <h1 className="fw-bold">Huge Summer Sale</h1>
                <p className="text-muted">Mobile, Tablet, Headphone & much more...</p>
                <a href="#" className="btn btn-primary btn-lg mt-3 slider-btn">
                  Buy Now <span><i className="fa fa-chevron-right"></i></span>
                </a>
              </div>
              <div className="col-lg-6 col-md-12 p-0">
                <img
                  src={summer}
                  alt="Summer Sale"
                  className="img-fluid w-100 h-100 slider-img"
                  style={{ height: "100vh", objectFit: "cover" }}
                />
              </div>
            </div>

            <div className="row d-flex align-items-center flex-row-reverse mx-0" style={{ height: "100vh" }}>
              <div className="col-lg-6 col-md-12 p-0">
                <img
                  src="https://m.media-amazon.com/images/I/61bK6PMOC3L.jpg"
                  alt="iPhone"
                  className="img-fluid w-100 h-100 slider-img"
                  style={{ height: "100vh", objectFit: "cover" }}
                />
              </div>
              <div className="col-lg-6 col-md-12 text-center text-lg-start p-5">
                <h6 className="text-uppercase text-danger">Limited time offer!</h6>
                <h1 className="fw-bold">iPhone</h1>
                <p className="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <a href="#" className="btn btn-danger btn-lg mt-3 slider-btn">
                  Buy Now <span><i className="fa fa-chevron-right"></i></span>
                </a>
              </div>
            </div>

            <div className="row d-flex align-items-center mx-0 mt-5" style={{ height: "80vh" }}>
              <div className="col-lg-6 col-md-12 text-center text-lg-start p-5">
                <h6 className="text-uppercase text-success">Limited time offer!</h6>
                <h1 className="fw-bold">boAt Bluetooth Speakers</h1>
                <p className="text-muted">
                  Portable Bluetooth Speaker with 14W boAt Signature Sound, RGB LED Design, 12 Hours Playback
                </p>
                <a href="#" className="btn btn-success btn-lg mt-3 slider-btn">
                  Buy Now <span><i className="fa fa-chevron-right"></i></span>
                </a>
              </div>
              <div className="col-lg-6 col-md-12 p-0">
                <img
                  src="https://m.media-amazon.com/images/I/71RWq2CjD-L._AC_UF1000,1000_QL80_.jpg"
                  alt="boAt Speaker"
                  className="img-fluid w-100 h-100 slider-img"
                  style={{ height: "100vh", objectFit: "cover" }}
                />
              </div>
            </div>

          </Slider>
        </div>
      </section>

      {/* About Arbuda Mobile Section */}

      <section className="about-section container my-5 py-5">
        <div className="row align-items-center mx-0">
          <div className="col-md-6 mb-4 mb-md-0">
            <img src={shop} alt="Culinary Adventure" className="img-fluid rounded mb-3" />
            {/* <img
              src="../Pages/image/shop.jpg"
              alt="About Arbuda Mobile"
              className="img-fluid about-img rounded shadow"
            /> */}
          </div>
          <div className="col-md-6">
            <h2 className="mb-4 text-primary">About Arbuda Mobile</h2>
            <p>
              Arbuda Mobile is a leading technology company dedicated to delivering high-quality mobile devices and accessories.
              With a commitment to innovation and customer satisfaction, we bring the latest trends and technologies right to your fingertips.
              Our diverse range of products is designed to meet the needs of modern consumers, ensuring style, performance, and reliability.
            </p>
            <p>
              We continuously strive to innovate and push boundaries to provide an unmatched customer experience.
              Join us on our journey and experience the future of mobile technology today.
            </p>
          </div>
        </div>
      </section>

      {/* Product Cards Section */}

      <section className=" product container my-5">
        <h2 className="text-center mb-4 text-primary">Arbuda Mobile Products</h2>
        <div className="row mx-0">
          {products.map((product) => (
            <div key={product.id} className="col-lg-4 col-md-6 mb-4">
              <div className="card p-5 shadow-lg">
                <img
                  src={product.image}
                  alt={product.name}
                  style={{ height: "300px", objectFit: "cover" }}
                />
                <div className="card-body text-center">
                  <h5 className="card-title">{product.name}</h5>
                  <h6>Price : ${product.price}</h6>
                  <button className="btn btn-success mx-2">Add to Cart</button>
                  <a href="#" className="btn btn-primary product-btn">
                    Buy Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Feedback></Feedback>

    </>
  );
};

export default Home;
