function centrarContenidos() {
  
      jData = getWindowData();
      
      marginLeft = 0 - (jData.anchoContainer / 2) + (jData.anchoVentana / 2);
      marginTop = 0 - (jData.altoContainer / 2) + (jData.altoVentana / 2);
            
      setMargin(marginLeft, marginTop, "css");
}


function centrarContenidosAnimado() {
  
      jData = getWindowData();
      
      marginLeft = 0 - (jData.anchoContainer / 2) + (jData.anchoVentana / 2);
      marginTop = 0 - (jData.altoContainer / 2) + (jData.altoVentana / 2);
            
      setMargin(marginLeft, marginTop, "animate");
      asignarAccionesMenu();
}




function setMargin(marginLeft, marginTop, method) {
  switch(method) {
    case 'css'      :   $('#container').css('marginLeft',marginLeft);
                        $('#container').css('marginTop',marginTop);
                        break;
    case 'animate'  :   $('#container').animate({ marginLeft: marginLeft, marginTop: marginTop },500, "swing");
                        break;
  }
}




// getWindowData: Devuelve el ancho/alto de la ventana del navegador, asi como tambien del contenedor
function getWindowData() {
      anchoVentana = $(window).width();
      altoVentana = $(window).height();
      anchoContainer = $('#container').width();
      altoContainer = $('#container').height();
      
      temp = { "anchoVentana":anchoVentana, "altoVentana":altoVentana, "anchoContainer": anchoContainer, "altoContainer": altoContainer };
      
      return temp;
}





// setAnimate: Pone o quita la animacion del boton seleccionado (1,2,3,4)
function setAnimate(nroBoton, on, revert) {
  revert = !revert;
  switch(nroBoton) {
    case 1 :  if(on) {
      
                if(revert) { 
                  $('#porcion2').hover(function() {
                      $(this).animate({ top: '138px', left: '428px'}, SPEED_ANIM);
                    }, function() {
                      $(this).animate({ top: '173px', left: '348px'}, SPEED_ANIM);
                    });
                } else {
                  $('#porcion2').hover(function() {
                      $(this).animate({ top: '173px', left: '348px'}, SPEED_ANIM);
                    }, function() {
                      $(this).animate({ top: '138px', left: '428px'}, SPEED_ANIM);
                    });
                }
              } else { $('#porcion2').unbind(); }
              break
              
              
    case 2 :  if(on) {
                if(revert) { 
                  $('#porcion3').hover(function() {
                      $(this).animate({ top: '369px', left: '428px'}, SPEED_ANIM);
                    }, function() {
                      $(this).animate({ top: '338px', left: '349px'}, SPEED_ANIM);
                    });

                } else {
                  $('#porcion3').hover(function() {
                      $(this).animate({ top: '338px', left: '349px'}, SPEED_ANIM);
                    }, function() {
                      $(this).animate({ top: '369px', left: '428px'}, SPEED_ANIM);
                    });
                }
              } else { $('#porcion3').unbind(); }
              break
    case 3 :  if(on) {
                if(revert) { 
                  $('#porcion6').hover(function() {
                      $(this).animate({ top: '369px', left: '17px'}, SPEED_ANIM);
                    }, function() {
                      $(this).animate({ top: '335px', left: '102px'}, SPEED_ANIM);
                    });
                } else {
                  $('#porcion6').hover(function() {
                      $(this).animate({ top: '335px', left: '102px'}, SPEED_ANIM);
                    }, function() {
                      $(this).animate({ top: '369px', left: '17px'}, SPEED_ANIM);
                    });
                }
              } else { $('#porcion6').unbind(); }
              break
    case 4 :  if(on) {
                if(revert) { 
                  $('#porcion7').hover(function() {
                      $(this).animate({ top: '142px', left: '17px'}, SPEED_ANIM);
                    }, function() {
                      $(this).animate({ top: '175px', left: '102px'}, SPEED_ANIM);
                    });
                } else {
                  $('#porcion7').hover(function() {
                      $(this).animate({ top: '175px', left: '102px'}, SPEED_ANIM);
                    }, function() {
                      $(this).animate({ top: '142px', left: '17px'}, SPEED_ANIM);
                    });
                }
              } else { $('#porcion7').unbind(); }
              break
  }
}




