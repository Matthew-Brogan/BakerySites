import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import { fade, makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import YesVegan from "../yes_its_vegan.png";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  image: {
      height: 180,
      width: 180,
      display: 'flex',
      flexDirection: 'row'
  },
  header: {
      marginLeft: 55,
      padding: 25,
      display: 'flex',
      flexDirection: 'row',
      color: '#AA0000',
      textAlign: 'center',
      fontFamily: 'Gabriola' 
  },
  toolBar:{
      backgroundColor: '#F87C78'
  },
  menuButton:{
      marginLeft: 100,
      marginTop: -60
  }
  
}));

export default function HomeAppBar() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.toolBar}>
          <Box className={classes.centerBlock}>
            <Typography>
                <Typography variant="h1" className={classes.header}>
              Delicious Vegan &nbsp;
            
            <img className={classes.image} src="../yes_its_vegan.png" />
            &nbsp; Baked Goods</Typography>
            </Typography>
            
          </Box>
          <Box className={classes.rightBlock}>
            <IconButton
              edge="end"
              className={classes.menuButton}
              color="inherit"
              aria-label="navigation"
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
}
