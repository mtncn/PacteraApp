/**
 * Created by Sky on 2016/3/21.
 */
module.exports=function($scope,$state,todoDetailMgService) {
    $scope.comment='';
    todoDetailMgService.openDetail($scope.todoStatus).then(function (data) {
        $scope.todoEdit = data;
    },function () {
        console.log('todoDetailController 管理_我的任务_我的待办:查看我的待办详情加载失败！');
    });
    //同意或拒绝待办
    $scope.operation=function(operation){
        var comment=$scope.comment;
        todoDetailMgService.operation(operation,comment).then(function(data){
            console.log(data);
            $scope.todoMgs=data.data;
            if(data == true){
                $state.go('manage.todo',{todoStatus:0});
            }
        },function(){
            console.log('todoDetailController 管理_我的任务_我的待办:审批我的待办加载失败！');
        });

    };
};