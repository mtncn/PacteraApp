/**
 * Created by Sky on 2016/3/28.
 */
module.exports=function($stateParams, $http, $q, httpservice, Session) {
    var AppclassMgService = {};
    //获取我的分类菜单列表数据
    AppclassMgService.getMenu = function () {
        var deferred = $q.defer();
        $http({
            method: 'GET',
            url: httpservice.AppclassMenuManage,
            params: {
                'sessionId': Session.id,
                'userId': Session.userId,
                'companyId':Session.companyId,
            }
        }).then(function successCallback(response) {
            deferred.resolve(response.data);
        }, function errorCallback(response) {
            deferred.reject(response.data);
        });
        return deferred.promise;
    };
    //获取我的分类菜单列表数据
    AppclassMgService.getData = function (currentPage,menuSortId,indexId,appId,operation) {
        var deferred = $q.defer();
        $http({
            method: 'GET',
            url: httpservice.AppclassListManage,
            params: {
                'sessionId': Session.id,
                'userId': Session.userId,
                'companyId':Session.companyId,
                'page': currentPage,
                'pageSize': 4,
                'sortId':menuSortId,
                'indexId':indexId,
                'appId':appId,
                'operation':operation
            }
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
        });
        return deferred.promise;
    };
    return AppclassMgService;
}