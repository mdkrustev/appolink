class Storage {
    get(key) {
        const name = key + "=";
        const decodedCookie = decodeURIComponent(document.cookie);
        const cookieArray = decodedCookie.split(';');
        for (let i = 0; i < cookieArray.length; i++) {
            let cookie = cookieArray[i].trim();
            if (cookie.indexOf(name) === 0) {
                return cookie.substring(name.length);
            }
        }
        return null; // Return null if the cookie is not found
    }
    set(key, value, minutes = 60) {
        const expirationDate = new Date();
        expirationDate.setTime(expirationDate.getTime() + minutes * 60 * 1000);
        document.cookie = `${key}=${value}; expires=${expirationDate.toUTCString()}; path=/`;
    }
}
const storage = (new Storage())
export default storage;
