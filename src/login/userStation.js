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