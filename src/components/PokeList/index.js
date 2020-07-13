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

const PokeList = ({ list, byType, page }) => {
    const classes = useStyles();

    function getId(text) {
        let l = text.length
        let tmp = text.substring(0, l - 1)
        let n = tmp.lastIndexOf("/")
        let id = tmp.substring(n + 1)
        return id
    }

    const getList = () => {
        if (byType) {
            let formatList = []
            list.forEach((item, i) => {
                if (i >= page * 20 && i < (page + 1) * 20)
                    formatList.push(item.pokemon)
            })
            return formatList
        }
        return list.results
    }

    return (
        <List component="nav" >
            {list !== undefined && getList().map((pokemon, i) => {
                return (
                    <React.Fragment key={`${i}-${pokemon.name}`} >
                        <Divider />
                        <Link
                            href={`/pokemon/${getId(pokemon.url)}`}
                            className={classes.link}
                        >
                            <ListItem button >
                                <ListItemIcon>
                                    <AdbIcon />
                                </ListItemIcon>
                                <ListItemText primary={pokemon.name} />
                            </ListItem>
                        </Link>
                    </React.Fragment>
                )
            })}
        </List>
    );
}

export default PokeList;
