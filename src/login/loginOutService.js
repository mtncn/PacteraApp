/**
 * Created by vision on 16/1/30.
 *
 * 登陆
 * @param $http
 * @param Session
 * @returns {{}}
 */
module.exports = function ($http,$location,$q,$state,Session,httpservice) {
    var loginOutService = {};

    loginOutService.loginout = function () {
        $state.go("login");
        sessionStorage.removeItem("Session");
        Session.destroy();
    };
    return loginOutService;
};

