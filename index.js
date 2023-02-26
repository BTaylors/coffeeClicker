<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <link rel="stylesheet" type="text/css" href="style.css">
  <title>Coffee Clicker</title>
  <script defer type="text/javascript" src="data.js"></script>
  <script defer type="text/javascript" src="script.js"></script>
</head>

<body>
  <div class="column-container">
    <div class="column"></br>
      Click the coffee!
      <div class="container left">
        <div class="counter-container">Coffee: <span id="coffee_counter">0</span></div>
        <div class="cps-container"><span id="cps">0</span> coffee/second</div>
        <div id="big_coffee">☕️</div>
      </div>
    </div>
    <div class="column">
      <div class="column-header">Coffee Producers</div>
      <div class="container right" id="producer_container">
      </div>
    </div>

</body>

</html>
