import React from "react";
import {Container, AppBar, Typography, Grow, Grid} from '@material-ui/core';


//Local Modules
import img from './images/img-1.png';
import Form from "./components/Form/Form";
import Posts from "./components/Posts/Posts";
import useStyles from "./styles"


const App = () =>{
    const classes = useStyles();
    return(
        <Container maxWidth="lg" >
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography className="classes.heading" variant="h2" align="center">Collection</Typography>
                <img  calssName={classes.images} src={img}  alt="Image" width="60" height="60"  />
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify="space-between" alignItems="strech" spacing={3}>
                        <Grid item xs={12}sm={7}> 
                                <Posts/>
                        </Grid>
                        <Grid item xs={12}sm={4}> 
                                <Form/>
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    )
}
export default App;