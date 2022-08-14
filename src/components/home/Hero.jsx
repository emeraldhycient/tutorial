import "./hero.css";
import girl from "../../assets/girl.png";
import icon from "../../assets/icon.svg";

const Hero = () => {
  return (
    <div className="hero">
      <div className="inner-hero1">
        <h1>
          Fresh grocery delivery services, we bring the store to your door step.
        </h1>
        <h6>
          We serve the best of fresh, delicious ,nutrient, rich and healthy
          food.Fastest delivery and easy pickup.
        </h6>
        <div className="holder">
          <button className="button">Shop Now</button>
          <div className="videobtn">
            <img src={icon} alt="" />
            <h5>Order Process</h5>
          </div>
        </div>
      </div>
      <div className="inner-hero1">
        <img src={girl} id="girl" />
      </div>
    </div>
  );
};

export default Hero;
