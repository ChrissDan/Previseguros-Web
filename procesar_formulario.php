<?php
// procesar_formulario.php
header('Content-Type: application/json');

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // 1. Recibir datos
    $nombre = strip_tags(trim($_POST["nombre"] ?? ''));
    $correo = filter_var(trim($_POST["correo"] ?? ''), FILTER_SANITIZE_EMAIL);
    // Combina campo 'celular' o 'telefono' según cuál use el form
    $telefono = strip_tags(trim($_POST["celular"] ?? ($_POST["telefono"] ?? '')));
    $mensaje = strip_tags(trim($_POST["detalle"] ?? ($_POST["mensaje"] ?? '')));
    $seguro = strip_tags(trim($_POST["seguros"] ?? ''));

    // 2. Validación simple
    if (empty($nombre) || empty($correo)) {
        echo json_encode(["success" => false, "message" => "Nombre y correo son obligatorios."]);
        exit;
    }

    // 3. Configurar correo
    // NOTA: En hostings gratuitos, usa el correo que te den ellos o Gmail, pero a veces falla.
    $to = "laboulade2@gmail.com"; 
    $subject = "Nuevo Contacto Web: $nombre";
    
    $body = "Nombre: $nombre\nCorreo: $correo\nTeléfono: $telefono\n";
    if($seguro) $body .= "Interesado en: $seguro\n";
    $body .= "Mensaje:\n$mensaje\n";

    $headers = "From: no-reply@misitio.com\r\n";
    $headers .= "Reply-To: $correo\r\n";

    // 4. Enviar
    if (mail($to, $subject, $body, $headers)) {
        echo json_encode(["success" => true, "message" => "Correo enviado correctamente."]);
    } else {
        echo json_encode(["success" => false, "message" => "Error del servidor al enviar correo."]);
    }
} else {
    echo json_encode(["success" => false, "message" => "Acceso denegado."]);
}
?>