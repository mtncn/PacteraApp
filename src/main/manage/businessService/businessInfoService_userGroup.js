/**
 * Created by Sky on 2016/4/5.
 */
module.exports=function($stateParams, $http, $q, httpservice, Session) {
    var businessInfoUserGroupMgService = {};
    //获取tree用户组数据
    businessInfoUserGroupMgService.getUserGroupTree=function(){
        var deferred = $q.defer();
        $http({
            method: 'GET',
            url: httpservice.userGroupManage,
            params: {
                'sessionId': Session.id,
                'userId': Session.userId,
                'companyId':Session.companyId,
                'userGroup':'userGroup'
            }
        }).then(function successCallback(response) {
            deferred.resolve(response.data);
        }, function errorCallback(response) {
            deferred.reject(response.data);
        });
        return deferred.promise;
    };

    //获取下拉框用户组数据
    businessInfoUserGroupMgService.getUserGroup_select=function(){
        var deferred = $q.defer();
        $http({
            method: 'GET',
            url: httpservice.userGroupSelectManage,
            params: {
                'sessionId': Session.id,
                'userId': Session.userId,
                'companyId':Session.companyId
            }
        }).then(function successCallback(response) {
            deferred.resolve(response.data);
        }, function errorCallback(response) {
            deferred.reject(response.data);
        });
        return deferred.promise;
    };
    //获取列表用户组数据
    businessInfoUserGroupMgService.getUserGroupList=function(GroupId,searchTitle,currentPage){
        var deferred = $q.defer();
        $http({
            method: 'GET',
            url: httpservice.userGroupListManage,
            params: {
                'sessionId': Session.id,
                'userId': Session.userId,
                'companyId':Session.companyId,
                'groupId':GroupId,
                'searchTitle':searchTitle,
                'page':currentPage,
                'pageSize':6
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
    //上移，下移，删除后获取用户组列表数据
    businessInfoUserGroupMgService.userGroupOperation=function(groupId,orderId,searchTitle,operation,currentPage){
        var deferred = $q.defer();
        $http({
            method: 'GET',
            url: httpservice.userGroupListOprManage,
            params: {
                'sessionId': Session.id,
                'userId': Session.userId,
                'companyId':Session.companyId,
                'groupId':groupId,
                'orderId':orderId,
                'searchTitle':searchTitle,
                'operation':operation,
                'page':currentPage,
                'pageSize':10
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
    //编辑保存用户组列表数据
    businessInfoUserGroupMgService.saveUserGroup=function(userGroup){
        var deferred = $q.defer();
        $http({
            method: 'GET',
            url: httpservice.userGroupListSaveManage,
            params: {
                'sessionId': Session.id,
                'userId': Session.userId,
                'companyId':Session.companyId,
                'userGroup':userGroup
            }
        }).then(function successCallback(response) {
            deferred.resolve(response.data);
        }, function errorCallback(response) {
            deferred.reject(response.data);
        });
        return deferred.promise;
    };
    return businessInfoUserGroupMgService;
};