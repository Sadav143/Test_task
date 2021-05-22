import Permissions, { Permission } from 'react-native-permissions';
import { Linking } from 'react-native';

export const PERMISSION_DENIED = -1;
export const PERMISSION_SUCCESS = 1;
export const PERMISSION_UNDETERMINED = 0;


export const checkPermission = (permission) =>
    new Promise(function async(resolve, reject) {
        Permissions.check(permission)
            .then(response => {
                console.log('@@@ Permission Response =========', response);
                switch (response) {
                    case "granted":
                        resolve(PERMISSION_SUCCESS)
                        break
                    case "blocked":
                        Linking.openSettings()
                        break
                    default:
                        throw (PERMISSION_UNDETERMINED)
                }
            })
            .catch(async (err) => {
                const res = await requestPermission(permission)
                if (res == 'granted') {
                    resolve(PERMISSION_SUCCESS);
                }
            });
    });

export const requestPermission = permission => {
    return Permissions.request(permission);
};