function getAdmins(map){
    let admins = [];

    for([key,valor] of map){
if (valor==='User') {

   admins.push(key)
    
}

    }
return admins;
}
const user = new Map();
user.set('Danylo', 'Admin');
user.set('Monick', 'Admin');
user.set('Henrique', 'User');
user.set('Luciana', 'User');

console.log(getAdmins(user))