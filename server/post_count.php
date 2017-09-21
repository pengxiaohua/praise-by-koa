<?php
    header("Content-type:application/json; charset=utf-8");
    
    require_once('db.php');

    if($link){
        // $_POST['id'] 是从前端传过来的值
        $id = $GET['id'];
        $sql = "UPDATE praise_count SET count = count + 1 WHERE id = 1 ";
        mysqli_query($link,'SET NAMES utf8'); //防止中文变成问号
        $result = mysqli_query($link,$sql);

        //发送数据给前端
        echo json_encode(array('success'=>$result, 'msg'=>'666'));
    }else{
        echo json_encode(array('success' => $result, 'msg'=>'444'));
    }

    mysqli_close($link);
?>