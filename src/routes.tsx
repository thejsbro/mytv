import * as React from 'react';
import { Route, Switch, Redirect, RouteComponentProps } from 'react-router-dom';
import { MoviesMain } from './Movies/CategoryList';
import { ListOfMovies } from './Movies/ListOfMovies';
import { MovieDetails } from './Movies/MovieDetails';
import { Trailer } from './Movies/Trailer';
import '../common/styles.scss';

interface MatchParams {
    id: string;
}

interface MatchProps extends RouteComponentProps<MatchParams> {
}

export const Routes = () => (
    <main>
        <Switch>
            <Route path="/" exact component={MoviesMain}/>
            <Route
                path="/lists/:id"
                exact
                render={
                    ({match}: MatchProps) => <ListOfMovies id={match.params.id}/>
                }
            />
            <Route
                path="/movies/:id"
                exact
                onChange
                render={
                    ({match}: MatchProps) => <MovieDetails id={match.params.id}/>
                }
            />
            <Route
                path="/trailers/:id"
                exact
                render={
                    ({match}: MatchProps) => <Trailer id={match.params.id}/>
                }
            />
        </Switch>
    </main>
)
