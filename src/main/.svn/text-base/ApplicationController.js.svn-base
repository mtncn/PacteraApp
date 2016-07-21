/**
 * Created by vision on 16/2/29.
 */
module.exports = function($rootScope,$scope, USER_ROLES, loginService,Session){
    //  存在登陆请求返回的用户ID和角色
    $scope.currentUser = null;
    //  将用户角色USER_ROLES赋值给userRoles
    $scope.userRoles = USER_ROLES;
    //  用户ID与用户角色是否全部存在   存在ture  不存在false
    $scope.isAuthorized = loginService.isAuthorized;

    $scope.setCurrentUser = function (user) {
        $scope.currentUser = user;
    };

    $rootScope.resuser = localStorage;
    //  将返回的用户信息存入Session服务
    //Session.create(
    //    localStorage.id,        //id:sessionId
    //    localStorage.user.id,   //userId:userId
    //    localStorage.user.role, //userRole:userRole
    //    localStorage.station,    //station
    //    localStorage.companyId,    //companyId
    //    localStorage.user.name
    //);

    //add by HUA--start
    //设置弹出框遮罩
    $rootScope.fadeShow=false;
    //设置管理点击样式
    $rootScope.mgBtnShowCor='login_2';
    //add by HUA--end
};