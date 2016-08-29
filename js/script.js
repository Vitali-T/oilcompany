function show(){
		var menu = document.getElementById("small_menu");
		if(menu.style.display == "none"){
			menu.style.display = "initial";
			}
		else
			menu.style.display = "none";
	}



function validate(formular)
{
var letters = /^[A-Za-z -]+$/;
var regEx = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
var phoneFormat = /^([0-9 \(\)\+\-]+)$/;
if(formular.company.value==""){
	document.getElementById("warning-company").innerHTML = "*Camp obligatoriu";
    formular.company.style.borderColor = "red";
	return false;
	}
else 
	{
	document.getElementById("warning-company").innerHTML = "";
	formular.company.style.borderColor = '#ffc155';
	}
if(formular.city.value==""){
    document.getElementById("warning-city").innerHTML = "*Camp obligatoriu";
    formular.city.style.borderColor = "red";
	return false;
	}
else if(!formular.city.value.match(letters)){
	document.getElementById("warning-city").innerHTML = "*Sunt acceptate doar litere!";
	formular.city.style.borderColor = "red";
	return false;
	}
else 
	{
	document.getElementById("warning-city").innerHTML = "";
	formular.city.style.borderColor = '#ffc155';
	}
if(formular.contact.value==""){
    document.getElementById("warning-contact").innerHTML = "*Camp obligatoriu";
    formular.contact.style.borderColor = "red";
	return false;
	}
else if (!formular.contact.value.match(letters)){
	document.getElementById("warning-contact").innerHTML = "*Sunt acceptate doar litere!";
	formular.contact.style.borderColor = "red";
	return false;
	}
else 
	{
	document.getElementById("warning-contact").innerHTML = "";
	formular.contact.style.borderColor = '#ffc155';
	}
if(formular.phone.value==""){
    document.getElementById("warning-phone").innerHTML = "*Camp obligatoriu";
    formular.phone.style.borderColor = "red";
	return false;
	}
else if (!formular.phone.value.match(phoneFormat)){
	document.getElementById("warning-phone").innerHTML = "*Numar de telefon invalid!";
	formular.phone.style.borderColor = "red";
	return false;
	}
else 
	{
	document.getElementById("warning-phone").innerHTML = "";
	formular.phone.style.borderColor = '#ffc155';
	}
if(formular.mail.value==""){
	document.getElementById("warning-mail").innerHTML = "*Camp obligatoriu";
	formular.mail.style.borderColor = "red";
	return false;
	}
else if(!formular.mail.value.match(regEx)){
	document.getElementById("warning-mail").innerHTML = "*Adresa de e-mail invalida";
	formular.mail.style.borderColor = "red";
	return false;
    }
else 
	{
	document.getElementById("warning-mail").innerHTML = "";
	formular.mail.style.borderColor = '#ffc155';
	}
if(formular.products.value==""){
    document.getElementById("warning-products").innerHTML = "*Camp obligatoriu";
    formular.products.style.borderColor = "red";
	return false;
	}
else 
	{
	document.getElementById("warning-products").innerHTML = "";
	formular.products.style.borderColor = '#ffc155';
	}
if(formular.quantity.value==""){
    document.getElementById("warning-quantity").innerHTML = "*Camp obligatoriu";
    formular.quantity.style.borderColor = "red";
	return false;
	}
else
	return true;
};

function validate_contactForm(formular)
{
var letters = /^[A-Za-z -]+$/;
var regEx = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
var phoneFormat = /^([0-9 \(\)\+\-]+)$/;
if(formular.fullname.value==""){
    document.getElementById("warning-name").innerHTML = "*Camp obligatoriu";
    formular.fullname.style.borderColor = "red";
	return false;
	}
else if (!formular.fullname.value.match(letters)){
	document.getElementById("warning-name").innerHTML = "*Sunt acceptate doar litere!";
	formular.fullname.style.borderColor = "red";
	return false;
	}
else 
	{
	document.getElementById("warning-name").innerHTML = "";
	formular.fullname.style.borderColor = '#ffc155';
	}
if(formular.mail.value==""){
	document.getElementById("warning-mail").innerHTML = "*Camp obligatoriu";
	formular.mail.style.borderColor = "red";
	return false;
	}
else if(!formular.mail.value.match(regEx)){
	document.getElementById("warning-mail").innerHTML = "*Adresa de e-mail invalida";
	formular.mail.style.borderColor = "red";
	return false;
    }
else 
	{
	document.getElementById("warning-mail").innerHTML = "";
	formular.mail.style.borderColor = '#ffc155';
	}
if(formular.phone.value==""){
    document.getElementById("warning-phone").innerHTML = "*Camp obligatoriu";
    formular.phone.style.borderColor = "red";
	return false;
	}
else if (!formular.phone.value.match(phoneFormat)){
	document.getElementById("warning-phone").innerHTML = "*Numar de telefon invalid!";
	formular.phone.style.borderColor = "red";
	return false;
	}
else 
	{
	document.getElementById("warning-phone").innerHTML = "";
	formular.phone.style.borderColor = '#ffc155';
	return true;
	}
};
//prod_all tabs

$(document).ready(function() {
    $('.tabs .tab-links a').on('click', function(e)  {
        var currentAttrValue = $(this).attr('href');
 
        // Show/Hide Tabs
        $('.tabs ' + currentAttrValue).show().siblings().hide();
 
        // Change/remove current tab to active
        $(this).parent('li').addClass('active').siblings().removeClass('active');
 
        e.preventDefault();
    });
});