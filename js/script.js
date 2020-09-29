let btnAdd=document.getElementById('btn-team');
btnAdd.addEventListener("click",addTeam);

let btnList=document.getElementById('btn-list');
btnList.addEventListener("click",listTeams);

var teams=[];


function addTeam(){
    const equipo=prompt("indique cuál es el equipo?");
    teams.unshift(equipo);

}


function listTeams(){
   //alert(teams);

   //alert(teams.length);

  teams.forEach(addItem);
  
}


function addItem(item){

    let newLi= document.createElement("li");

    newLi.appendChild(document.createTextNode(item));

    let ul=  document.getElementById("list");

    ul.appendChild(newLi);

}

