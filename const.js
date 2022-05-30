
const form = document.getElementById('form');
const inputs = document.querySelectorAll('#form input');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const email = document.getElementById('email');
const subject = document.getElementById('subject');
const message = document.getElementById('message');
const closeModal = document.getElementById('close-modal');
const modal = document.getElementById('form-modal');

const expresions = {
	fname: /^[a-zA-ZÀ-ÿ\s]{2,40}$/,
    lname: /^[a-zA-ZÀ-ÿ\s]{2,40}$/,
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,    
    subject: /^.{1,100}$/,
    message: /^.{1,350}$/
}

const fields = {
	fname: false,
	lname: false,
	email: false,
    subject: false,
    message: false
}