/**
 * Created by vision on 16/1/17.
 */
//var login = require('./LoginModule');
var app = angular.module('app', ['ui.router', 'ngSanitize', 'ngMessages']);

//与服务器端的请求交互
var httpService = require('./httpService');

//公共查询Service
var public_Select_Service = require('./public/public_Select_Service');

//获取登陆服务Service
var loginservice = require('./login/loginService');
var loginController = require('./login/loginController');
var mailboxVerificationController = require('./login/mailboxVerificationController');
var userStation = require('./login/userStation');
var loginsession = require('./login/loginSession');
var Appsession = require('./main/AppSession');

var ApplicationController = require('./main/ApplicationController');
var AuthInterceptor = require('./filter/AuthInterceptor');

var MyController = require('./main/myapp/MyController');
var MyService = require('./main/myapp/MyService');
var MProController = require('./main/myapp/controller/MProController');
var MProService = require('./main/myapp/service/MProService');
var BProController = require('./main/businessapp/controller/BProController');
var BProControllerPartents = require('./main/businessapp/controller/BProControllerPartents');
var BProService = require('./main/businessapp/service/BProService');
var DProController = require('./main/details/controller/DProController');
var DProDetailsController = require('./main/details/controller/DProDetailsController');
var DProCommentController = require('./main/details/controller/DProCommentController');
var DProCorrelationController = require('./main/details/controller/DProCorrelationController');
var DProCorrelationService = require('./main/details/service/DProCorrelationService');
var DProCommentService = require('./main/details/service/DProCommentService');
var DProDetailsService = require('./main/details/service/DProDetailsService');
var DProService = require('./main/details/service/DProService');
//add by Su-start
var MColController = require('./main/myapp/controller/MColController');
var MCollService = require('./main/myapp/service/MCollService');
var loginOutController = require('./login/loginOutController');
var loginOutService = require('./login/loginOutService');
//add by Su-end
//add by Hua-start
var MgService = require('./main/manage/manageService');
var mailboxVerificationService = require('./login/mailboxVerificationService');
var MgController = require('./main/manage/manageController');
var applyMgService = require('./main/manage/myworkService/applyService');
var applyMgController = require('./main/manage/myworkController/applyController');
var applyDetailMgService = require('./main/manage/myworkService/applyDetailService');
var applyDetailMgController = require('./main/manage/myworkController/applyDetailController');
var applyProcessMgService = require('./main/manage/myworkService/applyProcessService');
var applyProcessMgController = require('./main/manage/myworkController/applyProcessController');
var todoMgService = require('./main/manage/myworkService/todoService');
var todoMgController = require('./main/manage/myworkController/todoController');
var todoDetailMgService = require('./main/manage/myworkService/todoDetailService');
var todoDetailMgController = require('./main/manage/myworkController/todoDetailController');
var doneDetailMgService = require('./main/manage/myworkService/doneDetailService');
var doneDetailMgController = require('./main/manage/myworkController/doneDetailController');
var todoProcessMgService = require('./main/manage/myworkService/todoProcessService');
var todoProcessMgController = require('./main/manage/myworkController/todoProcessController');
var accountMgController = require('./main/manage/otherController/AccountSecurityController');
var accountMgService = require('./main/manage/otherService/AccountSecurityService');
var collectionMgController = require('./main/manage/myappController/collectionMgController');
var collectionMgService = require('./main/manage/myappService/collectionMgService');
var classMgController = require('./main/manage/myappController/classMgController');
var classMgService = require('./main/manage/myappService/classMgService');
var AppclassMgController = require('./main/manage/businessController/AppclassMgController');
var AppclassMgService = require('./main/manage/businessService/AppclassMgService');
var AppclassMaintainMgController = require('./main/manage/businessController/AppclassMaintainMgController');
var AppclassMaintainMgService = require('./main/manage/businessService/AppclassMaintainMgService');
var businessInfoMgController = require('./main/manage/businessController/businessInfoController');
var businessInfoMgService = require('./main/manage/businessService/businessInfoService');
var businessInfoUserMgController = require('./main/manage/businessController/businessInfoController_user');
var businessInfoUserMgService = require('./main/manage/businessService/businessInfoUserService');
var businessInfoUserGroupMgController = require('./main/manage/businessController/businessInfoController_userGroup');
var businessInfoUserGroupMgService = require('./main/manage/businessService/businessInfoService_userGroup');
//add by Hua-end
//add by Ding-start
var PersonController = require('./main/manage/otherController/PersonController');
var PersonService = require('./main/manage/otherService/PersonService');
var MangbusAppController = require('./main/manage/businessController/busAppController');
var MangbusNewVesrAppController = require('./main/manage/businessController/busAppNewVesrController');
var MangbusNewVesrAppService = require('./main/manage/businessService/busNewAppService');
var MangbusAppServcie = require('./main/manage/businessService/busAppService');
var newPutController = require('./main/manage/appsettingsController/newPutController');
var newPutServcie = require('./main/manage/appsettingsService/newPutService');
var newPut2Controller = require('./main/manage/appsettingsController/newPut2Controller');
var newPut2Servcie = require('./main/manage/appsettingsService/newPut2Service');
var newPut3Controller = require('./main/manage/appsettingsController/newPut3Controller');
var newPut3Servcie = require('./main/manage/appsettingsService/newPut3Service');
var newPut4Controller = require('./main/manage/appsettingsController/newPut4Controller');
var newPut4Servcie = require('./main/manage/appsettingsService/newPut4Service');
var newPut5Controller = require('./main/manage/appsettingsController/newPut5Controller');
var newPut5Servcie = require('./main/manage/appsettingsService/newPut5Service');
var subscribeMgController = require('./main/manage/myappController/subscribeMgController');
var subscribeMgService = require('./main/manage/myappService/subscribeMgService');

