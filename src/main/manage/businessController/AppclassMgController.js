/**
 * Created by Sky on 2016/3/28.
 */
module.exports=function($scope,AppclassMgService) {
    //分类菜单数据
    $scope.classMenuList={};
    //我的分类分类菜单选中样式
    $scope.menuClassSelected='selectBackCor_menu';
    //分页当前页参数，currentPage是应用列表当前页码，currentPageAdd是添加应用列表当前页码
    $scope.currentPage=1;
    //应用列表标题，默认显示为“全部”
    $scope.listTitle='全部';
    //分类菜单条目ID，默认0是全部
    $scope.menuSortId=0;
    //分类菜单点击后当前ID，默认是0
    $scope.currentId=0;
    //加载分类菜单列表数据
    $scope.getMenu=function(){

        AppclassMgService.getMenu().then(function(data){
            $scope.classMenuList=data.menuList;
        },function(){
            console.log('AppclassMgController 管理_企业应用_企业分类：分类菜单加载失败！');
        });
    };
    //默认查询分类菜单列表数据
    $scope.getMenu();
    //获取分类应用列表数据
    $scope.getList=function(currentPage,menuSortId){
        AppclassMgService.getData(currentPage,menuSortId).then(function(data){
            $scope.classList=data.classList;
            $scope.totalPage = data.totalPage;
            $scope.nowPage = data.nowPage;
            $scope.totalPas = data.totalPas;
            $scope.currentPage = data.page;
        },function(){
            console.log('AppclassMgController 管理_企业应用_企业分类：分类应用列表加载失败！');
        });
    };
    //默认获取全部分类的分类应用列表数据
    $scope.getList(1,0);
    //分类应用列表点击改变页码
    $scope.changePage=function(currentPage){
        if(currentPage <= $scope.totalPage&&currentPage>0 )
        {
            $scope.getList(currentPage,$scope.currentId);
        }
        else
        {
            console.log('AppclassMgController 管理_企业应用_企业分类：分类应用列表页码越界！');
        }
    };
    //点击选中分类菜单条目
    $scope.classMenuChange=function(menuSortId,menuName)
    {
        $scope.menuSortId=menuSortId;
        //选中”全部“分类菜单
        if(menuSortId===0)
        {
            $scope.currentId=0;
            $scope.listTitle='全部';
        }
        else
        {
            //清空全部分类菜单选中样式
            $scope.menuClassSelected='';
            //重置当前选中分类菜单Id
            $scope.currentId=menuSortId;
            //重置当前分类应用的标题--选中分类菜单
            $scope.listTitle=menuName;

        }
        //根据分类菜单的切换初始化应用列表数据
        $scope.getList(1,menuSortId);
    };

}