const form=document.getElementById('expressForm');
form.addEventListener('submit',data);
function data(e)
{
    e.preventDefault();
    const descrption=document.getElementById('descrptionId').value;
    const type=document.getElementById('type').value;
   const amount=document.getElementById('amount').value;
   const object={
    descrption,
    amount,
    type
   }
     axios.post('https://crudcrud.com/api/c104f592207b401b9d47179f5165b907/appointmentData', object)
     .then((respone)=>
     {
        console.log(respone)
     })
     .catch((err)=>
     {
        console.log(err)
     });
   //localStorage.setItem(object.descrption,JSON.stringify(object))
   //showList(object); //show the detail in screen
}
window.addEventListener("DOMContentLoaded",()=>{
    axios.get("https://crudcrud.com/api/c104f592207b401b9d47179f5165b907/appointmentData")
    .then((respone)=>{
        console.log(respone);
        for(var i=0;i<respone.data.length;i++){
            showList(respone.data[i])
        }
    })
    .catch((err)=>{
        console.log(err)
    })
    console.log(data);
})
function showList(user)
{
const parentNode=document.getElementById('ListOfUser');
const childHTML=`<li id=${user.descrption}> ${user.descrption}  ${user.type}  ${user.amount}
<button onclick=deleteUser('${user.descrption}')>Delete User</button>
</li>`
parentNode.innerHTML=parentNode.innerHTML + childHTML;
}
//delete onscreen and localstorage


function deleteUser(descrptionId){
    console.log(descrptionId);
    localStorage.removeItem(descrptionId);
      remove(descrptionId);
}
// remove on screen
function remove(descrptionId){
    const parentNode = document.getElementById('ListOfUser');
    const childNode = document.getElementById(descrptionId);
console.log(childNode);
console.log(parentNode);
parentNode.removeChild(childNode)
}