const array=[];
let imgSource = document.getElementById("imgsrc");
let inputFile = document.getElementById("imageUpdate");
let   imageDataURL;
let arrayStorage=[];
let arrayIteration=0;
let check=true;
let RowData;
let table;
let newRow;
let idRow;
let firstNameRow;
let lastNameRow;
let userNameRow;
let emailRow;
let numberRow;
let ageRow;
let addressRow;
let imageRow;
let imageTag;
let actionRow;
let updateButton;
let deleteButton;
let rowID;



//showInTable();

let firstnameLive=document.getElementById("firstName");

firstnameLive.addEventListener("input",function(){
    let firstName=document.getElementById("firstName").value;
    const nameRegex = /^[A-Za-z]+(?: [A-Za-z]+)*$/;

    if(firstName==""){
        document.getElementById("spanFirstName").style.visibility="hidden";
        document.getElementById("firstName").style.borderColor="";
        array[0]=0;
        verify();

    }
        else{

    let firstNameResult=nameRegex.test(firstName);

    if(firstNameResult){
        document.getElementById("spanFirstName").style.visibility="hidden";
        document.getElementById("firstName").style.borderColor="";
        array[0]=1;
        verify();


    }
    else{
             console.log("This is not a valid first name");
             document.getElementById("spanFirstName").style.visibility="visible";
             document.getElementById("firstName").style.borderColor="red";
             array[0]=0;
             verify();
    }
}
});


let lastNameLive=document.getElementById("lastName");

lastNameLive.addEventListener("input",function(){
    let lastName=document.getElementById("lastName").value;
    const nameRegex = /^[A-Za-z]+(?: [A-Za-z]+)*$/;

    if(lastName==""){
        document.getElementById("spanLastName").style.visibility="hidden";
        document.getElementById("lastName").style.borderColor="";
        array[1]=0;
        verify();

    }
    else{

    let lastNameResult=nameRegex.test(lastName);

    if(lastNameResult){
        document.getElementById("spanLastName").style.visibility="hidden";
        document.getElementById("lastName").style.borderColor="";
        array[1]=1;
        verify();

    }
    else{
             console.log("This is not a valid last name");
             document.getElementById("spanLastName").style.visibility="visible";
             document.getElementById("lastName").style.borderColor="red";
             array[1]=0;
             verify();
            

    }
}




});


userNamelive=document.getElementById("userName");

userNamelive.addEventListener("input",function(){

    let userName=document.getElementById("userName").value;
    const userNameRegx=/^[a-zA-Z0-9_]+$/;

    if(userName==""){
        document.getElementById("spanUserName").style.visibility="hidden";
        document.getElementById("userName").style.borderColor="";
        array[2]=0;
        verify();


    }
    
    else{

    let userNameResult=userNameRegx.test(userName);

    if(userNameResult){
       
        document.getElementById("spanUserName").style.visibility="hidden";
        document.getElementById("userName").style.borderColor="";
        array[2]=1;
        verify();
        

    }
    else{
             console.log("This is not a valid user name");
             document.getElementById("spanUserName").style.visibility="visible";
             document.getElementById("userName").style.borderColor="red";
             array[2]=0;
             verify();
            

    }
}

});

emailLive=document.getElementById("userEmail");

emailLive.addEventListener("input",function(){

    let emailName=document.getElementById("userEmail").value;
    const emailRegex = /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/;

    if(emailName=="")
    {
        document.getElementById("spanEmailAddress").style.visibility="hidden";
        document.getElementById("userEmail").style.borderColor="";
        array[3]=0;
        verify();

    }

    else{

    let emailNameResult=emailRegex.test(emailName);

    if(emailNameResult){
        document.getElementById("spanEmailAddress").style.visibility="hidden";
        document.getElementById("userEmail").style.borderColor="";
        array[3]=1;
        verify();
    }
    else{
            // console.log("This is not a valid email address");
             document.getElementById("spanEmailAddress").style.visibility="visible";
             document.getElementById("userEmail").style.borderColor="red";
             array[3]=0;
             verify();


    }
}

});

let ageLive=document.getElementById("userAge");

