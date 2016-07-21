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
