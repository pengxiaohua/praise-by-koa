// 创建路由
import indexmodule from '../models/model';

const indexController={
	admin(){
		return async(ctx,next)=>{
			ctx.body = 'Hello World';
		}
	},

	index(){
		return async(ctx,next)=>{
			ctx.body = await ctx.render('index.html',{
				title:'praise'
			})
		}
  	},
    
	addPraiseCount(){
		return async(ctx,next)=>{
			const M = new indexmodule();
			const data = await M.addPraise();
			ctx.body = data;
		}
  	},
    
  	getPraiseCount(){
		return async(ctx,next)=>{
			const M = new indexmodule();
			const data = await M.getCount();
			ctx.body = data;
		}
  	}
}


export default indexController;