ageLive.addEventListener("input",function(){
    let userAge=document.getElementById("userAge").value;

    if(userAge==""){
        document.getElementById("spanAge").style.visibility="hidden";
        document.getElementById("userAge").style.borderColor="";
        array[4]=0;
        verify();

    }
    else{

    if(userAge<18 || userAge >50 ){
        document.getElementById("spanAge").style.visibility="visible";
        document.getElementById("userAge").style.borderColor="red";
        array[4]=0;
        verify();

    }
    else{
        document.getElementById("spanAge").style.visibility="hidden";
        document.getElementById("userAge").style.borderColor="";
        array[4]=1;
       verify();

    }
}

});

let phoneNumberLive=document.getElementById("userPhoneNumber");

phoneNumberLive.addEventListener("input",function(){
    let userPhoneNumber=document.getElementById("userPhoneNumber").value;
    const phoneNumberRegx=/^01[3-9][0-9]{8}$/;

    if(userPhoneNumber==""){
        document.getElementById("spanPhoneNumber").style.visibility="hidden";
        document.getElementById("userPhoneNumber").style.borderColor="";
        array[5]=0;
        verify();


    }
    else{

    let userPhoneNumberResult=phoneNumberRegx.test(userPhoneNumber);

    if(userPhoneNumberResult){
        document.getElementById("spanPhoneNumber").style.visibility="hidden";
        document.getElementById("userPhoneNumber").style.borderColor="";
        array[5]=1;
        verify();
        

    }
    else{
          //   console.log("This is not a valid phone number");
             document.getElementById("spanPhoneNumber").style.visibility="visible";
             document.getElementById("userPhoneNumber").style.borderColor="red";
             array[5]=0;
             verify();
        

    }
}

});

let addressLive=document.getElementById("userAddress");

addressLive.addEventListener("input",function(){
    let userAddress=document.getElementById("userAddress").value;
    if(userAddress==""){
        document.getElementById("spanAddress").style.visibility="visible";
        document.getElementById("userAddress").style.borderColor="";
        array[6]=0;
        //verify();
    }

    else{
        document.getElementById("spanAddress").style.visibility="hidden";
        document.getElementById("userAddress").style.borderColor="";
        array[6]=1;
        //verify();
    }


});


let passwordLive=document.getElementById("userPassword");

passwordLive.addEventListener("input",function(){
    let userPassword=document.getElementById("userPassword").value;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=!])(?=.{8,11}$)/;

    if(userPassword==""){
        document.getElementById("spanPassword").style.display="block";
        document.getElementById("userPassword").style.borderColor="";
        array[7]=0;
        verify();


    }
    else{

    let userPasswordResult=passwordRegex.test(userPassword);

    if(userPasswordResult){
       
        document.getElementById("spanPassword").style.display="none";
        document.getElementById("userPassword").style.borderColor="";
        array[7]=1;
        verify();

    }
    else{
           //  console.log("This is not a valid password");
             document.getElementById("spanPassword").style.display="block";
             document.getElementById("userPassword").style.borderColor="red";
             array[7]=0;
             verify();
        

    }
}


});


function firstNameValidation(){

    let firstName=document.getElementById("firstName").value;
    const nameRegex = /^[A-Za-z]+(?: [A-Za-z]+)*$/;
    if(firstName==""){
        document.getElementById("spanFirstName").style.visibility="hidden";
        document.getElementById("firstName").style.borderColor="";
        array[0]=0;

        verify();

    }
    else{

    let firstNameResult=nameRegex.test(firstName);

    if(firstNameResult){
        document.getElementById("spanFirstName").style.visibility="hidden";
        document.getElementById("firstName").style.borderColor="";
        array[0]=1;

        verify();


    }
    else{
             console.log("This is not a valid first name");
             document.getElementById("spanFirstName").style.visibility="visible";
             document.getElementById("firstName").style.borderColor="red";
             array[0]=0;
             verify();
             

    }
}

}

function lastNameValidation(){

    let lastName=document.getElementById("lastName").value;
    const nameRegex = /^[A-Za-z]+(?: [A-Za-z]+)*$/;

    if(lastName==""){
        document.getElementById("spanLastName").style.visibility="hidden";
        document.getElementById("lastName").style.borderColor="";
        array[1]=0;
        verify();

    }
    else{

    let lastNameResult=nameRegex.test(lastName);

    if(lastNameResult){
        document.getElementById("spanLastName").style.visibility="hidden";
        document.getElementById("lastName").style.borderColor="";
        array[1]=1;
        verify();

    }
    else{
             console.log("This is not a valid last name");
             document.getElementById("spanLastName").style.visibility="visible";
             document.getElementById("lastName").style.borderColor="red";
             array[1]=0;
             verify();
            

    }
}

}

