import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import { withStyles } from '@material-ui/core/styles'
import classNames from 'classnames'

import APP_CONFIG  from '../../Config/index'


const {drawerWidth,drawerAnchor} = APP_CONFIG
const styles =(theme) => ({
    appBarRoot: {
        boxShadow:'none',
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
	appBarShift:{
    	width:`calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
	},
    'appBarShift-left': {
        marginLeft: drawerWidth,
    },
    'appBarShift-right': {
        marginRight: drawerWidth,
    },
    flexGrow: {
        flexGrow:1,
    },
    iconButtonMargin:{
        marginRight:20,
    },
})

const TopBar = (props) =>{
	const { classes,onOpenMenu,onLogout, isDrawerOpen } = props
	return (
		<AppBar position="absolute" color="default" classes={{root:classes.appBarRoot}} className={classNames({
            [classes.appBarShift]:isDrawerOpen,
			[classes[`appBarShift-${drawerAnchor}`]]:isDrawerOpen,
		})}>
			<Toolbar>
				{
                    isDrawerOpen ? null :
					(<IconButton  aria-label="Menu" className={classes.iconButtonMargin} onClick={onOpenMenu}>
						<MenuIcon/>
					</IconButton>)
				}
				<Typography variant="title" color="inherit" className={classes.flexGrow}>
                    {APP_CONFIG.title}
				</Typography>
				<Button variant="outlined" onClick={onLogout}>LOGOUT</Button>
			</Toolbar>
		</AppBar>
	)
}

export default withStyles(styles,{withTheme:true})(TopBar)