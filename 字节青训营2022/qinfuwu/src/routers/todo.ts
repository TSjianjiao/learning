import Router from '@koa/router'
// Koa 的路由在被 use 时是无法指定前缀的, 需要在定义时就指定前缀
const router = Router({
  prefix: '/api/todo'
})
import todoController from '@/controllers/todoController'
// 组装路由
router.put('/:id/done', todoController.done)
router.put('/:id/undone', todoController.undone)
router.get('/', todoController.listAll)
router.post('/', todoController.create)
router.delete('/:id', todoController.delete)
router.delete('/', todoController.deleteAll)

// Koa 的路由需要调用 routes 函数获取实际用于 use 的函数
export default router.routes()
