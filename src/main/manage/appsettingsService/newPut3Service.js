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