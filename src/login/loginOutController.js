/**
 * Created by vision on 16/1/30.
 *
 * @param $scope
 * @param $rootScope
 */
module.exports = function ($scope, $rootScope, loginOutService) {

        loginOutService.loginout().then(function () {
            //  退出成功
            $rootScope.resuser = null;
            $rootScope.isRoleValidateShow=false;
        },function(){

        });
};

