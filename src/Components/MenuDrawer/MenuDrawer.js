import React from 'react'
import Drawer from '@material-ui/core/Drawer'
import { withStyles } from '@material-ui/core/styles'
import classNames from 'classnames'
import APP_CONFIG  from '../../Config/index'
import Menu from '../MenuList/MenuList'
const {drawerWidth,drawerAnchor} = APP_CONFIG

const styles = theme => ({
    drawerPaper: {
        width: drawerWidth,
		backgroundColor:'#eee',
		overflow:APP_CONFIG.menuOverflow,
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
            <Menu onCloseMenu={onCloseMenu}/>
		</Drawer>
	)
}


export default withStyles(styles,{withTheme:true})(MenuDrawer)