var ckeditor = require('./directive/ckeditor');
var fileModel = require('./directive/upload_image/fileModel');
var UploaderService = require('./directive/upload_image/fileReader');
//add by Ding-end

var HelpController = require('./HelpController');
var getdateservice = require('./getdataService2');

//  交互路径
app
    .constant('httpservice', httpService);

app //公共查询Service
    .factory('Public_Service', public_Select_Service);

app
    .controller('ApplicationController', ApplicationController)
    .factory('AuthInterceptor', AuthInterceptor);


app //  使用一个对象工厂函数定义服务
    .factory('loginService', loginservice)
    //  使用一个类构造函数定义服务
    .service('Session', loginsession)
    //  使用一个常量定义服务  用户状态
    .constant('AUTH_EVENTS', userStation.AUTH_EVENTS)
    //  使用一个常量定义服务  用户角色权限
    .constant('USER_ROLES', userStation.USER_ROLES)
    //AppId保存
    .service('Appsession', Appsession);

app
    .factory('MProService', MProService)
    .factory('BProService', BProService)
    .factory('DProService', DProService)
    .factory('DProDetailsService', DProDetailsService)
    .factory('DProCommentService', DProCommentService)
    .factory('DProCorrelationService', DProCorrelationService)
    .factory('MyService', MyService)
    //add by Hua
    .factory('applyMgService', applyMgService)
    .factory('applyDetailMgService', applyDetailMgService)
    .factory('applyProcessMgService', applyProcessMgService)
    .factory('todoMgService', todoMgService)
    .factory('todoDetailMgService', todoDetailMgService)
    .factory('doneDetailMgService', doneDetailMgService)
    .factory('todoProcessMgService', todoProcessMgService)
    .factory('accountMgService', accountMgService)
    .factory('collectionMgService', collectionMgService)
    .factory('classMgService', classMgService)
    .factory('AppclassMgService', AppclassMgService)
    .factory('AppclassMaintainMgService', AppclassMaintainMgService)
    .factory('businessInfoMgService', businessInfoMgService)
    .factory('businessInfoUserMgService', businessInfoUserMgService)
    .factory('businessInfoUserGroupMgService', businessInfoUserGroupMgService)


    //add by Su
    .factory('MCollService', MCollService)
    .factory('loginOutService', loginOutService)
    .factory('mailboxVerificationService',mailboxVerificationService)
    //add by Ding
    //.factory('PersonController',PersonController)
    .factory('PersonService', PersonService)
    .factory('busAppService', MangbusAppServcie)
    .factory('newPutService', newPutServcie)
    .factory('newPut2Service', newPut2Servcie)
    .factory('newPut3Service', newPut3Servcie)
    .factory('newPut4Service', newPut4Servcie)
    .factory('subscribeMgService', subscribeMgService)

    //瞿永建  构建新版本
    .factory("MangbusNewVesrAppService", MangbusNewVesrAppService);


