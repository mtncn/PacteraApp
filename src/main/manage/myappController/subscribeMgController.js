/**
 * Created by Darren_YCDing on 16/4/8.
 */
module.exports = function($scope,$stateParams,$rootScope,subscribeMgService){
    localStorage.selectType = $stateParams.selectType;
    $scope.fenlei = '开发商';
    if($stateParams.selectType == 0||$stateParams.selectType == undefined){
        $('.twoLi').html('开发商');
    }else{
       $('.twoLi').html('分类');
    }
    $scope.userImportShow=false;
    $scope.userImportShow_2=false;
    $rootScope.fadeShow=false;
    $scope.input_question;
    //默认提示框为隐藏
    $scope.msgBoxShow_saveBu=false;
    $scope.id2 = 0;
    $scope.value;
    $scope.isall = false;
    //传递参数appId,flowId,vers
    $scope.ping_appId;
    $scope.ping_flowId;
    $scope.ping_vers;
    $scope.ping_Id;

    $scope.flag = false;
    //默认星星的等级
    $scope.numXing= 0;
    $scope.xingxinxg = 0;
    //获取应用信息
    $scope.apps = [];
    //分页当前页参数
    $scope.currentPage=1;
    //分页每页显示的数量
    $scope.PageSize = 4;
    $scope.searchTitle='';

    //if($stateParams.selectType==0){
    //    $scope.fenlei = "开发商";
    //}else if($stateParams.selectType==1){
    //    $scope.fenlei = "分类";
    //}

    //按开发商加载
    var selectAppsByCompany = function(page,pageSize,searchTitle){
        //$scope.fenlei = "开发商";
        subscribeMgService.getAppsByCompany(page,pageSize,searchTitle).then(function (data) {
            //$scope.byCompany = data.byCompany;
            console.log(data);
            $scope.apps = data.infos;
            $scope.totalPage = data.totalPage;
            $scope.nowPage = data.nowPage;
            $scope.id = data.id;
            $scope.totalPas = data.totalPas;
            $scope.currentPage = data.page;
        }, function () {
            console.log('subscribeMgController 管理_我的应用_我的订阅:按开发商加载失败！');
        });
    };

    //分类应用列表点击改变页码
    $scope.changePage=function(currentPage){

        if(currentPage <= $scope.totalPage&&currentPage>0 )
        {
            if($scope.fenlei == '开发商'){

               selectAppsByCompany(currentPage,$scope.PageSize,$scope.searchTitle);
            }
            if($scope.fenlei == '分类'){

                selectAppsByClass(currentPage,$scope.PageSize,$scope.searchTitle);
            }

        }
        else
        {
            console.log('classMgController 管理_我的应用_我的分类：我的分类应用列表页码越界！');
        }
    };


    //按分类加载
    var selectAppsByClass = function(page,pageSize,searchTitle){
        //$scope.fenlei = "分类";
        subscribeMgService.getAppsByClass(page,pageSize,searchTitle).then(function (data) {
            //$scope.byClass = data.byClass;
            $scope.apps = data.infos;
            $scope.totalPage = data.totalPage;
            $scope.nowPage = data.nowPage;
            $scope.id = data.id;
            $scope.totalPas = data.totalPas;
            $scope.currentPage = data.page;
        }, function () {
            console.log('subscribeMgController 管理_我的应用_我的订阅:按分类加载失败！');
        });
    };
    //提问题
    $scope.unQuestion = function(appId,flowId){
        $rootScope.fadeShow=true;
        $scope.userImportShow=true;
        $scope.appId = appId;
        $scope.flowId = flowId;
        if(localStorage.selectType==0){//开发商

        }
        else {//分类

        }


    };
    //评价
    $scope.unPingJia = function(appId,flowId,vse){
        $('.importUser_input_pj').val('');
        $scope.ping_appId=appId;
        $scope.ping_flowId=flowId;
        $scope.ping_vers=vse;
        $rootScope.fadeShow=true;
        $scope.userImportShow_2=true;
        subscribeMgService.selectXing(appId,vse).then(function (data){
            $scope.flag = data.flag;
            if($scope.flag == true) {
                $scope.numXing = data.review.rate;
                $scope.xingxing = data.review.rate;
                $scope.id2 = data.review.id;
                $scope.value = data.review.text
                $('.importUser_input_pj').val($scope.value);
            }else{
                $scope.id2 = 0;
            }
            //星星点击的方法
            var stepW = 24;
            var stars = $("#star > li");
            if($scope.flag == true){

                $("#showb").css({"width":stepW*$scope.numXing});
                stars.each(function(i){
                    $(stars[i]).click(function(e){
                        var n = i+1;
                        $scope.xingxing = n;
                        $("#showb").css({"width":stepW*n});
                        //  descriptionTemp = description[i];
                        $(this).find('a').blur();
                        return stopDefault(e);
                        //   return descriptionTemp;
                    });
                });
            }else{

                $("#showb").css("width",0);
                stars.each(function(i){

                    $(stars[i]).click(function(e){
                        var n = i+1;
                        $scope.xingxing = n;
                        $("#showb").css({"width":stepW*n});
                        //  descriptionTemp = description[i];
                        $(this).find('a').blur();
                        return stopDefault(e);
                        //   return descriptionTemp;
                    });
                });
            }

        },function(){
            console.log('subscribeMgController 管理_我的应用_我的订阅:评论失败！');
        });
    };
    //提交评价
    $scope.saveImportUsersPingjia = function(){
        $scope.input_question =  $('.importUser_input_pj').val();
        if($scope.xingxing == 0){
            $scope.msgBoxShow_saveBu=true;
            $scope.testBuResult='请选择星星等级！';
        }
        else if($scope.input_question == null || $scope.input_question == undefined || $scope.input_question == ''){
            $scope.msgBoxShow_saveBu=true;
            $scope.testBuResult='请输入评论内容！';
        }else{
            subscribeMgService.subPj($scope.ping_appId,$scope.ping_flowId,$scope.ping_vers, $scope.input_question, $scope.xingxing,$scope.id2, $scope.isall).then(function (data){
                if(data.flag == true){
                    $scope.msgBoxShow_saveBu=true;
                    $scope.testBuResult='提交成功！';
                }
            },function(){
                console.log('subscribeMgController 管理_我的应用_我的订阅:评论失败！');
            });
        }
    };
    //关闭保存错误提示框
    $scope.closeMsgBox_saveBu=function(){
        $scope.msgBoxShow_saveBu=false;
    };
    //取消订阅
    $scope.unDo = function(appId,flowId){
        subscribeMgService.unDoApp(appId,flowId).then(function (data) {
            if(data.flag==true){
                for(var i=0;i<$scope.apps.length;i++){
                    var m = $scope.apps[i]['appInfos'];
                    for(var j=0;j<m.length;j++){
                        if(m[j]['appId']==appId){
                            m[j]['Station']="取消中";
                        }
                    }
                }
            }
        }, function () {
            console.log('subscribeMgController 管理_我的应用_我的订阅:取消订阅失败！');
        });
    };

    if($stateParams.selectType==0){
        $scope.fenlei = "开发商";

        selectAppsByCompany( $scope.currentPage,$scope.PageSize,$scope.searchTitle);
        //console.log($scope.fenlei);
    }
    else if ($stateParams.selectType==1){
        $scope.fenlei = "分类";

        selectAppsByClass($scope.currentPage,$scope.PageSize,$scope.searchTitle);
        //console.log($scope.fenlei);
    }
    //点击关闭导入用户窗口
    $scope.closeImportUser=function(){
        $scope.userImportShow=false;
        $rootScope.fadeShow=false;
    };
    $scope.closeImportUser_2=function(){
        $scope.userImportShow_2=false;
        $rootScope.fadeShow=false;
        $scope.msgBoxShow_saveBu=false;
    };



    function stopDefault(e){
        if(e && e.preventDefault)
            e.preventDefault();
        else
            window.event.returnValue = false;
        return false;
    };


    //点击提交用户窗口确认
    $scope.saveImportUsers=function() {
        $scope.input_question = $('.importUser_input').val();
        subscribeMgService.saveImportUsers( $scope.input_question,$scope.appId,$scope.flowId).then(function(data){
            $scope.userImportShow=false;
            $rootScope.fadeShow=false;
        },function(){
            console.log('subscribeMgController 我的应用_我的订阅_问题提交（用户）：用户提交失败！');
        });

    };

    //点击搜索按钮事件
    $scope.operationSearch=function(searchTitle){
        if(searchTitle != null|| searchTitle != undefined){
            $scope.searchTitle=searchTitle;
            //获取我的申请列表
           // $scope.getList( 1,4,searchTitle);
            if(localStorage.selectType==0){
                subscribeMgService.getAppsByCompany(1,4,$scope.searchTitle).then(function (data) {
                    //$scope.byCompany = data.byCompany;
                    console.log(data);
                    angular.element('#manage_subscribe_company_scope').scope().apps = data.infos;
                    angular.element('#manage_subscribe_company_scope').scope().totalPage = data.totalPage;
                    angular.element('#manage_subscribe_company_scope').scope().nowPage = data.nowPage;
                    angular.element('#manage_subscribe_company_scope').scope().id = data.id;
                    angular.element('#manage_subscribe_company_scope').scope().totalPas = data.totalPas;
                    angular.element('#manage_subscribe_company_scope').scope().currentPage = data.page;
                }, function () {
                    console.log('subscribeMgController 管理_我的应用_我的订阅:按开发商加载失败！');
                });
            }
            else if (localStorage.selectType==1){
                subscribeMgService.getAppsByClass(1,4,$scope.searchTitle).then(function (data) {
                    //$scope.byClass = data.byClass;
                    angular.element('#manage_subscribe_class_scope').scope().apps = data.infos;
                    angular.element('#manage_subscribe_class_scope').scope().totalPage = data.totalPage;
                    angular.element('#manage_subscribe_class_scope').scope().nowPage = data.nowPage;
                    angular.element('#manage_subscribe_class_scope').scope().id = data.id;
                    angular.element('#manage_subscribe_class_scope').scope().totalPas = data.totalPas;
                    angular.element('#manage_subscribe_class_scope').scope().currentPage = data.page;
                }, function () {
                    console.log('subscribeMgController 管理_我的应用_我的订阅:按分类加载失败！');
                });
                //console.log($scope.fenlei);
            }
        }

    };
    //$scope.operationSearch=function(searchTitle){
    //    //var applyStatus=$scope.applyStatus;
    //    $scope.searchTitle=searchTitle;
    //    //获取我的申请列表
    //    $scope.getList( applyStatus,1,searchTitle);
    //};
    //console.log($scope.fenlei);

};