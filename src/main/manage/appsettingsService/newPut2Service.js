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