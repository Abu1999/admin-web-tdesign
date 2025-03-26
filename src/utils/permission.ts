import { type Directive } from 'vue'

export const permission: Directive = {
  mounted(el, binding) {
    const { value } = binding
    //permissionButtton是我模拟后端传回来的数据，这个数据一般登陆后会存到store或者localStorage
    const permissionButtton = ['add', 'update', 'delete']
    if (value && value instanceof Array && value.length > 0) {
      const hasPermission = permissionButtton.some((role: string) => {
        return value.includes(role)
      })
      if (!hasPermission) {
        el.style.display = 'none'
      }
    } else {
      throw new Error('No permission !')
    }
  },
}
