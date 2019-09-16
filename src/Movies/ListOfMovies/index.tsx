import React, { memo } from 'react';
import { connect } from 'react-redux';
import { memoize } from 'lodash';
import { NavLink } from 'react-router-dom';
import { IAppState } from 'common/reducers';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { IMovie } from 'common/types';
import { withLoader } from 'common/hocs/withLoader';
import { getListOfMovies as getListOfMoviesAction } from './actions';
import { changeHeaderTitle as changeHeaderTitleAction } from 'common/components/Header/actions';
import './styles.scss'

interface IProps extends RouteComponentProps {
    id: string;
}

interface IStateProps {
    movies: IMovie[];
    loading: boolean;
    loaded: boolean;
}

interface IDispatchProps {
    getListOfMovies: (listName: string) => void;
    changeHeaderTitle: (title: string) => void;
}

type TProps = IProps & IStateProps & IDispatchProps;

class ListOfMovies extends React.Component<TProps> {

    componentDidMount() {
        const { getListOfMovies, id, loaded } = this.props;
        !loaded && getListOfMovies(id);
    }

    changeHeaderTitle = memoize((title: string) => () => this.props.changeHeaderTitle(title))
    
    render() {
        const {movies, history} = this.props;
        return (
            <div>
                <div className='back-button' onClick={history.goBack}>
                        Back
                </div>
                {
                    movies.map(
                        (movie) =>
                            <div className='movie-list__item' key={movie.id}>
                                <NavLink
                                    to={{
                                        pathname: `/movies/${movie.id}`,
                                        state: {
                                            headerTitle: movie.title
                                        }
                                    }}
                                    exact
                                >
                                    <img className='movie-list__artwork' src={movie.images.artwork}/>
                                </NavLink>
                            </div>
                )}
            </div>
        );
    }
}

const mapStateToProps = (state: IAppState): IStateProps => ({
    movies: state.listOfMovies.movies,
    loading: state.listOfMovies.loading,
    loaded: state.listOfMovies.loaded,
})

const mapDispatchToProps = (dispatch: any) => ({
    getListOfMovies: (listName: string) => dispatch(getListOfMoviesAction(listName)),
    changeHeaderTitle: (title: string) => dispatch(changeHeaderTitleAction(title)),
})

const connectedCarDetails = connect(mapStateToProps, mapDispatchToProps)(withLoader(withRouter(ListOfMovies)));

export {connectedCarDetails as ListOfMovies}
