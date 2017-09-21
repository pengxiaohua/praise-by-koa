// 点赞+1接口自动化测试
import requestsuper from 'supertest';
import app from '../app.js';
 
function request(){
    return requestsuper(app.listen());
}

describe('测试路由', function() {
    it('点赞', function(done) {
      request()
        .get('/api/add_praise')
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function(err,res){
            if(res.success === true) return done(err);
            done(); 
        });
    });
  });