       
       
<!DOCTYPE html>
<htmL>
    <head>
        <title>
            Hidden Gem
        </title>
        
        <meta name="viewport" content="width = device-width, initial-scale = 1">
    
        <link rel="stylesheet" type="text/css" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
       
       
<script type='text/javascript'>
<?php
  $id = $_GET["id"];
  echo "var id=$id\n";
  ?>
  </script>

        <script type='text/javascript' src='search.js' >        </script>




       



        <script src="vex-4.0.1/dist/js/vex.combined.min.js"></script>
        <script>vex.defaultOptions.className = 'vex-theme-os'</script>
        <link rel="stylesheet" href="vex-4.0.1/dist/css/vex.css" />
        <link rel="stylesheet" href="vex-4.0.1/dist/css/vex-theme-os.css" />

        
        
    </head>
    <body onload='init()'>

         <div class="container">


        <div id="menu" class="page-header">

            <input type="submit" value="menu" id="menu" align="left"/> <input type="submit" value="login" id="menu" align="right"/>


        </div>

        
        <div id="box">




            <?php 

          

            $conn = new PDO ("mysql:host=localhost;dbname=nevesl;", "nevesl", "h8JK9oq8");

            $results = $conn->query("SELECT * FROM pointsofinterest WHERE ID = '$id'");


            $inf = $results->fetch();





            echo (" <div id='content_desc' class='jumbotron'>");
            echo (" <p> <img src='https://edward2.solent.ac.uk/~nevesl/Project/project2019/images/1-4.png' alt='$INF[img_desc]' style='width:128px;height:128px;'>  ");
                   
            echo (" <h2 align='left'>$inf[name]</h2>  <h2 align='left' id='name'> </h2> </p>'");
            echo (" <h3 aling='left'>  $inf[region] </h3>");
            echo (" <p align='left'>   $inf[type] </p>");


            echo ("</br>");
            echo ("</br>");

            echo ("<input type='button' id='add_review' class='btn btn-secondary' value='Add a review here'/>");
            echo (" </div> ");
            ?>
                    

        </div>

        <div id="output">
            <h2 align="centre"> Reviews </h2>


            <?php 

            $conn = new PDO ("mysql:host=localhost;dbname=nevesl;", "nevesl", "h8JK9oq8");

            $results = $conn->query("SELECT * FROM poi_reviews WHERE poi_id = '$id'");


            $info = $results->fetch();

            while ($info != false)
            {

                echo("

                <h3> Username: $info[username]    </h3>
                <p hidden> $info[id] </p>
                <p> $info[review] </p>
                <br>
                <input type='button' value='upvote'/>

                </br>
                </br>

                ");
                
                $info = $results->fetch();
            }
            ?>

        </div>

        </div>



        


    </div>






        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
      
      
      
       

    </body>

</htmL>
