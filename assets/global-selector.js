// Car type change

// if(window.location.pathname.includes("subpage")){
//    microsite_type = pageInfo == "golfcart" ? pageInfo = "golf cart" : pageInfo ;
//    microsite_type.includes("hummer") ? pageInfo = "hummer" : pageInfo;
//   console.log("microsite_type on a subapge", microsite_type)
// } else{
//   microsite_type = vehicleInfo.vehtype;
//   console.log("IM the microsite 1 ", microsite_type)
// }

// console.log("selected", microsite_type)
// var selected = `${microsite_type}`
//   $.ajax({
//     url: "https://api.carcovers.com/getCars.php?type=" + selected,
//     type: "GET",
//     dataType: "json",
//     success: function (data) {
//       console.log("Year Range Based On Vehicle Type",data);
//       carTypeChange(data);
      
//     }
//   });
// console.log(" selector change test2")
//  $("#type").change(function() {
//     var selected = $(this).val();
//     	microsite_type = selected;
//     localStorage.setItem('vehicle_type', selected); //saves vehicle type to localstorage for dynamic content on collection page (ex: car, van, truck...)
//   	console.log( "Local Storage Set", localStorage.getItem('vehicle_type'))
//     removeOptions("year");
//     removeOptions("make");
//     removeOptions("model");
// //     removeOptions("body");
//   	$("#year").prop("disabled", false);
//   	$("#year").attr("style", "display:block;");
  	
//   $.ajax({
//     url: "https://api.carcovers.com/getCars.php?type=" + selected.replace(/-/g, " "),
//     type: "GET",
//     dataType: "json",
//     success: function (data) {
//      console.log("Selected Data Check", data)
//       carTypeChange(data);
      
//     }
//   });
// });
// function carTypeChange(years) {    
  
//   if(document.getElementById('vehicle_start')){
//   document.getElementById("pops-options").innerHTML = "" 
//   }  
    
 
  
//     years.forEach(function (year) {
      
//         var opt = document.createElement("option");
//         opt.value = year;
//         opt.innerHTML = year;
//         document.getElementById("year").appendChild(opt);
      
//       	var opt = document.createElement("div");
//       	$(opt).attr("data-value", year);
//       	$(opt).attr("data-form", "#year");
//       	opt.innerHTML = year;
       
//   document.getElementById("pops-options").appendChild(opt);
  
      	
//       	/*initializePopupOptions();*/
//     });
// }

// // Car year change

// $("#year").change(function() {
//     var selected = $(this).val();
//   	 console.log(" selector change test6")
//     $("#make-year").text("Select your " + selected + " make");
    
//     removeOptions("make");
//     removeOptions("model");
// //     removeOptions("body");
//   	$("#make").prop("disabled", false);

//   	$("#make").attr("style", "display:block;");
  
//     $.ajax({
//       url: "https://api.carcovers.com/getCars.php?type=" + microsite_type + "&year=" + selected,
//       type: "GET",
//       dataType: "json",
//       success: function (data) {
//         //changes Vehicle type to SUV to get all SUVs in Selector
//         console.log("check url for makes", this.url)
//         if(microsite_type === "Hummer"){ 
//           	//sets vehicle_type to SUV
//         	vehicle_type ="SUV"
        
