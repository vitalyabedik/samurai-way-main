import {connect} from 'react-redux';
import {Aside} from '../Aside';

import {AppStateType} from '../../../redux/redux-store';
import {InitialStateType} from '../../../redux/reducers/asideReducer';

type MapStateToPropsType = {
    aside : InitialStateType
}

export type AsidePropsType = MapStateToPropsType

const mapStateToProps = (state : AppStateType): MapStateToPropsType => {
    return {
        aside: state.aside,
    }
}


export const AsideContainer = connect(mapStateToProps)(Aside)