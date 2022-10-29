import classes from "./PictureContainer.module.scss";

function PictureContainer(props) {
  const {
    mobileImg1,
    tabletImg1,
    desktopImg1,
    mobileImg2,
    tabletImg2,
    desktopImg2,
    mobileImg3,
    tabletImg3,
    desktopImg3,
    alt1,
    alt2,
    alt3,
  } = props;
  return (
    <div className={classes.pictureContainer}>
      <picture className={classes.pictureContainer_img1}>
        <source media="(min-width: 992px)" srcSet={desktopImg1} />
        <source media="(min-width: 768px)" srcSet={tabletImg1} />
        <img src={mobileImg1} alt={alt1} />
      </picture>
      <picture className={classes.pictureContainer_img2}>
        <source media="(min-width: 992px)" srcSet={desktopImg2} />
        <source media="(min-width: 768px)" srcSet={tabletImg2} />
        <img src={mobileImg2} alt={alt2} />
      </picture>
      <picture className={classes.pictureContainer_img3}>
        <source media="(min-width: 992px)" srcSet={desktopImg3} />
        <source media="(min-width: 768px)" srcSet={tabletImg3} />
        <img src={mobileImg3} alt={alt3} />
      </picture>
    </div>
  );
}

export default PictureContainer;
