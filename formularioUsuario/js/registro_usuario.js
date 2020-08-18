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
