import { Box, Button, Container } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import pink from '../Images/10inchpinkombrerosettebirthday.jpg';
import almond from '../Images/almondspritzcookies.jpg';
import autumncupcakes from '../Images/autumncupcakes.jpg';
import birthdaykitten from '../Images/Birthdaykittycake.jpeg';
import bluebirthdaycake from '../Images/bluebirthdaycake.jpg';
import chocolatechips from '../Images/chocolatechipcookies.jpg';
import cookieMonster from '../Images/cookiemonster.jpg';
import cupcakeBouqet from '../Images/Cupcakebouquet.jpg';
import fallcupcakes from '../Images/fallcupcakes.jpg';
import flowercake from '../Images/flowercake.jpg';
import Fullviewpinkrosette10inchbday from '../Images/Fullviewpinkrosette10inchbday.jpg';
import gravitycake from '../Images/gravitycake.jpg';
import heartcookiecake from '../Images/heartcookiecake.jpg';
import heartcookiecake2 from '../Images/heartcookiecake2.jpg';
import HeartLinzercookiesbackground from '../Images/HeartLinzercookiesbackground.jpg';
import HeartSashCakeFullFrontView from '../Images/HeartSashCakeFullFrontView.jpg';
import HeartSashCakeTop from '../Images/HeartSashCakeTop.jpg';
import HeartSashCakeTop2 from '../Images/HeartSashCakeTop2.jpg';
import icecreamdripcake from '../Images/icecreamdripcake.jpg';
import LargeVDayKit from '../Images/LargeVDayKit.jpg';
import neonflowercake from '../Images/neonflowercake.jpg';
import Pinkneonflower from '../Images/Pinkneonflower.jpg';
import pinkneonflower2 from '../Images/pinkneonflower2.jpg';
import Quickbreads from '../Images/Quickbreads.jpg';
import redvelvetcupcakes from '../Images/redvelvetcupcakes.jpg';
import rosettecake from '../Images/rosettecake.jpg';
import rufflecake from '../Images/rufflecake.jpg';
import Ruffledcaketop from '../Images/Ruffledcaketop.jpg';
import sconeswithorangeglaze from '../Images/sconeswithorangeglaze.jpg';
import ShortbreadCookies2 from '../Images/ShortbreadCookies2.jpg';
import side10inchpinkrosettebday from '../Images/side10inchpinkrosettebday.jpg';
import SmallDIYVdayCookieKit from '../Images/SmallDIYVdayCookieKit.jpg';
import SugarcookieChristmastins from '../Images/SugarcookieChristmastins.jpg';
import tealhombre2 from '../Images/tealhombre2.jpg';
import tealombre from '../Images/tealombre.jpg';
import VDAYCupcakes from '../Images/VDAYCupcakes.jpg';
import VDAYLargeDIYCookieKit from '../Images/VDAYLargeDIYCookieKit.jpg';
import VDAYLinzerCookies from '../Images/VDAYLinzerCookies.jpg';
import VDAYMinicakes from '../Images/VDAYMinicakes.jpg';

