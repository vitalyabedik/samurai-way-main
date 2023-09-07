import {connect} from 'react-redux';

import {Aside} from '../Aside';
import {AppStateType} from '../../../redux/redux-store';
import {getUsers} from '../../../redux/selectors/usersSelector';
import {UserType} from '../../../types/usersPageTypes';

type MapStateToPropsType = {
    users: UserType[]
}

export type AsidePropsType = MapStateToPropsType

const mapStateToProps = (state : AppStateType): MapStateToPropsType => {
    return {
        users: getUsers(state)
    }
}

export const AsideContainer = connect(mapStateToProps)(Aside)