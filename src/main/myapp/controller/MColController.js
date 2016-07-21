/**
 * Created by vision on 9/3/16.
 */
module.exports = function($scope,MCollService){
    //接收事件，发送请求
    $scope.$on('to-child', function(e, d) {
        scloo($scope);
    });
    $scope.pros={};
    var scloo=function(){
        MCollService.scloo($scope).then(function (data) {
            $scope.colls = data.pro;
        }, function () {
            console.log('Selectfaild  我的收藏');
        });
    };
    scloo($scope);
    $scope.showImg = function(appId){
        $('#'+appId+"-id").show();
        /* $('#'+appId+"-pid").css("line-height","14px");
         $('#'+appId+"-sid").css("margin-left","0px").css("margin-top","0px");*/
    };

    $scope.hideImg = function(appId){
        $('#'+appId+"-id").hide();
        /*  $('#'+appId+"-pid").css("line-height","39px");
         $('#'+appId+"-sid").css("margin-left","-20px").css("margin-top","-12px");*/
    };
    $scope.showFunc = function(url){
        window.open(url);
    }
}