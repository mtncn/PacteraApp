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