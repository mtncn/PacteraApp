/**
 * Created by vision on 16/2/16.
 */
module.exports = function($scope,$state,BProService){
    //var vm=this;

    $scope.pros={};

    BProService.select($scope.pros,$scope.menus).then(function (data) {
        console.log(data.pro);
        $scope.pros = data.pro;
        $scope.totalPage = data.totalPage;
        $scope.nowPage = data.nowPage;
        $scope.id = data.id;
        $scope.totalPas = data.totalPas;
        $scope.currentPage = data.page;
        $scope.searchName = data.searchName;
        //console.log('Selectsuccess');
    }, function () {
        console.log('Selectfaild  企业应用');
    });

    //订阅动态改变参数
    $scope.changeImg = function(appId,flowId,isApprove,flag){
        //要转换的状态
        BProService.dingyue(appId,flowId,isApprove,flag).then(function (data) {
            var dingYueStatus = data.flag;
            //返回值为true的时候，更新状态成功
            if(dingYueStatus==true){
                if(flag==1){

                    for(var i=0;i<$scope.pros.length;i++){
                        if($scope.pros[i]['appId']==appId ){
                            $scope.pros[i]['station']="订阅中";
                        }
                    }
                }else if(flag==2){

                    for(var i=0;i<$scope.pros.length;i++){
                        if($scope.pros[i]['appId']==appId){
                            $scope.pros[i]['station']="取消中";
                        }
                    }
                }else{

                    for(var i=0;i<$scope.pros.length;i++){
                        if($scope.pros[i]['appId']==appId){
                            $scope.pros[i]['station']="取消中";
                        }
                    }
                }
            }else{
                console.log('状态更新失败！返回值='+data.flag);
            }
        },function(){
            console.log('状态更新失败！');
        });
    };
    //页面跳转到详情页
    $scope.detailsGo = function(id,appId,flowId,sortID){
        console.log(id,appId,flowId);
        $state.go('details.details',{id:id,appId:appId,flowId:flowId,sortID:sortID});
    };
    /**
     * 搜索按钮的功能
     * @param id
     */
    $scope.searchImg = function(){
        var searchName = $('#yyNameId').val();

        BProService.searchNameEvent(searchName).then(function (data) {
            $scope.pros = data.pro;
            $scope.totalPage = data.totalPage;
            $scope.nowPage = data.nowPage;
            $scope.id = data.id;
            $scope.totalPas = data.totalPas;
            $scope.currentPage = data.page;
            $scope.searchName = searchName;
            $('#yyNameId').val(searchName);
        },function(){
            console.log('我的应用查询失败！');
        });
    };




};

