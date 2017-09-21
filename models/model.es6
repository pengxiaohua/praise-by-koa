// 后端接口的封装
import rp from 'request-promise';

class indexModel{
    constructor(ctx){
        this.ctx=ctx;
    }

    addPraise(){
        var options = {
            method:"get",
               url: 'http://127.0.0.1:8080/praise-by-koa/server/post_count.php'
       }
        return new Promise((resolve,reject)=>{
            rp(options).then(function (result) {
                const data = JSON.parse(result);
                console.log('post result:',data);
                if(data.success){
                    resolve(data);
                }else{
                    reject(data);
                }
            })
        });
    }

    getCount(){
        var options = {
            method:"get",
               url: 'http://127.0.0.1:8080/praise-by-koa/server/get_count.php'
       }
        return new Promise((resolve,reject)=>{
            rp(options).then(function (result) {
                const data = JSON.parse(result);
                console.log('get result:', data, data.success);	
                if(data.success){
                    resolve(data);
                }else{
                    reject(data);
                }
            })
        })
    }


}

export default indexModel;