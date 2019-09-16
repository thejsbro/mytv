import React from 'react';
import { connect } from 'react-redux';
import { NavLink, RouteComponentProps, withRouter } from 'react-router-dom';
import { IAppState } from 'common/reducers';
import { ITrailer } from 'common/types';
import { withLoader } from 'common/hocs/withLoader';
import { getTrailer as getTrailerAction } from './actions';

interface IProps extends RouteComponentProps {
    id: string;
}

interface IStateProps {
    trailer: ITrailer;
    loading: boolean;
    loaded: boolean;
}

interface IDispatchProps {
    getTrailer: (listName: string) => void;
}

type TProps = IProps & IStateProps & IDispatchProps;

class Trailer extends React.Component<TProps> {

    componentDidMount() {
        const { getTrailer, id, loaded, trailer } = this.props;
        if (!loaded || id !== trailer.id) {
            getTrailer(id)
        }
    }
    
    render() {
        const {trailer, history} = this.props;
        return (
            <div>
                <div className='back-button' onClick={history.goBack}>
                        Back
                </div>
                    <video
                        src={trailer.url}
                        preload="auto"
                        autoPlay
                        controls
                    />
            </div>
        );
    }
}

const mapStateToProps = (state: IAppState): IStateProps => ({
    trailer: state.trailer.trailer,
    loading: state.trailer.loading,
    loaded: state.trailer.loaded,
})

const mapDispatchToProps = (dispatch: any) => ({
    getTrailer: (id: string) => dispatch(getTrailerAction(id)),
})

const connectedMovieDetails = connect(mapStateToProps, mapDispatchToProps)(withLoader(withRouter(Trailer)));

export {connectedMovieDetails as Trailer}
