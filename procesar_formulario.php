<?php
// procesar_formulario.php
header('Content-Type: application/json');

// 1. Verificar que sea una solicitud POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // 2. Limpiar y recoger datos
    $nombre = strip_tags(trim($_POST["nombre"] ?? ''));
    $correo_cliente = filter_var(trim($_POST["correo"] ?? ''), FILTER_SANITIZE_EMAIL);
    $telefono = strip_tags(trim($_POST["celular"] ?? ($_POST["telefono"] ?? '')));
    $mensaje = strip_tags(trim($_POST["detalle"] ?? ($_POST["mensaje"] ?? '')));
    $seguro = strip_tags(trim($_POST["seguros"] ?? ''));
    
    // Dependientes (si existen)
    $dependientesInfo = "";
    if (isset($_POST['parentesco']) && is_array($_POST['parentesco'])) {
        $dependientesInfo .= "\n--- Dependientes ---\n";
        for ($i = 0; $i < count($_POST['parentesco']); $i++) {
            $par = $_POST['parentesco'][$i];
            $fec = $_POST['fechaDep'][$i] ?? '';
            $sex = $_POST['sexoDep'][$i] ?? '';
            $dependientesInfo .= "- $par ($sex) - Nac: $fec\n";
        }
    }

    // 3. Validaciones básicas
    if (empty($nombre) || empty($correo_cliente)) {
        echo json_encode(["success" => false, "message" => "Por favor completa los datos obligatorios."]);
        exit;
    }

    // =======================================================
    // 4. CONFIGURACIÓN DEL CORREO CORPORATIVO (¡CLAVE!)
    // =======================================================
    
    // A) ¿A quién le llega el correo? (A ti, la empresa)
    $destinatario = "informes@previseguros.com.pe"; 

    // B) Asunto del correo
    $asunto = "Nuevo Lead Web: $nombre";
    if ($seguro) { $asunto .= " - Interés: $seguro"; }

    // C) Cuerpo del mensaje
    $cuerpo = "Haz recibido una nueva solicitud desde la web:\n\n";
    $cuerpo .= "DATOS DEL CLIENTE:\n";
    $cuerpo .= "------------------\n";
    $cuerpo .= "Nombre:   $nombre\n";
    $cuerpo .= "Correo:   $correo_cliente\n";
    $cuerpo .= "Teléfono: $telefono\n";
    if ($seguro) {
        $cuerpo .= "Seguro:   $seguro\n";
        $cuerpo .= "Tipo:     " . ($_POST['categoria'] ?? '-') . "\n";
    }
    // Datos de salud adicionales si existen
    if (!empty($_POST['fechaTitular'])) {
        $cuerpo .= "F. Nac:   " . $_POST['fechaTitular'] . "\n";
        $cuerpo .= "Sexo:     " . $_POST['sexoTitular'] . "\n";
    }
    
    $cuerpo .= $dependientesInfo;
    
    $cuerpo .= "\nMENSAJE ADICIONAL:\n";
    $cuerpo .= "$mensaje\n";
    $cuerpo .= "\n------------------\n";
    $cuerpo .= "Enviado el " . date('d/m/Y H:i:s');

    // D) Encabezados (Headers) para evitar SPAM
    // IMPORTANTE: El 'From' DEBE ser tu correo corporativo, NO el del cliente.
    // Si pones el correo del cliente en 'From', Gmail/Outlook rechazarán el correo.
    $headers = "From: Web Previseguros <informes@previseguros.com.pe>\r\n"; 
    
    // El 'Reply-To' permite que cuando le des a "Responder", le escribas al cliente.
    $headers .= "Reply-To: $correo_cliente\r\n"; 
    
    $headers .= "X-Mailer: PHP/" . phpversion();

    // 5. Enviar
    if (mail($destinatario, $asunto, $cuerpo, $headers)) {
        echo json_encode(["success" => true, "message" => "¡Gracias! Tu solicitud ha sido enviada correctamente."]);
    } else {
        echo json_encode(["success" => false, "message" => "Hubo un error en el servidor de correo."]);
    }

} else {
    echo json_encode(["success" => false, "message" => "Acceso no permitido."]);
}
?>