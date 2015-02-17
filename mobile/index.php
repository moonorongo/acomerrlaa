<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<title>a Comerrlaa!! - La pizza mas rica de Bahia! - VERSION MOVIL</title>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <link rel="stylesheet" type="text/css" href="estilos.css">
  
</head>
<body> 
<img src="img/logo.gif" /><br /><br />
Pedidos al 154491230<br />
Lunes a Viernes: 12:00 a 13:30 y 20:30 a 23:00<br />
Sabados y Domingos: 20:30 a 23:00<br />
Miercoles Cerrado.<br />
<table id="listaPrecios">

<?
  $json = file_get_contents('../precios.json');
  
  $objeto = json_decode($json);
  
  $categoriaAnterior = '';

  for($i=0; $i<count($objeto); $i++) {
    if($objeto[$i]->enable == "1") {
      
      if($categoriaAnterior != $objeto[$i]->categoria) {
        $categoriaAnterior = $objeto[$i]->categoria;
        
        $variedad =  '<tr>' ."\n";
        $variedad .= '<td colspan="3" align="left" style="color: #c3451c;"><br /><h2 style="display: inline;">'. $objeto[$i]->categoria .'</h2> - <strong>'. $objeto[$i]->descripcionFull .'</strong></td>' ."\n";
        $variedad .=  '</tr>' ."\n";

        $variedad .=  '<tr>' ."\n";
          $variedad .=  '<th align="left">Variedad</th>' ."\n";
          $variedad .=  '<th>Precio</th>' ."\n";
          $variedad .=  '<th>Mitad</th> ' ."\n";
        $variedad .=  '</tr>' ."\n";
        
        $variedad .=  '<tr>' ."\n";
        $variedad .= '<td align="left"><strong>'. $objeto[$i]->codigoReceta .'.</strong> '. $objeto[$i]->titulo .'</td>' ."\n";
        $variedad .= '<td align="center">$ '. $objeto[$i]->precio .'</td>' ."\n";
        $variedad .= '<td align="center">$ '. (ceil($objeto[$i]->precio / 2) + 2) .'</td>' ."\n";
        $variedad .=  '</tr>' ."\n";
        echo($variedad);
      } else {
        $variedad =  '<tr>' ."\n";
        $variedad .= '<td align="left"><strong>'. $objeto[$i]->codigoReceta .'.</strong> '. $objeto[$i]->titulo .'</td>' ."\n";
        $variedad .= '<td align="center">$ '. $objeto[$i]->precio .'</td>' ."\n";
        $variedad .= '<td align="center">$ '. (ceil($objeto[$i]->precio / 2) + 2)  .'</td>' ."\n";
        $variedad .=  '</tr>' ."\n";
        echo($variedad);
      
      }
    }
  }  

  
?>
</table>
<br /><br />
  <script type="text/javascript">
    var _gaq = _gaq || [];
    _gaq.push(['_setAccount', 'UA-22531270-1']);
    _gaq.push(['_trackPageview']);

    (function() {
      var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
      ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
      var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
    })();
  </script>

</body>
</html>
