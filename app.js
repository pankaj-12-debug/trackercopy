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
    document.getElementById('descrptionId').value='';
    document.getElementById('type').value='';
   document.getElementById('amount').value='';
   console.log('hi');
const parentNode=document.getElementById('ListOfUser');
const childHTML=`<li id=${user._id}> ${user.descrption}  ${user.type}  ${user.amount}
<button onclick=deleteUser('${user._id}')>Delete User</button>
<button onclick=editUser('${user._id}','${user.descrption}','${user.type}','${user.amount}')>edit</button>
</li>`
parentNode.innerHTML=parentNode.innerHTML + childHTML;
}
// edituser
function editUser(descrption,type,amount,userId){
     document.getElementById('descrptionId').value=descrptionId;
     document.getElementById('type').value=type;
    document.getElementById('amount').value=amount;
    delete(userId);
}
//delete onscreen and localstorage
function deleteUser(userId)
{
axios.delete(`https://crudcrud.com/api/c104f592207b401b9d47179f5165b907/appointmentData/${userId}`)
.then((respone)=>{
    remove(userId)
})
.catch((err)=>
{
    console.log(err);
})

    //console.log(descrptionId);
    //localStorage.removeItem(descrptionId);
     // remove(descrptionId);
}
// remove on screen
function remove(userId){
    const parentNode = document.getElementById('ListOfUser');
    const childNode = document.getElementById(userId);
console.log(childNode);
console.log(parentNode);
parentNode.removeChild(childNode)
}