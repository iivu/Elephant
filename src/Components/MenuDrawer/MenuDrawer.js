import React from 'react'
import Drawer from '@material-ui/core/Drawer'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import IconButton from '@material-ui/core/IconButton'
import { withStyles } from '@material-ui/core/styles'


const drawerWidth = 240
const styles = {
	drawerHeader:{
		display:'flex',
		alignItems:'center',
		justifyContent:'flex-end',
	},
}

const MenuDrawer = (props) => {
	const {isDrawerOpen,drawerAnchor,classes} = props
	return (
		<Drawer
			variant="persistent"
			anchor={drawerAnchor}
			open={isDrawerOpen}
		>
			<div className={classes.drawerHeader}>
				<IconButton>
					<ChevronLeftIcon/>
				</IconButton>
			</div>
		</Drawer>
	)
}


export default withStyles(styles)(MenuDrawer)
