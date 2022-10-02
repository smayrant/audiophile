import classes from "./YX1.module.scss";
import ProductDetailSm from "../../../../Components/ProductDetailSm/ProductDetailSm";
import yx1Img from "../../../../Assets/Images/category-page-earphones-mobile.jpg";
import Navbar from "../../../../Components/Navbar/Navbar";
import GoBackButton from "../../../../Components/UI/GoBackButton/GoBackButton";
import Features from "../../../../Components/Features/Features";
import InTheBoxItem from "../../../../Components/InTheBoxItem/InTheBoxItem";
import PictureContainer from "../../../../Components/PictureContainer/PictureContainer";
import SeeProduct from "../../../../Components/SeeProduct/SeeProduct";
import ShopProductContainer from "../../../../Components/ShopProductContainer/ShopProductContainer";
import BestGear from "../../../../Components/BestGear/BestGear";
import Footer from "../../../../Components/Footer/Footer";
import galleryImg1 from "../../../../Assets/Images/yx1-gallery-1-mobile.jpg";
import galleryImg2 from "../../../../Assets/Images/yx1-gallery-2-mobile.jpg";
import galleryImg3 from "../../../../Assets/Images/yx1-gallery-3-mobile.jpg";
import mayLikeImg1 from "../../../../Assets/Images/zx9-mayLike-mobile.jpg";
import mayLikeImg2 from "../../../../Assets/Images/xx99-mayLike-mobile.jpg";
import mayLikeImg3 from "../../../../Assets/Images/xx59-mayLike-mobile.jpg";
import cartImg from "../../../../Assets/Images/yx1-cart.jpg";

function YX1() {
  const yx1Text =
    "Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.";

  const paragraph1 =
    "Experience unrivalled stereo sound thanks to innovative acoustic technology. With improved ergonomics designed for full day wearing, these revolutionary earphones have been finely crafted to provide you with the perfect fit, delivering complete comfort all day long while enjoying exceptional noise isolation and truly immersive sound. ";

  const paragraph2 =
    "The YX1 Wireless Earphones features customizable controls for volume, music, calls, and voice assistants built into both earbuds. The new 7-hour battery life can be extended up to 28 hours with the charging case, giving you uninterrupted play time. Exquisite craftsmanship with a splash resistant design now available in an all new white and grey color scheme as well as the popular classic black.";
  return (
    <div className={classes.yx1}>
      <Navbar />
      <GoBackButton />
      <ProductDetailSm
        newProduct={true}
        imgSrc={yx1Img}
        title={"yx1 earphones"}
        text={yx1Text}
        seeProduct={false}
        price={599}
        addToCart={true}
        id={6}
        name={"yx1"}
        cartImg={cartImg}
      />
      <Features paragraph1={paragraph1} paragraph2={paragraph2} />
      <h4 className={classes.yx1_inTheBox}>in the box</h4>
      <ul>
        <li>
          <InTheBoxItem qty={2} boxItem={"earphone unit"} />
        </li>
        <li>
          <InTheBoxItem qty={6} boxItem={"multi-size earplugs"} />
        </li>
        <li>
          <InTheBoxItem qty={1} boxItem={"user manual"} />
        </li>
        <li>
          <InTheBoxItem qty={1} boxItem={"USB-C charging cable"} />
        </li>
        <li>
          <InTheBoxItem qty={1} boxItem={"travel pouch"} />
        </li>
      </ul>

      <PictureContainer
        img1={galleryImg1}
        img2={galleryImg2}
        img3={galleryImg3}
      />
      <h4 className={classes.yx1_mayLike_heading}>you may also like</h4>
      <SeeProduct
        imgSrc={mayLikeImg2}
        imgAlt={"XX99 Mark I Headphones"}
        title={"xx99 mark i"}
        seeProductLink={"/products/mark-i-headphones"}
      />
      <SeeProduct
        imgSrc={mayLikeImg3}
        imgAlt={"XX59 Headphones"}
        title={"xx59"}
        seeProductLink={"/products/xx59-headphones"}
      />
      <SeeProduct
        imgSrc={mayLikeImg1}
        imgAlt={"ZX9 Speaker"}
        title={"zx9 speaker"}
        seeProductLink={"/products/zx9-speaker"}
      />
      <ShopProductContainer />
      <BestGear />
      <Footer />
    </div>
  );
}
export default YX1;
