/**
 * Created by Sky on 2016/3/8.
 */
module.exports=function($stateParams,$http,$q,httpservice,Session){

    var todoMgService = {};
    todoMgService.todo = function (todoStatus,currentPage,searchTitle) {

        var deferred = $q.defer();
      /* $http.jsonp(httpservice.todoManage,{
            method: 'GET',
            params: { callback:"JSON_CALLBACK",
                'sessionId': Session.id,'userId': Session.userId,'todoStatus':todoStatus,'companyId':Session.companyId,'searchTitle':searchTitle,'page':currentPage,'pageSize':6}
        }).then(function successCallback(response) {*/
       $http({
            method: 'GET',
            url:httpservice.todoManage,
            params: {
            'sessionId': Session.id,'userId': Session.userId,'todoStatus':todoStatus,'companyId':Session.companyId,'searchTitle':searchTitle,'page':currentPage,'pageSize':8}
        }).then(function successCallback(response) {
                //当前页
                var maxPage = currentPage;
                if(maxPage === ""){
                    maxPage = 1;
                }
                //总页数
                var total = response.data.total;
               var startPage = response.data.startPage;
               var endPage = response.data.endPage;
               if(total <= maxPage){
                   maxPage = total;
               }
               if(maxPage<=0){
                   maxPage = 1;
               }
               var totalPas = {};

               for(var i=startPage;i<=endPage;i++){
                   totalPas[i-1] = i;
               }
                //设置当前页和总页数
                response.data.totalPage = total;
                response.data.nowPage = maxPage+"/"+total;
                response.data.totalPas = totalPas;
                response.data.currentPage = currentPage;
                response.data.page = maxPage;
                deferred.resolve(response.data);
            }, function errorCallback(response) {
                deferred.reject(response.data);
            }
        );
        return deferred.promise;
    };
    //向后台发送搜索申请的request
    todoMgService.operationSearch = function (searchTitle,todoStatus) {
        var deferred = $q.defer();
       /* $http.jsonp( httpservice.todoManage,{
            method: 'GET',
            params: { callback:"JSON_CALLBACK",
                'sessionId': Session.id,'userId': Session.userId,'searchTitle':searchTitle,'todoStatus':todoStatus,'companyId':Session.companyId,'page':1,'pageSize':6}
        }).then(function successCallback(response) {*/
      $http({
            method: 'GET',
            url: httpservice.todoManage,
            params: {'sessionId': Session.id,'userId': Session.userId,'searchTitle':searchTitle,'todoStatus':todoStatus,'companyId':Session.companyId,'page':1,'pageSize':8}
        }).then(function successCallback(response) {
                //当前页
                var maxPage = 1;
                if(maxPage === ""){
                    maxPage = 1;
                }
                //总页数
                var total = response.data.total;
                var startPage = response.data.startPage;
                var endPage = response.data.endPage;
                if(total <= maxPage){
                    maxPage = total;
                }
                if(maxPage<=0){
                    maxPage = 1;
                }
                var totalPas = {};

                for(var i=startPage;i<=endPage;i++){
                    totalPas[i-1] = i;
                }
                //设置当前页和总页数
                response.data.totalPage =total;
                response.data.nowPage = maxPage+"/"+total;
                response.data.totalPas = totalPas;
                response.data.page = maxPage;
                deferred.resolve(response.data);
            }, function errorCallback(response) {
                deferred.reject(response.data);
            }
        );
        return deferred.promise;
    };
    //点击标题获取编辑框数据
    todoMgService.openDetail = function (todoStatus,flowId,taskId) {
        var deferred = $q.defer();
      /*  $http.jsonp(httpservice.todoEdit,{
            method: 'GET',
            params: { callback:"JSON_CALLBACK",
                'sessionId': Session.id,'userId': Session.userId,'todoStatus':todoStatus,'companyId':Session.companyId,'flowId':flowId,'taskId':taskId}
        }).then(function successCallback(response) {*/
        $http({
            method: 'GET',
            url: httpservice.todoEdit,
            params: { 'sessionId': Session.id,'userId': Session.userId,'todoStatus':todoStatus,'companyId':Session.companyId,'flowId':flowId,'taskId':taskId}
        }).then(function successCallback(response) {
                deferred.resolve(response.data);
            }, function errorCallback(response) {
                deferred.reject(response.data);
            }
        );
        return deferred.promise;
    };
    return todoMgService;
};