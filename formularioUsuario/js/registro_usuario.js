$.ajax({

	url:"js/plugins/paises.json",
	type:"GET",

	success:function(respuesta){

		//console.log(respuesta);

		respuesta.forEach(function seleccionaPais(item,index){

			let pais=item.name;
			let cod=item.code;
			let dial=item.dial_code;
			$("#inputPais").append(
				`<option value="`+pais+','+cod+','+dial+`">`+pais+`</option>`)


		});

	}

});


/*=============================================
Select
=============================================*/
$('.select2').select2()


/*=============================================
Telefono
=============================================*/

$("#inputPais").change(function(){

$(".dialCode").html($(this).val().split(',')[2])

});


/*=============================================
INPUT MASK
=============================================*/

$('[data-mask]').inputmask();


/*=============================================
values inputs
=============================================*/
$(".enviar").click(()=>{
	
	let nombre = $("#inputName").val();

	let email = $("#inputEmail").val();

	let password=$("#inputPassword").val();


	let sex = $("inputSexo").val();


	let pais = $("#inputPais").val().split(",")[0];

	let cod_pais = $("#inputPais").val().split(",")[1];

	let telefono_pais = $("#inputPais").val().split(",")[2]+" "+$("#inputMovil").val();


	if(nombre == "" ||
		email == ""||
		sex == "" ||
		pais == "" ||
		cod_pais == "" ||
		telefono_pais ==""){

		$(".enviar").before(`
			<div class="alert alert-danger">Falta rellenar datos</div>`);
		setTimeout(()=>{
			$(".alert").remove(); 
		
		},2000)

	}else{
		
		$(".enviar").before(`
			<div class="alert alert-success">Se completo exitosamente el registro</div>`);
		
		setTimeout(()=>{
		
			$(".alert").remove(); 		
		},2000)
	}

});



$("#inputFecha").change(()=>{
	var myDate = new Date($("#inputFecha").val());

	fechaNac = myDate.getDate()+1;

	fechaNac+="/"+(myDate.getMonth()+1).toString();

	fechaNac+="/"+myDate.getFullYear();

	respuesta=validarFecha(fechaNac);
	
	console.log(respuesta);
	
	if(respuesta == false){
		$("#inputFecha").val("dd/mm/aaaa");
		alert("Date Invalid.");

	}

});



/*=============================================
INPUT EMAIL
=============================================*/

$("#inputEmail").change(()=>{

	let email = $("#inputEmail").val();
	respuesta=validarEmail(email);
	let email_respuesta=document.querySelector("#email_respuesta");

	if(respuesta == false){
		let ver=document.createElement("div");
		ver.className="alert alert-danger";
		ver.innerHTML="Email incorrecto"
		email_respuesta.appendChild(ver);
		setTimeout(()=>{
		
			$(".alert").remove(); 
			$("#inputEmail").val("");

		},2000)
	
	}else{
		let ver=document.createElement("div");
		ver.className="alert alert-success";
		ver.innerHTML="Email correcto"
		email_respuesta.appendChild(ver);
		setTimeout(()=>{

			$(".alert").remove(); 


		},2000)
			
	}

});



/*=============================================
INPUT PASSWORD
=============================================*/
$("#inputPassword").change(function(){
    
    let password = $(this).val();
    let password_respuesta = document.querySelector("#password_respuesta");
	
	let respuesta =validarPassword(password);
	

	if(respuesta){
		let ver=document.createElement("div");
		ver.className="alert alert-success";
		ver.innerHTML="Password correcto"
		password_respuesta.appendChild(ver);
		setTimeout(()=>{

			$(".alert").remove(); 

		},2000)

	}else{
		let ver=document.createElement("div");
		
		ver.className="alert alert-danger";
		ver.innerHTML="Password incorrecto, debe contener minimo ocho caracteres, al menos una letra mayúscula, una letra minúscula y un número"
		
		password_respuesta.appendChild(ver);
		setTimeout(()=>{

		
			$(".alert").remove(); 
			$("#inputPassword").val("");
		},2000)

	}

});



/*=============================================
INPUT NAME
=============================================*/

$("#inputName").change(()=>{
	
	let nombre_respuesta=document.querySelector("#nombre_respuesta");
	
	respuesta=validarNombre($("#inputName").val());
	console.log(respuesta);
	
	if (respuesta){
		let ver=document.createElement("div");
		ver.className="alert alert-success";
		ver.innerHTML="nombre correcto"
		nombre_respuesta.appendChild(ver);
		setTimeout(()=>{

			$(".alert").remove();
			

		},2000)
	
	}else{

		let ver=document.createElement("div");
		ver.className="alert alert-danger";
		ver.innerHTML="Nombre incorrecto"
		
		nombre_respuesta.appendChild(ver);
		setTimeout(()=>{

			$(".alert").remove(); 
			$("#inputName").val("");
			

		},2000)

	}


});


/*=============================================
VALIDACION FECHA
=============================================*/
function validarFecha(fechaNac){

	var myDate = new Date($("#inputFecha").val());	
	
	fechaVal=fechaNac.split("/");

	console.log(fechaVal);
	console.log(myDate.getDate()+1,myDate.getMonth()+1,myDate.getFullYear());

	if((myDate.getDate()+1!= fechaVal[0])||(myDate.getMonth()+1!=fechaVal[1])||(myDate.getFullYear()!= fechaVal[2])){
		
		return false;
	
	}else{
		return true;
	}


}


/*=============================================
EMAIL
=============================================*/

function validarEmail(email){
	if (/^[a-zA-Z]+@[a-zA-Z.]+\.([a-zA-Z])+$/.test(email)){
		return true;
	}else{
		return false;
	}
}


/*=============================================
PASSWORD
=============================================*/

function validarPassword(password){
	
	if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(password) && password.length >= 8){
		return true;
	}else{
		return false;
	}
}

/*=============================================
NOMBRE
=============================================*/
function validarNombre(nombre){
	
	if (/^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/.test(nombre)){
		return true;
	}else{
		return false;
	}
}