function userNamevalidation(){
    let userName=document.getElementById("userName").value;
    const userNameRegx=/^[a-zA-Z0-9_]+$/;

    if(userName==""){
        document.getElementById("spanUserName").style.visibility="hidden";
        document.getElementById("userName").style.borderColor="";
        array[2]=0;
        verify();


    }
    
    else{

    let userNameResult=userNameRegx.test(userName);

    if(userNameResult){
       
        document.getElementById("spanUserName").style.visibility="hidden";
        document.getElementById("userName").style.borderColor="";
        array[2]=1;
        verify();
        

    }
    else{
             console.log("This is not a valid user name");
             document.getElementById("spanUserName").style.visibility="visible";
             document.getElementById("userName").style.borderColor="red";
             array[2]=0;
             verify();
            

    }
}

}
function emailvalidation(){
    let emailName=document.getElementById("userEmail").value;
    const emailRegex = /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/;

    if(emailName=="")
    {
        document.getElementById("spanEmailAddress").style.visibility="hidden";
        document.getElementById("userEmail").style.borderColor="";
        array[3]=0;
        verify();

    }
  
    else{

    let emailNameResult=emailRegex.test(emailName);

    if(emailNameResult){
        document.getElementById("spanEmailAddress").style.visibility="hidden";
        document.getElementById("userEmail").style.borderColor="";
        array[3]=1;
        verify();
    }
    else{
             console.log("This is not a valid email address");
             document.getElementById("spanEmailAddress").style.visibility="visible";
             document.getElementById("userEmail").style.borderColor="red";
             array[3]=0;
             verify();


    }
}

}
function ageValidation(){
let userAge=document.getElementById("userAge").value;

    if(userAge==""){
        document.getElementById("spanAge").style.visibility="hidden";
        document.getElementById("userAge").style.borderColor="";
        array[4]=0;
        verify();

    }
    else{

    if(userAge<18 || userAge >50 ){
        document.getElementById("spanAge").style.visibility="visible";
        document.getElementById("userAge").style.borderColor="red";
        array[4]=0;
        verify();

    }
    else{
        document.getElementById("spanAge").style.visibility="hidden";
        document.getElementById("userAge").style.borderColor="";
        array[4]=1;
        verify();

    }
}

}

function phoneNumberValidation(){
    let userPhoneNumber=document.getElementById("userPhoneNumber").value;
    const phoneNumberRegx=/^01[3-9][0-9]{8}$/;

    if(userPhoneNumber==""){
        document.getElementById("spanPhoneNumber").style.visibility="hidden";
        document.getElementById("userPhoneNumber").style.borderColor="";
        array[5]=0;
        verify();


    }
    else{

    let userPhoneNumberResult=phoneNumberRegx.test(userPhoneNumber);

    if(userPhoneNumberResult){
        document.getElementById("spanPhoneNumber").style.visibility="hidden";
        document.getElementById("userPhoneNumber").style.borderColor="";
        array[5]=1;
        verify();
        

    }
    else{
             console.log("This is not a valid phone number");
             document.getElementById("spanPhoneNumber").style.visibility="visible";
             document.getElementById("userPhoneNumber").style.borderColor="red";
             array[5]=0;
             verify();
        

    }
}

}

function addressValidation(){
    let userAddress=document.getElementById("userAddress").value;
    if(userAddress==""){
        document.getElementById("spanAddress").style.visibility="visible";
        document.getElementById("userAddress").style.borderColor="";
        array[6]=0;
        verify();
    }

    else{
        document.getElementById("spanAddress").style.visibility="hidden";
        document.getElementById("userAddress").style.borderColor="";
        array[6]=1;
        verify();
    }




}

