import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import { withStyles } from '@material-ui/core/styles'

const styles = {
    appBarRoot: {
        boxShadow:'none',
    },
    flexGrow: {
        flexGrow:1,
    },
    iconButtonMargin:{
        marginRight:20,
    },
}

const TopBar = (props) =>{
	const { classes } = props
	return (
		<AppBar position="static" color="default" classes={{root:classes.appBarRoot}}>
			<Toolbar>
				<IconButton  aria-label="Menu" className={classes.iconButtonMargin} onClick={this.onMenuButtonClick}>
					<MenuIcon/>
				</IconButton>
				<Typography variant="title" color="inherit" className={classes.flexGrow}>
					Topbar
				</Typography>
				<Button variant="outlined">LOGOUT</Button>
			</Toolbar>
		</AppBar>
	)
}

export default withStyles(styles)(TopBar)