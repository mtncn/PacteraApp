/**
 * Created by vision on 16/2/16.
 *
 * 企业应用
 *
 * @param $stateParams
 * @param $http
 * @param $q
 * @returns {{}}
 */
module.exports = function ($stateParams,$http, $q,httpservice,Session) {
    //var menuid = $stateParams.id;
    var BProService = {};
    BProService.select=function () {

        var deferred = $q.defer();
        //当前页
        var maxPage = $stateParams.page;
        if(maxPage == ""){
            maxPage = 1;
        }
        //总页数
        var total = $stateParams.total;
        //如果总页数为空，则表示第一次访问
        if(total != null){
            //判断总页数和当前页数大小范围
            if(total <= maxPage){
                maxPage = total;
            }
            if(maxPage<=0){
                maxPage = 1;
            }
        }
        //初次进入的时候，菜单id=null；默认赋值为0；
        var menuid = $stateParams.id;
        if(menuid == undefined || menuid==null || menuid==""){
            menuid = $stateParams.id = 0;
        }

        //搜索功能
        var searchName =  $stateParams.searchName;
        $('#yyNameId').val(searchName);

        //每页显示条数
        var everpage = httpservice.productEverPageNum;
        if($stateParams.sortId == "" || $stateParams.sortId==undefined || $stateParams.sortId==null){
            $stateParams.sortId = 0;
        }
        $http({
            method: 'GET',
            url: httpservice.busproduct,
            params: {
                'clas':"q",
                'page':maxPage,
                'pageSize':everpage,
                'sessionId':Session.id,
                'searchName':searchName,
                'companyId':Session.companyId,
                'userId':Session.userId,
                'sortId':$stateParams.id
            }
        }).then(function successCallback(response) {
            var totalPas = {};
            //获取总页数
            var totalPage = response.data.total;

            for(var i=1;i<=totalPage;i++){
                totalPas[i-1] = i;
            }
            //设置当前页和总页数
            response.data.totalPage = totalPage;
            response.data.nowPage = maxPage+"/"+totalPage;
            response.data.totalPas = totalPas;
            response.data.currentPage = $stateParams.currentPage;
            response.data.id = $stateParams.id;
            response.data.page = maxPage;
            response.data.searchName = $stateParams.searchName;
            deferred.resolve(response.data);
        }, function errorCallback(response) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
            deferred.reject(response);
        });
        return deferred.promise;
    };

    //订阅和取消订阅
    BProService.dingyue = function(appId,flowId,isApprove,flag){
        var deferred = $q.defer();
        var status = 1;
        //对状态status(1,2,3)判断
        if(flag==2 || flag==3){
            status = 2;
        }
        //console.log("apId="+appId+",flowId="+flowId+",userId="+Session.userId);
        $http({
            method: 'GET',
            //订阅获取取消订阅的状态转换
            url: httpservice.subscribe,
            params: {'userId':Session.userId,'appId':appId,'status':status,'sessionId':Session.id,'companyId':Session.companyId,'flowId':flowId,'isApprove':isApprove}
        }).then(function successCallback(response) {
            deferred.resolve(response.data);
        }, function errorCallback(response) {
            deferred.reject(response);
        });
        return deferred.promise;
    };
    //搜索查询事件
    BProService.searchNameEvent = function(searchName){
        var deferred = $q.defer();
        //将查询到的搜索内容存入到路由状态中，以便分页使用
        $stateParams.searchName = searchName;
        $http({
            method: 'GET',
            //搜索查询事件，带分页
            url: httpservice.busproduct_like,
            params: {'userId':Session.userId,'appId':$stateParams.appId,'searchName':searchName,'sessionId':Session.id,'companyId':Session.companyId,'sortId':$stateParams.sortId}

        }).then(function successCallback(response) {
            var currentPage = 1;
            var totalPas = {};
            //获取总页数
            var totalPage = response.data.total;
            for(var i=1;i<=totalPage;i++){
                totalPas[i-1] = i;
            }
            //设置当前页和总页数
            response.data.totalPage = totalPage;
            response.data.nowPage = currentPage+"/"+totalPage;
            response.data.totalPas = totalPas;
            response.data.currentPage = $stateParams.currentPage=currentPage;
            response.data.id = $stateParams.id;
            response.data.page = currentPage;
            deferred.resolve(response.data);
        }, function errorCallback(response) {
            deferred.reject(response);
        });
        return deferred.promise;
    };

    //菜单栏
    BProService.getMenu = function(){
        var deferred = $q.defer();
        $http({
            method:'GET',
            url:httpservice.menu,
            params:{'userId':Session.userId,'sessionId':Session.id,'clas':'q','companyId':Session.companyId}
        }).then(function successCallback(response){
                //console.log(response);
                deferred.resolve(response.data);
            },function errorCallback(response){
                deferred.reject(response.data);
            }
        );
        return deferred.promise;
    };

    //历史查询
    BProService.gettHistory = function(){
        var deferred = $q.defer();
        $http({
            method:'GET',
            url:httpservice.thistoryBussiness,
            params:{'userId':Session.userId,'sessionId':Session.id,'companyId':Session.companyId,'appId':$stateParams.id}
        }).then(function successCallback(response){
                deferred.resolve(response.data);
            },function errorCallback(response){
                deferred.reject(response.data);
            }
        );
        return deferred.promise;
    };


    return BProService;
};
