<?php
error_reporting(E_ALL);
ini_set("display_errors", 1);
$item_1_count = $_POST['item1count'];
$item_2_count = $_POST['item2count'];
$item_3_count = $_POST['item3count'];
$item_4_count = $_POST['item4count'];
$item_5_count = $_POST['item5count'];
$item_6_count = $_POST['item6count'];
$ShippingCost = $_POST['shipping-Option'];
$password = $_POST['userPassword'];
$username = $_POST['email'];

$ShippingName;

if($ShippingCost == 0){
     $ShippingName = "Seven Day";
}
elseif ($ShippingCost == 5) {
     $ShippingName = "Three Day";
}
elseif ($ShippingCost == 50) {
     $ShippingName = "Over Night";
}

$TotalCost = $item_1_count*250 + $item_2_count*200 + $item_3_count*150 + $item_4_count*350 + $item_5_count*7 + $item_6_count*1000 + $ShippingCost;

echo "<div>Hello {$username} welcome to your <u><b>DOOM!!!</b></u> *cough *cough, I mean your order receipt</div>";
echo "<div>Your password is {$password}</div>";

echo "<table border='1'>";

echo "
     <tr bgcolor='lime'>
          <th></th>
          <th>Quantity</th>
          <th>Cost Per Item</th>
          <th>Sub Total</th>
     </tr>

     <tr bgcolor='lime'>
          <td>Golden Retreiver</td>
          <td bgcolor='aqua'>$item_1_count</td>
          <td bgcolor='aqua'> $250 </td>
          <td bgcolor='aqua'>$" . ($item_1_count*250 ). "</td>
     </tr>
     <tr bgcolor='lime'>
          <td>Bulldog</td>
          <td bgcolor='aqua'>$item_2_count</td>
          <td bgcolor='aqua'> $200 </td>
          <td bgcolor='aqua'>$" . ($item_2_count*200) . "</td>

     </tr>

     <tr bgcolor='lime'>
          <td>Lab/Retreiver Mix</td>
          <td bgcolor='aqua'>$item_3_count</td>
          <td bgcolor='aqua'> $150 </td>
          <td bgcolor='aqua'>$" . ($item_3_count*150 ). "</td>

     </tr>

     <tr bgcolor='lime'>
          <td>Corgi</td>
          <td bgcolor='aqua'>$item_4_count</td>
          <td bgcolor='aqua'> $350 </td>
          <td bgcolor='aqua'>$" . ($item_4_count*350 ). "</td>

     </tr>

     <tr bgcolor='lime'>
          <td>Hampster/Poodle Mix</td>
          <td bgcolor='aqua'>$item_5_count</td>
          <td bgcolor='aqua'> $7 </td>
          <td bgcolor='aqua'>$" .($item_5_count*7) ."</td>

     </tr>

     <tr bgcolor='lime'>
          <td>Saharan Tree Dog</td>
          <td bgcolor='aqua'>$item_6_count</td>
          <td bgcolor='aqua'> $1000 </td>
          <td bgcolor='aqua'>$". ($item_6_count*1000 )."</td>

     </tr>

     <tr bgcolor='lime'>
          <td>Shipping</td>
          <td colspan='2' bgcolor='aqua'>$ShippingName</td>
          <td bgcolor='aqua'>$$ShippingCost</td>
     </tr>

     <tr bgcolor='lime'>
          <td colspan='3'>Total Cost</td>
          <td>$$TotalCost</td>
     </tr>
";



echo "</table>";

?>
