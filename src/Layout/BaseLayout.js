import React, {Component} from 'react'
import './BaseLayout.css'
import TopBar from '../Components/TopBar/TopBar'
import MenuDrawer from '../Components/MenuDrawer/MenuDrawer'
import { withStyles } from '@material-ui/core/styles'
import AppConfig from '../Config/index'
import classNames from 'classnames'


const {
    drawerWidth,
    drawerAnchor,
    mainMarginBottom,
    mainMarginLeft,
    mainMarginRight,
    mainMarginTop
} = AppConfig
const styles = theme => ({
    flexBox:{
        display:'flex',
        justifyContent: drawerAnchor === 'left' ? '' :'flex-end',
        position:'relative',
    },
    content: {
        marginTop: mainMarginTop,
        marginRight:mainMarginRight,
        marginLeft:mainMarginLeft,
        marginBottom:mainMarginBottom,
        flex: 1,
        fontSize:20,
        overflow:'auto',
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    'contentShift-left': {
        marginLeft:`${mainMarginLeft + drawerWidth}px`
    },
    'contentShift-right': {
        marginRight:`${mainMarginRight + drawerWidth}px`
    },
})

class BaseLayout extends Component {

    constructor () {
        super()
        this.state = {
            isDrawerOpen: false,
        }
    }

    onOpenMenu = () => {
        this.setState({isDrawerOpen: true})
    }

    onCloseMenu = () => {
        this.setState({isDrawerOpen: false})
    }

    onLogout = () => {
        console.log('logout')
    }


    render () {
        const {isDrawerOpen} = this.state
        const {classes} = this.props
        const menuAction = {
            onCloseMenu: this.onCloseMenu,
        }
        const topBarAction = {
            onOpenMenu: this.onOpenMenu,
            onLogout: this.onLogout,
        }
        return (
            <div className={`base-layout ${classes.flexBox}`}>
                <TopBar {...topBarAction} isDrawerOpen={isDrawerOpen}/>
                <MenuDrawer {...menuAction} isDrawerOpen={isDrawerOpen}/>
                <main className={classNames(classes.content,{
                    [classes[`contentShift-${drawerAnchor}`]]:isDrawerOpen,
                })}>
                    This is main content.
                </main>
            </div>
        )
    }
}

export default withStyles(styles,{withTheme:true})(BaseLayout)
