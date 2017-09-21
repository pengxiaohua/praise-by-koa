// 分发路由
import indexController from './indexController';

const initController={
	init(app,router){
		app.use(router(_=>{
			_.get('/',indexController.admin());
			_.get('/index/index',indexController.index());
			_.get('/api/add_praise',indexController.addPraiseCount());
			_.get('/api/get_count',indexController.getPraiseCount());
		}))
	}

}

export default initController;