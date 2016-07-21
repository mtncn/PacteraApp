/**
 * Created by Sky on 2016/3/15.
 */
module.exports=function($scope,collectionMgService){
    /*//控制我的收藏列表和我的关注列表切换显示
    $scope.collectionListShow=true;*/
    //控制我的收藏菜单样式
    $scope.tabCor0='colRed borderBottom';
  /*  //我的收藏参数
    $scope.tabStatus=0;*/
    //分页当前页参数
    $scope.currentPage=1;
    $scope.searchTitle='';
    //默认获取我的收藏列表数据
    $scope.getList=function(currentPage,appId,orderId,sortId,operation,searchTitle){
        collectionMgService.getData(currentPage,appId,orderId,sortId,operation,searchTitle).then(function(data){
          $scope.collectionList=data.collectionList;
            $scope.totalPage = data.totalPage;
            $scope.nowPage = data.nowPage;
            $scope.totalPas = data.totalPas;
            $scope.currentPage = data.page;
        },function(){
            console.log('collectionMgController 管理_我的应用_我的收藏：收藏列表加载失败！');
        });
    };
    $scope.getList($scope.currentPage,'','','','','');
    //点击改变页码
    $scope.changePage=function(currentPage){
        var searchTitle= $scope.searchTitle;
        if(currentPage <= $scope.totalPage&&currentPage>0 )
        {
            $scope.getList(currentPage,'','','','',searchTitle);
        }
        else
        {
            console.log('collectionMgController 管理_我的应用_我的收藏：收藏列表页码越界！');
        }
    };
 /*   //点击标签切换我的申请列表
    $scope.tabChange=function(tabStatus) {
        $scope.tabStatus = tabStatus;
        if(tabStatus===0)
        {
            $scope.tabCor1='';
            $scope.tabCor0='colRed borderBottom';
            $scope.collectionListShow=true;
            $scope.collectionListShow1=false;
        }
        else if(tabStatus===1)
        {
            $scope.tabCor0='';
            $scope.collectionListShow=false;
            $scope.collectionListShow1=true;
            $scope.tabCor1='colRed borderBottom';
        }
        $scope.getList( $scope.tabStatus,1);
    };*/
    //点击我的收藏操作
    $scope.ChangeOperation=function(appId,orderId,sortId,operation){
        var searchTitle= $scope.searchTitle;
       $scope.getList($scope.currentPage,appId,orderId,sortId,operation,searchTitle);
    }
    //点击搜索按钮事件
    $scope.searchCollection=function(searchTitle){
        $scope.searchTitle=searchTitle;
        //获取我的申请列表
        $scope.getList(1,'','','','',searchTitle);
    };
    /*//点击我的关注操作
    $scope.AttendationOperation=function(appId,orderId,operation){
        $scope.getList($scope.tabStatus,$scope.currentPage,appId,orderId,operation);
    }*/
};