//         }
//         //if vehicle_type is Motorcyle combine Motorcycle and Scooter selector
//       	else if(microsite_type === "Motorcycle"){
//   	  		$.ajax({
//       			url: "https://api.carcovers.com/getCars.php?type=scooter" + "&year=" + selected,
//       			type: "GET",
//       			dataType: "json",
//       			success: function (scootData) {
//                  //Data test
//         		console.log("ScooterDataHere",scootData);
//                  //Combines inital data and scooterData 
//         		let motoData = [...data,...scootData];
//                  //filters data and sorts to alphabetically order
//         		motoData = motoData.filter((moto, index) => motoData.indexOf(moto) === index)
//                 motoData.sort();
//                  //check filtered data
//         		console.log("Finally have combined data", motoData);
//                  //run car year change function with combined data
//         		carYearChange(motoData);
//       			}			
//     			});
//   			}
//          //if vehicle_type is Car Combine Car SUV VAN TRUCk
//         else if(microsite_type === "Car"){
//         	$.ajax({
//       		url: "https://api.carcovers.com/getCars.php?type=truck" + "&year=" + selected,
//       		type: "GET",
//       		dataType: "json",
//       		success: function (truckData) {
//             //test truck data
//         	console.log("truckDataHere",truckData);
//         		// call for van data
//         		$.ajax({
//           			url: "https://api.carcovers.com/getCars.php?type=van" + "&year=" + selected,
//           			type: "GET",
//           			dataType: "json",
//           			success: function(vanData){
//                      //combine to car data
//           			let carData = [...data,...truckData,...vanData]
//                  //call for suv data
//             	$.ajax({
//               		url: "https://api.carcovers.com/getCars.php?type=suv" + "&year=" + selected,
//               		type: "GET",
//               		dataType: "json",
//               		success: function(suvData){
//               		console.log(suvData)
//                     //combine all data
//               		let carData = [...data,...truckData,...vanData, ...suvData]
//                     //filter same  data and sort
//                 	carData = carData.filter((car,index) => carData.indexOf(car)=== index && car !== "none")
                    
//                 	carData.sort();
//                     // run combined data through function
//                 	carYearChange(carData)
//               }
            
//             })
//           }
//         })
//       }
//     });
          
//         }
//       else{
        
//         carYearChange(data);
//         }}
// });
// });
// function carYearChange(makes) {
//   document.getElementById("pops-options").innerHTML = ""
//     makes.forEach(function (make) {
//         var opt = document.createElement("option");
//         opt.value = make;
//         opt.innerHTML = make;
      	
//         document.getElementById("make").appendChild(opt);
 
//         var opt = document.createElement("div");
//         $(opt).attr("data-value", make);
//         $(opt).attr("data-form", "#make");
//         opt.innerHTML = make;
//         document.getElementById("pops-options").appendChild(opt);
//         //initializePopupOptions();
//     });
//        	var options = document.getElementById("make").children;
//       options.forEach(opt =>{
//         if(opt.value === vehicleInfo.make){
//           opt.selected = "selected"
//           $("#make").change();
//         }
//       })
  
// }

// // Car make change

// $("#make").change(function() {

//     var selected = $(this).val().toLowerCase();
//     console.log("API CHECK", "TYPE", vehicleInfo.vehtype, "YEAR", $("#year").val() ,"MAKE", selected )
//     removeOptions("model");
// //     removeOptions("body");
//   	$("#model").prop("disabled", false);
//   	$("#model").attr("style", "display:block;");
//     console.log("check url", "https://api.carcovers.com/getCars.php?type=" + microsite_type + "&year=" + $("#year").val() + "&make=" + selected)
//     $.ajax({
//       url: "https://api.carcovers.com/getCars.php?type=" + microsite_type + "&year=" + $("#year").val() + "&make=" + selected,
//       type: "GET",
//       dataType: "json",
//       success: function (data) {
        
//         if(microsite_type === "Hummer"){ 
//         	vehicle_type ="SUV"
        
//         }
//               if(microsite_type === "Motorcycle"){
//   	  $.ajax({
//       url: "https://api.carcovers.com/getCars.php?type=scooter" + "&year=" +  $("#year").val() + "&make=" + selected,
//       type: "GET",
//       dataType: "json",
//       success: function (scootData) {
//         console.log("ScooterDataHere",scootData);
//         let motoData = [...data,...scootData];
//         motoData = motoData.filter((moto, index) => motoData.indexOf(moto) === index)
//         motoData.sort();
//         console.log("Finally have combined data", motoData);
//         carMakeChange(motoData);
//       	}});
//       	}
//                 else if(microsite_type === "Car" ){
//             	  $.ajax({
//       url: "https://api.carcovers.com/getCars.php?type=truck" + "&year=" +  $("#year").val() + "&make=" + selected,
//       type: "GET",
//       dataType: "json",
//       success: function (truckData) {
//         console.log("truckDataHere",truckData);
        
