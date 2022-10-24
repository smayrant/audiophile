import ProductDetailSm from "../../../../Components/ProductDetailSm/ProductDetailSm";
import mark2ImgMobile from "../../../../Assets/Images/markII-product-mobile.jpg";
import mark2ImgTablet from "../../../../Assets/Images/markII-product-tablet.jpg";
import mark2ImgDesktop from "../../../../Assets/Images/markII-product-desktop.jpg";
import Navbar from "../../../../Components/Navbar/Navbar";
import classes from "./MarkII.module.scss";
import GoBackButton from "../../../../Components/UI/GoBackButton/GoBackButton";
import Features from "../../../../Components/Features/Features";
import InTheBoxItem from "../../../../Components/InTheBoxItem/InTheBoxItem";
import PictureContainer from "../../../../Components/PictureContainer/PictureContainer";
import SeeProduct from "../../../../Components/SeeProduct/SeeProduct";
import ShopProductContainer from "../../../../Components/ShopProductContainer/ShopProductContainer";
import BestGear from "../../../../Components/BestGear/BestGear";
import Footer from "../../../../Components/Footer/Footer";
import galleryImg1Mobile from "../../../../Assets/Images/mark2-gallery-1-mobile.jpg";
import galleryImg1Tablet from "../../../../Assets/Images/mark2-gallery-1-tablet.jpg";
import galleryImg1Desktop from "../../../../Assets/Images/mark2-gallery-1-desktop.jpg";
import galleryImg2Mobile from "../../../../Assets/Images/mark2-gallery-2-mobile.jpg";
import galleryImg2Tablet from "../../../../Assets/Images/mark2-gallery-2-tablet.jpg";
import galleryImg2Desktop from "../../../../Assets/Images/mark2-gallery-2-desktop.jpg";
import galleryImg3Mobile from "../../../../Assets/Images/mark2-gallery-3-mobile.jpg";
import galleryImg3Tablet from "../../../../Assets/Images/mark2-gallery-3-tablet.jpg";
import galleryImg3Desktop from "../../../../Assets/Images/mark2-gallery-3-desktop.jpg";
import mayLikeImg1Mobile from "../../../../Assets/Images/xx99-mayLike-mobile.jpg";
import mayLikeImg1Tablet from "../../../../Assets/Images/xx99-mayLike-tablet.jpg";
import mayLikeImg1Desktop from "../../../../Assets/Images/xx99-mayLike-desktop.jpg";
import mayLikeImg2Mobile from "../../../../Assets/Images/xx59-mayLike-mobile.jpg";
import mayLikeImg2Tablet from "../../../../Assets/Images/xx59-mayLike-tablet.jpg";
import mayLikeImg2Desktop from "../../../../Assets/Images/xx59-mayLike-desktop.jpg";
import mayLikeImg3Mobile from "../../../../Assets/Images/zx9-mayLike-mobile.jpg";
import mayLikeImg3Tablet from "../../../../Assets/Images/zx9-mayLike-tablet.jpg";
import mayLikeImg3Desktop from "../../../../Assets/Images/zx9-mayLike-desktop.jpg";
import cartImg from "../../../../Assets/Images/xx99ii-cart.jpg";

function MarkII() {
  const mark2Text =
    "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.";

  const paragraph1 =
    "Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you’ll never miss a beat. ";

  const paragraph2 =
    "The advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic.";
  return (
    <div className={classes.markII}>
      <Navbar />
      <GoBackButton />
      <ProductDetailSm
        newProduct={true}
        mobileImg={mark2ImgMobile}
        tabletImg={mark2ImgTablet}
        desktopImg={mark2ImgDesktop}
        title={"xx99 markii headphones"}
        text={mark2Text}
        seeProduct={false}
        price={2999}
        addToCart={true}
        id={2}
        name={"xx99 mk ii"}
        cartImg={cartImg}
      />
      <Features paragraph1={paragraph1} paragraph2={paragraph2} />

      <div className={classes.markII_inTheBoxContainer}>
        <h4 className={classes.markII_inTheBox}>in the box</h4>
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
          <li>
            <InTheBoxItem qty={1} boxItem={"travel bag"} />
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
      <h4 className={classes.markII_mayLike_heading}>you may also like</h4>
      <div className={classes.markII_seeProductContainer}>
        <SeeProduct
          mobileImg={mayLikeImg1Mobile}
          tabletImg={mayLikeImg1Tablet}
          desktopImg={mayLikeImg1Desktop}
          imgAlt={"XX99 Mark I Headphones"}
          title={"xx99 mark i"}
          seeProductLink={"/products/mark-i-headphones"}
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

export default MarkII;
