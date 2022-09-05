import ProductDetailSm from "../../../../Components/ProductDetailSm/ProductDetailSm";
import mark2Img from "../../../../Assets/Images/category-page-xx992-mobile.jpg";
import Navbar from "../../../../Components/Navbar/Navbar";
import classes from "./MarkII.module.scss";
import GoBackButton from "../../../../Components/GoBackButton/GoBackButton";
import Features from "../../../../Components/Features/Features";
import InTheBox from "../../../../Components/InTheBox/InTheBox";
import PictureContainer from "../../../../Components/PictureContainer/PictureContainer";
import img1 from "../../../../Assets/Images/mark2-gallery-1-mobile.jpg";
import img2 from "../../../../Assets/Images/mark2-gallery-2-mobile.jpg";
import img3 from "../../../../Assets/Images/mark2-gallery-3-mobile.jpg";

function MarkII() {
  const mark2Text =
    "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.";

  const paragraph1 =
    "As the headphones all others are measured against, the XX99 Mark I demonstrates over five decades of audio expertise, redefining the critical listening experience. This pair of closed-back headphones are made of industrial, aerospace-grade materials to emphasize durability at a relatively light weight of 11 oz. ";

  const paragraph2 =
    "From the handcrafted microfiber ear cushions to the robust metal headband with inner damping element, the components work together to deliver comfort and uncompromising sound. Its closed-back design delivers up to 27 dB of passive noise cancellation, reducing resonance by reflecting sound to a dedicated absorber. For connectivity, a specially tuned cable is included with a balanced gold connector.";
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
      <InTheBox itemsInBox={3} qt={1} />
      <PictureContainer img1={img1} img2={img2} img3={img3} />
    </div>
  );
}

export default MarkII;
