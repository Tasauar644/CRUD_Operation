<?php


require_once 'userService.php';


//print_r($_FILES);

/*$jsonUserData=$_POST['userData'];

$userData=json_decode($jsonUserData,true);
if($userData==null){
    echo "Nothing inside";
}
else{
    $firstName=$userData["firstName"];
    echo $firstName;
}

print_r($_FILES);*/
  

class User{

    private $connection;

    function __construct() {
        $this->connection =  database::getInstance()->getConnection();
    }

    function saveUser(){

          
            $image=$_FILES["image"];
           // print_r($image);
          

        $jsonUserData=$_POST['userData'];
        $userData=json_decode($jsonUserData,true);
            if($userData==null){
                 echo "Nothing inside";
        }
            else{
                    $firstName=$userData["firstName"];
                    $lastName=$userData["lastName"];
                    $userName=$userData["userName"];
                    $password=$userData["password"];
                    $age=$userData["age"];
                    $phoneNumber=$userData["phoneNumber"];
                    $address=$userData["address"];
                    $email=$userData["email"];

                    //image table

                    $file_name=$_FILES["image"]["name"];
                    $file_tempName=$_FILES  ["image"]["tmp_name"];
                    $file_type=$_FILES["image"]["type"];
                    $file_size=$_FILES["image"]["size"];
                    $folder="files/". $file_name;
                    move_uploaded_file($file_tempName,$folder);

            

                   
                $sql = "INSERT INTO users (FirstName, LastName, UserName, Email, Age, PhoneNumber, Address, UserPassword) 
                VALUES (:firstName, :lastName, :userName, :email, :age, :phoneNumber, :address, :password)";

                $sqlImage="INSERT INTO imagesource  (ImageName,ImageType, ImageTempName, ImageSize, ImageSource) 
                VALUES (:ImageName, :ImageType, :ImageTempName, :ImageSize, :ImageSource)";
           
                   $stmt = $this->connection->prepare($sql);
                   $stmt2=$this->connection->prepare($sqlImage);
           
                   if ($stmt && $stmt2) {
                    
                       $stmt->bindParam(':firstName', $firstName);
                       $stmt->bindParam(':lastName', $lastName);
                       $stmt->bindParam(':userName', $userName);
                       $stmt->bindParam(':email', $email);
                       $stmt->bindParam(':age', $age, PDO::PARAM_INT);
                       $stmt->bindParam(':phoneNumber', $phoneNumber);
                       $stmt->bindParam(':address', $address);
                       $stmt->bindParam(':password', $password);

                       $stmt2->bindParam(':ImageName',$file_name);
                       $stmt2->bindParam(':ImageType',$file_type);
                       $stmt2->bindParam(':ImageTempName',$file_tempName);
                       $stmt2->bindParam(':ImageSize',$file_size);
                       $stmt2->bindParam(':ImageSource',$folder);


           
                      
                       if ($stmt->execute() && $stmt2->execute()) {
                           return 1;
                       } else {
                          return 0;
                       }
                   } 
                   else {
                       return 0;    
                   }

                
                              
        }

           // print_r($_FILES);


    }
    function readUser(){
                            $sql="SELECT * FROM users";
                            $sql2="SELECT ImageSource FROM imagesource";
                            $stmt = $this->connection->prepare($sql);
                            $stmt2=$this->connection->prepare($sql2);
                            $stmt->execute();
                            $stmt2->execute();
                            $userArray=$stmt->fetchAll();
                            $userImage=$stmt2->fetchAll();
                           $data=$userArray;
                           $arrayLength = count($data);

                           if ($userArray &&  $userImage) {
                            $response = array(
                                'userArray' => $userArray,
                                'arrayLength' => $arrayLength,
                                'userImage'=> $userImage
                            );
                            echo json_encode($response);
                        } else {
                            return 0;
                        }
                        

                            
                          

    }
    function updateUserInformation(){
                  $userID=$_POST['userId'];
                  $sql="SELECT * FROM users WHERE Personid=$userID";
                  $sql2="SELECT ImageSource FROM imagesource WHERE Personid=$userID";
                  $stmt = $this->connection->prepare($sql);
                  $stmt2= $this->connection->prepare($sql2);
                  $stmt->execute();
                  $stmt2->execute();
                  $userinformation=$stmt->fetchAll();
                  $userImageInformation=$stmt2->fetchAll();
                  if ($userinformation &&  $userImageInformation) {
                    $response = array(
                        'userInformation' => $userinformation,
                        'userImageInformation'=> $userImageInformation
                    );
                    echo json_encode($response);

             
    }
}

