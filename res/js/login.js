const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

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
		location.replace("index.html");
	  }).catch((err) => {
		console.log(err);
	  })
	.catch(error => console.log('error', error));
}
