import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import AdbIcon from '@material-ui/icons/Adb';

const useStyles = makeStyles({
    link: {
        color: '#222',
        textDecoration: 'none',
    }
});

const PokeList = ({ list }) => {
    const classes = useStyles();

    return (
        <List component="nav" >
            {list !== undefined && list.map((pokemon, i) => {
                return (
                    <React.Fragment key={`${i}-${pokemon.name}`} >
                        <Link
                            href={`/pokemon/${i + 1}`}
                            className={classes.link}
                        >
                            <ListItem button >
                                <ListItemIcon>
                                    <AdbIcon />
                                </ListItemIcon>
                                <ListItemText primary={pokemon.name} />
                            </ListItem>
                        </Link>
                        <Divider />
                    </React.Fragment>
                )
            })}
        </List>
    );
}

export default PokeList;
