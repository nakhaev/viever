
const env = process.env.REACT_APP_ENV || 'development';
let config = {}
try {
    config = require(`../config/${env}`).default;
} catch(error) {
    console.error(`[Load Config Error] ${error}`);
}

export default config;
