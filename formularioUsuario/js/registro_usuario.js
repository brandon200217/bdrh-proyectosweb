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
		setTimeout(function(){
			$(".alert").remove(); 
		
		},2000)

	}else{
		
		$(".enviar").before(`
			<div class="alert alert-success">Se completo exitosamente el registro</div>`);
		
		setTimeout(function(){
		
			$(".alert").remove(); 		
		},2000)
	}

});
