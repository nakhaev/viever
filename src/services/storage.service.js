const str = window.localStorage;

export const storage = {
    set: function (name, data) {
        let st = null;
        try {
            st = JSON.stringify(data);
            str.setItem(name, st);
        } catch(error) {
            console.log('[storage]', error);
        }
    },

    get: function (name) {
        let data = str.getItem(name);
        try {
            return JSON.parse(data);
        } catch (error) {
            console.log('[storage]', error);
            return null;
        }
    },

    remove: function (name) {
        str.removeItem(name);
    },

    clear: function () {
        return str.clear();
    }
}
