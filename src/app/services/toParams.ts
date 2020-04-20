export const toParams = (params: any) => Object.keys(params).map(key => {
    if (key && params[key])
        return key + '=' + params[key];
}).join('&');