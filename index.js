function process(){

    var person = document.getElementById("nameBox").value ; 
    var courses = parseInt(document.getElementById("coursesBox").value) ; 

    if (courses > 20 ) {

      document.getElementById("content").innerHTML= `
      
      <h4>Hello ${person}, Pathaan,Tiger,Cock</h4>`;
    }
    else {

       document.getElementById("content").innerHTML= `
      <h4>  ${person} Lion, Cheetah, Tigar, Elephant </h4>`;
    }

    // 333333333333333
}