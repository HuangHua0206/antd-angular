
import { getItem } from 'utils/storage';
// 登录接口返回角色类型
 console.log(getItem('user'), 'ooo')
  const role = getItem('user') ? getItem('user').role : [];

// 角色类型
const roles = {
  'superadmin': ['超级管理员', 'r1'],
  'admin': ['管理员', 'r2'],
  'superreviewer': ['资深审核员', 'r3'],
  'reviewer': ['审核员', 'r4'],
  'viewer': ['查看者', 'r5'],
  'test': ['测试者', 'r6'],
  'normal': ['访问者', 'r7']
}


// 递归过滤符合角色权限的路由
export function filterRoots(pagesRoutes) {
  const rolesNum = []
  role.forEach(item => rolesNum.push(Number(roles[item][1].charAt(1))))
  const newRoutes = []
  for(let item of pagesRoutes) {
    if(!item.children) {
      if(Array.from(new Set([...rolesNum, ...item.roots])).length < (rolesNum.length + item.roots.length) || item.roots[0] === 'all') {
        newRoutes.push(item)
      }
    } else {
      newRoutes.push({
        ...item,
        children: filterRoots(item.children)
      })
    }
  }
  return newRoutes
} 

// 递归过滤出符合角色类型的components
export function filterComponent(pagesRoutes) {
  let components = []
  for(let item of pagesRoutes) {
    if(item.component) {
      components.push(item.component)
    }
    if(item.children) {
      components = [...components, ...filterComponent(item.children)]
    }
  }
  return components;
}

