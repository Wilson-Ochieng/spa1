import React from 'react'
import { AppBar, Tabs, Toolbar, Typography ,Tab,Grid} from '@mui/material'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import HelpIcon from '@mui/icons-material/Help';
import ListIcon from '@mui/icons-material/List';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { HomeOutlined } from '@material-ui/icons';
import { CardActionArea } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import StarsIcon from '@mui/icons-material/Stars';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import HouseIcon from '@mui/icons-material/House';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    logo: {
        height: '50px',
        marginRight: theme.spacing(2),
        card: {
            margin: theme.spacing(2),
        },
    }
}));


const Header = () => {
    const classes = useStyles();
    return (
 <div className={classes.root}>
      <React.Fragment>
                <AppBar position="static" sx={{backgroundColor:'#063970'}}>
                    <Toolbar>
                        <img src={'/home/wilson/Interview/spa1/src/images/ndovu.png'} alt="Logo" className={classes.logo} />
                                <Typography>
                     
                      <Tabs textColor='inherit'>
                          <Tab label="" />
                          <Tab label="" />
                          <Tab label="" />
                          <Tab label="" />
                      </Tabs>
                      
                  </Typography>
                  <HelpIcon sx={{ marginLeft: "800px" }}  variant='contained'></HelpIcon>
                  <ListIcon sx={{marginLeft:"auto"}} variant='contained'>
                      <Tabs textColor='inherit'>
                          <Tab label="About us" />
                          <Tab label="Contact us" />
                          <Tab label="Products" />
                          <Tab label="Services" />
                      </Tabs>
                  </ListIcon>
              </Toolbar>
          </AppBar>
          
                <Grid container direction="column" alignItems="center" spacing={2}>
                    <Grid item xs={6}>
                  <Card style={{
                      width: 400,
                      backgroundColor: "black",
                  }}>
                      <CardActionArea>
                          
                          <CardContent>
                              <Typography style={{ fontSize: 14 }}
                                  color="yellow" gutterBottom variant="h5" component="div">
                                  30
                              </Typography>
                              <Typography style={{ fontSize: 14 }}
                                  color="white" gutterBottom variant="h5" component="div">
                                  Hold Balance
                              </Typography>
                              <Typography style={{ fontSize: 14 }}
                                  color="white" gutterBottom variant="h5" component="div">
                                  Kes
                              </Typography>
                            
                          </CardContent>
                      </CardActionArea>
                  </Card>
                  
                    </Grid>
                    <Grid item xs={6}>
                        <Card style={{
                            width: 400,
                            backgroundColor: "black",
                        }}>
                            <CardActionArea>

                                <CardContent>
                                    <Typography style={{ fontSize: 14 }}
                                        color="yellow" gutterBottom variant="h5" component="div">
                                        50
                                    </Typography>
                                    <Typography style={{ fontSize: 14 }}
                                        color="white" gutterBottom variant="h5" component="div">
                                        Available  Balance
                                    </Typography>
                                    <Typography style={{ fontSize: 14 }}
                                        color="white" gutterBottom variant="h5" component="div">
                                        Kes
                                    </Typography>

                                </CardContent>
                            </CardActionArea>
                        </Card>

                    </Grid>

                    
                    <Grid item xs={6}>
                        <Card style={{
                            width: 400,
                            backgroundColor: "red",
                        }}>
                            
                            <CardActionArea>
                                <Grid container direction="row" alignItems="center">
                                    <VolunteerActivismIcon />
                                    <Typography></Typography>
                                </Grid>

                                <CardContent>
                                    <Typography style={{ fontSize: 14 }}
                                        color="white" gutterBottom variant="h5" component="div">
                                        Join and pay Transaction
                                    </Typography>
                                    
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>

                    <Grid item xs={6}>
                        <Card style={{
                            width: 400,
                            backgroundColor: "yellow",
                        }}>

                            <CardActionArea>
                                <Grid container direction="row" alignItems="center">
                                    <DoneOutlineIcon />
                                    <Typography></Typography>
                                </Grid>

                                <CardContent>
                                    <Typography style={{ fontSize: 14 }}
                                        color="black" gutterBottom variant="h5" component="div">
                                        Accept|Reject Delivery
                                    </Typography>

                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs={6}>
                        <Card style={{
                            width: 400,
                            backgroundColor: "black",
                        }}>

                            <CardActionArea>
                                <Grid container direction="row" alignItems="center">
                                    <AccountBalanceWalletIcon />
                                    <Typography></Typography>
                                </Grid>

                                <CardContent>
                                    <Typography style={{ fontSize: 14 }}
                                        color="white" gutterBottom variant="h5" component="div">
                                        My Transactions
                                    </Typography>

                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs={6}>
                        <Card style={{
                            width: 400,
                            backgroundColor: "grey",
                        }}>

                            <CardActionArea>
                                <Grid container direction="row" alignItems="center">
                                    <StarsIcon />
                                    <Typography></Typography>
                                </Grid>

                                <CardContent>
                                    <Typography style={{ fontSize: 14 }}
                                        color="black" gutterBottom variant="h5" component="div">
                                        Invite to earn
                                    </Typography>

                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs={6}>
                        <Card style={{
                            width: 400,
                            backgroundImage: "./home/wilson/Interview/spa1/src/images/ndovu.png"
                        }}>

                            <CardActionArea>
                                <Grid container direction="row" alignItems="center">
                                    <AccountBalanceWalletIcon />
                                    <Typography></Typography>
                                </Grid>

                                <CardContent>
                                    <Typography style={{ fontSize: 20 }}
                                        color="white" gutterBottom variant="h5" component="div">
                                        My Transactions
                                    </Typography>
                                    <Typography style={{ fontSize: 14 }}
                                        color="white" gutterBottom variant="h5" component="div">
                                        Your money is safe
                                    </Typography>

                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs={6}>
                        <Card style={{
                            width: 400,
                            backgroundColor: "white",
                        }}>
                            <CardActionArea>
                                <Grid container direction="row" alignItems="center">
                                    <HouseIcon />
                                    <Typography>Home</Typography>
                                    <AccountBalanceWalletIcon />
                                    <Typography>My Transactions</Typography>
                                    <NotificationsIcon />
                                    <Typography>Notifications</Typography>
                                    < PersonIcon />
                                    <Typography>My Account</Typography>
                                   
                                </Grid>

                                <CardContent>
                                    <Typography style={{ fontSize: 14 }}
                                        color="yellow" gutterBottom variant="h5" component="div">
                                        30
                                    </Typography>
                                    <Typography style={{ fontSize: 14 }}
                                        color="white" gutterBottom variant="h5" component="div">
                                        Hold Balance
                                    </Typography>
                                    <Typography style={{ fontSize: 14 }}
                                        color="white" gutterBottom variant="h5" component="div">
                                        Kes
                                    </Typography>

                                </CardContent>
                            </CardActionArea>
                        </Card>

                    </Grid>

          </Grid>
            </React.Fragment>
            </div>
  )
}

export default Header
