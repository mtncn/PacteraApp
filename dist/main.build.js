/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by vision on 16/1/17.
	 */
	//var login = require('./LoginModule');
	var app = angular.module('app', ['ui.router', 'ngSanitize', 'ngMessages']);

	//与服务器端的请求交互
	var httpService = __webpack_require__(2);

	//公共查询Service
	var public_Select_Service = __webpack_require__(3);

	//获取登陆服务Service
	var loginservice = __webpack_require__(4);
	var loginController = __webpack_require__(5);
	var mailboxVerificationController = __webpack_require__(6);
	var userStation = __webpack_require__(7);
	var loginsession = __webpack_require__(8);
	var Appsession = __webpack_require__(9);

	var ApplicationController = __webpack_require__(10);
	var AuthInterceptor = __webpack_require__(11);

	var MyController = __webpack_require__(12);
	var MyService = __webpack_require__(13);
	var MProController = __webpack_require__(14);
	var MProService = __webpack_require__(15);
	var BProController = __webpack_require__(16);
	var BProControllerPartents = __webpack_require__(17);
	var BProService = __webpack_require__(18);
	var DProController = __webpack_require__(19);
	var DProDetailsController = __webpack_require__(20);
	var DProCommentController = __webpack_require__(21);
	var DProCorrelationController = __webpack_require__(22);
	var DProCorrelationService = __webpack_require__(23);
	var DProCommentService = __webpack_require__(24);
	var DProDetailsService = __webpack_require__(25);
	var DProService = __webpack_require__(26);
	//add by Su-start
	var MColController = __webpack_require__(27);
	var MCollService = __webpack_require__(28);
	var loginOutController = __webpack_require__(29);
	var loginOutService = __webpack_require__(30);
	//add by Su-end
	//add by Hua-start
	var MgService = __webpack_require__(31);
	var mailboxVerificationService = __webpack_require__(32);
	var MgController = __webpack_require__(33);
	var applyMgService = __webpack_require__(34);
	var applyMgController = __webpack_require__(35);
	var applyDetailMgService = __webpack_require__(36);
	var applyDetailMgController = __webpack_require__(37);
	var applyProcessMgService = __webpack_require__(38);
	var applyProcessMgController = __webpack_require__(39);
	var todoMgService = __webpack_require__(40);
	var todoMgController = __webpack_require__(41);
	var todoDetailMgService = __webpack_require__(42);
	var todoDetailMgController = __webpack_require__(43);
	var doneDetailMgService = __webpack_require__(44);
	var doneDetailMgController = __webpack_require__(45);
	var todoProcessMgService = __webpack_require__(46);
	var todoProcessMgController = __webpack_require__(47);
	var accountMgController = __webpack_require__(48);
	var accountMgService = __webpack_require__(49);
	var collectionMgController = __webpack_require__(50);
	var collectionMgService = __webpack_require__(51);
	var classMgController = __webpack_require__(52);
	var classMgService = __webpack_require__(53);
	var AppclassMgController = __webpack_require__(54);
	var AppclassMgService = __webpack_require__(55);
	var AppclassMaintainMgController = __webpack_require__(56);
	var AppclassMaintainMgService = __webpack_require__(57);
	var businessInfoMgController = __webpack_require__(58);
	var businessInfoMgService = __webpack_require__(59);
	var businessInfoUserMgController = __webpack_require__(60);
	var businessInfoUserMgService = __webpack_require__(61);
	var businessInfoUserGroupMgController = __webpack_require__(62);
	var businessInfoUserGroupMgService = __webpack_require__(63);
	//add by Hua-end
	//add by Ding-start
	var PersonController = __webpack_require__(64);
	var PersonService = __webpack_require__(65);
	var MangbusAppController = __webpack_require__(66);
	var MangbusNewVesrAppController = __webpack_require__(67);
	var MangbusNewVesrAppService = __webpack_require__(68);
	var MangbusAppServcie = __webpack_require__(69);
	var newPutController = __webpack_require__(70);
	var newPutServcie = __webpack_require__(71);
	var newPut2Controller = __webpack_require__(72);
	var newPut2Servcie = __webpack_require__(73);
	var newPut3Controller = __webpack_require__(74);
	var newPut3Servcie = __webpack_require__(75);
	var newPut4Controller = __webpack_require__(76);
	var newPut4Servcie = __webpack_require__(77);
	var newPut5Controller = __webpack_require__(78);
	var newPut5Servcie = __webpack_require__(79);
	var subscribeMgController = __webpack_require__(80);
	var subscribeMgService = __webpack_require__(81);

	var ckeditor = __webpack_require__(82);
	var fileModel = __webpack_require__(83);
	var UploaderService = __webpack_require__(84);
	//add by Ding-end

	var HelpController = __webpack_require__(85);
	var getdateservice = __webpack_require__(86);

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
	    .run(["$rootScope", "$state", "AUTH_EVENTS", "Session", function ($rootScope, $state, AUTH_EVENTS, Session) {
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
	    }])
	    .config(["$httpProvider", function ($httpProvider) {
	        $httpProvider.interceptors.push([
	            '$injector',
	            function ($injector) {
	                return $injector.get('AuthInterceptor');
	            }
	        ]);
	    }]);

	app
	    .config(["$stateProvider", "$urlRouterProvider", "USER_ROLES", function ($stateProvider, $urlRouterProvider, USER_ROLES) {
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
	                controller: ["$scope", function ($scope) {

	                }]
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
	                controller: ["$scope", function ($scope) {

	                }]
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
	                controller: ["$scope", function ($scope) {

	                }]
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
	    }]);
	//去掉angularjs针对每个页面的模板缓存问题
	//app.run(function($rootScope, $templateCache) {
	//    $rootScope.$on('$routeChangeStart', function(event, next, current) {
	//        if (typeof(current) !== 'undefined'){
	//            $templateCache.remove(current.templateUrl);
	//        }
	//    });
	//});


