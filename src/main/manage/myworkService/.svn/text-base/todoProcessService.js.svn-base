/**
 * Created by Sky on 2016/3/21.
 */
module.exports=function($stateParams,$http,$q,httpservice,Session) {
    var todoProcessMgService = {};
    //查看我的待办流程图
    todoProcessMgService.openImg = function () {
        var deferred = $q.defer();
      /*  $http.jsonp(httpservice.todoProcess,{
            method: 'GET',
            params: { callback:"JSON_CALLBACK",
                'sessionId': Session.id,'userId': Session.userId,'todoStatus':$stateParams.todoStatus,'companyId':Session.companyId,'flowId':$stateParams.flowId,'taskId':$stateParams.taskId}
        }).then(function successCallback(response) {*/
        $http({
            method: 'GET',
            url: httpservice.todoProcess,
            params: { 'sessionId': Session.id,'userId': Session.userId,'todoStatus':$stateParams.todoStatus,'companyId':Session.companyId,'flowId':$stateParams.flowId,'taskId':$stateParams.taskId}
        }).then(function successCallback(response) {
                deferred.resolve(response.data);
            }, function errorCallback(response) {
                deferred.reject(response.data);
            }
        );
        return deferred.promise;
    };
    return todoProcessMgService;
};