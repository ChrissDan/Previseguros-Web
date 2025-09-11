<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre  = htmlspecialchars($_POST["nombre"]);
    $correo  = htmlspecialchars($_POST["correo"]);
    $detalle = htmlspecialchars($_POST["detalle"]);

    $to = "laboulade2@gmail.com";  // tu correo
    $subject = "Nuevo mensaje desde el formulario";
    $body = "
      Nombre: $nombre\n
      Correo: $correo\n
      Mensaje: $detalle
    ";
    $headers = "From: no-reply@tu-dominio.com\r\n";
    $headers .= "Reply-To: $correo\r\n";

    if (mail($to, $subject, $body, $headers)) {
        echo "<h2>✅ Gracias, $nombre. Tu mensaje fue enviado con éxito.</h2>";
    } else {
        echo "<h2>❌ Ocurrió un error, intenta de nuevo más tarde.</h2>";
    }
}
?>
