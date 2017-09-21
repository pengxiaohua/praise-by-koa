$(document).ready(function() {
    //初始化，获取当前已点击次数
    refreshCount(); 

    $('#thumb').on('click', function() {
        // axios调用koa接口
        axios.get('/api/add_praise', {
            id: '1',
        })
        .then(function (data) {
            console.log('点赞成功', data);
            if(data.data.msg === '666'){
                refreshCount();
            }
        })
        .catch(function (error) {
            console.log(error);
        });
    });

    // 将当前点赞次数显示在页面
    function refreshCount() {
        $('#count').empty();
        axios.get('/api/get_count', {
            params: {
              id: 1
            }
          })
          .then(function (data) {
            console.log('获取点赞次数成功',data);
            if(data.data.msg === '666'){
                $('#count').html(data.data.count);
            }
          })
          .catch(function (error) {
            console.log(error);
          });
    }
})