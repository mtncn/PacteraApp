/**
 * Created by vision on 16/3/28.
 */
module.exports = function($scope,$state,newPut4Service){
    $scope.flag;
    $scope.status;
    //从服务器获取到的Tree列表数据
    $scope.userGroupList = {};
    //右侧需要发送到服务器的数据
    $scope.userUp = [];
    //左侧当前选中数据
    $scope.userdata = {};
    //右侧需要删除数据列表位置
    $scope.toDeleteUser = {};
    $scope.selected = null;

    var appId = sessionStorage.appId;

    //默认提示框为隐藏
    $scope.msgBoxShow_saveBu=false;

    //关闭保存错误提示框
    $scope.closeMsgBox_saveBu=function(){
        $scope.msgBoxShow_saveBu=false;
    };
    if($('.step_fabufanwei_til_input').is(':checked')) {
        // do something

        $scope.status = true;
    }else {

        $scope.status = false;
    }
    $scope.check_input = function(){

        if($('.step_fabufanwei_til_input').is(':checked')) {

            $scope.status = true;
        }else{

            $scope.status = false;
        }
    };
    //订阅审批checkbox
    $scope.changecheck=function(us){
        us.status = !us.status;
        var index =  $scope.userUp.indexOf(us);
        $scope.userUp.splice(index, 1, us);
    };

    //tree列表绑定数据
    function treeBind() {
        $('#treeList').treeview({
            expandIcon: 'fa fa-plus-square',//折叠加号图标
            collapseIcon: 'fa fa-minus-square',//展开减号图标
            nodeIcon: "fa fa-users usersGroup",//节点图标
            data: $scope.userGroupList,
            //选中
            onNodeSelected: function (event, data) {
                $scope.userdata = data;
                //console.log($scope.userdata.p);
                if($scope.userdata.p === undefined){
                    $scope.userdata.p = true;
                }
            },
            //取消选中
            onNodeUnselected: function (event, data){
                $scope.userdata = data;
                //console.log($scope.userdata.p);
                if($scope.userdata.p === undefined){
                    $scope.userdata.p = false;
                }
            }
        });
    }
    ////查询右侧文本框已有的数据
    //$scope.selctuserUp = function(){
    //    newPut4Service.selctuserUp().then(function (data){
    //        console.log(data);
    //        if(data.flag == false){
    //
    //        }else{
    //            $scope.userUp = data.pro;
    //        }
    //
    //
    //    },function(){
    //        console.log("newPut4Controller  管理_应用设置_应用上架:发布新应用 第四步(发布范围)");
    //    });
    //};
  // $scope.selctuserUp();
    //添加数组中数据
    $scope.addUser = function(){
        var count = 0;
        //首先判断选中
        if($scope.userdata.p === true){
            for(var i = 0; i< $scope.userUp.length; i++ ){
                if($scope.userdata.text == $scope.userUp[i].text ){
                    count = 1;
                }
            }
            if(count == 0){
                $scope.userdata.status=true;
                $scope.userUp.push($scope.userdata);
                if( $scope.userUp.length != 0){
                    $('.ngSrcjjj').attr('src','images/1111111.png');
                }
            }
            //$scope.userdata.Station_1=false;
            //console.log($scope.userdata);

        }
    };
    //确认右侧需要删除数据所在列表位置
    $scope.deleteUserUp = function(us,index){
        $scope.toDeleteUser = $scope.userUp.indexOf(us);

        $scope.selected = index;
    };
    //删除右侧数组中数据
    $scope.deleteUser = function(){
        //console.log($scope.toDeleteUser);
        if($scope.selected == $scope.toDeleteUser){
            $scope.userUp.splice($scope.toDeleteUser,1);
            if( $scope.userUp.length == 0){
                $('.ngSrcjjj').attr('src','images/1.png');
            }
        }
    };
    //获取左侧tree用户组列表
    function getUserGroup(){
        newPut4Service.getUserGroup().then(function(data){
            $scope.userGroupList=data.userGroupList;
            //绑定tree数据
            treeBind();
        },function(){
            console.log("newPut4Controller  管理_应用设置_应用上架:发布新应用 第四步(发布范围)");
        });
    }


    $scope.Save_No4= function(){

        //console.log($scope.userUp);
        newPut4Service.save_no4($scope.userUp,$scope.status).then(function (data){
            console.log(data);
            $scope.flag = data.station;
            if(data.station == true){
                $scope.msgBoxShow_saveBu=true;
                $scope.testBuResult='保存成功！';
                setTimeout(function(){
                    $state.go('manage.appadded5');
                },800);
            }

        },function(){
            console.log("newPut4Controller  管理_应用设置_应用上架:发布新应用 第四步(发布范围)");
        });
    };

    var Select_No4= function(appId){
        newPut4Service.Select_No4(appId).then(function (data){
            if(data.userGroupList != undefined){
                $scope.userUp = data.userGroupList;
            }

        },function(){
            console.log("newPut4Controller  管理_应用设置_应用上架:发布新应用 第四步(发布范围)");
        });
    };

    //下一步
    $scope.Next= function(){
        //$scope.Select_No4();
        newPut4Service.save_no4($scope.userUp,$scope.status).then(function (data){
            console.log(data);
            $scope.flag = data.station;
            if(data.station == true){
                $scope.msgBoxShow_saveBu=true;
                $scope.testBuResult='保存成功！';
                setTimeout(function(){
                    $state.go('manage.appadded5');
                },800);
            }

        },function(){
            console.log("newPut4Controller  管理_应用设置_应用上架:发布新应用 第四步(发布范围)");
        });

    };

    getUserGroup();
    //数据初始化
    $scope.init=function(){
        if(appId){
            Select_No4(appId);
        }
    };
    $scope.init();
};