function setAjusteVentana(menu) {
  switch(menu) {
    case 1 : 
          $(window).resize(function() {
            jData = getWindowData();

            marginLeft = (0 - (jData.anchoContainer / 2) + (jData.anchoVentana / 2)) - (jData.anchoVentana / 2) + 44;
            marginTop = (0 - (jData.altoContainer / 2) + (jData.altoVentana / 2)) + (jData.altoVentana / 2) - 54;

            if (marginLeft < -1278) marginLeft = -1278;
            if(marginTop > 0) marginTop = 0;

            setMargin(marginLeft, marginTop, "css");
          });
          break;
          
    case 2 : 
          /* Modifico evento resize window para que quite el evento - NO NECESITA AJUSTE A LA DERECHA*/
          $(window).unbind();
          break;
    case 3 : 
          $(window).resize(function() {
            jData = getWindowData();

            marginLeft = (0 - (jData.anchoContainer / 2) + (jData.anchoVentana / 2)) + (jData.anchoVentana / 2) - 44;
            marginTop = (0 - (jData.altoContainer / 2) + (jData.altoVentana / 2)) - (jData.altoVentana / 2) + 54;

            if(marginLeft > 0) marginLeft = 0;
            if (marginTop < -545) marginTop = -545;
            setMargin(marginLeft, marginTop, "css");
          });
          break;

    case 4 : 
          $(window).resize(function() {
             
              jData = getWindowData();

              marginLeft = (0 - (jData.anchoContainer / 2) + (jData.anchoVentana / 2)) + (jData.anchoVentana / 2) - 44;
              marginTop = (0 - (jData.altoContainer / 2) + (jData.altoVentana / 2)) + (jData.altoVentana / 2) - 54;

              if(marginLeft > 0) marginLeft = 0;
              if(marginTop > 0) marginTop = 0;
              
              setMargin(marginLeft, marginTop, "css");
          });    
          break;
          
    case 0 : 
              $(window).resize(function() {
                  centrarContenidos();
              });
              break;
  }
}


function unbind_buttons(){
  $("#porcion2").unbind();
  $("#porcion3").unbind();
  $("#porcion6").unbind();
  $("#porcion7").unbind();
}


function asignarAccionesMenu() {

/* Animaciones de botones Menu Principal */
/* BOTON PROMOS */
  
      setAnimate(1, true, false);
        
      $('#porcion2').click(function() {

          //$(this).unbind(); // quito eventos hover y click
          unbind_buttons();

          jData = getWindowData();

          marginLeft = (0 - (jData.anchoContainer / 2) + (jData.anchoVentana / 2)) - (jData.anchoVentana / 2) + 44;
          marginTop = (0 - (jData.altoContainer / 2) + (jData.altoVentana / 2)) + (jData.altoVentana / 2) - 54;

          if (marginLeft < -1278) marginLeft = -1278;
          if(marginTop > 0) marginTop = 0;

          setMargin(marginLeft, marginTop, "animate");

          setAnimate(1,true,true);
          $(this).click(function(){
            $(this).unbind();
            centrarContenidosAnimado();
          });

          setAjusteVentana(1); // 1,2,3,4: opciones menues - 0: centro;
          

      });
/* FIN BOTON PROMOS */        



/* Boton COBERTURA */

      setAnimate(4, true, false);
      
      $('#porcion7').click(function() {

          unbind_buttons();
          jData = getWindowData();

          marginLeft = (0 - (jData.anchoContainer / 2) + (jData.anchoVentana / 2)) + (jData.anchoVentana / 2) - 44;
          marginTop = (0 - (jData.altoContainer / 2) + (jData.altoVentana / 2)) + (jData.altoVentana / 2) - 54;
          
          if(marginLeft > 0) marginLeft = 0;
          if(marginTop > 0) marginTop = 0;
          
          setMargin(marginLeft, marginTop,"animate");
//          $(this).unbind();

          setAnimate(4,true,true);
          $(this).click(function(){
            $(this).unbind();
            centrarContenidosAnimado();
          });

          setAjusteVentana(4); // 1,2,3,4: opciones menues - 0: centro;


      });
/* FIN BOTON COBERTURA */


/* BOTON CONTACTO e INFORMACION INSTITUCIONAL */
      setAnimate(3, true, false);
        
      $('#porcion6').click(function() {

          unbind_buttons();
          jData = getWindowData();

          marginLeft = (0 - (jData.anchoContainer / 2) + (jData.anchoVentana / 2)) + (jData.anchoVentana / 2) - 44;
          marginTop = (0 - (jData.altoContainer / 2) + (jData.altoVentana / 2)) - (jData.altoVentana / 2) + 54;

          if(marginLeft > 0) marginLeft = 0;
          if (marginTop < -545) marginTop = -545;

          setMargin(marginLeft, marginTop, "animate");
//          $(this).unbind();
          setAnimate(3,true,true);
          $(this).click(function(){
            $(this).unbind();
            centrarContenidosAnimado();
          });

          setAjusteVentana(3); // 1,2,3,4: opciones menues - 0: centro;
      });
/* FIN BOTON INFO */        
        
  
  
  /* Boton Variedades */
      setAnimate(2, true, false);
      $('#porcion3').click(function() {

          $("#opcionVariedades").lionbars();
          
          unbind_buttons();
          jData = getWindowData();

          marginLeft = (0 - (jData.anchoContainer / 2) + (jData.anchoVentana / 2)) - (jData.anchoVentana / 2) + 44;
          marginTop = (0 - (jData.altoContainer / 2) + (jData.altoVentana / 2)) - (jData.altoVentana / 2) + 54;

          if (marginLeft < -1278) marginLeft = -1278;
          if (marginTop < -545) marginTop = -545;

          setMargin(marginLeft, marginTop, "animate");
          //$(this).unbind();
          setAnimate(2,true,true);
          $(this).click(function(){
            $(this).unbind();
            centrarContenidosAnimado();
          });

          setAjusteVentana(2); // 1,2,3,4: opciones menues - 0: centro;
          
          
      });
}



