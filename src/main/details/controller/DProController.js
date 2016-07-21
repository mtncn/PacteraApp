/**
 * Created by vision on 16/2/13.
 */
module.exports= function($scope,$stateParams,DProService,BProService){

    $scope.pros={};
    $scope.attention = {};
    DProService.select($scope.pros,$scope.menu).then(function (data) {
        $scope.pros = data.pro;
        console.log('+++++++++++'+data);
        console.log(data.pro.language);
        $scope.language = data.pro.language;
        console.log($scope.language);
        if( $scope.language == '1'){
            $scope.language = '中文';
        }else if($scope.language == '2'){
            $scope.language = '英语';
        }else if($scope.language == '3'){
            $scope.language = '法语';
        }else{
            $scope.language = '俄语';
        }
        localStorage.VSER =  data.pro.version;//存储版本号
        localStorage.rovio = data.pro.developers;//存储开发商名字
        localStorage.kindApp = data.pro.fatherclass; //存储应用类别
        localStorage.sortIdDetails = data.pro.sortId;//存储sortId
        if( $scope.pros.attention == '订阅中'|| $scope.pros.attention == '取消中'){
            $('.up_dingyue button.upd').css('background','#cccccc');
        }
    }, function () {
        console.log('Selectfaild 产品详情');
    });

    //分享功能---复制链接
    $scope.copyText = function() {
        $('a[rel]').zclip({path:'/PacteraApp/framework/js/ZeroClipboard.swf', copy: function () { return $(this.getAttribute('rel')).html(); } });
    };

    $scope.DingYue = function(appId,flowId,isApprove){
        //要转换的状态
        console.log($scope.pros.attention);
        if($scope.pros.attention == '可订阅' || $scope.pros.attention == '取消订阅'){
            if($scope.pros.attention == '可订阅'){
                $scope.status = 1;
                DProService.dingyue(appId,flowId,isApprove,$scope.status).then(function (data) {
                    var dingYueStatus = data.flag;
                    //返回值为true的时候，更新状态成功
                    if(dingYueStatus==true){
                       $scope.pros.attention = '订阅中';
                       $('.up_dingyue button.upd').css('background','#cccccc');
                    }else{
                       console.log('状态更新失败！返回值='+data);
                    }
                },function(){
                    console.log('状态更新失败！');
                });
            }else{
                $scope.status = 2;
                DProService.dingyue(appId,flowId,isApprove,$scope.status).then(function (data) {
                    var dingYueStatus = data.flag;
                    //返回值为true的时候，更新状态成功
                    if(dingYueStatus==true){
                        $scope.pros.attention = '取消中';
                        $('.up_dingyue button.upd').css('background','#cccccc');
                    }else{
                        console.log('状态更新失败！返回值='+data);
                    }
                },function(){
                    console.log('状态更新失败！');
                });
            }

        }
    };

    ///*
    //* 订阅查寻功能，
    //* */
    //$scope.dingYue = function(appId,flowId){
    //  //  console.log("++++++++"+appId+"++++++++"+flowId);
    //    DProService.seleData(appId,flowId).then(function sucessCallback(data){
    //        console.log(data);
    //        $scope.attention
    //        //$scope.newVer = data;
    //    },function errorCallback(){
    //
    //    });
    //};
   // $scope.dingYue($stateParams.appId,$stateParams.flowId,flag);//页面加载，执行查寻方法
};

