/**
 * Created by Sky on 2016/3/22.
 */
module.exports=function($stateParams, $http, $q, httpservice, Session) {
    var classMgService = {};
    //获取我的分类菜单列表数据
    classMgService.getMenu = function (menuId,indexId,menuName,operation,sortStatus) {
        var deferred = $q.defer();
       /* $http.jsonp(httpservice.classMenuManage,{
            method: 'GET',
            params: {
                callback: "JSON_CALLBACK",
                'sessionId': Session.id,
                'userId': Session.userId,
                'companyId':Session.companyId,
                'sortId':menuId,
                'orderId':indexId,
                'sortName':menuName,
                'operation':operation,
                'sortStatus':sortStatus}
            }).then(function successCallback(response) {*/
       $http({
            method: 'GET',
            url: httpservice.classMenuManage,
            params: {
                'sessionId': Session.id,
                'userId': Session.userId,
                'companyId':Session.companyId,
                'sortId':menuId,
                'orderId':indexId,
                'menuName':menuName,
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
    classMgService.getData = function (currentPage,menuSortId,indexId,appId,operation) {
        var deferred = $q.defer();
        $http({
            method: 'GET',
            url: httpservice.classListManage,
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
    //获取分类维护未分类的应用列表数据
    classMgService.getAppList_nonSort = function (currentPage,searchTitle) {
        var deferred = $q.defer();
        $http({
            method: 'GET',
            url: httpservice.appListManage,
            params: {
                'sessionId': Session.id,
                'userId': Session.userId,
                'companyId':Session.companyId,
                'searchTitle':searchTitle,
                'page': currentPage,
                'pageSize':3
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
    classMgService.addApp = function (appIdList,menuSortId) {
        var deferred = $q.defer();
        $http({
            method: 'GET',
            url: httpservice.appListAddManage,
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
    return classMgService;
};