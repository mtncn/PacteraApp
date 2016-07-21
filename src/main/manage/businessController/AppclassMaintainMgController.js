/**
 * Created by Sky on 2016/3/28.
 */
module.exports=function($rootScope,$scope,$compile,AppclassMaintainMgService) {
    //分类菜单数据
    $scope.classMenuList={};
    //我的分类分类菜单选中样式
    $scope.menuClassSelected='selectBackCor_menu1';
    //分页当前页参数，currentPage是应用列表当前页码，currentPageAdd是添加应用列表当前页码
    $scope.currentPage=1;
    $scope.currentPageAdd=1;
    //应用列表标题，默认显示为“全部”
    $scope.listTitle='全部';
    //分类菜单条目ID，默认0是全部
    $scope.sortId=0;
    //分类菜单点击后当前ID，默认是0
    $scope.currentId=0;
    //控制添加应用是否显示弹出框
    $scope.addAppShow=false;
    //控制添加应用按钮图标是否显示
    $scope.addAppBtnShow=false;
    //添加按钮显示，保存按钮隐藏
    $scope.addShow=true;
    $scope.sortStatus='';
    //控制菜单编辑框显示和隐藏
    $scope.currentId1=0;
    //加载分类菜单列表数据
    $scope.getMenu=function(sortId,orderId,menuName,operation){
        var sortStatus= $scope.sortStatus;
        AppclassMaintainMgService.getMenu(sortId,orderId,menuName,operation,sortStatus).then(function(data){
            $scope.classMenuList=data.menuList;
            $scope.sortStatus=data.sortStatus;
        },function(){
            console.log('AppclassMaintainMgController 管理_企业应用_企业分类：分类维护分类菜单加载失败！');
        });
    };
    //默认查询分类菜单列表数据
    $scope.getMenu('','','','');
    //获取分类应用列表数据
    $scope.getList=function(currentPage,sortId,orderId,appId,operation){
        AppclassMaintainMgService.getData(currentPage,sortId,orderId,appId,operation).then(function(data){
            $scope.classList=data.classList;
            $scope.totalPage = data.totalPage;
            $scope.nowPage = data.nowPage;
            $scope.totalPas = data.totalPas;
            $scope.currentPage = data.page;
        },function(){
            console.log('AppclassMaintainMgController 管理_企业应用_企业分类：分类维护分类应用列表加载失败！');
        });
    };
    //默认获取全部分类的分类应用列表数据
    $scope.getList(1,0,'','','');
    //分类应用列表点击改变页码
    $scope.changePage=function(currentPage){

        if(currentPage <= $scope.totalPage&&currentPage>0 )
        {
            $scope.getList(currentPage,$scope.sortId,'','','');
        }
        else
        {
            console.log('AppclassMaintainMgController 管理_企业应用_企业分类：分类维护分类应用列表页码越界!');
        }
    };
    //点击选中分类菜单条目
    $scope.classMenuChange=function(sortId,menuName)
    {
        //点击新的菜单条目设置之前的编辑状态为不可编辑---如果上一个菜单点击编辑但是没有提交或取消
        //点击新的菜单条目清空之前的编辑值并设为初始值 ---如果上一个菜单点击编辑但是没有提交或取消
        if(sortId!= $scope.currentId)
        {
            $scope.readonly=true;
            var menuList=$scope.classMenuList;
            for(var i=0;i<menuList.length;i++){
                if(menuList[i].sortId==oldMenuSortId)
                {
                    menuList[i].sortName=oldMenuName;
                }
            }
            $scope.classMenuList=menuList;
        }

        $scope.currentPage=1;
        $scope.sortId=sortId;
        //选中”全部“分类菜单
        if(sortId===0)
        {
            //隐藏添加应用按扭
            $scope.addAppBtnShow=false;
            $scope.currentId=0;
            $scope.listTitle='全部';
        }
        else
        {
            $scope.addAppBtnShow=true;
            //清空全部分类菜单选中样式
            $scope.menuClassSelected='';
            //重置当前选中分类菜单Id
            $scope.currentId=sortId;
            //重置当前分类应用的标题--选中分类菜单
            $scope.listTitle=menuName;

        }
        //根据分类菜单的切换初始化应用列表数据
        $scope.getList(1,sortId,'','','');

    };
    //点击应用列表维护上移下移删除操作
    $scope.ChangeOperation=function(appId,orderId,sortId,operation){

        $scope.getList($scope.currentPage,sortId,orderId,appId,operation);

        for(var i=0;i<appIdList.length;i++)
        {
            if(appId===appIdList[i])
            {
                appIdList.splice(i,1)
            }
        }
    }
    //设置新增菜单变量
    var html="<input ng-model='menuItem' class='iptMenu' ng-click='test()'/><img class='removeAddMenu' ng-click='removeMenu()'  src='images/cancel.png'/>";
    var template = angular.element(html);
    var mobileDialogElement = $compile(template)($scope);
    //点击新建菜单
    $scope.addMenu=function(){
        $scope.menuItem='';
        mobileDialogElement = $compile(template)($scope);
        angular.element('#menuUl').append(mobileDialogElement);
        $scope.addShow=false;
        $scope.saveShow=true;

    }
    //点击删除新建菜单
    $scope.removeMenu=function(){
        mobileDialogElement.remove();
        $scope.addShow=true;
        $scope.saveShow=false;

    }
    //点击保存新建菜单
    $scope.saveMenu=function(){
        $scope.getMenu('','',$scope.menuItem,'add');
        mobileDialogElement.remove();
        $scope.menuClassSelected='selectBackCor_menu1';
        $scope.currentId=0;
        $scope.listTitle='全部';
        $scope.getList(1,0,'','','');
        $scope.addShow=true;
        $scope.saveShow=false;
    }
    //点击保存新建菜单
    $scope.updateMenu=function(sortId,orderId){
        var menuList=$scope.classMenuList;
        var newMenuName='';
        for(var i=0;i<menuList.length;i++){
            if(menuList[i].sortId==sortId)
            {
                newMenuName= menuList[i].sortName;
            }
        }
        $scope.readonly=true;
        $scope.getMenu(sortId,orderId,newMenuName,'update');
        oldMenuName=newMenuName;
        oldMenuSortId=sortId;
        $scope.menuClassSelected='selectBackCor_menu1';
        $scope.currentId=0;
        $scope.listTitle='全部';
        $scope.getList(1,0,'','','');
        $scope.addShow=true;
        $scope.saveShow=false;
    }
    //点击删除新建菜单
    $scope.delMenu=function(sortId){
        $scope.getMenu(sortId,'','','delete');
        $scope.menuClassSelected='selectBackCor_menu1';
        $scope.currentId=0;
        $scope.listTitle='全部';
        $scope.getList(1,0,'','','');
        $scope.addShow=true;
        $scope.saveShow=false;
    }
    //点击上移新建菜单
    $scope.upMenu=function(sortId,orderId){
        $scope.getMenu(sortId,orderId,'','up');
        $scope.menuClassSelected='selectBackCor_menu1';
        $scope.currentId=0;
        $scope.listTitle='全部';
        $scope.getList(1,0,'','','');
        $scope.addShow=true;
        $scope.saveShow=false;
    }
    //点击下移新建菜单
    $scope.downMenu=function(sortId,orderId){
        $scope.getMenu(sortId,orderId,'','down');
        $scope.menuClassSelected='selectBackCor_menu1';
        $scope.currentId=0;
        $scope.listTitle='全部';
        $scope.getList(1,0,'','','');
        $scope.addShow=true;
        $scope.saveShow=false;
    }
    //记录编辑菜单提交前的选中菜单ID和Name值
    var oldMenuName='';
    var oldMenuSortId='';
    //点击编辑菜单
    $scope.editMenu=function(sortId,currentName){
        oldMenuName=currentName;
        oldMenuSortId=sortId;
        $scope.currentId1=sortId;
        $scope.readonly=false;
    }
    //点击取消更新菜单
    $scope.cancelMenu=function(){
        var menuList=$scope.classMenuList;
        for(var i=0;i<menuList.length;i++){
            if(menuList[i].sortId==oldMenuSortId)
            {
                menuList[i].sortName=oldMenuName;
            }
        }
        $scope.classMenuList=menuList;
        $scope.readonly=true;
    }
    //获取分类维护添加应用列表数据
    $scope.getAppList_nonSort=function(currentPage,searchTitle){
        AppclassMaintainMgService.getAppList_nonSort(currentPage,searchTitle).then(function(data){
            $scope.appList=data.appList;
            $scope.totalPageAdd = data.totalPage;
            $scope.nowPageAdd = data.nowPage;
            $scope.totalPasAdd = data.totalPas;
            $scope.currentPageAdd = data.page;
        });
    }
    //点击分类维护添加应用的分页
    $scope.changePageAdd=function(currentPageAdd){
        if(currentPageAdd <= $scope.totalPageAdd&&currentPageAdd>0 )
        {
            $scope.getAppList_nonSort(currentPageAdd,$scope.searchTitle);
        }
        else
        {
            console.log('AppclassMaintainMgController 管理_企业应用_企业分类：分类维护添加分类应用列表页码越界！');
        }
    };
    //点击加号图标添加应用
    $scope.addApp=function(sortId){
        $rootScope.fadeShow=true;
        $scope.addAppShow=true;
        $scope.getAppList_nonSort($scope.currentPageAdd,'');
    }
    //数组去重
    $scope.arrUnique=function unique(arr) {
        var result = [], hash = {};
        for (var i = 0, elem; (elem = arr[i]) != null; i++) {
            if (!hash[elem]) {
                result.push(elem);
                hash[elem] = true;
            }
        }
        return result;
    }
    //定义存储添加应用列表中选中值
    var appIdList=[];
    //添加应用弹出框点击选中一条分类应用
    $scope.checkApp=function(chk,appId){

        if(chk===false){
            for(var i=0;i<appIdList.length;i++)
            {
                if(appId===appIdList[i])
                {
                    appIdList.splice(i,1)
                }
            }
        }
        if(chk===true)
        {
            appIdList.push(appId);
        }
        var newArrApp=$scope.arrUnique([appIdList]);
    }
    //点击添加应用弹出框中点击确认
    $scope.addAppSave=function() {
        var sortId = $scope.sortId;
        AppclassMaintainMgService.addApp(appIdList, sortId).then(function (data) {
            if(data.flag == true){
                $scope.getList(1,sortId,'','','');
            }
        });
        $scope.addAppShow=false;
        $rootScope.fadeShow=false;
    }
    //添加应用弹出框中点击关闭
    $scope.closeAddAppWindow=function(){
        $scope.addAppShow=false;
        $rootScope.fadeShow=false;
    }
    //搜索添加应用列表
    $scope.searchAddApp=function(){
        var searchTitle=$scope.searchTitle;
        getAppList_nonSort(1,searchTitle);
    }
}