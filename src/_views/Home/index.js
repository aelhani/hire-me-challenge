import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography';
import { loadPokemons } from '../../_actions'

import PokeList from '../../_components/PokeList';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        marginTop: 10,
        marginButtom: 10,
        margin: 'auto',
        backgroundColor: theme.palette.background.paper,
    },
    controls: {
        width: '100%',
        maxWidth: 280,
        margin: 'auto',
        display: 'flex',
        flexDirection: 'row',
    },
    page: {
        flex: 1,
        textAlign: 'center'
    },
}));

const Home = (props) => {
    const classes = useStyles();

    const [page, setPage] = useState(0);

    useEffect(() => {
        props.loadPokemons(20, page)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page]);

    const loadPage = (n) => {
        if (page + n >= 0) {
            setPage(page + n);
        }
    }

    return (
        <div className={classes.root}>
            <div className={classes.controls}>
                <Button
                    color="primary"
                    variant="contained"
                    disabled={page === 0}
                    onClick={() => loadPage(-1)}
                >
                    {"<"}
                </Button>
                <Typography variant="h6" className={classes.page}>
                    {`PAGE ${page + 1}`}
                </Typography>
                <Button
                    color="primary"
                    variant="contained"
                    onClick={() => loadPage(1)}
                >
                    {">"}
                </Button>
            </div>
            {props.pokemons !== null && <PokeList list={props.pokemons.results} />}
        </div>
    )
};

const mapState = (state) => {
    return {
        pokemons: state.pokemonsReducer.data,
        message: state.pokemonsReducer.message,
    }
}

export default connect(mapState, { loadPokemons })(Home)
