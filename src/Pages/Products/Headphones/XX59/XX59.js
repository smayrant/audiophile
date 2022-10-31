import ProductDetailSm from "../../../../Components/ProductDetailSm/ProductDetailSm";
import xx59ImgMobile from "../../../../Assets/Images/xx59-product-mobile.jpg";
import xx59ImgTablet from "../../../../Assets/Images/xx59-product-tablet.jpg";
import xx59ImgDesktop from "../../../../Assets/Images/xx59-product-desktop.jpg";
import Navbar from "../../../../Components/Navbar/Navbar";
import classes from "./XX59.module.scss";
import GoBackButton from "../../../../Components/UI/GoBackButton/GoBackButton";
import Features from "../../../../Components/Features/Features";
import InTheBoxItem from "../../../../Components/InTheBoxItem/InTheBoxItem";
import PictureContainer from "../../../../Components/PictureContainer/PictureContainer";
import SeeProduct from "../../../../Components/SeeProduct/SeeProduct";
import ShopProductContainer from "../../../../Components/ShopProductContainer/ShopProductContainer";
import BestGear from "../../../../Components/BestGear/BestGear";
import Footer from "../../../../Components/Footer/Footer";
import galleryImg1Mobile from "../../../../Assets/Images/xx59-gallery-1-mobile.jpg";
import galleryImg1Tablet from "../../../../Assets/Images/xx59-gallery-1-tablet.jpg";
import galleryImg1Desktop from "../../../../Assets/Images/xx59-gallery-1-desktop.jpg";
import galleryImg2Mobile from "../../../../Assets/Images/xx59-gallery-2-mobile.jpg";
import galleryImg2Tablet from "../../../../Assets/Images/xx59-gallery-2-tablet.jpg";
import galleryImg2Desktop from "../../../../Assets/Images/xx59-gallery-2-desktop.jpg";
import galleryImg3Mobile from "../../../../Assets/Images/xx59-gallery-3-mobile.jpg";
import galleryImg3Tablet from "../../../../Assets/Images/xx59-gallery-3-tablet.jpg";
import galleryImg3Desktop from "../../../../Assets/Images/xx59-gallery-3-desktop.jpg";
import mayLikeImg1Mobile from "../../../../Assets/Images/xx99ii-mayLike-mobile.jpg";
import mayLikeImg1Tablet from "../../../../Assets/Images/xx99ii-mayLike-tablet.jpg";
import mayLikeImg1Desktop from "../../../../Assets/Images/xx99ii-mayLike-desktop.jpg";
import mayLikeImg2Mobile from "../../../../Assets/Images/xx99-mayLike-mobile.jpg";
import mayLikeImg2Tablet from "../../../../Assets/Images/xx99-mayLike-tablet.jpg";
import mayLikeImg2Desktop from "../../../../Assets/Images/xx99-mayLike-desktop.jpg";
import mayLikeImg3Mobile from "../../../../Assets/Images/zx9-mayLike-mobile.jpg";
import mayLikeImg3Tablet from "../../../../Assets/Images/zx9-mayLike-tablet.jpg";
import mayLikeImg3Desktop from "../../../../Assets/Images/zx9-mayLike-desktop.jpg";
import cartImg from "../../../../Assets/Images/xx59-cart.jpg";

function XX59() {
  const xx59Text =
    "Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.";

  const paragraph1 =
    "These headphones have been created from durable, high-quality materials tough enough to take anywhere. Its compact folding design fuses comfort and minimalist style making it perfect for travel. Flawless transmission is assured by the latest wireless technology engineered for audio synchronization with videos. ";

  const paragraph2 =
    "More than a simple pair of headphones, this headset features a pair of built-in microphones for clear, hands-free calling when paired with a compatible smartphone. Controlling music and calls is also intuitive thanks to easy-access touch buttons on the earcups. Regardless of how you use the  XX59 headphones, you can do so all day thanks to an impressive 30-hour battery life that can be rapidly recharged via USB-C.";
  return (
    <div className={classes.xx59}>
      <Navbar />
      <GoBackButton />
      <ProductDetailSm
        newProduct={false}
        mobileImg={xx59ImgMobile}
        tabletImg={xx59ImgTablet}
        desktopImg={xx59ImgDesktop}
        title={"xx59 headphones"}
        text={xx59Text}
        seeProduct={false}
        price={899}
        addToCart={true}
        id={3}
        name={"xx59"}
        cartImg={cartImg}
      />
      <div className={classes.xx59_featuresContainer}>
        <Features paragraph1={paragraph1} paragraph2={paragraph2} />
        <div className={classes.xx59_inTheBoxContainer}>
          <h4 className={classes.xx59_inTheBox}>in the box</h4>
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
      <h4 className={classes.xx59_mayLike_heading}>you may also like</h4>
      <div className={classes.xx59_seeProductContainer}>
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
          imgAlt={"XX99 Mark I Headphones"}
          title={"xx99 mark i"}
          seeProductLink={"/products/mark-i-headphones"}
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

export default XX59;
