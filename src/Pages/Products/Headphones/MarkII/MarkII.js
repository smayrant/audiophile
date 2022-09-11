import ProductDetailSm from "../../../../Components/ProductDetailSm/ProductDetailSm";
import mark2Img from "../../../../Assets/Images/category-page-xx992-mobile.jpg";
import Navbar from "../../../../Components/Navbar/Navbar";
import classes from "./MarkII.module.scss";
import GoBackButton from "../../../../Components/GoBackButton/GoBackButton";
import Features from "../../../../Components/Features/Features";
import InTheBoxItem from "../../../../Components/InTheBoxItem/InTheBoxItem";
import PictureContainer from "../../../../Components/PictureContainer/PictureContainer";
import SeeProduct from "../../../../Components/SeeProduct/SeeProduct";
import ShopProductContainer from "../../../../Components/ShopProductContainer/ShopProductContainer";
import BestGear from "../../../../Components/BestGear/BestGear";
import Footer from "../../../../Components/Footer/Footer";
import galleryImg1 from "../../../../Assets/Images/mark2-gallery-1-mobile.jpg";
import galleryImg2 from "../../../../Assets/Images/mark2-gallery-2-mobile.jpg";
import galleryImg3 from "../../../../Assets/Images/mark2-gallery-3-mobile.jpg";
import mayLikeImg1 from "../../../../Assets/Images/xx99-mayLike-mobile.jpg";
import mayLikeImg2 from "../../../../Assets/Images/xx59-mayLike-mobile.jpg";
import mayLikeImg3 from "../../../../Assets/Images/zx9-mayLike-mobile.jpg";

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
        imgSrc={mark2Img}
        title={"xx99 markii headphones"}
        text={mark2Text}
        seeProduct={false}
        price={"$2,999"}
        addToCart={true}
      />
      <Features paragraph1={paragraph1} paragraph2={paragraph2} />
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

      <PictureContainer
        img1={galleryImg1}
        img2={galleryImg2}
        img3={galleryImg3}
      />
      <h4 className={classes.markII_mayLike_heading}>you may also like</h4>
      <SeeProduct
        imgSrc={mayLikeImg1}
        imgAlt={"XX99 Mark I Headphones"}
        title={"xx99 mark i"}
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

export default MarkII;