function passwordValidation(){
    let userPassword=document.getElementById("userPassword").value;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=!])(?=.{8,11}$)/;

    if(userPassword==""){
        document.getElementById("spanPassword").style.display="none";
        document.getElementById("userPassword").style.borderColor="";
        array[7]=0;
        verify();


    }
    else{

    let userPasswordResult=passwordRegex.test(userPassword);

    if(userPasswordResult){
       
        document.getElementById("spanPassword").style.display="none";
        document.getElementById("userPassword").style.borderColor="";
        array[7]=1;
        verify();

    }
    else{
            // console.log("This is not a valid password");
             document.getElementById("spanPassword").style.display="block";
             document.getElementById("userPassword").style.borderColor="red";
             array[7]=0;
             verify();
        

    }
}

}

function newImageUpdate() {

   


    let size=parseFloat(inputFile.files[0].size);

  //  console.log(size);
    let maxSizeKB=100;
    let maxSize=maxSizeKB*1024;//converting to bytes
   // console.log("max size is "+maxSize);

  //  console.log(size,maxSize);
    if (size < maxSize) {
        //console.log("I am executing");
        document.getElementById("spanImage").style.visibility = "hidden";
        inputFile.addEventListener("change", function () {
            if (inputFile.files.length > 0) {
                imgSource.src = URL.createObjectURL(inputFile.files[0]);
                array[8] = 1;
    
              const  file = inputFile.files[0];
                if (file) {
                    const reader = new FileReader();
                    reader.onload = function (e) {
                        imageDataURL = e.target.result;
                       // console.log("I am newImageUpdate "+imageDataURL);
                        verify();
                     
                    };
                    reader.readAsDataURL(file);
                }
                
            } else {
                imgSource.src = "";
            }
        });
    }
    
    else{

        document.getElementById("spanImage").style.visibility="visible";
        inputFile.addEventListener("change", function(){
            imgSource.src ="php/files/profile.jpg";
            array[8]=0;
            verify();

        });

    }


    
   
}


function insertInDatabase(){
    

    if (array[0] === 1 && array[1] === 1 && array[2] === 1 && array[3] === 1 && array[4] === 1 && array[5] === 1 && array[6] === 1 && array[7] === 1 && array[8] === 1) {
        let firstNameShow = document.getElementById("firstName").value;
        let userNameShow = document.getElementById("userName").value;
        let lastNameShow = document.getElementById("lastName").value;
        let userAgeShow = document.getElementById("userAge").value;
        let userPhoneNumberShow = document.getElementById("userPhoneNumber").value;
        let userAddressShow = document.getElementById("userAddress").value;
        let emailAddressShow = document.getElementById("userEmail").value;
        let userPasswordShow=document.getElementById("userPassword").value;

        let userData = {
            firstName: firstNameShow,
            lastName: lastNameShow,
            userName: userNameShow,
            password: userPasswordShow,
            age: userAgeShow,
            phoneNumber: userPhoneNumberShow,
            address: userAddressShow,
            email: emailAddressShow,
        };

       

            let formdata= new FormData();
            formdata.append("userData",JSON.stringify(userData));
            formdata.append("image",file=inputFile.files[0]);
            console.log(formdata);


      /*      for(item of formdata){

                console.log(item[0],item[1]);
            }*/
            
            let request= new XMLHttpRequest();

            const url="http://localhost/myPhpProject/php/userService.php?service=saveUser";
            request.open("POST",url);
            request.send(formdata);
           
          //  alert("Database Insersation Successful");
      
        //clearInputFields();

        
    }
          

}

    

