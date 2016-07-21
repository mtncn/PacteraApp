/**
 * Created by vision on 16/3/25.
 */
module.exports = function($scope,$state,$stateParams,newPutService,Appsession){
    $scope.putup={};
    $scope.num;
    $scope.status;
    $scope.s_appId;
    $scope.station = $stateParams.Status;
    console.log($stateParams.todo);
    console.log($stateParams.BiaoShi);
    //默认提示框为隐藏
    $scope.msgBoxShow_saveBu=false;

    var appId;
    if($stateParams.todo == '继续编辑' && $stateParams.BiaoShi =='应用上架'){
        sessionStorage.appId = '';
    }
    else if($stateParams.todo == '继续编辑' && $stateParams.BiaoShi =='' ){
        $('.vers_frist_input').attr('readonly','readonly');
        sessionStorage.appId = $stateParams.appId;
    }else if($stateParams.BiaoShi == '应用上架' && $stateParams.todo ==''){
        sessionStorage.appId = '';
    }else{
        sessionStorage.appId =  sessionStorage.appId;

    }
    $scope.s_appId = sessionStorage.appId;



    //语言
    $scope.languages = [
        {key:'1',language:'中文'},
        {key:'2',language:'英语'},
        {key:'3',language:'法语'},
        {key:'4',language:'俄语'}
    ];

    //类别
    //$scope.types = [
    //    {key:'1',type:'音乐'},
    //    {key:'2',type:'视频'},
    //    {key:'3',type:'娱乐'},
    //    {key:'4',type:'运动'}
    //];
    $scope.types = [];
    var mm = [];

    //保存
    $scope.Save_No1= function(putup){
        newPutService.save_no1(putup,$scope.s_appId).then(function (data){
            $scope.status = data.station;
            if($scope.status == true){
                sessionStorage.appId = data.appId;
                $scope.msgBoxShow_saveBu=true;
                $scope.testBuResult='保存成功！';
            }
        },function(){
            console.log("newPutController  保存 管理_应用设置_应用上架:发布新应用 第一步(基本信息)");
        });
    };

    //关闭保存错误提示框
    $scope.closeMsgBox_saveBu=function(){
        $scope.msgBoxShow_saveBu=false;
    };

    //查询
    var Select_No1= function(){
        //console.log(appId);
        //console.log("1111 "+appId);
        newPutService.Select_No1( $scope.s_appId).then(function (data){
            //$scope.putup=data.putup;
            if(data.putup != undefined){
                $scope.types = data.putup.types;
                $scope.putup.Language = data.putup.Language;
                $scope.putup.Type = data.putup.Type;
                $scope.putup.AppName = data.putup.AppName;
                $scope.putup.Version = data.putup.Version;
                $scope.putup.Describe = data.putup.Describe;

                //console.log(data.putup.Type);
            }
            //console.log($scope.putup);
        },function(){
            console.log("newPutController  查询 管理_应用设置_应用上架:发布新应用 第一步(基本信息)");
        });
    };

    //下一步
    $scope.Next= function(putup){
        $scope.testBuResult='努力加载中...';
        newPutService.save_no1(putup,$scope.s_appId).then(function (data){
            $scope.status = data.station;
            if($scope.status == true){
                sessionStorage.appId = data.appId;
                $scope.msgBoxShow_saveBu=true;
                $scope.testBuResult='保存成功！';
                setTimeout(function(){
                    $state.go('manage.appadded2');
                },800)
            }
        },function(){
            console.log("newPutController  保存 管理_应用设置_应用上架:发布新应用 第一步(基本信息)");
        });
    };

    //数据初始化
    $scope.init=function(){
        Select_No1(appId);
    };
    $scope.init();

};