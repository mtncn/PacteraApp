/**
 * Created by Sky on 2016/3/21.
 */
module.exports=function($stateParams,$http,$q,httpservice,Session) {
    var doneDetailMgService = {};
    //打开已办详情
    doneDetailMgService.openDetail = function () {
        var deferred = $q.defer();
       /* $http.jsonp(httpservice.todoDetail,{
            method: 'GET',
            params: { callback:"JSON_CALLBACK",
                'sessionId': Session.id,'userId': Session.userId,'companyId':Session.companyId,'flowId':$stateParams.flowId,'taskId':$stateParams.taskId}
        }).then(function successCallback(response) {*/
        $http({
            method: 'GET',
            url: httpservice.todoDetail,
            params: { 'sessionId': Session.id,'userId': Session.userId,'companyId':Session.companyId,'flowId':$stateParams.flowId,'taskId':$stateParams.taskId}
        }).then(function successCallback(response) {
                deferred.resolve(response.data);
            }, function errorCallback(response) {
                deferred.reject(response.data);
            }
        );
        return deferred.promise;
    };
    return doneDetailMgService;
};