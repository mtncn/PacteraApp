/**
 * Created by vision on 16/2/14.
 *
 * 我的应用菜单查询
 *
 * @param $stateParams
 * @param $http
 * @param $q
 * @returns {{}}
 */
module.exports = function ($stateParams,$http, $q,httpservice,Session) {
    //var menuid = $stateParams.id;
    //console.log("1   "+$stateParams.id);
    var MProService = {};
    MProService.select=function () {
        var deferred = $q.defer();
        //当前页
        var maxPage = $stateParams.page;

        if(maxPage === ""){
            maxPage = 1;
        }

        //总页数
        var total = $stateParams.total;
        //如果总页数为空，则表示第一次访问
        if(total != null){
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
        //每页显示条数
        var everpage = httpservice.myEverPageNum;
        $http({
            method: 'GET',
            url: httpservice.myproduct,
            //cache:'ture',
            params: {
                'sortId':$stateParams.id,
                'clas':"m",
                'page':maxPage,
                'pageSize':everpage,
                'sessionId':Session.id,
                'companyId':Session.companyId,
                'userId':Session.userId
            }
        }).then(function successCallback(response) {
            // this callback will be called asynchronously
            // when the response is available
            var totalPas = {};
            //获取总页数
            var totalPage = response.data.total;

            for(var i=1;i<=totalPage;i++){
                totalPas[i-1] = i;
            }
            //设置当前页和总页数
            $stateParams.total=totalPage;
            response.data.totalPage = totalPage;
            response.data.nowPage = maxPage+"/"+totalPage;
            response.data.totalPas = totalPas;
            response.data.currentPage = $stateParams.currentPage;
            response.data.id = $stateParams.id;
            response.data.page = maxPage;
            //console.log("aaa="+response.data.totalPage);
            deferred.resolve(response.data);
        }, function errorCallback(response) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
            deferred.reject(response);
        });
        return deferred.promise;
    };

    //收藏和取消收藏
    MProService.collect = function(appId,sortId,flag){
        var deferred = $q.defer();
        var status = "a";
        //对状态status(0,1)更改,0:原来状态为收藏，1：原来状态为未收藏
        if(flag==0){
            status = "d";
        }

        $http({
            method: 'GET',
            //收藏获取取消收藏的状态转换
            url: httpservice.collection,
            //userId：用户id；appId：应用id；status：收藏状态
            params: {'userId':Session.userId,'appId':appId,'status':status,'sessionId':Session.id,'sortId':sortId,'companyId':Session.companyId}
            //params: {'appId':$stateParams.id,'':}
        }).then(function successCallback(response) {

            //console.log('3  '+$stateParams.id);
            deferred.resolve(response.data);
        }, function errorCallback(response) {

            // called asynchronously if an error occurs
            // or server returns response with an error status.
            deferred.reject(response);
        });
        return deferred.promise;
    };

    //添加历史操作
    MProService.insert_History = function(appId){
        var deferred = $q.defer();
        console.log(Session.userId);
        console.log(Session.id);
        console.log(Session.companyId);
        $http({
            method:'POST',
            url:httpservice.myproduct_insert_histery,
            params:{
                'userId':Session.userId,
                'sessionId':Session.id,
                'companyId':Session.companyId,
                'appId':appId
            }
        }).then(function successCallback(response){
                deferred.resolve(response.data);
            },function errorCallback(response){
                console.log("MProService 我的应用  添加操作历史 失败");
                deferred.reject(response.data);
            }
        );
        return deferred.promise;
    };


    return MProService;
};