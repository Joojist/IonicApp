<?php
header('Access-Control-Allow-Origin: *');
$target_path = "uploads/";

$target_path = $target_path . basename( $_FILES['file']['name']);

if(move_uploaded_file($_FILES['file']['tmp_name'], $target_path)) {
    header('Content-type: application/json');
    $data = ['success' => true, 'message' => 'Upload and move success']; 
    echo json_encode( $data );
} else{
    header('Content-type: application/json'); 
    $data = ['success' => false, 'message' => 'There was an error uploading the file, please try again!'];
     echo json_encode( $data ); }
?>