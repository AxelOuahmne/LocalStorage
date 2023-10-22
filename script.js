let register = document.querySelector('.register') ;
const min = 1000;
const max = 999999 ;
let userInfo = [] ;

let mytable = document.querySelector('table').lastChild;
register.addEventListener('submit',(event)=>{
event.preventDefault();
let rand = Math.random();
let genretedID = Math.floor(rand * (max - min) ) ;
let user ={
    id:register[0].value[0] + genretedID +register[1].value[0] ,
    name:register[0].value+ " " +register[1].value,
    email:register[2].value,
    adresse:register[3].value,
    country:register[4].value,
    city:register[5].value,
    pin_code :register[6].value
}
let isExiste = false ;
for (let i = 0; i < userInfo.length; i++) {
    if(userInfo[i].email === user.email || userInfo.id === user.id) {
        isExiste = true ;
    }  
}
if(!isExiste) {
    userInfo.push(user);
}
/*
for (let i = 0; i < userInfo.length; i++) {
    console.log(userInfo[i])
    let tbody = document.createElement('tr')
    let td = document.createElement('td') ;
    td.textContent = userInfo[i];
    mytable.appendChild(tbody).appendChild(td)
    
}
*/
userInfo.forEach(element => {
    let tbody = document.createElement('tr')
    let tdID  = document.createElement('td');
    let tdName =document.createElement('td');
    let tdEmail = document.createElement('td') ;
    let tdAdresse =document.createElement('td') ;  
    let tdCountry = document.createElement('td') ;
    let tdCity = document.createElement('td') ;
    let tdPinCode = document.createElement('td') ;

    let i = document.createElement('i')
    i.className="fa-solid fa-trash";

    let icons = document.createElement('td')
    icons.append(i)
    tdID.textContent = element.id ;
    tdName.textContent = element.name ;
    tdEmail.textContent = element.email ;
    tdAdresse.textContent = element.adresse ;
    tdCountry.textContent = element.country ;
    tdCity.textContent = element.city ;
    tdPinCode.textContent = element.pin_code ;
    console.log(tdID,tdName,tdEmail,tdAdresse,tdCountry,tdCity,tdPinCode)
    mytable.appendChild(tbody).append(tdID)
    mytable.appendChild(tbody).append(tdName)
    mytable.appendChild(tbody).append(tdEmail)
    mytable.appendChild(tbody).append(tdAdresse)
    mytable.appendChild(tbody).append(tdCountry)
    mytable.appendChild(tbody).append(tdCity)
    mytable.appendChild(tbody).append(tdPinCode)
    mytable.appendChild(tbody).append(icons)

  icons.addEventListener('click',()=>{
    tbody.remove()
  })  

});


})