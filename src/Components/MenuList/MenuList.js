import React from 'react'
import {Route,Link} from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import ListSubheader from '@material-ui/core/ListSubheader'
import StarBorder from '@material-ui/icons/StarBorder'
import Collapse from '@material-ui/core/Collapse'
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import IconButton from '@material-ui/core/IconButton'
import SendIcon from '@material-ui/icons/Send'
import AppConfig from "../../Config"

const {drawerWidth,drawerAnchor} = AppConfig
const styles = theme=>({
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
        paddingLeft: theme.spacing.unit * 5
    },
})

const ListHeader = (props) => {
    const { classes,onCloseMenu } = props
    return (
        <div className={classes.drawerHeader} onClick={onCloseMenu}>
            <IconButton className={classes.iconColor}>
                {drawerAnchor === 'left' ? <ChevronLeftIcon/> : <ChevronRightIcon/>}
            </IconButton>
        </div>
    )
}

class MenuList extends React.Component {

    constructor (){
        super()
        this.state = {
            open:false,
        }
    }

    expandMenu = ()=>{
        this.setState({open:!this.state.open})
    }

    render (){
        const { open } = this.state
        const { classes } = this.props
        return (
            <List component="nav" subheader={<ListSubheader component="div"><ListHeader {...this.props}/></ListSubheader>}>
                <ListItem button onClick={this.expandMenu}>
                    <ListItemIcon>
                        <SendIcon />
                    </ListItemIcon>
                    <ListItemText inset primary="Sent mail" />
                    {this.state.open ? <ExpandLess className={classes.iconColor}/> : <ExpandMore className={classes.iconColor}/>}
                </ListItem>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div">
                        <ListItem button className={classes.nested}>
                            <ListItemIcon>
                                <StarBorder />
                            </ListItemIcon>
                            <ListItemText inset primary="Starred" />
                        </ListItem>
                    </List>
                </Collapse>
                <ListItem button>
                    <ListItemIcon>
                        <SendIcon />
                    </ListItemIcon>
                    <ListItemText inset primary="Sent mail" />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <SendIcon />
                    </ListItemIcon>
                    <ListItemText inset primary="Sent mail" />
                </ListItem>
            </List>
        )
    }
}

export default withStyles(styles)(MenuList)