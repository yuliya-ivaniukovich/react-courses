import {createAction} from 'redux-actions';
import {updateApiFetching} from '../modules/api';

export const createApiAction = (type, payloadCreator, metaCreator) => {
    return createAction(type, payloadCreator, (...args) => {
        let meta = metaCreator ? metaCreator(...args) : {};
        return {...meta, isApiCall: true};
    });
};

const apiMiddleware = store => next => action => {
    if (action.meta && action.meta.isApiCall && action.meta.fetching === undefined) {
        action.meta.fetching = true;
        store.dispatch(updateApiFetching(true));
    }
    if (action.payload instanceof Response) {
        action.meta.fetching = false;
        store.dispatch(updateApiFetching(false));

        if (action.payload.ok) {
            action.payload = handleResponse(action.payload);
        } else {
            action.error = true;
        }
    }
    return next(action);
};

const handleResponse = (response) => {
    let responseType = response.headers.get('Content-Type');
    if (responseType.startsWith('application/json')) {
        return response.json();
    }
    return response;
};

export default apiMiddleware;