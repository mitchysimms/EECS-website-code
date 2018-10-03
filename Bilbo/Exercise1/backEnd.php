<?php

echo "<table>";

     //first loop
     for ($row=1; $row<101; $row++){

          echo "<tr> \n";

          //second loop
          for ($collumn=1; $collumn <101; $collumn++){


               $print = $row*$collumn;
               echo "<td>$print</td> \n";

          }


          echo '</tr>';
          echo "\n";
     }

echo "</table>";

 ?>
