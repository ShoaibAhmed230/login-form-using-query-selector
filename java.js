function login() {


    //  first input value 

     let inputelment1 = document.querySelector("#fname").value;

     // secod input vale 

    let inputelment2 = document.querySelector("#lname").value;
     
    // change HTML <h1> element  content

    document.querySelector('h1 > span').innerHTML = inputelment1 + ' ' + inputelment2;
  
}