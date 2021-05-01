

var user = [
    {
        username : 'duy',
        pass : '11',
    },
    {
        username : 'tam',
        pass : '66',
    },
   
    {
        username : 'tri',
        pass : '22',
    }
]

function check() {

    document.getElementById('namedata').innerText = "";
    document.getElementById('passdata').innerText ="";

    var Name = document.getElementById('name').value;
    var Pass = document.getElementById('pass').value;

    var index = 0;
    var wasFound = false;
    var exist = false;

    for (let index = 0; index < user.length; index++) {
        if(Name == user[index].username){
            exist = true;
        }
    }

    if(exist){
        while (index < user.length && wasFound == false) {
            if(Name == user[index].username){
                if(Pass == user[index].pass){
                    document.getElementById('container').innerHTML = ''
                    document.getElementById('login').innerText = 'Successful login';
                }else{
                    document.getElementById('passdata').innerText = 'Password is wrong';
                }
                wasFound = true;
            }
            else{
                index++;
            }
        }
      
    }else{
        document.getElementById('namedata').innerText = 'Does not exist this user';
    }
}







// var user = {
//     username : 'tam',
//     pass : '66',
// }

// function check() {
//     var Name = document.getElementById('name').value;
//     var Pass = document.getElementById('pass').value;

//         if(Name == user.username && Pass == user.pass){
//             document.getElementById('container').innerHTML = ''
//             document.getElementById('not').innerText = 'hello';

//         }else if (Name == user.username && Pass!=user.pass){
//             document.getElementById('namedata').innerText = ''
//             document.getElementById('passdata').innerText = 'Password is wrong'
//         }else if (Name != user.username && Pass == user.pass){
//             document.getElementById('pass').innerText = ''
//             document.getElementById('namedata').innerText = 'Username is wrong'
//         }else {
//             document.getElementById('passdata').innerText = '';
//             document.getElementById('namedata').innerText = 'Does not exist this user'
//         }
// }

