import React from 'react';

import {
    Box,
    Container,
    Link,
    Paper
  } from "@material-ui/core";
  import Typography from '@material-ui/core/Typography';
  import { makeStyles } from "@material-ui/core/styles";
import CakeCarousel from './ImagesCarousel';


  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    container:{
      marginTop: '125px',
      backgroundColor: '#FBDDDC'
    },
    welcomePaper:{
        backgroundColor: '#FBDDDC'
    },
    message:{
        
    }
    
    
  }));


  const WelcomeMessage = () => {
    const classes = useStyles();

    return(
       
            <Paper className={classes.welcomePaper}>
                <Typography variant='h5' className={classes.message}>
                    Welcome to our site! We are so glad you stopped by and hope that your experience with us reflects our joy for 
                    sharing the finest vegan baked goods with you, your families and friends. After all this is the place to find treats
                    so tasty you would never know they are plant based if we didn't tell you! Below you will find a gallery of our past works.
                    There are also other sections of our site. Be sure to check it out, feel free to contact us, or order here directly! We appreciate any feedback 
                    or business you may bring to us in the future!
                  
                  
                    
                </Typography>

                <CakeCarousel />
            </Paper>
            
              
           
            
    )
  }
  export default WelcomeMessage;