import Carousel from "react-material-ui-carousel";
import { Paper } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  leftBlock: {
    display: "flex",
    marginLeft: 'auto',
    width: "100%",
  },
  rightBlock: {
    display: "flex",
    flexFlow: "column",
    marginLeft: 30,
    width: "35%",
  },
  slide: {
    display: "flex",
   backgroundColor: '#FBDDDC',
    width: "100%",
    flexDirection: "row",
    height: "600px",
    alignContent: 'center'
  },
  slideImage: {
    display: "flex",
    maxHeight: "600px",
    maxWidth: "100%",
    minWidth: "150px",
    flexDirection: "row",
    
  },
  slideHeading: {
    color: "#fff",
    fontWeight: "bolder",
    textAlign: "left",
    variant: "h6",
  },
  slideButton: {
    display: "block",
    backgroundColor: "#2882BF",
    color: "#fff",
    fontWeight: "bolder",
    width: "155px",
    border: "2px solid #fff",
  },
}));
const CakeCarousel = (props) => {
 
  const classes = useStyles();
  const imagesJson =[
    {
        id: 1,
        title: '10 inch pink ombre',
        image: '10inchpinkombrerosettebirthday.jpg'
    },
    {
        id: 2,
        title: 'Almond Cookies',
        image: 'almondspritzcookies.jpg'
    },
    {
        id: 3,
        title: 'Autumn Cupcakes',
        image: 'autumncupcakes.jpg'
    },
    {
        id: 4,
        title: 'Bithday Kitten Cake',
        image: 'Birthdaykittycake.jpeg'
    },
    {
        id: 5,
        title: 'Blue Birtday Cake',
        image: 'bluebirthdaycake.jpg'
    },
    {
        id: 6,
        title: 'Chocolate Chips',
        image: 'chocolatechipcookies.jpg'
    },
    {
        id: 7,
        title: 'Cookie Monster Cake',
        image: 'cookiemonster.jpg'
    },
    {
        id: 8,
        title: 'Cupcake Bouquet',
        image: 'Cupcakebouquet.jpg'
    },
    {
        id: 9,
        title: 'Fall Cupcakes',
        image: 'fallcupcakes.jpg'
    },
    {
        id: 10,
        title: 'Flower Cake',
        image: 'flowercake.jpg'
    },
    {
        id: 11,
        title: 'Full view Rosette',
        image: 'Fullviewpinkrosette10inchbday.jpg'
    },
    {
        id: 12,
        title: 'Gravity Cake',
        image: 'gravitycake.jpg'
    },
    {
        id: 13,
        title: 'Heart Cookie Cake',
        image: 'heartcookiecake.jpg'
    },
    {
        id: 14,
        title: 'Heart Cookie Cake 2',
        image: 'heartcookiecake2.jpg'
    },
    {
        id: 15,
        title: 'Heart Linzer 1',
        image: 'HeartLinzercookiesbackground.jpg'
    },
    {
        id: 16,
        title: 'Heart Sash Cake Front',
        image: 'HeartSashCakeFullFrontView.jpg'
    },
    {
        id: 17,
        title: 'Heart Sash Cake Top',
        image: 'HeartSashCakeTop.jpg'
    },
    {
        id: 18,
        title: 'Heart Sash Cake Top 2',
        image: 'HeartSashCakeTop2.jpg'
    },
    {
        id: 19,
        title: 'Ice Cream Drip Cake',
        image: 'icecreamdripcake.jpg'
    },
    {
        id: 20,
        title: 'Large Valentines Kit',
        image: 'LargeVDayKit.jpg'
    },
    {
        id: 21,
        title: 'Neon Flower Cake',
        image: 'neonflowercake.jpg'
    },
    {
        id: 22,
        title: 'Pink Neon Flower',
        image: 'Pinkneonflower.jpg'
    },
    {
        id: 23,
        title: 'Pink Neon Flower 2',
        image: 'pinkneonflower2.jpg'
    },
    {
        id: 24,
        title: 'Quick Breads',
        image: 'Quickbreads.jpg'
    },
    {
        id: 25,
        title: 'Red Velvet Cupcakes',
        image: 'redvelvetcupcakes.jpg'
    },
    {
        id: 26,
        title: 'Rosette Cake',
        image: 'rosettecake.jpg'
    },
    {
        id: 27,
        title: 'Ruffle Cake',
        image: 'rufflecake.jpg'
    },
    {
        id: 28,
        title: 'Ruffled Cake--Top',
        image: 'Ruffledcaketop.jpg'
    },
    {
        id: 29,
        title: 'Scones With Orange Glaze',
        image: 'sconeswithorangeglaze.jpg'
    },
    {
        id: 30,
        title: 'Shortbread Cookies 2',
        image: 'ShortbreadCookies2.jpg'
    },
    {
        id: 31,
        title: 'Side 10inch Pink Rosette Birthday',
        image: 'side10inchpinkrosettebday.jpg'
    },
    {
        id: 32,
        title: 'Small Vday DIY Cookie Kit',
        image: 'SmallDIYVdayCookieKit.jpg'
    },
    {
        id: 33,
        title: 'Sugar Cookie Christmas Tins',
        image: 'SugarcookieChristmastins.jpg'
    },
    {
        id: 34,
        title: 'Teal Hombre 2',
        image: 'tealhombre2.jpg'
    },
    {
        id: 35,
        title: 'Teal Ombre',
        image: 'tealombre.jpg'
    },
    {
        id: 36,
        title: 'VDAY Cupcakes',
        image: 'VDAYCupcakes.jpg'
    },
    {
        id: 37,
        title: 'VDAY Large DIY Cookie Kit',
        image: 'VDAYLargeDIYCookieKit.jpg'
    },
    {
        id: 38,
        title: 'VDAY Linzer Cookies',
        image: 'VDAYLinzerCookies.jpg'
    },
    {
        id: 39,
        title: 'VDAY Mini Cakes',
        image: 'VDAYMinicakes.jpg'
    },
     
];
  let carouselItems = Object.values(imagesJson).map((values) => (
    <Paper className={classes.slide}>
      {" "}
      <Box className={classes.leftBlock}>
        <img
          className={classes.slideImage}
          src={values.image}
        />
      </Box>
      
    </Paper>
  ));
  return (
    <Container maxWidth="xl" style={{ paddingTop: "5px" }}>
      <Carousel>{carouselItems}</Carousel>
    </Container>
  );
};
export default CakeCarousel;