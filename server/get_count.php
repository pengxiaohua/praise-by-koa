<?php
    header("Content-type:application/json; charset=utf-8");
    
    require_once('db.php');

    if($link){
        $id = $_GET['id'];
        $sql = " SELECT count FROM praise_count WHERE id= 1 ";
        mysqli_query($link,'SET NAMES utf8'); //防止中文变成问号
        $result = mysqli_query($link,$sql);
        $sendData = array();

        $row = mysqli_fetch_assoc($result);
        echo json_encode(array('count' => $row['count']));    //发送前端
    }else{
        echo json_encode(array('连接信息' => '连接失败'));
    }

    mysqli_close($link);
?>