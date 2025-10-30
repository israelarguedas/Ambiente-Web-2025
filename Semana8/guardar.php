<?php 
    // $nombre = "Isra Arguedas";
    // $correo = "isra.arguedas@correo.com";
    // $telefono = "88886666";

    // $arreglo = [0, 55, 78, 100];
    // echo $arreglo[1];

    // $colores = ['azul', 'amarillo', 'anaranjado'];

    // $arreglo_asociativo = [
    //     "nombre" => "Camila Arguedas",
    //     "correo" => "cami.arguedas@correo.com",
    //     "telefono" => "88656466"
    // ];

    // echo " ";
    // echo $arreglo_asociativo ['nombre'];
    // echo " ";
    // echo $arreglo_asociativo ['telefono'];
    // echo " ";
    // echo $arreglo_asociativo ['correo'];

    // $personas = [
    // [
    //     "nombre" => "Eduardo Arguedas",
    //     "correo" => "edu.arguedas@correo.com",
    //     "telefono" => "88141197"
    // ];  
    // [
    //     "nombre" => "Kath Arguedas",
    //     "correo" => "katvl.arguedas@correo.com",
    //     "telefono" => "88651566"
    // ];
    // [
    //     "nombre" => "Kathia Gonzalez",
    //     "correo" => "ka.gonzalez@correo.com",
    //     "telefono" => "83345271"
    // ];
    // ];

    //$personas[1]['correo'];

    //***************************************
    //********* Variables de sesion *********
    //***************************************
    session_start();


    if ($_SERVER['REQUEST_METHOD'] === 'POST') {

        $nombre = trim($_POST['nombre'] ?? ''); // func trim elimina espacio en blanco der o izq // ?? '' si el valor no es encontrado, coloca el valor vacio 
        $correo = trim($_POST['correo'] ?? '');
        $telefono = trim($_POST['telefono'] ?? '');

        // echo $nombre;
        // echo $correo;
        // echo $telefono;

        if($nombre && $correo && $telefono){

            if(!isset($_SESSION['personas'])) {
                $_SESSION['personas'] = []; 
            } 

            $_SESSION['personas'][] = [
                "nombre" => $nombre,
                "correo" => $correo,
                "telefono" => $telefono
            ]; 

        }
    }

     //var_dump($_SESSION['personas']); //Imprimir el elemento en la variable sesion
    //exit;

    header('Location: index.php');
    exit;
?>