//         $.ajax({
//           url: "https://api.carcovers.com/getCars.php?type=van" + "&year=" +  $("#year").val() + "&make=" + selected,
//           type: "GET",
//           dataType: "json",
//           success: function(vanData){
//           	let carData = [...data,...truckData,...vanData]
//             $.ajax({
//               url: "https://api.carcovers.com/getCars.php?type=suv" + "&year=" +  $("#year").val() + "&make=" + selected,
//               type: "GET",
//               dataType: "json",
//               success: function(suvData){
//               	console.log(suvData)
//               	let carData = [...data,...truckData,...vanData, ...suvData]
//                 carData = carData.filter((car,index) => carData.indexOf(car)=== index)
//                 carData.sort();
//                 carMakeChange(carData)
//               }
            
//             })
//           }
//         })
//       }
//     });
          
//         }
//       else{
//         console.log(data);
//         carMakeChange(data);
//         }}
// });
// });
// function carMakeChange(models, thisYear, thisMake) {  
//   	document.getElementById("pops-options").innerHTML = "";
//     models.forEach(function (model) {
      
//         var opt = document.createElement("option");
//         opt.value = model;
//         opt.innerHTML = model;
//         document.getElementById("model").appendChild(opt);
      
//          var opt = document.createElement("div");
//         $(opt).attr("data-value", model);
//         $(opt).attr("data-form", "#model");
//         opt.innerHTML = model;
//         document.getElementById("pops-options").appendChild(opt);
//     });
// }

// // Car model change

// $("#model").change(function() {
//     var selected = $(this).val().toLowerCase();
  	
//     removeOptions("body");

//     $("#body").prop("disabled", false);
  	
    
// 	$.ajax({
//       url: "https://api.carcovers.com/getBodies.php?type=" + vehicleInfo.vehtype.toLowerCase() + "&year=" + $("#year").val() + "&make=" + $("#make").val().toLowerCase() + "&model=" + selected,
//       type: "GET",
//       dataType: "json",
//       success: function (data) {
//         console.log("carmodelchange");
//         console.log(data);
//         carModelChange(data);
//       }
//     });
// });
// var vehHandleCheck;
// function carModelChange(bodies) {
//   vehicleType = vehicleInfo.vehtype.toLocaleLowerCase();
 
//    $.ajax({
//       url: "https://api.carcovers.com/getTypes.php?make=" + $("#make").val() + "&model=" + $("#model").val() + "&year=" + $("#year").val(),
//       type: "GET",
//      async: false,
//       dataType: "json",
//       success: setCheckedHandle })
//   vehicleType = vehHandleCheck[0];
  
  
  
//   if (bodies[0] == 'none') {
//     console.log("No body found");
//     var selected = $("#make").val().replace(/ /g,"_") + "&" + $("#model").val().replace(/ /g,"_") + "&" + $("#year").val()
//     console.log("SELECTED", selected)
//     microsite_type.includes(" ") ? microsite_type = microsite_type.replace(" ","-") : microsite_type = microsite_type;
//     console.log("TEST TYPE", microsite_type)
   
//     let url = window.location.origin + "/collections/"+`${microsite_type}-covers/` + selected;
//      console.log("urlcheck", url)
//   	$("#link").attr("href", url);
//   	$(".submit-btn").css("background-color", "rgb(25 127 207)");
//   	window.location.href = url;
//   } else {
//     console.log("Body found!");
	
//     document.getElementById("pops-options").innerHTML = ""
//     bodies.forEach(function (body) {
// 		bodyTypeUrl = $("#make").val().replace(/ /g,"_") + "&" + $("#model").val().replace(/ /g,"_") + "&" + $("#year").val() + "&" + body['bodytitle'].replace(/ /g,"_")
		
//         var opt = document.createElement("option");      	
      	
//       	opt.value = bodyTypeUrl;
//      	opt.innerHTML = body['bodytitle'];
//         document.getElementById("body").appendChild(opt);
      
//       	if ($("#type").val().toLowerCase() == 'truck') {
          
//           opt = document.createElement("div");
//           opt.className = "truck-body-item";
//           opt.setAttribute("name", bodyTypeUrl);
          
//           $.ajax({
//             url: "https://api.carcovers.com/getTruckIcon.php?make=" + $("#make").val() + "&model=" + $("#model").val() + "&body=" + body['bodytitle'],
//             type: "GET",
//             dataType: "json",
//             success: function (data) {
              
