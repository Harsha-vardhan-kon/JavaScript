let movieName=prompt("Enter the movie name");
let heroName=prompt("Enter the hero name");

switch(true){
    case movieName==="jalsa" && heroName==="pspk" :
        statement="<center><h2>Good movie</h2></center>"
        console.log("It is a good movie");
        break;
        case movieName==="basha" && heroName==="rajini":
            console.log("BlockBuster");
            break;
            default : ("none of the above")
}
document.write(statement)