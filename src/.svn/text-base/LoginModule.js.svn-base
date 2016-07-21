/**
 * Created by vision on 16/2/2.
 */
//获取登陆服务Service
var loginservice = require('./login/loginService');

var loginController = require('./login/loginController');

var userStation = require('./login/userStation');
var loginsession = require('./login/loginSession');

//使用一个对象工厂函数定义服务
login.factory('loginService',loginservice);
//使用一个类构造函数定义服务
login.service('Session',loginsession);
//login.controller('loginCon',loginController);
//使用一个常量定义服务  用户状态
login.constant('AUTH_EVENTS', userStation.AUTH_EVENTS);
//使用一个常量定义服务  用户角色权限
login.constant('USER_ROLES', userStation.USER_ROLES);