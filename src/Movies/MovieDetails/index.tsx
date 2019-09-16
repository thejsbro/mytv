import React from 'react';
import { connect } from 'react-redux';
import { NavLink, withRouter, RouteComponentProps } from 'react-router-dom';
import { IAppState } from 'common/reducers';
import { IMovieDetails } from 'common/types';
import { withLoader } from 'common/hocs/withLoader';
import { getMovieDetails as getMovieDetailsAction } from './actions';
import {
    dropHeaderTitle as dropHeaderTitleAction,
    changeHeaderTitle as changeHeaderTitleAction
} from 'common/components/Header/actions';
import './styles.scss'

interface IProps extends RouteComponentProps {
    id: string;
}

interface IStateProps {
    movie: IMovieDetails;
    loading: boolean;
    loaded: boolean;
}

interface IDispatchProps {
    getMovieDetails: (listName: string) => void;
    dropHeaderTitle: () => void;
    changeHeaderTitle: (title: string) => void;
}

type TProps = IProps & IStateProps & IDispatchProps;

class MovieDetails extends React.Component<TProps> {

    componentDidMount() {
        const { getMovieDetails, id, location, changeHeaderTitle, loaded, movie } = this.props;
        location.state && changeHeaderTitle(location.state.headerTitle);
        console.log('!loaded || id !== movie.id ', !loaded || id !== movie.id)
        if (!loaded || id !== movie.id) {
            getMovieDetails(id)
        }
    }

    componentWillUnmount() {
        this.props.dropHeaderTitle();
    }
    
    render() {
        const {movie, history} = this.props;
        return (
            <div className='movie-details' key={movie.id}>
                <div className='back-button' onClick={history.goBack}>
                        Back
                </div>
                <div
                    className='movie-details-poster'
                    style={{backgroundImage: movie.images && `url(${movie.images.snapshot})`}}
                >
                    <div className='movie-details-poster-info'>
                        <NavLink
                            to={`/trailers/${movie.id}`}
                            exact
                            className='movie-details-poster-info__trailer'
                        >
                            Watch trailer
                        </NavLink>
                        <div className='movie-details-poster-info__text'>{movie.title}</div>
                    </div>
                </div>
                {/* <div>{movie.duration}</div>
                <div>{movie.year}</div>
                <div>{`${movie.rating.average} out of ${movie.rating.scale}`}</div>
                <div>{movie.directors}</div>
                <div>{movie.actors}</div> */}
            </div>
        );
    }
}

const mapStateToProps = (state: IAppState): IStateProps => ({
    movie: state.movieDetails.movie,
    loading: state.movieDetails.loading,
    loaded: state.movieDetails.loaded,
})

const mapDispatchToProps = (dispatch: any) => ({
    getMovieDetails: (id: string) => dispatch(getMovieDetailsAction(id)),
    dropHeaderTitle: () => dispatch(dropHeaderTitleAction()),
    changeHeaderTitle: (title: string) => dispatch(changeHeaderTitleAction(title)),
})

const connectedMovieDetails = connect(mapStateToProps, mapDispatchToProps)(withLoader(withRouter(MovieDetails)));

export {connectedMovieDetails as MovieDetails}
