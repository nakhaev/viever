const qs = require('qs');

export function getToken(data) {
    const {location, history} = data;
    if(location && location.search && location.search !== '') {
        let params = qs.parse(location.search, { ignoreQueryPrefix: true });
        if(params.token) {
            console.log('token', params.token);
            const search = { ...params};
            delete search.token;
            if(history) {
                history.push({
                    pathname: location.pathname,
                    search: qs.stringify(search)
                })
            }
        }
    }
}

