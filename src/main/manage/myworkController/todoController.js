/**
 * Created by Sky on 2016/3/8.
 */
module.exports=function($scope,$stateParams,todoMgService,$rootScope){
    $scope.todoMgs={};
    if($stateParams.todoStatus==null||$stateParams.todoStatus==undefined||$stateParams.todoStatus=='')
    {
        $scope.todoStatus=0;
    }
    else
    {
        $scope.todoStatus=$stateParams.todoStatus;
    }
    if($scope.todoStatus==0)
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
    $scope.todoDetail={};
    $scope.getList=function(todoStatus,currentPage,searchTitle) {
        todoMgService.todo(todoStatus,currentPage,searchTitle).then(function (data) {
            $scope.todoMgs = data.data;
            $scope.totalPage = data.totalPage;
            $scope.nowPage = data.nowPage;
            $scope.totalPas = data.totalPas;
            $scope.currentPage = data.page;
        }, function () {
            console.log('todoController 管理_我的任务_我的待办:我的待办列表加载失败！');
        });
    };
    $scope.getList($scope.todoStatus,$scope.currentPage,$scope.searchTitle);
    //点击改变页码
    $scope.changePage=function(currentPage){
        if(currentPage <= $scope.totalPage&&currentPage>0 )
        {
            $scope.getList( $scope.todoStatus,currentPage,$scope.searchTitle);
        }
        else
        {
            console.log('todoController 管理_我的任务_我的待办:我的待办列表页码越界！');
        }
    };
    //点击搜索按钮事件
    $scope.operationSearch=function(searchTitle){
        $scope.searchTitle=searchTitle;
        var todoStatus=$scope.todoStatus;
       todoMgService.operationSearch(searchTitle,todoStatus).then(function(data){
            $scope.todoMgs=data.data;
            $scope.totalPage = data.totalPage;
            $scope.nowPage = data.nowPage;
            $scope.totalPas = data.totalPas;
            $scope.currentPage = data.page;
        },function(){
            console.log('todoController 管理_我的任务_我的待办:搜索我的待办失败！');
        });
    };


};