/***/ },
/* 2 */
/***/ function(module, exports) {

	/**
	 * Created by vision on 16/2/29.
	 */

	//var urlWeb = 'http://ecms.chinacloudapp.cn:8000/cloudapps/';
	//var urlWeb = 'http://192.168.0.151:8080/cloudapps/';
	//var urlWeb = 'http://192.168.0.109:8080/cloudapps/';
	//var urlWeb = 'http://localhost:8080/cloudapps/';
	var urlWeb = 'http://192.168.0.105:8080/cloudapps/';


	//var urlWeb = './TextData/';

	module.exports = {

	    //  登陆
	    //Loginurl:urlWeb+'login.json',
	    Loginurl:urlWeb+'Pactera-IntegralPlatform-app/loginsso.do',

	    //  企业应用 应用列表
	    //busproduct:urlWeb+'Bproduct.json',
	    busproduct:urlWeb+'sort/findSortUse.do',
	    //busproduct_like:urlWeb+'Bproduct_like.json',
	    busproduct_like:urlWeb+'sort/findSortUse.do',

	    //  详情
	    //details:'./TextData/details.json',
	   details:urlWeb+'sort/findUseCadicine.do',

	    //我的待办
	    //mytodo:'http://ecms.chinacloudapp.cn:8000/cloudapps/apply/findmytodo.do',
	    mytodo:urlWeb +'apply/findmytodo.do',

	    //我的申请
	    //myapply:urlWeb +'myapplys.json',
	    myapply:urlWeb +'apply/findmyapply.do',

	    //我的应用 应用列表
	    //myproduct:urlWeb+'Mproduct.json',
	    myproduct:urlWeb+'sort/findSortUse.do',

	    //企业应用的订阅事件
	    //subscribe:urlWeb+'dingyue.json',
	    subscribe:urlWeb+'apply/apply.do',

	    //我的应用的点击收藏取消收藏事件--add by Su
	    //collection:urlWeb+'dingyue.json',
	    collection:urlWeb+'coll/add_updcoll.do',

	    //管理-我的任务-我的申请-add by Hua
	    //applyManage:urlWeb+'applyMgs.json',
	    applyManage:urlWeb+'apply/condition_apply.do',

	    //管理-我的任务-我的申请详情内容-add by Hua
	    //applyDetail:urlWeb+'applyDetail.json',
	    applyDetail:urlWeb+'apply/detail/myapply.do',

	    //管理-我的任务-我的申请流程图内容-add by Hua
	    //applyProcess:urlWeb+'applyProcess.json',
	    applyProcess:urlWeb+'apply/applyProcess.do',

	    //管理-我的任务-我的待办-add by Hua
	    //todoManage:urlWeb+'todoMgs.json',
	    todoManage:urlWeb+'todo/todo_done.do',

	    ////管理-我的任务-我的待办审批-add by Hua
	    //todoApproveManage:urlWeb+'apply/completetodo.do',
	    todoApproveManage:urlWeb+'apply/completetodo.do',


	    //管理-我的任务-我的代办详情内容-add by Hua
	    //todoDetail:urlWeb+'todoDetail.json',
	    todoDetail:urlWeb+'apply/detail/myapply.do',

	    //管理-我的任务-我的待办流程图内容-add by Hua
	    //todoProcess:urlWeb+'todoProcess.json',
	    todoProcess:urlWeb+'apply/applyProcess.do',

	    //管理-其他设置-账号安全-add by Hua
	    accountManage:urlWeb+'accountMgs.json',
	    //accountManage:urlWeb+'accountMgs.json',

	    //管理-我的应用-我的收藏-add by Hua
	    //collectionManage:urlWeb+'collectionMgs.json',
	    collectionManage:urlWeb+'control/coll/findcollection.do',

	    //管理-我的应用-我的分类菜单-add by Hua
	    //classMenuManage:urlWeb+'classMenuMgs.json',
	    classMenuManage:urlWeb+'sort/userSort.do',

	    //管理-我的应用-我的分类应用列表-add by Hua
	    //classListManage:urlWeb+'classListMgs.json',
	    classListManage:urlWeb+'sort/findUserApp.do',

	    //管理-我的应用-我的分类添加应用列表(查询)-add by Hua
	    //appListManage:urlWeb+'appListMgs.json',
	    appListManage:urlWeb+'sort/use/findUserSort.do',

	    //管理-我的应用-我的分类添加应用列表（添加）-add by Hua
	    //appListAddManage:urlWeb+'appListMgs.json',
	    appListAddManage:urlWeb+'sort/use/saveUserSort.do',

	    //管理-我的应用-我的订阅-按公司  --add by Darren_YCDing
	    //subscribe_Manage_Company:urlWeb+'Subscribe_company_manage.json',
	    subscribe_Manage_Company:urlWeb+'myapp/findRovio.do',

	    //管理-我的应用-我的订阅-按分类  --add by Darren_YCDing
	    //subscribe_Manage_Class:urlWeb+'Subscribe_class_manage.json',
	    subscribe_Manage_Class:urlWeb+'myapp/findUserSort.do',

	    //管理-我的应用-我的订阅-取消订阅  --add by Darren_YCDing
	    //subscribe_Manage_unDo:urlWeb+'Subscribe_unDo.json',
	    subscribe_Manage_unDo:urlWeb+'apply/apply.do',

	    //管理-企业应用-我的分类菜单-add by Hua
	    //AppclassMenuManage:urlWeb+'AppclassMenuMgs.json',
	    AppclassMenuManage:urlWeb+'sort/findcompanySort.do',

	    //管理-企业应用-我的分类应用列表-add by Hua
	    //AppclassListManage:urlWeb+'AppclassListMgs.json',
	    AppclassListManage:urlWeb+'sort/findCompanyApp.do',

	    //管理-企业应用-分类维护菜单-add by Hua
	    //AppMaintainclassMenuManage:urlWeb+'AppclassMenuMgs.json',
	    AppMaintainclassMenuManage:urlWeb+'sort/companySort.do',

	    //管理-企业应用-分类维护应用列表-add by Hua
	    //AppMaintainclassListManage:urlWeb+'AppclassListMgs.json',
	    AppMaintainclassListManage:urlWeb+'sort/use/companyrSort.do',

	    //管理-企业应用-分类维护添加应用列表-add by Hua
	    //AppappListManage:urlWeb+'AppappListMgs.json',
	    AppappListManage:urlWeb+'sort/use/findCompanySort.do',

	    //管理-企业应用-企业信息基本信息上传logo-add by Hua
	    //logoManage:urlWeb+'logoManage.json',
	    logoManage:urlWeb+'logoManage.json',

	    //管理-企业应用-企业信息基本信息查询和保存-add by Hua
	    //businessInfoManage:urlWeb+'businessInfo.json',
	    businessInfoManage:urlWeb+'company/findCompany.do',

	    //管理-企业应用-企业信息基本信息查询和保存-add by Hua
	    //businessLogoManage:'',
	    businessLogoManage:urlWeb+'company/companyLogo.do',

	    //管理-企业应用-企业信息基本信息配置服务查询-add by Hua
	    //serverInfoManage:urlWeb+'serverInfoManage.json',
	    serverInfoManage:urlWeb+'company/serverInfoManage.do',

	    //管理-企业应用-企业信息基本信息配置服务确认-add by Hua
	    //serverInfoSaveManage:urlWeb+'serverInfoManage.json',
	    serverInfoSaveManage:urlWeb+'company/savaAuth.do',

	    //管理-企业应用-企业信息基本信息配置服务测试-add by Hua
	    //serverInfoTestManage:urlWeb+'serverInfoManage.json',
	    serverInfoTestManage:urlWeb+'company/isSuccess.do',

	    //管理-企业应用-企业信息用户管理（查询tree用户组）-add by Hua
	    //userGroupManage:urlWeb+'userGroupManage.json',
	    userGroupManage:urlWeb+'user/group/findGroup.do',

	    //管理-企业应用-企业信息用户管理(查询用户)-add by Hua
	    //userManage:urlWeb+'userManage.json',
	    userManage:urlWeb+'user/group_user/findGroup.do',

	    //管理-企业应用-企业信息用户管理(新建或编辑保存用户)-add by Hua
	    //userSaveManage:urlWeb+'operationResult.json',
	    userSaveManage:urlWeb+' user/group_user/saveGroup_User.do',

	    //管理-企业应用-企业信息用户管理（上移，下移，删除用户）-add by Hua
	    //userOprManage:urlWeb+'userManage.json',
	    userOprManage:urlWeb+'user/group/updUser.do',

	    //管理-企业应用-企业信息用户管理(批量删除用户)-add by Hua
	    //userDelAllManage:urlWeb+'userManage.json',
	    userDelAllManage:urlWeb+'user/delUser.do',

	    //管理-企业应用-企业信息用户管理(全部用户组下删除用户)-add by Hua
	    //userDelManage:urlWeb+'userManage.json',
	    userDelManage:urlWeb+'user/delUser.do',

	    //管理-企业应用-企业信息用户管理(导入用户查询)-add by Hua
	    //userImportManage:urlWeb+'userManage.json',
	    userImportManage:urlWeb+'user/inputUser.do',


	    //管理-企业应用-企业信息用户管理(导入用户提交)-add by Hua
	    //userImportAddManage:urlWeb+'userManage.json',
	    userImportAddManage:urlWeb+'userManage.json',


	    //管理-企业应用-企业信息用户管理（查询下拉框用户组）-add by Hua
	    //userGroupSelectManage:urlWeb+'userGroupSelectManage.json',
	    userGroupSelectManage:urlWeb+'user/group/findGroupSelect.do',

	    //管理-企业应用-企业信息用户管理（查询用户组列表）-add by Hua
	    //userGroupListManage:urlWeb+'userGroupListManage.json',
	    userGroupListManage:urlWeb+'user/group/findGroupByParent.do',

	    //管理-企业应用-企业信息用户管理（新建或编辑用户组保存）-add by Hua
	    //userGroupListSaveManage:urlWeb+'operationResult.json',
	    userGroupListSaveManage:urlWeb+'user/group/ssaveGroup.do',

	    //管理-企业应用-企业信息用户管理（上移，下移，删除用户组列表）-add by Hua
	    //userGroupListOprManage:urlWeb+'userGroupListManage.json',
	    userGroupListOprManage:urlWeb+'user/group/moveGroup.do',

	    //其他设置-个人信息-保存,--add by Ding
	    //person_manage_save:urlWeb+'person_manage_save.json',
	    person_manage_save:urlWeb+'user/saveUser.do',
	    //person_manage_select:urlWeb+'person_manage_save.json',
	    person_manage_select:urlWeb+'user/findUser.do',

	    //我的应用的点击收藏取消收藏事件--add by Su
	    //searchBussiness:urlWeb+'BSearchProduct.json',
	    searchBussiness:urlWeb+'coll/addcoll.do',

	    //历史查看 --add by Su
	    //historyBussiness:urlWeb+'history.json',
	    historyBussiness:urlWeb+'his/findhistory.do',

	    //历史top查看 --add by Su
	    //thistoryBussiness:urlWeb+'Thistory.json',
	    thistoryBussiness:urlWeb+'his/findTOP10.do',

	    //菜单  --add by su
	    //menu:urlWeb+'menu.json',
	    menu:urlWeb+'sort/findsort.do',

	    //管理页面-企业应用-企业应用(查询)--add by Ding
	    //select_manage_bus:urlWeb+'mas_bus_app.json',
	    select_manage_bus:urlWeb+'company/companyApp.do',

	    //管理_企业应用_企业应用_构建新版本(查询)--add by Ding
	    //select_createNew_manage_bus:urlWeb+'mas_bus_create.json',
	    select_createNew_manage_bus:urlWeb+'mas_bus_create.json',
	    select_createNew_manage_bus:urlWeb+'use/findAppNew.do',

	    //管理_企业应用_企业应用_构建新版本(保存)--add by Ding
	    //save_createNew_manage_bus:'',
	    save_createNew_manage_bus:urlWeb+'use/saveAppNew.do',

	  //  //管理_应用设置_应用上架_基本信息(保存)--add by Ding
	  //  //manage_appset_putup_no1_save:urlWeb+'public/test.json',
	  //  manage_appset_putup_no1_save:urlWeb+'use/saveInfo1.do',
	  // // manage_appset_putup_no1_select:urlWeb+'public/test.json',
	  //  //manage_appset_putup_no1_select:'',
	  //
	  //  //管理_应用设置_应用上架_应用详情(保存)--add by Ding
	  // // manage_appset_putup_no2_save:'',
	  //  manage_appset_putup_no2_save:urlWeb+'use/saveInfo2.do',
	  ////  manage_appset_putup_no2_select:'',
	  //  //manage_appset_putup_no2_select:'',
	    //管理_应用设置_应用上架_基本信息(保存)--add by Ding
	   // manage_appset_putup_no1_save:urlWeb+'public/test.json',
	    //manage_appset_putup_no1_save:urlWeb+'use/saveInfo1.do',
	    manage_appset_putup_no1_save:urlWeb+'use/saveInfo1.do',
	    //manage_appset_putup_no1_select:urlWeb+'public/test.json',
	    manage_appset_putup_no1_select:urlWeb+'use/findinfo1.do',
	    //管理_应用设置_应用上架_应用详情(保存)--add by Ding
	    manage_appset_putup_no2_save:urlWeb+'use/saveInfo2.do',
	    manage_appset_putup_no2_select:urlWeb+'use/findinfo2.do',
	    //管理_应用设置_应用上架_发布应用(保存)--add by Ding
	    //manage_appset_putup_no3_save:'',
	    manage_appset_putup_no3_save:urlWeb+'use/saveInfo3.do',
	    //manage_appset_putup_no3_select:'',
	    manage_appset_putup_no3_select:urlWeb+'use/findinfo3.do',
	    //管理_应用设置_企业应用_发布范围(保存)--add by Ding
	    manage_appset_putup_no4_save:urlWeb+'use/saveInfo4.do',
	    //管理_应用设置_应用上架_发布范围(保存)--add by Ding
	    manage_appset_putup_no_urlWeb_sele:urlWeb+'use/saveRelease.do',
	    manage_appset_putup_no4_save:urlWeb+'use/saveInfo4.do',
	    //manage_appset_putup_no4_select:'',
	  //  manage_appset_putup_no4_right::urlWeb+'use/saveInfo4.do',
	    manage_appset_putup_no4_right:urlWeb+'use/findRelease.do',
	    //manage_appset_putup_no4_left:urlWeb+'mas_appset_putup_no4.json',
	    manage_appset_putup_no4_left:urlWeb+'use/findinfo4.do',

	    //我的应用 应用列表
	    //myproduct_insert_histery:'',
	    myproduct_insert_histery:urlWeb+'his/addhistory.do',

	    //省份查询
	    //punlic_Select_Province:urlWeb+'public/province.json',
	    punlic_Select_Province:urlWeb+'user/cities.do',
	    //城市查询
	    //public_Select_City:urlWeb+'public/city.json',
	    public_Select_City:urlWeb+'user/provinces.do',
	    //我的应用-我的收藏
	    MCollection:urlWeb+'coll/findcollection.do',
	    //后台管理-应用分类-添加应用
	    AppappListAddManage:urlWeb+'sort/use/saveCompanySort.do',
	    //后台管理-个人信息-邮箱验证
	    AppappListAddManageEmail:urlWeb+'user/isEmail.do',
	    //登录页的自动查询
	    loginSelectLoginDataImg:urlWeb+'company/findLogo.do',
	    //loginSelectLoginDataImg:urlWeb+'selectLoginImg.json',
	    //应用上架第四步 查询 右边的查询
	    findRelease:urlWeb+'use/findRelease.do',
	    //前台-企业应用-应用详情-详情
	    selectDataImgBussiness:urlWeb+'sort/appDetail.do',
	   //前台-企业应用-应用详情-评论与评分_查询
	    selectDataImgBussinessXiangqing:urlWeb+'use/findRreview.do',
	    //selectDataImgBussinessXiangqing:'./TextData/bus_detail.json',
	   //前台-企业应用-应用详情-评论与评分_评论
	    selectDataImgBussinessPingLun:urlWeb+'use/saveRreview.do',
	   //前台-企业应用-应用详情-相关
	    selectDataImgBussinessPingLunXG:urlWeb+'companyApp/findRovio.do',
	    selectDataImgBussinessPingLunXG_2:urlWeb+'companyApp/findAppUser.do',
	    selectDataImgBussinessPingLunXG_3:urlWeb+'companyApp/findAppSort.do',
	    selectZsXinxi:urlWeb+'cert/findAppCert.do',
	    selectDelete:urlWeb+'company/updCompanyApp.do',
	    //用户导入查询
	    selectUserDaoRu:urlWeb+'user/inputOnUser.do',
	   selectUserDaoRuSave:urlWeb+'user/inputUser.do',
	   //证书密码修改
	    upPwdZs:urlWeb+'cert/updateAppCert.do',
	   //版本信息显示
	   //showKindInfo:'./TextData/banbenxixin.json',
	   showKindInfo:urlWeb+'use/findAppVersion.do',
	   //邮箱验证
	   validationCodeEmail:urlWeb+'user/email/validate.do',
	//  new_Select_NewApp:urlWeb+'',
	    //我的应用每页显示条数--add by Su
	    myEverPageNum:16,
	    //企业应用每页显示条数--add by Su
	    productEverPageNum:6
	};

/***/ },
/* 3 */
/***/ function(module, exports) {

	/**
	 * Created by Darren_YCDing on 16/4/21.
	 */
	module.exports = function($http,$q,httpservice,Session){

	    var public_Select = {};

	    public_Select.select_Province = function(){
	        var deferred = $q.defer();
	        $http({
	            method:'GET',
	            url:httpservice.punlic_Select_Province,
	            params:{
	                'sessionId':Session.id,
	                'userId': Session.userId,
	                'companyId':Session.companyId
	            }
	        }).then(function successCallback(response){
	            deferred.resolve(response.data);
	        },function errorCallback(response){
	            console.log("public_Select_Service select_City 查询省份失败");
	            deferred.reject(response.data)
	        });

	        return deferred.promise;
	    };

	    public_Select.select_City = function(Province){
	        var deferred = $q.defer();
	        $http({
	            method:'GET',
	            url:httpservice.public_Select_City,
	            params:{
	                'sessionId':Session.id,
	                'userId': Session.userId,
	                'companyId':Session.companyId,
	                'Province':Province
	            }
	        }).then(function successCallback(response){
	            deferred.resolve(response.data);
	        },function errorCallback(response){
	            console.log("public_Select_Service select_City 查询城市失败");
	            deferred.reject(response.data)
	        });

	        return deferred.promise;
	    };

	    return public_Select;
	};

/***/ },
/* 4 */
/***/ function(module, exports) {

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

/***/ },
/* 5 */
/***/ function(module, exports) {

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

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = function ($scope,$state,$stateParams,mailboxVerificationService) {
	    //$scope.code = $stateParams.code;
	    $scope.flag = false;
	    $scope.companyId;
	    $scope.val;
	    mailboxVerificationService.mailSelect($stateParams.code).then(function (data) {
	        console.log(data);
	        if(data.flag == true){
	            $('.email_tiaozhuan_1').css('display','block');
	            $('.email_tiaozhuan_2').css('display','none');
	            $scope.flag = true;
	            $scope.val = data.message;
	            $scope.companyId = data.companyId;
	            setTimeout(function(){
	                $state.go('login_company',{companyId:$scope.companyId});
	            },3000);
	        }else{
	            $('.email_tiaozhuan_2').css('display','block');
	            $('.email_tiaozhuan_1').css('display','none');
	            $scope.val = data.message;
	            setTimeout(function(){
	                $state.go('login_company',{companyId:''});
	            },3000);
	        }
	    },function(){

	    });
	    $scope.go = function(){
	        if($scope.flag == true){
	            $state.go('login_company',{companyId:$scope.companyId});
	        }else{
	            $state.go('login_company',{companyId:''});
	        }

	    }

	}


/***/ },
/* 7 */
/***/ function(module, exports) {

	/**
	 * Created by vision on 16/2/2.
	 */
	module.exports = {
	    AUTH_EVENTS: {
	        loginSuccess: '用户登录成功',
	        loginFailed: '用户登录失败',
	        logoutSuccess: '用户登出成功',
	        sessionTimeout: 'session超时',
	        notAuthenticated: 'auth-not-authenticated',//未鉴定
	        notAuthorized: 'auth-not-authorized'//没有授权
	    },
	    USER_ROLES: {
	        //user     	普通用户
	        //admin  	管理员
	        //isv        	服务商
	        //cadmin  	企业管理员

	        //all: '*',
	        //admin: 'admin',
	        //editor: 'editor',
	        //guest: 'guest'

	        admin:'admin',      //超级管理员
	        cadmin:'cadmin',    //企业管理员
	        isv:'isv',          //服务商
	        user:'user'         //普通用户

	    }
	};

/***/ },
/* 8 */
/***/ function(module, exports) {

	/**
	 * Created by vision on 16/2/1.
	 */
	module.exports = function () {
	    this.create = function (sessionId, userId, userRole,station,companyId,name) {
	        this.id = sessionId;
	        this.userId = userId;
	        this.userRole = userRole;
	        this.station = station;
	        this.companyId = companyId;
	        localStorage.companyId = companyId;

	        this.name = name;
	    };
	    this.destroy = function () {
	        this.id = null;
	        this.userId = null;
	        this.userRole = null;
	        this.station = null;
	        this.companyId = null;
	        this.name = null;
	    };
	    return this;
	};



/***/ },
/* 9 */
/***/ function(module, exports) {

	/**
	 * Created by Darren_YCDing on 16/4/18.
	 */
	module.exports = function () {
	    this.create = function (appId) {
	        this.appId = appId;
	    };
	    this.destroy = function () {
	        this.appId = null;
	    };
	    return this;
	};

/***/ },
/* 10 */
/***/ function(module, exports) {

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

/***/ },
/* 11 */
/***/ function(module, exports) {

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




/***/ },
/* 12 */
/***/ function(module, exports) {

	/**
	 * Created by vision on 16/2/17.
	 */
	module.exports = function($rootScope,$state,$scope,MyService){
	    //向下传播事件
	    $scope.$on('to-parent', function(e, d) {
	        $scope.$broadcast('to-child','to MColController');
	    });
	    //add by HUA--start
	    //设置管理点击样式
	    $rootScope.mgBtnShowCor='login_2';
	    //add by HUA--end
	    $scope.todo={};
	    $scope.applys={};
	    $scope.menus = {};
	    $scope.mhistory = {};

	    //我的待办
	    MyService.todo($scope.todo).then(function(data){
	        $scope.todo = data.todo;
	        $scope.success = data.success;

	    },function(){
	        console.log('Selectfaild  我的待办');
	    });

	    //我的申请
	    MyService.apply($scope.applys).then(function(data){
	        $scope.applys = data.applys;
	        $scope.success2 = data.success;
	    },function(){
	        console.log('Selectfaild  我的申请');
	    });
	    //页面跳转到详情页
	    $scope.detailsGo = function(id,appId,flowId,sortID){
	        console.log(id,appId,flowId);
	        $state.go('details.details',{id:id,appId:appId,flowId:flowId,sortID:sortID});
	    };
	    //菜单兰
	    MyService.getMenu($scope.menus).then(function(data){
	        $scope.menus = data.menuList;
	    },function(){
	        console.log('Selectfaild  菜单栏');
	    });


	    //历史查询
	    MyService.getHistory().then(function(data){
	        $scope.mhistory = data.his;
	    },function(){
	        console.log('Selectfaild  历史查询');
	    });

	    $scope.showImg = function(appId){
	        $('#'+appId+"-hsid").show();
	    };

	    $scope.hideImg = function(appId){
	        $('#'+appId+"-hsid").hide();
	    };

	    $scope.showFunc = function(url){
	        window.open(url);
	    }
	};


/***/ },
/* 13 */
/***/ function(module, exports) {

	/**
	 * Created by vision on 16/2/17.
	 *
	 * 我的应用主页(默认显示全部)
	 *
	 * @param $stateParams
	 * @param $http
	 * @param $q
	 * @returns {{}}
	 */
	module.exports=function($stateParams,$http,$q,httpservice,Session){

	    var MyService = {};

	    MyService.todo = function(){
	        var deferred = $q.defer();
	        $http({
	            method:'GET',
	            url:httpservice.mytodo,
	            params:{
	                'appId':$stateParams.id,
	                'sessionId':Session.id,
	                'companyId':Session.companyId,
	                'userId':Session.userId
	            }
	        }).then(function successCallback(response){
	                //console.log("11111");
	                deferred.resolve(response.data);
	            },function errorCallback(response){
	                deferred.reject(response.data);
	            }

	        );
	        return deferred.promise;
	    };
	    MyService.apply = function(){
	        var deferred = $q.defer();
	        $http({
	            method:'GET',
	            url:httpservice.myapply,
	            params:{'appId':$stateParams.id,'sessionId':Session.id,'companyId':Session.companyId,'userId':Session.userId}
	        }).then(function successCallback(response){
	                deferred.resolve(response.data);
	            },function errorCallback(response){
	                deferred.reject(response.data);
	            }

	        );
	        return deferred.promise;
	    };

	    //菜单栏
	    MyService.getMenu = function(){
	        var deferred = $q.defer();
	        $http({
	            method:'GET',
	            url:httpservice.menu,
	            params:{'userId':Session.userId,'sessionId':Session.id,'clas':'m','companyId':Session.companyId,'appId':$stateParams.id}
	        }).then(function successCallback(response){
	                deferred.resolve(response.data);
	            },function errorCallback(response){
	                deferred.reject(response.data);
	            }
	        );
	        return deferred.promise;
	    };

	    //历史查询
	    MyService.getHistory = function(){
	        var deferred = $q.defer();
	        $http({
	            method:'GET',
	            url:httpservice.historyBussiness,
	            params:{'userId':Session.userId,'sessionId':Session.id,'companyId':Session.companyId,'appId':$stateParams.id}
	        }).then(function successCallback(response){
	                deferred.resolve(response.data);
	            },function errorCallback(response){
	                deferred.reject(response.data);
	            }
	        );
	        return deferred.promise;
	    };
	    return MyService;
	};


/***/ },
/* 14 */
/***/ function(module, exports) {

	/**
	 * Created by vision on 16/2/13.
	 *
	 *
	 */
	module.exports= function($scope,MProService,MyService){

	    $scope.pros={};
	    MProService.select($scope.pnames).then(function (data) {
	        $scope.pros = data.pro;
	        $scope.totalPage = data.totalPage;
	        $scope.nowPage = data.nowPage;
	        $scope.id = data.id;
	        $scope.totalPas = data.totalPas;
	        $scope.currentPage = data.page;
	    }, function () {
	        console.log('Selectfaild  我的应用');
	    });

	    //点击桃心收藏的时候触发事件
	    //flag==0,表示已收藏，flag==1表示未收藏
	    $scope.guanzhu = function(appId,sortId,flag){


	        /*console.log("appId="+appId+",sortId="+sortId+",flag="+flag);*/
	        //要转换的状态

	        MProService.collect(appId,sortId,flag).then(function (data) {
	            //如果返回值为true，表示操作成功
	            //console.log(data.flag);
	            if(data.flag==true){
	                if(flag == 0){
	                    for(var i=0;i<$scope.pros.length;i++){
	                        if($scope.pros[i]['appId']==appId && $scope.pros[i]['sortId']==sortId){
	                            $scope.pros[i]['flag']=1;
	                        }
	                    }
	                }else{
	                    for(var i=0;i<$scope.pros.length;i++){
	                        if($scope.pros[i]['appId']==appId && $scope.pros[i]['sortId']==sortId){
	                            $scope.pros[i]['flag']=0;
	                        }
	                    }
	                }
	            }else{//否则收藏失败
	                console.log('收藏操作失败！返回值='+data.flag);
	            }
	            //向上传播事件
	            $scope.$emit('to-parent', 'to MyController');
	        },function(){
	            console.log('收藏状态更新失败！');
	        });
	    };
	    //鼠标滑过事件，显示桃心按钮
	    $scope.shoucangShow = function(appId,sortId){
	        $("#"+appId+"-"+sortId+"-id").css("display","inline-block");
	    };
	    //鼠标滑过离开事件，隐藏桃心按钮
	    $scope.shoucangHide = function(appId,sortId){
	        $("#"+appId+"-"+sortId+"-id").css("display","none");
	    };

	    $scope.showFunc = function(url,appId){
	        window.open(url);
	        MProService.insert_History(appId).then(function(){
	            console.log("MProController 我的应用  添加操作历史 成功");
	            MyService.getHistory().then(function(data){
	                angular.element('#myapp_scope').scope().mhistory = data.his;
	            },function(){
	                console.log('Selectfaild  历史查询');
	            });
	        },function(){
	            console.log("MProController 我的应用  添加操作历史 失败");
	        });
	    }
	};

/***/ },
/* 15 */
/***/ function(module, exports) {

	/**
	 * Created by vision on 16/2/14.
	 *
	 * 我的应用菜单查询
	 *
	 * @param $stateParams
	 * @param $http
	 * @param $q
	 * @returns {{}}
	 */
	module.exports = function ($stateParams,$http, $q,httpservice,Session) {
	    //var menuid = $stateParams.id;
	    //console.log("1   "+$stateParams.id);
	    var MProService = {};
	    MProService.select=function () {
	        var deferred = $q.defer();
	        //当前页
	        var maxPage = $stateParams.page;

	        if(maxPage === ""){
	            maxPage = 1;
	        }

	        //总页数
	        var total = $stateParams.total;
	        //如果总页数为空，则表示第一次访问
	        if(total != null){
	            if(total <= maxPage){
	                maxPage = total;
	            }
	            if(maxPage<=0){
	                maxPage = 1;
	            }
	        }
	        //初次进入的时候，菜单id=null；默认赋值为0；
	        var menuid = $stateParams.id;
	        if(menuid == undefined || menuid==null || menuid==""){
	            menuid = $stateParams.id = 0;
	        }
	        //每页显示条数
	        var everpage = httpservice.myEverPageNum;
	        $http({
	            method: 'GET',
	            url: httpservice.myproduct,
	            //cache:'ture',
	            params: {
	                'sortId':$stateParams.id,
	                'clas':"m",
	                'page':maxPage,
	                'pageSize':everpage,
	                'sessionId':Session.id,
	                'companyId':Session.companyId,
	                'userId':Session.userId
	            }
	        }).then(function successCallback(response) {
	            // this callback will be called asynchronously
	            // when the response is available
	            var totalPas = {};
	            //获取总页数
	            var totalPage = response.data.total;

	            for(var i=1;i<=totalPage;i++){
	                totalPas[i-1] = i;
	            }
	            //设置当前页和总页数
	            $stateParams.total=totalPage;
	            response.data.totalPage = totalPage;
	            response.data.nowPage = maxPage+"/"+totalPage;
	            response.data.totalPas = totalPas;
	            response.data.currentPage = $stateParams.currentPage;
	            response.data.id = $stateParams.id;
	            response.data.page = maxPage;
	            //console.log("aaa="+response.data.totalPage);
	            deferred.resolve(response.data);
	        }, function errorCallback(response) {
	            // called asynchronously if an error occurs
	            // or server returns response with an error status.
	            deferred.reject(response);
	        });
	        return deferred.promise;
	    };

	    //收藏和取消收藏
	    MProService.collect = function(appId,sortId,flag){
	        var deferred = $q.defer();
	        var status = "a";
	        //对状态status(0,1)更改,0:原来状态为收藏，1：原来状态为未收藏
	        if(flag==0){
	            status = "d";
	        }

	        $http({
	            method: 'GET',
	            //收藏获取取消收藏的状态转换
	            url: httpservice.collection,
	            //userId：用户id；appId：应用id；status：收藏状态
	            params: {'userId':Session.userId,'appId':appId,'status':status,'sessionId':Session.id,'sortId':sortId,'companyId':Session.companyId}
	            //params: {'appId':$stateParams.id,'':}
	        }).then(function successCallback(response) {

	            //console.log('3  '+$stateParams.id);
	            deferred.resolve(response.data);
	        }, function errorCallback(response) {

	            // called asynchronously if an error occurs
	            // or server returns response with an error status.
	            deferred.reject(response);
	        });
	        return deferred.promise;
	    };

	    //添加历史操作
	    MProService.insert_History = function(appId){
	        var deferred = $q.defer();
	        console.log(Session.userId);
	        console.log(Session.id);
	        console.log(Session.companyId);
	        $http({
	            method:'POST',
	            url:httpservice.myproduct_insert_histery,
	            params:{
	                'userId':Session.userId,
	                'sessionId':Session.id,
	                'companyId':Session.companyId,
	                'appId':appId
	            }
	        }).then(function successCallback(response){
	                deferred.resolve(response.data);
	            },function errorCallback(response){
	                console.log("MProService 我的应用  添加操作历史 失败");
	                deferred.reject(response.data);
	            }
	        );
	        return deferred.promise;
	    };


	    return MProService;
	};

/***/ },
/* 16 */
/***/ function(module, exports) {

	/**
	 * Created by vision on 16/2/16.
	 */
	module.exports = function($scope,$state,BProService){
	    //var vm=this;

	    $scope.pros={};

	    BProService.select($scope.pros,$scope.menus).then(function (data) {
	        console.log(data.pro);
	        $scope.pros = data.pro;
	        $scope.totalPage = data.totalPage;
	        $scope.nowPage = data.nowPage;
	        $scope.id = data.id;
	        $scope.totalPas = data.totalPas;
	        $scope.currentPage = data.page;
	        $scope.searchName = data.searchName;
	        //console.log('Selectsuccess');
	    }, function () {
	        console.log('Selectfaild  企业应用');
	    });

	    //订阅动态改变参数
	    $scope.changeImg = function(appId,flowId,isApprove,flag){
	        //要转换的状态
	        BProService.dingyue(appId,flowId,isApprove,flag).then(function (data) {
	            var dingYueStatus = data.flag;
	            //返回值为true的时候，更新状态成功
	            if(dingYueStatus==true){
	                if(flag==1){

	                    for(var i=0;i<$scope.pros.length;i++){
	                        if($scope.pros[i]['appId']==appId ){
	                            $scope.pros[i]['station']="订阅中";
	                        }
	                    }
	                }else if(flag==2){

	                    for(var i=0;i<$scope.pros.length;i++){
	                        if($scope.pros[i]['appId']==appId){
	                            $scope.pros[i]['station']="取消中";
	                        }
	                    }
	                }else{

	                    for(var i=0;i<$scope.pros.length;i++){
	                        if($scope.pros[i]['appId']==appId){
	                            $scope.pros[i]['station']="取消中";
	                        }
	                    }
	                }
	            }else{
	                console.log('状态更新失败！返回值='+data.flag);
	            }
	        },function(){
	            console.log('状态更新失败！');
	        });
	    };
	    //页面跳转到详情页
	    $scope.detailsGo = function(id,appId,flowId,sortID){
	        console.log(id,appId,flowId);
	        $state.go('details.details',{id:id,appId:appId,flowId:flowId,sortID:sortID});
	    };
	    /**
	     * 搜索按钮的功能
	     * @param id
	     */
	    $scope.searchImg = function(){
	        var searchName = $('#yyNameId').val();

	        BProService.searchNameEvent(searchName).then(function (data) {
	            $scope.pros = data.pro;
	            $scope.totalPage = data.totalPage;
	            $scope.nowPage = data.nowPage;
	            $scope.id = data.id;
	            $scope.totalPas = data.totalPas;
	            $scope.currentPage = data.page;
	            $scope.searchName = searchName;
	            $('#yyNameId').val(searchName);
	        },function(){
	            console.log('我的应用查询失败！');
	        });
	    };




	};



/***/ },
/* 17 */
/***/ function(module, exports) {

	
	module.exports = function($scope,$state,BProService){
	    $scope.thistory = {};
	    $scope.menus={};
	    //TOP10历史查询
	    BProService.gettHistory($scope.thistory).then(function(data){
	        $scope.thistory = data.his;
	        console.log($scope.thistory);
	    },function(){
	        console.log('Selectfaild  菜单栏');
	    });
	    //页面跳转到详情页
	    $scope.detailsGo = function(id,appId,flowId,sortID){
	        console.log(id,appId,flowId);
	        $state.go('details.details',{id:id,appId:appId,flowId:flowId,sortID:sortID});
	    };
	    //菜单栏
	    BProService.getMenu($scope.menus).then(function(data){
	        $scope.menus = data.menuList;
	        //console.log( $scope.menus);
	    },function(){
	        console.log('Selectfaild  菜单栏');
	    });
	    //TOP10跳转至详情页
	    $scope.showFunc =function(url){
	        window.open(url);
	    }
	    //控制TOP10图片显隐
	    $scope.showImg = function(appId){
	        $('#'+appId+"-thsid").show();
	        /* $('#'+sortId+"-"+useId+"-pid").css("line-height","14px");
	         $('#'+sortId+"-"+useId+"-sid").css("margin-left","0px").css("margin-top","0px");*/
	    };

	    $scope.hideImg = function(appId){
	        $('#'+appId+"-thsid").hide();
	        /*  $('#'+sortId+"-"+useId+"-pid").css("line-height","39px");
	         $('#'+sortId+"-"+useId+"-sid").css("margin-left","-20px").css("margin-top","-12px");*/
	    };
	}


/***/ },
/* 18 */
/***/ function(module, exports) {

	/**
	 * Created by vision on 16/2/16.
	 *
	 * 企业应用
	 *
	 * @param $stateParams
	 * @param $http
	 * @param $q
	 * @returns {{}}
	 */
	module.exports = function ($stateParams,$http, $q,httpservice,Session) {
	    //var menuid = $stateParams.id;
	    var BProService = {};
	    BProService.select=function () {

	        var deferred = $q.defer();
	        //当前页
	        var maxPage = $stateParams.page;
	        if(maxPage == ""){
	            maxPage = 1;
	        }
	        //总页数
	        var total = $stateParams.total;
	        //如果总页数为空，则表示第一次访问
	        if(total != null){
	            //判断总页数和当前页数大小范围
	            if(total <= maxPage){
	                maxPage = total;
	            }
	            if(maxPage<=0){
	                maxPage = 1;
	            }
	        }
	        //初次进入的时候，菜单id=null；默认赋值为0；
	        var menuid = $stateParams.id;
	        if(menuid == undefined || menuid==null || menuid==""){
	            menuid = $stateParams.id = 0;
	        }

	        //搜索功能
	        var searchName =  $stateParams.searchName;
	        $('#yyNameId').val(searchName);

	        //每页显示条数
	        var everpage = httpservice.productEverPageNum;
	        if($stateParams.sortId == "" || $stateParams.sortId==undefined || $stateParams.sortId==null){
	            $stateParams.sortId = 0;
	        }
	        $http({
	            method: 'GET',
	            url: httpservice.busproduct,
	            params: {
	                'clas':"q",
	                'page':maxPage,
	                'pageSize':everpage,
	                'sessionId':Session.id,
	                'searchName':searchName,
	                'companyId':Session.companyId,
	                'userId':Session.userId,
	                'sortId':$stateParams.id
	            }
	        }).then(function successCallback(response) {
	            var totalPas = {};
	            //获取总页数
	            var totalPage = response.data.total;

	            for(var i=1;i<=totalPage;i++){
	                totalPas[i-1] = i;
	            }
	            //设置当前页和总页数
	            response.data.totalPage = totalPage;
	            response.data.nowPage = maxPage+"/"+totalPage;
	            response.data.totalPas = totalPas;
	            response.data.currentPage = $stateParams.currentPage;
	            response.data.id = $stateParams.id;
	            response.data.page = maxPage;
	            response.data.searchName = $stateParams.searchName;
	            deferred.resolve(response.data);
	        }, function errorCallback(response) {
	            // called asynchronously if an error occurs
	            // or server returns response with an error status.
	            deferred.reject(response);
	        });
	        return deferred.promise;
	    };

	    //订阅和取消订阅
	    BProService.dingyue = function(appId,flowId,isApprove,flag){
	        var deferred = $q.defer();
	        var status = 1;
	        //对状态status(1,2,3)判断
	        if(flag==2 || flag==3){
	            status = 2;
	        }
	        //console.log("apId="+appId+",flowId="+flowId+",userId="+Session.userId);
	        $http({
	            method: 'GET',
	            //订阅获取取消订阅的状态转换
	            url: httpservice.subscribe,
	            params: {'userId':Session.userId,'appId':appId,'status':status,'sessionId':Session.id,'companyId':Session.companyId,'flowId':flowId,'isApprove':isApprove}
	        }).then(function successCallback(response) {
	            deferred.resolve(response.data);
	        }, function errorCallback(response) {
	            deferred.reject(response);
	        });
	        return deferred.promise;
	    };
	    //搜索查询事件
	    BProService.searchNameEvent = function(searchName){
	        var deferred = $q.defer();
	        //将查询到的搜索内容存入到路由状态中，以便分页使用
	        $stateParams.searchName = searchName;
	        $http({
	            method: 'GET',
	            //搜索查询事件，带分页
	            url: httpservice.busproduct_like,
	            params: {'userId':Session.userId,'appId':$stateParams.appId,'searchName':searchName,'sessionId':Session.id,'companyId':Session.companyId,'sortId':$stateParams.sortId}

	        }).then(function successCallback(response) {
	            var currentPage = 1;
	            var totalPas = {};
	            //获取总页数
	            var totalPage = response.data.total;
	            for(var i=1;i<=totalPage;i++){
	                totalPas[i-1] = i;
	            }
	            //设置当前页和总页数
	            response.data.totalPage = totalPage;
	            response.data.nowPage = currentPage+"/"+totalPage;
	            response.data.totalPas = totalPas;
	            response.data.currentPage = $stateParams.currentPage=currentPage;
	            response.data.id = $stateParams.id;
	            response.data.page = currentPage;
	            deferred.resolve(response.data);
	        }, function errorCallback(response) {
	            deferred.reject(response);
	        });
	        return deferred.promise;
	    };

	    //菜单栏
	    BProService.getMenu = function(){
	        var deferred = $q.defer();
	        $http({
	            method:'GET',
	            url:httpservice.menu,
	            params:{'userId':Session.userId,'sessionId':Session.id,'clas':'q','companyId':Session.companyId}
	        }).then(function successCallback(response){
	                //console.log(response);
	                deferred.resolve(response.data);
	            },function errorCallback(response){
	                deferred.reject(response.data);
	            }
	        );
	        return deferred.promise;
	    };

	    //历史查询
	    BProService.gettHistory = function(){
	        var deferred = $q.defer();
	        $http({
	            method:'GET',
	            url:httpservice.thistoryBussiness,
	            params:{'userId':Session.userId,'sessionId':Session.id,'companyId':Session.companyId,'appId':$stateParams.id}
	        }).then(function successCallback(response){
	                deferred.resolve(response.data);
	            },function errorCallback(response){
	                deferred.reject(response.data);
	            }
	        );
	        return deferred.promise;
	    };


	    return BProService;
	};


/***/ },
/* 19 */
/***/ function(module, exports) {

	/**
	 * Created by vision on 16/2/13.
	 */
	module.exports= function($scope,$stateParams,DProService,BProService){

	    $scope.pros={};
	    $scope.attention = {};
	    DProService.select($scope.pros,$scope.menu).then(function (data) {
	        $scope.pros = data.pro;
	        console.log('+++++++++++'+data);
	        console.log(data.pro.language);
	        $scope.language = data.pro.language;
	        console.log($scope.language);
	        if( $scope.language == '1'){
	            $scope.language = '中文';
	        }else if($scope.language == '2'){
	            $scope.language = '英语';
	        }else if($scope.language == '3'){
	            $scope.language = '法语';
	        }else{
	            $scope.language = '俄语';
	        }
	        localStorage.VSER =  data.pro.version;//存储版本号
	        localStorage.rovio = data.pro.developers;//存储开发商名字
	        localStorage.kindApp = data.pro.fatherclass; //存储应用类别
	        localStorage.sortIdDetails = data.pro.sortId;//存储sortId
	        if( $scope.pros.attention == '订阅中'|| $scope.pros.attention == '取消中'){
	            $('.up_dingyue button.upd').css('background','#cccccc');
	        }
	    }, function () {
	        console.log('Selectfaild 产品详情');
	    });

	    //分享功能---复制链接
	    $scope.copyText = function() {
	        $('a[rel]').zclip({path:'/PacteraApp/framework/js/ZeroClipboard.swf', copy: function () { return $(this.getAttribute('rel')).html(); } });
	    };

	    $scope.DingYue = function(appId,flowId,isApprove){
	        //要转换的状态
	        console.log($scope.pros.attention);
	        if($scope.pros.attention == '可订阅' || $scope.pros.attention == '取消订阅'){
	            if($scope.pros.attention == '可订阅'){
	                $scope.status = 1;
	                DProService.dingyue(appId,flowId,isApprove,$scope.status).then(function (data) {
	                    var dingYueStatus = data.flag;
	                    //返回值为true的时候，更新状态成功
	                    if(dingYueStatus==true){
	                       $scope.pros.attention = '订阅中';
	                       $('.up_dingyue button.upd').css('background','#cccccc');
	                    }else{
	                       console.log('状态更新失败！返回值='+data);
	                    }
	                },function(){
	                    console.log('状态更新失败！');
	                });
	            }else{
	                $scope.status = 2;
	                DProService.dingyue(appId,flowId,isApprove,$scope.status).then(function (data) {
	                    var dingYueStatus = data.flag;
	                    //返回值为true的时候，更新状态成功
	                    if(dingYueStatus==true){
	                        $scope.pros.attention = '取消中';
	                        $('.up_dingyue button.upd').css('background','#cccccc');
	                    }else{
	                        console.log('状态更新失败！返回值='+data);
	                    }
	                },function(){
	                    console.log('状态更新失败！');
	                });
	            }

	        }
	    };

	    ///*
	    //* 订阅查寻功能，
	    //* */
	    //$scope.dingYue = function(appId,flowId){
	    //  //  console.log("++++++++"+appId+"++++++++"+flowId);
	    //    DProService.seleData(appId,flowId).then(function sucessCallback(data){
	    //        console.log(data);
	    //        $scope.attention
	    //        //$scope.newVer = data;
	    //    },function errorCallback(){
	    //
	    //    });
	    //};
	   // $scope.dingYue($stateParams.appId,$stateParams.flowId,flag);//页面加载，执行查寻方法
	};



/***/ },
/* 20 */
/***/ function(module, exports) {

	module.exports= function($scope,$stateParams,DProDetailsService){
	    $scope.sLength;
	    $scope.num = 0;
	    $scope.intLi = 4;
	    $scope.lWidth = -230;
	    //详情页面数据
	    $scope.classMenuList={};
	    $scope.textArea={};
	    $scope.textArea_2={};

	    //控制图标显示，隐藏
	    $('.s_img_xia').mouseover(function(){
	        $('.jjj_L_img').fadeIn(0);
	        $('.jjj_R_img').fadeIn(0);
	    });
	    $('.s_img_xia').mouseleave(function(){
	        $('.jjj_L_img').fadeOut(100);
	        $('.jjj_R_img').fadeOut(100);
	    });
	    //图片想左滑动
	    $scope.jjj_L_img = function(){
	        if($scope.num>0){
	            $scope.num = $scope.num -1;
	            $('.s_img_xia_div').animate({left:  $scope.num*$scope.lWidth+'px'});
	            $scope.sLength =  $scope.sLength+1;
	        }
	    };
	    //图片向右滑动
	    $scope.jjj_R_img = function(){
	        if( $scope.sLength>4){
	            $scope.num = $scope.num+1;
	            $('.s_img_xia_div').animate({left:$scope.num*$scope.lWidth+'px'});
	            $scope.sLength =  $scope.sLength - 1;
	        }
	    };
	    //查询基本数据
	    DProDetailsService.select().then(function (data) {
	       // alert(6666666);
	        console.log(data);
	        $scope.pros = data.pro;
	        $scope.classMenuList = data.pro.detailsImages;
	        //$scope.visur =  data.pro.version;
	        $scope.visur =data.pro.versionText;
	        if(data.pro.textArea!=null&&data.pro.textArea!=''&&data.pro.textArea!=undefined){
	            var textArea = data.pro.textArea;
	            // var textArea = '<p>加速将诞生</p><p>滴啥打算</p><p>和和弧度飒爽的武器很大气</p>';
	            textArea = del_html_tags(textArea,"</p>",",");
	            textArea = del_html_tags(textArea,"<p>","");
	            $scope.textArea = textArea.split(',');
	        }
	        for(var i = 0; i<= $scope.textArea.length; i++){
	            if($scope.textArea[i] == null || $scope.textArea[i] == ''||$scope.textArea[i] ==undefined){
	                $scope.textArea.splice(i,1);
	            }
	        }
	       if(data.pro.textArea_2!=null&&data.pro.textArea_2!=''&&data.pro.textArea_2!=undefined){
	           var textArea_2 = data.pro.textArea_2;
	           // var textArea_2 = '<p>加速将诞生</p><p>回回回</p><p>会hiUShi电弧文化</p>';
	           textArea_2 = del_html_tags(textArea_2,"</p>",",");
	           textArea_2 = del_html_tags(textArea_2,"<p>","");
	           $scope.textArea_2 = textArea_2.split(',');
	       }

	        for(var i = 0; i<= $scope.textArea_2.length; i++){
	            if($scope.textArea_2[i] == null || $scope.textArea_2[i] == ''||$scope.textArea_2[i] ==undefined){
	                $scope.textArea_2.splice(i,1);
	            }
	        }


	        $scope.sLength =  $scope.classMenuList.length ;
	        $('.s_img_xia_div').css('width',230*$scope.sLength+'px');

	    }, function () {
	        console.log('Selectfaild 产品详情');
	    });



	    //清除指定字符串的函数
	    function del_html_tags(str,reallyDo,replaceWith) {
	        var e=new RegExp(reallyDo,"g");
	        words = str.replace(e, replaceWith);
	        return words;
	    };

	}

/***/ },
/* 21 */
/***/ function(module, exports) {

	module.exports= function($scope,$stateParams,DProCommentService){
	        $scope.xingxinxg = 0;
	        $scope.numXing = 0;
	        $scope.b_t = 0;
	        $scope.id = 0;
	        $scope.value;
	      //  $scope.isall = false;
	         $scope.flag = false;
	        //默认提示框为隐藏
	        $scope.msgBoxShow_saveBu=false;
	        $scope.msgBoxShow_saveBu_2=false;
	        //关闭保存错误提示框
	        $scope.closeMsgBox_saveBu=function(){
	                $scope.msgBoxShow_saveBu=false;
	        };
	        $scope.closeMsgBox_saveBu_2=function(){
	                $scope.msgBoxShow_saveBu_2=false;
	        };


	        //查询基本数据
	        $scope.selectXiang = function(){
	                DProCommentService.selectXiang().then(function sucessCallback(data){
	                        console.log(data);
	                        $scope.flag = data.flag;
	                        if($scope.flag == true) {
	                            $scope.numXing = data.review.rate;
	                            $scope.id = data.review.id;
	                            $scope.value = data.review.text;
	                        }

	                        $scope.number = data.number;
	                        if( $scope.number == ''|| $scope.number == null || $scope.number == undefined){
	                                $scope.number = 0;
	                        }
	                        $scope.total = data.total;
	                        if( $scope.total == ''|| $scope.total == null || $scope.total == undefined){
	                                $scope.total = 0;
	                        }
	                        $scope.avg = data.avg;
	                        
	                        $("#xiangqing_qu_cong").html('');
	                        if(data.avg == 0){
	                                for(var i = 0; i<  5; i++){
	                                        $("#xiangqing_qu_cong").append("<img class='xinxin_img_2' src='images/xiangqing/2-2.png'/>");
	                                }
	                        }else{
	                                for(var i = 0; i<  $scope.avg; i++){
	                                        $("#xiangqing_qu_cong").append("<img class='xinxin_img' src='images/xiangqing/2-4.png'/>");
	                                }
	                                for(var i = 0; i<  5-$scope.avg; i++){
	                                        $("#xiangqing_qu_cong").append("<img class='xinxin_img_2' src='images/xiangqing/2-2.png'/>");
	                                }
	                        }


	                        $scope.pros = data.pro;
	                        console.log($scope.pros);

	                       $('.ul_a').html('');
	                       var pros = data.pro;
	                        $scope.b_t = 0;
	                        for(var i = 0; i<pros.length;i++){

	                              $('.ul_a').append("<li></li>");

	                        }

	                        $('.ul_a li').each(function(){

	                                $(this).append("<span id='pinglun_qu_pinglun_span'>"+pros[$scope.b_t].userName +"</span>");
	                                if(pros[$scope.b_t].rate == 0){
	                                        $(this).append("<img class='xinxin_img_2_a' src='images/xiangqing/2-3.png'/>"+
	                                                         "<img class='xinxin_img_2_a' src='images/xiangqing/2-3.png'/>"+
	                                                         "<img class='xinxin_img_2_a' src='images/xiangqing/2-3.png'/>"+
	                                                         "<img class='xinxin_img_2_a' src='images/xiangqing/2-3.png'/>"+
	                                                         "<img class='xinxin_img_2_a' src='images/xiangqing/2-3.png'/>");
	                                }else if(pros[$scope.b_t].rate == 1){
	                                        $(this).append("<img class='xinxin_img_a' src='images/xiangqing/2-4.png'/>"+
	                                                            "<img class='xinxin_img_2_a' src='images/xiangqing/2-3.png'/>"+
	                                                            "<img class='xinxin_img_2_a' src='images/xiangqing/2-3.png'/>"+
	                                                            "<img class='xinxin_img_2_a' src='images/xiangqing/2-3.png'/>"+
	                                                            "<img class='xinxin_img_2_a' src='images/xiangqing/2-3.png'/>");
	                                }else if(pros[$scope.b_t].rate == 2){
	                                        $(this).append("<img class='xinxin_img_a' src='images/xiangqing/2-4.png'/>"+
	                                            "<img class='xinxin_img_a' src='images/xiangqing/2-4.png'/>"+
	                                            "<img class='xinxin_img_2_a' src='images/xiangqing/2-3.png'/>"+
	                                            "<img class='xinxin_img_2_a' src='images/xiangqing/2-3.png'/>"+
	                                            "<img class='xinxin_img_2_a' src='images/xiangqing/2-3.png'/>");
	                                }else if(pros[$scope.b_t].rate == 3){
	                                        $(this).append("<img class='xinxin_img_a' src='images/xiangqing/2-4.png'/>"+
	                                            "<img class='xinxin_img_a' src='images/xiangqing/2-4.png'/>"+
	                                            "<img class='xinxin_img_a' src='images/xiangqing/2-4.png'/>"+
	                                            "<img class='xinxin_img_2_a' src='images/xiangqing/2-3.png'/>"+
	                                            "<img class='xinxin_img_2_a' src='images/xiangqing/2-3.png'/>");
	                                }else if(pros[$scope.b_t].rate == 4){
	                                        $(this).append("<img class='xinxin_img_a' src='images/xiangqing/2-4.png'/>"+
	                                            "<img class='xinxin_img_a' src='images/xiangqing/2-4.png'/>"+
	                                            "<img class='xinxin_img_a' src='images/xiangqing/2-4.png'/>"+
	                                            "<img class='xinxin_img_a' src='images/xiangqing/2-4.png'/>"+
	                                            "<img class='xinxin_img_2_a' src='images/xiangqing/2-3.png'/>");
	                                }else{
	                                        $(this).append("<img class='xinxin_img_a' src='images/xiangqing/2-4.png'/>"+
	                                            "<img class='xinxin_img_a' src='images/xiangqing/2-4.png'/>"+
	                                            "<img class='xinxin_img_a' src='images/xiangqing/2-4.png'/>"+
	                                            "<img class='xinxin_img_a' src='images/xiangqing/2-4.png'/>"+
	                                            "<img class='xinxin_img_a' src='images/xiangqing/2-4.png'/>");
	                                }

	                                $(this).append("<span class='timer_span'>"+pros[$scope.b_t].creaTime  + "</span>");
	                                $(this).append("<p>"+ pros[$scope.b_t].text+"</p>");


	                                $scope.b_t = $scope.b_t+1;
	                        });


	                        //星星点击的方法
	                        var stepW = 24;
	                        var stars = $("#star > li");
	                        if($scope.flag == true){

	                            $("#showb").css({"width":stepW*$scope.numXing});
	                            stars.each(function(i){

	                                $(stars[i]).click(function(e){
	                                    var n = i+1;
	                                    $scope.xingxinxg = n;
	                                    $("#showb").css({"width":stepW*n});
	                                    //  descriptionTemp = description[i];
	                                    $(this).find('a').blur();
	                                    return stopDefault(e);
	                                    //   return descriptionTemp;
	                                });
	                            });
	                        }else{

	                                $("#showb").css("width",0);
	                                stars.each(function(i){

	                                        $(stars[i]).click(function(e){
	                                                var n = i+1;
	                                                $scope.xingxinxg = n;
	                                                $("#showb").css({"width":stepW*n});
	                                                //  descriptionTemp = description[i];
	                                                $(this).find('a').blur();
	                                                return stopDefault(e);
	                                                //   return descriptionTemp;
	                                        });
	                                });
	                        }
	                        function stopDefault(e){
	                                if(e && e.preventDefault)
	                                        e.preventDefault();
	                                else
	                                        window.event.returnValue = false;
	                                return false;
	                        };

	                    },function errorCallback(){

	                    });
	        };
	        $scope.selectXiang();



	        //评论方法
	        $scope.pinglun = function(){
	                if($scope.flag == true){

	                    $('#pinglunqu').html($scope.value);
	                    $('.pinglunqu').css('display','block');
	                }else{
	                     $('.pinglunqu').css('display','block');
	                }

	        };
	        //取消方法
	        $scope.close = function(){
	                $('.pinglunqu').css('display','none');
	        };
	        //评论提交方法
	        $scope.submit = function(){

	                var pingCon = $('.pinglunqu textarea').val();

	                console.log(pingCon);
	                if($scope.xingxinxg == 0){
	                        $scope.msgBoxShow_saveBu = true;
	                        $scope.testBuResult='请选择星星等级';
	                }
	                else if(pingCon == ''|| pingCon == null || pingCon == undefined){
	                        $scope.msgBoxShow_saveBu = true;
	                        $scope.testBuResult='请输入评论内容';
	                }
	                else{
	                        DProCommentService.submit(pingCon,$scope.xingxinxg,$scope.id,$scope.isall).then(function sucessCallback(data){
	                                console.log(data);
	                               if(data.flag == true){
	                                       $('.pinglunqu').css('display','none');
	                                       $scope.msgBoxShow_saveBu_2 = true;
	                                       $scope.testBuResult_2='提交成功';
	                                       $('.pinglunqu textarea').val('');//清空文本框中的值
	                                       setTimeout(function(){
	                                               $scope.selectXiang();//提交成功之后，调用查询方法
	                                       },500)
	                               }
	                        },function errorCallback(){

	                        });
	                }
	        };
	}

/***/ },
/* 22 */
/***/ function(module, exports) {

	module.exports= function($scope,$stateParams,DProCorrelationService){
	    $scope.rovio = localStorage.rovio;
	    $scope.kindApp = localStorage.kindApp +'类应用';
	    //查询基本数据-开发商的其他应用
	    $scope.selectXiang = function(){
	        DProCorrelationService.selectXiang().then(function sucessCallback(data){
	            $scope.pros =  data.pro;
	        },function errorCallback(){

	        });
	    };
	    $scope.selectXiang();
	    //查询基本数据-用户还使用
	    $scope.selectXiang_2 = function(){
	        DProCorrelationService.selectXiang_2().then(function sucessCallback(data){
	            $scope.pros_2 =  data.pro;
	        },function errorCallback(){

	        });
	    };
	    $scope.selectXiang_2();
	    //查询基本数据-分类
	    $scope.selectXiang_3 = function(){
	        DProCorrelationService.selectXiang_3().then(function sucessCallback(data){
	            $scope.pros_3 =  data.pro;
	        },function errorCallback(){

	        });
	    };
	    $scope.selectXiang_3();
	}


/***/ },
/* 23 */
/***/ function(module, exports) {

	module.exports = function ($stateParams,$http, $q,httpservice,Session) {
	    var DProCorrelationService = {};
	    DProCorrelationService.selectXiang = function(){
	        var sId = localStorage.sId;//获取当前的appId
	        var rovio = localStorage.rovio;//获取当前的开发商
	        var sortId = localStorage.sortIdDetails;//获取sortId
	        var deferred = $q.defer();
	        $http({
	            method: 'GET',
	            url: httpservice.selectDataImgBussinessPingLunXG,
	            params: {'userId':Session.userId,'companyId':Session.companyId,'appId':sId,'rovio':rovio}
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

	    DProCorrelationService.selectXiang_2 = function(){
	        var sId = localStorage.sId;//获取当前的appId
	        var rovio = localStorage.rovio;//获取当前的开发商
	        var deferred = $q.defer();
	        $http({
	            method: 'GET',
	            url: httpservice.selectDataImgBussinessPingLunXG_2,
	            params: {'userId':Session.userId,'companyId':Session.companyId,'appId':sId}
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

	    DProCorrelationService.selectXiang_3 = function(){
	        var sId = localStorage.sId;//获取当前的appId
	        var rovio = localStorage.rovio;//获取当前的开发商
	        var sortId = localStorage.sortIdDetails;//获取sortId
	        var deferred = $q.defer();
	        $http({
	            method: 'GET',
	            url: httpservice.selectDataImgBussinessPingLunXG_3,
	            params: {'userId':Session.userId,'companyId':Session.companyId,'appId':sId,'sortId':sortId}
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
	    return DProCorrelationService;

	}

/***/ },
/* 24 */
/***/ function(module, exports) {

	module.exports = function ($stateParams,$http, $q,httpservice,Session) {
	    var DProCommentService = {};
	    DProCommentService.selectXiang = function(){
	        var vse = localStorage.VSER;//获取当前的版本号
	        var sId = localStorage.sId;//获取当前的appId
	        var deferred = $q.defer();
	        $http({
	            method: 'GET',
	            url: httpservice.selectDataImgBussinessXiangqing,
	            params: {'userId':Session.userId,'companyId':Session.companyId,'appId':sId,'version':vse,'isall':false}
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
	    //评论方法
	    DProCommentService.submit = function(pingCon,attr,id){
	        var vse = localStorage.VSER;//获取当前的版本号
	        var sId = localStorage.sId;//获取当前的appId
	        var deferred = $q.defer();

	        $http({
	            method: 'POST',
	            url: httpservice.selectDataImgBussinessPingLun,
	            params: {'version':vse,'rate':attr,'id':id,'text':pingCon,'appId':sId,'userId':Session.userId,'companyId':Session.companyId}
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
	    return DProCommentService;
	}

/***/ },
/* 25 */
/***/ function(module, exports) {

	module.exports = function ($stateParams,$http, $q,httpservice,Session) {
	    localStorage.deID =  $stateParams.id;
	    localStorage.deflowId = $stateParams.flowId;
	    var DProDetailsService = {};
	    DProDetailsService.select = function() {
	        var sId = localStorage.sId;//获取当前的appId
	        var deferred = $q.defer();
	        $http({
	            method: 'GET',
	            url: httpservice.selectDataImgBussiness,
	            params: {
	                'id': localStorage.deID,
	                'appId': sId,
	                'userId': Session.userId,
	                'sessionId': Session.id,
	                'companyId': Session.companyId,
	                'flowId': localStorage.deflowId
	            }
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
	    return DProDetailsService;

	}


/***/ },
/* 26 */
/***/ function(module, exports) {

	/**
	 * Created by vision on 16/2/14.
	 *
	 * 详情
	 *
	 * @param $stateParams
	 * @param $http
	 * @param $q
	 * @returns {{}}
	 */
	module.exports = function ($stateParams,$http, $q,httpservice,Session) {
	    var DProService = {};
	    DProService.select=function () {
	        localStorage.sId = $stateParams.appId;//存储当前Id；
	        var deferred = $q.defer();
	        //console.log("id="+$stateParams.id+",appId="+$stateParams.appId+",flowId="+$stateParams.flowId);
	        $http({
	            method: 'GET',
	            url: httpservice.details,
	            params: {'id':$stateParams.id,'appId':$stateParams.appId,'userId':Session.userId,'sessionId':Session.id,'companyId':Session.companyId,'flowId':$stateParams.flowId}
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
	    //订阅方法
	    DProService.dingyue = function(appId,flowId,isApprove,status){
	        var deferred = $q.defer();
	        $http({
	            method: 'GET',
	            url: httpservice.subscribe_Manage_unDo,//需要改变接口
	            params: {'appId':appId,'userId':Session.userId,'companyId':Session.companyId,'flowId':flowId,'status':status,'isApprove':isApprove}
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
	    DProService.seleData = function(appId,flowId){
	        var deferred = $q.defer();
	        $http({
	            method:'GET',
	            url:httpservice.details,
	            params:{
	                'sessionId': Session.id,
	                'userId': Session.userId,
	                'companyId':Session.companyId
	            },
	            headers: {'Content-Type': undefined},
	            data:{appId:appId,flowId:flowId}
	        }).then(function successCallback(response){
	                deferred.resolve(response.data);
	            },function errorCallback(response){
	                console.log("DProService  应用详情_订阅:失败");
	                deferred.reject(response.data);
	            }
	        );
	        return deferred.promise;
	    }
	    return DProService;
	};


/***/ },
/* 27 */
/***/ function(module, exports) {

	/**
	 * Created by vision on 9/3/16.
	 */
	module.exports = function($scope,MCollService){
	    //接收事件，发送请求
	    $scope.$on('to-child', function(e, d) {
	        scloo($scope);
	    });
	    $scope.pros={};
	    var scloo=function(){
	        MCollService.scloo($scope).then(function (data) {
	            $scope.colls = data.pro;
	        }, function () {
	            console.log('Selectfaild  我的收藏');
	        });
	    };
	    scloo($scope);
	    $scope.showImg = function(appId){
	        $('#'+appId+"-id").show();
	        /* $('#'+appId+"-pid").css("line-height","14px");
	         $('#'+appId+"-sid").css("margin-left","0px").css("margin-top","0px");*/
	    };

	    $scope.hideImg = function(appId){
	        $('#'+appId+"-id").hide();
	        /*  $('#'+appId+"-pid").css("line-height","39px");
	         $('#'+appId+"-sid").css("margin-left","-20px").css("margin-top","-12px");*/
	    };
	    $scope.showFunc = function(url){
	        window.open(url);
	    }
	}

/***/ },
/* 28 */
/***/ function(module, exports) {

	/**
	 * Created by vision on 16/2/16.
	 *
	 * 企业应用
	 *
	 * @param $stateParams
	 * @param $http
	 * @param $q
	 * @returns {{}}
	 */
	module.exports = function ($stateParams,$http, $q,httpservice,Session) {

	    var MCollService = {};
	    MCollService.scloo=function () {
	        var deferred = $q.defer();

	        //初次进入的时候，菜单id=null；默认赋值为0；
	        var menuid = $stateParams.id;
	        if(menuid == undefined || menuid==null || menuid==""){
	            menuid = $stateParams.id = 0;
	        }

	        $http({
	            method: 'GET',
	            url: httpservice.MCollection,
	            //url: httpservice.busproduct,
	            params: {'appId':$stateParams.id,'sessionId':Session.id,'userId':Session.userId,'companyId':Session.companyId}
	        }).then(function successCallback(response) {
	            deferred.resolve(response.data);
	        }, function errorCallback(response) {
	            deferred.reject(response);
	        });
	        return deferred.promise;
	    };
	    return MCollService;
	};


/***/ },
/* 29 */
/***/ function(module, exports) {

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



/***/ },
/* 30 */
/***/ function(module, exports) {

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



/***/ },
/* 31 */
/***/ function(module, exports) {

	/**
	 * Created by Sky on 2016/3/8.
	 */
	module.exports=function($stateParams,$http,$q,httpservice){

	    var manageService = {};



	    manageService.nav=function(){

	    };

	};

/***/ },
/* 32 */
/***/ function(module, exports) {

	module.exports = function($stateParams,$http,$q,httpservice,Session){
	    var mailboxVerificationService = {};
	    mailboxVerificationService.mailSelect = function(code){
	        var deferred = $q.defer();
	        $http({
	            method:'POST',
	            url:httpservice.validationCodeEmail,
	            params:{
	                'validateCode':code
	            }
	        }).then(function successCallback(response){
	                deferred.resolve(response.data);
	            },function errorCallback(response){
	                deferred.reject(response.data);
	            }
	        );
	        return deferred.promise;
	    };

	    return mailboxVerificationService
	}

/***/ },
/* 33 */
/***/ function(module, exports) {

	/**
	 * Created by Sky on 2016/3/8.
	 */
	module.exports=function($rootScope,$scope,$location,Appsession){
	    //添加管理点击样式
	    $rootScope.mgBtnShowCor='login_2 selectColor_manage';
	    //add by HUA--end

	    $scope.navItems = [
	        {
	            id: 1,
	            title: '我的任务',
	            leaf:false
	        },
	        {
	            id:11,
	            title: '我的申请',
	            locationUrl:'manage.apply',
	            leaf:true
	        },
	        {
	            id: 12,
	            title: '我的待办',
	            locationUrl:'manage.todo',
	            leaf:true
	        },
	        {
	            id: 2,
	            title: '我的服务',
	            leaf:false
	        },
	        {
	            id: 21,
	            title: '我的分类',
	            locationUrl:'manage.myclass',
	            leaf:true
	        },
	        {
	            id: 22,
	            title: '我的订阅',
	            locationUrl:'manage.todo',
	            leaf:true
	        },
	        {
	            id: 23,
	            title: '我的收藏',
	            locationUrl:'manage.todo',
	            leaf:true
	        },
	        {
	            id: 3,
	            title: '企业应用',
	            leaf:false
	        },
	        {
	            id: 31,
	            title: '企业信息',
	            locationUrl:'manage.businessinfo',
	            leaf:true
	        },
	        {
	            id: 32,
	            title: '应用分类',
	            locationUrl:'manage.appclass',
	            leaf:true
	        },
	        {
	            id: 33,
	            title: '应用管理',
	            locationUrl:'manage.businessapp',
	            leaf:true
	        },
	        {
	            id: 4,
	            title: '应用设置',
	            leaf:false
	        },
	        {
	            id: 41,
	            title: '应用上架',
	            locationUrl:'manage.appadded({Status:0,BiaoShi:"应用上架"})',
	            leaf:true
	        },
	        {
	            id: 5,
	            title: '其他设置',
	            leaf:false
	        },
	        {
	            id: 51,
	            title: '个人信息',
	            locationUrl:'manage.appadded({Status:0,BiaoShi:"应用上架"})',
	            leaf:true
	        }
	        /*,{
	         id: 52,
	         title: '账号安全',
	         locationUrl:'manage.accountsecurity',
	         leaf:true
	         }*/
	    ];

	    $scope.cleanAppId = function(){
	        console.log('+++++');
	        Appsession.destroy();
	    };
	    //定义我的订阅，企业信息，应用分类点击样式--end
	};

/***/ },
/* 34 */
/***/ function(module, exports) {

	/**
	 * Created by Sky on 2016/3/8.
	 */
	module.exports = function ($stateParams, $http, $q, httpservice, Session) {
	    var applyMgService = {};
	    //获取我的申请列表数据
	    applyMgService.apply = function (applyStatus,currentPage,searchTitle) {
	        var deferred = $q.defer();
	   /* $http.jsonp(httpservice.applyManage,{
	            method: 'GET',
	            params: { callback:"JSON_CALLBACK",
	                'sessionId': Session.id,'userId': Session.userId,'status':applyStatus,'page':currentPage,'pageSize':8,'companyId':Session.companyId,'searchTitle':searchTitle }
	        }).then(function successCallback(response) {*/
	        $http({
	            method: 'GET',
	            url:httpservice.applyManage,
	            params: {'sessionId': Session.id,'userId': Session.userId,'status':applyStatus,'page':currentPage,'pageSize':8,'companyId':Session.companyId,'searchTitle':searchTitle }
	        }).then(function successCallback(response) {
	                //当前页
	                var maxPage = currentPage;
	                if(maxPage === ""){
	                    maxPage = 1;
	                }
	                //总页数
	                var total = response.data.total;
	                var startPage = response.data.startPage;
	                var endPage = response.data.endPage;
	                if(total <= maxPage){
	                    maxPage = total;
	                }
	                if(maxPage<=0){
	                    maxPage = 1;
	                }
	                var totalPas = {};

	                for(var i=startPage;i<=endPage;i++){
	                    totalPas[i-1] = i;
	                }
	                //设置当前页和总页数
	                response.data.totalPage =total;
	                response.data.nowPage = maxPage+"/"+total;
	                response.data.totalPas = totalPas;
	                response.data.page = maxPage;
	                deferred.resolve(response.data);
	            }, function errorCallback(response) {
	                deferred.reject(response.data);
	            }
	        );
	        return deferred.promise;
	    };
	    return applyMgService;
	};

/***/ },
/* 35 */
/***/ function(module, exports) {

	/**
	 * Created by Sky on 2016/3/8.
	 */
	module.exports=function($scope,$stateParams,applyMgService){
	    $scope.applyMgs={};
	    if($stateParams.applyStatus==null||$stateParams.applyStatus==undefined||$stateParams.applyStatus=='')
	    {
	        $scope.applyStatus=0;
	    }
	    else
	    {
	        $scope.applyStatus=$stateParams.applyStatus;
	    }
	    if($scope.applyStatus==0)
	    {
	        $scope.border_color_red='selectColor_manage borderBottom';
	        $scope.border_color_red1='';
	    }
	    else
	    {
	        $scope.border_color_red='';
	        $scope.border_color_red1='selectColor_manage borderBottom';
	    }
	    $scope.currentPage=1;
	    $scope.searchTitle='';
	    if( $scope.applyStatus==0)
	    {
	        $scope.selectDisableCor='';
	        $scope.selectStatus=false;
	        $scope.statusList=[{'value':'0','name':'审批状态'},{'value':'1','name':'处理中'},{'value':'2','name':'已拒绝'},{'value':'3','name':'已完成'}];
	        $scope.corShow1="colRed borderBottom";
	    }
	    else if( $scope.applyStatus==1)
	    {
	        $scope.selectDisableCor='selectDisableCor';
	        $scope.selectStatus=true;
	        $scope.statusList=[{'value':'1','name':'审批状态'}];
	        $scope.corShow2="colRed borderBottom";
	    }

	    //获取我的申请列表数据
	    $scope.getList=function(applyStatus,currentPage,searchTitle){
	        applyMgService.apply(applyStatus,currentPage,searchTitle).then(function(data){
	            console.log(data);
	            $scope.applyMgs=data.data;
	            $scope.totalPage = data.totalPage;
	            $scope.nowPage = data.nowPage;
	            $scope.id = data.id;
	            $scope.totalPas = data.totalPas;
	            $scope.currentPage = data.page;
	        },function(){
	            console.log('applyController 管理_我的任务_我的申请:我的申请列表加载失败！');
	        });
	    };
	    //初始化该页面调用全部数据
	    $scope.getList($scope.applyStatus,$scope.currentPage,$scope.searchTitle);
	    //点击改变页码
	    $scope.changePage=function(currentPage){
	        if(currentPage <= $scope.totalPage&&currentPage>0 )
	        {
	            $scope.getList($scope.applyStatus,currentPage,$scope.searchTitle);
	        }
	        else
	        {
	            console.log('applyController 管理_我的任务_我的申请:我的申请列表页码越界');
	        }
	    };
	   /* //点击取消按钮事件
	    $scope.operationCancel=function(flowId,taskId){
	        applyMgService.operationCancel(flowId,taskId).then(function(data){
	            $scope.applyMgs=data.data;
	            $scope.totalPage = data.totalPage;
	            $scope.nowPage = data.nowPage;
	            $scope.totalPas = data.totalPas;
	            $scope.currentPage = data.page;
	        },function(){
	            console.log('applyController 管理_我的任务_我的申请:取消我的申请失败！');
	        });
	    };*/
	    //点击搜索按钮事件
	    $scope.operationSearch=function(searchTitle){
	        var applyStatus=$scope.applyStatus;
	        $scope.searchTitle=searchTitle;
	        //获取我的申请列表
	        $scope.getList( applyStatus,1,searchTitle);
	    };
	    //点击列表状态下拉菜单
	    $scope.onChange=function(applyStatus){
	        $scope.applyStatus=applyStatus;
	        $scope.getList( applyStatus,1,$scope.searchTitle);
	    };

	};

/***/ },
/* 36 */
/***/ function(module, exports) {

	/**
	 * Created by Sky on 2016/3/21.
	 */
	module.exports=function($stateParams,$http,$q,httpservice,Session) {
	    var applyDetailMgService = {};
	    //查看我的申请详情
	    applyDetailMgService.openDetail = function () {
	        var deferred = $q.defer();
	       /* $http.jsonp( httpservice.applyDetail,{
	            method: 'GET',
	            params: { callback:"JSON_CALLBACK",
	                'sessionId': Session.id,'userId': Session.userId,'companyId':Session.companyId,'flowId':$stateParams.flowId,'taskId':$stateParams.taskId }
	        }).then(function successCallback(response) {*/
	       $http({
	            method: 'GET',
	            url: httpservice.applyDetail,
	            params: { 'sessionId': Session.id,'userId': Session.userId,'companyId':Session.companyId,'flowId':$stateParams.flowId,'taskId':$stateParams.taskId}
	        }).then(function successCallback(response) {
	                deferred.resolve(response.data);
	            }, function errorCallback(response) {
	                deferred.reject(response.data);
	            }
	        );
	        return deferred.promise;
	    };
	    return applyDetailMgService;
	};

/***/ },
/* 37 */
/***/ function(module, exports) {

	/**
	 * Created by Sky on 2016/3/21.
	 */
	module.exports=function($scope,$stateParams,applyDetailMgService) {
	    $scope.applyStatus=$stateParams.applyStatus;
	    applyDetailMgService.openDetail().then(function (data) {
	        $scope.applyDetail = data;
	    }, function () {
	        console.log('applyDetailController 管理_我的任务_我的申请:查看申请详情失败！');
	    });
	};

/***/ },
/* 38 */
/***/ function(module, exports) {

	/**
	 * Created by Sky on 2016/3/21.
	 */
	module.exports=function($stateParams,$http,$q,httpservice,Session) {
	    var applyProcessMgService = {};
	    //查看我的申请流程图
	    applyProcessMgService.openImg = function () {
	        var deferred = $q.defer();
	       /* $http.jsonp(httpservice.applyProcess,{
	            method: 'GET',
	            params: { callback:"JSON_CALLBACK",
	                'sessionId': Session.id,'userId': Session.userId,'companyId':Session.companyId,'flowId':$stateParams.flowId,'taskId':$stateParams.taskId}
	        }).then(function successCallback(response) {*/
	        $http({
	                 method: 'GET',
	                 url: httpservice.applyProcess,
	                 params: { 'sessionId': Session.id,'userId': Session.userId,'companyId':Session.companyId,'flowId':$stateParams.flowId,'taskId':$stateParams.taskId}
	                 }).then(function successCallback(response) {
	                deferred.resolve(response.data);
	            }, function errorCallback(response) {
	                deferred.reject(response.data);
	            }
	        );
	        return deferred.promise;
	    };
	    return applyProcessMgService;
	};

/***/ },
/* 39 */
/***/ function(module, exports) {

	/**
	 * Created by Sky on 2016/3/21.
	 */
	module.exports=function($scope,$stateParams,applyProcessMgService) {
	    /* $scope.detailsShow=true;*/
	    /* $rootScope.fadeShow=true;*/
	    $scope.applyStatus=$stateParams.applyStatus;
	    applyProcessMgService.openImg().then(function (data) {
	        $scope.imgUrl = data.imgUrl;
	          }, function () {
	        console.log('applyProcessController 管理_我的任务_我的申请:查看申请流程图失败！');
	    });
	};

/***/ },
/* 40 */
/***/ function(module, exports) {

	/**
	 * Created by Sky on 2016/3/8.
	 */
	module.exports=function($stateParams,$http,$q,httpservice,Session){

	    var todoMgService = {};
	    todoMgService.todo = function (todoStatus,currentPage,searchTitle) {

	        var deferred = $q.defer();
	      /* $http.jsonp(httpservice.todoManage,{
	            method: 'GET',
	            params: { callback:"JSON_CALLBACK",
	                'sessionId': Session.id,'userId': Session.userId,'todoStatus':todoStatus,'companyId':Session.companyId,'searchTitle':searchTitle,'page':currentPage,'pageSize':6}
	        }).then(function successCallback(response) {*/
	       $http({
	            method: 'GET',
	            url:httpservice.todoManage,
	            params: {
	            'sessionId': Session.id,'userId': Session.userId,'todoStatus':todoStatus,'companyId':Session.companyId,'searchTitle':searchTitle,'page':currentPage,'pageSize':8}
	        }).then(function successCallback(response) {
	                //当前页
	                var maxPage = currentPage;
	                if(maxPage === ""){
	                    maxPage = 1;
	                }
	                //总页数
	                var total = response.data.total;
	               var startPage = response.data.startPage;
	               var endPage = response.data.endPage;
	               if(total <= maxPage){
	                   maxPage = total;
	               }
	               if(maxPage<=0){
	                   maxPage = 1;
	               }
	               var totalPas = {};

	               for(var i=startPage;i<=endPage;i++){
	                   totalPas[i-1] = i;
	               }
	                //设置当前页和总页数
	                response.data.totalPage = total;
	                response.data.nowPage = maxPage+"/"+total;
	                response.data.totalPas = totalPas;
	                response.data.currentPage = currentPage;
	                response.data.page = maxPage;
	                deferred.resolve(response.data);
	            }, function errorCallback(response) {
	                deferred.reject(response.data);
	            }
	        );
	        return deferred.promise;
	    };
	    //向后台发送搜索申请的request
	    todoMgService.operationSearch = function (searchTitle,todoStatus) {
	        var deferred = $q.defer();
	       /* $http.jsonp( httpservice.todoManage,{
	            method: 'GET',
	            params: { callback:"JSON_CALLBACK",
	                'sessionId': Session.id,'userId': Session.userId,'searchTitle':searchTitle,'todoStatus':todoStatus,'companyId':Session.companyId,'page':1,'pageSize':6}
	        }).then(function successCallback(response) {*/
	      $http({
	            method: 'GET',
	            url: httpservice.todoManage,
	            params: {'sessionId': Session.id,'userId': Session.userId,'searchTitle':searchTitle,'todoStatus':todoStatus,'companyId':Session.companyId,'page':1,'pageSize':8}
	        }).then(function successCallback(response) {
	                //当前页
	                var maxPage = 1;
	                if(maxPage === ""){
	                    maxPage = 1;
	                }
	                //总页数
	                var total = response.data.total;
	                var startPage = response.data.startPage;
	                var endPage = response.data.endPage;
	                if(total <= maxPage){
	                    maxPage = total;
	                }
	                if(maxPage<=0){
	                    maxPage = 1;
	                }
	                var totalPas = {};

	                for(var i=startPage;i<=endPage;i++){
	                    totalPas[i-1] = i;
	                }
	                //设置当前页和总页数
	                response.data.totalPage =total;
	                response.data.nowPage = maxPage+"/"+total;
	                response.data.totalPas = totalPas;
	                response.data.page = maxPage;
	                deferred.resolve(response.data);
	            }, function errorCallback(response) {
	                deferred.reject(response.data);
	            }
	        );
	        return deferred.promise;
	    };
	    //点击标题获取编辑框数据
	    todoMgService.openDetail = function (todoStatus,flowId,taskId) {
	        var deferred = $q.defer();
	      /*  $http.jsonp(httpservice.todoEdit,{
	            method: 'GET',
	            params: { callback:"JSON_CALLBACK",
	                'sessionId': Session.id,'userId': Session.userId,'todoStatus':todoStatus,'companyId':Session.companyId,'flowId':flowId,'taskId':taskId}
	        }).then(function successCallback(response) {*/
	        $http({
	            method: 'GET',
	            url: httpservice.todoEdit,
	            params: { 'sessionId': Session.id,'userId': Session.userId,'todoStatus':todoStatus,'companyId':Session.companyId,'flowId':flowId,'taskId':taskId}
	        }).then(function successCallback(response) {
	                deferred.resolve(response.data);
	            }, function errorCallback(response) {
	                deferred.reject(response.data);
	            }
	        );
	        return deferred.promise;
	    };
	    return todoMgService;
	};

/***/ },
/* 41 */
/***/ function(module, exports) {

	/**
	 * Created by Sky on 2016/3/8.
	 */
	module.exports=function($scope,$stateParams,todoMgService,$rootScope){
	    $scope.todoMgs={};
	    if($stateParams.todoStatus==null||$stateParams.todoStatus==undefined||$stateParams.todoStatus=='')
	    {
	        $scope.todoStatus=0;
	    }
	    else
	    {
	        $scope.todoStatus=$stateParams.todoStatus;
	    }
	    if($scope.todoStatus==0)
	    {
	        $scope.border_color_red='selectColor_manage borderBottom';
	        $scope.border_color_red1='';
	    }
	    else
	    {
	        $scope.border_color_red='';
	        $scope.border_color_red1='selectColor_manage borderBottom';
	    }
	    $scope.currentPage=1;
	    $scope.todoDetail={};
	    $scope.getList=function(todoStatus,currentPage,searchTitle) {
	        todoMgService.todo(todoStatus,currentPage,searchTitle).then(function (data) {
	            $scope.todoMgs = data.data;
	            $scope.totalPage = data.totalPage;
	            $scope.nowPage = data.nowPage;
	            $scope.totalPas = data.totalPas;
	            $scope.currentPage = data.page;
	        }, function () {
	            console.log('todoController 管理_我的任务_我的待办:我的待办列表加载失败！');
	        });
	    };
	    $scope.getList($scope.todoStatus,$scope.currentPage,$scope.searchTitle);
	    //点击改变页码
	    $scope.changePage=function(currentPage){
	        if(currentPage <= $scope.totalPage&&currentPage>0 )
	        {
	            $scope.getList( $scope.todoStatus,currentPage,$scope.searchTitle);
	        }
	        else
	        {
	            console.log('todoController 管理_我的任务_我的待办:我的待办列表页码越界！');
	        }
	    };
	    //点击搜索按钮事件
	    $scope.operationSearch=function(searchTitle){
	        $scope.searchTitle=searchTitle;
	        var todoStatus=$scope.todoStatus;
	       todoMgService.operationSearch(searchTitle,todoStatus).then(function(data){
	            $scope.todoMgs=data.data;
	            $scope.totalPage = data.totalPage;
	            $scope.nowPage = data.nowPage;
	            $scope.totalPas = data.totalPas;
	            $scope.currentPage = data.page;
	        },function(){
	            console.log('todoController 管理_我的任务_我的待办:搜索我的待办失败！');
	        });
	    };


	};

/***/ },
/* 42 */
/***/ function(module, exports) {

	/**
	 * Created by Sky on 2016/3/21.
	 */
	module.exports=function($stateParams,$http,$q,httpservice,Session) {
	    var todoDetailMgService = {};
	    //查看待办详情
	    todoDetailMgService.openDetail = function (todoStatus) {
	        var deferred = $q.defer();
	       /* $http.jsonp(httpservice.todoDetail,{
	            method: 'GET',
	            params: { callback:"JSON_CALLBACK",
	                'sessionId': Session.id,'userId': Session.userId,'todoStatus':todoStatus,'companyId':Session.companyId,'flowId':$stateParams.flowId,'taskId':$stateParams.taskId}
	        }).then(function successCallback(response) {*/
	      $http({
	            method: 'GET',
	            url: httpservice.todoDetail,
	            params: { 'sessionId': Session.id,'userId': Session.userId,'todoStatus':todoStatus,'companyId':Session.companyId,'flowId':$stateParams.flowId,'taskId':$stateParams.taskId}
	        }).then(function successCallback(response) {
	                deferred.resolve(response.data);
	            }, function errorCallback(response) {
	                deferred.reject(response.data);
	            }
	        );
	        return deferred.promise;
	    };
	    //同意或取消待办
	    todoDetailMgService.operation = function (operation,comment) {
	        var deferred = $q.defer();
	       /* $http.jsonp(httpservice.todoDetail,{
	            method: 'GET',
	            params: { callback:"JSON_CALLBACK",
	                'sessionId': Session.id,'userId': Session.userId,'flowId':$stateParams.flowId,'operation':operation,'comment':comment,'taskId':$stateParams.taskId,'companyId':Session.companyId}
	        }).then(function successCallback(response) {*/
	       $http({
	            method: 'GET',
	            url: httpservice.todoApproveManage,
	            params: {'sessionId': Session.id,'userId': Session.userId,'flowId':$stateParams.flowId,'operation':operation,'comment':comment,'taskId':$stateParams.taskId,'companyId':Session.companyId}
	        }).then(function successCallback(response) {
	                deferred.resolve(response.data);
	            }, function errorCallback(response) {
	                deferred.reject(response.data);
	            }
	        );
	        return deferred.promise;
	    };
	    return todoDetailMgService;
	};

/***/ },
/* 43 */
/***/ function(module, exports) {

	/**
	 * Created by Sky on 2016/3/21.
	 */
	module.exports=function($scope,$state,todoDetailMgService) {
	    $scope.comment='';
	    todoDetailMgService.openDetail($scope.todoStatus).then(function (data) {
	        $scope.todoEdit = data;
	    },function () {
	        console.log('todoDetailController 管理_我的任务_我的待办:查看我的待办详情加载失败！');
	    });
	    //同意或拒绝待办
	    $scope.operation=function(operation){
	        var comment=$scope.comment;
	        todoDetailMgService.operation(operation,comment).then(function(data){
	            console.log(data);
	            $scope.todoMgs=data.data;
	            if(data == true){
	                $state.go('manage.todo',{todoStatus:0});
	            }
	        },function(){
	            console.log('todoDetailController 管理_我的任务_我的待办:审批我的待办加载失败！');
	        });

	    };
	};

/***/ },
/* 44 */
/***/ function(module, exports) {

	/**
	 * Created by Sky on 2016/3/21.
	 */
	module.exports=function($stateParams,$http,$q,httpservice,Session) {
	    var doneDetailMgService = {};
	    //打开已办详情
	    doneDetailMgService.openDetail = function () {
	        var deferred = $q.defer();
	       /* $http.jsonp(httpservice.todoDetail,{
	            method: 'GET',
	            params: { callback:"JSON_CALLBACK",
	                'sessionId': Session.id,'userId': Session.userId,'companyId':Session.companyId,'flowId':$stateParams.flowId,'taskId':$stateParams.taskId}
	        }).then(function successCallback(response) {*/
	        $http({
	            method: 'GET',
	            url: httpservice.todoDetail,
	            params: { 'sessionId': Session.id,'userId': Session.userId,'companyId':Session.companyId,'flowId':$stateParams.flowId,'taskId':$stateParams.taskId}
	        }).then(function successCallback(response) {
	                deferred.resolve(response.data);
	            }, function errorCallback(response) {
	                deferred.reject(response.data);
	            }
	        );
	        return deferred.promise;
	    };
	    return doneDetailMgService;
	};

/***/ },
/* 45 */
/***/ function(module, exports) {

	/**
	 * Created by Sky on 2016/3/21.
	 */
	module.exports=function($scope,$state,doneDetailMgService) {
	    /* $scope.detailsShow=true;*/
	    /* $rootScope.fadeShow=true;*/
	    doneDetailMgService.openDetail().then(function (data) {
	        $scope.todoEdit = data;
	    }, function () {
	        console.log('doneDetailController 管理_我的任务_我的已办:查看已办详情失败！');
	    });
	};

/***/ },
/* 46 */
/***/ function(module, exports) {

	/**
	 * Created by Sky on 2016/3/21.
	 */
	module.exports=function($stateParams,$http,$q,httpservice,Session) {
	    var todoProcessMgService = {};
	    //查看我的待办流程图
	    todoProcessMgService.openImg = function () {
	        var deferred = $q.defer();
	      /*  $http.jsonp(httpservice.todoProcess,{
	            method: 'GET',
	            params: { callback:"JSON_CALLBACK",
	                'sessionId': Session.id,'userId': Session.userId,'todoStatus':$stateParams.todoStatus,'companyId':Session.companyId,'flowId':$stateParams.flowId,'taskId':$stateParams.taskId}
	        }).then(function successCallback(response) {*/
	        $http({
	            method: 'GET',
	            url: httpservice.todoProcess,
	            params: { 'sessionId': Session.id,'userId': Session.userId,'todoStatus':$stateParams.todoStatus,'companyId':Session.companyId,'flowId':$stateParams.flowId,'taskId':$stateParams.taskId}
	        }).then(function successCallback(response) {
	                deferred.resolve(response.data);
	            }, function errorCallback(response) {
	                deferred.reject(response.data);
	            }
	        );
	        return deferred.promise;
	    };
	    return todoProcessMgService;
	};

/***/ },
/* 47 */
/***/ function(module, exports) {

	/**
	 * Created by Sky on 2016/3/21.
	 */
	module.exports=function($scope,$stateParams,todoProcessMgService) {
	    /* $scope.detailsShow=true;*/
	    /* $rootScope.fadeShow=true;*/
	    $scope.todoStatus=$stateParams.todoStatus;
	    todoProcessMgService.openImg().then(function (data) {
	        $scope.imgUrl = data.imgUrl;
	          }, function () {
	        console.log('todoProcessController 管理_我的任务_我的待办:查看我的待办流程图加载失败！');
	    });
	};

/***/ },
/* 48 */
/***/ function(module, exports) {

	/**
	 * Created by Sky on 2016/3/14.
	 */
	module.exports=function($scope,accountMgService){
	    $scope.btnPwdSet='设置';
	    $scope.btnPhoneSet='设置';
	    $scope.btnEmailSet='设置';
	    $scope.btnWarnSet='设置';
	    $scope.pwdTitleShow=true;
	    $scope.pwdContentShow=false;
	    $scope.phoneTitleShow=true;
	    $scope.phoneContentShow=false;
	    $scope.emailTitleShow=true;
	    $scope.emailContentShow=false;
	    $scope.warnTitleShow=true;
	    $scope.warnContentShow=false;
	    $scope.userPwd='';
	    $scope.userPhone='';
	    $scope.userEmail='';
	    $scope.userWarn='';

	    //初始化时获取用户已绑定的信息
	    accountMgService.getData().then(function(data){
	        if(data.userPwd===''||data.userPwd===null||data.userPwd===undefined)
	        {
	            $scope.userPwdIcon='fa fa-exclamation-circle warnCor';
	        }
	        else
	        {
	            $scope.userPwdIcon='fa fa-check-circle successCor';
	        }
	        if(data.phone===''||data.phone===null||data.phone===undefined)
	        {
	            $scope.userPhoneIcon='fa fa-exclamation-circle warnCor';
	            $scope.phoneTip='未绑定手机';
	        }
	        else
	        {
	            $scope.userPhoneIcon='fa fa-check-circle successCor';
	            $scope.phoneTip=data.phone;
	        }
	        if(data.email===''||data.email===null||data.email===undefined)
	        {
	            $scope.userEmailIcon='fa fa-exclamation-circle warnCor';
	            $scope.emailTip='未绑定邮箱';
	        }
	        else
	        {
	            $scope.userEmailIcon='fa fa-check-circle successCor';
	            $scope.emailTip=data.email;
	        }
	        if(data.questions===''||data.questions===null||data.questions===undefined)
	        {
	            $scope.warnTip='未设置安全提醒';
	            $scope.userWarnIcon='fa fa-exclamation-circle warnCor';
	        }
	        else
	        {
	            $scope.userWarnIcon='fa fa-check-circle successCor';
	            $scope.warnTip='已设置安全提醒';
	            $scope.warnContent=data.questions;
	        }
	        $scope.userPhone=data.phone;
	        $scope.userEmail=data.email;
	        $scope.userWarn=data.questions;

	    });
	    //保存Email设置
	    $scope.saveEmail=function(){
	        if($scope.email===''||$scope.email===undefined||$scope.email===null)
	        {
	            $scope.borderErrCor=true;
	            console.log($scope.borderErrCor);
	            $scope.btnDisableCor=true;
	        }
	        else
	        {
	            $scope.borderErrCor=false;
	            $scope.btnDisableCor=false;
	        }
	    }
	    //点击设置密码展开与折叠
	    $scope.setPwd=function(){
	        $scope.pwdTitleShow=!$scope.pwdTitleShow;
	        $scope.pwdContentShow=!$scope.pwdContentShow;
	        if($scope.btnPwdSet==='设置')
	        {
	            $scope.btnPwdSet='收起';
	        }
	        else
	        {
	            $scope.btnPwdSet='设置';
	        }
	    };
	    //点击设置手机展开与折叠
	    $scope.setPhone=function(){
	        $scope.phoneTitleShow=!$scope.phoneTitleShow;
	        $scope.phoneContentShow=!$scope.phoneContentShow;
	        if($scope.btnPhoneSet==='设置')
	        {
	            $scope.btnPhoneSet='收起';
	        }
	        else
	        {
	            $scope.btnPhoneSet='设置';
	        }
	    };
	    //点击设置邮箱展开与折叠
	    $scope.setEmail=function(){
	        $scope.emailTitleShow=!$scope.emailTitleShow;
	        $scope.emailContentShow=!$scope.emailContentShow;
	        if($scope.btnEmailSet==='设置')
	        {
	            $scope.btnEmailSet='收起';
	        }
	        else
	        {
	            $scope.btnEmailSet='设置';
	        }
	    };
	    //点击设置安全提醒展开与折叠
	    $scope.setWarn=function(){
	        $scope.warnTitleShow=!$scope.warnTitleShow;
	        $scope.warnContentShow=!$scope.warnContentShow;
	        if($scope.btnWarnSet==='设置')
	        {
	            $scope.btnWarnSet='收起';
	        }
	        else
	        {
	            $scope.btnWarnSet='设置';
	        }
	    };
	};


/***/ },
/* 49 */
/***/ function(module, exports) {

	/**
	 * Created by Sky on 2016/3/14.
	 */
	module.exports = function ($stateParams, $http, $q, httpservice, Session) {
	    var accountMgService = {};
	    accountMgService.getData = function () {
	        var deferred = $q.defer();
	        $http({
	            method: 'GET',
	            url: httpservice.accountManage,
	            params: {
	                'sessionId': Session.id,
	                'userId': Session.userId,
	            }
	        }).then(function successCallback(response){
	            deferred.resolve(response.data);
	        }, function errorCallback(response) {
	            deferred.reject(response.data);
	        });
	        return deferred.promise;
	    };
	    return accountMgService;
	};

/***/ },
/* 50 */
/***/ function(module, exports) {

	/**
	 * Created by Sky on 2016/3/15.
	 */
	module.exports=function($scope,collectionMgService){
	    /*//控制我的收藏列表和我的关注列表切换显示
	    $scope.collectionListShow=true;*/
	    //控制我的收藏菜单样式
	    $scope.tabCor0='colRed borderBottom';
	  /*  //我的收藏参数
	    $scope.tabStatus=0;*/
	    //分页当前页参数
	    $scope.currentPage=1;
	    $scope.searchTitle='';
	    //默认获取我的收藏列表数据
	    $scope.getList=function(currentPage,appId,orderId,sortId,operation,searchTitle){
	        collectionMgService.getData(currentPage,appId,orderId,sortId,operation,searchTitle).then(function(data){
	          $scope.collectionList=data.collectionList;
	            $scope.totalPage = data.totalPage;
	            $scope.nowPage = data.nowPage;
	            $scope.totalPas = data.totalPas;
	            $scope.currentPage = data.page;
	        },function(){
	            console.log('collectionMgController 管理_我的应用_我的收藏：收藏列表加载失败！');
	        });
	    };
	    $scope.getList($scope.currentPage,'','','','','');
	    //点击改变页码
	    $scope.changePage=function(currentPage){
	        var searchTitle= $scope.searchTitle;
	        if(currentPage <= $scope.totalPage&&currentPage>0 )
	        {
	            $scope.getList(currentPage,'','','','',searchTitle);
	        }
	        else
	        {
	            console.log('collectionMgController 管理_我的应用_我的收藏：收藏列表页码越界！');
	        }
	    };
	 /*   //点击标签切换我的申请列表
	    $scope.tabChange=function(tabStatus) {
	        $scope.tabStatus = tabStatus;
	        if(tabStatus===0)
	        {
	            $scope.tabCor1='';
	            $scope.tabCor0='colRed borderBottom';
	            $scope.collectionListShow=true;
	            $scope.collectionListShow1=false;
	        }
	        else if(tabStatus===1)
	        {
	            $scope.tabCor0='';
	            $scope.collectionListShow=false;
	            $scope.collectionListShow1=true;
	            $scope.tabCor1='colRed borderBottom';
	        }
	        $scope.getList( $scope.tabStatus,1);
	    };*/
	    //点击我的收藏操作
	    $scope.ChangeOperation=function(appId,orderId,sortId,operation){
	        var searchTitle= $scope.searchTitle;
	       $scope.getList($scope.currentPage,appId,orderId,sortId,operation,searchTitle);
	    }
	    //点击搜索按钮事件
	    $scope.searchCollection=function(searchTitle){
	        $scope.searchTitle=searchTitle;
	        //获取我的申请列表
	        $scope.getList(1,'','','','',searchTitle);
	    };
	    /*//点击我的关注操作
	    $scope.AttendationOperation=function(appId,orderId,operation){
	        $scope.getList($scope.tabStatus,$scope.currentPage,appId,orderId,operation);
	    }*/
	};

/***/ },
/* 51 */
/***/ function(module, exports) {

	/**
	 * Created by Sky on 2016/3/15.
	 */
	module.exports=function($stateParams, $http, $q, httpservice, Session) {
	    var collectionMgService = {};
	    //获取我的收藏列表数据
	    collectionMgService.getData = function (currentPage,appId,orderId,sortId,operation,searchTitle) {
	        var deferred = $q.defer();
	        $http({
	            method: 'GET',
	            url: httpservice.collectionManage,
	            params: {
	                'sessionId': Session.id,
	                'userId': Session.userId,
	                'companyId':Session.companyId,
	                'page':currentPage,
	                'pageSize':5,
	                'appId':appId,
	                'orderId':orderId,
	                'sortId':sortId,
	                'Operation':operation,
	                'searchTitle':searchTitle
	            }
	        }).then(function successCallback(response) {
	            //当前页
	            var maxPage = currentPage;
	            if(maxPage === ""){
	                maxPage = 1;
	            }
	            //总页数
	            var total = response.data.total;
	            var startPage = response.data.startPage;
	            var endPage = response.data.endPage;
	            if(total <= maxPage){
	                maxPage = total;
	            }
	            if(maxPage<=0){
	                maxPage = 1;
	            }
	            var totalPas = {};

	            for(var i=startPage;i<=endPage;i++){
	                totalPas[i-1] = i;
	            }
	            //设置当前页和总页数
	            response.data.totalPage =total;
	            response.data.nowPage = maxPage+"/"+total;
	            response.data.totalPas = totalPas;
	            response.data.page = maxPage;
	            deferred.resolve(response.data);
	        }, function errorCallback(response) {
	            deferred.reject(response.data);
	        });
	        return deferred.promise;
	    };
	    return collectionMgService;
	};

/***/ },
/* 52 */
/***/ function(module, exports) {

	/**
	 * Created by Sky on 2016/3/22.
	 */
	module.exports=function($rootScope,$scope,$compile,classMgService){
	    //分类菜单数据
	    $scope.classMenuList={};
	    //控制我的分类和分类维护tab点击样式
	    $scope.tabCor0='classCor classBackCor';
	    $scope.tabCor1='classSpan';
	    //我的分类分类菜单选中样式
	    $scope.menuClassSelected='selectBackCor_menu';
	    //我的分类和分类维护tab切换参数，默认0是我的分类,1是分类维护
	    $scope.tabStatus=0;
	    //分页当前页参数，currentPage是应用列表当前页码，currentPageAdd是添加应用列表当前页码
	    $scope.currentPage=1;
	    $scope.currentPageAdd=1;
	    //应用列表标题，默认显示为“全部”
	    $scope.listTitle='全部';
	    //分类菜单条目ID，默认0是全部
	    $scope.menuSortId=0;
	    //分类菜单点击后当前ID，默认是0
	    $scope.currentId=0;
	    //新增菜单名字
	    $scope.menuItem='';
	    //应用列表标题样式，mY_kind_divTil_Child_tilte是我的分类，mY_kind_divTil_Child_tilte1是分类维护
	    $scope.listTitleClass='mY_kind_divTil_Child_tilte';
	    //控制菜单编辑框显示和隐藏
	    $scope.currentId1=0;
	    $scope.readonly=true;
	    //控制添加应用按钮显示
	    $scope.addAppBtnShow=false;
	    //控制添加应用弹出框显示
	    $scope.addAppShow=false;
	    //记录添加应用时所在的分类ID
	    $scope.AddSortId=0;
	    //添加应用列表搜索字段
	    $scope.searchTitle='';
	    $scope.sortStatus='';
	    //加载分类菜单列表数据
	    $scope.getMenu=function(menuSortId,indexId,menuName,operation){
	        var sortStatus=$scope.sortStatus;
	        classMgService.getMenu(menuSortId,indexId,menuName,operation,sortStatus).then(function(data){
	            $scope.classMenuList=data.menuList;
	            $scope.sortStatus=data.sortStatus;
	        },function(){
	            console.log('classMgController 管理_我的应用_我的分类：分类菜单加载失败！');
	        });
	    };
	    //默认查询分类菜单列表数据
	    $scope.getMenu(0,0,'','');
	   //获取分类应用列表数据
	    $scope.getList=function(currentPage,menuSortId,indexId,appId,operation){

	        classMgService.getData(currentPage,menuSortId,indexId,appId,operation).then(function(data){
	            $scope.classList=data.classList;
	            $scope.totalPage = data.totalPage;
	            $scope.nowPage = data.nowPage;
	            $scope.totalPas = data.totalPas;
	            $scope.currentPage = data.page;
	        },function(){
	            console.log('classMgController 管理_我的应用_我的分类：分类应用列表加载失败！');
	        });
	    };
	    //默认获取全部分类的分类应用列表数据
	    $scope.getList(1,0,'','','');
	    //分类应用列表点击改变页码
	    $scope.changePage=function(currentPage){
	        if(currentPage <= $scope.totalPage&&currentPage>0 )
	        {
	            $scope.getList(currentPage,$scope.menuSortId,'','');
	        }
	        else
	        {
	            console.log('classMgController 管理_我的应用_我的分类：我的分类应用列表页码越界！');
	        }
	    };

	    //点击标签切换我的分类和分类维护tab标签
	    $scope.tabChange=function(tabStatus) {
	        //点击新的菜单条目设置之前的编辑状态为不可编辑---如果上一个菜单点击编辑但是没有提交或取消
	        //点击新的菜单条目清空之前的编辑值并设为初始值 ---如果上一个菜单点击编辑但是没有提交或取消
	            $scope.readonly=true;
	            var menuList=$scope.classMenuList;
	            for(var i=0;i<menuList.length;i++){
	                if(menuList[i].sortId==oldMenuSortId)
	                {
	                    menuList[i].sortName=oldMenuName;
	                }
	            }
	            $scope.classMenuList=menuList;
	        //设置分类菜单编辑为初始状态--不可编辑
	        $scope.readonly=true;
	        //记录我的分类或者分类列表哪个状态，0是我的分类，1是分类维护
	        $scope.tabStatus = tabStatus;
	        if(tabStatus===0)
	        {
	            //我的分类tab点中样式和分类维护未点中样式
	            $scope.tabCor1='classSpan';
	            $scope.tabCor0='classCor classBackCor';
	            //我的分类---隐藏新增按钮和保存按钮
	            $scope.addShow=false;
	            $scope.saveShow=false;
	            //我的分类---隐藏新增条目
	            mobileDialogElement.remove();
	            //我的分类---隐藏添加应用按钮
	            $scope.addAppBtnShow=false;
	            //我的分类---隐藏分类维护中显示，但是我的分类不需要显示的
	            $scope.maintainAShow=false;
	            //我的分类---初始化分类菜单为全部选中样式
	            $scope.menuClassSelected='selectBackCor_menu';
	            //我的分类---初始化应用标题为全部样式
	            $scope.listTitleClass='mY_kind_divTil_Child_tilte';
	            //我的分类---初始化分类菜单全部状态选中
	            $scope.currentId=0;
	            //我的分类---初始化应用标题变量为全部
	            $scope.listTitle='全部';
	            //初始化我的分类（应用列表）数据
	            $scope.getList(1,0,'','','');
	        }
	        else if(tabStatus===1)
	        {
	            //分类维护tabCor1 tab点中样式和我的分类tabCor0未点中样式
	            $scope.tabCor0='';
	            $scope.tabCor1='classCor classBackCor classSpan';
	            //我的分类和分类维护切换
	            $scope.addShow=true;
	            //分类维护---隐藏新增条目
	            mobileDialogElement.remove();
	            //分类维护---隐藏添加应用按钮
	            $scope.addAppBtnShow=false;
	            //分类维护---隐藏分类维护中显示，但是我的分类不需要显示的
	            $scope.maintainAShow=false;
	            //分类维护---初始化分类菜单为全部选中样式
	            $scope.menuClassSelected='selectBackCor_menu1';
	            //分类维护---初始化应用标题为全部样式
	            $scope.listTitleClass='mY_kind_divTil_Child_tilte1';
	            //分类维护---初始化分类菜单全部状态选中
	            $scope.currentId=0;
	            //分类维护---初始化应用标题变量为全部
	            $scope.listTitle='全部';
	            //初始化分类维护（应用列表）数据
	            $scope.getList(1,0,'','','');
	        }

	    };
	    //点击选中分类菜单条目
	    $scope.classMenuChange=function(menuSortId,menuName)
	    {
	        //点击新的菜单条目设置之前的编辑状态为不可编辑---如果上一个菜单点击编辑但是没有提交或取消
	        //点击新的菜单条目清空之前的编辑值并设为初始值 ---如果上一个菜单点击编辑但是没有提交或取消
	        if(menuSortId!= $scope.currentId)
	        {
	            $scope.readonly=true;
	            var menuList=$scope.classMenuList;
	            for(var i=0;i<menuList.length;i++){
	                if(menuList[i].sortId==oldMenuSortId)
	                {
	                    menuList[i].sortName=oldMenuName;
	                }
	            }
	            $scope.classMenuList=menuList;

	        }
	        $scope.currentPage=1;
	        $scope.menuSortId=menuSortId;
	        //选中”全部“分类菜单
	        if(menuSortId===0)
	        {

	            //隐藏添加应用按扭
	            $scope.addAppBtnShow=false;
	            //隐藏分类维护可操作的，仅作展示
	            $scope.maintainAShow=false;
	            if( $scope.tabStatus==0)
	            {
	                //我的分类tab时，“全部”菜单样式
	                $scope.menuClassSelected='selectBackCor_menu';
	            }
	            else
	            {
	                //分类维护tab，“全部”菜单样式
	                $scope.menuClassSelected='selectBackCor_menu1';
	            }
	            $scope.currentId=0;
	            $scope.listTitle='全部';
	        }
	        else
	        {
	            //分类维护tab切非“全部”分类菜单
	            if( $scope.tabStatus===1) {
	                //设置添加应用按钮可显示
	                $scope.addAppBtnShow=true;
	                $scope.maintainAShow=true;
	            }
	            //清空全部分类菜单选中样式
	            $scope.menuClassSelected='';
	            //重置当前选中分类菜单Id
	            $scope.currentId=menuSortId;
	            //重置当前分类应用的标题--选中分类菜单
	            $scope.listTitle=menuName;

	        }
	        //根据分类菜单的切换初始化应用列表数据
	        $scope.getList(1,menuSortId,'','');

	    };
	    //点击应用列表维护上移下移删除操作
	    $scope.ChangeOperation=function(appId,orderId,menuSortId,operation){

	        $scope.getList($scope.currentPage,menuSortId,orderId,appId,operation);
	        for(var i=0;i<appIdList.length;i++)
	        {
	            if(appId===appIdList[i])
	            {
	                appIdList.splice(i,1)
	            }
	        }
	    };
	    //设置新增菜单变量
	    var html="<input ng-model='menuItem' class='iptMenu' ng-click='test()'/><img class='removeAddMenu' ng-click='removeMenu()'  src='images/cancel.png'/>";
	    var template = angular.element(html);
	    var mobileDialogElement = $compile(template)($scope);
	    //点击新建菜单
	    $scope.addMenu=function(){
	        $scope.menuItem='';
	        mobileDialogElement = $compile(template)($scope);
	        angular.element('#menuUl').append(mobileDialogElement);
	        $scope.addShow=false;
	        $scope.saveShow=true;

	    };
	    //点击删除新建菜单
	    $scope.removeMenu=function(){
	        mobileDialogElement.remove();
	        $scope.addShow=true;
	        $scope.saveShow=false;

	    };
	    //点击保存新建菜单
	    $scope.saveMenu=function(){
	        $scope.getMenu(0,0,$scope.menuItem,'add');
	        mobileDialogElement.remove();
	        $scope.menuClassSelected='selectBackCor_menu1';
	        $scope.currentId=0;
	        $scope.listTitle='全部';
	        $scope.getList(1,0,'','','');
	        $scope.addShow=true;
	        $scope.saveShow=false;
	    };
	    //点击保存新建菜单
	    $scope.updateMenu=function(menuId,indexId){
	        var menuList=$scope.classMenuList;
	        var newMenuName='';
	        for(var i=0;i<menuList.length;i++){
	            if(menuList[i].sortId==menuId)
	            {
	              newMenuName= menuList[i].sortName;
	            }
	        }
	        $scope.readonly=true;
	        $scope.getMenu(menuId,indexId,newMenuName,'update');
	        $scope.menuClassSelected='selectBackCor_menu1';
	        oldMenuName=newMenuName;
	        oldMenuSortId=sortId;
	        $scope.currentId=0;
	        $scope.listTitle='全部';
	        $scope.getList(1,0,'','','');
	        $scope.addShow=true;
	        $scope.saveShow=false;
	    };
	    //点击删除新建菜单
	    $scope.delMenu=function(menuId,indexId){
	        $scope.getMenu(menuId,indexId,'','delete');
	        $scope.menuClassSelected='selectBackCor_menu1';
	        $scope.currentId=0;
	        $scope.listTitle='全部';
	        $scope.getList(1,0,'','','');
	        $scope.addShow=true;
	        $scope.saveShow=false;
	    };
	    //点击上移新建菜单
	    $scope.upMenu=function(menuId,indexId){
	        $scope.getMenu(menuId,indexId,'','up');
	        $scope.menuClassSelected='selectBackCor_menu1';
	        $scope.currentId=0;
	        $scope.listTitle='全部';
	        $scope.getList(1,0,'','','');
	        $scope.addShow=true;
	        $scope.saveShow=false;
	    };
	    //点击下移新建菜单
	    $scope.downMenu=function(menuId,indexId){
	        $scope.getMenu(menuId,indexId,'','down');
	        $scope.menuClassSelected='selectBackCor_menu1';
	        $scope.currentId=0;
	        $scope.listTitle='全部';
	        $scope.getList(1,0,'','','');
	        $scope.addShow=true;
	        $scope.saveShow=false;
	    };
	    //记录编辑菜单提交前的选中菜单ID和Name值
	    var oldMenuName='';
	    var oldMenuSortId='';
	   //点击编辑菜单
	    $scope.editMenu=function(menuSortId,currentName){
	        oldMenuName=currentName;
	        oldMenuSortId=menuSortId;
	        $scope.currentId1=menuSortId;
	        $scope.readonly=false;
	    };
	    //点击取消更新菜单
	    $scope.cancelMenu=function(){
	        var menuList=$scope.classMenuList;
	        for(var i=0;i<menuList.length;i++){
	            if(menuList[i].sortId==oldMenuSortId)
	            {
	                menuList[i].sortName=oldMenuName;
	            }
	        }
	        $scope.classMenuList=menuList;
	        $scope.readonly=true;
	    };
	    //获取分类维护添加应用列表数据
	    $scope.getAppList_nonSort=function(currentPage,searchTitle){
	        classMgService.getAppList_nonSort(currentPage,searchTitle).then(function(data){
	            $scope.appList=data.appList;
	            $scope.totalPageAdd = data.totalPage;
	            $scope.nowPageAdd = data.nowPage;
	            $scope.totalPasAdd = data.totalPas;
	            $scope.currentPageAdd = data.page;
	        });
	    };
	    //点击分类维护添加应用的分页
	    $scope.changePageAdd=function(currentPageAdd){
	        if(currentPageAdd <= $scope.totalPageAdd&&currentPageAdd>0 )
	        {
	            $scope.getAppList_nonSort(currentPageAdd,$scope.searchTitle);
	        }
	        else
	        {
	            console.log('classMgController 管理_我的应用_我的分类：分类维护添加应用列表页码越界！');
	        }
	    };
	   //点击加号图标添加应用
	    $scope.addApp=function(sortId){
	        $rootScope.fadeShow=true;
	        $scope.addAppShow=true;
	        $scope.getAppList_nonSort($scope.currentPageAdd,'');
	    };
	    //数组去重
	    $scope.arrUnique=function unique(arr) {
	        var result = [], hash = {};
	        for (var i = 0, elem; (elem = arr[i]) != null; i++) {
	            if (!hash[elem]) {
	                result.push(elem);
	                hash[elem] = true;
	            }
	        }
	        return result;
	    };
	    //定义存储添加应用列表中选中值
	    var appIdList=[];
	    //添加应用弹出框点击选中一条分类应用
	    $scope.checkApp=function(chk,appId){

	        if(chk===false){
	            for(var i=0;i<appIdList.length;i++)
	            {
	                if(appId===appIdList[i])
	                {
	                    appIdList.splice(i,1)
	                }
	            }
	        }
	        if(chk===true)
	        {
	            appIdList.push(appId);
	        }
	        console.log(appIdList);
	        var newArrApp=$scope.arrUnique([appIdList]);
	    };
	    //点击添加应用弹出框中点击确认
	    $scope.addAppSave=function() {
	        var sortId = $scope.menuSortId;
	        console.log(appIdList);
	        classMgService.addApp(appIdList,sortId).then(function (data) {
	            if(data.flag == true){
	                $scope.getList(1,sortId,'','','');
	            }
	        });
	        $scope.addAppShow=false;
	        $rootScope.fadeShow=false;
	    };
	    //添加应用弹出框中点击关闭
	    $scope.closeAddAppWindow=function(){
	        $scope.addAppShow=false;
	        $rootScope.fadeShow=false;
	    };
	    //搜索添加应用列表
	    $scope.searchAddApp=function(){
	        var searchTitle=$scope.searchTitle;
	        getAppList_nonSort(1,searchTitle);
	    };
	    };

/***/ },
/* 53 */
/***/ function(module, exports) {

	/**
	 * Created by Sky on 2016/3/22.
	 */
	module.exports=function($stateParams, $http, $q, httpservice, Session) {
	    var classMgService = {};
	    //获取我的分类菜单列表数据
	    classMgService.getMenu = function (menuId,indexId,menuName,operation,sortStatus) {
	        var deferred = $q.defer();
	       /* $http.jsonp(httpservice.classMenuManage,{
	            method: 'GET',
	            params: {
	                callback: "JSON_CALLBACK",
	                'sessionId': Session.id,
	                'userId': Session.userId,
	                'companyId':Session.companyId,
	                'sortId':menuId,
	                'orderId':indexId,
	                'sortName':menuName,
	                'operation':operation,
	                'sortStatus':sortStatus}
	            }).then(function successCallback(response) {*/
	       $http({
	            method: 'GET',
	            url: httpservice.classMenuManage,
	            params: {
	                'sessionId': Session.id,
	                'userId': Session.userId,
	                'companyId':Session.companyId,
	                'sortId':menuId,
	                'orderId':indexId,
	                'menuName':menuName,
	                'operation':operation,
	                'sortStatus':sortStatus
	            }
	        }).then(function successCallback(response) {
	            deferred.resolve(response.data);
	        }, function errorCallback(response) {
	            deferred.reject(response.data);
	        });
	        return deferred.promise;
	    };
	    //获取我的分类菜单列表数据
	    classMgService.getData = function (currentPage,menuSortId,indexId,appId,operation) {
	        var deferred = $q.defer();
	        $http({
	            method: 'GET',
	            url: httpservice.classListManage,
	            params: {
	                'sessionId': Session.id,
	                'userId': Session.userId,
	                'companyId':Session.companyId,
	                'page': currentPage,
	                'pageSize': 4,
	                'sortId':menuSortId,
	                'indexId':indexId,
	                'appId':appId,
	                'operation':operation
	            }
	        }).then(function successCallback(response) {
	            //当前页
	            var maxPage = currentPage;
	            if(maxPage === ""){
	                maxPage = 1;
	            }
	            //总页数
	            var total = response.data.total;
	            var startPage = response.data.startPage;
	            var endPage = response.data.endPage;
	            if(total <= maxPage){
	                maxPage = total;
	            }
	            if(maxPage<=0){
	                maxPage = 1;
	            }
	            var totalPas = {};

	            for(var i=startPage;i<=endPage;i++){
	                totalPas[i-1] = i;
	            }
	            //设置当前页和总页数
	            response.data.totalPage =total;
	            response.data.nowPage = maxPage+"/"+total;
	            response.data.totalPas = totalPas;
	            response.data.page = maxPage;
	            deferred.resolve(response.data);
	        }, function errorCallback(response) {
	            deferred.reject(response.data);
	        });
	        return deferred.promise;
	    };
	    //获取分类维护未分类的应用列表数据
	    classMgService.getAppList_nonSort = function (currentPage,searchTitle) {
	        var deferred = $q.defer();
	        $http({
	            method: 'GET',
	            url: httpservice.appListManage,
	            params: {
	                'sessionId': Session.id,
	                'userId': Session.userId,
	                'companyId':Session.companyId,
	                'searchTitle':searchTitle,
	                'page': currentPage,
	                'pageSize':3
	            }
	        }).then(function successCallback(response) {
	            //当前页
	            var maxPage = currentPage;
	            if(maxPage === ""){
	                maxPage = 1;
	            }
	            //总页数
	            var total = response.data.total;
	            var startPage = response.data.startPage;
	            var endPage = response.data.endPage;
	            if(total <= maxPage){
	                maxPage = total;
	            }
	            if(maxPage<=0){
	                maxPage = 1;
	            }
	            var totalPas = {};

	            for(var i=startPage;i<=endPage;i++){
	                totalPas[i-1] = i;
	            }
	            //设置当前页和总页数
	            response.data.totalPage =total;
	            response.data.nowPage = maxPage+"/"+total;
	            response.data.totalPas = totalPas;
	            response.data.page = maxPage;
	            deferred.resolve(response.data);
	        }, function errorCallback(response) {
	            deferred.reject(response.data);
	        });
	        return deferred.promise;
	    };
	    //保存添加的应用分类
	    classMgService.addApp = function (appIdList,menuSortId) {
	        var deferred = $q.defer();
	        $http({
	            method: 'GET',
	            url: httpservice.appListAddManage,
	            params: {
	                'sessionId': Session.id,
	                'userId': Session.userId,
	                'companyId':Session.companyId,
	                'appIdList':appIdList,
	                'sortId':menuSortId
	            }
	        }).then(function successCallback(response) {
	            deferred.resolve(response.data);
	        }, function errorCallback(response) {
	            deferred.reject(response.data);
	        });
	        return deferred.promise;
	    };
	    return classMgService;
	};

/***/ },
/* 54 */
/***/ function(module, exports) {

	/**
	 * Created by Sky on 2016/3/28.
	 */
	module.exports=function($scope,AppclassMgService) {
	    //分类菜单数据
	    $scope.classMenuList={};
	    //我的分类分类菜单选中样式
	    $scope.menuClassSelected='selectBackCor_menu';
	    //分页当前页参数，currentPage是应用列表当前页码，currentPageAdd是添加应用列表当前页码
	    $scope.currentPage=1;
	    //应用列表标题，默认显示为“全部”
	    $scope.listTitle='全部';
	    //分类菜单条目ID，默认0是全部
	    $scope.menuSortId=0;
	    //分类菜单点击后当前ID，默认是0
	    $scope.currentId=0;
	    //加载分类菜单列表数据
	    $scope.getMenu=function(){

	        AppclassMgService.getMenu().then(function(data){
	            $scope.classMenuList=data.menuList;
	        },function(){
	            console.log('AppclassMgController 管理_企业应用_企业分类：分类菜单加载失败！');
	        });
	    };
	    //默认查询分类菜单列表数据
	    $scope.getMenu();
	    //获取分类应用列表数据
	    $scope.getList=function(currentPage,menuSortId){
	        AppclassMgService.getData(currentPage,menuSortId).then(function(data){
	            $scope.classList=data.classList;
	            $scope.totalPage = data.totalPage;
	            $scope.nowPage = data.nowPage;
	            $scope.totalPas = data.totalPas;
	            $scope.currentPage = data.page;
	        },function(){
	            console.log('AppclassMgController 管理_企业应用_企业分类：分类应用列表加载失败！');
	        });
	    };
	    //默认获取全部分类的分类应用列表数据
	    $scope.getList(1,0);
	    //分类应用列表点击改变页码
	    $scope.changePage=function(currentPage){
	        if(currentPage <= $scope.totalPage&&currentPage>0 )
	        {
	            $scope.getList(currentPage,$scope.currentId);
	        }
	        else
	        {
	            console.log('AppclassMgController 管理_企业应用_企业分类：分类应用列表页码越界！');
	        }
	    };
	    //点击选中分类菜单条目
	    $scope.classMenuChange=function(menuSortId,menuName)
	    {
	        $scope.menuSortId=menuSortId;
	        //选中”全部“分类菜单
	        if(menuSortId===0)
	        {
	            $scope.currentId=0;
	            $scope.listTitle='全部';
	        }
	        else
	        {
	            //清空全部分类菜单选中样式
	            $scope.menuClassSelected='';
	            //重置当前选中分类菜单Id
	            $scope.currentId=menuSortId;
	            //重置当前分类应用的标题--选中分类菜单
	            $scope.listTitle=menuName;

	        }
	        //根据分类菜单的切换初始化应用列表数据
	        $scope.getList(1,menuSortId);
	    };

	}

/***/ },
/* 55 */
/***/ function(module, exports) {

	/**
	 * Created by Sky on 2016/3/28.
	 */
	module.exports=function($stateParams, $http, $q, httpservice, Session) {
	    var AppclassMgService = {};
	    //获取我的分类菜单列表数据
	    AppclassMgService.getMenu = function () {
	        var deferred = $q.defer();
	        $http({
	            method: 'GET',
	            url: httpservice.AppclassMenuManage,
	            params: {
	                'sessionId': Session.id,
	                'userId': Session.userId,
	                'companyId':Session.companyId,
	            }
	        }).then(function successCallback(response) {
	            deferred.resolve(response.data);
	        }, function errorCallback(response) {
	            deferred.reject(response.data);
	        });
	        return deferred.promise;
	    };
	    //获取我的分类菜单列表数据
	    AppclassMgService.getData = function (currentPage,menuSortId,indexId,appId,operation) {
	        var deferred = $q.defer();
	        $http({
	            method: 'GET',
	            url: httpservice.AppclassListManage,
	            params: {
	                'sessionId': Session.id,
	                'userId': Session.userId,
	                'companyId':Session.companyId,
	                'page': currentPage,
	                'pageSize': 4,
	                'sortId':menuSortId,
	                'indexId':indexId,
	                'appId':appId,
	                'operation':operation
	            }
	        }).then(function successCallback(response) {
	            //当前页
	            var maxPage = currentPage;
	            if(maxPage === ""){
	                maxPage = 1;
	            }
	            //总页数
	            var total = response.data.total;
	            var startPage = response.data.startPage;
	            var endPage = response.data.endPage;
	            if(total <= maxPage){
	                maxPage = total;
	            }
	            if(maxPage<=0){
	                maxPage = 1;
	            }
	            var totalPas = {};

	            for(var i=startPage;i<=endPage;i++){
	                totalPas[i-1] = i;
	            }
	            //设置当前页和总页数
	            response.data.totalPage =total;
	            response.data.nowPage = maxPage+"/"+total;
	            response.data.totalPas = totalPas;
	            response.data.page = maxPage;
	            deferred.resolve(response.data);
	        }, function errorCallback(response) {
	            deferred.reject(response.data);
	        });
	        return deferred.promise;
	    };
	    return AppclassMgService;
	}

/***/ },
/* 56 */
/***/ function(module, exports) {

	/**
	 * Created by Sky on 2016/3/28.
	 */
	module.exports=function($rootScope,$scope,$compile,AppclassMaintainMgService) {
	    //分类菜单数据
	    $scope.classMenuList={};
	    //我的分类分类菜单选中样式
	    $scope.menuClassSelected='selectBackCor_menu1';
	    //分页当前页参数，currentPage是应用列表当前页码，currentPageAdd是添加应用列表当前页码
	    $scope.currentPage=1;
	    $scope.currentPageAdd=1;
	    //应用列表标题，默认显示为“全部”
	    $scope.listTitle='全部';
	    //分类菜单条目ID，默认0是全部
	    $scope.sortId=0;
	    //分类菜单点击后当前ID，默认是0
	    $scope.currentId=0;
	    //控制添加应用是否显示弹出框
	    $scope.addAppShow=false;
	    //控制添加应用按钮图标是否显示
	    $scope.addAppBtnShow=false;
	    //添加按钮显示，保存按钮隐藏
	    $scope.addShow=true;
	    $scope.sortStatus='';
	    //控制菜单编辑框显示和隐藏
	    $scope.currentId1=0;
	    //加载分类菜单列表数据
	    $scope.getMenu=function(sortId,orderId,menuName,operation){
	        var sortStatus= $scope.sortStatus;
	        AppclassMaintainMgService.getMenu(sortId,orderId,menuName,operation,sortStatus).then(function(data){
	            $scope.classMenuList=data.menuList;
	            $scope.sortStatus=data.sortStatus;
	        },function(){
	            console.log('AppclassMaintainMgController 管理_企业应用_企业分类：分类维护分类菜单加载失败！');
	        });
	    };
	    //默认查询分类菜单列表数据
	    $scope.getMenu('','','','');
	    //获取分类应用列表数据
	    $scope.getList=function(currentPage,sortId,orderId,appId,operation){
	        AppclassMaintainMgService.getData(currentPage,sortId,orderId,appId,operation).then(function(data){
	            $scope.classList=data.classList;
	            $scope.totalPage = data.totalPage;
	            $scope.nowPage = data.nowPage;
	            $scope.totalPas = data.totalPas;
	            $scope.currentPage = data.page;
	        },function(){
	            console.log('AppclassMaintainMgController 管理_企业应用_企业分类：分类维护分类应用列表加载失败！');
	        });
	    };
	    //默认获取全部分类的分类应用列表数据
	    $scope.getList(1,0,'','','');
	    //分类应用列表点击改变页码
	    $scope.changePage=function(currentPage){

	        if(currentPage <= $scope.totalPage&&currentPage>0 )
	        {
	            $scope.getList(currentPage,$scope.sortId,'','','');
	        }
	        else
	        {
	            console.log('AppclassMaintainMgController 管理_企业应用_企业分类：分类维护分类应用列表页码越界!');
	        }
	    };
	    //点击选中分类菜单条目
	    $scope.classMenuChange=function(sortId,menuName)
	    {
	        //点击新的菜单条目设置之前的编辑状态为不可编辑---如果上一个菜单点击编辑但是没有提交或取消
	        //点击新的菜单条目清空之前的编辑值并设为初始值 ---如果上一个菜单点击编辑但是没有提交或取消
	        if(sortId!= $scope.currentId)
	        {
	            $scope.readonly=true;
	            var menuList=$scope.classMenuList;
	            for(var i=0;i<menuList.length;i++){
	                if(menuList[i].sortId==oldMenuSortId)
	                {
	                    menuList[i].sortName=oldMenuName;
	                }
	            }
	            $scope.classMenuList=menuList;
	        }

	        $scope.currentPage=1;
	        $scope.sortId=sortId;
	        //选中”全部“分类菜单
	        if(sortId===0)
	        {
	            //隐藏添加应用按扭
	            $scope.addAppBtnShow=false;
	            $scope.currentId=0;
	            $scope.listTitle='全部';
	        }
	        else
	        {
	            $scope.addAppBtnShow=true;
	            //清空全部分类菜单选中样式
	            $scope.menuClassSelected='';
	            //重置当前选中分类菜单Id
	            $scope.currentId=sortId;
	            //重置当前分类应用的标题--选中分类菜单
	            $scope.listTitle=menuName;

	        }
	        //根据分类菜单的切换初始化应用列表数据
	        $scope.getList(1,sortId,'','','');

	    };
	    //点击应用列表维护上移下移删除操作
	    $scope.ChangeOperation=function(appId,orderId,sortId,operation){

	        $scope.getList($scope.currentPage,sortId,orderId,appId,operation);

	        for(var i=0;i<appIdList.length;i++)
	        {
	            if(appId===appIdList[i])
	            {
	                appIdList.splice(i,1)
	            }
	        }
	    }
	    //设置新增菜单变量
	    var html="<input ng-model='menuItem' class='iptMenu' ng-click='test()'/><img class='removeAddMenu' ng-click='removeMenu()'  src='images/cancel.png'/>";
	    var template = angular.element(html);
	    var mobileDialogElement = $compile(template)($scope);
	    //点击新建菜单
	    $scope.addMenu=function(){
	        $scope.menuItem='';
	        mobileDialogElement = $compile(template)($scope);
	        angular.element('#menuUl').append(mobileDialogElement);
	        $scope.addShow=false;
	        $scope.saveShow=true;

	    }
	    //点击删除新建菜单
	    $scope.removeMenu=function(){
	        mobileDialogElement.remove();
	        $scope.addShow=true;
	        $scope.saveShow=false;

	    }
	    //点击保存新建菜单
	    $scope.saveMenu=function(){
	        $scope.getMenu('','',$scope.menuItem,'add');
	        mobileDialogElement.remove();
	        $scope.menuClassSelected='selectBackCor_menu1';
	        $scope.currentId=0;
	        $scope.listTitle='全部';
	        $scope.getList(1,0,'','','');
	        $scope.addShow=true;
	        $scope.saveShow=false;
	    }
	    //点击保存新建菜单
	    $scope.updateMenu=function(sortId,orderId){
	        var menuList=$scope.classMenuList;
	        var newMenuName='';
	        for(var i=0;i<menuList.length;i++){
	            if(menuList[i].sortId==sortId)
	            {
	                newMenuName= menuList[i].sortName;
	            }
	        }
	        $scope.readonly=true;
	        $scope.getMenu(sortId,orderId,newMenuName,'update');
	        oldMenuName=newMenuName;
	        oldMenuSortId=sortId;
	        $scope.menuClassSelected='selectBackCor_menu1';
	        $scope.currentId=0;
	        $scope.listTitle='全部';
	        $scope.getList(1,0,'','','');
	        $scope.addShow=true;
	        $scope.saveShow=false;
	    }
	    //点击删除新建菜单
	    $scope.delMenu=function(sortId){
	        $scope.getMenu(sortId,'','','delete');
	        $scope.menuClassSelected='selectBackCor_menu1';
	        $scope.currentId=0;
	        $scope.listTitle='全部';
	        $scope.getList(1,0,'','','');
	        $scope.addShow=true;
	        $scope.saveShow=false;
	    }
	    //点击上移新建菜单
	    $scope.upMenu=function(sortId,orderId){
	        $scope.getMenu(sortId,orderId,'','up');
	        $scope.menuClassSelected='selectBackCor_menu1';
	        $scope.currentId=0;
	        $scope.listTitle='全部';
	        $scope.getList(1,0,'','','');
	        $scope.addShow=true;
	        $scope.saveShow=false;
	    }
	    //点击下移新建菜单
	    $scope.downMenu=function(sortId,orderId){
	        $scope.getMenu(sortId,orderId,'','down');
	        $scope.menuClassSelected='selectBackCor_menu1';
	        $scope.currentId=0;
	        $scope.listTitle='全部';
	        $scope.getList(1,0,'','','');
	        $scope.addShow=true;
	        $scope.saveShow=false;
	    }
	    //记录编辑菜单提交前的选中菜单ID和Name值
	    var oldMenuName='';
	    var oldMenuSortId='';
	    //点击编辑菜单
	    $scope.editMenu=function(sortId,currentName){
	        oldMenuName=currentName;
	        oldMenuSortId=sortId;
	        $scope.currentId1=sortId;
	        $scope.readonly=false;
	    }
	    //点击取消更新菜单
	    $scope.cancelMenu=function(){
	        var menuList=$scope.classMenuList;
	        for(var i=0;i<menuList.length;i++){
	            if(menuList[i].sortId==oldMenuSortId)
	            {
	                menuList[i].sortName=oldMenuName;
	            }
	        }
	        $scope.classMenuList=menuList;
	        $scope.readonly=true;
	    }
	    //获取分类维护添加应用列表数据
	    $scope.getAppList_nonSort=function(currentPage,searchTitle){
	        AppclassMaintainMgService.getAppList_nonSort(currentPage,searchTitle).then(function(data){
	            $scope.appList=data.appList;
	            $scope.totalPageAdd = data.totalPage;
	            $scope.nowPageAdd = data.nowPage;
	            $scope.totalPasAdd = data.totalPas;
	            $scope.currentPageAdd = data.page;
	        });
	    }
	    //点击分类维护添加应用的分页
	    $scope.changePageAdd=function(currentPageAdd){
	        if(currentPageAdd <= $scope.totalPageAdd&&currentPageAdd>0 )
	        {
	            $scope.getAppList_nonSort(currentPageAdd,$scope.searchTitle);
	        }
	        else
	        {
	            console.log('AppclassMaintainMgController 管理_企业应用_企业分类：分类维护添加分类应用列表页码越界！');
	        }
	    };
	    //点击加号图标添加应用
	    $scope.addApp=function(sortId){
	        $rootScope.fadeShow=true;
	        $scope.addAppShow=true;
	        $scope.getAppList_nonSort($scope.currentPageAdd,'');
	    }
	    //数组去重
	    $scope.arrUnique=function unique(arr) {
	        var result = [], hash = {};
	        for (var i = 0, elem; (elem = arr[i]) != null; i++) {
	            if (!hash[elem]) {
	                result.push(elem);
	                hash[elem] = true;
	            }
	        }
	        return result;
	    }
	    //定义存储添加应用列表中选中值
	    var appIdList=[];
	    //添加应用弹出框点击选中一条分类应用
	    $scope.checkApp=function(chk,appId){

	        if(chk===false){
	            for(var i=0;i<appIdList.length;i++)
	            {
	                if(appId===appIdList[i])
	                {
	                    appIdList.splice(i,1)
	                }
	            }
	        }
	        if(chk===true)
	        {
	            appIdList.push(appId);
	        }
	        var newArrApp=$scope.arrUnique([appIdList]);
	    }
	    //点击添加应用弹出框中点击确认
	    $scope.addAppSave=function() {
	        var sortId = $scope.sortId;
	        AppclassMaintainMgService.addApp(appIdList, sortId).then(function (data) {
	            if(data.flag == true){
	                $scope.getList(1,sortId,'','','');
	            }
	        });
	        $scope.addAppShow=false;
	        $rootScope.fadeShow=false;
	    }
	    //添加应用弹出框中点击关闭
	    $scope.closeAddAppWindow=function(){
	        $scope.addAppShow=false;
	        $rootScope.fadeShow=false;
	    }
	    //搜索添加应用列表
	    $scope.searchAddApp=function(){
	        var searchTitle=$scope.searchTitle;
	        getAppList_nonSort(1,searchTitle);
	    }
	}

/***/ },
/* 57 */
/***/ function(module, exports) {

	/**
	 * Created by Sky on 2016/3/28.
	 */
	module.exports=function($stateParams, $http, $q, httpservice, Session) {
	    var AppclassMaintainMgService = {};
	    //获取我的分类菜单列表数据
	    AppclassMaintainMgService.getMenu = function (menuId,orderId,menuName,operation,sortStatus) {
	        var deferred = $q.defer();
	        $http({
	            method: 'GET',
	            url: httpservice.AppMaintainclassMenuManage,
	            params: {
	                'sessionId': Session.id,
	                'userId': Session.userId,
	                'companyId':Session.companyId,
	                'sortId':menuId,
	                'orderId':orderId,
	                'sortName':menuName,
	                'operation':operation,
	                'sortStatus':sortStatus
	            }
	        }).then(function successCallback(response) {
	            deferred.resolve(response.data);
	        }, function errorCallback(response) {
	            deferred.reject(response.data);
	        });
	        return deferred.promise;
	    };
	    //获取我的分类菜单列表数据
	    AppclassMaintainMgService.getData = function (currentPage,menuSortId,orderId,appId,operation) {
	        var deferred = $q.defer();
	        $http({
	            method: 'GET',
	            url: httpservice.AppMaintainclassListManage,
	            params: {
	                'sessionId': Session.id,
	                'userId': Session.userId,
	                'companyId':Session.companyId,
	                'page': currentPage,
	                'pageSize': 4,
	                'sortId':menuSortId,
	                'orderId':orderId,
	                'appId':appId,
	                'operation':operation
	            }
	        }).then(function successCallback(response) {
	            //当前页
	            var maxPage = currentPage;
	            if(maxPage === ""){
	                maxPage = 1;
	            }
	            //总页数
	            var total = response.data.total;
	            var startPage = response.data.startPage;
	            var endPage = response.data.endPage;
	            if(total <= maxPage){
	                maxPage = total;
	            }
	            if(maxPage<=0){
	                maxPage = 1;
	            }
	            var totalPas = {};

	            for(var i=startPage;i<=endPage;i++){
	                totalPas[i-1] = i;
	            }
	            //设置当前页和总页数
	            response.data.totalPage =total;
	            response.data.nowPage = maxPage+"/"+total;
	            response.data.totalPas = totalPas;
	            response.data.page = maxPage;
	            deferred.resolve(response.data);
	        }, function errorCallback(response) {
	            deferred.reject(response.data);
	        });
	        return deferred.promise;
	    };
	    //获取分类维护未分类的应用列表数据
	    AppclassMaintainMgService.getAppList_nonSort = function (currentPage,searchTitle) {

	        var deferred = $q.defer();
	        $http({
	            method: 'GET',
	            url: httpservice.AppappListManage,
	            params: {
	                'sessionId': Session.id,
	                'userId': Session.userId,
	                'companyId':Session.companyId,
	                'searchTitle':searchTitle,
	                'page': currentPage,
	                'pageSize': 3
	            }
	        }).then(function successCallback(response) {
	            //当前页
	            var maxPage = currentPage;
	            if(maxPage === ""){
	                maxPage = 1;
	            }
	            //总页数
	            var total = response.data.total;
	            var startPage = response.data.startPage;
	            var endPage = response.data.endPage;
	            if(total <= maxPage){
	                maxPage = total;
	            }
	            if(maxPage<=0){
	                maxPage = 1;
	            }
	            var totalPas = {};

	            for(var i=startPage;i<=endPage;i++){
	                totalPas[i-1] = i;
	            }
	            //设置当前页和总页数
	            response.data.totalPage =total;
	            response.data.nowPage = maxPage+"/"+total;
	            response.data.totalPas = totalPas;
	            response.data.page = maxPage;
	            deferred.resolve(response.data);
	        }, function errorCallback(response) {
	            deferred.reject(response.data);
	        });
	        return deferred.promise;
	    };
	    //保存添加的应用分类
	    AppclassMaintainMgService.addApp = function (appIdList,menuSortId) {
	        var deferred = $q.defer();
	        $http({
	            method: 'GET',
	          //  url: httpservice.appListManage,
	             url: httpservice.AppappListAddManage,
	            params: {
	                'sessionId': Session.id,
	                'userId': Session.userId,
	                'companyId':Session.companyId,
	                'appIdList':appIdList,
	                'sortId':menuSortId
	            }
	        }).then(function successCallback(response) {
	            deferred.resolve(response.data);
	        }, function errorCallback(response) {
	            deferred.reject(response.data);
	        });
	        return deferred.promise;
	    };
	    return AppclassMaintainMgService;
	}

/***/ },
/* 58 */
/***/ function(module, exports) {

	/**
	 * Created by Sky on 2016/3/30.
	 */
	module.exports=function($rootScope,$scope,$timeout,fileReader,businessInfoMgService) {
	    $scope.msgBoxShow_saveBu=false;
	    $scope.msgBoxShow_testServer=false;
	    $scope.serverSelected={"value":0,"name":"00000"};
	    $scope.imageSrc='';
	    $scope.clickSave=false;
	    $scope.Bu_CompanyName=false;
	    $scope.Bu_CompanyPhone=false;

	    //调用了fileReader service中的readAsDataUrl方法，此方法中生成了图片的地址url
	    $scope.getFile = function () {

	        fileReader.readAsDataUrl($scope.file, $scope)
	            .then(function(result) {
	               $scope.imageSrc = result;
	                // 组装表单数据
	                var postData = {
	                    fileName: $scope.imageSrc
	                };
	                var fd=new FormData();
	                fd.append("logoImg",$scope.imageSrc);
	                businessInfoMgService.upLoadImg(fd).then(function(data){
	                    angular.element('#personImageId').scope().personImage =  data.image;
	                    console.log(data);
	                },function(){
	                    console.log('businessInfoMgController 管理_企业应用_企业信息：上传logo信息失败！');
	                });
	            });
	    };

	    //服务器验证弹出框
	    $scope.serverShow=false;
	    //企业基本信息
	    $scope.businessInfo={
	        companyName:"",
	        companyAddress:"",
	        companyWebSet:"",
	        phone:"",
	        fax:"",
	        serverInfo:'',
	        selectId:"",
	        imageSrc:''
	    };
	    //获取企业基本信息
	    function getBusinessInfo(businessInfo){
	        $scope.businessInfo.imageSrc='';
	        businessInfoMgService.getBusinessInfo(businessInfo).then(function(data){
	            $scope.businessInfo=data.businessInfo;
	            $scope.imageSrc= $scope.businessInfo.imageSrc;
	            for(var i=0;i<$scope.businessInfo.serverInfo.length;i++){//遍历下拉菜单选中项
	               if( $scope.businessInfo.serverInfo[i].value==$scope.businessInfo.selectId){
	                   $scope.serverSelected= $scope.businessInfo.serverInfo[i];
	               }
	            }
	            if( $scope.clickSave==true)
	            {

	                $scope.msgBoxShow_saveBu=true;
	                $timeout(
	                    $scope.closeMsgBox_saveBu,
	                    3000
	                );
	                if(data.flag==false){
	                    $scope.testBuResult='保存失败！';
	                }
	                else
	                {
	                    $scope.testBuResult='保存成功！';
	                }
	            }

	        },function(data){
	            $scope.msgBoxShow_saveBu=true;
	            $scope.testBuResult='保存失败！';
	            console.log('businessInfoMgController 管理_企业应用_企业信息：获取基本信息保存失败！');
	        });
	    };
	    getBusinessInfo('');
	    //关闭保存错误提示框
	    $scope.closeMsgBox_saveBu=function(){
	        $scope.msgBoxShow_saveBu=false;
	    };
	    //点击保存企业基本信息
	    $scope.saveBusinessInfo=function(businessInfo){
	        if(businessInfo.companyName==''||businessInfo.companyName==null||businessInfo.companyName==undefined)
	        {
	            $scope.Bu_CompanyName=true;
	        }
	        if(businessInfo.phone==''||businessInfo.phone==null||businessInfo.phone==undefined)
	        {
	            $scope.Bu_CompanyPhone=true;
	        }
	        $scope.clickSave=true;
	        $scope.businessInfo.selectId=$scope.serverSelected.value;
	        if((businessInfo.companyName!=''&&businessInfo.companyName!=null&&businessInfo.companyName!=undefined)&&businessInfo.phone!=''&&businessInfo.phone!=null&&businessInfo.phone!=undefined)
	        {
	            getBusinessInfo(businessInfo);
	        }

	    };
	    //点击配置服务下拉菜单
	    $scope.onChange=function(serverSelected){
	        $scope.businessInfo.selectId=serverSelected.value;
	        $scope.serverShow=true;
	        $rootScope.fadeShow=true;
	        $scope.serverSelected=serverSelected;
	        businessInfoMgService.getServerInfo(serverSelected.value).then(function(data){
	            $scope.serverInfos=data.serverInfo;
	        },function(){
	            console.log('businessInfoMgController 管理_企业应用_企业信息：查询服务器信息失败！');
	        });
	    };
	    //关闭服务配置测试结果提示框
	    $scope.closeMsgBox_testServer=function(){
	        $scope.msgBoxShow_testServer=false;
	    };
	    //点击确认服务配置
	    $scope.saveServerInfo=function(serverInfo){
	        businessInfoMgService.saveServerInfo(serverInfo,$scope.serverSelected.value).then(function(data){
	            $scope.serverInfos=data.serverInfo;
	            $scope.serverShow=false;
	            $rootScope.fadeShow=false;
	        },function(){
	            console.log('businessInfoMgController 管理_企业应用_企业信息：确认服务器信息失败！');
	        });
	    };
	    //点击测试服务配置
	    $scope.testServerInfo=function(serverInfo){
	        businessInfoMgService.testServerInfo(serverInfo,$scope.serverSelected.value).then(function(data){
	            $scope.msgBoxShow_testServer=true;
	            if(data.flag==false){
	                $scope.testServerResult='测试失败！';
	            }
	            else
	            {
	              $scope.testServerResult='测试成功！';
	            }

	        },function(){
	            $scope.msgBoxShow_testServer=true;
	            $scope.testServerResult='测试失败！';
	            console.log('businessInfoMgController 管理_企业应用_企业信息：测试服务器信息失败！');
	        });
	    };
	    //点击取消服务器弹出框
	    $scope.closeServer=function(){
	        $scope.serverShow=false;
	        $rootScope.fadeShow=false;
	    };

	};

/***/ },
/* 59 */
/***/ function(module, exports) {

	/**
	 * Created by Sky on 2016/3/30.
	 */
	module.exports=function($stateParams, $http, $q, httpservice, Session) {
	    var businessInfoMgService = {};
	    //保存企业基本信息
	    businessInfoMgService.getBusinessInfo=function (businessInfo) {
	        var deferred = $q.defer();
	        $http({
	            method: 'POST',
	            url: httpservice.businessInfoManage,
	            params: {
	                'sessionId': Session.id,
	                'userId': Session.userId,
	                'companyId':Session.companyId,
	                'businessInfo':businessInfo,
	            }
	        }).then(function successCallback(response) {
	            deferred.resolve(response.data);
	        }, function errorCallback(response) {
	            deferred.reject(response.data);
	        });
	        return deferred.promise;
	    };
	    //保存企业logo信息
	    businessInfoMgService.upLoadImg=function (postData) {
	        var deferred = $q.defer();
	        $http({
	            method: 'POST',
	            url: httpservice.businessLogoManage,
	            params: {
	                'sessionId': Session.id,
	                'userId': Session.userId,
	                'companyId':Session.companyId,
	            },
	            headers: {'Content-Type': undefined},
	            data:postData
	        }).then(function successCallback(response) {
	            deferred.resolve(response.data);
	        }, function errorCallback(response) {
	            deferred.reject(response.data);
	        });
	        return deferred.promise;
	    };
	    //获取配置服务信息
	    businessInfoMgService.getServerInfo= function (serverSelected) {
	        var deferred = $q.defer();
	        $http({
	            method: 'GET',
	            url: httpservice.serverInfoManage,
	            params: {
	                'sessionId': Session.id,
	                'userId': Session.userId,
	                'companyId':Session.companyId,
	                'selectId':serverSelected
	            }
	        }).then(function successCallback(response) {
	            deferred.resolve(response.data);
	        }, function errorCallback(response) {
	            deferred.reject(response.data);
	        });
	        return deferred.promise;
	    };
	    //确认服务配置信息
	    businessInfoMgService.saveServerInfo= function (serverInfo,selectId) {
	        var deferred = $q.defer();
	        $http({
	            method: 'GET',
	            url: httpservice.serverInfoSaveManage,
	            params: {
	                'sessionId': Session.id,
	                'userId': Session.userId,
	                'companyId':Session.companyId,
	                'serverInfo':serverInfo,
	                'selectId':selectId
	            }
	        }).then(function successCallback(response) {
	            deferred.resolve(response.data);
	        }, function errorCallback(response) {
	            deferred.reject(response.data);
	        });
	        return deferred.promise;
	    };
	    //测试服务配置信息
	    businessInfoMgService.testServerInfo= function (serverInfo,selectId) {
	        var deferred = $q.defer();
	        $http({
	            method: 'GET',
	            url: httpservice.serverInfoTestManage,
	            params: {
	                'sessionId': Session.id,
	                'userId': Session.userId,
	                'companyId':Session.companyId,
	                'serverInfo':serverInfo,
	                'selectId':selectId
	            }
	        }).then(function successCallback(response) {
	            deferred.resolve(response.data);
	        }, function errorCallback(response) {
	            deferred.reject(response.data);
	        });
	        return deferred.promise;
	    };
	    return businessInfoMgService;

	}

/***/ },
/* 60 */
/***/ function(module, exports) {

	/**
	 * Created by Sky on 2016/3/30.
	 */
	module.exports=function($rootScope,$scope,businessInfoUserMgService) {
	    $scope.in_grouoId = 0;//存储grouoId
	    //默认新建和编辑用户弹出框，用户组弹出框，导入弹出框均为隐藏
	    $scope.pros;
	    $scope.pro= [];
	    $scope.page = 1;
	    $scope.pageSize = 5;
	    $scope.userShow=false;
	    $scope.userGroupShow=false;
	    $scope.userImportShow=false;
	    $scope.editUserPhone1=false;
	    $scope.editUserName1=false;
	    $scope.editUserEmail1=false;
	    $scope.searchTitle_user='';
	    $scope.user={
	        "userId":'',
	        "userName": '',
	        "userPhone": '',
	        "userEmail": '',
	        "groupId":'',
	        "orderId":''
	    };
	    $scope.userGroupList={};
	    $scope.groupId='all';
	    $scope.currentPage=1;
	    $scope.currentPageImport=1;
	    var oldUser=null;
	    var oldUserList=null;
	    var oldIndex=0;
	    $scope.oprFlag='create';
	    $scope.msgBoxShow_oprUser=false;
	    $scope.editUserName=false;
	    $scope.editUserPhone=false;
	    $scope.editUserEmail=false;
	    $scope.choseArrImport;
	    $scope.chkAllImport=false;
	    //获取用户组下拉框列表数据
	    businessInfoUserMgService.getUserGroup_select().then(function(data){
	        $scope.userGroupList_select=data.userGroupList;
	    },function(){
	        console.log('businessInfoUserController 管理_企业应用_企业信息（用户）：用户组下拉菜单加载失败！');
	    });
	    //获取左侧tree用户组列表
	  function getUserGroup(){
	    businessInfoUserMgService.getUserGroup().then(function(data){
	        $scope.userGroupList=data.userGroupList;
	       //绑定tree数据
	        $scope.treeBind();
	    },function(){
	        console.log('businessInfoUserController 管理_企业应用_企业信息（用户）：用户组菜单加载失败！');
	    });
	    };
	    getUserGroup();
	    //关闭删除错误提示框
	    $scope.closeMsgBox_oprUser=function(){
	        $scope.msgBoxShow_oprUser=false;
	    };
	    //tree列表绑定数据
	    $scope.treeBind=function() {
	        $('#treeUserGroup').treeview({
	            expandIcon: 'fa fa-plus-square',
	            collapseIcon: 'fa fa-minus-square',
	            nodeIcon: "fa fa-users usersGroup",
	            data: $scope.userGroupList,
	           onNodeSelected: function (event, data) {
	               $scope.chkAll=false;
	               getUsers(data.groupId,$scope.searchTitle_user,1);
	               $scope.groupId=data.groupId;
	             }
	        });
	    };

	    //定义存储添加用户
	    var str="";//
	    $scope.choseArr=[];//定义数组用于存放前端显示
	    var flag='';//是否点击了全选，是为a
	    $scope.chk=false;//默认未选中

	    //选中全部用户
	    $scope.checkUserAll= function (checkAll,user) {//全选
	        if(checkAll==true){
	            $scope.chk=true;
	            var arrUser=new Array();
	            for(var i=0;i<user.length;i++)
	            {
	                arrUser.push(user[i].userId);
	            }
	            $scope.choseArr=arrUser;
	        }else{
	            $scope.chk=false;
	            $scope.choseArr=[];
	        }
	        flag='a';
	    };
	    //选中用户
	    $scope.checkUser= function (chk,userId) {//单选或者多选
	        if(flag=='a') {//在全选的基础上操作
	            str = $scope.choseArr.join(',') + ',';
	        }
	        if (chk == true) {//选中
	            str = str + userId + ',';
	        } else {
	            str = str.replace(userId + ',', '');//取消选中
	        }
	        $scope.choseArr=(str.substr(0,str.length-1)).split(',');
	    };
	    //定义存储添加用户
	    var strImport="";//
	    $scope.userImportIdList=[];//定义数组用于存放前端显示
	    var flagImport='';//是否点击了全选，是为a
	    $scope.chkImport=false;//默认未选中
	    //选中全部导入用户
	    $scope.checkUserImportAll= function (checkAllImport,users) {//全选
	        for(var i = 0; i< users.length; i++ ){
	            var user = users[i];
	            var index =  $scope.pros.indexOf(user);
	            user.ischeck=checkAllImport;
	            $scope.pros.splice(index, 1, user);
	        }
	    };
	    //选中导入用户
	    $scope.checkUserImport= function (user) {//单选或者多选
	        var index =  $scope.pros.indexOf(user);
	        user.ischeck=!user.ischeck;
	        $scope.pros.splice(index, 1, user);
	    };
	    //点击导入用户窗口确认
	    $scope.saveImportUsers=function(){
	        var count = 0;//临时变量，存储数组下标
	        for(var i = 0; i<$scope.pros.length; i++ ){
	            if($scope.pros[i].ischeck == true){
	               $scope.pro[count++] = $scope.pros[i];
	            }
	        }
	        //var choseArrImport= $scope.choseArrImport;
	        if($scope.in_grouoId == 0){
	        }else{
	            businessInfoUserMgService.saveImportUsers($scope.pro,$scope.in_grouoId).then(function(data){
	                if(data.flag == true){
	                    $scope.userImportShow=false;
	                    $rootScope.fadeShow=false;
	                    $('#treeUserGroup ul li').css('background-color','#ffffff');
	                    $('#treeUserGroup ul li').css('color','#000000');
	                    getUsers($scope.in_grouoId,'',1);//导入成功，加载默认列表数据
	                }
	            },function(){
	                console.log('businessInfoUserController 管理_企业应用_企业信息（用户）：导入用户失败！');
	            });
	        }

	    };
	    //搜索框
	    $scope.sousuo =  function(val){
	        if(val!=null&&val!=undefined&&val!=''){
	            $scope.importUserSearch(val,'',1);
	        }
	    };
	    //删除用户请求方法
	    function deleteUsers(userId,currentPage){
	        businessInfoUserMgService.deleteUsers(userId,currentPage).then(function(data){
	        $scope.userList=data.userList;
	        $scope.totalPage = data.totalPage;
	        $scope.nowPage = data.nowPage;
	        $scope.totalPas = data.totalPas;
	        $scope.currentPage = data.page;
	            $scope.chkAll=false;
	            $scope.msgBoxShow_oprUser=true;
	            if(data.flag==false){
	                $scope.oprErrMsg='删除失败！';
	            }
	            else
	            {
	                $scope.oprErrMsg='删除成功！';
	            }
	    },function(){
	            $scope.msgBoxShow_oprUser=true;
	            $scope.oprErrMsg='删除失败！';
	        console.log('businessInfoUserController 管理_企业应用_企业信息（用户）：用户删除失败！');
	    });
	    }
	    //点击每条数据删除用户
	    $scope.userDel=function(userId,operation){
	        $scope.searchTitle_user='';
	        deleteUsers(userId,1);
	        $scope.chkAll=false;
	    };
	    //点击批量删除
	    $scope.deleteAll= function () {// 操作CURD
	        $scope.msgBoxShow_oprUser=false;
	        var groupId=$scope.groupId;
	       $scope.searchTitle='';
	        if($scope.choseArr[0]==""||$scope.choseArr.length==0){//没有选择一个的时候提示
	            $scope.msgBoxShow_oprUser=true;
	           $scope.oprErrMsg='请至少选择一条数据进行删除！';
	            return;
	        };
	        var userIdList=$scope.choseArr.join(',');
	        deleteUsers(userIdList,1);
	        $scope.chkAll=false;
	    };
	    //获取groupId
	    $scope.onChange = function(importUserGroup){
	        $scope.in_grouoId = importUserGroup;
	    }
	    //获取所有用户
	   function  getUsers(groupId,searchTitle,currentPage){
	        businessInfoUserMgService.getUsers(groupId,searchTitle,currentPage).then(function(data){
	            $scope.userList=data.userList;
	            $scope.totalPage = data.totalPage;
	            $scope.nowPage = data.nowPage;
	            $scope.totalPas = data.totalPas;
	            $scope.currentPage = data.page;
	        },function(){
	            console.log('businessInfoUserController 管理_企业应用_企业信息（用户）：获取用户数据失败！');
	        });
	    };
	   //默认获取所有用户
	    getUsers('all','',1);
	    //点击改变页码
	    $scope.changePage=function(currentPage){
	        var groupId=$scope.groupId;
	        var searchTitle=$scope.searchTitle_user;
	        if(currentPage <= $scope.totalPage&&currentPage>0)
	        {
	            getUsers(groupId,searchTitle,currentPage);
	        }
	        else
	        {
	            console.log('businessInfoUserController 管理_我的任务_我的申请:我的申请列表页码越界');
	        }
	    };
	    //点击新建用户
	    $scope.addUser=function(){
	        $scope.editUserPhone1=false;
	        $scope.editUserEmail1=false;
	        $scope.editUserName1=false;
	        $scope.oprFlag='create';
	        $rootScope.fadeShow=true;
	        $scope.userShow=true;
	        $scope.user={
	            "userId":'',
	            "userName": '',
	            "userPhone": '',
	            "userEmail": '',
	            "groupId":'',
	            "orderId":''
	        }
	        $scope.userGroupSelected=-1;
	    };
	    //点击导入用户
	    $scope.importUser=function(){
	        $rootScope.fadeShow=true;
	        $scope.userImportShow=true;
	        $scope.importUserSearch('','',$scope.page);
	    };
	    //$scope.getListDaoRuData = function(s,attr,sta){
	    //    businessInfoUserMgService.getListDaoRuData(s,attr,sta).then(function(data){
	    //        $scope.pros = data.pro;
	    //        console.log($scope.pros);
	    //        $scope.totalPageImport = data.totalPage;
	    //        $scope.nowPageImport = data.nowPage;
	    //        $scope.totalPasImport = data.totalPas;
	    //        $scope.currentPageImport = data.page;
	    //    },function(){
	    //        console.log('businessInfoUserController 管理_企业应用_企业信息（用户）：导入用户查询失败！');
	    //    });
	    //};
	    //点击关闭导入用户窗口
	    $scope.closeImportUser=function(){
	        $scope.userImportShow=false;
	        $rootScope.fadeShow=false;

	    };
	    //导入用户搜索条件
	    $scope.importUserTitle='';
	    $scope.importUserGroup='';
	    //点击导入用户搜索
	    $scope.importUserSearch=function(importUserTitle,importUserGroup,currentPageImport){

	        businessInfoUserMgService.importUserSearch(importUserTitle,importUserGroup,currentPageImport).then(function(data){
	            $scope.pros=data.pro;
	            console.log(data.pro);
	            $scope.totalPageImport = data.totalPage;
	            $scope.nowPageImport = data.nowPage;
	            $scope.totalPasImport = data.totalPas;
	            $scope.currentPageImport = data.page;
	        },function(){
	            console.log('businessInfoUserController 管理_企业应用_企业信息（用户）：导入用户查询失败！');
	        });
	    };
	    //点击改变页码
	    $scope.changePageImport=function(currentPageImport){
	        if(currentPageImport <= $scope.totalPageImport&&currentPageImport>0 )
	        {
	            $scope.importUserSearch($scope.importUserTitle,$scope.importUserGroup,currentPageImport);
	        }
	        else
	        {
	            console.log('businessInfoUserController 管理_企业应用_企业信息（用户）:用户导入列表页码越界');
	        }
	    };

	    //禁用，启用，移除用户
	    $scope.userOperation=function(userId,groupId,operation){
	        if(operation=='remove')
	        {
	            $scope.searchTitle_user='';
	        }
	        var searchTitle=$scope.searchTitle_user;
	        businessInfoUserMgService.userOperation(userId,groupId,searchTitle,operation,1).then(function(data){
	            $scope.userList=data.userList;
	            $scope.totalPage = data.totalPage;
	            $scope.nowPage = data.nowPage;
	            $scope.totalPas = data.totalPas;
	            $scope.currentPage = data.page;
	            $scope.msgBoxShow_oprUser=true;
	            if(operation=='remove'){
	                if(data.flag==true)
	                {
	                    $scope.oprErrMsg='移除成功！';
	                }
	                else
	                {
	                    $scope.oprErrMsg='移除失败！';
	                }
	            }
	            else  if(operation=='Y'){
	                if(data.flag==true)
	                {
	                    $scope.oprErrMsg='启用成功！';
	                }
	                else
	                {
	                    $scope.oprErrMsg='启用失败！';
	                }
	            }
	            else  if(operation=='N'){
	                if(data.flag==true)
	                {
	                    $scope.oprErrMsg='禁用成功！';
	                }
	                else
	                {
	                    $scope.oprErrMsg='禁用失败！';
	                }
	            }

	        },function(){
	            if(operation=='remove'){
	                $scope.msgBoxShow_oprUser=true;
	                    $scope.oprErrMsg='移除失败！';
	                console.log('businessInfoUserController 管理_企业应用_企业信息（用户）：用户移除失败！');
	            }
	            else  if(operation=='Y'){
	                    $scope.oprErrMsg='启用失败！';
	                console.log('businessInfoUserController 管理_企业应用_企业信息（用户）：用户启用失败！');
	            }
	            else  if(operation=='N'){
	                    $scope.oprErrMsg='禁用失败！';
	                console.log('businessInfoUserController 管理_企业应用_企业信息（用户）：用户禁用失败！');
	            }

	        });
	    };
	    //批量从用户组中移除用户
	    $scope.removeAll=function(){
	        var userIdList=$scope.choseArr.join(',');
	        $scope.userOperation( userIdList,$scope.groupId,'remove');
	        $scope.chkAll=false;
	    }
	    //点击关闭新建或编辑用户窗口
	    $scope.closeUser=function(user){
	        $rootScope.fadeShow=false;
	        $scope.userShow=false;
	        if(user.userId!=null&&user.userId!=''&&user.userId!=undefined)
	        {
	            $scope.user=oldUser;
	            $scope.userList=oldUserList;
	        }
	        oldUser=null;
	    };
	    //点击编辑用户
	    $scope.editUser=function(index,user){
	        $scope.oprFlag='edit';
	        $scope.userShow=true;
	        $rootScope.fadeShow=true;
	        if(oldUser==null||
	            oldIndex!=index)
	        {
	            oldUser=angular.copy(user);
	            oldUserList=angular.copy($scope.userList);
	            oldIndex=index;
	            $scope.user=user;
	        }

	    };
	    $scope.firstchange_userPhone1 = function(){
	            $scope.editUserPhone1=true;
	    };
	    $scope.firstchange_userName1 = function(){
	        $scope.editUserName1=true;
	    };
	    $scope.firstchange_userEmail1 = function(){
	        $scope.editUserEmail1=true;
	    };
	    $scope.firstchange_userName = function(){

	        //console.log($scope.user);
	        if($scope.user.userName != null){
	            $scope.editUserName=false;
	        }
	    };
	    $scope.firstchange_userPhone = function(){
	        //console.log($scope.user);
	        if($scope.user.userPhone != null){
	            $scope.editUserPhone=false;
	        }
	    };
	    $scope.firstchange_userEmail = function(){
	        //console.log($scope.user);
	        if($scope.user.userEmail != null){
	            $scope.editUserEmail=false;
	        }
	    };

	    //点击确认新建或编辑用户窗口
	    $scope.saveUser=function(user){
	        if(user.userName==''||user.userName==null||user.userName==undefined)
	        {
	            $scope.editUserName1=true;
	            $scope.editUserName=true;
	        }
	        if(user.userEmail==''||user.userEmail==null||user.userEmail==undefined)
	        {
	            $scope.editUserEmail1=true;
	            $scope.editUserEmail=true;
	        }
	        if(user.userPhone==''||user.userPhone==null||user.userPhone==undefined)
	        {
	            $scope.editUserPhone1=true;
	            $scope.editUserPhone=true;
	        }
	        if((user.userName!=''&&user.userName!=null&&user.userName!=undefined)&&(user.userEmail!=''&&user.userEmail!=null&&user.userEmail!=undefined)&&(user.userPhone!=''&&user.userPhone!=null&&user.userPhone!=undefined))
	        {
	            businessInfoUserMgService.saveUsers(user,$scope.searchTitle_user,1).then(function(data){
	                $scope.msgBoxShow_oprUser=true;
	                if( $scope.oprFlag=='edit')
	                {
	                    if(data.flag===true)
	                    {
	                        /* oldUser=null;
	                         oldIndex=0;
	                         oldUser=angular.copy($scope.user);
	                         oldUserList=angular.copy($scope.userList);*/
	                        getUsers($scope.groupId,$scope.searchTitle,1);
	                        $scope.user =angular.copy(oldUser);
	                        $scope.userList=angular.copy(oldUserList);
	                        $scope.oprErrMsg='修改成功！';
	                    }
	                    else
	                    {
	                        $scope.user=angular.copy(oldUser);
	                        $scope.userList=angular.copy(oldUserList);
	                        $scope.oprErrMsg='修改失败！';
	                    }
	                }
	                else
	                {
	                    if(data.flag===true)
	                    {
	                        getUsers($scope.groupId,$scope.searchTitle,1);
	                        $scope.user =angular.copy(oldUser);
	                        $scope.userList=angular.copy(oldUserList);
	                        $scope.oprErrMsg='保存成功！';
	                    }
	                    else
	                    {
	                        $scope.user={};
	                        $scope.oprErrMsg='保存失败！';
	                    }
	                }
	            },function(){
	                $scope.msgBoxShow_oprUser=true;
	                if( $scope.oprFlag=='edit')
	                {
	                    $scope.oprErrMsg='修改失败！';
	                    console.log('businessInfoUserMgController 管理_企业应用_企业信息（用户组）：编辑用户失败！');
	                }
	                else
	                {
	                    $scope.oprErrMsg='添加失败！';
	                    console.log('businessInfoUserMgController 管理_企业应用_企业信息（用户组）：新建用户失败！');
	                }

	            });
	            $rootScope.fadeShow=false;
	            $scope.userShow=false;
	        }


	    };
	    //点击搜素用户
	    $scope.searchUser=function(searchTitle){
	       getUsers($scope.groupId,searchTitle,$scope.currentPage);
	    };
	};

/***/ },
/* 61 */
/***/ function(module, exports) {

	/**
	 * Created by Sky on 2016/3/30.
	 */
	module.exports=function($stateParams, $http, $q, httpservice, Session) {
	    var businessInfoUserMgService = {};
	    //获取下拉框用户组数据
	    businessInfoUserMgService.getUserGroup_select=function(){
	        var deferred = $q.defer();
	        $http({
	            method: 'GET',
	            url: httpservice.userGroupSelectManage,
	            params: {
	                'sessionId': Session.id,
	                'userId': Session.userId,
	                'companyId':Session.companyId
	            }
	        }).then(function successCallback(response) {
	            deferred.resolve(response.data);
	        }, function errorCallback(response) {
	            deferred.reject(response.data);
	        });
	        return deferred.promise;
	    };
	    //获取tree用户组数据
	    businessInfoUserMgService.getUserGroup=function(){
	        var deferred = $q.defer();
	        $http({
	            method: 'GET',
	            url: httpservice.userGroupManage,
	            params: {
	                'sessionId': Session.id,
	                'userId': Session.userId,
	                'companyId':Session.companyId,
	                'userGroup':'user'
	            }
	        }).then(function successCallback(response) {
	            deferred.resolve(response.data);
	        }, function errorCallback(response) {
	            deferred.reject(response.data);
	        });
	        return deferred.promise;
	    };
	    //查询用户列表
	    businessInfoUserMgService.getUsers=function(groupId,searchTitle,currentPage){
	        var deferred = $q.defer();
	        $http({
	            method: 'GET',
	            url: httpservice.userManage,
	            params: {
	                'sessionId': Session.id,
	                'userId': Session.userId,
	                'companyId':Session.companyId,
	                'groupId':groupId,
	                'currentPage':currentPage,
	                'pageSize':6,
	                'searchTitle':searchTitle
	        }
	        }).then(function successCallback(response) {
	            //当前页
	            var maxPage = currentPage;
	            if(maxPage === ""){
	                maxPage = 1;
	            }
	            //总页数
	            var total = response.data.total;
	            var startPage = response.data.startPage;
	            var endPage = response.data.endPage;
	            if(total <= maxPage){
	                maxPage = total;
	            }
	            if(maxPage<=0){
	                maxPage = 1;
	            }
	            var totalPas = {};

	            for(var i=startPage;i<=endPage;i++){
	                totalPas[i-1] = i;
	            }
	            //设置当前页和总页数
	            response.data.totalPage =total;
	            response.data.nowPage = maxPage+"/"+total;
	            response.data.totalPas = totalPas;
	            response.data.page = maxPage;
	            deferred.resolve(response.data);
	        }, function errorCallback(response) {
	            deferred.reject(response.data);
	        });
	        return deferred.promise;
	    };
	    //查询用户列表
	    businessInfoUserMgService.saveUsers=function(user){
	        var deferred = $q.defer();
	        $http({
	            method: 'GET',
	            url: httpservice.userSaveManage,
	            params: {
	                'sessionId': Session.id,
	                'userId': Session.userId,
	                'companyId':Session.companyId,
	                'user':user
	            }
	        }).then(function successCallback(response) {
	            deferred.resolve(response.data);
	        }, function errorCallback(response) {
	            deferred.reject(response.data);
	        });
	        return deferred.promise;
	    };
	    //上移，下移，删除用户后获取用户列表
	    businessInfoUserMgService.userOperation=function(userId,groupId,searchTitle,operation,currentPage){
	        var deferred = $q.defer();
	        $http({
	            method: 'GET',
	            url: httpservice.userOprManage,
	            params: {
	                'sessionId': Session.id,
	                'userId': Session.userId,
	                'companyId':Session.companyId,
	                'groupId':groupId,
	                'userId_mg':userId,
	                'searchTitle':searchTitle,
	                'operation':operation,
	                'currentPage':currentPage,
	                'pageSize':10
	            }
	        }).then(function successCallback(response) {
	            //当前页
	            var maxPage = currentPage;
	            if(maxPage === ""){
	                maxPage = 1;
	            }
	            //总页数
	            var total = response.data.total;
	            var startPage = response.data.startPage;
	            var endPage = response.data.endPage;
	            if(total <= maxPage){
	                maxPage = total;
	            }
	            if(maxPage<=0){
	                maxPage = 1;
	            }
	            var totalPas = {};

	            for(var i=startPage;i<=endPage;i++){
	                totalPas[i-1] = i;
	            }
	            //设置当前页和总页数
	            response.data.totalPage =total;
	            response.data.nowPage = maxPage+"/"+total;
	            response.data.totalPas = totalPas;
	            response.data.page = maxPage;
	            deferred.resolve(response.data);
	        }, function errorCallback(response) {
	            deferred.reject(response.data);
	        });
	        return deferred.promise;
	    };
	    //删除用户
	    businessInfoUserMgService.deleteUsers=function(userIdList,currentPage){
	        var deferred = $q.defer();
	        $http({
	            method: 'GET',
	            url: httpservice.userDelManage,
	            params: {
	                'sessionId': Session.id,
	                'userId': Session.userId,
	                'companyId':Session.companyId,
	                'userId_mg':userIdList,
	                'currentPage':currentPage,
	                'pageSize':10
	            }
	        }).then(function successCallback(response) {
	            //当前页
	            var maxPage = currentPage;
	            if(maxPage === ""){
	                maxPage = 1;
	            }
	            //总页数
	            var total = response.data.total;
	            var startPage = response.data.startPage;
	            var endPage = response.data.endPage;
	            if(total <= maxPage){
	                maxPage = total;
	            }
	            if(maxPage<=0){
	                maxPage = 1;
	            }
	            var totalPas = {};

	            for(var i=startPage;i<=endPage;i++){
	                totalPas[i-1] = i;
	            }
	            //设置当前页和总页数
	            response.data.totalPage =total;
	            response.data.nowPage = maxPage+"/"+total;
	            response.data.totalPas = totalPas;
	            response.data.page = maxPage;
	            deferred.resolve(response.data);
	        }, function errorCallback(response) {
	            deferred.reject(response.data);
	        });
	        return deferred.promise;
	    };
	    //点击导入查询数据
	    businessInfoUserMgService.getListDaoRuData = function(attr,sta){
	        var deferred = $q.defer();
	        $http({
	            method: 'GET',
	            url: httpservice.selectUserDaoRuSave,
	            params: {
	                'sessionId': Session.id,
	                'userId': Session.userId,
	                'companyId':Session.companyId,
	                'page':attr,
	                'pageSize':sta
	            }
	        }).then(function successCallback(response) {
	            //当前页
	            var maxPage = attr;
	            if(maxPage === ""){
	                maxPage = 1;
	            }
	            //总页数
	            var total = response.data.total;
	            var startPage = response.data.startPage;
	            var endPage = response.data.endPage;
	            if(total <= maxPage){
	                maxPage = total;
	            }
	            if(maxPage<=0){
	                maxPage = 1;
	            }
	            var totalPas = {};

	            for(var i=startPage;i<=endPage;i++){
	                totalPas[i-1] = i;
	            }
	            //设置当前页和总页数
	            response.data.totalPage =total;
	            response.data.nowPage = maxPage+"/"+total;
	            response.data.totalPas = totalPas;
	            response.data.page = maxPage;
	            deferred.resolve(response.data);
	        }, function errorCallback(response) {
	            deferred.reject(response.data);
	        });
	        return deferred.promise;
	    };
	    //点击查询导入用户
	    businessInfoUserMgService.importUserSearch=function(importUserTitle,importUserGroupID,currentPageImport){
	        var deferred = $q.defer();
	        $http({
	            method: 'GET',
	            url: httpservice.selectUserDaoRu,
	            params: {
	                'sessionId': Session.id,
	                'userId': Session.userId,
	                'companyId':Session.companyId,
	                'importUserTitle':importUserTitle,
	                'importUserGroup':importUserGroupID,
	                'page':currentPageImport,
	                'pageSize':5
	            }
	        }).then(function successCallback(response) {
	            //当前页
	            var maxPage = currentPageImport;
	            if(maxPage === ""){
	                maxPage = 1;
	            }
	            //总页数
	            var total = response.data.total;
	            var startPage = response.data.startPage;
	            var endPage = response.data.endPage;
	            if(total <= maxPage){
	                maxPage = total;
	            }
	            if(maxPage<=0){
	                maxPage = 1;
	            }
	            var totalPas = {};

	            for(var i=startPage;i<=endPage;i++){
	                totalPas[i-1] = i;
	            }
	            //设置当前页和总页数
	            response.data.totalPage =total;
	            response.data.nowPage = maxPage+"/"+total;
	            response.data.totalPas = totalPas;
	            response.data.page = maxPage;
	            deferred.resolve(response.data);
	        }, function errorCallback(response) {
	            deferred.reject(response.data);
	        });
	        return deferred.promise;
	    };
	    //点击保存导入用户
	    businessInfoUserMgService.saveImportUsers=function(choseArrImport,groupId){
	        console.log(choseArrImport);
	        var deferred = $q.defer();
	        $http({
	            method: 'POST',
	            url: httpservice.selectUserDaoRuSave,
	            params: {
	                'sessionId': Session.id,
	                'userId': Session.userId,
	                'companyId':Session.companyId,
	                'userList':choseArrImport,
	                'groupId':groupId
	            }
	        }).then(function successCallback(response) {
	            //当前页
	            //var maxPage = currentPage;
	            //if(maxPage === ""){
	            //    maxPage = 1;
	            //}
	            ////总页数
	            //var total = response.data.total;
	            //var startPage = response.data.startPage;
	            //var endPage = response.data.endPage;
	            //if(total <= maxPage){
	            //    maxPage = total;
	            //}
	            //if(maxPage<=0){
	            //    maxPage = 1;
	            //}
	            //var totalPas = {};
	            //
	            //for(var i=startPage;i<=endPage;i++){
	            //    totalPas[i-1] = i;
	            //}
	            ////设置当前页和总页数
	            //response.data.totalPage =total;
	            //response.data.nowPage = maxPage+"/"+total;
	            //response.data.totalPas = totalPas;
	            //response.data.page = maxPage;
	            deferred.resolve(response.data);
	        }, function errorCallback(response) {
	            deferred.reject(response.data);
	        });
	        return deferred.promise;
	    };
	    return businessInfoUserMgService;
	};

/***/ },
/* 62 */
/***/ function(module, exports) {

	/**
	 * Created by Sky on 2016/4/5.
	 */
	module.exports=function($rootScope,$scope,businessInfoUserGroupMgService) {
	    $scope.currentPage=1;
	    $scope.GroupId='all';
	    $scope.s_GroupId = 0;
	    $scope.userGroupShow=false;
	    $scope.editUserGroupName1=false;
	    $scope.userGroup1={
	        "groupId":'',
	        "groupName": ''
	    };
	    $scope.userGroupList={};
	    var oldUserGroup=null;
	    var oldUserGroupList=null;
	    var oldIndex=0;
	    $scope.searchTitle_userGroup='';
	    $scope.oprFlag='create';
	    $scope.msgBoxShow_oprUserGroup=false;
	    $scope.editUserGroupName=false;
	    //获取左侧tree用户组菜单
	   function getUserGroup(){
	        businessInfoUserGroupMgService.getUserGroupTree().then(function(data){
	            $scope.userGroupTree=data.userGroupList;
	            //绑定tree数据
	            treeBind();
	        },function(){
	            console.log('businessInfoUserGroupMgController 管理_企业应用_企业信息（用户组）：用户组加载失败！');
	        });
	    };
	    getUserGroup();
	    //用户组左侧菜单tree列表绑定数据
	    function treeBind() {
	        $('#treeUserGroup').treeview({
	            expandIcon: 'fa fa-plus-square',
	            collapseIcon: 'fa fa-minus-square',
	            nodeIcon: "fa fa-users usersGroup",
	            data:$scope.userGroupTree,
	            onNodeSelected: function (event, data) {
	                $scope.s_GroupId = data.groupId;
	                getUserGroupList(data.groupId,1);
	            }
	        });
	    };

	    //关闭删除错误提示框
	    $scope.closeMsgBox_oprUserGroup=function(){
	        $scope.msgBoxShow_oprUserGroup=false;
	    };
	    //获取用户组下拉框列表数据
	    businessInfoUserGroupMgService.getUserGroup_select().then(function(data){
	        $scope.userGroupList_select=data.userGroupList;
	    },function(){
	        console.log('businessInfoUserGroupController 管理_企业应用_企业信息（用户组）：用户组下拉菜单加载失败！');
	    });

	    //获取用户组列表菜单
	   function getUserGroupList(GroupId,currentPage){
	       var searchTitle=$scope.searchTitle_userGroup;
	        businessInfoUserGroupMgService.getUserGroupList(GroupId,searchTitle,currentPage).then(function(data){
	            $scope.userGroupList=data.userGroupList;
	            $scope.totalPage = data.totalPage;
	            $scope.nowPage = data.nowPage;
	            $scope.totalPas = data.totalPas;
	            $scope.currentPage = data.page;
	        },function(){
	            console.log('businessInfoUserGroupMgController 管理_企业应用_企业信息（用户组）：用户组列表加载失败！');
	        });
	    };
	    getUserGroupList('all',1);
	    //用户组列表点击页码
	     $scope.changePage=function(currentPage){
	        var GroupId=$scope.GroupId;
	        if(currentPage <= $scope.totalPage&&currentPage>0)
	        {
	            getUserGroupList(GroupId,currentPage);
	        }
	        else
	        {
	            console.log('businessInfoUserGroupMgController 管理_企业应用_企业信息（用户组）：用户组列表页码越界');
	        }
	    };

	    //点击新建用户组
	    $scope.createUserGroup=function(){
	        $scope.editUserGroupName=false;
	        $scope.oprFlag='create';
	        $scope.userGroup1={};
	        $scope.userGroup1.lastUserGroup=0;
	        $rootScope.fadeShow=true;
	        $scope.userGroupShow=true;
	    };
	    //点击关闭用户组弹出框
	    $scope.closeUserGroup=function(userGroup1){
	        $('.lastUserGroup_i').css('display','none');
	        $scope.createUserGroupShow=false;
	        $rootScope.fadeShow=false;
	        $scope.userGroupShow=false;
	        var groupId=userGroup1.groupId;
	        if((groupId!=null)&&(groupId!='')&&(groupId!=undefined)||groupId==0)
	        {
	            $scope.userGroup1=oldUserGroup;
	            $scope.userGroupList=oldUserGroupList;
	        }
	        oldUserGroup = null;
	    };
	    //点击编辑用户组
	    $scope.editUserGroup=function(index,userGroup,userGroupList){
	        $scope.createUserGroupShow=true;
	        $scope.oprFlag='edit';
	        if(oldUserGroup==null||oldIndex!=index)
	        {
	            oldUserGroup=angular.copy(userGroup);
	            oldUserGroupList=angular.copy(userGroupList);
	            oldIndex=index;
	            $scope.userGroup1=userGroup;
	        }
	        $rootScope.fadeShow=true;
	        $scope.userGroupShow=true;
	    };
	    $scope.firstchange_userGroupName1 = function(){
	        $scope.editUserGroupName1=true;
	    };
	    $scope.firstchange_userGroupName = function(){
	        //console.log($scope.user);
	        if($scope.userGroup1.groupName != null){
	            $scope.editUserGroupName=false;
	        }
	    };
	    //点击确认用户组新建或编辑
	    $scope.saveUserGroup=function(userGroup1){
	        console.log(userGroup1.lastUserGroup);
	        $scope.editUserGroupName1=false;
	        if(userGroup1.groupName==''||userGroup1.groupName==null||userGroup1.groupName==undefined)
	        {
	            $scope.editUserGroupName1=true;
	            $scope.editUserGroupName=true;
	        }
	        if(userGroup1.lastUserGroup == 0){
	            $('.lastUserGroup_i').css('display','inline-block');
	        }
	        if(userGroup1.groupName!=''&&userGroup1.groupName!=null&&userGroup1.groupName!=undefined&&userGroup1.lastUserGroup!=0)
	        {
	            $('.lastUserGroup_i').css('display','none');
	            businessInfoUserGroupMgService.saveUserGroup(userGroup1,1).then(function(data){
	                $scope.msgBoxShow_oprUserGroup=true;
	                if( $scope.oprFlag=='edit')
	                {
	                    if(data.flag===true)
	                    {

	                        /*
	                         getUserGroup();
	                         oldUserGroup=null;
	                         oldIndex=0;
	                         oldUserGroup=angular.copy($scope.userGroup1);
	                         oldUserGroupList=angular.copy($scope.userGroupList);*/
	                        getUserGroup();
	                        getUserGroupList($scope.s_GroupId,1);
	                        $scope.userGroup1 =angular.copy(oldUserGroup);
	                        $scope.userGroupList=angular.copy(oldUserGroupList);
	                        $scope.oprErrMsg='修改成功！';
	                    }
	                    else
	                    {
	                        $scope.userGroup1=angular.copy(oldUserGroup);
	                        $scope.userGroupList=angular.copy(oldUserGroupList);
	                        $scope.oprErrMsg='修改失败！';
	                    }
	                }
	                else
	                {
	                    if(data.flag===true)
	                    {
	                        businessInfoUserGroupMgService.getUserGroup_select().then(function(data){
	                            $scope.userGroupList_select=data.userGroupList;
	                        },function(){
	                            console.log('businessInfoUserGroupController 管理_企业应用_企业信息（用户组）：用户组下拉菜单加载失败！');
	                        });
	                        getUserGroup();
	                        getUserGroupList($scope.userGroup,1);
	                        $scope.userGroup1 =angular.copy(oldUserGroup);
	                        $scope.userGroupList=angular.copy(oldUserGroupList);
	                        $scope.oprErrMsg='保存成功！';
	                    }
	                    else
	                    {
	                        $scope.userGroup1={};
	                        $scope.oprErrMsg='保存失败！';
	                    }
	                }
	            },function(){
	                console.log('businessInfoUserGroupMgController 管理_企业应用_企业信息（用户组）：编辑用户组失败！');
	            });
	            $rootScope.fadeShow=false;
	            $scope.userGroupShow=false;
	        }


	    }
	    //点击上移，下移，删除用户组
	    $scope.userGroupOperation=function(groupId,orderId,operation){
	        var searchTitle=$scope.searchTitle_userGroup;
	        businessInfoUserGroupMgService.userGroupOperation(groupId,orderId,searchTitle,operation,1).then(function(data){
	            $scope.msgBoxShow_oprUserGroup=true;
	            if(operation=='up'){
	                if(data.flag==true)
	                {
	                    console.log(data);
	                    getUserGroup();
	                    getUserGroupList( $scope.s_GroupId,1);
	                    $scope.oprErrMsg='上移成功！';
	                }
	                else
	                {
	                    $scope.oprErrMsg='上移失败！';
	                }
	            }
	            else  if(operation=='down'){
	                if(data.flag==true)
	                {
	                    getUserGroup();
	                    getUserGroupList($scope.s_GroupId,1);
	                    $scope.oprErrMsg='下移成功！';
	                }
	                else
	                {
	                    $scope.oprErrMsg='下移失败！';
	                }
	            }
	            else  if(operation=='delete'){
	                if(data.flag==true)
	                {
	                    businessInfoUserGroupMgService.getUserGroup_select().then(function(data){
	                        $scope.userGroupList_select=data.userGroupList;
	                    },function(){
	                        console.log('businessInfoUserGroupController 管理_企业应用_企业信息（用户组）：用户组下拉菜单加载失败！');
	                    });
	                    getUserGroup();
	                    getUserGroupList($scope.s_GroupId,1);
	                    $scope.oprErrMsg='删除成功！';
	                }
	                else
	                {
	                    $scope.oprErrMsg='删除失败！';
	                }
	            }
	        },function(){
	            $scope.msgBoxShow_delUserGroup=true;
	            console.log('businessInfoUserGroupMgController 管理_企业应用_企业信息（用户组）：用户组列表加载失败！');
	        });
	    }
	    //点击搜索
	    $scope.searchUserGroup=function(groupName){
	        $scope.searchTitle_userGroup=groupName;
	        getUserGroupList($scope.GroupId,1);
	    }
	};

/***/ },
/* 63 */
/***/ function(module, exports) {

	/**
	 * Created by Sky on 2016/4/5.
	 */
	module.exports=function($stateParams, $http, $q, httpservice, Session) {
	    var businessInfoUserGroupMgService = {};
	    //获取tree用户组数据
	    businessInfoUserGroupMgService.getUserGroupTree=function(){
	        var deferred = $q.defer();
	        $http({
	            method: 'GET',
	            url: httpservice.userGroupManage,
	            params: {
	                'sessionId': Session.id,
	                'userId': Session.userId,
	                'companyId':Session.companyId,
	                'userGroup':'userGroup'
	            }
	        }).then(function successCallback(response) {
	            deferred.resolve(response.data);
	        }, function errorCallback(response) {
	            deferred.reject(response.data);
	        });
	        return deferred.promise;
	    };

	    //获取下拉框用户组数据
	    businessInfoUserGroupMgService.getUserGroup_select=function(){
	        var deferred = $q.defer();
	        $http({
	            method: 'GET',
	            url: httpservice.userGroupSelectManage,
	            params: {
	                'sessionId': Session.id,
	                'userId': Session.userId,
	                'companyId':Session.companyId
	            }
	        }).then(function successCallback(response) {
	            deferred.resolve(response.data);
	        }, function errorCallback(response) {
	            deferred.reject(response.data);
	        });
	        return deferred.promise;
	    };
	    //获取列表用户组数据
	    businessInfoUserGroupMgService.getUserGroupList=function(GroupId,searchTitle,currentPage){
	        var deferred = $q.defer();
	        $http({
	            method: 'GET',
	            url: httpservice.userGroupListManage,
	            params: {
	                'sessionId': Session.id,
	                'userId': Session.userId,
	                'companyId':Session.companyId,
	                'groupId':GroupId,
	                'searchTitle':searchTitle,
	                'page':currentPage,
	                'pageSize':6
	            }
	        }).then(function successCallback(response) {
	            //当前页
	            var maxPage = currentPage;
	            if(maxPage === ""){
	                maxPage = 1;
	            }
	            //总页数
	            var total = response.data.total;
	            var startPage = response.data.startPage;
	            var endPage = response.data.endPage;
	            if(total <= maxPage){
	                maxPage = total;
	            }
	            if(maxPage<=0){
	                maxPage = 1;
	            }
	            var totalPas = {};

	            for(var i=startPage;i<=endPage;i++){
	                totalPas[i-1] = i;
	            }
	            //设置当前页和总页数
	            response.data.totalPage =total;
	            response.data.nowPage = maxPage+"/"+total;
	            response.data.totalPas = totalPas;
	            response.data.page = maxPage;
	            deferred.resolve(response.data);
	        }, function errorCallback(response) {
	            deferred.reject(response.data);
	        });
	        return deferred.promise;
	    };
	    //上移，下移，删除后获取用户组列表数据
	    businessInfoUserGroupMgService.userGroupOperation=function(groupId,orderId,searchTitle,operation,currentPage){
	        var deferred = $q.defer();
	        $http({
	            method: 'GET',
	            url: httpservice.userGroupListOprManage,
	            params: {
	                'sessionId': Session.id,
	                'userId': Session.userId,
	                'companyId':Session.companyId,
	                'groupId':groupId,
	                'orderId':orderId,
	                'searchTitle':searchTitle,
	                'operation':operation,
	                'page':currentPage,
	                'pageSize':10
	            }
	        }).then(function successCallback(response) {
	            //当前页
	            var maxPage = currentPage;
	            if(maxPage === ""){
	                maxPage = 1;
	            }
	            //总页数
	            var total = response.data.total;
	            var startPage = response.data.startPage;
	            var endPage = response.data.endPage;
	            if(total <= maxPage){
	                maxPage = total;
	            }
	            if(maxPage<=0){
	                maxPage = 1;
	            }
	            var totalPas = {};

	            for(var i=startPage;i<=endPage;i++){
	                totalPas[i-1] = i;
	            }
	            //设置当前页和总页数
	            response.data.totalPage =total;
	            response.data.nowPage = maxPage+"/"+total;
	            response.data.totalPas = totalPas;
	            response.data.page = maxPage;
	            deferred.resolve(response.data);
	        }, function errorCallback(response) {
	            deferred.reject(response.data);
	        });
	        return deferred.promise;
	    };
	    //编辑保存用户组列表数据
	    businessInfoUserGroupMgService.saveUserGroup=function(userGroup){
	        var deferred = $q.defer();
	        $http({
	            method: 'GET',
	            url: httpservice.userGroupListSaveManage,
	            params: {
	                'sessionId': Session.id,
	                'userId': Session.userId,
	                'companyId':Session.companyId,
	                'userGroup':userGroup
	            }
	        }).then(function successCallback(response) {
	            deferred.resolve(response.data);
	        }, function errorCallback(response) {
	            deferred.reject(response.data);
	        });
	        return deferred.promise;
	    };
	    return businessInfoUserGroupMgService;
	};

/***/ },
/* 64 */
/***/ function(module, exports) {

	/**
	 * Created by vision on 16/3/10.
	 */
	module.exports = function($scope,$stateParams,$state,fileReader,PersonService,Public_Service){
	    //标示字段，判断是否为已验证
	    $scope.isattes ='' ;
	    $scope.iYanZheng = '';

	    $scope.p = {
	        person : {
	            English:"",//名字
	            Nickname:"",//昵称
	            Name:"",//姓名
	            Sex:""
	        },
	        //公司信息
	        companyinfo:{
	            Jobnumber:""//员工ID
	        },
	        //工作地址
	        workaddress:{
	            Company:"",//公司名称
	            Street:"",//街道
	            City:"",//城市
	            Province:"",//省份
	            Postcode:"",//邮政编码
	            Country:""//国家
	        },
	        //家庭住址
	        homeaddress:{
	            Street:"",//街道
	            City:"",//城市
	            Province:"",//省份
	            Postcode:"",//邮政编码
	            Country:""//国家
	        },
	        //联系电话
	        phone:{
	            Workphone:"",//工作电话
	            Extension:"",//工作分机
	            Workfax:"",//工作传真
	            Otherworkphone:"",//其他工作电话
	            Homephone:"",//家庭电话
	            Pagers:"",//传呼机
	            Otherphone:"",//其他电话
	            Mobilephone:""//移动电话
	        },
	        //电子邮件地址
	        email:{
	            Address:""//邮件地址
	        },
	        //紧急联系信息
	        emergency:{
	            Name:"",//名称
	            Address:"",//地址
	            Phone:"",//电话
	            Relation:""
	        }
	    };

	    $scope.personImage;

	    //称谓
	    $scope.sexs = [
	        {key:'1',sex:'先生'},
	        {key:'2',sex:'女士'},
	        {key:'3',sex:'保密'}
	    ];
	    //国家
	    $scope.countrys = [
	        {key:'1',country:'中华人民共和国'}
	    ];
	    //关系
	    $scope.relations = [
	        {key:'1',relation:"家人"},
	        {key:'2',relation:"朋友"},
	        {key:'3',relation:"其他"}
	    ];

	    //默认提示框为隐藏
	    $scope.msgBoxShow_saveBu=false;
	    $scope.msgBoxShow_saveBu_2=false;
	    //关闭保存错误提示框
	    $scope.closeMsgBox_saveBu=function(){
	        $scope.msgBoxShow_saveBu=false;
	    };
	    //关闭保存错误提示框
	    $scope.closeMsgBox_saveBu_2=function(){
	        $scope.msgBoxShow_saveBu_2=false;
	    };
	    //省份
	    $scope.Provinces = [];
	    //城市
	    $scope.cities_workaddress = [];
	    //城市
	    $scope.cities_homeaddress = [];

	    $scope.Save = function(p){
	        console.log(postMultipart());
	        p.image = $scope.personImage;
	        p.homeaddress.Province =($('#conRight_sex_select_4').val()).substring(7);
	        p.homeaddress.cities = '';
	        p.homeaddress.City =($('#conRight_sex_select_3').val()).substring(7);
	        p.workaddress.Province =($('#conRight_sex_select_2').val()).substring(7);
	        p.workaddress.City =($('#conRight_sex_select_1').val()).substring(7);
	        p.provinces = '';
	        p.workaddress.cities = '';
	        console.log(p);
	        PersonService.save(p).then(function(data){
	            if(data.flag == true){
	                $scope.msgBoxShow_saveBu=true;
	                $scope.testBuResult='保存成功！';

	                $scope.p = data;
	            }else{
	                $scope.msgBoxShow_saveBu=true;
	                $scope.testBuResult='保存失败！';
	            }
	        })
	    };

	    var select_Provinces = function(){
	        Public_Service.select_Province().then(function(data){
	            $scope.Provinces = data.provinces;
	        });
	    };

	    $scope.select_cities_workaddress = function(){
	        Public_Service.select_City($scope.p.workaddress.Provinces).then(function(data){
	            //console.log($scope.p.workaddress.Province);
	            $scope.cities_workaddress = data.cities;
	            console.log( $scope.cities_workaddress);
	        });
	    };

	    $scope.select_cities_homeaddress = function(){
	        Public_Service.select_City($scope.p.homeaddress.Provinces).then(function(data){
	            $scope.cities_homeaddress = data.cities;
	            console.log( $scope.cities_homeaddress);
	        });
	    };

	    var mode = $stateParams.mode;
	    PersonService.select().then(function(data){
	        console.log(data.email);
	        $scope.email = data.email.Address;
	        $scope.isattes = data.email.isattes;//获取判断email是否已验证
	        $scope.personImage = data.image;
	        if($scope.isattes == '1'){
	            $scope.iYanZheng = '已验证';
	            $(".font_Class").css('color','green');
	           // $scope.iImg ='images/img/个人信息-2.png';
	        }else if($scope.isattes == '0'){
	            $scope.iYanZheng = '待验证';
	            $(".font_Class").css('color','red');
	        }else{
	            $scope.iYanZheng = '已发送';
	            $(".font_Class").css('color','blue');
	        }
	        select_Provinces();
	        $scope.p = data;
	        $scope.select_cities_workaddress();
	        $scope.select_cities_homeaddress();
	        console.log($scope.p);
	        mode = "1";

	    });

	    //发送请求的数据封装
	    function postMultipart() {
	        //通过FormData保存需要发送的数据
	        var fd = new FormData();
	        fd.append("personImage",$scope.personImage);

	        return fd;
	    }

	    //调用了fileReader service中的readAsDataUrl方法，此方法中生成了图片的地址url
	    $scope.personImages = function () {
	        //console.log($scope.file);
	        fileReader.readAsDataUrl($scope.file, $scope)
	            .then(function(result) {
	                $scope.personImage = result;
	            });
	    };
	    ////称谓
	    //$scope.person_sex = $scope.p.person.Sex;
	    ////工作地址 国家
	    //$scope.workaddress_country = $scope.p.workaddress.Country;
	    ////工作地址 城市
	    //$scope.workaddress_City = $scope.p.workaddress.City;
	    ////家庭地址 国家
	    //$scope.homeaddress_country = $scope.p.homeaddress.Country;
	    ////家庭地址 城市
	    //$scope.homeaddress_City = $scope.p.homeaddress.City;
	    ////紧急联系人 关系
	    //$scope.emergency_Relation = $scope.p.emergency.Relation;
	    $scope.edit = function(){
	        $("#inp-WIDTH-phone").removeAttr('disabled');
	        $("#inp-WIDTH-phone").focus();
	    };
	    $("#inp-WIDTH-phone").blur(function () {
	        $("#inp-WIDTH-phone").attr('disabled','disabled');
	        if($scope.iYanZheng == '已发送'||$scope.iYanZheng == '已验证'||$scope.iYanZheng == '待验证'){
	            var email = $("#inp-WIDTH-phone").val();
	            if(email != $scope.email && email != '' && email != null){
	                $scope.iYanZheng = ' ';
	                $scope.iYanZheng = '待验证';
	                $(".font_Class").css('color','red');
	            }
	        }
	    });
	    $scope.emailFa = function(){
	        if($scope.iYanZheng == '待验证'){
	            var email = $("#inp-WIDTH-phone").val();
	            PersonService.emailFa(email).then(function(data){
	                //console.log($scope.p.workaddress.Province);
	                if(data.flag == true){
	                    $scope.iYanZheng = '已发送';
	                    $(".font_Class").css('color','blue');
	                    $scope.msgBoxShow_saveBu_2=true;
	                    $scope.testBuResult_2='发送成功!';
	                }else{
	                    $scope.msgBoxShow_saveBu_2=true;
	                    $scope.testBuResult_2='发送失败！';
	                }
	            });
	        }else if($scope.iYanZheng == '已发送'){
	            var email = $("#inp-WIDTH-phone").val();
	            PersonService.emailFa(email).then(function(data){
	                //console.log($scope.p.workaddress.Province);
	                if(data.flag == true){
	                    $scope.iYanZheng = '已发送';
	                    $(".font_Class").css('color','blue');
	                    $scope.msgBoxShow_saveBu_2=true;
	                    $scope.testBuResult_2='验证成功!';
	                }else{
	                    $scope.msgBoxShow_saveBu_2=true;
	                    $scope.testBuResult_2='验证失败！';
	                }
	            });
	        }else{
	            var email = $("#inp-WIDTH-phone").val();
	            PersonService.emailFa(email).then(function(data){
	                //console.log($scope.p.workaddress.Province);
	                if(data.flag == true){
	                    $scope.iYanZheng = '已发送';
	                    $(".font_Class").css('color','blue');
	                    $scope.msgBoxShow_saveBu_2=true;
	                    $scope.testBuResult_2='验证成功!';
	                }else{
	                    $scope.msgBoxShow_saveBu_2=true;
	                    $scope.testBuResult_2='验证失败！';
	                }
	            });
	        }
	    };
	};

/***/ },
/* 65 */
/***/ function(module, exports) {

	/**
	 * Created by vision on 16/3/10.
	 */
	module.exports=function($stateParams,$http,$q,httpservice,Session) {

	    var PersonService = {};

	    PersonService.save = function(p){
	        var deferred = $q.defer();
	        $http({
	            method:'POST',
	            url:httpservice.person_manage_save,
	            params:{'sessionId': Session.id,'userId': Session.userId},
	            data:p
	        }).then(function successCallback(response){
	                deferred.resolve(response.data);
	            },function errorCallback(response){
	                console.log("SaveFaild    个人信息保存失败");
	                deferred.reject(response.data);
	            }
	        );
	        return deferred.promise;
	    };
	    PersonService.select = function(){
	        var deferred = $q.defer();
	        $http({
	            method:'GET',
	            url:httpservice.person_manage_select,
	            params:{'sessionId': Session.id,'userId': Session.userId}
	        }).then(function successCallback(response){
	                deferred.resolve(response.data);
	            },function errorCallback(response){
	                console.log("SelectFaild");
	                deferred.reject(response.data);
	            }
	        );
	        return deferred.promise;
	    };
	    /*
	    * 邮箱验证
	    * */
	    PersonService.emailFa = function(email){
	        var deferred = $q.defer();
	        $http({
	            method:'GET',
	            url:httpservice.AppappListAddManageEmail,
	            params:{'sessionId': Session.id,'userId': Session.userId,'email':email,'companyId':Session.companyId}
	        }).then(function successCallback(response){
	                deferred.resolve(response.data);
	            },function errorCallback(response){
	                console.log("SelectFaild");
	                deferred.reject(response.data);
	            }
	        );
	        return deferred.promise;
	    }
	    return PersonService;
	};

/***/ },
/* 66 */
/***/ function(module, exports) {

	/**
	 * Created by vision on 16/3/23.
	 */
	module.exports=function($scope,$state,$rootScope,busAppService){
	    //默认构建新应用弹出框为隐藏 ng-show=false
	    localStorage.spId = '';
	    localStorage.spId_2 = '';
	    $scope.showcreat = false;
	    $scope.client;
	    $scope.password;
	    $scope.status;
	    //版本信息
	    $scope.infoUser={};
	    //企业应用
	    $scope.buss={};
	    //企业应用新版本信息展示
	    $scope.appnewinfo={};
	    //分页当前页参数
	    $scope.currentPage=1;
	    //分页每页显示的数量
	    $scope.PageSize = 5;
	    //默认提示框为隐藏
	    $scope.msgBoxShow_saveBu=false;
	    //关闭保存错误提示框
	    $scope.closeMsgBox_saveBu=function(){
	        $scope.msgBoxShow_saveBu=false;
	    };
	    //关闭构建新应用弹出页
	    $scope.closeCreate = function(){
	        $scope.showcreat = false;
	    };

	    //从服务器获取到的Tree列表数据
	    $scope.userGroupList = {};
	    //右侧需要发送到服务器的数据
	    $scope.userUp = [];
	    //左侧当前选中数据
	    $scope.userdata = {};
	    //右侧需要删除数据列表位置
	    $scope.toDeleteUser = {};

	    //添加数组中数据
	    $scope.addUser = function(){
	        $scope.userUp.push($scope.userdata);
	    };
	    //确认右侧需要删除数据所在列表位置
	    $scope.deleteUserUp = function(us){
	        $scope.toDeleteUser = $scope.userUp.indexOf(us);
	    };
	    //删除右侧数组中数据
	    $scope.deleteUser = function(){
	        $scope.userUp.splice($scope.toDeleteUser,1);
	    };

	    //创建新应用
	    $scope.createNew = function(appId,todo){
	        if(todo == "构建新版本"){
	//          busAppService.selectinfo($scope.appnewinfo,appId).then(function(data){
	//              $scope.appnewinfo=data.info;
	//
	//              //console.log("查询成功");
	//          },function(){
	//              console.log("busAppController   管理_企业应用_企业应用:构建新应用查询失败");
	//          });
	//          //构建新应用弹出框为显示 ng-show=true
	//          $scope.showcreat = true;
	//			console.log('++++++++++++')
	            $state.go('manage.businessapp_new',{appId:appId});

	        }else if(todo == "继续编辑"){

	            $state.go('manage.appadded',{appId:appId,todo:todo});
	        }
	    };
	    //删除
	    $scope.delete = function(appId){
	        busAppService.delete(appId).then(function(data){
	           if(data.flag == true){
	               $scope.seletBussinessContent( $scope.currentPage,$scope.PageSize);
	           }
	        },function(){
	            console.log("busAppController  管理_企业应用_企业应用: 删除");
	        });
	    };
	    //改变密码属性
	    $scope.doSomeSth = function(){
	        if( $('.application_right_manbusapp_button_div_div_input').attr('type') == 'password'){
	            $('.application_right_manbusapp_button_div_div_input').attr('type','text');
	        }else{
	            $('.application_right_manbusapp_button_div_div_input').attr('type','password');
	        }
	        //stopEventBubble(event);
	    }
	    //改变密码
	    $scope.doPwd = function(){
	        $('.application_right_manbusapp_button_div_div_input').focus();
	        $('.doPwd').css('display','none');
	        $('.doSomeSth').css('display','none');
	        $('.doSomeSth_2').css('visibility','visible');
	        $('.doPwd_2').css('visibility','visible');
	        //stopEventBubble(event);
	    };
	    //取消修改
	    $scope.chadoSomeSth = function(){
	        $('.doPwd').css('display','inline-block');
	        $('.doSomeSth').css('display','inline-block');
	        $('.doPwd_2').css('visibility','hidden');
	        $('.doSomeSth_2').css('visibility','hidden');
	        $('.application_right_manbusapp_button_div_div_input').attr('type','password');
	        //stopEventBubble(event);
	    };
	    //提交修改的密码
	    $scope.tijiaodoPwd = function(id,s_val){
	        busAppService.inputTj(s_val,id).then(function(data){
	            if(data.flag == true){
	                $('.doPwd').css('display','inline-block');
	                $('.doSomeSth').css('display','inline-block');
	                $('.doPwd_2').css('visibility','hidden');
	                $('.doSomeSth_2').css('visibility','hidden');
	                $('.application_right_manbusapp_button_div_div_input').attr('type','password');
	                $('.tijiaodoPwd_p').css('display','inline-block');
	            }
	        },function(){
	            console.log("busAppController   管理_企业应用_企业应用:密码 修改失败");
	        });
	        //stopEventBubble(event);
	    }
	    //文本框修改值
	   $scope.s_input = function(event){
	       stopEventBubble(event);
	   };
	    //获取点击的位置
	    function getX(e) {
	        e = e || window.event;
	        return e.pageX || e.clientX + document.body.scroolLeft;
	    }

	    function getY(e) {
	        e = e|| window.event;
	        return e.pageY || e.clientY + document.boyd.scrollTop;
	    }
	    //证书
	    $scope.zhangshu = function(appId,e){
	        var x = getX(e);
	        var y = getY(e);
	        $('.application_right_manbusapp_button_div').css('left',x-345+'px');
	        $('.application_right_manbusapp_button_div').css('top',y-95+'px');
	        $('.tijiaodoPwd_p').css('display','none');
	        $('.doPwd').css('display','inline-block');
	        $('.doSomeSth').css('display','inline-block');
	        $('.doPwd_2').css('visibility','hidden');
	        $('.doSomeSth_2').css('visibility','hidden');
	        $('.application_right_manbusapp_button_div_div_input').attr('type','password');
	        $('#'+appId).toggle();
	        if(localStorage.spId){
	            if(appId != localStorage.spId){
	                $('#'+ localStorage.spId).css('display','none');
	            }
	        }
	        localStorage.spId = appId;
	        busAppService.zhangshu(appId).then(function(data){
	            console.log(data);
	            $scope.client = data.client_id;
	            $scope.password = data.secret;
	        },function(){
	            console.log("busAppController  管理_企业应用_企业应用: 证书查询");
	        });
	    };
	    //阻止事件冒泡
	    //阻止事件冒泡
	    function stopEventBubble(event){
	        var e=event || window.event;

	        if (e && e.stopPropagation){
	            e.stopPropagation();
	        }
	        else{
	            e.cancelBubble=true;
	        }
	    }
	    //选择发布范围
	    $scope.createConfines = function(appId){
	        //获取左侧tree用户组列表
	        $scope.appId = appId;
	        busAppService.getConfines(appId).then(function(data){
	            console.log(data);
	            $scope.userGroupList=data.userGroupList;
	            //绑定tree数据
	            $scope.treeBind();
	        },function(){
	            console.log("busAppController  管理_企业应用_企业应用: 发布范围");
	        });
	        getUserGroup(appId);
	        $scope.showconfines = true;
	        $rootScope.fadeShow=true;
	    };
	    //版本信息
	    $scope.infoVes = function(appId){
	        $('.'+appId).toggle();
	        if(localStorage.spId_2){
	            if(appId != localStorage.spId_2){

	                $('.'+ localStorage.spId_2).css('display','none');
	            }
	        }

	        localStorage.spId_2 = appId;
	        if($('.'+appId).css('display')=='none'){

	        }else{
	            busAppService.infoVes(appId).then(function(data){
	                console.log(data);
	                if(data.flag == true){
	                    $scope.infoUser =  data.pros;
	                    for(var i = 0; i < $scope.infoUser.length; i++){
	                        //$scope.infoUser[i].val =
	                        if($scope.infoUser[i].status == 2){
	                            $scope.infoUser[i].status ='已拒绝';
	                        }
	                        if($scope.infoUser[i].status == 1){
	                            $scope.infoUser[i].status = '审批通过';

	                        }
	                        if($scope.infoUser[i].status == 0){
	                            $scope.infoUser[i].status = '审批中';

	                        }
	                    }
	                    setTimeout(function(){
	                        for(var i = 0; i < $scope.infoUser.length; i++){
	                            if($scope.infoUser[i].status == '已拒绝'){
	                                $('.'+i+'ssss').css('background-color','red');
	                            }
	                            if($scope.infoUser[i].status =='审批通过'){
	                                $('.'+i+'ssss').css('background-color','green');
	                            }
	                            if($scope.infoUser[i].status =='审批中' ){
	                                $('.'+i+'ssss').css('background-color','yellow');
	                            }
	                        }
	                    },300);

	                }

	            },function(){
	                console.log("busAppController  管理_企业应用_企业应用: 版本信息");
	            });
	        }

	    } ;
	    //tree列表绑定数据
	    $scope.treeBind=function() {
	        $('#treeList').treeview({
	            expandIcon: 'fa fa-plus-square',//折叠加号图标
	            collapseIcon: 'fa fa-minus-square',//展开减号图标
	            nodeIcon: "fa fa-users usersGroup",//节点图标
	            data: $scope.userGroupList,
	            onNodeSelected: function (event, data) {
	                //$('#treeService').treeview('unselectNode', [data.nodeId, {silent: true}]);
	                //$scope.getUsers(data.href);
	                //$scope.userUp=data.href;
	                $scope.userdata = data;
	                if($scope.userdata.p === undefined){
	                    $scope.userdata.p = true;
	                }
	            },
	            //取消选中
	            onNodeUnselected: function (event, data){
	                $scope.userdata = data;
	                //console.log($scope.userdata.p);
	                if($scope.userdata.p === undefined){
	                    $scope.userdata.p = false;
	                }
	            }
	        });
	    };
	    //订阅审批checkbox
	    $scope.changecheck=function(us,ischeck){
	        //if(attr == true){
	        //    attr = false;
	        //}else{
	        //    attr =true;
	        //}
	        us.ischeck = !ischeck;
	        //us.status = !us.status;
	        //var index =  $scope.userUp.indexOf(attr);
	        //$scope.userUp.splice(index, 1, attr);
	       console.log( $scope.userUp);
	    };
	    //关闭发布范围弹出框
	    $scope.closeConfines = function(){
	        $scope.showconfines = false;
	        $rootScope.fadeShow=false;
	        $scope.msgBoxShow_saveBu=false;
	    };

	    $scope.saveNew = function(appnewinfo){
	        busAppService.save(appnewinfo).then(function () {
	            $scope.closeCreate();
	        },function(){
	            console.log("busAppController   管理_企业应用_企业应用:构建新应用失败");
	        })
	    };
	    //添加数组中数据
	    $scope.addUser = function(){
	        var count = 0;
	        //首先判断选中
	        if($scope.userdata.p === true){

	            for(var i = 0; i< $scope.userUp.length; i++ ){
	                if($scope.userdata.text == $scope.userUp[i].text ){
	                    count = 1;
	                }
	            }
	            if(count == 0){
	                $scope.userdata.status=true;
	                $scope.userdata.ischeck = true;
	                console.log($scope.userdata);
	                $scope.userUp.push($scope.userdata);
	                if($scope.userUp.length != 0){
	                    $('.fabufanwei_Img').attr('src','images/1111111.png');
	                }
	            }
	            //$scope.userdata.Station_1=false;
	            //console.log($scope.userdata);

	        }
	    };
	    //确认右侧需要删除数据所在列表位置
	    $scope.deleteUserUp = function(us,index){
	        $scope.toDeleteUser = $scope.userUp.indexOf(us);

	        $scope.selected = index;
	    };
	    //删除右侧数组中数据
	    $scope.deleteUser = function(){
	        //console.log($scope.toDeleteUser);
	        if($scope.selected == $scope.toDeleteUser){
	            $scope.userUp.splice($scope.toDeleteUser,1);
	        }
	        if($scope.userUp.length == 0){
	            $('.fabufanwei_Img').attr('src','images/1.png');
	        }
	    };

	    //查询企业应用内容
	    $scope.seletBussinessContent = function(page,pageSize){

	        busAppService.select(page,pageSize).then(function(data){
	            $scope.buss = data.bus;
	            $scope.totalPage = data.totalPage;
	            $scope.nowPage = data.nowPage;
	            $scope.id = data.id;
	            $scope.totalPas = data.totalPas;
	            $scope.currentPage = data.page;
	        },function(){
	            console.log("busAppController   管理_企业应用_企业应用:查询企业应用失败");
	        });
	    }
	    $scope.seletBussinessContent( $scope.currentPage,$scope.PageSize);
	    //获取右侧tree用户组列表
	    function getUserGroup(appId){
	        busAppService.getUserGroup(appId).then(function(data){
	            if(data.flag == false){
	                $scope.userUp = [];
	            }else{
	                console.log(data);
	                $scope.userUp = data.pro;
	            }
	            if($scope.userUp.length != 0){
	                $('.fabufanwei_Img').attr('src','images/1111111.png');
	            }
	        },function(){
	            console.log("newPut4Controller  管理_应用设置_应用上架:发布新应用 第四步(发布范围)");
	        });
	    };
	    $scope.saveConfines = function(){
	        console.log($scope.userUp);
	        busAppService.saveConfines($scope.userUp,$scope.appId).then(function(data){
	                if(data.station == true){
	                    $scope.msgBoxShow_saveBu=true;
	                    $scope.testBuResult='保存成功！';
	                }
	        },function(){
	            console.log("newPut4Controller  管理_应用设置_应用上架:发布新应用 第四步(发布范围)");
	        });
	    };
	    //分类应用列表点击改变页码
	    $scope.changePage=function(currentPage){
	        if(currentPage <= $scope.totalPage&&currentPage>0 ){
	            $scope.seletBussinessContent(currentPage,$scope.PageSize);
	        }
	    };

	};

/***/ },
/* 67 */
/***/ function(module, exports) {

	/**
	 * Created by vision on 16/5/18.
	 */
	module.exports=function($scope,$state,fileReader,$stateParams,MangbusNewVesrAppService){
	    $scope.sLength;
	    $scope.num = 0;
	    $scope.lWidth = -210;
	    $scope.msgBoxShow_saveBu=false;
	    $scope.personImage;
	    $scope.showImages = [];
	    $scope.showupimages = "showupimages_show";
		$scope.newVer = {
	        Name:"",
	        Language:"",
	        Vesr:"",
	        Kind:"",
	        MiaoShu:"",
	        Href:"",
	        Xieyi:"",
	        PersonImage:"",
	        showImages:""
	    }
	    $scope.introduction;
	    $scope.newGongneng;

	    //语言
	    $scope.languages = [
	        {key:'1',language:'中文'},
	        {key:'2',language:'英语'},
	        {key:'3',language:'法语'},
	        {key:'4',language:'俄语'}
	    ];
	    //类别
	    $scope.type = [];
	    //接收appId
	    $scope.appId = $stateParams.appId;
	    //授权协议
	    $scope.xieyi = [
	        {key:'1',xieyi:'OAuth2.0 Server-side'}
	    ];
	    /*
	    * 查询方法
	    * */
	    $scope.seletData = function(){
	        MangbusNewVesrAppService.seleData($scope.appId).then(function sucessCallback(data){
	            console.log(data.pro);
	            $scope.newVer = data.pro;
	            $scope.type = data.pro.types;
	            $scope.personImage = data.pro.PersonImage;
	            $scope.showImages = data.pro.showImages;
	            $scope.introduction = data.pro.textArea;
	            $scope.newGongneng = data.pro.textArea_2;
	            $scope.sLength = $scope.showImages.length;
	            if( $scope.showImages.length>4){
	                $('.jjj_L_img_2').fadeIn(100);
	                $('.jjj_R_img_2').fadeIn(100);
	            }
	            if($scope.showImages.length>=6){
	                $scope.showupimages = "showupimages_hidden";
	            }
	        },function errorCallback(){

	        });
	    };

	    //控制按钮显示，隐藏


	    //图片的滑动方法
	    $scope.jjj_L_img = function(){
	        if($scope.num>0){
	            $scope.num = $scope.num -1;
	            $('.vers_ul_div_images').animate({left:  $scope.num*$scope.lWidth+'px'});
	            $('.vers_ul_div_images li').eq($scope.num).css('visibility','visible');
	            $scope.sLength =  $scope.sLength+1;
	        }
	    };
	    $scope.jjj_R_img = function(){
	        if($scope.sLength>4){
	               $('.vers_ul_div_images li').eq($scope.num).css('visibility','hidden');
	                $scope.num = $scope.num+1;
	                $('.vers_ul_div_images').animate({left:$scope.num*$scope.lWidth+'px'});
	                $scope.sLength =  $scope.sLength - 1;
	        }
	    };
	    /*

	     * 修改方法
	     * */
	    $scope.save = function(){
	        $scope.newVer.showImages =  $scope.showImages;
	        var textArea =  $scope.introduction;
	        var textArea_2 = $scope.newGongneng;
	        /*
	        * 文本框验证
	        * */
	        if($scope.newVer.Name == ''|| $scope.newVer.Name == null || $scope.newVer.Name == undefined){
	            $scope.msgBoxShow_saveBu=true;
	            $scope.testBuResult='应用名称不能为空！';
	        } else if($scope.newVer.Vesr == ''|| $scope.newVer.Vesr == null || $scope.newVer.Vesr == undefined){
	            $scope.msgBoxShow_saveBu=true;
	            $scope.testBuResult='版本号不能为空！';
	        } else if($scope.newVer.Href == ''|| $scope.newVer.Href == null || $scope.newVer.Href == undefined){
	            $scope.msgBoxShow_saveBu=true;
	            $scope.testBuResult='URL地址不能为空！';
	        } else{
	            console.log($scope.newVer);
	            MangbusNewVesrAppService.savenew($scope.newVer, $scope.appId,textArea,textArea_2).then(function sucessCallback(data){
	                if(data.station == true){
	                    $scope.msgBoxShow_saveBu=true;
	                    $scope.testBuResult='保存成功！';
	                    console.log(data.pro);
	                    $scope.newVer = data.pro;
	                }else {
	                    $scope.msgBoxShow_saveBu=true;
	                    $scope.testBuResult='保存失败！';
	                }

	            },function errorCallback(){

	            });
	        }
	    };
	    $scope.seletData();
	    //关闭保存错误提示框
	    $scope.closeMsgBox_saveBu=function(){
	        $scope.msgBoxShow_saveBu=false;
	    };

	    //调用了fileReader service中的readAsDataUrl方法，此方法中生成了图片的地址url
	    $scope.personImages = function () {
	        //console.log($scope.file);
	        fileReader.readAsDataUrl($scope.file, $scope)
	            .then(function(result) {
	                $scope.newVer.PersonImage = result;
	                $scope.personImage = result;

	            });
	    };

	    //上传简介图片
	    $scope.upShowImages = function(){
	        var that=this;
	        fileReader.readAsDataUrl($scope.file, $scope)
	            .then(function(result) {

	                $scope.showImages.push(result);
	                if( $scope.showImages.length>4){
	                    $('.jjj_L_img_2').fadeIn(100);
	                    $('.jjj_R_img_2').fadeIn(100);
	                }
	                $scope.sLength =   $scope.showImages.length;
	                //如果图片超过6张,隐藏上传框
	                if($scope.showImages.length>=6){
	                    $scope.showupimages = "showupimages_hidden";
	                }
	            });
	    };

	    //移除简介图片数组中指定图片
	    $scope.delectimage = function($index,image){
	        //console.log($index);
	        //console.log(image);
	        $scope.showImages.splice($scope.showImages.indexOf(image),1);
	        if( $scope.showImages.length<=4){
	            $('.jjj_L_img_2').fadeOut(100);
	            $('.jjj_R_img_2').fadeOut(100);
	        }
	        $scope.sLength =   $scope.showImages.length;
	        //$scope.showImages.splice($index,1);
	        //如果图片少于6张,显示上传框
	        if($scope.showImages.length<6){
	            $scope.showupimages = "showupimages_show";
	        }

	    };
	}

/***/ },
/* 68 */
/***/ function(module, exports) {

	module .exports = function($http,$q,httpservice,Session){
	    var selectBusNewAppService={};
	    //保存数据
	    selectBusNewAppService.savenew = function(postData,appId,attr,ser){
	        //console.log("2+"+Appsession.appId);
	        var deferred = $q.defer();
	        console.log(httpservice.save_createNew_manage_bus);
	        $http({
	            method:'POST',
	            url:httpservice.save_createNew_manage_bus,
	            params:{
	                'sessionId': Session.id,
	                'userId': Session.userId,
	                'companyId':Session.companyId,
	                'appId':appId,
	                'textArea':attr,
	                'textArea_2':ser
	            },
	            headers: {'Content-Type': undefined},
	            data:postData

	        }).then(function successCallback(response){
	                deferred.resolve(response.data);
	            },function errorCallback(response){
	                console.log("busNewAppService  管理_企业应用_构建新版本:失败");
	                deferred.reject(response.data);
	            }
	        );
	        return deferred.promise;
	    };
	    //查询数据

	    selectBusNewAppService.seleData = function(appId){
	        var deferred = $q.defer();
	        console.log(httpservice.select_createNew_manage_bus);

	        $http({
	            method:'GET',
	            url:httpservice.select_createNew_manage_bus,
	            params:{
	                'sessionId': Session.id,
	                'userId': Session.userId,
	                'companyId':Session.companyId,
	                'appId':appId
	            },
	            headers: {'Content-Type': undefined}
	        }).then(function successCallback(response){
	                deferred.resolve(response.data);
	            },function errorCallback(response){
	                console.log("busAppService  管理_企业应用_查询_构建新版本:失败");
	                deferred.reject(response.data);
	            }
	        );
	        return deferred.promise;
	    }

	    return selectBusNewAppService;
	};

/***/ },
/* 69 */
/***/ function(module, exports) {

	/**
	 * Created by vision on 16/3/23.
	 */
	module.exports = function($http,$q,httpservice,Session){
	    var busAppService = {};
	    //删除
	    busAppService.delete = function(appId){
	        var deferred = $q.defer();
	        $http({
	            method:'POST',
	            url:httpservice.selectDelete,
	            params:{'sessionId': Session.id,'userId': Session.userId,"appId" : appId,'companyId':Session.companyId}
	        }).then(function successCallback(response){
	                //console.log(response.data);
	                deferred.resolve(response.data);
	            },function errorCallback(response){
	                console.log("管理_企业应用_企业应用_构建新版本:删除");
	                deferred.reject(response.data);
	            }
	        );
	        return deferred.promise;
	    };
	    //版本信息展现
	    busAppService.infoVes = function(appId){
	        var deferred = $q.defer();
	        $http({
	            method:'POST',
	            url:httpservice.showKindInfo,
	            params:{'sessionId': Session.id,'userId': Session.userId,"appId" : appId,'companyId':Session.companyId}
	        }).then(function successCallback(response){
	                //console.log(response.data);
	                deferred.resolve(response.data);
	            },function errorCallback(response){
	                console.log("管理_企业应用_企业应用_构建新版本:版本信息");
	                deferred.reject(response.data);
	            }
	        );
	        return deferred.promise;
	    }
	    //证书密码修改
	    busAppService.inputTj = function(attr,id){
	        var deferred = $q.defer();
	        $http({
	            method:'POST',
	            url:httpservice.upPwdZs,
	            params:{'sessionId': Session.id,'userId': Session.userId,'secret':attr,'client_id':id}
	        }).then(function successCallback(response){
	                //console.log(response.data);
	                deferred.resolve(response.data);
	            },function errorCallback(response){
	                console.log("管理_企业应用_企业应用_构建新版本:证书密码修改");
	                deferred.reject(response.data);
	            }
	        );
	        return deferred.promise;
	    };
	    //证书查询
	    busAppService.zhangshu = function(appId){
	        var deferred = $q.defer();
	        $http({
	            method:'GET',
	            url:httpservice.selectZsXinxi,
	            params:{'sessionId': Session.id,'userId': Session.userId,"appId" : appId}
	        }).then(function successCallback(response){
	                //console.log(response.data);
	                deferred.resolve(response.data);
	            },function errorCallback(response){
	                console.log("管理_企业应用_企业应用_构建新版本:证书查询");
	                deferred.reject(response.data);
	            }
	        );
	        return deferred.promise;
	    };
	    //查询企业应用
	    busAppService.select = function(currentPage,pageSize){

	        var deferred = $q.defer();
	        $http({
	            method:'GET',
	            url:httpservice.select_manage_bus,
	            params:{
	                'sessionId': Session.id,
	                'userId': Session.userId,
	                'companyId':Session.companyId,
	                'page':currentPage,
	                'pageSize':pageSize
	            }
	        }).then(function successCallback(response){
	            //当前页
	            var maxPage = currentPage;
	            if(maxPage === ""){
	                maxPage = 1;
	            }
	            //总页数
	            var total = response.data.total;
	            var startPage = response.data.startPage;
	            var endPage = response.data.endPage;
	            if(total <= maxPage){
	                maxPage = total;
	            }
	            if(maxPage<=0){
	                maxPage = 1;
	            }
	            var totalPas = {};

	            for(var i=startPage;i<=endPage;i++){
	                totalPas[i-1] = i;
	            }
	            //设置当前页和总页数
	            response.data.totalPage =total;
	            response.data.nowPage = maxPage+"/"+total;
	            response.data.totalPas = totalPas;
	            response.data.page = maxPage;
	                deferred.resolve(response.data);
	            },function errorCallback(response){
	                console.log("busAppService  管理_企业应用_企业应用:查询企业应用失败");
	                deferred.reject(response.data);
	            }
	        );
	        return deferred.promise;
	    };

	    //根据应用ID查询详细内容
	    busAppService.selectinfo = function(appId){
	        var deferred = $q.defer();
	        $http({
	            method:'GET',
	            url:httpservice.select_createNew_manage_bus,
	            params:{'sessionId': Session.id,'userId': Session.userId,"appId" : appId}
	        }).then(function successCallback(response){
	                //console.log(response.data);
	                deferred.resolve(response.data);
	            },function errorCallback(response){
	                console.log("管理_企业应用_企业应用_构建新版本:根据应用ID查询版本详情失败");
	                deferred.reject(response.data);
	            }
	        );
	        return deferred.promise;
	    };

	    //保存新版本
	    busAppService.save = function(p){
	        var deferred = $q.defer();
	        $http({
	            method:'POST',
	            url:httpservice.save_createNew_manage_bus,
	            params:{'personinfo':p,'sessionId': Session.id,'userId': Session.userId}
	        }).then(function successCallback(response){
	                deferred.resolve(response.data);
	            },function errorCallback(response){
	                console.log("管理_企业应用_企业应用_构建新版本:构建新版本保存失败");
	                deferred.reject(response.data);
	            }
	        );
	        return deferred.promise;
	    };
	    busAppService.saveConfines = function(userUp,appId){
	        var deferred = $q.defer();
	        $http({
	            method:'POST',
	            url:httpservice.manage_appset_putup_no_urlWeb_sele,
	            params:{
	                'sessionId': Session.id,
	                'userId': Session.userId,
	                'appId':appId,
	                'userUp': JSON.stringify(userUp),
	                'companyId':Session.companyId
	            }
	        }).then(function successCallback(response){
	                deferred.resolve(response.data);
	            },function errorCallback(response){
	                console.log("busAppServcie  管理_企业应用_企业应用_构建新版本:获取左侧Tree ");
	                deferred.reject(response.data);
	            }
	        );
	        return deferred.promise;
	    };
	    busAppService.getUserGroup = function(appId){
	        var deferred = $q.defer();
	        $http({
	            method:'GET',
	            url:httpservice.manage_appset_putup_no4_right,
	            params:{
	                'sessionId': Session.id,
	                'userId': Session.userId,
	                'appId':appId,
	                'companyId':Session.companyId
	            }
	        }).then(function successCallback(response){
	                deferred.resolve(response.data);
	            },function errorCallback(response){
	                console.log("busAppServcie  管理_企业应用_企业应用_构建新版本:获取左侧Tree ");
	                deferred.reject(response.data);
	            }
	        );
	        return deferred.promise;
	    };
	    busAppService.getConfines = function(appId){
	        var deferred = $q.defer();
	        $http({
	            method:'GET',
	            url:httpservice.manage_appset_putup_no4_left,
	            params:{
	                'sessionId': Session.id,
	                'userId': Session.userId,
	                'appId':appId,
	                'companyId':Session.companyId
	            }
	        }).then(function successCallback(response){
	                deferred.resolve(response.data);
	            },function errorCallback(response){
	                console.log("busAppServcie  管理_企业应用_企业应用_构建新版本:获取左侧Tree ");
	                deferred.reject(response.data);
	            }
	        );
	        return deferred.promise;
	    };

	    return busAppService;
	};

/***/ },
/* 70 */
/***/ function(module, exports) {

	/**
	 * Created by vision on 16/3/25.
	 */
	module.exports = function($scope,$state,$stateParams,newPutService,Appsession){
	    $scope.putup={};
	    $scope.num;
	    $scope.status;
	    $scope.s_appId;
	    $scope.station = $stateParams.Status;
	    console.log($stateParams.todo);
	    console.log($stateParams.BiaoShi);
	    //默认提示框为隐藏
	    $scope.msgBoxShow_saveBu=false;

	    var appId;
	    if($stateParams.todo == '继续编辑' && $stateParams.BiaoShi =='应用上架'){
	        sessionStorage.appId = '';
	    }
	    else if($stateParams.todo == '继续编辑' && $stateParams.BiaoShi =='' ){
	        $('.vers_frist_input').attr('readonly','readonly');
	        sessionStorage.appId = $stateParams.appId;
	    }else if($stateParams.BiaoShi == '应用上架' && $stateParams.todo ==''){
	        sessionStorage.appId = '';
	    }else{
	        sessionStorage.appId =  sessionStorage.appId;

	    }
	    $scope.s_appId = sessionStorage.appId;



	    //语言
	    $scope.languages = [
	        {key:'1',language:'中文'},
	        {key:'2',language:'英语'},
	        {key:'3',language:'法语'},
	        {key:'4',language:'俄语'}
	    ];

	    //类别
	    //$scope.types = [
	    //    {key:'1',type:'音乐'},
	    //    {key:'2',type:'视频'},
	    //    {key:'3',type:'娱乐'},
	    //    {key:'4',type:'运动'}
	    //];
	    $scope.types = [];
	    var mm = [];

	    //保存
	    $scope.Save_No1= function(putup){
	        newPutService.save_no1(putup,$scope.s_appId).then(function (data){
	            $scope.status = data.station;
	            if($scope.status == true){
	                sessionStorage.appId = data.appId;
	                $scope.msgBoxShow_saveBu=true;
	                $scope.testBuResult='保存成功！';
	            }
	        },function(){
	            console.log("newPutController  保存 管理_应用设置_应用上架:发布新应用 第一步(基本信息)");
	        });
	    };

	    //关闭保存错误提示框
	    $scope.closeMsgBox_saveBu=function(){
	        $scope.msgBoxShow_saveBu=false;
	    };

	    //查询
	    var Select_No1= function(){
	        //console.log(appId);
	        //console.log("1111 "+appId);
	        newPutService.Select_No1( $scope.s_appId).then(function (data){
	            //$scope.putup=data.putup;
	            if(data.putup != undefined){
	                $scope.types = data.putup.types;
	                $scope.putup.Language = data.putup.Language;
	                $scope.putup.Type = data.putup.Type;
	                $scope.putup.AppName = data.putup.AppName;
	                $scope.putup.Version = data.putup.Version;
	                $scope.putup.Describe = data.putup.Describe;

	                //console.log(data.putup.Type);
	            }
	            //console.log($scope.putup);
	        },function(){
	            console.log("newPutController  查询 管理_应用设置_应用上架:发布新应用 第一步(基本信息)");
	        });
	    };

	    //下一步
	    $scope.Next= function(putup){
	        $scope.testBuResult='努力加载中...';
	        newPutService.save_no1(putup,$scope.s_appId).then(function (data){
	            $scope.status = data.station;
	            if($scope.status == true){
	                sessionStorage.appId = data.appId;
	                $scope.msgBoxShow_saveBu=true;
	                $scope.testBuResult='保存成功！';
	                setTimeout(function(){
	                    $state.go('manage.appadded2');
	                },800)
	            }
	        },function(){
	            console.log("newPutController  保存 管理_应用设置_应用上架:发布新应用 第一步(基本信息)");
	        });
	    };

	    //数据初始化
	    $scope.init=function(){
	        Select_No1(appId);
	    };
	    $scope.init();

	};

/***/ },
/* 71 */
/***/ function(module, exports) {

	/**
	 * Created by vision on 16/3/25.
	 */
	module.exports = function($stateParams,$http,$q,httpservice,Session){
	    var newPutService = {};

	    newPutService.save_no1 = function(putup,appId){
	        //console.log("1+"+Appsession.appId);
	        var deferred = $q.defer();
	        $http({
	            method:'POST',
	            //url:httpservice.manage_appset_putup_no1_save,
	            url:httpservice.manage_appset_putup_no1_save,
	            params:{
	                'info_No1': putup,
	                'sessionId': Session.id,
	                'companyId': Session.companyId,
	                'userId': Session.userId,
	                'appId':appId
	            }
	        }).then(function successCallback(response){
	                if(response.data.station == true){
	                    //  保存应用ID

	                }
	                //console.log(response.data.appId+"Service");
	                deferred.resolve(response.data);
	            },function errorCallback(response){
	                console.log("newPutServcie  管理_应用设置_应用上架:发布新应用 第一步(基本信息)");
	                deferred.reject(response.data);
	            }
	        );
	        return deferred.promise;
	    };

	    newPutService.Select_No1 = function(appId){
	        var deferred = $q.defer();
	        $http({
	            method:'GET',
	            url:httpservice.manage_appset_putup_no1_select,
	            params:{
	                'sessionId': Session.id,
	                'userId': Session.userId,
	                'companyId':Session.companyId,
	                'appId':appId
	            }
	        }).then(function successCallback(response){
	                console.log("1111 "+appId);
	                deferred.resolve(response.data);
	            },function errorCallback(response){
	                console.log("newPutServcie  管理_应用设置_应用上架:发布新应用 第一步(基本信息)");
	                deferred.reject(response.data);
	            }
	        );
	        return deferred.promise;
	    };

	    return newPutService
	};

/***/ },
/* 72 */
/***/ function(module, exports) {

	/**
	 * Created by vision on 16/3/28.
	 */
	module.exports = function($scope,$state,newPut2Service,fileReader){
	    $scope.sLength;
	    $scope.num = 0;
	    $scope.lWidth = -126;
	    $scope.introduction;
	    $scope.newGongneng;
	    //发送到服务器端的数据
	    $scope.putup2={};
	    //Logo图标
	    $scope.logoImage;
	    //应用简介图片
	    //var images =[];
	    $scope.showImages = [];
	    //是否显示上传框(应用简介图片)
	    $scope.showupimages = "showupimages_show";

	    var appId = sessionStorage.appId;

	    // 组装表单数据
	    var postData;
	    //默认提示框为隐藏
	    $scope.msgBoxShow_saveBu=false;

	    //上传Logo图片
	    //调用了fileReader service中的readAsDataUrl方法，此方法中生成了图片的地址url
	    $scope.upLogoImage = function(){
	        fileReader.readAsDataUrl($scope.file, $scope)
	            .then(function(result) {
	                $scope.logoImage = result;
	            });
	    };

	    //上传简介图片
	    $scope.upShowImages = function(){
	        var that=this;
	        fileReader.readAsDataUrl($scope.file, $scope)
	            .then(function(result) {

	                $scope.showImages.push(result);
	                $scope.sLength = $scope.showImages.length;
	                if( $scope.showImages.length>5){
	                    $('.jjj_L_img_3').fadeIn(100);
	                    $('.jjj_R_img_3').fadeIn(100);
	                }
	                //如果图片超过6张,隐藏上传框
	                if($scope.showImages.length>=6){
	                    $scope.showupimages = "showupimages_hidden";
	                }
	            });
	    };

	    //移除简介图片数组中指定图片
	    $scope.delectimage = function($index,image){
	        //console.log($index);
	        //console.log(image);
	        $scope.showImages.splice($scope.showImages.indexOf(image),1);
	        $scope.sLength = $scope.showImages.length;
	        if( $scope.showImages.length<=5){
	            $('.jjj_L_img_3').fadeOut(100);
	            $('.jjj_R_img_3').fadeOut(100);
	        }
	        //$scope.showImages.splice($index,1);
	        //如果图片少于6张,显示上传框
	        if($scope.showImages.length<6){
	            $scope.showupimages = "showupimages_show";
	        }

	    };

	    //调用了fileReader service中的readAsDataUrl方法，此方法中生成了图片的地址url
	    $scope.getFile = function () {
	        //console.log($scope.file);
	        fileReader.readAsDataUrl($scope.file, $scope)
	            .then(function(result) {
	                $scope.logoImage = result;
	            });
	    };

	    //发送请求的数据封装
	    function postMultipart() {
	        //通过FormData保存需要发送的数据
	        var fd = new FormData();
	        fd.append("logoImage",$scope.logoImage);
	        angular.forEach($scope.showImages, function(val, key) {
	            fd.append(key, val);
	        });

	        return fd;
	    }
	    //关闭保存错误提示框
	    $scope.closeMsgBox_saveBu=function(){
	        $scope.msgBoxShow_saveBu=false;
	    };
	    //保存应用详情内容到服务器端数据库
	    $scope.Save_No2 = function(){
	        //console.log(putup3);
	       // var taxtArea_1 =  $scope.introduction;
	     //   var taxtArea_2 = $scope.newGongneng;

	        postData = postMultipart();
	        console.log(postData);
	        newPut2Service.save_no2(postData,$scope.introduction,$scope.newGongneng).then(function (data){
	            if(data.station == true){
	                $scope.msgBoxShow_saveBu=true;
	                $scope.testBuResult='保存成功！';
	            }

	        },function(){
	            console.log("newPut2Controller  管理_应用设置_应用上架:发布新应用 第二步(应用详情)");
	        });
	    };
	    //图片的滑动方法
	    $scope.jjj_L_img = function(){
	        if($scope.num>0){
	            $scope.num = $scope.num -1;
	            $('.conRight_img_bottom_div').animate({left:  $scope.num*$scope.lWidth+'px'});
	            $('.conRight_img_bottom_div li').eq($scope.num).css('visibility','visible');
	            $scope.sLength =  $scope.sLength+1;
	        }
	    };
	    $scope.jjj_R_img = function(){
	        if($scope.sLength>5){
	            $('.conRight_img_bottom_div li').eq($scope.num).css('visibility','hidden');
	            $scope.num = $scope.num+1;
	            $('.conRight_img_bottom_div').animate({left:$scope.num*$scope.lWidth+'px'});
	            $scope.sLength =  $scope.sLength - 1;
	        }
	    };
	    //查询
	    $scope.Select_No2 = function(appId){
	        newPut2Service.Select_No2(appId).then(function (data){
	            console.log(data);
	            $scope.putup2 = data.putup2;

	            if(data.showImages == undefined || data.showImages == null){

	                $scope.showImages = [];
	            }else{

	                $scope.showImages = data.showImages;
	                $scope.sLength = $scope.showImages.length;
	                //如果图片超过6张,隐藏上传框
	                if( $scope.showImages.length>5){
	                    $('.jjj_L_img_3').fadeIn(100);
	                    $('.jjj_R_img_3').fadeIn(100);
	                }
	                if($scope.showImages.length>=6){
	                    $scope.showupimages = "showupimages_hidden";
	                }
	            }
	            $scope.introduction = data.textArea;
	            $scope.newGongneng = data.textArea_2;
	            $scope.logoImage = data.logoImage;
	        },function(){
	            console.log("newPut2Controller  管理_应用设置_应用上架:发布新应用 第二步(应用详情)");
	        });
	    };

	    //下一步
	    $scope.Next= function(){
	        //$scope.Select_No2();
	        postData = postMultipart();
	        console.log(postData);
	        newPut2Service.save_no2(postData,$scope.introduction,$scope.newGongneng).then(function (data){
	            if(data.station == true){
	                $scope.msgBoxShow_saveBu=true;
	                $scope.testBuResult='保存成功！';
	                setTimeout(function(){
	                    $state.go('manage.appadded3');
	                },800)
	            }

	        },function(){
	            console.log("newPut2Controller  管理_应用设置_应用上架:发布新应用 第二步(应用详情)");
	        });

	    };

	    //数据初始化
	    $scope.init=function(){
	        if(appId){
	            $scope.Select_No2(appId);
	        }
	    };
	    $scope.init();
	};

/***/ },
/* 73 */
/***/ function(module, exports) {

	/**
	 * Created by vision on 16/3/28.
	 */
	module.exports = function($stateParams,$http,$q,httpservice,Session){
	    var newPut2Service = {};

	    newPut2Service.save_no2 = function(postData,attr,ese){
	        //console.log("2+"+Appsession.appId);
	        var deferred = $q.defer();
	        $http({
	            method:'POST',
	            url:httpservice.manage_appset_putup_no2_save,
	            params:{
	                'sessionId': Session.id,
	                'userId': Session.userId,
	                'companyId':Session.companyId,
	                'appId':sessionStorage.appId,
	                'textArea':attr,
	                'textArea_2':ese
	            },
	            headers: {'Content-Type': undefined},
	            data:postData

	        }).then(function successCallback(response){
	                //Appsession.destroy();
	                //if(response.data.station == true){
	                //    //  保存应用ID
	                //    Appsession.create(
	                //        response.data.appId        //appId:appId
	                //    );
	                //}
	                deferred.resolve(response.data);
	            },function errorCallback(response){
	                console.log("newPut2Servcie  管理_应用设置_应用上架:发布新应用 第二步(应用详情)");
	                deferred.reject(response.data);
	            }
	        );
	        return deferred.promise;
	    };

	    newPut2Service.Select_No2 = function(appId){
	        var deferred = $q.defer();
	        $http({
	            method:'GET',
	            url:httpservice.manage_appset_putup_no2_select,
	            params:{
	                'sessionId': Session.id,
	                'userId': Session.userId,
	                'companyId':Session.companyId,
	                'appId':appId
	            }

	        }).then(function successCallback(response){
	                console.log("2222 "+appId);
	                deferred.resolve(response.data);
	            },function errorCallback(response){
	                console.log("newPut2Servcie  管理_应用设置_应用上架:发布新应用 第二步(应用详情)");
	                deferred.reject(response.data);
	            }
	        );
	        return deferred.promise;
	    };

	    return newPut2Service;
	};

/***/ },
/* 74 */
/***/ function(module, exports) {

	/**
	 * Created by vision on 16/3/28.
	 */
	module.exports = function($scope,$state,newPut3Service){
	    $scope.putup3={
	        lice:"1"
	    };
	    var appId = sessionStorage.appId;

	    //默认提示框为隐藏
	    $scope.msgBoxShow_saveBu=false;


	    //授权协议
	    $scope.Licenses = [
	        {key:'1',Lice:'OAuth2.0 Server-side'}
	    ];
	    $scope.Save_No3= function(){
	        var filter  = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;//验证邮箱的正则
	        var email = $('.conRight_sex_select_4').val();
	        if(filter.test(email)){
	            $('.reEmail').css('display','none');
	            newPut3Service.save_no3($scope.putup3).then(function (data){
	                if(data.station == true){
	                    $scope.msgBoxShow_saveBu=true;
	                    $scope.testBuResult='保存成功！';
	                }

	            },function(){
	                console.log("newPut3Controller  管理_应用设置_应用上架:发布新应用 第三步(发布应用)");
	            });
	        }else{
	            $('.reEmail').css('display','inline-block');
	        }

	    };

	    $scope.Select_No3 = function(appId){
	        newPut3Service.Select_No3(appId).then(function (data){
	            console.log(data);
	            if(data.putup3 != undefined){
	                $scope.putup3 = data.putup3;
	            }
	        },function(){
	            console.log("newPut3Controller  管理_应用设置_应用上架:发布新应用 第三步(发布应用)");
	        });
	    };

	    //关闭保存错误提示框
	    $scope.closeMsgBox_saveBu=function(){
	        $scope.msgBoxShow_saveBu=false;
	    };

	    //下一步
	    $scope.Next= function(){
	        var filter  = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;//验证邮箱的正则
	        var email = $('.conRight_sex_select_4').val();
	        //$scope.Select_No3(putup3);
	        if(filter.test(email)){
	            newPut3Service.save_no3($scope.putup3).then(function (data){
	                if(data.station == true){
	                    $scope.msgBoxShow_saveBu=true;
	                    $scope.testBuResult='保存成功！';
	                    setTimeout(function(){
	                        $state.go('manage.appadded4');
	                    },800);
	                }

	            },function(){
	                console.log("newPut3Controller  管理_应用设置_应用上架:发布新应用 第三步(发布应用)");
	            });
	        }else{
	            $('.reEmail').css('display','inline-block');
	        }


	    };
	    //数据初始化
	    $scope.init=function(){
	        if(appId){
	            $scope.Select_No3(appId);
	        }
	    };
	   $scope.init();
	};

/***/ },
/* 75 */
/***/ function(module, exports) {

	/**
	 * Created by vision on 16/3/28.
	 */
	module.exports = function($stateParams,$http,$q,httpservice,Session){

	    var newPut3Service = {};

	    newPut3Service.save_no3 = function(putup3){
	        //console.log("3+"+Appsession.appId);
	        var deferred = $q.defer();
	        $http({
	            method:'POST',
	            url:httpservice.manage_appset_putup_no3_save,
	            params:{
	                'info_No3':putup3,
	                'sessionId':Session.id,
	                'userId': Session.userId,
	                'companyId':Session.companyId,
	                'appId':sessionStorage.appId
	            }
	        }).then(function successCallback(response){
	                //Appsession.destroy();
	                //if(response.data.station == true){
	                //    //  保存应用ID
	                //    Appsession.create(
	                //        response.data.appId        //appId:appId
	                //    );
	                //}
	               // console.log("3333 "+appId);
	                deferred.resolve(response.data);
	            },function errorCallback(response){
	                console.log("newPut3Servcie  管理_应用设置_应用上架:发布新应用 第三步(发布应用)");
	                deferred.reject(response.data);
	            }
	        );
	        return deferred.promise;
	    };

	    newPut3Service.Select_No3 = function(appId){
	        var deferred = $q.defer();


	        $http({
	            method:'POST',
	            url:httpservice.manage_appset_putup_no3_select,
	            params:{
	                'sessionId':Session.id,
	                'userId': Session.userId,
	                'companyId':Session.companyId,
	                'appId':appId
	            }
	        }).then(function successCallback(response){
	                deferred.resolve(response.data);
	            },function errorCallback(response){
	                console.log("newPut3Servcie  管理_应用设置_应用上架:发布新应用 第三步(发布应用)");
	                deferred.reject(response.data);
	            }
	        );
	        return deferred.promise;
	    };

	    return newPut3Service
	};

/***/ },
/* 76 */
/***/ function(module, exports) {

	/**
	 * Created by vision on 16/3/28.
	 */
	module.exports = function($scope,$state,newPut4Service){
	    $scope.flag;
	    $scope.status;
	    //从服务器获取到的Tree列表数据
	    $scope.userGroupList = {};
	    //右侧需要发送到服务器的数据
	    $scope.userUp = [];
	    //左侧当前选中数据
	    $scope.userdata = {};
	    //右侧需要删除数据列表位置
	    $scope.toDeleteUser = {};
	    $scope.selected = null;

	    var appId = sessionStorage.appId;

	    //默认提示框为隐藏
	    $scope.msgBoxShow_saveBu=false;

	    //关闭保存错误提示框
	    $scope.closeMsgBox_saveBu=function(){
	        $scope.msgBoxShow_saveBu=false;
	    };
	    if($('.step_fabufanwei_til_input').is(':checked')) {
	        // do something

	        $scope.status = true;
	    }else {

	        $scope.status = false;
	    }
	    $scope.check_input = function(){

	        if($('.step_fabufanwei_til_input').is(':checked')) {

	            $scope.status = true;
	        }else{

	            $scope.status = false;
	        }
	    };
	    //订阅审批checkbox
	    $scope.changecheck=function(us){
	        us.status = !us.status;
	        var index =  $scope.userUp.indexOf(us);
	        $scope.userUp.splice(index, 1, us);
	    };

	    //tree列表绑定数据
	    function treeBind() {
	        $('#treeList').treeview({
	            expandIcon: 'fa fa-plus-square',//折叠加号图标
	            collapseIcon: 'fa fa-minus-square',//展开减号图标
	            nodeIcon: "fa fa-users usersGroup",//节点图标
	            data: $scope.userGroupList,
	            //选中
	            onNodeSelected: function (event, data) {
	                $scope.userdata = data;
	                //console.log($scope.userdata.p);
	                if($scope.userdata.p === undefined){
	                    $scope.userdata.p = true;
	                }
	            },
	            //取消选中
	            onNodeUnselected: function (event, data){
	                $scope.userdata = data;
	                //console.log($scope.userdata.p);
	                if($scope.userdata.p === undefined){
	                    $scope.userdata.p = false;
	                }
	            }
	        });
	    }
	    ////查询右侧文本框已有的数据
	    //$scope.selctuserUp = function(){
	    //    newPut4Service.selctuserUp().then(function (data){
	    //        console.log(data);
	    //        if(data.flag == false){
	    //
	    //        }else{
	    //            $scope.userUp = data.pro;
	    //        }
	    //
	    //
	    //    },function(){
	    //        console.log("newPut4Controller  管理_应用设置_应用上架:发布新应用 第四步(发布范围)");
	    //    });
	    //};
	  // $scope.selctuserUp();
	    //添加数组中数据
	    $scope.addUser = function(){
	        var count = 0;
	        //首先判断选中
	        if($scope.userdata.p === true){
	            for(var i = 0; i< $scope.userUp.length; i++ ){
	                if($scope.userdata.text == $scope.userUp[i].text ){
	                    count = 1;
	                }
	            }
	            if(count == 0){
	                $scope.userdata.status=true;
	                $scope.userUp.push($scope.userdata);
	                if( $scope.userUp.length != 0){
	                    $('.ngSrcjjj').attr('src','images/1111111.png');
	                }
	            }
	            //$scope.userdata.Station_1=false;
	            //console.log($scope.userdata);

	        }
	    };
	    //确认右侧需要删除数据所在列表位置
	    $scope.deleteUserUp = function(us,index){
	        $scope.toDeleteUser = $scope.userUp.indexOf(us);

	        $scope.selected = index;
	    };
	    //删除右侧数组中数据
	    $scope.deleteUser = function(){
	        //console.log($scope.toDeleteUser);
	        if($scope.selected == $scope.toDeleteUser){
	            $scope.userUp.splice($scope.toDeleteUser,1);
	            if( $scope.userUp.length == 0){
	                $('.ngSrcjjj').attr('src','images/1.png');
	            }
	        }
	    };
	    //获取左侧tree用户组列表
	    function getUserGroup(){
	        newPut4Service.getUserGroup().then(function(data){
	            $scope.userGroupList=data.userGroupList;
	            //绑定tree数据
	            treeBind();
	        },function(){
	            console.log("newPut4Controller  管理_应用设置_应用上架:发布新应用 第四步(发布范围)");
	        });
	    }


	    $scope.Save_No4= function(){

	        //console.log($scope.userUp);
	        newPut4Service.save_no4($scope.userUp,$scope.status).then(function (data){
	            console.log(data);
	            $scope.flag = data.station;
	            if(data.station == true){
	                $scope.msgBoxShow_saveBu=true;
	                $scope.testBuResult='保存成功！';
	                setTimeout(function(){
	                    $state.go('manage.appadded5');
	                },800);
	            }

	        },function(){
	            console.log("newPut4Controller  管理_应用设置_应用上架:发布新应用 第四步(发布范围)");
	        });
	    };

	    var Select_No4= function(appId){
	        newPut4Service.Select_No4(appId).then(function (data){
	            if(data.userGroupList != undefined){
	                $scope.userUp = data.userGroupList;
	            }

	        },function(){
	            console.log("newPut4Controller  管理_应用设置_应用上架:发布新应用 第四步(发布范围)");
	        });
	    };

	    //下一步
	    $scope.Next= function(){
	        //$scope.Select_No4();
	        newPut4Service.save_no4($scope.userUp,$scope.status).then(function (data){
	            console.log(data);
	            $scope.flag = data.station;
	            if(data.station == true){
	                $scope.msgBoxShow_saveBu=true;
	                $scope.testBuResult='保存成功！';
	                setTimeout(function(){
	                    $state.go('manage.appadded5');
	                },800);
	            }

	        },function(){
	            console.log("newPut4Controller  管理_应用设置_应用上架:发布新应用 第四步(发布范围)");
	        });

	    };

	    getUserGroup();
	    //数据初始化
	    $scope.init=function(){
	        if(appId){
	            Select_No4(appId);
	        }
	    };
	    $scope.init();
	};

/***/ },
/* 77 */
/***/ function(module, exports) {

	/**
	 * Created by vision on 16/3/28.
	 */
	module.exports = function($stateParams,$http,$q,httpservice,Session){
	    var newPut4Service = {};
	    newPut4Service.save_no4 = function(userUp,status){
	        var deferred = $q.defer();
	        $http({
	            method:'POST',
	            url:httpservice.manage_appset_putup_no4_save,
	            params:{
	                'sessionId': Session.id,
	                'userId': Session.userId,
	                'userUp': JSON.stringify(userUp),
	                'companyId':Session.companyId,
	                'appId': sessionStorage.appId,
	                'status':status
	            }
	        }).then(function successCallback(response){
	                deferred.resolve(response.data);
	            },function errorCallback(response){
	                console.log("newPut4Servcie  管理_应用设置_应用上架:发布新应用 第四步(发布范围)");
	                deferred.reject(response.data);
	            }
	        );
	        return deferred.promise;
	    };
	    newPut4Service.selctuserUp = function(appId){
	        var deferred = $q.defer();
	        $http({
	            method:'GET',
	            url:httpservice.findRelease,
	            params:{
	                'sessionId': Session.id,
	                'userId': Session.userId,
	                'companyId':Session.companyId,
	                'appId':appId
	            }
	        }).then(function successCallback(response){
	                deferred.resolve(response.data);
	            },function errorCallback(response){
	                console.log("newPut4Servcie  管理_应用设置_应用上架:发布新应用 第四步(发布范围) 获取左侧Tree ");
	                deferred.reject(response.data);
	            }
	        );
	        return deferred.promise;
	    };
	    newPut4Service.getUserGroup = function(){
	        var deferred = $q.defer();
	        //console.log(Session.companyId);
	        $http({
	            method:'GET',
	            url:httpservice.manage_appset_putup_no4_left,
	            params:{
	                'sessionId': Session.id,
	                'userId': Session.userId,
	                'companyId':Session.companyId
	            }
	        }).then(function successCallback(response){
	                deferred.resolve(response.data);
	            },function errorCallback(response){
	                console.log("newPut4Servcie  管理_应用设置_应用上架:发布新应用 第四步(发布范围) 获取左侧Tree ");
	                deferred.reject(response.data);
	            }
	        );
	        return deferred.promise;
	    };

	    newPut4Service.Select_No4 = function(appId){
	        var deferred = $q.defer();
	        $http({
	            method:'POST',
	            url:httpservice.manage_appset_putup_no4_select,
	            params:{
	                'sessionId': Session.id,
	                'userId': Session.userId,
	                'companyId':Session.companyId,
	                'appId': appId
	            }
	        }).then(function successCallback(response){
	                Appsession.destroy();
	                deferred.resolve(response.data);
	            },function errorCallback(response){
	                console.log("newPut4Servcie  管理_应用设置_应用上架:发布新应用 第四步(发布范围)");
	                deferred.reject(response.data);
	            }
	        );
	        return deferred.promise;
	    };

	    return newPut4Service;
	};

/***/ },
/* 78 */
/***/ function(module, exports) {

	/**
	 * Created by vision on 16/3/28.
	 */
	module.exports = function(){

	};


/***/ },
/* 79 */
/***/ function(module, exports) {

	/**
	 * Created by vision on 16/3/28.
	 */
	module.exports = function(){

	};

/***/ },
/* 80 */
/***/ function(module, exports) {

	/**
	 * Created by Darren_YCDing on 16/4/8.
	 */
	module.exports = function($scope,$stateParams,$rootScope,subscribeMgService){
	    localStorage.selectType = $stateParams.selectType;
	    $scope.fenlei = '开发商';
	    if($stateParams.selectType == 0||$stateParams.selectType == undefined){
	        $('.twoLi').html('开发商');
	    }else{
	       $('.twoLi').html('分类');
	    }
	    $scope.userImportShow=false;
	    $scope.userImportShow_2=false;
	    $rootScope.fadeShow=false;
	    $scope.input_question;
	    //默认提示框为隐藏
	    $scope.msgBoxShow_saveBu=false;
	    $scope.id2 = 0;
	    $scope.value;
	    $scope.isall = false;
	    //传递参数appId,flowId,vers
	    $scope.ping_appId;
	    $scope.ping_flowId;
	    $scope.ping_vers;
	    $scope.ping_Id;

	    $scope.flag = false;
	    //默认星星的等级
	    $scope.numXing= 0;
	    $scope.xingxinxg = 0;
	    //获取应用信息
	    $scope.apps = [];
	    //分页当前页参数
	    $scope.currentPage=1;
	    //分页每页显示的数量
	    $scope.PageSize = 4;
	    $scope.searchTitle='';

	    //if($stateParams.selectType==0){
	    //    $scope.fenlei = "开发商";
	    //}else if($stateParams.selectType==1){
	    //    $scope.fenlei = "分类";
	    //}

	    //按开发商加载
	    var selectAppsByCompany = function(page,pageSize,searchTitle){
	        //$scope.fenlei = "开发商";
	        subscribeMgService.getAppsByCompany(page,pageSize,searchTitle).then(function (data) {
	            //$scope.byCompany = data.byCompany;
	            console.log(data);
	            $scope.apps = data.infos;
	            $scope.totalPage = data.totalPage;
	            $scope.nowPage = data.nowPage;
	            $scope.id = data.id;
	            $scope.totalPas = data.totalPas;
	            $scope.currentPage = data.page;
	        }, function () {
	            console.log('subscribeMgController 管理_我的应用_我的订阅:按开发商加载失败！');
	        });
	    };

	    //分类应用列表点击改变页码
	    $scope.changePage=function(currentPage){

	        if(currentPage <= $scope.totalPage&&currentPage>0 )
	        {
	            if($scope.fenlei == '开发商'){

	               selectAppsByCompany(currentPage,$scope.PageSize,$scope.searchTitle);
	            }
	            if($scope.fenlei == '分类'){

	                selectAppsByClass(currentPage,$scope.PageSize,$scope.searchTitle);
	            }

	        }
	        else
	        {
	            console.log('classMgController 管理_我的应用_我的分类：我的分类应用列表页码越界！');
	        }
	    };


	    //按分类加载
	    var selectAppsByClass = function(page,pageSize,searchTitle){
	        //$scope.fenlei = "分类";
	        subscribeMgService.getAppsByClass(page,pageSize,searchTitle).then(function (data) {
	            //$scope.byClass = data.byClass;
	            $scope.apps = data.infos;
	            $scope.totalPage = data.totalPage;
	            $scope.nowPage = data.nowPage;
	            $scope.id = data.id;
	            $scope.totalPas = data.totalPas;
	            $scope.currentPage = data.page;
	        }, function () {
	            console.log('subscribeMgController 管理_我的应用_我的订阅:按分类加载失败！');
	        });
	    };
	    //提问题
	    $scope.unQuestion = function(appId,flowId){
	        $rootScope.fadeShow=true;
	        $scope.userImportShow=true;
	        $scope.appId = appId;
	        $scope.flowId = flowId;
	        if(localStorage.selectType==0){//开发商

	        }
	        else {//分类

	        }


	    };
	    //评价
	    $scope.unPingJia = function(appId,flowId,vse){
	        $('.importUser_input_pj').val('');
	        $scope.ping_appId=appId;
	        $scope.ping_flowId=flowId;
	        $scope.ping_vers=vse;
	        $rootScope.fadeShow=true;
	        $scope.userImportShow_2=true;
	        subscribeMgService.selectXing(appId,vse).then(function (data){
	            $scope.flag = data.flag;
	            if($scope.flag == true) {
	                $scope.numXing = data.review.rate;
	                $scope.xingxing = data.review.rate;
	                $scope.id2 = data.review.id;
	                $scope.value = data.review.text
	                $('.importUser_input_pj').val($scope.value);
	            }else{
	                $scope.id2 = 0;
	            }
	            //星星点击的方法
	            var stepW = 24;
	            var stars = $("#star > li");
	            if($scope.flag == true){

	                $("#showb").css({"width":stepW*$scope.numXing});
	                stars.each(function(i){
	                    $(stars[i]).click(function(e){
	                        var n = i+1;
	                        $scope.xingxing = n;
	                        $("#showb").css({"width":stepW*n});
	                        //  descriptionTemp = description[i];
	                        $(this).find('a').blur();
	                        return stopDefault(e);
	                        //   return descriptionTemp;
	                    });
	                });
	            }else{

	                $("#showb").css("width",0);
	                stars.each(function(i){

	                    $(stars[i]).click(function(e){
	                        var n = i+1;
	                        $scope.xingxing = n;
	                        $("#showb").css({"width":stepW*n});
	                        //  descriptionTemp = description[i];
	                        $(this).find('a').blur();
	                        return stopDefault(e);
	                        //   return descriptionTemp;
	                    });
	                });
	            }

	        },function(){
	            console.log('subscribeMgController 管理_我的应用_我的订阅:评论失败！');
	        });
	    };
	    //提交评价
	    $scope.saveImportUsersPingjia = function(){
	        $scope.input_question =  $('.importUser_input_pj').val();
	        if($scope.xingxing == 0){
	            $scope.msgBoxShow_saveBu=true;
	            $scope.testBuResult='请选择星星等级！';
	        }
	        else if($scope.input_question == null || $scope.input_question == undefined || $scope.input_question == ''){
	            $scope.msgBoxShow_saveBu=true;
	            $scope.testBuResult='请输入评论内容！';
	        }else{
	            subscribeMgService.subPj($scope.ping_appId,$scope.ping_flowId,$scope.ping_vers, $scope.input_question, $scope.xingxing,$scope.id2, $scope.isall).then(function (data){
	                if(data.flag == true){
	                    $scope.msgBoxShow_saveBu=true;
	                    $scope.testBuResult='提交成功！';
	                }
	            },function(){
	                console.log('subscribeMgController 管理_我的应用_我的订阅:评论失败！');
	            });
	        }
	    };
	    //关闭保存错误提示框
	    $scope.closeMsgBox_saveBu=function(){
	        $scope.msgBoxShow_saveBu=false;
	    };
	    //取消订阅
	    $scope.unDo = function(appId,flowId){
	        subscribeMgService.unDoApp(appId,flowId).then(function (data) {
	            if(data.flag==true){
	                for(var i=0;i<$scope.apps.length;i++){
	                    var m = $scope.apps[i]['appInfos'];
	                    for(var j=0;j<m.length;j++){
	                        if(m[j]['appId']==appId){
	                            m[j]['Station']="取消中";
	                        }
	                    }
	                }
	            }
	        }, function () {
	            console.log('subscribeMgController 管理_我的应用_我的订阅:取消订阅失败！');
	        });
	    };

	    if($stateParams.selectType==0){
	        $scope.fenlei = "开发商";

	        selectAppsByCompany( $scope.currentPage,$scope.PageSize,$scope.searchTitle);
	        //console.log($scope.fenlei);
	    }
	    else if ($stateParams.selectType==1){
	        $scope.fenlei = "分类";

	        selectAppsByClass($scope.currentPage,$scope.PageSize,$scope.searchTitle);
	        //console.log($scope.fenlei);
	    }
	    //点击关闭导入用户窗口
	    $scope.closeImportUser=function(){
	        $scope.userImportShow=false;
	        $rootScope.fadeShow=false;
	    };
	    $scope.closeImportUser_2=function(){
	        $scope.userImportShow_2=false;
	        $rootScope.fadeShow=false;
	        $scope.msgBoxShow_saveBu=false;
	    };



	    function stopDefault(e){
	        if(e && e.preventDefault)
	            e.preventDefault();
	        else
	            window.event.returnValue = false;
	        return false;
	    };


	    //点击提交用户窗口确认
	    $scope.saveImportUsers=function() {
	        $scope.input_question = $('.importUser_input').val();
	        subscribeMgService.saveImportUsers( $scope.input_question,$scope.appId,$scope.flowId).then(function(data){
	            $scope.userImportShow=false;
	            $rootScope.fadeShow=false;
	        },function(){
	            console.log('subscribeMgController 我的应用_我的订阅_问题提交（用户）：用户提交失败！');
	        });

	    };

	    //点击搜索按钮事件
	    $scope.operationSearch=function(searchTitle){
	        if(searchTitle != null|| searchTitle != undefined){
	            $scope.searchTitle=searchTitle;
	            //获取我的申请列表
	           // $scope.getList( 1,4,searchTitle);
	            if(localStorage.selectType==0){
	                subscribeMgService.getAppsByCompany(1,4,$scope.searchTitle).then(function (data) {
	                    //$scope.byCompany = data.byCompany;
	                    console.log(data);
	                    angular.element('#manage_subscribe_company_scope').scope().apps = data.infos;
	                    angular.element('#manage_subscribe_company_scope').scope().totalPage = data.totalPage;
	                    angular.element('#manage_subscribe_company_scope').scope().nowPage = data.nowPage;
	                    angular.element('#manage_subscribe_company_scope').scope().id = data.id;
	                    angular.element('#manage_subscribe_company_scope').scope().totalPas = data.totalPas;
	                    angular.element('#manage_subscribe_company_scope').scope().currentPage = data.page;
	                }, function () {
	                    console.log('subscribeMgController 管理_我的应用_我的订阅:按开发商加载失败！');
	                });
	            }
	            else if (localStorage.selectType==1){
	                subscribeMgService.getAppsByClass(1,4,$scope.searchTitle).then(function (data) {
	                    //$scope.byClass = data.byClass;
	                    angular.element('#manage_subscribe_class_scope').scope().apps = data.infos;
	                    angular.element('#manage_subscribe_class_scope').scope().totalPage = data.totalPage;
	                    angular.element('#manage_subscribe_class_scope').scope().nowPage = data.nowPage;
	                    angular.element('#manage_subscribe_class_scope').scope().id = data.id;
	                    angular.element('#manage_subscribe_class_scope').scope().totalPas = data.totalPas;
	                    angular.element('#manage_subscribe_class_scope').scope().currentPage = data.page;
	                }, function () {
	                    console.log('subscribeMgController 管理_我的应用_我的订阅:按分类加载失败！');
	                });
	                //console.log($scope.fenlei);
	            }
	        }

	    };
	    //$scope.operationSearch=function(searchTitle){
	    //    //var applyStatus=$scope.applyStatus;
	    //    $scope.searchTitle=searchTitle;
	    //    //获取我的申请列表
	    //    $scope.getList( applyStatus,1,searchTitle);
	    //};
	    //console.log($scope.fenlei);

	};

/***/ },
/* 81 */
/***/ function(module, exports) {

	/**
	 * Created by Darren_YCDing on 16/4/8.
	 */
	module.exports = function($http, $q, httpservice, Session){
	    var subscribeMgService = {};
	    //按开发商加载
	    subscribeMgService.getAppsByCompany = function (currentPage,pageSize,searchTitle) {
	        var deferred = $q.defer();
	        $http({
	            method: 'GET',
	            url: httpservice.subscribe_Manage_Company,
	            params: {
	                'sessionId': Session.id,
	                'userId': Session.userId,
	                'companyId':Session.companyId,
	                'page':currentPage,
	                'pageSize':pageSize,
	                'searchTitle':searchTitle
	            }
	        }).then(function successCallback(response) {
	            //当前页
	            var maxPage = currentPage;
	            if(maxPage === ""){
	                maxPage = 1;
	            }
	            //总页数
	            var total = response.data.total;
	            var startPage = response.data.startPage;
	            var endPage = response.data.endPage;
	            if(total <= maxPage){
	                maxPage = total;
	            }
	            if(maxPage<=0){
	                maxPage = 1;
	            }
	            var totalPas = {};

	            for(var i=startPage;i<=endPage;i++){
	                totalPas[i-1] = i;
	            }
	            //设置当前页和总页数
	            response.data.totalPage =total;
	            response.data.nowPage = maxPage+"/"+total;
	            response.data.totalPas = totalPas;
	            response.data.page = maxPage;
	            deferred.resolve(response.data);
	        }, function errorCallback(response) {
	            console.log("subscribeMgService  管理_我的应用_我的订阅:按开发商加载失败！");
	            deferred.reject(response.data);
	        });
	        return deferred.promise;
	    };
	    //评价
	    subscribeMgService.subPj = function(appId,flowId,s1,s2,ves,id,isall){

	        var deferred = $q.defer();
	        $http({
	            method: 'POST',
	            url: httpservice.selectDataImgBussinessPingLun,
	            params: {
	                'sessionId': Session.id,
	                'userId': Session.userId,
	                'companyId':Session.companyId,
	                'appId':appId,
	                'flowId':flowId,
	                'rate':ves,
	                'version':s1,
	                'text':s2,
	                'id':id,
	                'isall':isall
	            }
	        }).then(function successCallback(response) {
	            deferred.resolve(response.data);
	        }, function errorCallback(response) {
	            console.log("subscribeMgController 我的应用_我的订阅_问题提交（用户）：用户提交失败！");
	            deferred.reject(response.data);
	        });
	        return deferred.promise;
	    }
	    //查询方法（评价）
	    subscribeMgService.selectXing = function(sId,vse){
	        var deferred = $q.defer();
	        $http({
	            method: 'GET',
	            url: httpservice.selectDataImgBussinessXiangqing,
	            params: {'userId':Session.userId,'companyId':Session.companyId,'appId':sId,'version':vse,'isall':false}
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
	    //提交问题
	    subscribeMgService.saveImportUsers = function(input_question,appId,flowId){
	        var deferred = $q.defer();
	        $http({
	            method: 'POST',
	            url: httpservice.subscribe_Manage_unDo,
	            params: {
	                'sessionId': Session.id,
	                'userId': Session.userId,
	                'companyId':Session.companyId,
	                'appId':appId,
	                'flowId':flowId,
	                'question':input_question
	            }
	        }).then(function successCallback(response) {
	            deferred.resolve(response.data);
	        }, function errorCallback(response) {
	            console.log("subscribeMgController 我的应用_我的订阅_问题提交（用户）：用户提交失败！");
	            deferred.reject(response.data);
	        });
	        return deferred.promise;
	    }
	    //按分类加载
	    subscribeMgService.getAppsByClass = function (currentPage,pageSize,searchTitle) {
	        var deferred = $q.defer();
	        $http({
	            method: 'GET',
	            url: httpservice.subscribe_Manage_Class,
	            params: {
	                'sessionId': Session.id,
	                'userId': Session.userId,
	                'companyId':Session.companyId,
	                'page':currentPage,
	                'pageSize':pageSize,
	                'searchTitle':searchTitle
	            }
	        }).then(function successCallback(response) {
	            //当前页
	            var maxPage = currentPage;
	            if(maxPage === ""){
	                maxPage = 1;
	            }
	            //总页数
	            var total = response.data.total;
	            var startPage = response.data.startPage;
	            var endPage = response.data.endPage;
	            if(total <= maxPage){
	                maxPage = total;
	            }
	            if(maxPage<=0){
	                maxPage = 1;
	            }
	            var totalPas = {};

	            for(var i=startPage;i<=endPage;i++){
	                totalPas[i-1] = i;
	            }
	            //设置当前页和总页数
	            response.data.totalPage =total;
	            response.data.nowPage = maxPage+"/"+total;
	            response.data.totalPas = totalPas;
	            response.data.page = maxPage;
	            deferred.resolve(response.data);
	        }, function errorCallback(response) {
	            console.log("subscribeMgService  管理_我的应用_我的订阅:按分类加载失败！");
	            deferred.reject(response.data);
	        });
	        return deferred.promise;
	    };

	    //取消订阅
	    subscribeMgService.unDoApp = function (appId,flowId) {
	        var deferred = $q.defer();
	        $http({
	            method: 'POST',
	            url: httpservice.subscribe_Manage_unDo,
	            params: {
	                'sessionId': Session.id,
	                'userId': Session.userId,
	                'companyId':Session.companyId,
	                'appId':appId,
	                'flowId':flowId
	            }
	        }).then(function successCallback(response) {
	            deferred.resolve(response.data);
	        }, function errorCallback(response) {
	            console.log("subscribeMgService  管理_我的应用_我的订阅:取消订阅失败！");
	            deferred.reject(response.data);
	        });
	        return deferred.promise;
	    };

	    return subscribeMgService;
	};

/***/ },
/* 82 */
/***/ function(module, exports) {

	/**
	 * Created by ZXL on 2016/6/12.
	 */
	module.exports = function($parse){
	    return {
	        require : '?ngModel',
	        link : function(scope, element, attrs, ngModel) {
	            var ckeditor = CKEDITOR.replace(element[0], {});
	            if (!ngModel) {
	                return;
	            }
	            ckeditor.on('instanceReady', function() {
	                ckeditor.setData(ngModel.$viewValue);
	            });
	            ckeditor.on('pasteState', function() {
	                scope.$apply(function() {
	                    ngModel.$setViewValue(ckeditor.getData());
	                });
	            });
	            ngModel.$render = function(value) {
	                ckeditor.setData(ngModel.$viewValue);
	            };
	        }
	    };
	};

/***/ },
/* 83 */
/***/ function(module, exports) {

	/**
	 * Created by vision on 16/3/30.
	 */
	module.exports = function($parse){
	    return {
	        restrict: 'AE',
	        template:'<input type="file" />',
	        replace:true,
	        link: function(scope, element, attrs, ngModel) {
	            //var model = $parse(attrs.fileModel);
	            //var modelSetter = model.assign;
	            element.bind('change', function(event){
	                //scope.$apply(function(){
	                //    modelSetter(scope, element[0].files[0]);
	                //});
	                //附件预览
	                scope.file = (event.srcElement || event.target).files[0];
	                scope.$apply(attrs.fileModel);
	                //console.log(attrs.fileModel);
	                //scope.getFile();
	            });
	        }
	    };
	};

/***/ },
/* 84 */
/***/ function(module, exports) {

	/**
	 * Created by vision on 16/3/30.
	 */
	module.exports = function($q){
	    var onLoad = function(reader, deferred, scope) {
	        return function () {
	            scope.$apply(function () {
	                deferred.resolve(reader.result);
	            });
	        };
	    };
	    var onError = function (reader, deferred, scope) {
	        return function () {
	            scope.$apply(function () {
	                deferred.reject(reader.result);
	            });
	        };
	    };
	    var getReader = function(deferred, scope) {
	        var reader = new FileReader();
	        reader.onload = onLoad(reader, deferred, scope);
	        reader.onerror = onError(reader, deferred, scope);
	        return reader;
	    };
	    var readAsDataURL = function (file, scope) {
	        var deferred = $q.defer();
	        var reader = getReader(deferred, scope);
	        reader.readAsDataURL(file);
	        return deferred.promise;
	    };
	    return {
	        readAsDataUrl: readAsDataURL
	    };
	};

/***/ },
/* 85 */
/***/ function(module, exports) {

	/**
	 * Created by vision on 16/1/17.
	 */
	module.exports= function ($rootScope,$state) {
	    //add by HUA--start
	    //设置管理点击样式
	    $rootScope.mgBtnShowCor='login_2';
	    //add by HUA--end
	    var vm=this;
	    vm.text="我来自HelpContrller";
	    console.log(vm.text);
	    vm.persons=[{"name":"wangming"},{"name":"dingyanchao"}];
	    vm.btnclick= function () {
	        vm.persons.push({"name":"hahahhahaha"});
	        vm.persons.push({"name":"hehehhe"});
	        vm.persons.push({"name":"hehhehehehehehe"});
	        vm.persons.push({"name":"hahahhaxhhxhshxhaha"});

	        //vm.text="我被button点击了";
	        //$state.go('myapp.tubiao');
	        //getdata(vm.text).then(function (data) {
	        //    vm.text=data.name;
	        //}, function (error) {
	        //
	        //});
	    };
	};

/***/ },
/* 86 */
/***/ function(module, exports) {

	/**
	 * Created by vision on 16/1/19.
	 */
	module.exports = function ($http, $q) {
	    var func1=function (data) {
	        var deferred = $q.defer();
	        $http({
	            method: 'GET',
	            url: './src/data.json?data='+data
	        }).then(function successCallback(response) {
	            // this callback will be called asynchronously
	            // when the response is available
	            deferred.resolve(response.data);
	        }, function errorCallback(response) {
	            // called asynchronously if an error occurs
	            // or server returns response with an error status.
	            deferred.reject(response);
	        });
	        return deferred.promise;
	    };

	    return {
	        query: func1
	    }
	};

/***/ }
/******/ ]);