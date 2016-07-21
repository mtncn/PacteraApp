/**
 * Created by Sky on 2016/3/30.
 */
module.exports=function($rootScope,$scope,businessInfoUserMgService) {
    $scope.in_grouoId = 0;//存储grouoId
    //默认新建和编辑用户弹出框，用户组弹出框，导入弹出框均为隐藏
    $scope.pros;
    $scope.pro= [];
    $scope.page = 1;
    $scope.pageSize = 5;
    $scope.userShow=false;
    $scope.userGroupShow=false;
    $scope.userImportShow=false;
    $scope.editUserPhone1=false;
    $scope.editUserName1=false;
    $scope.editUserEmail1=false;
    $scope.searchTitle_user='';
    $scope.user={
        "userId":'',
        "userName": '',
        "userPhone": '',
        "userEmail": '',
        "groupId":'',
        "orderId":''
    };
    $scope.userGroupList={};
    $scope.groupId='all';
    $scope.currentPage=1;
    $scope.currentPageImport=1;
    var oldUser=null;
    var oldUserList=null;
    var oldIndex=0;
    $scope.oprFlag='create';
    $scope.msgBoxShow_oprUser=false;
    $scope.editUserName=false;
    $scope.editUserPhone=false;
    $scope.editUserEmail=false;
    $scope.choseArrImport;
    $scope.chkAllImport=false;
    //获取用户组下拉框列表数据
    businessInfoUserMgService.getUserGroup_select().then(function(data){
        $scope.userGroupList_select=data.userGroupList;
    },function(){
        console.log('businessInfoUserController 管理_企业应用_企业信息（用户）：用户组下拉菜单加载失败！');
    });
    //获取左侧tree用户组列表
  function getUserGroup(){
    businessInfoUserMgService.getUserGroup().then(function(data){
        $scope.userGroupList=data.userGroupList;
       //绑定tree数据
        $scope.treeBind();
    },function(){
        console.log('businessInfoUserController 管理_企业应用_企业信息（用户）：用户组菜单加载失败！');
    });
    };
    getUserGroup();
    //关闭删除错误提示框
    $scope.closeMsgBox_oprUser=function(){
        $scope.msgBoxShow_oprUser=false;
    };
    //tree列表绑定数据
    $scope.treeBind=function() {
        $('#treeUserGroup').treeview({
            expandIcon: 'fa fa-plus-square',
            collapseIcon: 'fa fa-minus-square',
            nodeIcon: "fa fa-users usersGroup",
            data: $scope.userGroupList,
           onNodeSelected: function (event, data) {
               $scope.chkAll=false;
               getUsers(data.groupId,$scope.searchTitle_user,1);
               $scope.groupId=data.groupId;
             }
        });
    };

    //定义存储添加用户
    var str="";//
    $scope.choseArr=[];//定义数组用于存放前端显示
    var flag='';//是否点击了全选，是为a
    $scope.chk=false;//默认未选中

    //选中全部用户
    $scope.checkUserAll= function (checkAll,user) {//全选
        if(checkAll==true){
            $scope.chk=true;
            var arrUser=new Array();
            for(var i=0;i<user.length;i++)
            {
                arrUser.push(user[i].userId);
            }
            $scope.choseArr=arrUser;
        }else{
            $scope.chk=false;
            $scope.choseArr=[];
        }
        flag='a';
    };
    //选中用户
    $scope.checkUser= function (chk,userId) {//单选或者多选
        if(flag=='a') {//在全选的基础上操作
            str = $scope.choseArr.join(',') + ',';
        }
        if (chk == true) {//选中
            str = str + userId + ',';
        } else {
            str = str.replace(userId + ',', '');//取消选中
        }
        $scope.choseArr=(str.substr(0,str.length-1)).split(',');
    };
    //定义存储添加用户
    var strImport="";//
    $scope.userImportIdList=[];//定义数组用于存放前端显示
    var flagImport='';//是否点击了全选，是为a
    $scope.chkImport=false;//默认未选中
    //选中全部导入用户
    $scope.checkUserImportAll= function (checkAllImport,users) {//全选
        for(var i = 0; i< users.length; i++ ){
            var user = users[i];
            var index =  $scope.pros.indexOf(user);
            user.ischeck=checkAllImport;
            $scope.pros.splice(index, 1, user);
        }
    };
    //选中导入用户
    $scope.checkUserImport= function (user) {//单选或者多选
        var index =  $scope.pros.indexOf(user);
        user.ischeck=!user.ischeck;
        $scope.pros.splice(index, 1, user);
    };
    //点击导入用户窗口确认
    $scope.saveImportUsers=function(){
        var count = 0;//临时变量，存储数组下标
        for(var i = 0; i<$scope.pros.length; i++ ){
            if($scope.pros[i].ischeck == true){
               $scope.pro[count++] = $scope.pros[i];
            }
        }
        //var choseArrImport= $scope.choseArrImport;
        if($scope.in_grouoId == 0){
        }else{
            businessInfoUserMgService.saveImportUsers($scope.pro,$scope.in_grouoId).then(function(data){
                if(data.flag == true){
                    $scope.userImportShow=false;
                    $rootScope.fadeShow=false;
                    $('#treeUserGroup ul li').css('background-color','#ffffff');
                    $('#treeUserGroup ul li').css('color','#000000');
                    getUsers($scope.in_grouoId,'',1);//导入成功，加载默认列表数据
                }
            },function(){
                console.log('businessInfoUserController 管理_企业应用_企业信息（用户）：导入用户失败！');
            });
        }

    };
    //搜索框
    $scope.sousuo =  function(val){
        if(val!=null&&val!=undefined&&val!=''){
            $scope.importUserSearch(val,'',1);
        }
    };
    //删除用户请求方法
    function deleteUsers(userId,currentPage){
        businessInfoUserMgService.deleteUsers(userId,currentPage).then(function(data){
        $scope.userList=data.userList;
        $scope.totalPage = data.totalPage;
        $scope.nowPage = data.nowPage;
        $scope.totalPas = data.totalPas;
        $scope.currentPage = data.page;
            $scope.chkAll=false;
            $scope.msgBoxShow_oprUser=true;
            if(data.flag==false){
                $scope.oprErrMsg='删除失败！';
            }
            else
            {
                $scope.oprErrMsg='删除成功！';
            }
    },function(){
            $scope.msgBoxShow_oprUser=true;
            $scope.oprErrMsg='删除失败！';
        console.log('businessInfoUserController 管理_企业应用_企业信息（用户）：用户删除失败！');
    });
    }
    //点击每条数据删除用户
    $scope.userDel=function(userId,operation){
        $scope.searchTitle_user='';
        deleteUsers(userId,1);
        $scope.chkAll=false;
    };
    //点击批量删除
    $scope.deleteAll= function () {// 操作CURD
        $scope.msgBoxShow_oprUser=false;
        var groupId=$scope.groupId;
       $scope.searchTitle='';
        if($scope.choseArr[0]==""||$scope.choseArr.length==0){//没有选择一个的时候提示
            $scope.msgBoxShow_oprUser=true;
           $scope.oprErrMsg='请至少选择一条数据进行删除！';
            return;
        };
        var userIdList=$scope.choseArr.join(',');
        deleteUsers(userIdList,1);
        $scope.chkAll=false;
    };
    //获取groupId
    $scope.onChange = function(importUserGroup){
        $scope.in_grouoId = importUserGroup;
    }
    //获取所有用户
   function  getUsers(groupId,searchTitle,currentPage){
        businessInfoUserMgService.getUsers(groupId,searchTitle,currentPage).then(function(data){
            $scope.userList=data.userList;
            $scope.totalPage = data.totalPage;
            $scope.nowPage = data.nowPage;
            $scope.totalPas = data.totalPas;
            $scope.currentPage = data.page;
        },function(){
            console.log('businessInfoUserController 管理_企业应用_企业信息（用户）：获取用户数据失败！');
        });
    };
   //默认获取所有用户
    getUsers('all','',1);
    //点击改变页码
    $scope.changePage=function(currentPage){
        var groupId=$scope.groupId;
        var searchTitle=$scope.searchTitle_user;
        if(currentPage <= $scope.totalPage&&currentPage>0)
        {
            getUsers(groupId,searchTitle,currentPage);
        }
        else
        {
            console.log('businessInfoUserController 管理_我的任务_我的申请:我的申请列表页码越界');
        }
    };
    //点击新建用户
    $scope.addUser=function(){
        $scope.editUserPhone1=false;
        $scope.editUserEmail1=false;
        $scope.editUserName1=false;
        $scope.oprFlag='create';
        $rootScope.fadeShow=true;
        $scope.userShow=true;
        $scope.user={
            "userId":'',
            "userName": '',
            "userPhone": '',
            "userEmail": '',
            "groupId":'',
            "orderId":''
        }
        $scope.userGroupSelected=-1;
    };
    //点击导入用户
    $scope.importUser=function(){
        $rootScope.fadeShow=true;
        $scope.userImportShow=true;
        $scope.importUserSearch('','',$scope.page);
    };
    //$scope.getListDaoRuData = function(s,attr,sta){
    //    businessInfoUserMgService.getListDaoRuData(s,attr,sta).then(function(data){
    //        $scope.pros = data.pro;
    //        console.log($scope.pros);
    //        $scope.totalPageImport = data.totalPage;
    //        $scope.nowPageImport = data.nowPage;
    //        $scope.totalPasImport = data.totalPas;
    //        $scope.currentPageImport = data.page;
    //    },function(){
    //        console.log('businessInfoUserController 管理_企业应用_企业信息（用户）：导入用户查询失败！');
    //    });
    //};
    //点击关闭导入用户窗口
    $scope.closeImportUser=function(){
        $scope.userImportShow=false;
        $rootScope.fadeShow=false;

    };
    //导入用户搜索条件
    $scope.importUserTitle='';
    $scope.importUserGroup='';
    //点击导入用户搜索
    $scope.importUserSearch=function(importUserTitle,importUserGroup,currentPageImport){

        businessInfoUserMgService.importUserSearch(importUserTitle,importUserGroup,currentPageImport).then(function(data){
            $scope.pros=data.pro;
            console.log(data.pro);
            $scope.totalPageImport = data.totalPage;
            $scope.nowPageImport = data.nowPage;
            $scope.totalPasImport = data.totalPas;
            $scope.currentPageImport = data.page;
        },function(){
            console.log('businessInfoUserController 管理_企业应用_企业信息（用户）：导入用户查询失败！');
        });
    };
    //点击改变页码
    $scope.changePageImport=function(currentPageImport){
        if(currentPageImport <= $scope.totalPageImport&&currentPageImport>0 )
        {
            $scope.importUserSearch($scope.importUserTitle,$scope.importUserGroup,currentPageImport);
        }
        else
        {
            console.log('businessInfoUserController 管理_企业应用_企业信息（用户）:用户导入列表页码越界');
        }
    };

    //禁用，启用，移除用户
    $scope.userOperation=function(userId,groupId,operation){
        if(operation=='remove')
        {
            $scope.searchTitle_user='';
        }
        var searchTitle=$scope.searchTitle_user;
        businessInfoUserMgService.userOperation(userId,groupId,searchTitle,operation,1).then(function(data){
            $scope.userList=data.userList;
            $scope.totalPage = data.totalPage;
            $scope.nowPage = data.nowPage;
            $scope.totalPas = data.totalPas;
            $scope.currentPage = data.page;
            $scope.msgBoxShow_oprUser=true;
            if(operation=='remove'){
                if(data.flag==true)
                {
                    $scope.oprErrMsg='移除成功！';
                }
                else
                {
                    $scope.oprErrMsg='移除失败！';
                }
            }
            else  if(operation=='Y'){
                if(data.flag==true)
                {
                    $scope.oprErrMsg='启用成功！';
                }
                else
                {
                    $scope.oprErrMsg='启用失败！';
                }
            }
            else  if(operation=='N'){
                if(data.flag==true)
                {
                    $scope.oprErrMsg='禁用成功！';
                }
                else
                {
                    $scope.oprErrMsg='禁用失败！';
                }
            }

        },function(){
            if(operation=='remove'){
                $scope.msgBoxShow_oprUser=true;
                    $scope.oprErrMsg='移除失败！';
                console.log('businessInfoUserController 管理_企业应用_企业信息（用户）：用户移除失败！');
            }
            else  if(operation=='Y'){
                    $scope.oprErrMsg='启用失败！';
                console.log('businessInfoUserController 管理_企业应用_企业信息（用户）：用户启用失败！');
            }
            else  if(operation=='N'){
                    $scope.oprErrMsg='禁用失败！';
                console.log('businessInfoUserController 管理_企业应用_企业信息（用户）：用户禁用失败！');
            }

        });
    };
    //批量从用户组中移除用户
    $scope.removeAll=function(){
        var userIdList=$scope.choseArr.join(',');
        $scope.userOperation( userIdList,$scope.groupId,'remove');
        $scope.chkAll=false;
    }
    //点击关闭新建或编辑用户窗口
    $scope.closeUser=function(user){
        $rootScope.fadeShow=false;
        $scope.userShow=false;
        if(user.userId!=null&&user.userId!=''&&user.userId!=undefined)
        {
            $scope.user=oldUser;
            $scope.userList=oldUserList;
        }
        oldUser=null;
    };
    //点击编辑用户
    $scope.editUser=function(index,user){
        $scope.oprFlag='edit';
        $scope.userShow=true;
        $rootScope.fadeShow=true;
        if(oldUser==null||
            oldIndex!=index)
        {
            oldUser=angular.copy(user);
            oldUserList=angular.copy($scope.userList);
            oldIndex=index;
            $scope.user=user;
        }

    };
    $scope.firstchange_userPhone1 = function(){
            $scope.editUserPhone1=true;
    };
    $scope.firstchange_userName1 = function(){
        $scope.editUserName1=true;
    };
    $scope.firstchange_userEmail1 = function(){
        $scope.editUserEmail1=true;
    };
    $scope.firstchange_userName = function(){

        //console.log($scope.user);
        if($scope.user.userName != null){
            $scope.editUserName=false;
        }
    };
    $scope.firstchange_userPhone = function(){
        //console.log($scope.user);
        if($scope.user.userPhone != null){
            $scope.editUserPhone=false;
        }
    };
    $scope.firstchange_userEmail = function(){
        //console.log($scope.user);
        if($scope.user.userEmail != null){
            $scope.editUserEmail=false;
        }
    };

    //点击确认新建或编辑用户窗口
    $scope.saveUser=function(user){
        if(user.userName==''||user.userName==null||user.userName==undefined)
        {
            $scope.editUserName1=true;
            $scope.editUserName=true;
        }
        if(user.userEmail==''||user.userEmail==null||user.userEmail==undefined)
        {
            $scope.editUserEmail1=true;
            $scope.editUserEmail=true;
        }
        if(user.userPhone==''||user.userPhone==null||user.userPhone==undefined)
        {
            $scope.editUserPhone1=true;
            $scope.editUserPhone=true;
        }
        if((user.userName!=''&&user.userName!=null&&user.userName!=undefined)&&(user.userEmail!=''&&user.userEmail!=null&&user.userEmail!=undefined)&&(user.userPhone!=''&&user.userPhone!=null&&user.userPhone!=undefined))
        {
            businessInfoUserMgService.saveUsers(user,$scope.searchTitle_user,1).then(function(data){
                $scope.msgBoxShow_oprUser=true;
                if( $scope.oprFlag=='edit')
                {
                    if(data.flag===true)
                    {
                        /* oldUser=null;
                         oldIndex=0;
                         oldUser=angular.copy($scope.user);
                         oldUserList=angular.copy($scope.userList);*/
                        getUsers($scope.groupId,$scope.searchTitle,1);
                        $scope.user =angular.copy(oldUser);
                        $scope.userList=angular.copy(oldUserList);
                        $scope.oprErrMsg='修改成功！';
                    }
                    else
                    {
                        $scope.user=angular.copy(oldUser);
                        $scope.userList=angular.copy(oldUserList);
                        $scope.oprErrMsg='修改失败！';
                    }
                }
                else
                {
                    if(data.flag===true)
                    {
                        getUsers($scope.groupId,$scope.searchTitle,1);
                        $scope.user =angular.copy(oldUser);
                        $scope.userList=angular.copy(oldUserList);
                        $scope.oprErrMsg='保存成功！';
                    }
                    else
                    {
                        $scope.user={};
                        $scope.oprErrMsg='保存失败！';
                    }
                }
            },function(){
                $scope.msgBoxShow_oprUser=true;
                if( $scope.oprFlag=='edit')
                {
                    $scope.oprErrMsg='修改失败！';
                    console.log('businessInfoUserMgController 管理_企业应用_企业信息（用户组）：编辑用户失败！');
                }
                else
                {
                    $scope.oprErrMsg='添加失败！';
                    console.log('businessInfoUserMgController 管理_企业应用_企业信息（用户组）：新建用户失败！');
                }

            });
            $rootScope.fadeShow=false;
            $scope.userShow=false;
        }


    };
    //点击搜素用户
    $scope.searchUser=function(searchTitle){
       getUsers($scope.groupId,searchTitle,$scope.currentPage);
    };
};