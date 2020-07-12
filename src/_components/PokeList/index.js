import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import AdbIcon from '@material-ui/icons/Adb';

const PokeList = ({ list }) => {

    return (
        <List component="nav" >
            {list !== undefined && list.map((pokemon, i) => {
                return (
                    <React.Fragment key={`${i}-${pokemon.name}`} >
                        <ListItem button>
                            <ListItemIcon>
                                <AdbIcon />
                            </ListItemIcon>
                            <ListItemText primary={pokemon.name} />
                        </ListItem>
                        <Divider />
                    </React.Fragment>
                )
            })}
        </List>
    );
}

export default PokeList;