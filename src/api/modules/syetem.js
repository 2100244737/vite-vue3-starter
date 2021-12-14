/*
 * @Author: your name
 * @Date: 2021-11-17 16:04:17
 * @LastEditTime: 2021-12-07 20:18:36
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \bmop-billing-admin2.0\src\api\modules\syetem.js
 */
// 系统管理
const number = glob.appId
const fileItem = {
  USER_LIST: 'BMOP_USER_LIST_REQ_' + number, // 获取收费员
  // 用户管理
  SSO_FIND: 'BMOP_USER_FINDSSO_REQ_' + number, // 同步查询
  USER_ADD: 'BMOP_USER_ADD_REQ_' + number, // 同步保存
  USER_PAGE: 'BMOP_USER_PAGE_REQ_' + number, // 查询
  ROLE_LIST: 'BMOP_ROLE_LIST_REQ_' + number, // 添加查询角色
  USER_STATUS: 'BMOP_USER_STATUS_REQ_' + number, // 停用
  USER_UPDATE: 'BMOP_USER_UPDATE_REQ_' + number, // 修改
  COMPANY_LIST: 'BMOP_COMPANY_LIST_REQ_' + number, // 获取 单位
  SECTION_LIST: 'BMOP_BASIC_SECTIONLIST_REQ_' + number, // 获取 配置查询
  STATIONLIST: 'BMOP_BASIC_STATIONLIST_REQ_' + number, // 获取 配置查询
  USER_CONFORG: 'BMOP_USER_CONFORG_REQ_' + number, // 获取 保存
  USER_ORGTREE: 'BMOP_USER_ORGTREE_REQ_' + number, // 获取所属单位
  ORGANIZATION_TREE: 'BMOP_ORGANIZATION_TREE_REQ_' + number, // 获取全部所属单位
  USER_RESETPWD: 'BMOP_USER_RESETPWD_REQ_' + number, // 重置密码
  // 角色管理
  ROLE_PAGE: 'BMOP_ROLE_PAGE_REQ_' + number, // 查询
  ROLE_ADD: 'BMOP_ROLE_ADD_REQ_' + number, // 添加
  ROLE_UPDATE: 'BMOP_ROLE_UPDATE_REQ_' + number, // 更新
  ROLE_DELETE: 'BMOP_ROLE_DELETE_REQ_' + number, // 删除
  MENU_LIST: 'BMOP_MENU_LIST_REQ_' + number, // 配置
  CONF_MENU: 'BMOP_ROLE_CONFMENU_REQ_' + number, // 配置保存
  MENU: 'BMOP_ROLE_MENU_REQ_' + number, // 回显
  // 菜单管理
  MENU_ADD: 'BMOP_MENU_ADD_REQ_' + number, // 添加
  MENU_TREE: 'BMOP_MENU_TREE_REQ_' + number, // 查询
  MENU_DELETE: 'BMOP_MENU_DELETE_REQ_' + number, // 删除
  MENU_UPDATE: 'BMOP_MENU_UPDATE_REQ_' + number, // 修改
  DEVAPI_TREE: 'BMOP_API_TREE_REQ_' + number, // 查询api配置
  DEVMENU_CONFIG: 'BMOP_MENU_CONFIG_REQ_' + number, // 保存api配置
  DEVMENU_API: 'BMOP_MENU_API_REQ_' + number, // 回显api配置
  // 字典 查询管理
  LISTDICT: 'BMOP_DICT_LISTDICT_REQ_' + number, // 查询
  DELDICT: 'BMOP_DICT_DELDICT_REQ_' + number, // 删除
  ADDDICT: 'BMOP_DICT_ADDDICT_REQ_' + number, // 添加
  // 机构管理
  ORGANIZATION: 'BMOP_ORGANIZATION_TREE_REQ_' + number, // 查询
  ORGANIZATIONADD: 'BMOP_ORGANIZATION_ADD_REQ_' + number, // 新增
  ORGANIZATION_DELETE: 'BMOP_ORGANIZATION_DELETE_REQ_' + number, // 删除
  USER_STATIONS: 'BMOP_USER_STATIONS_REQ_' + number, // 获取收费站
  ORGANIZATION_UPDATE: 'BMOP_ORGANIZATION_UPDATE_REQ_' + number, // 修改
  // 设备车道关联管理
  DEVICE_LANE_ADD: 'BMOP_DEVICELANE_ADD_REQ_' + number, // 新增
  DEVICE_LANE_PAGE: 'BMOP_DEVICELANE_PAGE_REQ_' + number, // 分页、
  DEVICE_LANE_UPDATE: 'BMOP_DEVICELANE_UPDATE_REQ_' + number, // 更新
  DEVICE_DELETE: 'BMOP_DEVICELANE_DELETE_REQ_' + number, // 删除
  DEVICE_LIST: 'BMOP_DEVICE_LIST_REQ_' + number, // 分页
  // 设备管理
  DEVICE_PAGE: 'BMOP_DEVICE_PAGE_REQ_' + number, // 分页

  DEVICE_UPDATE: 'BMOP_DEVICE_UPDATE_REQ_' + number, // 修改
  DEVICE_DELETES: 'BMOP_DEVICE_DELETE_REQ_' + number, // 删除
  // 车道配置
  LANECONFIG_PAGE: 'BMOP_LANECONFIG_PAGE_REQ_' + number, // 分页
  LANECONFIG_ADD: 'BMOP_LANECONFIG_ADD_REQ_' + number, // 新增
  LANECONFIG_DELETE: 'BMOP_LANECONFIG_DELETE_REQ_' + number, // 删除
  // 修改密码
  USER_PASSWORD: 'BMOP_USER_PASSWORD_REQ_' + number
}
export default fileItem