function showInTable() {
 
    const readUserReq = new XMLHttpRequest();
    const readTableUrl = "http://localhost/myPhpProject/php/userService.php?service=readUser";
    readUserReq.open("GET",readTableUrl);

    
    readUserReq.send();

    readUserReq.addEventListener("load", function () {
      if (readUserReq.status === 200) {
       
        let userDataFetched =JSON.parse(readUserReq.responseText);
        let arrayLength=userDataFetched.arrayLength;
       // console.log("the length is "+arrayLength);
           /* let object1= userDataFetched.userArray[0]['FirstName'];
            console.log(object1);*/
            table=document.getElementById("table");    
            for(let i=0;i<arrayLength;i++){

                //new row creation
                newRow=document.createElement("tr");
                newRow.setAttribute("data-row-id", userDataFetched.userArray[i]['Personid']);

                //id row creation
                idRow=document.createElement("td");
                idRow.textContent=userDataFetched.userArray[i]['Personid'];
                idRow.style.textAlign="center";
                idRow.style.padding="15px";

                 //creating the data for the row
 
                firstNameRow=document.createElement("td");
                firstNameRow.textContent=userDataFetched.userArray[i]['FirstName'];
                firstNameRow.style.textAlign="center";
                firstNameRow.style.padding="15px";

                lastNameRow=document.createElement("td");
                lastNameRow.textContent=userDataFetched.userArray[i]['LastName'];
                lastNameRow.style.textAlign="center";
                lastNameRow.style.padding="15px";

                userNameRow=document.createElement("td");
                userNameRow.textContent=userDataFetched.userArray[i]['UserName'];
                userNameRow.style.textAlign="center";
                userNameRow.style.padding="15px";

                emailRow=document.createElement("td");
                emailRow.textContent= userDataFetched.userArray[i]['Email'];
                emailRow.style.padding="15px";


                numberRow=document.createElement("td");
                numberRow.textContent=userDataFetched.userArray[i]['PhoneNumber'];

                ageRow=document.createElement("td");
                ageRow.textContent=userDataFetched.userArray[i]['Age'];
                ageRow.style.textAlign="center";
                ageRow.style.padding="15px";


                addressRow=document.createElement("td");
                addressRow.textContent=userDataFetched.userArray[i]['Address'];
                addressRow.style.textAlign="center";
                addressRow.style.padding="15px";


               imageRow=document.createElement("td");
               imageTag=document.createElement("img");
               imageTag.setAttribute("src","php/"+userDataFetched.userImage[i]['ImageSource']);
               imageTag.setAttribute("id","showImageInTable");
               imageRow.appendChild(imageTag);

               actionRow=document.createElement("td");
               actionRow.style.borderRight = "none";

                //update Button Create
                updateButton=document.createElement("button");
                updateButton.innerHTML="Update";
                updateButton.style.marginBottom="10px";
                updateButton.setAttribute("data-row-id",userDataFetched.userArray[i]['Personid']);

                let breakTag=document.createElement("br");
 
                //Delete Button Create
        
                deleteButton=document.createElement("button");
                deleteButton.innerHTML="Delete";
                deleteButton.setAttribute("data-row-id",userDataFetched.userArray[i]['Personid']);

                actionRow.appendChild(updateButton);
                actionRow.appendChild(breakTag);
                actionRow.appendChild(deleteButton);

                newRow.appendChild(idRow);
                newRow.appendChild(firstNameRow);
                newRow.appendChild(lastNameRow);
                newRow.appendChild(userNameRow);
                newRow.appendChild(emailRow);
                newRow.appendChild(numberRow);
                newRow.appendChild(ageRow);
                newRow.appendChild(addressRow);
                newRow.appendChild(imageRow);
                newRow.appendChild(actionRow);
               
            
                let tbody=table.querySelector("tbody");
                tbody.appendChild(newRow);


            }

      } else {
        console.log("Request failed with status: " + readUserReq.status);
      }
    });
    
}
 showInTable();
//show table ends here


function clearInputFields() {

    event.preventDefault();

    document.getElementById("firstName").value = "";
    document.getElementById("lastName").value = "";
    document.getElementById("userName").value = "";
    document.getElementById("userEmail").value = "";
    document.getElementById("userAge").value = "";
    document.getElementById("userPhoneNumber").value = "";
    document.getElementById("userAddress").value = "";
    document.getElementById("userPassword").value = "";
    document.getElementById("imgsrc").src = "";
    document.getElementById("imgsrc").src = "php/files/profile.jpg";

    for (let i = 0; i < 9; i++) {
        array[i] = 0;
    }
    verify();


}



function verify() {
    if (array[0] === 1 && array[1] === 1 && array[2] === 1 && array[3] === 1 && array[4] === 1 && array[5] === 1 && array[6] === 1 && array[7] === 1 && array[8] === 1) {
        document.getElementById("submitButton").removeAttribute("disabled");
    } else {
        document.getElementById("submitButton").disabled = true;
    }
}


 table=document.getElementById("table");

