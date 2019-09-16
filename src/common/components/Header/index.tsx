import React from 'react';
import { connect } from 'react-redux';
import { IAppState } from 'common/reducers';
import './styles.scss'

interface IProps {
    title: string;
}

const Header = ({title}: IProps) => (
    <header
        className='header'
    >
        <div className='header__title'>
            {title}
        </div>
    </header>
);

const mapStateToProps = (state: IAppState) => ({
    title: state.header.title 
})

const withRouterHeader = connect(mapStateToProps)(Header)

export {withRouterHeader as Header}
