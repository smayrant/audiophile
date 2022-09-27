import ProductDetailSm from "../../../../Components/ProductDetailSm/ProductDetailSm";
import mark1Img from "../../../../Assets/Images/category-page-xx991-mobile.jpg";
import Navbar from "../../../../Components/Navbar/Navbar";
import classes from "./MarkI.module.scss";
import GoBackButton from "../../../../Components/GoBackButton/GoBackButton";
import Features from "../../../../Components/Features/Features";
import InTheBoxItem from "../../../../Components/InTheBoxItem/InTheBoxItem";
import PictureContainer from "../../../../Components/PictureContainer/PictureContainer";
import SeeProduct from "../../../../Components/SeeProduct/SeeProduct";
import ShopProductContainer from "../../../../Components/ShopProductContainer/ShopProductContainer";
import BestGear from "../../../../Components/BestGear/BestGear";
import Footer from "../../../../Components/Footer/Footer";
import galleryImg1 from "../../../../Assets/Images/mark1-gallery-1-mobile.jpg";
import galleryImg2 from "../../../../Assets/Images/mark1-gallery-2-mobile.jpg";
import galleryImg3 from "../../../../Assets/Images/mark1-gallery-3-mobile.jpg";
import mayLikeImg1 from "../../../../Assets/Images/xx99ii-mayLike-mobile.jpg";
import mayLikeImg2 from "../../../../Assets/Images/xx59-mayLike-mobile.jpg";
import mayLikeImg3 from "../../../../Assets/Images/zx9-mayLike-mobile.jpg";
import cartImg from "../../../../Assets/Images/xx99-cart.jpg";

function MarkI() {
  const mark1Text =
    "As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.";

  const paragraph1 =
    "As the headphones all others are measured against, the XX99 Mark I demonstrates over five decades of audio expertise, redefining the critical listening experience. This pair of closed-back headphones are made of industrial, aerospace-grade materials to emphasize durability at a relatively light weight of 11 oz.  ";

  const paragraph2 =
    "From the handcrafted microfiber ear cushions to the robust metal headband with inner damping element, the components work together to deliver comfort and uncompromising sound. Its closed-back design delivers up to 27 dB of passive noise cancellation, reducing resonance by reflecting sound to a dedicated absorber. For connectivity, a specially tuned cable is included with a balanced gold connector.";
  return (
    <div className={classes.markI}>
      <Navbar />
      <GoBackButton />
      <ProductDetailSm
        newProduct={false}
        imgSrc={mark1Img}
        title={"xx99 marki headphones"}
        text={mark1Text}
        seeProduct={false}
        price={parseInt("1750")}
        addToCart={true}
        id={1}
        name={"xx99 mk i"}
        cartImg={cartImg}
      />
      <Features paragraph1={paragraph1} paragraph2={paragraph2} />
      <h4 className={classes.markI_inTheBox}>in the box</h4>
      <ul>
        <li>
          <InTheBoxItem qty={1} boxItem={"headphone unit"} />
        </li>
        <li>
          <InTheBoxItem qty={2} boxItem={"replacement earcups"} />
        </li>
        <li>
          <InTheBoxItem qty={1} boxItem={"user manual"} />
        </li>
        <li>
          <InTheBoxItem qty={1} boxItem={"3.5mm 5m audio cable"} />
        </li>
      </ul>
      <PictureContainer
        img1={galleryImg1}
        img2={galleryImg2}
        img3={galleryImg3}
      />
      <h4 className={classes.markI_mayLike_heading}>you may also like</h4>
      <SeeProduct
        imgSrc={mayLikeImg1}
        imgAlt={"XX99 Mark II Headphones"}
        title={"xx99 mark ii"}
      />
      <SeeProduct
        imgSrc={mayLikeImg2}
        imgAlt={"XX59 Headphones"}
        title={"xx59"}
      />
      <SeeProduct
        imgSrc={mayLikeImg3}
        imgAlt={"ZX9 Speaker"}
        title={"zx9 speaker"}
      />
      <ShopProductContainer />
      <BestGear />
      <Footer />
    </div>
  );
}

export default MarkI;