function obtenerListaPrecios() {

      $.getJSON('precios.json', function(objeto){
              categoriaAnterior = '';
              for(i=0; i<objeto.length; i++) {
                if(objeto[i].enable == 1) {
                  
                  if(categoriaAnterior != objeto[i].categoria) {
                    categoriaAnterior = objeto[i].categoria;
                    variedad =  '<tr>';
                    variedad += '<td colspan="3" align="left" style="color: #c3451c;"><br /><h2 style="display: inline;">'+ objeto[i].categoria +'</h2> - <strong>'+ objeto[i].descripcionFull +'</strong></td>';
                    variedad +=  '</tr>';

                    variedad +=  '<tr>';
                      variedad +=  '<th align="left">Variedad</th>';
                      variedad +=  '<th>Precio</th>';
                      if(objeto[i].categoria != "Postres") {
                      variedad +=  '<th>Mitad</th> '; 
                    } else {
                      variedad +=  '<th>&nbsp;</th> '; 
                    }
                    
                    variedad +=  '</tr>';
                    
                    variedad +=  '<tr>';
                    variedad += '<td align="left"><strong>'+ objeto[i].codigoReceta +'.</strong> '+ objeto[i].titulo +'</td>';
                    variedad += '<td align="center">$ '+ objeto[i].precio +'</td>';
                    if(objeto[i].categoria != "Postres") {
                      variedad += '<td align="center">$ '+ parseInt(Math.ceil((objeto[i].precio / 2)) + 2)  +'</td>';
                    } else {
                      variedad += '<td align="center">&nbsp;</td>';
                    }

                    variedad +=  '</tr>';
                  } else {
                    variedad =  '<tr>';
                    variedad += '<td align="left"><strong>'+ objeto[i].codigoReceta +'.</strong> '+ objeto[i].titulo +'</td>';
                    variedad += '<td align="center">$ '+ objeto[i].precio +'</td>';

                    if(objeto[i].categoria != "Postres") {
                      variedad += '<td align="center">$ '+ parseInt(Math.ceil((objeto[i].precio / 2)) + 2)  +'</td>';
                    } else {
                      variedad += '<td align="center">&nbsp;</td>';
                    }
                    variedad +=  '</tr>';
                  }
                  
                  $('#listaPrecios').append(variedad);
                }
              }              
      });
    } 


