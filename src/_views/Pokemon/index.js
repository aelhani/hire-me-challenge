import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { loadPokeItem } from '../../_actions'

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

    console.log(props.pokeItem)

    return (
        <div>
            {props.pokeItem !== null && `PokeItem #${props.pokeItem.id}`}
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
