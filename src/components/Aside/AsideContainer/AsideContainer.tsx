import {connect} from 'react-redux';

import {Aside} from '../Aside';
import {AppStateType} from '../../../redux/redux-store';
import {getFriends} from '../../../redux/selectors/usersSelector';
import {UserType} from '../../../types/usersPageTypes';

type MapStateToPropsType = {
    friends: UserType[]
}

export type AsidePropsType = MapStateToPropsType

const mapStateToProps = (state : AppStateType): MapStateToPropsType => {
    return {
        friends: getFriends(state)
    }
}

export const AsideContainer = connect(mapStateToProps)(Aside)