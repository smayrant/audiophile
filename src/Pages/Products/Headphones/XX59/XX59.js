import ProductDetailSm from "../../../../Components/ProductDetailSm/ProductDetailSm";
import xx59Img from "../../../../Assets/Images/category-page-xx59-mobile.jpg";
import Navbar from "../../../../Components/Navbar/Navbar";
import classes from "./XX59.module.scss";
import GoBackButton from "../../../../Components/GoBackButton/GoBackButton";
import Features from "../../../../Components/Features/Features";
import InTheBoxItem from "../../../../Components/InTheBoxItem/InTheBoxItem";
import PictureContainer from "../../../../Components/PictureContainer/PictureContainer";
import SeeProduct from "../../../../Components/SeeProduct/SeeProduct";
import ShopProductContainer from "../../../../Components/ShopProductContainer/ShopProductContainer";
import BestGear from "../../../../Components/BestGear/BestGear";
import Footer from "../../../../Components/Footer/Footer";
import galleryImg1 from "../../../../Assets/Images/xx59-gallery-1-mobile.jpg";
import galleryImg2 from "../../../../Assets/Images/xx59-gallery-2-mobile.jpg";
import galleryImg3 from "../../../../Assets/Images/xx59-gallery-3-mobile.jpg";
import mayLikeImg1 from "../../../../Assets/Images/xx99ii-mayLike-mobile.jpg";
import mayLikeImg2 from "../../../../Assets/Images/xx99-mayLike-mobile.jpg";
import mayLikeImg3 from "../../../../Assets/Images/zx9-mayLike-mobile.jpg";
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
        imgSrc={xx59Img}
        title={"xx59 headphones"}
        text={xx59Text}
        seeProduct={false}
        price={899}
        addToCart={true}
        id={3}
        name={"xx59"}
        cartImg={cartImg}
      />
      <Features paragraph1={paragraph1} paragraph2={paragraph2} />
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

      <PictureContainer
        img1={galleryImg1}
        img2={galleryImg2}
        img3={galleryImg3}
      />
      <h4 className={classes.xx59_mayLike_heading}>you may also like</h4>
      <SeeProduct
        imgSrc={mayLikeImg1}
        imgAlt={"XX99 Mark I Headphones"}
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

export default XX59;