//               	let target = data[0];
//             	opt.innerHTML = `
//               		<img src="https://api.carcovers.com/img/bodies/` + target['targetfolder'] + `/` + target['targetname'] + `">
//               		<p>` + body['bodytitle'] + `</p>`; 
//             }
//           });
//           document.getElementById("truck-panel-grid").appendChild(opt);
//           document.getElementById("pops-options").appendChild(opt);
//         }
//     });
//     $(".truck-body-item").click(function() {
      	
//       	collectionUrl = "/collections/"+vehicleType+"-covers/" + $(this).attr("name");
//     	let url = window.location.origin + collectionUrl;
//       	window.location.href = url;
//     });
//     if ($("#type").val().toLowerCase() == 'truck') {
     
//       $(".body-selector").show();
//       $("#body").click(function() { $('.body-selector').show(); });
//       removeOptions("body");
//     } else {
      
//       $("#body").click(function() { $('.body-selector').hide(); });
//     }
//   }
// }

// $("#body").change(function() {
  	
//     var selected = $(this).val().toLowerCase();
  
//   	var vehicleType = document.querySelector(".vehicle-select #type").value.toLocaleLowerCase();
//     let url = window.location.origin + "/collections/"+vehicleType+"-covers/" + selected;
//   	$("#link").attr("href", url);
//   	$(".submit-btn").css("background-color", "rgb(25 127 207)");
//   	window.location.href = url;
// });

// function setCheckedHandle(data){
// 	vehHandleCheck = data;
// }
// function removeOptions(element) {
//     var select = document.getElementById(element);

//     for (i = select.length - 1; i >= 1; i--) {
//       select.remove(i);
//     }
// }
  
 
//   $(document).ready(function(){
   
//   if($(window).width() <= 480 ){
     
//           $("#carform > div").on('mousedown',evt => {
      
//       evt.preventDefault()
//       document.body.addEventListener('touchstart', function(e){ e.preventDefault(); });
//     })
//   	  $('#carform > div').click(function(evt){
        
//         $('.pops').fadeIn();
//         $('body').css('overflow', 'hidden');
//         $('.pops').click(evt => {
        	
            
//           	  if(evt.target.dataset.form === "#type"){
//          document.getElementById("pops-options").innerHTML = ""
//         }
//             $(`${evt.target.dataset.form}`).val(evt.target.dataset.value)
//           $(`${evt.target.dataset.form}`).change();
        
//         })
        
//            if(evt.target.id === "year"){
  
     
     
//          document.getElementById("pops-options").innerHTML = ""
//       $.ajax({
//     url: "https://api.carcovers.com/getCars.php?type=" + selected.replace(/-/g, " "),
//     type: "GET",
//     dataType: "json",
//     success: function (data) {
//       console.log("API getCars Data Result:",data);
      
//       console.log(" selector change test4")
//       carTypeChange(data);
//     }
//   });
    
//     }
//     });
 
    
//     $('.cls-pop').click(function(){
//         $('.pops').fadeOut();
//       $('body').css('overflow', 'auto');
//     });
//   }
  
// })

var selected =  vehicleInfo.vehtype;

  $("#type").change(function() {
     var selected = $(this).val();
   	$("#year").prop("disabled", false);
   	$("#year").attr("style", "display:block;");
      apiCall("type", selected)
  });
    $("#year").change(function() {
     var selected = $(this).val();
   	$("#make").prop("disabled", false);
	$("#make").attr("style", "display:block;");
      apiCall("year", selected)
  });


function apiCall(inputType,selectedInput){
  let  url = `https://api.carcovers.com/getCars.php?`
  var opt = document.createElement("option");
  switch(inputType){
    case inputType = "type":
     url = url += `type=${selectedInput}`
    break;
    case inputType = "year":
      url = url += `type=${$("#type").val()}&year=${selectedInput}`
      let tester = $(opt).attr("data-value", rowInput);
  }
$.ajax({
  url: url,
  type:"GET",
  dataType:"json",
  success: function(data){
    data.forEach(function(rowInput){
         
         opt.value = rowInput;
         opt.innerHTML = rowInput;
         document.getElementById("year").appendChild(opt);
      
       	var opt = document.createElement("div");
      	$(opt).attr("data-value", rowInput);
     	$(opt).attr("data-form", "#year");
      	opt.innerHTML = rowInput;
       
   document.getElementById("pops-options").appendChild(opt);  
    })}
})
  console.log("This is a test for adding make", url)
  console.log(tester)
}



