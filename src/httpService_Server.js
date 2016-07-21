/**
 * Created by vision on 16/3/14.
 */
var urlWeb = 'http://ecms.chinacloudapp.cn:8000/cloudapps/';

module.exports = {
    Loginurl:urlWeb+'Pactera-IntegralPlatform-app/loginsso.do',
    //Loginurl:urlWeb+'Pactera-IntegralPlatform-app/loginsso.do',
    //  企业应用 应用列表
    /* busproduct:urlWeb+'Bproduct.json',
     busproduct_like:urlWeb+'Bproduct_like.json',*/
    busproduct:urlWeb+'sort/findSortUse.do',
    busproduct_like:urlWeb+'sort/findSortUse.do',
    //  详情
//			    details:urlWeb+'details.json',
    details:urlWeb+'sort/findUseCadicine.do',

    //我的待办
//			    mytodo:urlWeb +'mytodo.json',
    mytodo:urlWeb +'apply/findmytodo.do',
    //我的申请
//			    myapply:urlWeb +'myapplys.json',
    myapply:urlWeb +'apply/findmyapply.do',

    //  我的应用 应用列表
//			    myproduct:urlJSON+'Mproduct.json',
    myproduct:urlWeb+'sort/findSortUse.do',

    //企业应用的订阅事件
//			    subscribe:urlWeb+'dingyue.json',
    subscribe:urlWeb+'apply/apply.do',

    //我的应用的点击收藏取消收藏事件--add by Su
//			    collection:urlWeb+'dingyue.json',
    collection:urlWeb+'coll/add_updcoll.do',

    //管理-我的任务-我的申请-add by Hua
//			    applyManage:urlWeb+'applyMgs.json',
    applyManage:urlWeb+'apply/condition_apply.do',

    //管理-我的任务-我的申请详情内容-add by Hua
//			    applyDetail:urlWeb+'applyDetail.json',
    applyDetail:urlWeb+'apply/detail/myapply.do',

    //管理-我的任务-我的申请流程图内容-add by Hua
    applyProcess:urlJSON+'applyProcess.json',

    //管理-我的任务-我的待办-add by Hua
//			    todoManage:urlWeb+'todoMgs.json',
    todoManage:urlWeb+'todo/todo_done.do',

    todoDetail:urlWeb+'apply/detail/myapply.do',

    //审批 待办
    todoApproveManage:urlWeb+'apply/completetodo.do',

    //管理-我的任务-我的待办流程图内容-add by Hua
    todoProcess:urlJSON+'todoProcess.json',

    //管理-其他设置-账号安全-add by Hua
    accountManage:urlJSON+'accountMgs.json',

    //管理-我的应用-我的收藏-add by Hua
//			    collectionManage:urlWeb+'collectionMgs.json',
    collectionManage:urlWeb+'control/coll/findcollection.do',

    //管理-我的应用-我的分类菜单-add by Hua
//			    classMenuManage:urlWeb+'classMenuMgs.json',
    classMenuManage:urlWeb+'sort/userSort.do',

    //管理-我的应用-我的分类应用列表-add by Hua
//			    classListManage:urlWeb+'classListMgs.json',
    classListManage:urlWeb+'sort/findUserApp.do',

    //管理-我的应用-我的分类添加应用列表-add by Hua
//			    appListManage:urlJSON+'appListMgs.json',
    appListManage:urlWeb+'sort/use/findUserSort.do',

    //管理-我的应用-我的分类添加应用列表（添加）-add by Hua
//			    appListAddManage:urlWeb+'appListMgs.json',
    appListAddManage:urlWeb+'sort/use/saveUserSort.do',


    //管理-我的应用-我的订阅-按公司  --add by Darren_YCDing
//		    subscribe_Manage_Company:urlJSON+'Subscribe_company_manage.json',
    subscribe_Manage_Company:urlWeb+'myapp/findRovio.do',

    //管理-我的应用-我的订阅-按分类  --add by Darren_YCDing
//		    subscribe_Manage_Class:urlJSON+'Subscribe_class_manage.json',
    subscribe_Manage_Class:urlWeb+'myapp/findUserSort.do',

    //管理-我的应用-我的订阅-取消订阅  --add by Darren_YCDing
//		   subscribe_Manage_unDo:urlJSON+'Subscribe_unDo.json',
    subscribe_Manage_unDo:urlWeb+'apply/apply.do',


    //管理-企业应用-我的分类菜单-add by Hua
//		    AppclassMenuManage:urlJSON+'AppclassMenuMgs.json',
    AppclassMenuManage:urlWeb+'sort/findcompanySort.do',

    //管理-企业应用-我的分类应用列表-add by Hua
//		    AppclassListManage:urlWeb+'AppclassListMgs.json',
    AppclassListManage:urlWeb+'sort/findCompanyApp.do',

    //管理-企业应用-分类维护菜单-add by Hua
//		    AppMaintainclassMenuManage:urlWeb+'AppclassMenuMgs.json',
    AppMaintainclassMenuManage:urlWeb+'sort/companySort.do',

    //管理-企业应用-分类维护应用列表-add by Hua
//		    AppMaintainclassListManage:urlWeb+'AppclassListMgs.json',
    AppMaintainclassListManage:urlWeb+'sort/use/companyrSort.do',

    //管理-企业应用-分类维护添加应用列表-add by Hua
//		    AppappListManage:urlWeb+'AppappListMgs.json',
    AppappListManage:urlWeb+'sort/use/findCompanySort.do',

    //管理-企业应用-企业信息基本信息上传logo-add by Hua
    logoManage:urlJSON+'logoManage.json',

    //管理-企业应用-企业信息基本信息查询和保存-add by Hua
    businessInfoManage:urlWeb+'company/findCompany.do',

    //管理-企业应用-企业信息logo保存-add by Hua
    businessLogoManage:urlWeb+'company/companyLogo.do',

    //管理-企业应用-企业信息基本信息配置服务查询-add by Hua
//		    serverInfoManage:urlJSON+'serverInfoManage.json',
    serverInfoManage:urlWeb+'company/serverInfoManage.do',


    //管理-企业应用-企业信息基本信息配置服务确认-add by Hua
    serverInfoSaveManage:urlWeb+'company/savaAuth.do',

    //管理-企业应用-企业信息基本信息配置服务测试-add by Hua
    serverInfoTestManage:urlWeb+'company/isSuccess.do',

    //管理-企业应用-企业信息用户管理（查询tree用户组）-add by Hua
//		    userGroupManage:urlJSON+'userGroupManage.json',
    userGroupManage:urlWeb+'user/group/findGroup.do',

    //管理-企业应用-企业信息用户管理(查询用户)-add by Hua
//		    userManage:urlJSON+'userManage.json',
    userManage:urlWeb+'user/group_user/findGroup.do',

    //管理-企业应用-企业信息用户管理(新建或编辑保存用户)-add by Hua
//		    userSaveManage:urlJSON+'userManage.json',
    userSaveManage:urlWeb+' user/group_user/saveGroup_User.do',

    //管理-企业应用-企业信息用户管理（上移，下移，删除用户）-add by Hua
//		    userOprManage:urlJSON+'userManage.json',
    userOprManage:urlWeb+'user/group/updUser.do',

    //管理-企业应用-企业信息用户管理(批量删除用户)-add by Hua
    userDelAllManage:urlJSON+'user/delUser.do',

    //管理-企业应用-企业信息用户管理(全部用户组下删除用户)-add by Hua
    userDelManage:urlJSON+'user/delUser.do',

    //管理-企业应用-企业信息用户管理(导入用户查询)-add by Hua
    userImportManage:urlJSON+'userManage.json',


    //管理-企业应用-企业信息用户管理(导入用户提交)-add by Hua
    userImportAddManage:urlJSON+'userManage.json',


    //管理-企业应用-企业信息用户管理（查询下拉框用户组）-add by Hua
//		    userGroupSelectManage:urlJSON+'userGroupSelectManage.json',
    userGroupSelectManage:urlWeb+'user/group/findGroupSelect.do',

    //管理-企业应用-企业信息用户管理（查询用户组列表）-add by Hua
//		    userGroupListManage:urlJSON+'userGroupListManage.json',
    userGroupListManage:urlWeb+'user/group/findGroupByParent.do',

    //管理-企业应用-企业信息用户管理（新建或编辑用户组保存）-add by Hua
//		    userGroupListSaveManage:urlJSON+'userGroupListManage.json',
    userGroupListSaveManage:urlWeb+'user/group/ssaveGroup.do',


    //管理-企业应用-企业信息用户管理（上移，下移，删除用户组列表）-add by Hua
//		    userGroupListOprManage:urlJSON+'userGroupListManage.json',
    userGroupListOprManage:urlWeb+'user/group/moveGroup.do',

    //其他设置-个人信息-保存,--add by Ding
//		    person_manage_save:urlJSON+'person_manage_save.json',
//		    person_manage_select:urlJSON+'person_manage_save.json',

    person_manage_save:urlWeb+'user/saveUser.do',
    person_manage_select:urlWeb+'user/findUser.do',


    //我的应用的点击收藏取消收藏事件--add by Su
//		    searchBussiness:urlWeb+'BSearchProduct.json',
    searchBussiness:urlWeb+'coll/addcoll.do',
    //历史查看 --add by Su
//		    historyBussiness:urlWeb+'history.json',
    historyBussiness:urlWeb+'his/findhistory.do',
    //历史top查看 --add by Su
//		    thistoryBussiness:urlWeb+'Thistory.json',
    thistoryBussiness:urlWeb+'his/findTOP10.do',
    //菜单  --add by su
//		    menu:urlWeb+'menu.json',
    menu:urlWeb+'sort/findsort.do',

    //管理页面-企业应用-企业应用(查询)--add by Ding
//		    select_manage_bus:urlJSON+'mas_bus_app.json',
    select_manage_bus:urlWeb+'company/companyApp.do',

    //管理_企业应用_企业应用_构建新版本(查询)--add by Ding
    select_createNew_manage_bus:urlJSON+'mas_bus_create.json',
    //管理_企业应用_企业应用_构建新版本(保存)--add by Ding
    save_createNew_manage_bus:'',

    //管理_应用设置_应用上架_基本信息(保存)--add by Ding
    manage_appset_putup_no1_save:urlWeb+'use/saveInfo1.do',
    manage_appset_putup_no1_select:'',
    //管理_应用设置_应用上架_应用详情(保存)--add by Ding
    manage_appset_putup_no2_save:urlWeb+'use/saveInfo2.do',
    manage_appset_putup_no2_select:'',
    //管理_应用设置_应用上架_发布应用(保存)--add by Ding
    manage_appset_putup_no3_save:urlWeb+'use/saveInfo3.do',
    manage_appset_putup_no3_select:urlWeb+'use/findinfo3.do',
    //管理_应用设置_应用上架_发布范围(保存)--add by Ding
    manage_appset_putup_no4_save:urlWeb+'use/saveInfo4.do',
    manage_appset_putup_no4_select:'',
    manage_appset_putup_no4_left:urlWeb+'use/findinfo4.do',
    //我的应用 应用列表
    myproduct_insert_histery:urlWeb+'his/addhistory.do',

    //省份查询
    punlic_Select_Province:urlWeb+'user/cities.do',
    //城市查询
    public_Select_City:urlWeb+'user/provinces.do',

    //我的应用每页显示条数--add by Su
    myEverPageNum:16,
    //企业应用每页显示条数--add by Su
    productEverPageNum:6

};