app
    .directive('fileModel', fileModel)
    .factory('fileReader', UploaderService)
    .directive('ckeditor', ckeditor);

app.factory('getdata', getdateservice);


app
    .run(function ($rootScope, $state, AUTH_EVENTS, Session) {
        $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
            if (toState.name != "login"&&toState.name != "login_company"&&toState.name!="mailboxVerification") {
                var sessionJsonStr = sessionStorage.getItem("Session");
                if (sessionJsonStr) {
                    if (!Session.id) {
                        var sessionObj = JSON.parse(sessionJsonStr);
                        Session.create(
                            sessionObj.id,        //id:sessionId
                            sessionObj.userId,   //userId:userId
                            sessionObj.userRole, //userRole:userRole
                            sessionObj.station,    //station
                            sessionObj.companyId,    //companyId
                            sessionObj.name
                        );
                    }
                } else {
                    event.preventDefault();
                    $state.go('login');
                }
            }
        });
    })
    .config(function ($httpProvider) {
        $httpProvider.interceptors.push([
            '$injector',
            function ($injector) {
                return $injector.get('AuthInterceptor');
            }
        ]);
    });

app
    .config(function ($stateProvider, $urlRouterProvider, USER_ROLES) {
        // 当找不到路由状态时自动跳转first状态
        $urlRouterProvider.otherwise("/index/first");
        //$urlRouterProvider.otherwise("/login");
        $urlRouterProvider.when("", '/index/login');
        //设置默认主页路由状态
        //$urlRouterProvider.when("/index",'/index/first');
        //设置路由地址
        $stateProvider
            //主页面
            .state('main', {
                url: "/main",
                templateUrl: "main.html",
                controller: function ($scope) {

                }
            })

            //首页
            .state('index', {
                url: "/index",
                abstract: true,
                templateUrl: "index.html",
                data: {
                    authorizedRoles: [USER_ROLES.admin, USER_ROLES.cadmin, USER_ROLES.isv, USER_ROLES.user]
                },
                controller: loginController
            })

            //登陆页
            .state('login', {
                url: "/login",
                parent: "index",
                templateUrl: "login.html",
                controllerAs: "loginCon",
                controller: loginController
                //data: {
                //    authorizedRoles: [USER_ROLES.admin, USER_ROLES.cadmin, USER_ROLES.isv, USER_ROLES.user]
                //}
            })
            //带公司ID 登陆页
            .state('login_company', {
                url: "/login/{companyId}",
                parent: "index",
                templateUrl: "login.html",
                controllerAs: "loginCompanyCon",
                controller: loginController
                //data: {
                //    authorizedRoles: [USER_ROLES.admin, USER_ROLES.cadmin, USER_ROLES.isv, USER_ROLES.user]
                //}
            })
            //邮箱验证，跳转
            .state('mailboxVerification', {
                parent: "index",
                url: "/mailboxVerification/{code}",
                templateUrl: "mailboxVerification.html",
                controller: mailboxVerificationController
            })
            //退出注销
            .state('loginout', {
                url: "/loginout",
                templateUrl: "login.html",
                controllerAs: "loginOutCon",
                controller: loginOutController
                //data: {
                //    authorizedRoles: [USER_ROLES.admin, USER_ROLES.cadmin, USER_ROLES.isv, USER_ROLES.user]
                //}
            })
            //简介
            .state('first', {
                url: "/first",
                parent: "index",
                templateUrl: "partials/first/first.html",
                authorizedRoles: [USER_ROLES.admin, USER_ROLES.cadmin],
                controller: function ($scope) {

                }
            })
            //我的应用
            .state('myapp', {
                url: "/myapp",
                parent: "index",
                abstract: true,
                templateUrl: "partials/myapp/myapp.html",
                controllerAs: "mycon",
                controller: MyController
            })
            //我的应用内容-update by Su
            .state('myapp.content', {
                //url: "/{id}&/{page}&/{total}",
                url: "/{id}/{page}/{total}",
                views: {
                    'tubiao': {
                        templateUrl: "partials/myapp/tubiao.html",
                        controllerAs: "mypro",
                        controller: MProController
                    },
                    'collection': {
                        templateUrl: "partials/myapp/collection.html",
                        controllerAs: "mycollect",
                        controller: MColController
                    }
                }
            })
            .state('myapp.broswer', {
                url: "/broswer",
                templateUrl: "partials/myapp/tubiao/broswer.html",
                controller: function ($scope) {

                }
            })
            //企业应用
            .state('businessapp', {
                url: "/businessapp",
                parent: "index",
                abstract: true,
                templateUrl: "partials/businessapp/businessapp.html",
                controllerAs: "Bpro",
                controller: BProControllerPartents
            })
            //企业应用内容
            .state('businessapp.content', {
                //url: "/{id}&/{page}&/{total}&/{flag}&/{appId}&/{searchName}",
                url: "/{id}/{page}/{total}/{flag}/{appId}/{searchName}",
                templateUrl: "partials/businessapp/tubiao.html",
                controllerAs: "Bpro",
                controller: BProController
            })
            .state('details', {
                url: "/details",
                parent: "index",
                abstract: true,
                templateUrl: "partials/details/details.html",
                controllerAs: "Dpro",
                controller: DProController
            })
            //详情-update by Su
            .state('details.details', {
                url: "/{id}/{appId}/{flowId}",
                templateUrl: "partials/details/child/details.html",
                controller: DProDetailsController,
            })
            //评分与评论
            .state('details.comment', {
                url: "/comment/{id}",
                templateUrl: "partials/details/child/comment.html",
                controller: DProCommentController
            })
            //相关
            .state('details.correlation', {
                url: "/correlation/{id}",
                templateUrl: "partials/details/child/correlation.html",
                controller: DProCorrelationController
            })
            //帮助
            .state('help', {
                url: "/help",
                parent: "index",
                templateUrl: "partials/help/help.html",
                controllerAs: "help",
                controller: HelpController,
                authorizedRoles: [USER_ROLES.isv]
            })
            //我的应用内容
            .state('myapp.fenye', {
                url: "/{id}&/{page}",
                templateUrl: "partials/myapp/tubiao.html",
                controllerAs: "mypro",
                controller: MProController
            })
            //管理页面-add by Hua
            .state('manage', {
                url: "/manage",
                parent: "index",
                abstract: true,
                templateUrl: "partials/manage/manage.html",
                controller: MgController
            })
            //管理页面-我的申请-add by Hua
            .state('manage.apply', {
                url: "/apply/{applyStatus}",
                templateUrl: "partials/manage/mywork/apply_manage.html",
                controllerAs: "applyMg",
                controller: applyMgController

            })
            //管理页面-我的待办详情-add by Hua
            .state('manage.applyDetail', {
                url: "/applyDetail/{applyStatus}/{flowId}/{taskId}",
                templateUrl: "partials/manage/mywork/apply_detail.html",
                controllerAs: "applyDetailMg",
                controller: applyDetailMgController

            })
            //管理页面-我的申请流程图-add by Hua
            .state('manage.applyProcess', {
                url: "/applyProcess/{applyStatus}/{flowId}/{taskId}",
                templateUrl: "partials/manage/mywork/apply_process.html",
                controllerAs: "applyProcessMg",
                controller: applyProcessMgController

            })
            //管理页面-我的待办-add by Hua
            .state('manage.todo', {
                url: "/todo/{todoStatus}",
                templateUrl: "partials/manage/mywork/todo_manage.html",
                controllerAs: "todoMg",
                controller: todoMgController
            })
            //管理页面-我的待办详情-add by Hua
            .state('manage.todoDetail', {
                url: "/todoDetail/{todoStatus}/{flowId}/{taskId}",
                templateUrl: "partials/manage/mywork/todo_detail.html",
                controllerAs: "todoDetailMg",
                controller: todoDetailMgController
            })
            //管理页面-我的待办详情-add by Hua
            .state('manage.doneDetail', {
                url: "/doneDetail/{todoStatus}/{flowId}/{taskId}",
                templateUrl: "partials/manage/mywork/todoDone_detail.html",
                controllerAs: "doneDetailMg",
                controller: doneDetailMgController
            })

            //管理页面-我的待办流程图-add by Hua
            .state('manage.todoProcess', {
                url: "/todoProcess/{todoStatus}/{flowId}/{taskId}",
                templateUrl: "partials/manage/mywork/todo_process.html",
                controllerAs: "todoProcessMg",
                controller: todoProcessMgController

            })
            //我的应用-我的分类
            //add by Darren(丁延超) 2016/03/08
            .state('manage.myclass', {
                url: "/myclass",
                templateUrl: "partials/manage/myapp/MyClass_manage.html",
                controller: classMgController
            })

            //我的应用-我的订阅
            //add by Darren(丁延超) 2016/03/09
            .state('manage.subscribe', {
                url: "/subscribe",
                abstract: true,
                templateUrl: "partials/manage/myapp/Subscribe_manage.html",
                //resolve:{
                //    classFenlei: function($stateParams){
                //        var fen;
                //        if($stateParams.selectType==0){
                //            fen = "开发商";
                //            console.log(fen);
                //        }else if($stateParams.selectType==1){
                //            fen = "分类";
                //            console.log(fen);
                //        }
                //        return fen;
                //    }
                //},
                controller: subscribeMgController
            })
            .state('manage.subscribe.company', {
                url: "/company/{selectType}",
                templateUrl: "partials/manage/myapp/Subscribe_company_manage.html",
                controller: subscribeMgController
            })
            .state('manage.subscribe.class', {
                url: "/class/{selectType}",
                templateUrl: "partials/manage/myapp/Subscribe_class_manage.html",
                controller: subscribeMgController
            })

            //我的应用-我的收藏
            //add by Sky(华润松) 2016/03/09
            .state('manage.collection', {
                url: "/collection",
                templateUrl: "partials/manage/myapp/Collection_manage.html",
                controller: collectionMgController
            })
            //企业应用-企业信息（基本信息）
            //add by Darren(丁延超) 2016/03/09
            .state('manage.businessinfo', {
                url: "/businessinfo",
                templateUrl: "partials/manage/BusinessApp/BusinessInfo_manage.html",
                controller: businessInfoMgController
            })
            //企业应用-企业信息（用户管理-用户）
            //add by Hua(华润松) 2016/03/29
            .state('manage.businessinfo_user', {
                url: "/businessinfo_user",
                templateUrl: "partials/manage/BusinessApp/BusinessInfo_manage_user.html",
                controller: businessInfoUserMgController
            })
            //企业应用-企业信息（用户管理-用户组）
            //add by Hua(华润松) 2016/03/29
            .state('manage.businessinfo_userGroup', {
                url: "/businessinfo_userGroup",
                templateUrl: "partials/manage/BusinessApp/BusinessInfo_manage_userGroup.html",
                controller: businessInfoUserGroupMgController
            })
            //企业应用-应用分类(应用分类)
            //add by Darren(丁延超) 2016/03/09
            .state('manage.appclass', {
                url: "/appclass",
                templateUrl: "partials/manage/BusinessApp/AppClass_manage.html",
                controller: AppclassMgController
            })
            //企业应用-应用分类(分类维护)
            //add by Hua
            .state('manage.appclassMaintain', {
                url: "/appclassMaintain",
                templateUrl: "partials/manage/BusinessApp/AppClassMaintain_manage.html",
                controller: AppclassMaintainMgController
            })
            //企业应用-企业应用
            //add by Darren(丁延超) 2016/03/09
            .state('manage.businessapp', {
                url: "/businessapp",
                templateUrl: "partials/manage/BusinessApp/BusinessApp_manage.html",
                controllerAs: "mangbusAppCon",
                controller: MangbusAppController
            })
            //企业应用-企业应用-构建新版本
            //add by Darren(丁延超) 2016/03/09
            .state('manage.businessapp_new', {
                url: "/businessapp_new/{appId}",
                templateUrl: "partials/manage/BusinessApp/BusinessApp_manager_newApp.html",
                //controllerAs: "mangbusAppCon",
                controller: MangbusNewVesrAppController
                //controller: function ($scope) {
                //
                //}
            })
            //应用设置-应用上架-No1(基本信息)
            //add by Darren(丁延超) 2016/03/09
            .state('manage.appadded', {
                url: "/appadded/{Status}/{BiaoShi}/{appId}/{todo}",
                templateUrl: "partials/manage/appsettings/Appadded_manage_1.html",
                //resolve:{
                //    desAppId:  function(Appsession){
                //        Appsession.destroy();
                //        //alert(Appsession.appId);
                //        return Appsession;
                //    }
                //},
                controllerAs: "newPutCon",
                controller: newPutController
            })
            //应用设置-应用上架-No2(应用详情)
            .state('manage.appadded2', {
                url: "/appadded2",
                templateUrl: "partials/manage/appsettings/Appadded_manage_2.html",
                controllerAs: "newPut2Con",
                controller: newPut2Controller
            })
            //应用设置-应用上架-No3(发布应用)
            .state('manage.appadded3', {
                url: "/appadded3",
                templateUrl: "partials/manage/appsettings/Appadded_manage_3.html",
                controllerAs: "newPut3Con",
                controller: newPut3Controller
            })
            //应用设置-应用上架-No4(发布范围)
            .state('manage.appadded4', {
                url: "/appadded4",
                templateUrl: "partials/manage/appsettings/Appadded_manage_4.html",
                controllerAs: "newPut4Con",
                controller: newPut4Controller
            })
            //应用设置-应用上架-No5(发布完成)
            .state('manage.appadded5', {
                url: "/appadded5",
                templateUrl: "partials/manage/appsettings/Appadded_manage_5.html",
                controllerAs: "newPut5Con",
                controller: newPut5Controller
            })
            //其他设置-个人信息
            //add by Darren(丁延超) 2016/03/09
            .state('manage.personalinfo', {
                url: "/personalinfo",
                templateUrl: "partials/manage/othersettings/PersonInfo_manage.html",
                controllerAs: "Percon",
                controller: PersonController
            })
            //其他设置-账号安全
            //add by Sky(华润松) 2016/03/09
            .state('manage.accountsecurity', {
                url: "/accountsecurity",
                templateUrl: "partials/manage/othersettings/AccountSecurity_manage.html",
                controller: accountMgController
            });
    });
//去掉angularjs针对每个页面的模板缓存问题
//app.run(function($rootScope, $templateCache) {
//    $rootScope.$on('$routeChangeStart', function(event, next, current) {
//        if (typeof(current) !== 'undefined'){
//            $templateCache.remove(current.templateUrl);
//        }
//    });
//});