    function updateUser(){
        print_r($_POST);
        print_r($_FILES);
        $image=$_FILES["image"];
        $jsonUserData=$_POST['userData'];
        $userData=json_decode($jsonUserData,true);
            if($userData==null){
              //   echo "Nothing inside";
        }


                        else{
            
                        $userID=$userData["userID"];
                        $firstName=$userData["firstName"];
                        $lastName=$userData["lastName"];
                        $userName=$userData["userName"];
                        $password=$userData["password"];
                        $age=$userData["age"];
                        $phoneNumber=$userData["phoneNumber"];
                        $address=$userData["address"];
                        $email=$userData["email"];

                        if($_FILES==null){

                          
                           // echo "It is  null";
                            $userID=$userData["userID"];
                            $firstName=$userData["firstName"];
                            $lastName=$userData["lastName"];
                            $userName=$userData["userName"];
                            $password=$userData["password"];
                            $age=$userData["age"];
                            $phoneNumber=$userData["phoneNumber"];
                            $address=$userData["address"];
                            $email=$userData["email"];

                            $sql = "UPDATE users   SET FirstName='$firstName', LastName='$lastName', UserName='$userName', Email='$email', Age=$age, PhoneNumber='$phoneNumber', Address='$address', UserPassword='$password' 
                            WHERE Personid=$userID";
               
                            $stmt = $this->connection->prepare($sql);

                       if($stmt){
                            if($stmt->execute()){
                            return 1;
                           }
                           else{
                            return 0;
                           }
                          }
                            else{
                           return 0;
                            }

                         
                        }

                        else{
                         //   echo "It is not null";
                            $sql="SELECT ImageSource FROM imagesource WHERE Personid=$userID";
                            $stmt = $this->connection->prepare($sql);
                            $stmt->execute();
                            $formerImageSource=$stmt->fetchAll();
                            $path=$formerImageSource[0]['ImageSource'];
                           // echo "The path is ".$path;
                            @unlink($path);

                        $file_name=$_FILES["image"]["name"];
                        $file_tempName=$_FILES  ["image"]["tmp_name"];
                        $file_type=$_FILES["image"]["type"];
                        $file_size=$_FILES["image"]["size"];
                        $folder="files/". $file_name;
                        move_uploaded_file($file_tempName,$folder);

                        $userID=$userData["userID"];
                        $firstName=$userData["firstName"];
                        $lastName=$userData["lastName"];
                        $userName=$userData["userName"];
                        $password=$userData["password"];
                        $age=$userData["age"];
                        $phoneNumber=$userData["phoneNumber"];
                        $address=$userData["address"];
                        $email=$userData["email"];


                        $sql = "UPDATE users   SET FirstName='$firstName', LastName='$lastName', UserName='$userName', Email='$email', Age=$age, PhoneNumber='$phoneNumber', Address='$address', UserPassword='$password' 
                        WHERE Personid=$userID";
                        $sql2="UPDATE imagesource  SET ImageName='$file_name', ImageType='$file_type', ImageTempName='$file_tempName', ImageSize='$file_size', ImageSource='$folder' WHERE Personid=$userID";
           
                        $stmt = $this->connection->prepare($sql);
                        $stmt2=$this->connection->prepare($sql2);
                   if($stmt && $stmt2){
                        if($stmt->execute() && $stmt2->execute()){
                        return 1;
                       }
                       else{
                        return 0;
                       }
                      }
                        else{
                      return 0;
                        }


                        
                           
                            
                     
                        }

            
       
  


    }
       
   
    


}
    function deleteUser(){
        $userID=$_POST['userId'];

        $sql="SELECT ImageSource FROM imagesource WHERE Personid=$userID";
        $stmt = $this->connection->prepare($sql);
        $stmt->execute();
        $formerImageSource=$stmt->fetchAll();
        $path=$formerImageSource[0]['ImageSource'];
        @unlink($path);




        $sql= "DELETE FROM imagesource WHERE Personid=$userID";
        $sql2="DELETE FROM users WHERE Personid=$userID";
        $stmt = $this->connection->prepare($sql);
        $stmt2 = $this->connection->prepare($sql2);
        if($stmt->execute() && $stmt2->execute()){
            
            return 1;
        }
        else{
            return 0;
        }

    }


}



?>