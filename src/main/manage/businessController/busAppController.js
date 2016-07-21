/**
 * Created by vision on 16/3/23.
 */
module.exports=function($scope,$state,$rootScope,busAppService){
    //默认构建新应用弹出框为隐藏 ng-show=false
    localStorage.spId = '';
    localStorage.spId_2 = '';
    $scope.showcreat = false;
    $scope.client;
    $scope.password;
    $scope.status;
    //版本信息
    $scope.infoUser={};
    //企业应用
    $scope.buss={};
    //企业应用新版本信息展示
    $scope.appnewinfo={};
    //分页当前页参数
    $scope.currentPage=1;
    //分页每页显示的数量
    $scope.PageSize = 5;
    //默认提示框为隐藏
    $scope.msgBoxShow_saveBu=false;
    //关闭保存错误提示框
    $scope.closeMsgBox_saveBu=function(){
        $scope.msgBoxShow_saveBu=false;
    };
    //关闭构建新应用弹出页
    $scope.closeCreate = function(){
        $scope.showcreat = false;
    };

    //从服务器获取到的Tree列表数据
    $scope.userGroupList = {};
    //右侧需要发送到服务器的数据
    $scope.userUp = [];
    //左侧当前选中数据
    $scope.userdata = {};
    //右侧需要删除数据列表位置
    $scope.toDeleteUser = {};

    //添加数组中数据
    $scope.addUser = function(){
        $scope.userUp.push($scope.userdata);
    };
    //确认右侧需要删除数据所在列表位置
    $scope.deleteUserUp = function(us){
        $scope.toDeleteUser = $scope.userUp.indexOf(us);
    };
    //删除右侧数组中数据
    $scope.deleteUser = function(){
        $scope.userUp.splice($scope.toDeleteUser,1);
    };

    //创建新应用
    $scope.createNew = function(appId,todo){
        if(todo == "构建新版本"){
//          busAppService.selectinfo($scope.appnewinfo,appId).then(function(data){
//              $scope.appnewinfo=data.info;
//
//              //console.log("查询成功");
//          },function(){
//              console.log("busAppController   管理_企业应用_企业应用:构建新应用查询失败");
//          });
//          //构建新应用弹出框为显示 ng-show=true
//          $scope.showcreat = true;
//			console.log('++++++++++++')
            $state.go('manage.businessapp_new',{appId:appId});

        }else if(todo == "继续编辑"){

            $state.go('manage.appadded',{appId:appId,todo:todo});
        }
    };
    //删除
    $scope.delete = function(appId){
        busAppService.delete(appId).then(function(data){
           if(data.flag == true){
               $scope.seletBussinessContent( $scope.currentPage,$scope.PageSize);
           }
        },function(){
            console.log("busAppController  管理_企业应用_企业应用: 删除");
        });
    };
    //改变密码属性
    $scope.doSomeSth = function(){
        if( $('.application_right_manbusapp_button_div_div_input').attr('type') == 'password'){
            $('.application_right_manbusapp_button_div_div_input').attr('type','text');
        }else{
            $('.application_right_manbusapp_button_div_div_input').attr('type','password');
        }
        //stopEventBubble(event);
    }
    //改变密码
    $scope.doPwd = function(){
        $('.application_right_manbusapp_button_div_div_input').focus();
        $('.doPwd').css('display','none');
        $('.doSomeSth').css('display','none');
        $('.doSomeSth_2').css('visibility','visible');
        $('.doPwd_2').css('visibility','visible');
        //stopEventBubble(event);
    };
    //取消修改
    $scope.chadoSomeSth = function(){
        $('.doPwd').css('display','inline-block');
        $('.doSomeSth').css('display','inline-block');
        $('.doPwd_2').css('visibility','hidden');
        $('.doSomeSth_2').css('visibility','hidden');
        $('.application_right_manbusapp_button_div_div_input').attr('type','password');
        //stopEventBubble(event);
    };
    //提交修改的密码
    $scope.tijiaodoPwd = function(id,s_val){
        busAppService.inputTj(s_val,id).then(function(data){
            if(data.flag == true){
                $('.doPwd').css('display','inline-block');
                $('.doSomeSth').css('display','inline-block');
                $('.doPwd_2').css('visibility','hidden');
                $('.doSomeSth_2').css('visibility','hidden');
                $('.application_right_manbusapp_button_div_div_input').attr('type','password');
                $('.tijiaodoPwd_p').css('display','inline-block');
            }
        },function(){
            console.log("busAppController   管理_企业应用_企业应用:密码 修改失败");
        });
        //stopEventBubble(event);
    }
    //文本框修改值
   $scope.s_input = function(event){
       stopEventBubble(event);
   };
    //获取点击的位置
    function getX(e) {
        e = e || window.event;
        return e.pageX || e.clientX + document.body.scroolLeft;
    }

    function getY(e) {
        e = e|| window.event;
        return e.pageY || e.clientY + document.boyd.scrollTop;
    }
    //证书
    $scope.zhangshu = function(appId,e){
        var x = getX(e);
        var y = getY(e);
        $('.application_right_manbusapp_button_div').css('left',x-345+'px');
        $('.application_right_manbusapp_button_div').css('top',y-95+'px');
        $('.tijiaodoPwd_p').css('display','none');
        $('.doPwd').css('display','inline-block');
        $('.doSomeSth').css('display','inline-block');
        $('.doPwd_2').css('visibility','hidden');
        $('.doSomeSth_2').css('visibility','hidden');
        $('.application_right_manbusapp_button_div_div_input').attr('type','password');
        $('#'+appId).toggle();
        if(localStorage.spId){
            if(appId != localStorage.spId){
                $('#'+ localStorage.spId).css('display','none');
            }
        }
        localStorage.spId = appId;
        busAppService.zhangshu(appId).then(function(data){
            console.log(data);
            $scope.client = data.client_id;
            $scope.password = data.secret;
        },function(){
            console.log("busAppController  管理_企业应用_企业应用: 证书查询");
        });
    };
    //阻止事件冒泡
    //阻止事件冒泡
    function stopEventBubble(event){
        var e=event || window.event;

        if (e && e.stopPropagation){
            e.stopPropagation();
        }
        else{
            e.cancelBubble=true;
        }
    }
    //选择发布范围
    $scope.createConfines = function(appId){
        //获取左侧tree用户组列表
        $scope.appId = appId;
        busAppService.getConfines(appId).then(function(data){
            console.log(data);
            $scope.userGroupList=data.userGroupList;
            //绑定tree数据
            $scope.treeBind();
        },function(){
            console.log("busAppController  管理_企业应用_企业应用: 发布范围");
        });
        getUserGroup(appId);
        $scope.showconfines = true;
        $rootScope.fadeShow=true;
    };
    //版本信息
    $scope.infoVes = function(appId){
        $('.'+appId).toggle();
        if(localStorage.spId_2){
            if(appId != localStorage.spId_2){

                $('.'+ localStorage.spId_2).css('display','none');
            }
        }

        localStorage.spId_2 = appId;
        if($('.'+appId).css('display')=='none'){

        }else{
            busAppService.infoVes(appId).then(function(data){
                console.log(data);
                if(data.flag == true){
                    $scope.infoUser =  data.pros;
                    for(var i = 0; i < $scope.infoUser.length; i++){
                        //$scope.infoUser[i].val =
                        if($scope.infoUser[i].status == 2){
                            $scope.infoUser[i].status ='已拒绝';
                        }
                        if($scope.infoUser[i].status == 1){
                            $scope.infoUser[i].status = '审批通过';

                        }
                        if($scope.infoUser[i].status == 0){
                            $scope.infoUser[i].status = '审批中';

                        }
                    }
                    setTimeout(function(){
                        for(var i = 0; i < $scope.infoUser.length; i++){
                            if($scope.infoUser[i].status == '已拒绝'){
                                $('.'+i+'ssss').css('background-color','red');
                            }
                            if($scope.infoUser[i].status =='审批通过'){
                                $('.'+i+'ssss').css('background-color','green');
                            }
                            if($scope.infoUser[i].status =='审批中' ){
                                $('.'+i+'ssss').css('background-color','yellow');
                            }
                        }
                    },300);

                }

            },function(){
                console.log("busAppController  管理_企业应用_企业应用: 版本信息");
            });
        }

    } ;
    //tree列表绑定数据
    $scope.treeBind=function() {
        $('#treeList').treeview({
            expandIcon: 'fa fa-plus-square',//折叠加号图标
            collapseIcon: 'fa fa-minus-square',//展开减号图标
            nodeIcon: "fa fa-users usersGroup",//节点图标
            data: $scope.userGroupList,
            onNodeSelected: function (event, data) {
                //$('#treeService').treeview('unselectNode', [data.nodeId, {silent: true}]);
                //$scope.getUsers(data.href);
                //$scope.userUp=data.href;
                $scope.userdata = data;
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
    };
    //订阅审批checkbox
    $scope.changecheck=function(us,ischeck){
        //if(attr == true){
        //    attr = false;
        //}else{
        //    attr =true;
        //}
        us.ischeck = !ischeck;
        //us.status = !us.status;
        //var index =  $scope.userUp.indexOf(attr);
        //$scope.userUp.splice(index, 1, attr);
       console.log( $scope.userUp);
    };
    //关闭发布范围弹出框
    $scope.closeConfines = function(){
        $scope.showconfines = false;
        $rootScope.fadeShow=false;
        $scope.msgBoxShow_saveBu=false;
    };

    $scope.saveNew = function(appnewinfo){
        busAppService.save(appnewinfo).then(function () {
            $scope.closeCreate();
        },function(){
            console.log("busAppController   管理_企业应用_企业应用:构建新应用失败");
        })
    };
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
                $scope.userdata.ischeck = true;
                console.log($scope.userdata);
                $scope.userUp.push($scope.userdata);
                if($scope.userUp.length != 0){
                    $('.fabufanwei_Img').attr('src','images/1111111.png');
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
        }
        if($scope.userUp.length == 0){
            $('.fabufanwei_Img').attr('src','images/1.png');
        }
    };

    //查询企业应用内容
    $scope.seletBussinessContent = function(page,pageSize){

        busAppService.select(page,pageSize).then(function(data){
            $scope.buss = data.bus;
            $scope.totalPage = data.totalPage;
            $scope.nowPage = data.nowPage;
            $scope.id = data.id;
            $scope.totalPas = data.totalPas;
            $scope.currentPage = data.page;
        },function(){
            console.log("busAppController   管理_企业应用_企业应用:查询企业应用失败");
        });
    }
    $scope.seletBussinessContent( $scope.currentPage,$scope.PageSize);
    //获取右侧tree用户组列表
    function getUserGroup(appId){
        busAppService.getUserGroup(appId).then(function(data){
            if(data.flag == false){
                $scope.userUp = [];
            }else{
                console.log(data);
                $scope.userUp = data.pro;
            }
            if($scope.userUp.length != 0){
                $('.fabufanwei_Img').attr('src','images/1111111.png');
            }
        },function(){
            console.log("newPut4Controller  管理_应用设置_应用上架:发布新应用 第四步(发布范围)");
        });
    };
    $scope.saveConfines = function(){
        console.log($scope.userUp);
        busAppService.saveConfines($scope.userUp,$scope.appId).then(function(data){
                if(data.station == true){
                    $scope.msgBoxShow_saveBu=true;
                    $scope.testBuResult='保存成功！';
                }
        },function(){
            console.log("newPut4Controller  管理_应用设置_应用上架:发布新应用 第四步(发布范围)");
        });
    };
    //分类应用列表点击改变页码
    $scope.changePage=function(currentPage){
        if(currentPage <= $scope.totalPage&&currentPage>0 ){
            $scope.seletBussinessContent(currentPage,$scope.PageSize);
        }
    };

};