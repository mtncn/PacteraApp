/**
 * Created by vision on 16/3/28.
 */
module.exports = function($scope,$state,newPut3Service){
    $scope.putup3={
        lice:"1"
    };
    var appId = sessionStorage.appId;

    //默认提示框为隐藏
    $scope.msgBoxShow_saveBu=false;


    //授权协议
    $scope.Licenses = [
        {key:'1',Lice:'OAuth2.0 Server-side'}
    ];
    $scope.Save_No3= function(){
        var filter  = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;//验证邮箱的正则
        var email = $('.conRight_sex_select_4').val();
        if(filter.test(email)){
            $('.reEmail').css('display','none');
            newPut3Service.save_no3($scope.putup3).then(function (data){
                if(data.station == true){
                    $scope.msgBoxShow_saveBu=true;
                    $scope.testBuResult='保存成功！';
                }

            },function(){
                console.log("newPut3Controller  管理_应用设置_应用上架:发布新应用 第三步(发布应用)");
            });
        }else{
            $('.reEmail').css('display','inline-block');
        }

    };

    $scope.Select_No3 = function(appId){
        newPut3Service.Select_No3(appId).then(function (data){
            console.log(data);
            if(data.putup3 != undefined){
                $scope.putup3 = data.putup3;
            }
        },function(){
            console.log("newPut3Controller  管理_应用设置_应用上架:发布新应用 第三步(发布应用)");
        });
    };

    //关闭保存错误提示框
    $scope.closeMsgBox_saveBu=function(){
        $scope.msgBoxShow_saveBu=false;
    };

    //下一步
    $scope.Next= function(){
        var filter  = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;//验证邮箱的正则
        var email = $('.conRight_sex_select_4').val();
        //$scope.Select_No3(putup3);
        if(filter.test(email)){
            newPut3Service.save_no3($scope.putup3).then(function (data){
                if(data.station == true){
                    $scope.msgBoxShow_saveBu=true;
                    $scope.testBuResult='保存成功！';
                    setTimeout(function(){
                        $state.go('manage.appadded4');
                    },800);
                }

            },function(){
                console.log("newPut3Controller  管理_应用设置_应用上架:发布新应用 第三步(发布应用)");
            });
        }else{
            $('.reEmail').css('display','inline-block');
        }


    };
    //数据初始化
    $scope.init=function(){
        if(appId){
            $scope.Select_No3(appId);
        }
    };
   $scope.init();
};