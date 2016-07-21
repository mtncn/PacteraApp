/**
 * Created by vision on 16/1/30.
 *
 * 登陆
 * @param $http
 * @param Session
 * @returns {{}}
 */
module.exports = function ($http,$location,$state,$q,Session,httpservice) {
    var loginService = {};

    loginService.login = function (user) {
        $("#loginsubmit").val("正在登录...");
        return $http({
                method: 'POST',
                url: httpservice.Loginurl,
                data:user
                //注释部分为修改post请求,解决发送数据为json服务器端无法解析的问题
                //url: '192.168.10.48:8080/cloudapps/Pactera-IntegralPlatform-app/loginsso.do',
                //data: $.param(user),
                //headers: {
                //    'Content-Type': 'application/x-www-form-urlencoded'
                //}
            }
        )
            //.post('./TextData/login.json', user)
            .then(function (response) {
                //判断登录成功是否
                if(response.data.station == true){
                    //  将返回的用户信息存入Session服务
                    Session.create(
                        response.data.id,        //id:sessionId
                        response.data.user.id,   //userId:userId
                        response.data.user.role, //userRole:userRole
                        response.data.station,    //station
                        response.data.companyId,    //companyId
                        response.data.user.name
                    );
                    sessionStorage.setItem("Session",JSON.stringify(Session));
                    //成功后跳转到我的应用页面
                    $("#errormsgId").css("color","green");
                    $("#errormsgId").html("登陆成功！");
                    $("#loginsubmit").val("登录");

                }else{
                    //若其失败，返回失败信息
                    $("#loginsubmit").val("登录");
                    $("#errormsgId").css("color","red");
                    $("#errormsgId").html(response.data.msg);
                }
                return response.data.user;
            })
            .catch(function (response) {
                console.error('login error', response.status, response.data);
                $("#errormsgId").html("登录失败，失败原因："+response.status);
            })
            .finally(function () {
                //console.log("finally finished login");
                /*$("#errormsgId").html("网络链接失败！");*/
            });
    };
    //查询函数,返回一个图标
    loginService.selectLogin=function (attr) {
        console.log(attr);
        var deferred = $q.defer();
        //console.log("id="+$stateParams.id+",appId="+$stateParams.appId+",flowId="+$stateParams.flowId);
        $http({
            method: 'GET',
            url: httpservice.loginSelectLoginDataImg,
            params: {'attr':attr}
        }).then(function successCallback(response) {
            // this callback will be called asynchronously
            // when the response is available
            // console.log('3  '+$stateParams.id);
            deferred.resolve(response.data);
        }, function errorCallback(response) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
            deferred.reject(response);
        });

        return deferred.promise;
    };
    //  用户ID存在ture 不存在false
    loginService.isAuthenticated = function () {
        //  如果Session.userId不为null或undefined 返回ture 否则返回false
        return !!Session.userId;
    };
    //  用户ID与角色是否均存在,均存在ture 其他false
    loginService.isAuthorized = function (authorizedRoles) {
        //  如果用户角色不是数组,既单角色
        if (!angular.isArray(authorizedRoles)) {
            //  将authorizedRoles转为数组
            authorizedRoles = [authorizedRoles];
        }
        //  authorizedRoles.indexOf(Session.userRole) 用户角色是否存在
        //  loginService.isAuthenticated()  用户ID是否存在
        //  用户ID和用户角色均存在返回ture
        //console.log(Session.userRole);
        return (loginService.isAuthenticated() && authorizedRoles.indexOf(Session.userRole) !== -1);
    };
    loginService.out = function (user) {
        console.log("rootuser.username1="+$rootScope.user.username);
        Session.destroy();
        console.log("rootuser.username2="+$rootScope.user.username);
        /*$rootScope.user = null;
         console.log("rootuser.username3="+$rootScope.user.username);*/
        $state.go("login");
    }

    return loginService;
};