const apiMiddleware = store => next => action => {
    if (action.payload instanceof Response) {
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