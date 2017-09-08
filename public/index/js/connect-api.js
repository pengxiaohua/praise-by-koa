$(document).ready(function() {
    //初始化，获取当前已点击次数
    refreshCount(); 

    $('#thumb').on('click', function() {
        // $.ajax({
        //     url: "../praise-by-koa/server/post_count.php",
        //     type: "POST",
        //     datatype:'json',
        //     data: {
        //         id: 1
        //     },
        //     success: function(data) {
        //         console.log('data1', data);
        //         refreshCount();
        //     },
        //     error: function(e) {
        //         console.log(e.status);
        //     }
        // });
        axios.post('/api/post_count', {
            id: '1',
        })
        .then(function (data) {
            console.log('data1', data);
            refreshCount();
        })
        .catch(function (error) {
            console.log(error);
        });
    });

    // 将当前点赞次数显示在页面
    function refreshCount() {
        $('#count').empty();
        // $.ajax({
        //     type: "GET",
        //     data: { id: 1 },
        //     datatype:'json',
        //     url: "../praise-by-koa/server/get_count.php",
        //     success: function(data) {
        //         console.log('data2', data);
        //         $('#count').html(data.count);
        //     },
        //     error: function(e) {
        //         console.log(e.status);
        //     }
        // });
        axios.get('/api/get_count', {
            params: {
              id: 1
            }
          })
          .then(function (data) {
            console.log('data2',data);
            $('#count').html(data.data.count);
          })
          .catch(function (error) {
            console.log(error);
          });
    }
})