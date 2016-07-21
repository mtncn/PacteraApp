/**
 * Created by Sky on 2016/3/30.
 */
module.exports=function($rootScope,$scope,$timeout,fileReader,businessInfoMgService) {
    $scope.msgBoxShow_saveBu=false;
    $scope.msgBoxShow_testServer=false;
    $scope.serverSelected={"value":0,"name":"00000"};
    $scope.imageSrc='';
    $scope.clickSave=false;
    $scope.Bu_CompanyName=false;
    $scope.Bu_CompanyPhone=false;

    //调用了fileReader service中的readAsDataUrl方法，此方法中生成了图片的地址url
    $scope.getFile = function () {

        fileReader.readAsDataUrl($scope.file, $scope)
            .then(function(result) {
               $scope.imageSrc = result;
                // 组装表单数据
                var postData = {
                    fileName: $scope.imageSrc
                };
                var fd=new FormData();
                fd.append("logoImg",$scope.imageSrc);
                businessInfoMgService.upLoadImg(fd).then(function(data){
                    angular.element('#personImageId').scope().personImage =  data.image;
                    console.log(data);
                },function(){
                    console.log('businessInfoMgController 管理_企业应用_企业信息：上传logo信息失败！');
                });
            });
    };

    //服务器验证弹出框
    $scope.serverShow=false;
    //企业基本信息
    $scope.businessInfo={
        companyName:"",
        companyAddress:"",
        companyWebSet:"",
        phone:"",
        fax:"",
        serverInfo:'',
        selectId:"",
        imageSrc:''
    };
    //获取企业基本信息
    function getBusinessInfo(businessInfo){
        $scope.businessInfo.imageSrc='';
        businessInfoMgService.getBusinessInfo(businessInfo).then(function(data){
            $scope.businessInfo=data.businessInfo;
            $scope.imageSrc= $scope.businessInfo.imageSrc;
            for(var i=0;i<$scope.businessInfo.serverInfo.length;i++){//遍历下拉菜单选中项
               if( $scope.businessInfo.serverInfo[i].value==$scope.businessInfo.selectId){
                   $scope.serverSelected= $scope.businessInfo.serverInfo[i];
               }
            }
            if( $scope.clickSave==true)
            {

                $scope.msgBoxShow_saveBu=true;
                $timeout(
                    $scope.closeMsgBox_saveBu,
                    3000
                );
                if(data.flag==false){
                    $scope.testBuResult='保存失败！';
                }
                else
                {
                    $scope.testBuResult='保存成功！';
                }
            }

        },function(data){
            $scope.msgBoxShow_saveBu=true;
            $scope.testBuResult='保存失败！';
            console.log('businessInfoMgController 管理_企业应用_企业信息：获取基本信息保存失败！');
        });
    };
    getBusinessInfo('');
    //关闭保存错误提示框
    $scope.closeMsgBox_saveBu=function(){
        $scope.msgBoxShow_saveBu=false;
    };
    //点击保存企业基本信息
    $scope.saveBusinessInfo=function(businessInfo){
        if(businessInfo.companyName==''||businessInfo.companyName==null||businessInfo.companyName==undefined)
        {
            $scope.Bu_CompanyName=true;
        }
        if(businessInfo.phone==''||businessInfo.phone==null||businessInfo.phone==undefined)
        {
            $scope.Bu_CompanyPhone=true;
        }
        $scope.clickSave=true;
        $scope.businessInfo.selectId=$scope.serverSelected.value;
        if((businessInfo.companyName!=''&&businessInfo.companyName!=null&&businessInfo.companyName!=undefined)&&businessInfo.phone!=''&&businessInfo.phone!=null&&businessInfo.phone!=undefined)
        {
            getBusinessInfo(businessInfo);
        }

    };
    //点击配置服务下拉菜单
    $scope.onChange=function(serverSelected){
        $scope.businessInfo.selectId=serverSelected.value;
        $scope.serverShow=true;
        $rootScope.fadeShow=true;
        $scope.serverSelected=serverSelected;
        businessInfoMgService.getServerInfo(serverSelected.value).then(function(data){
            $scope.serverInfos=data.serverInfo;
        },function(){
            console.log('businessInfoMgController 管理_企业应用_企业信息：查询服务器信息失败！');
        });
    };
    //关闭服务配置测试结果提示框
    $scope.closeMsgBox_testServer=function(){
        $scope.msgBoxShow_testServer=false;
    };
    //点击确认服务配置
    $scope.saveServerInfo=function(serverInfo){
        businessInfoMgService.saveServerInfo(serverInfo,$scope.serverSelected.value).then(function(data){
            $scope.serverInfos=data.serverInfo;
            $scope.serverShow=false;
            $rootScope.fadeShow=false;
        },function(){
            console.log('businessInfoMgController 管理_企业应用_企业信息：确认服务器信息失败！');
        });
    };
    //点击测试服务配置
    $scope.testServerInfo=function(serverInfo){
        businessInfoMgService.testServerInfo(serverInfo,$scope.serverSelected.value).then(function(data){
            $scope.msgBoxShow_testServer=true;
            if(data.flag==false){
                $scope.testServerResult='测试失败！';
            }
            else
            {
              $scope.testServerResult='测试成功！';
            }

        },function(){
            $scope.msgBoxShow_testServer=true;
            $scope.testServerResult='测试失败！';
            console.log('businessInfoMgController 管理_企业应用_企业信息：测试服务器信息失败！');
        });
    };
    //点击取消服务器弹出框
    $scope.closeServer=function(){
        $scope.serverShow=false;
        $rootScope.fadeShow=false;
    };

};