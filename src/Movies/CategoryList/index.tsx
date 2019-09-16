import React from 'react';
import { NavLink } from 'react-router-dom';
import {LISTS_OF_MOVIES} from './consts';
import {Carousel} from 'common/components/Carousel';
import nanoid from 'nanoid';
import './styles.scss';

export const MoviesMain = () => {
    const list = LISTS_OF_MOVIES.map(
        (listName) => (
                <NavLink
                    key={nanoid()}
                    to={`/lists/${listName}`}
                    exact
                    className='category-item'
                >
                    {listName}
                </NavLink>
        ));
    return <Carousel>{list}</Carousel>
}