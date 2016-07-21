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