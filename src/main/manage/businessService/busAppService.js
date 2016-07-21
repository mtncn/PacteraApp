/**
 * Created by vision on 16/3/23.
 */
module.exports = function($http,$q,httpservice,Session){
    var busAppService = {};
    //删除
    busAppService.delete = function(appId){
        var deferred = $q.defer();
        $http({
            method:'POST',
            url:httpservice.selectDelete,
            params:{'sessionId': Session.id,'userId': Session.userId,"appId" : appId,'companyId':Session.companyId}
        }).then(function successCallback(response){
                //console.log(response.data);
                deferred.resolve(response.data);
            },function errorCallback(response){
                console.log("管理_企业应用_企业应用_构建新版本:删除");
                deferred.reject(response.data);
            }
        );
        return deferred.promise;
    };
    //版本信息展现
    busAppService.infoVes = function(appId){
        var deferred = $q.defer();
        $http({
            method:'POST',
            url:httpservice.showKindInfo,
            params:{'sessionId': Session.id,'userId': Session.userId,"appId" : appId,'companyId':Session.companyId}
        }).then(function successCallback(response){
                //console.log(response.data);
                deferred.resolve(response.data);
            },function errorCallback(response){
                console.log("管理_企业应用_企业应用_构建新版本:版本信息");
                deferred.reject(response.data);
            }
        );
        return deferred.promise;
    }
    //证书密码修改
    busAppService.inputTj = function(attr,id){
        var deferred = $q.defer();
        $http({
            method:'POST',
            url:httpservice.upPwdZs,
            params:{'sessionId': Session.id,'userId': Session.userId,'secret':attr,'client_id':id}
        }).then(function successCallback(response){
                //console.log(response.data);
                deferred.resolve(response.data);
            },function errorCallback(response){
                console.log("管理_企业应用_企业应用_构建新版本:证书密码修改");
                deferred.reject(response.data);
            }
        );
        return deferred.promise;
    };
    //证书查询
    busAppService.zhangshu = function(appId){
        var deferred = $q.defer();
        $http({
            method:'GET',
            url:httpservice.selectZsXinxi,
            params:{'sessionId': Session.id,'userId': Session.userId,"appId" : appId}
        }).then(function successCallback(response){
                //console.log(response.data);
                deferred.resolve(response.data);
            },function errorCallback(response){
                console.log("管理_企业应用_企业应用_构建新版本:证书查询");
                deferred.reject(response.data);
            }
        );
        return deferred.promise;
    };
    //查询企业应用
    busAppService.select = function(currentPage,pageSize){

        var deferred = $q.defer();
        $http({
            method:'GET',
            url:httpservice.select_manage_bus,
            params:{
                'sessionId': Session.id,
                'userId': Session.userId,
                'companyId':Session.companyId,
                'page':currentPage,
                'pageSize':pageSize
            }
        }).then(function successCallback(response){
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
            },function errorCallback(response){
                console.log("busAppService  管理_企业应用_企业应用:查询企业应用失败");
                deferred.reject(response.data);
            }
        );
        return deferred.promise;
    };

    //根据应用ID查询详细内容
    busAppService.selectinfo = function(appId){
        var deferred = $q.defer();
        $http({
            method:'GET',
            url:httpservice.select_createNew_manage_bus,
            params:{'sessionId': Session.id,'userId': Session.userId,"appId" : appId}
        }).then(function successCallback(response){
                //console.log(response.data);
                deferred.resolve(response.data);
            },function errorCallback(response){
                console.log("管理_企业应用_企业应用_构建新版本:根据应用ID查询版本详情失败");
                deferred.reject(response.data);
            }
        );
        return deferred.promise;
    };

    //保存新版本
    busAppService.save = function(p){
        var deferred = $q.defer();
        $http({
            method:'POST',
            url:httpservice.save_createNew_manage_bus,
            params:{'personinfo':p,'sessionId': Session.id,'userId': Session.userId}
        }).then(function successCallback(response){
                deferred.resolve(response.data);
            },function errorCallback(response){
                console.log("管理_企业应用_企业应用_构建新版本:构建新版本保存失败");
                deferred.reject(response.data);
            }
        );
        return deferred.promise;
    };
    busAppService.saveConfines = function(userUp,appId){
        var deferred = $q.defer();
        $http({
            method:'POST',
            url:httpservice.manage_appset_putup_no_urlWeb_sele,
            params:{
                'sessionId': Session.id,
                'userId': Session.userId,
                'appId':appId,
                'userUp': JSON.stringify(userUp),
                'companyId':Session.companyId
            }
        }).then(function successCallback(response){
                deferred.resolve(response.data);
            },function errorCallback(response){
                console.log("busAppServcie  管理_企业应用_企业应用_构建新版本:获取左侧Tree ");
                deferred.reject(response.data);
            }
        );
        return deferred.promise;
    };
    busAppService.getUserGroup = function(appId){
        var deferred = $q.defer();
        $http({
            method:'GET',
            url:httpservice.manage_appset_putup_no4_right,
            params:{
                'sessionId': Session.id,
                'userId': Session.userId,
                'appId':appId,
                'companyId':Session.companyId
            }
        }).then(function successCallback(response){
                deferred.resolve(response.data);
            },function errorCallback(response){
                console.log("busAppServcie  管理_企业应用_企业应用_构建新版本:获取左侧Tree ");
                deferred.reject(response.data);
            }
        );
        return deferred.promise;
    };
    busAppService.getConfines = function(appId){
        var deferred = $q.defer();
        $http({
            method:'GET',
            url:httpservice.manage_appset_putup_no4_left,
            params:{
                'sessionId': Session.id,
                'userId': Session.userId,
                'appId':appId,
                'companyId':Session.companyId
            }
        }).then(function successCallback(response){
                deferred.resolve(response.data);
            },function errorCallback(response){
                console.log("busAppServcie  管理_企业应用_企业应用_构建新版本:获取左侧Tree ");
                deferred.reject(response.data);
            }
        );
        return deferred.promise;
    };

    return busAppService;
};