//html id--userString,btnSubmit,msg

//items to look up- regex, reversing a string, 

//get our user input
//controller function
function getValue(){

    //make sure the alert is invisible
    document.getElementById("alert").classList.add("invisible");

    //get user string from the page
    let userString = document.getElementById("userString").value

    //check for a palindrome
    let returnObj = checkForPalindrome(userString);
    
    //display out message to the screen
    displayMessage(returnObj);
}


//check if string is a palindrome
//logic function
function checkForPalindrome(userString){

    userString = userString.toLowerCase();

    //remove spaces and special characters
    let regex = /[^a-z0-9]/gi;
    userString = userString.replace(regex,"");

    let revString = []; //array
    let returnObj = {}; //object

    for(let index = userString.length -1; index >=0; index--){
        revString += userString[index];

    }
    //does userString = revString?
    if (revString == userString) {
        returnObj.msg = "Well done! You entered a palindrome!"
    } else {
       returnObj.msg = "Sorry! You did not enter a palindrome!" 
    } 

    returnObj.reversed = revString;

    return returnObj;



}

//display a message to the string.
//display function
function displayMessage(returnObj){

    document.getElementById("alertHeader").innerHTML.msg;
    document.getElementById("msg").innerHTML = `Your phrase reversed is: ${returnObj.reversed}`;
    document.getElementById("alert").classList.remove("invisible");

}