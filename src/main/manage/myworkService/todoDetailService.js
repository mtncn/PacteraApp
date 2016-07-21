/**
 * Created by Sky on 2016/3/21.
 */
module.exports=function($stateParams,$http,$q,httpservice,Session) {
    var todoDetailMgService = {};
    //查看待办详情
    todoDetailMgService.openDetail = function (todoStatus) {
        var deferred = $q.defer();
       /* $http.jsonp(httpservice.todoDetail,{
            method: 'GET',
            params: { callback:"JSON_CALLBACK",
                'sessionId': Session.id,'userId': Session.userId,'todoStatus':todoStatus,'companyId':Session.companyId,'flowId':$stateParams.flowId,'taskId':$stateParams.taskId}
        }).then(function successCallback(response) {*/
      $http({
            method: 'GET',
            url: httpservice.todoDetail,
            params: { 'sessionId': Session.id,'userId': Session.userId,'todoStatus':todoStatus,'companyId':Session.companyId,'flowId':$stateParams.flowId,'taskId':$stateParams.taskId}
        }).then(function successCallback(response) {
                deferred.resolve(response.data);
            }, function errorCallback(response) {
                deferred.reject(response.data);
            }
        );
        return deferred.promise;
    };
    //同意或取消待办
    todoDetailMgService.operation = function (operation,comment) {
        var deferred = $q.defer();
       /* $http.jsonp(httpservice.todoDetail,{
            method: 'GET',
            params: { callback:"JSON_CALLBACK",
                'sessionId': Session.id,'userId': Session.userId,'flowId':$stateParams.flowId,'operation':operation,'comment':comment,'taskId':$stateParams.taskId,'companyId':Session.companyId}
        }).then(function successCallback(response) {*/
       $http({
            method: 'GET',
            url: httpservice.todoApproveManage,
            params: {'sessionId': Session.id,'userId': Session.userId,'flowId':$stateParams.flowId,'operation':operation,'comment':comment,'taskId':$stateParams.taskId,'companyId':Session.companyId}
        }).then(function successCallback(response) {
                deferred.resolve(response.data);
            }, function errorCallback(response) {
                deferred.reject(response.data);
            }
        );
        return deferred.promise;
    };
    return todoDetailMgService;
};