const config = {
    baseUrl: '/',
    production: false,
    initSourceMap: true,
    defaultLanguage: 'en',
    dictionaryUrl: '/dictionary/',
    serviceUrl: 'https://dev-api.flaskdata.io',
    flaskDataUrl: 'https://dev-api.flaskdata.io/data-server',
    websiteUrl: 'https://dev-forms-viewer.flaskdata.io',
    flaskUrl: 'https://dev.flaskdata.io/',
    apiPath: '/',
    dateViewFormat: 'MMM D, YYYY',
    idpUrl: 'https://dev-idp.flaskdata.io',

    FILE_UPLOADING: {
        PREVIEW: true
    },
    EXTERNAL_API: {
        manualEntry: false
    },
    EXTERNAL_ID: {
        disableCrfFields: true
    }
}

config.testData = {
    mode: 'edit',
    crfIndex: 0,
    lang: 'en',
    languageSync: true,
    autoClose: false,
    displayInfoHeader: true,
    hideBackButton: false,
    hideHeader: false,
    hideFooter: false,
    callbackURL: 'https://dev.flaskdata.io/',
    authToken: 'eyJhbGciOiJIUzM4NCIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhbzhLV3M4VkNNWEN0dlRRVENUUWxOZGo5T1Z5aFdzTCIsImV4cCI6MTY0MzEyODEzMjE0MiwiaWF0IjoxNjQzMTA2NTMyfQ.b0OkeYP-KEgM5ftTG2JPlkhH9vkUFhVFD5yrYFZKb-Vm20RQ5KZvy51HxEkIyVIe',
}

config.testEvent = 'FED_s4Hj4soNm4xY';


export default config;
