import React from 'react'
import Drawer from '@material-ui/core/Drawer'
import { withStyles } from '@material-ui/core/styles'
import classNames from 'classnames'
import AppConfig  from '../../Config/index'
import MenuList from '../MenuList/MenuList'

const {drawerWidth,drawerAnchor} = AppConfig
const styles = theme => ({
    drawerPaper: {
        width: drawerWidth,
		backgroundColor:'#eee'
    },
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
            <MenuList onCloseMenu={onCloseMenu}/>
		</Drawer>
	)
}


export default withStyles(styles,{withTheme:true})(MenuDrawer)
