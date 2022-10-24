import ProductDetailSm from "../../../../Components/ProductDetailSm/ProductDetailSm";
import mark1ImgMobile from "../../../../Assets/Images/markI-product-mobile.jpg";
import mark1ImgTablet from "../../../../Assets/Images/markI-product-tablet.jpg";
import mark1ImgDesktop from "../../../../Assets/Images/markI-product-desktop.jpg";
import Navbar from "../../../../Components/Navbar/Navbar";
import classes from "./MarkI.module.scss";
import GoBackButton from "../../../../Components/UI/GoBackButton/GoBackButton";
import Features from "../../../../Components/Features/Features";
import InTheBoxItem from "../../../../Components/InTheBoxItem/InTheBoxItem";
import PictureContainer from "../../../../Components/PictureContainer/PictureContainer";
import SeeProduct from "../../../../Components/SeeProduct/SeeProduct";
import ShopProductContainer from "../../../../Components/ShopProductContainer/ShopProductContainer";
import BestGear from "../../../../Components/BestGear/BestGear";
import Footer from "../../../../Components/Footer/Footer";
import galleryImg1Mobile from "../../../../Assets/Images/mark1-gallery-1-mobile.jpg";
import galleryImg1Tablet from "../../../../Assets/Images/mark1-gallery-1-tablet.jpg";
import galleryImg1Desktop from "../../../../Assets/Images/mark1-gallery-1-desktop.jpg";
import galleryImg2Mobile from "../../../../Assets/Images/mark1-gallery-2-mobile.jpg";
import galleryImg2Tablet from "../../../../Assets/Images/mark1-gallery-2-tablet.jpg";
import galleryImg2Desktop from "../../../../Assets/Images/mark1-gallery-2-desktop.jpg";
import galleryImg3Mobile from "../../../../Assets/Images/mark1-gallery-3-mobile.jpg";
import galleryImg3Tablet from "../../../../Assets/Images/mark1-gallery-3-tablet.jpg";
import galleryImg3Desktop from "../../../../Assets/Images/mark1-gallery-3-desktop.jpg";
import mayLikeImg1Mobile from "../../../../Assets/Images/xx99ii-mayLike-mobile.jpg";
import mayLikeImg1Tablet from "../../../../Assets/Images/xx99ii-mayLike-tablet.jpg";
import mayLikeImg1Desktop from "../../../../Assets/Images/xx99ii-mayLike-desktop.jpg";
import mayLikeImg2Mobile from "../../../../Assets/Images/xx59-mayLike-mobile.jpg";
import mayLikeImg2Tablet from "../../../../Assets/Images/xx59-mayLike-tablet.jpg";
import mayLikeImg2Desktop from "../../../../Assets/Images/xx59-mayLike-desktop.jpg";
import mayLikeImg3Mobile from "../../../../Assets/Images/zx9-mayLike-mobile.jpg";
import mayLikeImg3Tablet from "../../../../Assets/Images/zx9-mayLike-tablet.jpg";
import mayLikeImg3Desktop from "../../../../Assets/Images/zx9-mayLike-desktop.jpg";
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
        mobileImg={mark1ImgMobile}
        tabletImg={mark1ImgTablet}
        desktopImg={mark1ImgDesktop}
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
      <div className={classes.markI_inTheBoxContainer}>
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
      </div>
      <PictureContainer
        mobileImg1={galleryImg1Mobile}
        mobileImg2={galleryImg2Mobile}
        mobileImg3={galleryImg3Mobile}
        tabletImg1={galleryImg1Tablet}
        tabletImg2={galleryImg2Tablet}
        tabletImg3={galleryImg3Tablet}
        desktopImg1={galleryImg1Desktop}
        desktopImg2={galleryImg2Desktop}
        desktopImg3={galleryImg3Desktop}
      />
      <h4 className={classes.markI_mayLike_heading}>you may also like</h4>
      <div className={classes.markI_seeProductContainer}>
        <SeeProduct
          mobileImg={mayLikeImg1Mobile}
          tabletImg={mayLikeImg1Tablet}
          desktopImg={mayLikeImg1Desktop}
          imgAlt={"XX99 Mark II Headphones"}
          title={"xx99 mark ii"}
          seeProductLink={"/products/mark-ii-headphones"}
        />
        <SeeProduct
          mobileImg={mayLikeImg2Mobile}
          tabletImg={mayLikeImg2Tablet}
          desktopImg={mayLikeImg2Desktop}
          imgAlt={"XX59 Headphones"}
          title={"xx59"}
          seeProductLink={"/products/xx59-headphones"}
        />
        <SeeProduct
          mobileImg={mayLikeImg3Mobile}
          tabletImg={mayLikeImg3Tablet}
          desktopImg={mayLikeImg3Desktop}
          imgAlt={"ZX9 Speaker"}
          title={"zx9 speaker"}
          seeProductLink={"/products/zx9-speaker"}
        />
      </div>
      <ShopProductContainer />
      <BestGear />
      <Footer />
    </div>
  );
}

export default MarkI;
