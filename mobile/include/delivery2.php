    <div id="delivery"></div>
    <div class="contenidos">    
      <a href="#delivery" onclick="abrir(3); this.blur();"><img src="img/delivery.png" style="vertical-align: middle;" /><small>Click para ver la lista</small></a><br />
      <div id="preciosDelivery" class="filasResaltadas" style="display:block">
      <strong>Tiempo de demora: Aproximadamente 30-40 minutos (depende de la cercania, ver mapa de cobertura)</strong><br /><br />



        <table align="center">
          <tr>
            <th>Variedad</th>
            <th>Precio</th>
            <th>Mitad (*)</th> 
          </tr> 
          <?php
            $contador = 0;
            for($row=3; $row<45; $row++) { 
              if ($data->val($row,"G",3) == 1) {
                $contador++;
                $new = ($data->val($row,"H",3) == 1)? ' - <strong style="color: red">¡NUEVA!</strong>' : '';
          ?>
              <tr>
                <td width="250" align="left"><? echo $data->val($row,"A",3) . $new; ?> </td>
                <td width="50" align="right"><? echo $data->val($row,"C",3) + $data->val($row,"F",3); ?> </td>
                <td width="50" align="right"><? echo $data->val($row,"I",3) + $data->val($row,"F",3); ?></td>
              </tr>
          <?  } 
            } ?>
        </table>    
        <br /><br />
         Tambien podes pedir mitades (compra minima 1 pizza).

          <?
            if ($contador == 0) {
              ?>No disponemos variedades en este momento.
              <?
            }
          ?> 
          <br /><br /><a href="#container" onClick="cerrarTodo();">Cerrar</a>      
      </div>
    </div>




    <br />
