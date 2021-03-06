/**
 * Created by Sky on 2016/3/22.
 */
module.exports=function($rootScope,$scope,$compile,classMgService){
    //分类菜单数据
    $scope.classMenuList={};
    //控制我的分类和分类维护tab点击样式
    $scope.tabCor0='classCor classBackCor';
    $scope.tabCor1='classSpan';
    //我的分类分类菜单选中样式
    $scope.menuClassSelected='selectBackCor_menu';
    //我的分类和分类维护tab切换参数，默认0是我的分类,1是分类维护
    $scope.tabStatus=0;
    //分页当前页参数，currentPage是应用列表当前页码，currentPageAdd是添加应用列表当前页码
    $scope.currentPage=1;
    $scope.currentPageAdd=1;
    //应用列表标题，默认显示为“全部”
    $scope.listTitle='全部';
    //分类菜单条目ID，默认0是全部
    $scope.menuSortId=0;
    //分类菜单点击后当前ID，默认是0
    $scope.currentId=0;
    //新增菜单名字
    $scope.menuItem='';
    //应用列表标题样式，mY_kind_divTil_Child_tilte是我的分类，mY_kind_divTil_Child_tilte1是分类维护
    $scope.listTitleClass='mY_kind_divTil_Child_tilte';
    //控制菜单编辑框显示和隐藏
    $scope.currentId1=0;
    $scope.readonly=true;
    //控制添加应用按钮显示
    $scope.addAppBtnShow=false;
    //控制添加应用弹出框显示
    $scope.addAppShow=false;
    //记录添加应用时所在的分类ID
    $scope.AddSortId=0;
    //添加应用列表搜索字段
    $scope.searchTitle='';
    $scope.sortStatus='';
    //加载分类菜单列表数据
    $scope.getMenu=function(menuSortId,indexId,menuName,operation){
        var sortStatus=$scope.sortStatus;
        classMgService.getMenu(menuSortId,indexId,menuName,operation,sortStatus).then(function(data){
            $scope.classMenuList=data.menuList;
            $scope.sortStatus=data.sortStatus;
        },function(){
            console.log('classMgController 管理_我的应用_我的分类：分类菜单加载失败！');
        });
    };
    //默认查询分类菜单列表数据
    $scope.getMenu(0,0,'','');
   //获取分类应用列表数据
    $scope.getList=function(currentPage,menuSortId,indexId,appId,operation){

        classMgService.getData(currentPage,menuSortId,indexId,appId,operation).then(function(data){
            $scope.classList=data.classList;
            $scope.totalPage = data.totalPage;
            $scope.nowPage = data.nowPage;
            $scope.totalPas = data.totalPas;
            $scope.currentPage = data.page;
        },function(){
            console.log('classMgController 管理_我的应用_我的分类：分类应用列表加载失败！');
        });
    };
    //默认获取全部分类的分类应用列表数据
    $scope.getList(1,0,'','','');
    //分类应用列表点击改变页码
    $scope.changePage=function(currentPage){
        if(currentPage <= $scope.totalPage&&currentPage>0 )
        {
            $scope.getList(currentPage,$scope.menuSortId,'','');
        }
        else
        {
            console.log('classMgController 管理_我的应用_我的分类：我的分类应用列表页码越界！');
        }
    };

    //点击标签切换我的分类和分类维护tab标签
    $scope.tabChange=function(tabStatus) {
        //点击新的菜单条目设置之前的编辑状态为不可编辑---如果上一个菜单点击编辑但是没有提交或取消
        //点击新的菜单条目清空之前的编辑值并设为初始值 ---如果上一个菜单点击编辑但是没有提交或取消
            $scope.readonly=true;
            var menuList=$scope.classMenuList;
            for(var i=0;i<menuList.length;i++){
                if(menuList[i].sortId==oldMenuSortId)
                {
                    menuList[i].sortName=oldMenuName;
                }
            }
            $scope.classMenuList=menuList;
        //设置分类菜单编辑为初始状态--不可编辑
        $scope.readonly=true;
        //记录我的分类或者分类列表哪个状态，0是我的分类，1是分类维护
        $scope.tabStatus = tabStatus;
        if(tabStatus===0)
        {
            //我的分类tab点中样式和分类维护未点中样式
            $scope.tabCor1='classSpan';
            $scope.tabCor0='classCor classBackCor';
            //我的分类---隐藏新增按钮和保存按钮
            $scope.addShow=false;
            $scope.saveShow=false;
            //我的分类---隐藏新增条目
            mobileDialogElement.remove();
            //我的分类---隐藏添加应用按钮
            $scope.addAppBtnShow=false;
            //我的分类---隐藏分类维护中显示，但是我的分类不需要显示的
            $scope.maintainAShow=false;
            //我的分类---初始化分类菜单为全部选中样式
            $scope.menuClassSelected='selectBackCor_menu';
            //我的分类---初始化应用标题为全部样式
            $scope.listTitleClass='mY_kind_divTil_Child_tilte';
            //我的分类---初始化分类菜单全部状态选中
            $scope.currentId=0;
            //我的分类---初始化应用标题变量为全部
            $scope.listTitle='全部';
            //初始化我的分类（应用列表）数据
            $scope.getList(1,0,'','','');
        }
        else if(tabStatus===1)
        {
            //分类维护tabCor1 tab点中样式和我的分类tabCor0未点中样式
            $scope.tabCor0='';
            $scope.tabCor1='classCor classBackCor classSpan';
            //我的分类和分类维护切换
            $scope.addShow=true;
            //分类维护---隐藏新增条目
            mobileDialogElement.remove();
            //分类维护---隐藏添加应用按钮
            $scope.addAppBtnShow=false;
            //分类维护---隐藏分类维护中显示，但是我的分类不需要显示的
            $scope.maintainAShow=false;
            //分类维护---初始化分类菜单为全部选中样式
            $scope.menuClassSelected='selectBackCor_menu1';
            //分类维护---初始化应用标题为全部样式
            $scope.listTitleClass='mY_kind_divTil_Child_tilte1';
            //分类维护---初始化分类菜单全部状态选中
            $scope.currentId=0;
            //分类维护---初始化应用标题变量为全部
            $scope.listTitle='全部';
            //初始化分类维护（应用列表）数据
            $scope.getList(1,0,'','','');
        }

    };
    //点击选中分类菜单条目
    $scope.classMenuChange=function(menuSortId,menuName)
    {
        //点击新的菜单条目设置之前的编辑状态为不可编辑---如果上一个菜单点击编辑但是没有提交或取消
        //点击新的菜单条目清空之前的编辑值并设为初始值 ---如果上一个菜单点击编辑但是没有提交或取消
        if(menuSortId!= $scope.currentId)
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
        $scope.menuSortId=menuSortId;
        //选中”全部“分类菜单
        if(menuSortId===0)
        {

            //隐藏添加应用按扭
            $scope.addAppBtnShow=false;
            //隐藏分类维护可操作的，仅作展示
            $scope.maintainAShow=false;
            if( $scope.tabStatus==0)
            {
                //我的分类tab时，“全部”菜单样式
                $scope.menuClassSelected='selectBackCor_menu';
            }
            else
            {
                //分类维护tab，“全部”菜单样式
                $scope.menuClassSelected='selectBackCor_menu1';
            }
            $scope.currentId=0;
            $scope.listTitle='全部';
        }
        else
        {
            //分类维护tab切非“全部”分类菜单
            if( $scope.tabStatus===1) {
                //设置添加应用按钮可显示
                $scope.addAppBtnShow=true;
                $scope.maintainAShow=true;
            }
            //清空全部分类菜单选中样式
            $scope.menuClassSelected='';
            //重置当前选中分类菜单Id
            $scope.currentId=menuSortId;
            //重置当前分类应用的标题--选中分类菜单
            $scope.listTitle=menuName;

        }
        //根据分类菜单的切换初始化应用列表数据
        $scope.getList(1,menuSortId,'','');

    };
    //点击应用列表维护上移下移删除操作
    $scope.ChangeOperation=function(appId,orderId,menuSortId,operation){

        $scope.getList($scope.currentPage,menuSortId,orderId,appId,operation);
        for(var i=0;i<appIdList.length;i++)
        {
            if(appId===appIdList[i])
            {
                appIdList.splice(i,1)
            }
        }
    };
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

    };
    //点击删除新建菜单
    $scope.removeMenu=function(){
        mobileDialogElement.remove();
        $scope.addShow=true;
        $scope.saveShow=false;

    };
    //点击保存新建菜单
    $scope.saveMenu=function(){
        $scope.getMenu(0,0,$scope.menuItem,'add');
        mobileDialogElement.remove();
        $scope.menuClassSelected='selectBackCor_menu1';
        $scope.currentId=0;
        $scope.listTitle='全部';
        $scope.getList(1,0,'','','');
        $scope.addShow=true;
        $scope.saveShow=false;
    };
    //点击保存新建菜单
    $scope.updateMenu=function(menuId,indexId){
        var menuList=$scope.classMenuList;
        var newMenuName='';
        for(var i=0;i<menuList.length;i++){
            if(menuList[i].sortId==menuId)
            {
              newMenuName= menuList[i].sortName;
            }
        }
        $scope.readonly=true;
        $scope.getMenu(menuId,indexId,newMenuName,'update');
        $scope.menuClassSelected='selectBackCor_menu1';
        oldMenuName=newMenuName;
        oldMenuSortId=sortId;
        $scope.currentId=0;
        $scope.listTitle='全部';
        $scope.getList(1,0,'','','');
        $scope.addShow=true;
        $scope.saveShow=false;
    };
    //点击删除新建菜单
    $scope.delMenu=function(menuId,indexId){
        $scope.getMenu(menuId,indexId,'','delete');
        $scope.menuClassSelected='selectBackCor_menu1';
        $scope.currentId=0;
        $scope.listTitle='全部';
        $scope.getList(1,0,'','','');
        $scope.addShow=true;
        $scope.saveShow=false;
    };
    //点击上移新建菜单
    $scope.upMenu=function(menuId,indexId){
        $scope.getMenu(menuId,indexId,'','up');
        $scope.menuClassSelected='selectBackCor_menu1';
        $scope.currentId=0;
        $scope.listTitle='全部';
        $scope.getList(1,0,'','','');
        $scope.addShow=true;
        $scope.saveShow=false;
    };
    //点击下移新建菜单
    $scope.downMenu=function(menuId,indexId){
        $scope.getMenu(menuId,indexId,'','down');
        $scope.menuClassSelected='selectBackCor_menu1';
        $scope.currentId=0;
        $scope.listTitle='全部';
        $scope.getList(1,0,'','','');
        $scope.addShow=true;
        $scope.saveShow=false;
    };
    //记录编辑菜单提交前的选中菜单ID和Name值
    var oldMenuName='';
    var oldMenuSortId='';
   //点击编辑菜单
    $scope.editMenu=function(menuSortId,currentName){
        oldMenuName=currentName;
        oldMenuSortId=menuSortId;
        $scope.currentId1=menuSortId;
        $scope.readonly=false;
    };
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
    };
    //获取分类维护添加应用列表数据
    $scope.getAppList_nonSort=function(currentPage,searchTitle){
        classMgService.getAppList_nonSort(currentPage,searchTitle).then(function(data){
            $scope.appList=data.appList;
            $scope.totalPageAdd = data.totalPage;
            $scope.nowPageAdd = data.nowPage;
            $scope.totalPasAdd = data.totalPas;
            $scope.currentPageAdd = data.page;
        });
    };
    //点击分类维护添加应用的分页
    $scope.changePageAdd=function(currentPageAdd){
        if(currentPageAdd <= $scope.totalPageAdd&&currentPageAdd>0 )
        {
            $scope.getAppList_nonSort(currentPageAdd,$scope.searchTitle);
        }
        else
        {
            console.log('classMgController 管理_我的应用_我的分类：分类维护添加应用列表页码越界！');
        }
    };
   //点击加号图标添加应用
    $scope.addApp=function(sortId){
        $rootScope.fadeShow=true;
        $scope.addAppShow=true;
        $scope.getAppList_nonSort($scope.currentPageAdd,'');
    };
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
    };
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
        console.log(appIdList);
        var newArrApp=$scope.arrUnique([appIdList]);
    };
    //点击添加应用弹出框中点击确认
    $scope.addAppSave=function() {
        var sortId = $scope.menuSortId;
        console.log(appIdList);
        classMgService.addApp(appIdList,sortId).then(function (data) {
            if(data.flag == true){
                $scope.getList(1,sortId,'','','');
            }
        });
        $scope.addAppShow=false;
        $rootScope.fadeShow=false;
    };
    //添加应用弹出框中点击关闭
    $scope.closeAddAppWindow=function(){
        $scope.addAppShow=false;
        $rootScope.fadeShow=false;
    };
    //搜索添加应用列表
    $scope.searchAddApp=function(){
        var searchTitle=$scope.searchTitle;
        getAppList_nonSort(1,searchTitle);
    };
    };