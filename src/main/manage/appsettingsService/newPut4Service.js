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