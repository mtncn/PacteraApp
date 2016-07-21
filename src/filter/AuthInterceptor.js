/**
 * Created by vision on 16/2/29.
 */
module.exports = function($rootScope, $q, AUTH_EVENTS){
    return {
        responseError: function (response) {
            $rootScope.$broadcast({
                //401 Unauthorized — The user is not logged in
                401: AUTH_EVENTS.notAuthenticated,
                //403 Forbidden — The user is logged in but isn’t allowed access
                403: AUTH_EVENTS.notAuthorized,
                //419 Authentication Timeout (non standard) — Session has expired
                419: AUTH_EVENTS.sessionTimeout,
                //440 Login Timeout (Microsoft only) — Session has expired
                440: AUTH_EVENTS.sessionTimeout
            }[response.status], response);
            return $q.reject(response);
        }
    };
};


