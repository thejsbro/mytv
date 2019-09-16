import React from 'react';
import {min, max, slice} from 'lodash';
import './styles.scss';

interface IProps {
    children: JSX.Element[];
}

interface IState {
    showFrom: number;
    showTo: number;
    step: number;
    hasNext: boolean;
    hasPrev: boolean;
    shownElements: JSX.Element[];
}

const defaultState = (): IState => ({
    showFrom: 0,
    showTo: 3,
    step: 3,
    hasNext: true,
    hasPrev: false,
    shownElements: []
});

export class Carousel extends React.Component<IProps, IState> {

    constructor(props: IProps) {
        super(props);
        this.state = {
            showFrom: 0,
            showTo: 3,
            step: 3,
            hasNext: this.props.children.length > 3,
            hasPrev: false,
            shownElements: slice(this.props.children, 0, 3)
        };

    }


    handleNext = () => this.setState(
        (prevState) => {
            const {children} = this.props;
            const {showTo, step} = prevState;
            const newTo = min([showTo + step, children.length]) || showTo;
            const newFrom = showTo;
            return {
                showFrom: newFrom,
                showTo: newTo,
                hasPrev: true,
                hasNext: newTo !== children.length,
                shownElements: slice(children, newFrom, newTo)
            };
        });

    handlePrev = () => this.setState(
        (prevState) => {
            const {children} = this.props;
            const {showFrom, step} = prevState;
            const newFrom = max([showFrom - step, 0]) || 0;
            const newTo = showFrom;
            return {
                showFrom: newFrom,
                showTo: newTo,
                hasPrev: newFrom !== 0,
                hasNext: true,
                shownElements: slice(children, newFrom, newTo)
            };
        });
    
    render() {
        const {hasNext, hasPrev, shownElements} = this.state;
        return (
            <div className='carousel-box'>
                <div
                    onClick={this.handlePrev}
                    className='left-arrow'
                >
                    {hasPrev ? '<' : ''}
                </div>
                    <div className='content'>{shownElements}</div>
                <div
                    onClick={this.handleNext}
                    className='right-arrow'
                >
                    {hasNext ? '>' : ''}
                </div>
            </div>
        );
    }
}
