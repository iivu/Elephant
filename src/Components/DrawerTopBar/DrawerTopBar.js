import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Drawer from '@material-ui/core/Drawer'
import { withStyles } from '@material-ui/core/styles'

const drawerWidth = 240
const styles = {
    appBarRoot: {
        boxShadow:'none',
    },
    flexGrow: {
        flexGrow:1,
    },
    iconButtonMargin:{
        marginRight:20,
    }
}

const _Drawer = (props) => {
    const {isDrawerOpen,drawerAnchor} = props
    return (
        <Drawer
            variant="persistent"
            anchor={drawerAnchor}
            open={isDrawerOpen}
        >

        </Drawer>
    )

}

class DrawerTopBar extends React.Component {

    constructor (props) {
        super(props)
        this.state = {
            //抽屉菜单是否打开
            isDrawerOpen:false,
            //抽屉菜单的位置
            drawerAnchor:'left',
        }
    }

    render(){
        const { classes } = this.props
        return (
            <AppBar position="static" color="default" classes={{root:classes.appBarRoot}}>
                <Toolbar>
                    <IconButton aria-label="Menu" className={classes.iconButtonMargin}>
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="title" color="inherit" className={classes.flexGrow}>
                        Topbar
                    </Typography>
                    <Button>LOGOUT</Button>
                </Toolbar>
            </AppBar>
        )
    }
}



export default withStyles(styles)(DrawerTopBar)