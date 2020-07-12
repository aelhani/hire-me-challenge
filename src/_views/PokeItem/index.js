import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import PokeCard from '../../_components/PokeCard';

import { loadPokeItem } from '../../_actions';

const PokeItem = (props) => {

    const loadItem = () => {
        let href = window.location.href
        let n = href.lastIndexOf("/")
        let id = href.substring(n + 1)
        if (!isNaN(id) && id > 0)
            props.loadPokeItem(id)
    }

    useEffect(() => {
        loadItem();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div>
            {props.pokeItem !== null && (
            <PokeCard 
                name={props.pokeItem.name}
                image={props.pokeItem.sprites.front_default}
                abilities={props.pokeItem.abilities}
                types={props.pokeItem.types}
            />
            )}
        </div>
    )
};

const mapState = (state) => {
    return {
        pokeItem: state.pokeItemReducer.data,
        message: state.pokeItemReducer.message,
    }
}

export default connect(mapState, { loadPokeItem })(PokeItem)
