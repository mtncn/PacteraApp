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