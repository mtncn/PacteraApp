/**
 * Created by Darren_YCDing on 16/4/8.
 */
module.exports = function($http, $q, httpservice, Session){
    var subscribeMgService = {};
    //按开发商加载
    subscribeMgService.getAppsByCompany = function (currentPage,pageSize,searchTitle) {
        var deferred = $q.defer();
        $http({
            method: 'GET',
            url: httpservice.subscribe_Manage_Company,
            params: {
                'sessionId': Session.id,
                'userId': Session.userId,
                'companyId':Session.companyId,
                'page':currentPage,
                'pageSize':pageSize,
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
            console.log("subscribeMgService  管理_我的应用_我的订阅:按开发商加载失败！");
            deferred.reject(response.data);
        });
        return deferred.promise;
    };
    //评价
    subscribeMgService.subPj = function(appId,flowId,s1,s2,ves,id,isall){

        var deferred = $q.defer();
        $http({
            method: 'POST',
            url: httpservice.selectDataImgBussinessPingLun,
            params: {
                'sessionId': Session.id,
                'userId': Session.userId,
                'companyId':Session.companyId,
                'appId':appId,
                'flowId':flowId,
                'rate':ves,
                'version':s1,
                'text':s2,
                'id':id,
                'isall':isall
            }
        }).then(function successCallback(response) {
            deferred.resolve(response.data);
        }, function errorCallback(response) {
            console.log("subscribeMgController 我的应用_我的订阅_问题提交（用户）：用户提交失败！");
            deferred.reject(response.data);
        });
        return deferred.promise;
    }
    //查询方法（评价）
    subscribeMgService.selectXing = function(sId,vse){
        var deferred = $q.defer();
        $http({
            method: 'GET',
            url: httpservice.selectDataImgBussinessXiangqing,
            params: {'userId':Session.userId,'companyId':Session.companyId,'appId':sId,'version':vse,'isall':false}
        }).then(function successCallback(response) {
            // this callback will be called asynchronously
            // when the response is available
            // console.log('3  '+$stateParams.id);
            deferred.resolve(response.data);
        }, function errorCallback(response) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
            deferred.reject(response);
        });

        return deferred.promise;
    };
    //提交问题
    subscribeMgService.saveImportUsers = function(input_question,appId,flowId){
        var deferred = $q.defer();
        $http({
            method: 'POST',
            url: httpservice.subscribe_Manage_unDo,
            params: {
                'sessionId': Session.id,
                'userId': Session.userId,
                'companyId':Session.companyId,
                'appId':appId,
                'flowId':flowId,
                'question':input_question
            }
        }).then(function successCallback(response) {
            deferred.resolve(response.data);
        }, function errorCallback(response) {
            console.log("subscribeMgController 我的应用_我的订阅_问题提交（用户）：用户提交失败！");
            deferred.reject(response.data);
        });
        return deferred.promise;
    }
    //按分类加载
    subscribeMgService.getAppsByClass = function (currentPage,pageSize,searchTitle) {
        var deferred = $q.defer();
        $http({
            method: 'GET',
            url: httpservice.subscribe_Manage_Class,
            params: {
                'sessionId': Session.id,
                'userId': Session.userId,
                'companyId':Session.companyId,
                'page':currentPage,
                'pageSize':pageSize,
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
            console.log("subscribeMgService  管理_我的应用_我的订阅:按分类加载失败！");
            deferred.reject(response.data);
        });
        return deferred.promise;
    };

    //取消订阅
    subscribeMgService.unDoApp = function (appId,flowId) {
        var deferred = $q.defer();
        $http({
            method: 'POST',
            url: httpservice.subscribe_Manage_unDo,
            params: {
                'sessionId': Session.id,
                'userId': Session.userId,
                'companyId':Session.companyId,
                'appId':appId,
                'flowId':flowId
            }
        }).then(function successCallback(response) {
            deferred.resolve(response.data);
        }, function errorCallback(response) {
            console.log("subscribeMgService  管理_我的应用_我的订阅:取消订阅失败！");
            deferred.reject(response.data);
        });
        return deferred.promise;
    };

    return subscribeMgService;
};