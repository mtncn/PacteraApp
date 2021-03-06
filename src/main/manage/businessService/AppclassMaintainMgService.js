/**
 * Created by Sky on 2016/3/28.
 */
module.exports=function($stateParams, $http, $q, httpservice, Session) {
    var AppclassMaintainMgService = {};
    //获取我的分类菜单列表数据
    AppclassMaintainMgService.getMenu = function (menuId,orderId,menuName,operation,sortStatus) {
        var deferred = $q.defer();
        $http({
            method: 'GET',
            url: httpservice.AppMaintainclassMenuManage,
            params: {
                'sessionId': Session.id,
                'userId': Session.userId,
                'companyId':Session.companyId,
                'sortId':menuId,
                'orderId':orderId,
                'sortName':menuName,
                'operation':operation,
                'sortStatus':sortStatus
            }
        }).then(function successCallback(response) {
            deferred.resolve(response.data);
        }, function errorCallback(response) {
            deferred.reject(response.data);
        });
        return deferred.promise;
    };
    //获取我的分类菜单列表数据
    AppclassMaintainMgService.getData = function (currentPage,menuSortId,orderId,appId,operation) {
        var deferred = $q.defer();
        $http({
            method: 'GET',
            url: httpservice.AppMaintainclassListManage,
            params: {
                'sessionId': Session.id,
                'userId': Session.userId,
                'companyId':Session.companyId,
                'page': currentPage,
                'pageSize': 4,
                'sortId':menuSortId,
                'orderId':orderId,
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
    //获取分类维护未分类的应用列表数据
    AppclassMaintainMgService.getAppList_nonSort = function (currentPage,searchTitle) {

        var deferred = $q.defer();
        $http({
            method: 'GET',
            url: httpservice.AppappListManage,
            params: {
                'sessionId': Session.id,
                'userId': Session.userId,
                'companyId':Session.companyId,
                'searchTitle':searchTitle,
                'page': currentPage,
                'pageSize': 3
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
    //保存添加的应用分类
    AppclassMaintainMgService.addApp = function (appIdList,menuSortId) {
        var deferred = $q.defer();
        $http({
            method: 'GET',
          //  url: httpservice.appListManage,
             url: httpservice.AppappListAddManage,
            params: {
                'sessionId': Session.id,
                'userId': Session.userId,
                'companyId':Session.companyId,
                'appIdList':appIdList,
                'sortId':menuSortId
            }
        }).then(function successCallback(response) {
            deferred.resolve(response.data);
        }, function errorCallback(response) {
            deferred.reject(response.data);
        });
        return deferred.promise;
    };
    return AppclassMaintainMgService;
}