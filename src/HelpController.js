/**
 * Created by vision on 16/1/17.
 */
module.exports= function ($rootScope,$state) {
    //add by HUA--start
    //设置管理点击样式
    $rootScope.mgBtnShowCor='login_2';
    //add by HUA--end
    var vm=this;
    vm.text="我来自HelpContrller";
    console.log(vm.text);
    vm.persons=[{"name":"wangming"},{"name":"dingyanchao"}];
    vm.btnclick= function () {
        vm.persons.push({"name":"hahahhahaha"});
        vm.persons.push({"name":"hehehhe"});
        vm.persons.push({"name":"hehhehehehehehe"});
        vm.persons.push({"name":"hahahhaxhhxhshxhaha"});

        //vm.text="我被button点击了";
        //$state.go('myapp.tubiao');
        //getdata(vm.text).then(function (data) {
        //    vm.text=data.name;
        //}, function (error) {
        //
        //});
    };
};