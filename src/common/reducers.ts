import { combineReducers } from 'redux';
import { listOfMovies, IListOfMoviesState } from '../Movies/ListOfMovies/reducers';
import { movieDetails, IMovieDetailsState } from '../Movies/MovieDetails/reducers';
import { trailer, ITrailerState } from '../Movies/Trailer/reducers';
import { header, IHeaderState } from './components/Header/reducers';


export interface IAppState {
    header: IHeaderState,
    listOfMovies: IListOfMoviesState,
    movieDetails: IMovieDetailsState,
    trailer: ITrailerState,
}

export default combineReducers({
    header,
    listOfMovies,
    movieDetails,
    trailer,
});
