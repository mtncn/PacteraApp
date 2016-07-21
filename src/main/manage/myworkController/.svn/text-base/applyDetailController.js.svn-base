/**
 * Created by Sky on 2016/3/21.
 */
module.exports=function($scope,$stateParams,applyDetailMgService) {
    $scope.applyStatus=$stateParams.applyStatus;
    applyDetailMgService.openDetail().then(function (data) {
        $scope.applyDetail = data;
    }, function () {
        console.log('applyDetailController 管理_我的任务_我的申请:查看申请详情失败！');
    });
};