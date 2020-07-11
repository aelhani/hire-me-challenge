import React from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button'
import { loadPokemons } from '../../_actions'

const Home = (props) => {

    console.log(props.pokemons)

    return (
        <div>
            <Button
                // temporary button for testing purposes
                color="primary"
                variant="contained"
                onClick={() => props.loadPokemons(20, 0)}
            >
                Load
            </Button>
        </div>
    )
};

const mapState = (state) => {
    console.log(state)
    return {
        pokemons: state.pokemonsReducer.data,
        message: state.pokemonsReducer.message,
    }
}

export default connect(mapState, { loadPokemons })(Home)
