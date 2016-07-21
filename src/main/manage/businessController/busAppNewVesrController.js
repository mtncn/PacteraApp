/**
 * Created by vision on 16/5/18.
 */
module.exports=function($scope,$state,fileReader,$stateParams,MangbusNewVesrAppService){
    $scope.sLength;
    $scope.num = 0;
    $scope.lWidth = -210;
    $scope.msgBoxShow_saveBu=false;
    $scope.personImage;
    $scope.showImages = [];
    $scope.showupimages = "showupimages_show";
	$scope.newVer = {
        Name:"",
        Language:"",
        Vesr:"",
        Kind:"",
        MiaoShu:"",
        Href:"",
        Xieyi:"",
        PersonImage:"",
        showImages:""
    }
    $scope.introduction;
    $scope.newGongneng;

    //语言
    $scope.languages = [
        {key:'1',language:'中文'},
        {key:'2',language:'英语'},
        {key:'3',language:'法语'},
        {key:'4',language:'俄语'}
    ];
    //类别
    $scope.type = [];
    //接收appId
    $scope.appId = $stateParams.appId;
    //授权协议
    $scope.xieyi = [
        {key:'1',xieyi:'OAuth2.0 Server-side'}
    ];
    /*
    * 查询方法
    * */
    $scope.seletData = function(){
        MangbusNewVesrAppService.seleData($scope.appId).then(function sucessCallback(data){
            console.log(data.pro);
            $scope.newVer = data.pro;
            $scope.type = data.pro.types;
            $scope.personImage = data.pro.PersonImage;
            $scope.showImages = data.pro.showImages;
            $scope.introduction = data.pro.textArea;
            $scope.newGongneng = data.pro.textArea_2;
            $scope.sLength = $scope.showImages.length;
            if( $scope.showImages.length>4){
                $('.jjj_L_img_2').fadeIn(100);
                $('.jjj_R_img_2').fadeIn(100);
            }
            if($scope.showImages.length>=6){
                $scope.showupimages = "showupimages_hidden";
            }
        },function errorCallback(){

        });
    };

    //控制按钮显示，隐藏


    //图片的滑动方法
    $scope.jjj_L_img = function(){
        if($scope.num>0){
            $scope.num = $scope.num -1;
            $('.vers_ul_div_images').animate({left:  $scope.num*$scope.lWidth+'px'});
            $('.vers_ul_div_images li').eq($scope.num).css('visibility','visible');
            $scope.sLength =  $scope.sLength+1;
        }
    };
    $scope.jjj_R_img = function(){
        if($scope.sLength>4){
               $('.vers_ul_div_images li').eq($scope.num).css('visibility','hidden');
                $scope.num = $scope.num+1;
                $('.vers_ul_div_images').animate({left:$scope.num*$scope.lWidth+'px'});
                $scope.sLength =  $scope.sLength - 1;
        }
    };
    /*

     * 修改方法
     * */
    $scope.save = function(){
        $scope.newVer.showImages =  $scope.showImages;
        var textArea =  $scope.introduction;
        var textArea_2 = $scope.newGongneng;
        /*
        * 文本框验证
        * */
        if($scope.newVer.Name == ''|| $scope.newVer.Name == null || $scope.newVer.Name == undefined){
            $scope.msgBoxShow_saveBu=true;
            $scope.testBuResult='应用名称不能为空！';
        } else if($scope.newVer.Vesr == ''|| $scope.newVer.Vesr == null || $scope.newVer.Vesr == undefined){
            $scope.msgBoxShow_saveBu=true;
            $scope.testBuResult='版本号不能为空！';
        } else if($scope.newVer.Href == ''|| $scope.newVer.Href == null || $scope.newVer.Href == undefined){
            $scope.msgBoxShow_saveBu=true;
            $scope.testBuResult='URL地址不能为空！';
        } else{
            console.log($scope.newVer);
            MangbusNewVesrAppService.savenew($scope.newVer, $scope.appId,textArea,textArea_2).then(function sucessCallback(data){
                if(data.station == true){
                    $scope.msgBoxShow_saveBu=true;
                    $scope.testBuResult='保存成功！';
                    console.log(data.pro);
                    $scope.newVer = data.pro;
                }else {
                    $scope.msgBoxShow_saveBu=true;
                    $scope.testBuResult='保存失败！';
                }

            },function errorCallback(){

            });
        }
    };
    $scope.seletData();
    //关闭保存错误提示框
    $scope.closeMsgBox_saveBu=function(){
        $scope.msgBoxShow_saveBu=false;
    };

    //调用了fileReader service中的readAsDataUrl方法，此方法中生成了图片的地址url
    $scope.personImages = function () {
        //console.log($scope.file);
        fileReader.readAsDataUrl($scope.file, $scope)
            .then(function(result) {
                $scope.newVer.PersonImage = result;
                $scope.personImage = result;

            });
    };

    //上传简介图片
    $scope.upShowImages = function(){
        var that=this;
        fileReader.readAsDataUrl($scope.file, $scope)
            .then(function(result) {

                $scope.showImages.push(result);
                if( $scope.showImages.length>4){
                    $('.jjj_L_img_2').fadeIn(100);
                    $('.jjj_R_img_2').fadeIn(100);
                }
                $scope.sLength =   $scope.showImages.length;
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
        if( $scope.showImages.length<=4){
            $('.jjj_L_img_2').fadeOut(100);
            $('.jjj_R_img_2').fadeOut(100);
        }
        $scope.sLength =   $scope.showImages.length;
        //$scope.showImages.splice($index,1);
        //如果图片少于6张,显示上传框
        if($scope.showImages.length<6){
            $scope.showupimages = "showupimages_show";
        }

    };
}