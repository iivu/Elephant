import React from 'react'
import Drawer from '@material-ui/core/Drawer'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import IconButton from '@material-ui/core/IconButton'
import { withStyles } from '@material-ui/core/styles'
import classNames from 'classnames'
import AppConfig  from '../../Config/index'

const {drawerWidth,drawerAnchor} = AppConfig
const styles = theme => ({
	drawerHeader:{
		display:'flex',
		alignItems:'center',
		justifyContent:drawerAnchor === 'left' ? 'flex-end' : '',
		padding:'0 8px',
        ...theme.mixins.toolbar,
	},
    drawerPaper: {
        width: drawerWidth,
		backgroundColor:'#000'
    },
	closeDrawerButton: {
		color:'#fff',
	}
})
const MenuDrawer = (props) => {
	const {isDrawerOpen,classes,onCloseMenu} = props
	return (
		<Drawer
			variant="persistent"
			anchor={drawerAnchor}
			open={isDrawerOpen}
			classes={{paper:classes.drawerPaper}}
		>
			<div className={classes.drawerHeader} onClick={onCloseMenu}>
				<IconButton className={classes.closeDrawerButton}>
					{drawerAnchor === 'left' ? <ChevronLeftIcon/> : <ChevronRightIcon/>}
				</IconButton>
			</div>
		</Drawer>
	)
}


export default withStyles(styles,{withTheme:true})(MenuDrawer)
