import { LOGIN_SUCCESSFUL} from './actionTypes';
export const loginFunc = () => {
    return{
        type:LOGIN_SUCCESSFUL,
        payload: true,
    }
}