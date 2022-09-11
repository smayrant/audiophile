import classes from "./ZX7.module.scss";
import ProductDetailSm from "../../../../Components/ProductDetailSm/ProductDetailSm";
import zx7Img from "../../../../Assets/Images/category-page-zx7-mobile.jpg";
import Navbar from "../../../../Components/Navbar/Navbar";
import GoBackButton from "../../../../Components/GoBackButton/GoBackButton";
import Features from "../../../../Components/Features/Features";
import InTheBoxItem from "../../../../Components/InTheBoxItem/InTheBoxItem";
import PictureContainer from "../../../../Components/PictureContainer/PictureContainer";
import SeeProduct from "../../../../Components/SeeProduct/SeeProduct";
import ShopProductContainer from "../../../../Components/ShopProductContainer/ShopProductContainer";
import BestGear from "../../../../Components/BestGear/BestGear";
import Footer from "../../../../Components/Footer/Footer";
import galleryImg1 from "../../../../Assets/Images/zx7-gallery-1-mobile.jpg";
import galleryImg2 from "../../../../Assets/Images/zx7-gallery-2-mobile.jpg";
import galleryImg3 from "../../../../Assets/Images/zx7-gallery-3-mobile.jpg";
import mayLikeImg1 from "../../../../Assets/Images/zx9-mayLike-mobile.jpg";
import mayLikeImg2 from "../../../../Assets/Images/xx99-mayLike-mobile.jpg";
import mayLikeImg3 from "../../../../Assets/Images/xx59-mayLike-mobile.jpg";

function ZX7() {
  const zx7Text =
    "Stream high quality sound wirelessly with minimal to no loss. The ZX7 speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.";

  const paragraph1 =
    "Reap the advantages of a flat diaphragm tweeter cone. This provides a fast response rate and excellent high frequencies that lower tiered bookshelf speakers cannot provide. The woofers are made from aluminum that produces a unique and clear sound. XLR inputs allow you to connect to a mixer for more advanced usage. ";

  const paragraph2 =
    "The ZX7 speaker is the perfect blend of stylish design and high performance. It houses an encased MDF wooden enclosure which minimises acoustic resonance. Dual connectivity allows pairing through bluetooth or traditional optical and RCA input. Switch input sources and control volume at your finger tips with the included wireless remote. This versatile speaker is equipped to deliver an authentic listening experience.";
  return (
    <div className={classes.zx7}>
      <Navbar />
      <GoBackButton />
      <ProductDetailSm
        newProduct={false}
        imgSrc={zx7Img}
        title={"zx7 speaker"}
        text={zx7Text}
        seeProduct={false}
        price={"$3,500"}
        addToCart={true}
      />
      <Features paragraph1={paragraph1} paragraph2={paragraph2} />
      <h4 className={classes.zx7_inTheBox}>in the box</h4>
      <ul>
        <li>
          <InTheBoxItem qty={2} boxItem={"speaker unit"} />
        </li>
        <li>
          <InTheBoxItem qty={2} boxItem={"speaker cloth panel"} />
        </li>
        <li>
          <InTheBoxItem qty={1} boxItem={"user manual"} />
        </li>
        <li>
          <InTheBoxItem qty={1} boxItem={"3.5mm 7.5m audio cable"} />
        </li>
        <li>
          <InTheBoxItem qty={1} boxItem={"7.5m optical cable"} />
        </li>
      </ul>

      <PictureContainer
        img1={galleryImg1}
        img2={galleryImg2}
        img3={galleryImg3}
      />
      <h4 className={classes.zx7_mayLike_heading}>you may also like</h4>
      <SeeProduct
        imgSrc={mayLikeImg1}
        imgAlt={"ZX9 Speaker"}
        title={"zx9 speaker"}
      />
      <SeeProduct
        imgSrc={mayLikeImg2}
        imgAlt={"XX99 Mark I Headphones"}
        title={"xx99 mark i"}
      />
      <SeeProduct
        imgSrc={mayLikeImg3}
        imgAlt={"XX59 Headphones"}
        title={"xx59"}
      />
      <ShopProductContainer />
      <BestGear />
      <Footer />
    </div>
  );
}
export default ZX7;
