import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import DeviceHubIcon from '@material-ui/icons/DeviceHub';

const useStyles = makeStyles({
    link: {
        color: '#222',
        textDecoration: 'none',
    }
});

const TypeList = ({ list }) => {
    const classes = useStyles();

    function getId(text) {
        let l = text.length
        let tmp = text.substring(0, l - 1)
        let n = tmp.lastIndexOf("/")
        let id = tmp.substring(n + 1)
        return id
    }

    return (
        <List component="nav" >
            {list !== undefined && list.map((type, i) => {
                return (
                    <React.Fragment key={`${i}-${type.name}`} >
                        <Divider />
                        <Link
                            href={`/?type=${getId(type.url)}`}
                            className={classes.link}
                        >
                            <ListItem button >
                                <ListItemIcon>
                                    <DeviceHubIcon />
                                </ListItemIcon>
                                <ListItemText primary={type.name} />
                            </ListItem>
                        </Link>
                    </React.Fragment>
                )
            })}
        </List>
    );
}

export default TypeList;