table.addEventListener("click",function(event){


    if(event.target.tagName=="BUTTON"){

         rowID=event.target.getAttribute("data-row-id");
         console.log("this is row id "+rowID);
       

        if(event.target.innerHTML=="Delete"){
            
                console.log("Delete triggered");

                let a= confirm("Are your sure you want to delete?");

                if(a){

                let formdata= new FormData();
                formdata.append("userId",JSON.stringify(rowID));
    
                const deleteUserRequest = new XMLHttpRequest();
                const deleteTableUrl = "http://localhost/myPhpProject/php/userService.php?service=deleteUser";
                deleteUserRequest.open("POST", deleteTableUrl);
                deleteUserRequest.send(formdata);

                alert("Delete successful");
                event.target.closest("tr").remove();
               // location.reload(); 

                }
                else{
                    alert("Delete failed");
                }
         
           
        
           //event.target.closest("tr").remove();
        }
        else if(event.target.innerHTML=="Update"){
            check=false;
            for (let i = 0; i < 9; i++) {
                array[i] = 1;
            }verify();
            console.log("Update triggered");
           // console.log("this is row from update if  id "+rowID);

            let formdata= new FormData();
            formdata.append("userId",JSON.stringify(rowID));

            const updateUserRequest = new XMLHttpRequest();
            const updateTableUrl = "http://localhost/myPhpProject/php/userService.php?service=updateUser";
            updateUserRequest.open("POST", updateTableUrl);
            updateUserRequest.send(formdata);

            updateUserRequest.addEventListener("load",function(){

                if(updateUserRequest.status==200){


                    let userUpdateDataFetched =JSON.parse(updateUserRequest.responseText);

    
                        document.getElementById("firstName").value = userUpdateDataFetched.userInformation[0].FirstName;
                        document.getElementById("lastName").value = userUpdateDataFetched.userInformation[0].LastName;
                        document.getElementById("userName").value = userUpdateDataFetched.userInformation[0].UserName;
                        document.getElementById("userEmail").value =userUpdateDataFetched.userInformation[0].Email;
                        document.getElementById("userPhoneNumber").value =userUpdateDataFetched.userInformation[0].PhoneNumber;
                        document.getElementById("userAddress").value = userUpdateDataFetched.userInformation[0].Address;
                        document.getElementById("userAge").value=userUpdateDataFetched.userInformation[0].Age;
                        document.getElementById("userPassword").value = userUpdateDataFetched.userInformation[0].UserPassword;
                       // console.log("The image source from update is "+userUpdateDataFetched.userImageInformation[0].ImageSource);
                        document.getElementById("imgsrc").src ="php/"+userUpdateDataFetched.userImageInformation[0].ImageSource;



                }
             


            });



        
        // document.getElementById("button").removeAttribute("disabled");


           


        }
    }

});



function addUpdate() {

console.log("Add update triggered");
    let firstNameShow = document.getElementById("firstName").value;
    let userNameShow = document.getElementById("userName").value;
    let lastNameShow = document.getElementById("lastName").value;
    let userAgeShow = document.getElementById("userAge").value;
    let userPhoneNumberShow = document.getElementById("userPhoneNumber").value;
    let userAddressShow = document.getElementById("userAddress").value;
    let emailAddressShow = document.getElementById("userEmail").value;
    let userPasswordShow=document.getElementById("userPassword").value;

    let userData = {
        userID: rowID,
        firstName: firstNameShow,
        lastName: lastNameShow,
        userName: userNameShow,
        password: userPasswordShow,
        age: userAgeShow,
        phoneNumber: userPhoneNumberShow,
        address: userAddressShow,
        email: emailAddressShow,
    };

    let formdata= new FormData();
    formdata.append("userData",JSON.stringify(userData));
    formdata.append("image",file=inputFile.files[0]);

    let request= new XMLHttpRequest();

    const updateUrl="http://localhost/myPhpProject/php/userService.php?service=updateUserDone";
    request.open("POST",updateUrl);
    request.send(formdata);

  
    check = true;
    window.location.reload();
    
}




function handleClick(){
    if(check){
        //showInTable();
        insertInDatabase();

    }
    else{
        addUpdate();
    }

}
let submitButton=document.getElementById("submitButton");

submitButton.addEventListener("click",function(e){

    if(check){
       
        insertInDatabase();
    }
    else{
        addUpdate();
    }

});








   
      