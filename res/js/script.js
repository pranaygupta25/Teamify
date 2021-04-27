// Sign up
function register_user() {
	const register_name = document.getElementById('signup_name');
	const register_username = document.getElementById('signup_username');
	const register_email = document.getElementById('signup_email');
	const register_password = document.getElementById('signup_password');

	var myHeaders = new Headers();
	myHeaders.append("Content-Type", "application/json");

	var raw = JSON.stringify({
	"name": register_name.value,
	"username": register_username.value,
	"email": register_email.value,
	"password": register_password.value
	});

	var requestOptions = {
	method: 'POST',
	headers: myHeaders,
	body: raw,
	redirect: 'follow'
	};

	fetch("https://teamify-in.herokuapp.com/users/register", requestOptions)
	.then(response => response.text())
	.then(result => console.log(result))
	.catch(error => console.log('error', error));
}

//Sign in
function login_user() {
	const login_username = document.getElementById('signin_username');
	const login_password = document.getElementById('signin_password');
	var myHeaders = new Headers();
	myHeaders.append("Content-Type", "application/json");

	var raw = JSON.stringify({
	"username": login_username.value,
	"password": login_password.value
	});

	var requestOptions = {
	method: 'POST',
	headers: myHeaders,
	body: raw,
	redirect: 'follow'
	};

	fetch("https://teamify-in.herokuapp.com/users/authenticate", requestOptions)
	.then(response => response.json())
	.then(json => {
		setCookie("token",json.token,14); 
		setCookie("id",json.id,14);
		setCookie("name",json.name,14);
		window.location.replace("index.html");
	  }).catch((err) => {
		console.log(err);
	  })
	.catch(error => console.log('error', error));
}
//Cookies
function setCookie(name,value,exp_days) {
    var d = new Date();
    d.setTime(d.getTime() + (exp_days*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

function deleteCookie(name) {
    var d = new Date();
    d.setTime(d.getTime() - (60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = name + "=;" + expires + ";path=/";
}

function getCookie(name) {
    var cname = name + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i < ca.length; i++){
        var c = ca[i];
        while(c.charAt(0) == ' '){
            c = c.substring(1);
        }
        if(c.indexOf(cname) == 0){
            return c.substring(cname.length, c.length);
        }
    }
    return "";
}

//Current User Details
function current_user(){
	var myHeaders = new Headers();
	var token = "Bearer ";
	token = token + getCookie("token");
	myHeaders.append("Authorization", token);
	var requestOptions = {
	method: 'GET',
	headers: myHeaders,
	redirect: 'follow'
	};

	fetch("https://teamify-in.herokuapp.com/users/current", requestOptions)
	.then(response => response.json())
	.then(json => {
        const name = json.name;
        const username = json.username;
        const email = json.email;
        document.getElementById("update_name").value = " " + name;
        document.getElementById("update_username").value = " " + username;
        document.getElementById("update_email").value = " " + email;
	  }).catch((err) => {
		console.log(err);
	  })
	.catch(error => console.log('error', error));
}

// Update User
function update_user(){
    var myHeaders = new Headers();
    myHeaders.append("Authorization", token);
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
    "username": "devansh2002"
    });

    var requestOptions = {
    method: 'PUT',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
    };

    fetch("https://teamify-in.herokuapp.com/users/606709bff1f1c41ca44da6bb", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}

//Logout Function
function logout_user(){
	deleteCookie("id");
	deleteCookie("token");
	deleteCookie("name");
}