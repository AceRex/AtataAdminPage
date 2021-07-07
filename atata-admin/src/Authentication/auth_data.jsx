export const StorageKeys = {
    User: "workspace_manager_user",
    AuthToken: "workspace_manager_auth_token",
}

export function getStorageData(key) {
    try {
        const rawUserData = localStorage.getItem(key);
        if (!rawUserData) {
            return null;
        }

        return JSON.parse(rawUserData);
    } catch (e) {
        return null;
    }
}

export function saveStorageData(key, value) {
    try {
        if (!value || !key) {
            return;
        }

        const stringifyValue = JSON.stringify(value);
        localStorage.setItem(key, stringifyValue);
    } catch (e) {
        return null;
    }
}