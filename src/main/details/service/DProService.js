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
