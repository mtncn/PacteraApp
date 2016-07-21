/**
 * Created by Sky on 2016/3/30.
 */
module.exports=function($stateParams, $http, $q, httpservice, Session) {
    var businessInfoUserMgService = {};
    //获取下拉框用户组数据
    businessInfoUserMgService.getUserGroup_select=function(){
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
    //获取tree用户组数据
    businessInfoUserMgService.getUserGroup=function(){
        var deferred = $q.defer();
        $http({
            method: 'GET',
            url: httpservice.userGroupManage,
            params: {
                'sessionId': Session.id,
                'userId': Session.userId,
                'companyId':Session.companyId,
                'userGroup':'user'
            }
        }).then(function successCallback(response) {
            deferred.resolve(response.data);
        }, function errorCallback(response) {
            deferred.reject(response.data);
        });
        return deferred.promise;
    };
    //查询用户列表
    businessInfoUserMgService.getUsers=function(groupId,searchTitle,currentPage){
        var deferred = $q.defer();
        $http({
            method: 'GET',
            url: httpservice.userManage,
            params: {
                'sessionId': Session.id,
                'userId': Session.userId,
                'companyId':Session.companyId,
                'groupId':groupId,
                'currentPage':currentPage,
                'pageSize':6,
                'searchTitle':searchTitle
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
    //查询用户列表
    businessInfoUserMgService.saveUsers=function(user){
        var deferred = $q.defer();
        $http({
            method: 'GET',
            url: httpservice.userSaveManage,
            params: {
                'sessionId': Session.id,
                'userId': Session.userId,
                'companyId':Session.companyId,
                'user':user
            }
        }).then(function successCallback(response) {
            deferred.resolve(response.data);
        }, function errorCallback(response) {
            deferred.reject(response.data);
        });
        return deferred.promise;
    };
    //上移，下移，删除用户后获取用户列表
    businessInfoUserMgService.userOperation=function(userId,groupId,searchTitle,operation,currentPage){
        var deferred = $q.defer();
        $http({
            method: 'GET',
            url: httpservice.userOprManage,
            params: {
                'sessionId': Session.id,
                'userId': Session.userId,
                'companyId':Session.companyId,
                'groupId':groupId,
                'userId_mg':userId,
                'searchTitle':searchTitle,
                'operation':operation,
                'currentPage':currentPage,
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
    //删除用户
    businessInfoUserMgService.deleteUsers=function(userIdList,currentPage){
        var deferred = $q.defer();
        $http({
            method: 'GET',
            url: httpservice.userDelManage,
            params: {
                'sessionId': Session.id,
                'userId': Session.userId,
                'companyId':Session.companyId,
                'userId_mg':userIdList,
                'currentPage':currentPage,
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
    //点击导入查询数据
    businessInfoUserMgService.getListDaoRuData = function(attr,sta){
        var deferred = $q.defer();
        $http({
            method: 'GET',
            url: httpservice.selectUserDaoRuSave,
            params: {
                'sessionId': Session.id,
                'userId': Session.userId,
                'companyId':Session.companyId,
                'page':attr,
                'pageSize':sta
            }
        }).then(function successCallback(response) {
            //当前页
            var maxPage = attr;
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
    //点击查询导入用户
    businessInfoUserMgService.importUserSearch=function(importUserTitle,importUserGroupID,currentPageImport){
        var deferred = $q.defer();
        $http({
            method: 'GET',
            url: httpservice.selectUserDaoRu,
            params: {
                'sessionId': Session.id,
                'userId': Session.userId,
                'companyId':Session.companyId,
                'importUserTitle':importUserTitle,
                'importUserGroup':importUserGroupID,
                'page':currentPageImport,
                'pageSize':5
            }
        }).then(function successCallback(response) {
            //当前页
            var maxPage = currentPageImport;
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
    //点击保存导入用户
    businessInfoUserMgService.saveImportUsers=function(choseArrImport,groupId){
        console.log(choseArrImport);
        var deferred = $q.defer();
        $http({
            method: 'POST',
            url: httpservice.selectUserDaoRuSave,
            params: {
                'sessionId': Session.id,
                'userId': Session.userId,
                'companyId':Session.companyId,
                'userList':choseArrImport,
                'groupId':groupId
            }
        }).then(function successCallback(response) {
            //当前页
            //var maxPage = currentPage;
            //if(maxPage === ""){
            //    maxPage = 1;
            //}
            ////总页数
            //var total = response.data.total;
            //var startPage = response.data.startPage;
            //var endPage = response.data.endPage;
            //if(total <= maxPage){
            //    maxPage = total;
            //}
            //if(maxPage<=0){
            //    maxPage = 1;
            //}
            //var totalPas = {};
            //
            //for(var i=startPage;i<=endPage;i++){
            //    totalPas[i-1] = i;
            //}
            ////设置当前页和总页数
            //response.data.totalPage =total;
            //response.data.nowPage = maxPage+"/"+total;
            //response.data.totalPas = totalPas;
            //response.data.page = maxPage;
            deferred.resolve(response.data);
        }, function errorCallback(response) {
            deferred.reject(response.data);
        });
        return deferred.promise;
    };
    return businessInfoUserMgService;
};