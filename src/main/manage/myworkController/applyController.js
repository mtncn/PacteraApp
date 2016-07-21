/**
 * Created by Sky on 2016/3/8.
 */
module.exports=function($scope,$stateParams,applyMgService){
    $scope.applyMgs={};
    if($stateParams.applyStatus==null||$stateParams.applyStatus==undefined||$stateParams.applyStatus=='')
    {
        $scope.applyStatus=0;
    }
    else
    {
        $scope.applyStatus=$stateParams.applyStatus;
    }
    if($scope.applyStatus==0)
    {
        $scope.border_color_red='selectColor_manage borderBottom';
        $scope.border_color_red1='';
    }
    else
    {
        $scope.border_color_red='';
        $scope.border_color_red1='selectColor_manage borderBottom';
    }
    $scope.currentPage=1;
    $scope.searchTitle='';
    if( $scope.applyStatus==0)
    {
        $scope.selectDisableCor='';
        $scope.selectStatus=false;
        $scope.statusList=[{'value':'0','name':'审批状态'},{'value':'1','name':'处理中'},{'value':'2','name':'已拒绝'},{'value':'3','name':'已完成'}];
        $scope.corShow1="colRed borderBottom";
    }
    else if( $scope.applyStatus==1)
    {
        $scope.selectDisableCor='selectDisableCor';
        $scope.selectStatus=true;
        $scope.statusList=[{'value':'1','name':'审批状态'}];
        $scope.corShow2="colRed borderBottom";
    }

    //获取我的申请列表数据
    $scope.getList=function(applyStatus,currentPage,searchTitle){
        applyMgService.apply(applyStatus,currentPage,searchTitle).then(function(data){
            console.log(data);
            $scope.applyMgs=data.data;
            $scope.totalPage = data.totalPage;
            $scope.nowPage = data.nowPage;
            $scope.id = data.id;
            $scope.totalPas = data.totalPas;
            $scope.currentPage = data.page;
        },function(){
            console.log('applyController 管理_我的任务_我的申请:我的申请列表加载失败！');
        });
    };
    //初始化该页面调用全部数据
    $scope.getList($scope.applyStatus,$scope.currentPage,$scope.searchTitle);
    //点击改变页码
    $scope.changePage=function(currentPage){
        if(currentPage <= $scope.totalPage&&currentPage>0 )
        {
            $scope.getList($scope.applyStatus,currentPage,$scope.searchTitle);
        }
        else
        {
            console.log('applyController 管理_我的任务_我的申请:我的申请列表页码越界');
        }
    };
   /* //点击取消按钮事件
    $scope.operationCancel=function(flowId,taskId){
        applyMgService.operationCancel(flowId,taskId).then(function(data){
            $scope.applyMgs=data.data;
            $scope.totalPage = data.totalPage;
            $scope.nowPage = data.nowPage;
            $scope.totalPas = data.totalPas;
            $scope.currentPage = data.page;
        },function(){
            console.log('applyController 管理_我的任务_我的申请:取消我的申请失败！');
        });
    };*/
    //点击搜索按钮事件
    $scope.operationSearch=function(searchTitle){
        var applyStatus=$scope.applyStatus;
        $scope.searchTitle=searchTitle;
        //获取我的申请列表
        $scope.getList( applyStatus,1,searchTitle);
    };
    //点击列表状态下拉菜单
    $scope.onChange=function(applyStatus){
        $scope.applyStatus=applyStatus;
        $scope.getList( applyStatus,1,$scope.searchTitle);
    };

};