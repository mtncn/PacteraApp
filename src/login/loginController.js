/**
 * Created by vision on 16/1/30.
 *
 * @param $scope
 * @param $rootScope
 * @param AUTH_EVENTS   登录状态  ../src/login/userStation
 * @param loginservice  登录服务  ../src/login/loginservice
 */

module.exports = function ($scope, $rootScope, $state, $stateParams, $location, AUTH_EVENTS, loginService) {


    //绑定用户表单信息
    $scope.user = {
        password: '',
        username: '',
        companyId: ''
    };
    //初始化 警告显示状态
    $scope.first_company = false;
    $scope.first_username = false;
    $scope.first_password = false;

    $scope.firstchange_company = function () {
        //console.log($scope.user);
        if ($scope.user.companyId != null) {
            $scope.first_company = false;
        }
    };
    $scope.firstchange_username = function () {
        console.log($scope.user);

        if ($scope.user.username != null) {
            $scope.first_username = false;
        }
    };
    $scope.firstchange_password = function () {
        //console.log($scope.user);
        if ($scope.user.password != null) {
            $scope.first_password = false;
        }
    };

    //控制‘注销’的显示与隐藏


    $scope.xianying = function () {

        $('.xiangqing_zhuxiao').fadeIn(300);
    };
    $('.xiangqing_zhuxiao').mouseover(function () {
        $('.xiangqing_zhuxiao').css('color', 'red');
    });
    $('.xiangqing_zhuxiao').mouseout(function () {
        $(this).fadeOut(300);
        $('.xiangqing_zhuxiao').css('color', '');
    });


    //登陆进来之后查询，获得返回的参数
    $scope.selectLogin = function (companyId) {

        if (companyId == null || companyId == '' || companyId == undefined) {

            companyId = localStorage.companySd;//存储公司名字
        } else {
            localStorage.companySd = companyId;
        }
        loginService.selectLogin(companyId).then(function (data) {
            console.log(data);
            $scope.personImage = data.image;
            $scope.companyId = data.companyCode;
            $scope.companyName = data.companyName;
            console.log($scope.companyId);
        }, function () {

        });
    };


    /* $rootScope.$watch('personImage', function (newValue, oldValue) {
     if (newValue) {
     $scope.personImage = newValue;
     }
     });*/


    //登陆
    $scope.login = function () {
        $scope.user.companyId = $scope.companyId;
        //console.log(user);
        console.log($scope.user);
        loginService.login($scope.user).then(function (data) {
            if(data){
                //  登陆成功
                //  $broadcast — dispatches the event downwards to all child scopes
                //  将事件向下传播到所有子作用域，包括自己
                $rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
                //console.log(resuser);
                $scope.message = AUTH_EVENTS.loginSuccess;
                $scope.setCurrentUser(data);
                localStorage.id = data.id;
                localStorage.name = data.name;
                localStorage.user = data.user;
                localStorage.admin = data.admin;
                localStorage.cadmin = data.cadmin;
                localStorage.isv = data.isv;
                localStorage.user = data.user;
                if (data.role == 1 || data.role == 2) {
                    $rootScope.isRoleValidateShow = true;
                }else{
                    $rootScope.isRoleValidateShow = false;
                }
                $rootScope.isLogin = false;
                $rootScope.selectedNavItemId = 2;
                $state.go("myapp.content", {id: 0, page: 1, total: 0});
            }else{
                $rootScope.$broadcast(AUTH_EVENTS.loginFailed);
            }
        }, function () {
            //  登录失败
            $rootScope.$broadcast(AUTH_EVENTS.loginFailed);
        });
    };

    $scope.navItems = [
        {
            id: 1,
            title: '企业应用',
            state: 'businessapp.*',
            locationUrl: 'businessapp.content({id:0,page:1,total:0,flag:0,appId:1,searchName:""})'
        },
        {
            id: 2,
            title: '我的服务',
            state: 'myapp.*',
            locationUrl: 'myapp.content({id:0,page:1,total:0})'
        },
        {
            id: 3,
            title: '配置',
            state: 'manage.*',
            locationUrl: 'manage.apply({applyStatus:0})',
            children:[
                {
                    cid:1,
                    state:'manage.apply'
                },
                {
                    cid:2,
                    state:'manage.todo'
                },
                {
                    cid:3,
                    state:'manage.myclass'
                },
                {
                    cid:4,
                    state:'manage.subscribe.company'
                },
                {
                    cid:5,
                    state:'manage.collection'
                },
                {
                    cid:6,
                    state:'manage.businessinfo'
                },
                {
                    cid:7,
                    state:'manage.appclass'
                },
                {
                    cid:8,
                    state:'manage.businessapp'
                },
                {
                    cid:9,
                    state:'manage.appadded'
                },
                {
                    cid:10,
                    state:'manage.personalinfo'
                }
            ]
        },
        {
            id: 4,
            title: '登录',
            state: 'login',
            locationUrl: 'login'
        }
    ]

    // 栏目click时触发的方法。
    $scope.itemClick = function (id,cid) {
        $rootScope.selectedNavItemId = id;
        $rootScope.selectedChildNavItemId = cid;
        sessionStorage.setItem("selectedChildNavItemId",cid);
    }


    // 初始化。
    // 判断当前地址栏路径属于哪个导航栏目。
    /*var currentLocation = $location.path();
     for (var i = 0, len = $scope.navItems.length; i < len; i++) {
     var navItem = $scope.navItems[i]
     if (currentLocation == navItem.locationUrl) {
     $scope.selectedNavItemId = navItem.id
     console.log("=========================================="+ navItem.id);
     }
     }
     console.log("selectedNavItemId:=========================================="+  $scope.selectedNavItemId);*/

    $scope.init = function () {
        //调用登陆进来之后查询方法
        $scope.selectLogin($stateParams.companyId);
        $("#errormsgId").css("color","");
        $("#errormsgId").html("");
        $rootScope.isRoleValidateShow = false;
        var sessionJsonStr = sessionStorage.getItem("Session");
        if (sessionJsonStr) {
            $rootScope.isLogin = false;
            var sessionObj = JSON.parse(sessionJsonStr);
            if (sessionObj.userRole == 1 || sessionObj.userRole == 2) {
                $rootScope.isRoleValidateShow = true;
            }
        } else {
            $rootScope.isLogin = true;
        }

        for (var i = 0, len = $scope.navItems.length; i < len; i++) {
            var navItem = $scope.navItems[i]
            if ($state.includes(navItem.state)) {
                $rootScope.selectedNavItemId = navItem.id;
                if(navItem.children){
                    for (var j = 0, clen = navItem.children.length; j < clen; j++) {
                        var cnavItem = navItem.children[j];
                        if ($state.includes(cnavItem.state)) {
                            $rootScope.selectedChildNavItemId = cnavItem.cid;
                            sessionStorage.setItem("selectedChildNavItemId",cnavItem.cid);
                        }
                    }
                }
            }
        }

        if(!$rootScope.selectedChildNavItemId){
            $rootScope.selectedChildNavItemId = sessionStorage.getItem("selectedChildNavItemId");
        }
    };
    $scope.init();
};