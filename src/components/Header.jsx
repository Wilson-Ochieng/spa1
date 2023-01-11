import React from 'react'
import { AppBar, Tabs, Toolbar, Typography ,Tab} from '@mui/material'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import HelpIcon from '@mui/icons-material/Help';
import ListIcon from '@mui/icons-material/List';

const Header = () => {
  return (
      <React.Fragment>
          <AppBar sx={{backgroundColor:'#063970'}}>
              <Toolbar>
                  <AddShoppingCartIcon />
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
    </React.Fragment>
  )
}

export default Header
