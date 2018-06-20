import React,{Fragment} from 'react'
import {Route,Link} from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Collapse from '@material-ui/core/Collapse'
import ExpandMore from '@material-ui/icons/ExpandMore'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import IconButton from '@material-ui/core/IconButton'
import MenuList from '@material-ui/core/MenuList'
import MenuItem from '@material-ui/core/MenuItem'
import Typography from '@material-ui/core/Typography'
import APP_CONFIG from "../../Config"
import MENU_CONFIG from '../../menu/menu'

const {drawerWidth,drawerAnchor} = APP_CONFIG
const styles = theme=>({
    menuItem: {
        '&:focus': {
            backgroundColor: '#999',
            '& $primary, & $icon': {
                color: theme.palette.common.white,
            },
        },
    },
    primary: {},
    icon: {},
    drawerHeader:{
        display:'flex',
        alignItems:'center',
        justifyContent:drawerAnchor === 'left' ? 'flex-end' : '',
        ...theme.mixins.toolbar,
    },
    iconColor: {
        color:'#000',
    },
    nested:{
        paddingLeft: theme.spacing.unit * 9
    },
    expandTransition:{
        transition:'all 0.5s'
    },
    expandOpen:{
        transform:'rotate(-180deg)'
    },
    link:{
        display:'block',
        width:'100%',
        height:'100%',
        position:'absolute',
    }
})

function createMenuItem(config,props,state,clickHandler,isNested) {
    const { classes } = props
    const { openName } = state
    return config.map((item,index)=>{
        return (
            <Fragment key={index}>
                <MenuItem className={`${item.children ? '':classes.menuItem} ${isNested && classes.nested}`} onClick={()=>{isNested || clickHandler(item.name)}}>
                    {item.icon ? <ListItemIcon className={`${classes.icon}`}><item.icon/></ListItemIcon>:null}
                    <ListItemText>
                        <Typography variant="body1" className={classes.primary}>
                            {item.name}
                        </Typography>
                    </ListItemText>
                    {item.children ? <ExpandMore className={`${classes.expandTransition} ${openName === item.name ? classes.expandOpen: '' }`}/>:null}
                    {item.path ? <Link to={item.path} className={classes.link}/>:null}
                </MenuItem>
                {item.children ? <Collapse in={openName === item.name} timeout="auto">{<MenuList>{createMenuItem(item.children,props,state,clickHandler,true)}</MenuList>}</Collapse>:null}
            </Fragment>
        )
    })
}

const MenuHeader = (props) => {
    const { classes,onCloseMenu } = props
    return (
        <div className={classes.drawerHeader} onClick={onCloseMenu}>
            <IconButton className={classes.iconColor}>
                {drawerAnchor === 'left' ? <ChevronLeftIcon/> : <ChevronRightIcon/>}
            </IconButton>
        </div>
    )
}

class Menu extends React.Component {

    state = {
        openName:'',
    }

    onMenuItemClick = (name) => {
        const { openName } = this.state
        if(name === openName) {
            this.setState({openName:''})
        } else {
            this.setState({openName:name})
        }
    }

    render (){
        return (
            <Fragment>
                <MenuHeader classes={this.props.classes} onCloseMenu={this.props.onCloseMenu}/>
                <MenuList>
                    {createMenuItem(MENU_CONFIG,this.props,this.state,this.onMenuItemClick,false)}
                </MenuList>
            </Fragment>
        )
    }

}

export default withStyles(styles)(Menu)