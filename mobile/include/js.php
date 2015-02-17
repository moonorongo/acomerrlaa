  <script type="text/javascript">
  

    estadoNegocio = true;
  
  
    $(document).ready(function() {

      if (!estadoNegocio) {
        $("#content").hide();
        $("#footer").hide();
        $("#mensajeCerrado").show();
      }
      
      $(".filasResaltadas tr:even").addClass("even");
      

      function filterPath(string) {
      return string
        .replace(/^\//,'')
        .replace(/(index|default).[a-zA-Z]{3,4}$/,'')
        .replace(/\/$/,'');
      }
      var locationPath = filterPath(location.pathname);
      var scrollElem = scrollableElement('html', 'body');

      $('a[href*=#]').each(function() {
        var thisPath = filterPath(this.pathname) || locationPath;
        if (  locationPath == thisPath
        && (location.hostname == this.hostname || !this.hostname)
        && this.hash.replace(/#/,'') ) {
          var $target = $(this.hash), target = this.hash;
          if (target) {
            var targetOffset = $target.offset().top;
            $(this).click(function(event) {
              event.preventDefault();
              $(scrollElem).animate({scrollTop: targetOffset}, 400, function() {
                location.hash = target;
              });
            });
          }
        }
      });

      // use the first element that is "scrollable"
      function scrollableElement(els) {
        for (var i = 0, argLength = arguments.length; i <argLength; i++) {
          var el = arguments[i],
              $scrollElement = $(el);
          if ($scrollElement.scrollTop()> 0) {
            return el;
          } else {
            $scrollElement.scrollTop(1);
            var isScrollable = $scrollElement.scrollTop()> 0;
            $scrollElement.scrollTop(0);
            if (isScrollable) {
              return el;
            }
          }
        }
        return [];
      }

    });
    
    
    function obtenerNovedades() {

      $.getJSON('precios.json', function(objeto){
              for(i=0; i<objeto.length; i++) {
                if(objeto[i].novedad == 1) {
                  $('#listaNovedades').append('<li><span style="color: red; font-size: 12px;">¡NUEVA!</span> '+ objeto[i].titulo +' <span style="color: red; font-size: 12px;">¡NUEVA!</span></li>');
                }
              }              
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
                    variedad += '<td colspan="3" align="left" style="color: red;"><br /><h2 style="display: inline;">'+ objeto[i].categoria +'</h2> - <strong>'+ objeto[i].descripcionFull +'</strong></td>';
                    variedad +=  '</tr>';

                    variedad +=  '<tr>';
                      variedad +=  '<th align="left">Variedad</th>';
                      variedad +=  '<th>Precio</th>';
                      variedad +=  '<th>Mitad</th> ';
                    variedad +=  '</tr>';
                    
                    variedad +=  '<tr>';
                    variedad += '<td align="left"><strong>'+ objeto[i].codigoReceta +'.</strong> '+ objeto[i].titulo +'</td>';
                    variedad += '<td align="center">$ '+ objeto[i].precio +'</td>';
                    variedad += '<td align="center">$ '+ parseInt(Math.ceil((objeto[i].precio / 2)) + 2)  +'</td>';
                    variedad +=  '</tr>';
                  } else {
                    variedad =  '<tr>';
                    variedad += '<td align="left"><strong>'+ objeto[i].codigoReceta +'.</strong> '+ objeto[i].titulo +'</td>';
                    variedad += '<td align="center">$ '+ objeto[i].precio +'</td>';
                    variedad += '<td align="center">$ '+ parseInt(Math.ceil((objeto[i].precio / 2)) + 2)  +'</td>';
                    variedad +=  '</tr>';
                  }
                  
                  $('#listaPrecios').append(variedad);
                }
              }              
      });
    } 
    
    
    
  </script>
