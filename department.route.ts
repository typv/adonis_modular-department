import router from '@adonisjs/core/services/router'
import { middleware } from "#start/kernel";
const DepartmentController = () => import('#modules/department/controllers/department.controller')

router.group(() => {
  router.get('/', [DepartmentController, 'index']).use(
    middleware.auth({
      guards: ['api'],
    })
  )
}).prefix('/api/v1/departments')
