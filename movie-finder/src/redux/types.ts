import {Action} from "redux";
import {MoviesPage} from "../types";

export enum ActionTypes {
    SET_LOADING="app/SET_LOADING",
    SET_SEARCH_MOVIE_TITLE="app/SET_SEARCH_MOVIE_TITLE",
    SET_CURRENT_PAGE="app/SET_CURRENT_PAGE",
    SET_MOVIE_PAGE="app/SET_MOVIE_PAGE"
}

export interface SetLoadingAction extends Action {
    type: ActionTypes.SET_LOADING
    payload: boolean
}

export interface SetSearchMovieTitleAction extends Action {
    type: ActionTypes.SET_SEARCH_MOVIE_TITLE
    payload: string
}

export interface SetCurrentPageAction extends Action {
    type: ActionTypes.SET_CURRENT_PAGE
    payload: number
}

export interface SetMoviePageAction extends Action {
    type: ActionTypes.SET_MOVIE_PAGE
    payload: MoviesPage
}

export type AppActions = SetLoadingAction | SetSearchMovieTitleAction | SetCurrentPageAction |SetMoviePageAction
