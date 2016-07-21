/**
 * Created by Sky on 2016/3/8.
 */
module.exports = function ($stateParams, $http, $q, httpservice, Session) {
    var applyMgService = {};
    //获取我的申请列表数据
    applyMgService.apply = function (applyStatus,currentPage,searchTitle) {
        var deferred = $q.defer();
   /* $http.jsonp(httpservice.applyManage,{
            method: 'GET',
            params: { callback:"JSON_CALLBACK",
                'sessionId': Session.id,'userId': Session.userId,'status':applyStatus,'page':currentPage,'pageSize':8,'companyId':Session.companyId,'searchTitle':searchTitle }
        }).then(function successCallback(response) {*/
        $http({
            method: 'GET',
            url:httpservice.applyManage,
            params: {'sessionId': Session.id,'userId': Session.userId,'status':applyStatus,'page':currentPage,'pageSize':8,'companyId':Session.companyId,'searchTitle':searchTitle }
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
    return applyMgService;
};