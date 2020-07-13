import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { loadTypeList } from '../../_actions'

import TypeList from '../../_components/TypeList';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        marginTop: 20,
        marginButtom: 20,
        margin: 'auto',
        backgroundColor: theme.palette.background.paper,
    },
    title: {
        marginBottom: 10
    }
}));

const Types = (props) => {
    const classes = useStyles();

    useEffect(() => {
        props.loadTypeList()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className={classes.root}>
            <Typography variant="h6" className={classes.title}>
                Pokemon Types:
            </Typography>
            {props.typeList !== null && <TypeList list={props.typeList.results} />}
        </div>
    )
};

const mapState = (state) => {
    return {
        typeList: state.typeListReducer.data,
        message: state.typeListReducer.message,
    }
}

export default connect(mapState, { loadTypeList })(Types)
