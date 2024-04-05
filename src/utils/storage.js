export const setItem = (key, data) => {
    try {
        localStorage.setItem(key, data);
    } catch (error) {
        console.log("Error saving user data");
    }
};

export const getItem = (key) => {
    try {
        if (key) {
            return localStorage.getItem(key);
        }
    } catch (error) {
        console.log("Error saving user data");
    }
};

export const removeItem = (key) => {
    try {
        return localStorage.removeItem(key);
    } catch (error) {
        console.log("Error removing user data");
    }
};
