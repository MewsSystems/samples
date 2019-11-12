import React from 'react';
import {createStore, applyMiddleware, compose} from "redux";
import {Provider} from "react-redux";
import reducer from './reducers/index'
import MainContainer from "./containers/MainContainer";
import thunk from "redux-thunk";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        margin: 'auto',
        maxWidth: 800,
        border: '1px solid #008ECC'
    }
}));

const store = createStore(
    reducer,
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

const ExchangeRateApp = () => {
    const classes = useStyles();

    return (
        <Provider store={store}>
            <div className={classes.root}>
                <Paper className={classes.paper}>
                    <Grid container>
                        <Grid item xs={12}>
                            <MainContainer/>
                        </Grid>
                    </Grid>
                </Paper>
            </div>
        </Provider>
    );
};

export default ExchangeRateApp;