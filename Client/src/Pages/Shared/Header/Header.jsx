// import React from 'react';
import { Carousel } from "react-bootstrap";
import NavSection from "../NavSection";
import './Header.css'
import LazyLoad from "react-lazyload";


const Header = () => {

    return (
       <div>
        <NavSection></NavSection>


<Carousel>
      <Carousel.Item>
        <LazyLoad>
        <img
          className="d-block w-100 banner"
          src="./images/banner-2.jpeg"
          alt="First slide"
        />
        </LazyLoad>
     
        <Carousel.Caption>
          <h3>Ree Drummond with meal </h3>
          <p>Here, you wll find recipes for steak, pork, salmon, and chicken, not to mention some outside-the-box pasta recipes and other imaginative ideas to ensure you wll never be stuck in a cooking rut again.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-inline w-100 banner"
          src="./images/banner-3.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Chorizo & mozzarella gnocchi bake</h3>
          <p>Upgrade cheesy tomato pasta with gnocchi, chorizo and mozzarella for a comforting bake that makes an excellent midweek meal.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 banner"
          src="./images/banner-4.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Garlic and lemon prawn pasta recipe</h3>
          <p>
          With garlic butter prawns, vibrant veg and a hint of lemon, it only takes 5 ingredients and 15 ...
Ingredients
500g packet dried linguine pasta
500g packet frozen peeled broad beans
36.40 gm extra virgin olive oil
280g packet De Costi Prawns with Lemon & Garlic Butter
1 bunch asparagus, cut diagonally into thirds
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

       </div>
    );
};

export default Header;