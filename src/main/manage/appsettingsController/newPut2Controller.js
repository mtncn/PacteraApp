/**
 * Created by vision on 16/3/28.
 */
module.exports = function($scope,$state,newPut2Service,fileReader){
    $scope.sLength;
    $scope.num = 0;
    $scope.lWidth = -126;
    $scope.introduction;
    $scope.newGongneng;
    //发送到服务器端的数据
    $scope.putup2={};
    //Logo图标
    $scope.logoImage;
    //应用简介图片
    //var images =[];
    $scope.showImages = [];
    //是否显示上传框(应用简介图片)
    $scope.showupimages = "showupimages_show";

    var appId = sessionStorage.appId;

    // 组装表单数据
    var postData;
    //默认提示框为隐藏
    $scope.msgBoxShow_saveBu=false;

    //上传Logo图片
    //调用了fileReader service中的readAsDataUrl方法，此方法中生成了图片的地址url
    $scope.upLogoImage = function(){
        fileReader.readAsDataUrl($scope.file, $scope)
            .then(function(result) {
                $scope.logoImage = result;
            });
    };

    //上传简介图片
    $scope.upShowImages = function(){
        var that=this;
        fileReader.readAsDataUrl($scope.file, $scope)
            .then(function(result) {

                $scope.showImages.push(result);
                $scope.sLength = $scope.showImages.length;
                if( $scope.showImages.length>5){
                    $('.jjj_L_img_3').fadeIn(100);
                    $('.jjj_R_img_3').fadeIn(100);
                }
                //如果图片超过6张,隐藏上传框
                if($scope.showImages.length>=6){
                    $scope.showupimages = "showupimages_hidden";
                }
            });
    };

    //移除简介图片数组中指定图片
    $scope.delectimage = function($index,image){
        //console.log($index);
        //console.log(image);
        $scope.showImages.splice($scope.showImages.indexOf(image),1);
        $scope.sLength = $scope.showImages.length;
        if( $scope.showImages.length<=5){
            $('.jjj_L_img_3').fadeOut(100);
            $('.jjj_R_img_3').fadeOut(100);
        }
        //$scope.showImages.splice($index,1);
        //如果图片少于6张,显示上传框
        if($scope.showImages.length<6){
            $scope.showupimages = "showupimages_show";
        }

    };

    //调用了fileReader service中的readAsDataUrl方法，此方法中生成了图片的地址url
    $scope.getFile = function () {
        //console.log($scope.file);
        fileReader.readAsDataUrl($scope.file, $scope)
            .then(function(result) {
                $scope.logoImage = result;
            });
    };

    //发送请求的数据封装
    function postMultipart() {
        //通过FormData保存需要发送的数据
        var fd = new FormData();
        fd.append("logoImage",$scope.logoImage);
        angular.forEach($scope.showImages, function(val, key) {
            fd.append(key, val);
        });

        return fd;
    }
    //关闭保存错误提示框
    $scope.closeMsgBox_saveBu=function(){
        $scope.msgBoxShow_saveBu=false;
    };
    //保存应用详情内容到服务器端数据库
    $scope.Save_No2 = function(){
        //console.log(putup3);
       // var taxtArea_1 =  $scope.introduction;
     //   var taxtArea_2 = $scope.newGongneng;

        postData = postMultipart();
        console.log(postData);
        newPut2Service.save_no2(postData,$scope.introduction,$scope.newGongneng).then(function (data){
            if(data.station == true){
                $scope.msgBoxShow_saveBu=true;
                $scope.testBuResult='保存成功！';
            }

        },function(){
            console.log("newPut2Controller  管理_应用设置_应用上架:发布新应用 第二步(应用详情)");
        });
    };
    //图片的滑动方法
    $scope.jjj_L_img = function(){
        if($scope.num>0){
            $scope.num = $scope.num -1;
            $('.conRight_img_bottom_div').animate({left:  $scope.num*$scope.lWidth+'px'});
            $('.conRight_img_bottom_div li').eq($scope.num).css('visibility','visible');
            $scope.sLength =  $scope.sLength+1;
        }
    };
    $scope.jjj_R_img = function(){
        if($scope.sLength>5){
            $('.conRight_img_bottom_div li').eq($scope.num).css('visibility','hidden');
            $scope.num = $scope.num+1;
            $('.conRight_img_bottom_div').animate({left:$scope.num*$scope.lWidth+'px'});
            $scope.sLength =  $scope.sLength - 1;
        }
    };
    //查询
    $scope.Select_No2 = function(appId){
        newPut2Service.Select_No2(appId).then(function (data){
            console.log(data);
            $scope.putup2 = data.putup2;

            if(data.showImages == undefined || data.showImages == null){

                $scope.showImages = [];
            }else{

                $scope.showImages = data.showImages;
                $scope.sLength = $scope.showImages.length;
                //如果图片超过6张,隐藏上传框
                if( $scope.showImages.length>5){
                    $('.jjj_L_img_3').fadeIn(100);
                    $('.jjj_R_img_3').fadeIn(100);
                }
                if($scope.showImages.length>=6){
                    $scope.showupimages = "showupimages_hidden";
                }
            }
            $scope.introduction = data.textArea;
            $scope.newGongneng = data.textArea_2;
            $scope.logoImage = data.logoImage;
        },function(){
            console.log("newPut2Controller  管理_应用设置_应用上架:发布新应用 第二步(应用详情)");
        });
    };

    //下一步
    $scope.Next= function(){
        //$scope.Select_No2();
        postData = postMultipart();
        console.log(postData);
        newPut2Service.save_no2(postData,$scope.introduction,$scope.newGongneng).then(function (data){
            if(data.station == true){
                $scope.msgBoxShow_saveBu=true;
                $scope.testBuResult='保存成功！';
                setTimeout(function(){
                    $state.go('manage.appadded3');
                },800)
            }

        },function(){
            console.log("newPut2Controller  管理_应用设置_应用上架:发布新应用 第二步(应用详情)");
        });

    };

    //数据初始化
    $scope.init=function(){
        if(appId){
            $scope.Select_No2(appId);
        }
    };
    $scope.init();
};