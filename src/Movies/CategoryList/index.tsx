import React from 'react';
import { NavLink } from 'react-router-dom';
import {LISTS_OF_MOVIES} from './consts';
import {Carousel} from 'common/components/Carousel';
import nanoid from 'nanoid';
import './styles.scss';

export const MoviesMain = () => {
    const list = LISTS_OF_MOVIES.map(
        (listName, i) => (
                <NavLink
                    data-testid={`go-to-list-of-movies-${i}`}
                    key={nanoid()}
                    to={`/lists/${listName}`}
                    exact
                    className='category-item'
                >
                    {listName}
                </NavLink>
        ));
    return (
    <div data-testid='movies-main'>
        <Carousel>
            {list}
        </Carousel>
    </div>);
}