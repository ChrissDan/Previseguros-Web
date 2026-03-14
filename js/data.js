/* ==========================================
   BASE DE DATOS DE SEGUROS (DATA.JS)
   ========================================== */

const CATALOGO_SEGUROS = {
    PERSONAS: [
        {
            titulo: "Seguro Vehicular",
            descripcion1: "Protege de manera óptima tu vehículo con las mejores coberturas y precios a nivel nacional.",
            descripcion2: "Tenemos planes de Seguro para proteger de manera óptima tu vehículo, con las mejores coberturas y los mejores precios de acuerdo a tu necesidad y la de tu familia, para que manejes con total tranquilidad a nivel nacional e internacional.",
            descripcionDetallada: `
                <strong class="text-[#FF6600]">BENEFICIOS ADICIONALES:</strong>
                <ul class="list-disc pl-5 mt-2 space-y-1 text-gray-600">
                    <li>Chofer de reemplazo</li>
                    <li>Vehículo de reemplazo</li>
                    <li>Auxilio mecánico</li>
                    <li>Atención de central de siniestros las 24 horas</li>
                </ul>
            `,
            img1: "img/perVehicular.webp",
            img2: "img/perVehicular1.webp",
            coberturas: [
                `<div class="flex flex-col"><span class="font-bold text-gray-900 text-lg">Pérdida Total o Parcial</span><span class="text-sm text-gray-600 font-normal mt-1">Indemnización en caso de robo total del vehículo o daños parciales por accidentes.</span></div>`,
                `<div class="flex flex-col"><span class="font-bold text-gray-900 text-lg">Riesgos Políticos y Naturaleza</span><span class="text-sm text-gray-600 font-normal mt-1">Cobertura ante daños por huelgas, vandalismo, sismos o inundaciones.</span></div>`,
                `<div class="flex flex-col"><span class="font-bold text-gray-900 text-lg">Responsabilidad Civil</span><span class="text-sm text-gray-600 font-normal mt-1">Protección frente a daños materiales o personales ocasionados a terceros.</span></div>`,
                `<div class="flex flex-col"><span class="font-bold text-gray-900 text-lg">Cobertura a Ocupantes</span><span class="text-sm text-gray-600 font-normal mt-1">Gastos de curación, invalidez o muerte para los pasajeros del vehículo asegurado.</span></div>`
            ]
        },
        {
            titulo: "Seguro de Hogar",
            descripcion1: "Protege tu casa, patrimonio e inversión contra incendios, robos y desastres naturales.",
            descripcion2: "Sabemos que tu casa, además de ser una gran inversión de tiempo y dinero, es un patrimonio importante para ti y tu familia. Las compañías ofrecen diferentes tipos de productos diseñados para proteger este bien vital.",
            descripcionDetallada: `
                <p class="mb-4 text-gray-600">Te asesoramos para que el plan se ajuste perfectamente a las necesidades de tu familia y tu presupuesto.</p>
                <strong class="text-[#FF6600]">MODALIDADES:</strong>
                <ul class="list-disc pl-5 mt-2 mb-4 space-y-1 text-gray-600">
                    <li>Solo Edificación, Solo Contenidos o Ambos.</li>
                    <li>Solo Incendio Todo Riesgo.</li>
                    <li>Incendio Todo Riesgo más Robo y Asalto.</li>
                </ul>
                </br>
                <strong class="text-[#FF6600]">BENEFICIOS ADICIONALES:</strong>
                <ul class="list-disc pl-5 mt-2 space-y-1 text-gray-600">
                    <li>Responsabilidad Civil ante terceros</li>
                    <li>Pérdida de equipos y dineros en tránsito</li>
                    <li>Accidentes Personales para trabajadores del hogar</li>
                </ul>
            `,
            img1: "img/perHogar.webp",
            img2: "img/perHogar1.webp",
            coberturas: [
                `<div class="flex flex-col"><span class="font-bold text-gray-900 text-lg">Incendio y Explosión</span><span class="text-sm text-gray-600 font-normal mt-1">Cobertura directa por daños estructurales o de contenido derivados de fuego o explosiones.</span></div>`,
                `<div class="flex flex-col"><span class="font-bold text-gray-900 text-lg">Desastres Naturales</span><span class="text-sm text-gray-600 font-normal mt-1">Protección frente a terremotos, sismos, erupciones volcánicas, inundaciones y huaycos.</span></div>`,
                `<div class="flex flex-col"><span class="font-bold text-gray-900 text-lg">Robo y Asalto</span><span class="text-sm text-gray-600 font-normal mt-1">Indemnización por pérdida de bienes, joyas o equipos robados del interior del domicilio.</span></div>`,
                `<div class="flex flex-col"><span class="font-bold text-gray-900 text-lg">Riesgos Políticos</span><span class="text-sm text-gray-600 font-normal mt-1">Cobertura por daños a la propiedad causados por huelgas, conmoción civil o vandalismo.</span></div>`
            ]
        },
        {
            titulo: "Seguro de Salud",
            descripcion1: "Costea total o parcialmente gastos médicos, consultas y emergencias. Planes nacionales e internacionales.",
            descripcion2: "El Seguro de Salud es una póliza contratada para costear de forma total o parcial diversos gastos médicos. Nuestro servicio es personalizado, estando presentes durante todo el proceso de compra, uso y asistencia.",
            descripcionDetallada: `
                <p class="mb-4 text-gray-600">Ponemos a tu disposición diversos planes con una amplia red de clínicas afiliadas, consorcios de médicos, farmacias y laboratorios, con cobertura a nivel nacional y/o internacional.</p>
                <strong class="text-[#FF6600]">MODALIDADES DE ASEGURAMIENTO:</strong>
                <ul class="list-disc pl-5 mt-2 space-y-1 text-gray-600">
                    <li>Asistencia Médica Nacional</li>
                    <li>Asistencia Médica Internacional</li>
                    <li>Seguro Hospitalario y Oncológico</li>
                    <li>Seguro de Enfermedades Catastróficas</li>
                </ul>
            `,
            img1: "img/perSalud.webp",
            img2: "img/perSalud1.webp",
            coberturas: [
                `<div class="flex flex-col"><span class="font-bold text-gray-900 text-lg">Consultas y Exámenes</span><span class="text-sm text-gray-600 font-normal mt-1">Cobertura ambulatoria para consultas médicas preventivas, exámenes de laboratorio y diagnósticos.</span></div>`,
                `<div class="flex flex-col"><span class="font-bold text-gray-900 text-lg">Emergencias y Cirugías</span><span class="text-sm text-gray-600 font-normal mt-1">Atención inmediata hospitalaria y quirúrgica frente a accidentes o enfermedades repentinas.</span></div>`,
                `<div class="flex flex-col"><span class="font-bold text-gray-900 text-lg">Maternidad</span><span class="text-sm text-gray-600 font-normal mt-1">Programa integral de control de embarazo, parto (normal o cesárea) y cuidados del recién nacido.</span></div>`,
                `<div class="flex flex-col"><span class="font-bold text-gray-900 text-lg">Cobertura Oncológica</span><span class="text-sm text-gray-600 font-normal mt-1">Tratamientos, quimioterapias y cirugías relacionadas con el tratamiento del cáncer.</span></div>`
            ]
        },
        {
            titulo: "Seguro de Viajes",
            descripcion1: "Viaja protegido ante cualquier imprevisto a Nivel Nacional y Mundial con asistencia 24/7.",
            descripcion2: "Viaja siempre protegido ante cualquier imprevisto. Ofrecemos planes ideales para el tipo de viaje que planeas realizar, ya sea por negocios, estudios o placer, tanto a nivel nacional como internacional.",
            descripcionDetallada: `
                <p class="text-gray-600">Tenemos los mejores programas de asistencia al viajero, que incluyen desde atención médica por enfermedad súbita hasta localización de equipaje perdido y repatriación, garantizando que tu única preocupación sea disfrutar del viaje.</p>
            `,
            img1: "img/perViaje.webp",
            img2: "img/perViaje1.webp",
            coberturas: [
                `<div class="flex flex-col"><span class="font-bold text-gray-900 text-lg">Asistencia Médica 24 hrs</span><span class="text-sm text-gray-600 font-normal mt-1">Atención por enfermedad repentina o accidente durante tu estadía en el extranjero.</span></div>`,
                `<div class="flex flex-col"><span class="font-bold text-gray-900 text-lg">Pérdida de Equipaje</span><span class="text-sm text-gray-600 font-normal mt-1">Compensación económica y asistencia en la localización en caso de extravío por la aerolínea.</span></div>`,
                `<div class="flex flex-col"><span class="font-bold text-gray-900 text-lg">Repatriación Sanitaria</span><span class="text-sm text-gray-600 font-normal mt-1">Traslado médico al país de origen en caso de enfermedad grave o fallecimiento.</span></div>`,
                `<div class="flex flex-col"><span class="font-bold text-gray-900 text-lg">Cancelación de Vuelos</span><span class="text-sm text-gray-600 font-normal mt-1">Reembolso por gastos de hotel o alimentación debido a demoras o cancelaciones imprevistas.</span></div>`
            ]
        },
        {
            titulo: "Seguro de Vida",
            descripcion1: "Inversión, protección familiar y ahorro. Elige entre nuestras diversas modalidades de cobertura.",
            descripcion2: "Una póliza de vida podría ser la mejor forma de invertir los ahorros de tu vida. No sólo te da la tranquilidad de dejar a tu familia financieramente protegida ante tu ausencia, sino que puedes usarla como un instrumento de capitalización.",
            descripcionDetallada: `
                <p class="mb-4 text-gray-600">Conoce nuestros diferentes planes diseñados para cada etapa de tu vida y tus objetivos financieros:</p>
                
                <div class="space-y-3">
                    <a href="detalleSeguro.html?tipo=seguro-de-vida-temporal-simple" class="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-orange-50 transition border border-gray-100 group">
                        <i data-lucide="shield" class="w-6 h-6 mr-3 text-[#FF6600] flex-shrink-0"></i>
                        <div class="flex flex-col">
                            <strong class="text-gray-900 group-hover:text-[#FF6600] transition">TEMPORAL SIMPLE</strong>
                        </div>
                    </a>

                    <a href="detalleSeguro.html?tipo=seguro-de-vida-temporal-garantizado" class="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-orange-50 transition border border-gray-100 group">
                        <i data-lucide="shield-check" class="w-6 h-6 mr-3 text-[#FF6600] flex-shrink-0"></i>
                        <div class="flex flex-col">
                            <strong class="text-gray-900 group-hover:text-[#FF6600] transition">TEMPORAL GARANTIZADO</strong>
                        </div>
                    </a>

                    <a href="detalleSeguro.html?tipo=seguro-de-vida-vitalicio" class="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-orange-50 transition border border-gray-100 group">
                        <i data-lucide="infinity" class="w-6 h-6 mr-3 text-[#FF6600] flex-shrink-0"></i>
                        <div class="flex flex-col">
                            <strong class="text-gray-900 group-hover:text-[#FF6600] transition">VITALICIO</strong>
                        </div>
                    </a>

                    <a href="detalleSeguro.html?tipo=seguro-de-vida-ahorro" class="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-orange-50 transition border border-gray-100 group">
                        <i data-lucide="piggy-bank" class="w-6 h-6 mr-3 text-[#FF6600] flex-shrink-0"></i>
                        <div class="flex flex-col">
                            <strong class="text-gray-900 group-hover:text-[#FF6600] transition">AHORRO</strong>
                        </div>
                    </a>

                    <a href="detalleSeguro.html?tipo=seguro-de-vida-con-inversion" class="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-orange-50 transition border border-gray-100 group">
                        <i data-lucide="trending-up" class="w-6 h-6 mr-3 text-[#FF6600] flex-shrink-0"></i>
                        <div class="flex flex-col">
                            <strong class="text-gray-900 group-hover:text-[#FF6600] transition">CON INVERSIÓN</strong>
                        </div>
                    </a>

                    <a href="detalleSeguro.html?tipo=seguro-de-vida-universitario" class="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-orange-50 transition border border-gray-100 group">
                        <i data-lucide="graduation-cap" class="w-6 h-6 mr-3 text-[#FF6600] flex-shrink-0"></i>
                        <div class="flex flex-col">
                            <strong class="text-gray-900 group-hover:text-[#FF6600] transition">UNIVERSITARIO</strong>
                        </div>
                    </a>
                </div>
            `,
            img1: "img/perVida.webp",
            img2: "img/perVida1.webp",
            coberturas: [
                `<div class="flex flex-col"><span class="font-bold text-gray-900 text-lg">Fallecimiento Natural o Accidental</span><span class="text-sm text-gray-600 font-normal mt-1">Pago del capital asegurado a los beneficiarios designados con opción de doble indemnización por accidente.</span></div>`,
                `<div class="flex flex-col"><span class="font-bold text-gray-900 text-lg">Invalidez Total y Permanente</span><span class="text-sm text-gray-600 font-normal mt-1">Adelanto del capital en vida en caso de sufrir un accidente o enfermedad que genere incapacidad permanente.</span></div>`,
                `<div class="flex flex-col"><span class="font-bold text-gray-900 text-lg">Enfermedades Graves</span><span class="text-sm text-gray-600 font-normal mt-1">Anticipo de la suma asegurada ante el diagnóstico de cáncer, infarto, ACV, entre otras enfermedades severas.</span></div>`,
                `<div class="flex flex-col"><span class="font-bold text-gray-900 text-lg">Ahorro e Inversión</span><span class="text-sm text-gray-600 font-normal mt-1">Retorno de primas o entrega de capital rentable al finalizar el plazo contratado según el plan.</span></div>`
            ]
        },
        {
            titulo: "Seguro de Jubilación",
            descripcion1: "Garantiza la formación de un capital para tu retiro. Ideal para profesionales y emprendedores independientes.",
            descripcion2: "Es un seguro que le garantiza la formación de un fondo sólido para generar una jubilación privada, permitiéndote mantener tu estilo de vida, invertir en tus metas y cumplir los sueños que has pospuesto para tu retiro.",
            descripcionDetallada: `
                <strong class="text-[#FF6600]">¿A QUIÉN VA DIRIGIDO?</strong><br>
                <p class="text-gray-600 mt-2">Está dirigido a personas como tú que buscan ahorrar con seguridad a largo plazo. Este seguro es la herramienta ideal para estructurar un plan de pensión para profesionales independientes, comerciantes, dueños de negocios y en general para personas sin cobertura previsional estatal o de AFP.</p>
            `,
            img1: "img/perJubilacion.webp",
            img2: "img/perJubilacion1.webp",
            coberturas: [
                `<div class="flex flex-col"><span class="font-bold text-gray-900 text-lg">Capital de Vida (Jubilación)</span><span class="text-sm text-gray-600 font-normal mt-1">Pago del Capital Garantizado más bonos de rentabilidad al cumplimiento de la edad de retiro pactada.</span></div>`,
                `<div class="flex flex-col"><span class="font-bold text-gray-900 text-lg">Capital por Fallecimiento</span><span class="text-sm text-gray-600 font-normal mt-1">Pago inmediato a los beneficiarios legales del capital proyectado o acumulado en caso el asegurado fallezca antes del retiro.</span></div>`
            ]
        },

        // --- SUB-PRODUCTOS DE VIDA (OCULTOS) Adaptados ---
        {
            titulo: "Seguro de Vida Temporal Simple",
            oculto: true,
            descripcion1: "Se activa únicamente en caso de fallecimiento del asegurado dentro del periodo de cobertura. Tienes la libertad de escoger el periodo de cobertura, el capital asegurado que necesita para proteger a su familia y especialmente el monto que presupuesta pagar.",
            img1: "img/perVidaTemporal.webp",
            coberturas: [
                `<div class="flex flex-col"><span class="font-bold text-gray-900 text-lg">Muerte Natural o Accidental</span><span class="text-sm text-gray-600 font-normal mt-1">Pago de la suma asegurada contratada a los beneficiarios.</span></div>`,
                `<div class="flex flex-col"><span class="font-bold text-gray-900 text-lg">Adelanto por Invalidez</span><span class="text-sm text-gray-600 font-normal mt-1">Anticipo del capital por incapacidad permanente (opcional).</span></div>`,
                `<div class="flex flex-col"><span class="font-bold text-gray-900 text-lg">Enfermedades Graves</span><span class="text-sm text-gray-600 font-normal mt-1">Anticipo de tu cobertura para costear gastos médicos ante una enfermedad grave.</span></div>`
            ]
        },
        {
            titulo: "Seguro de Vida Temporal Garantizado",
            oculto: true,
            descripcion1: "Esta póliza entrega el capital asegurado contratado a los beneficiarios en caso del fallecimiento del asegurado, pero además de ello permite recuperar el monto pagado en primas al final de la vigencia. Al igual que en todos los planes se puede escoger el periodo de cobertura, el capital o suma asegurada, o de adaptar el plan a su presupuesto mensual o anual.",
            img1: "img/perVidaGarantizado.webp",
            coberturas: [
                `<div class="flex flex-col"><span class="font-bold text-gray-900 text-lg">Fallecimiento</span><span class="text-sm text-gray-600 font-normal mt-1">Protección financiera total y garantizada para los que más amas. Tu familia recibirá el 100% del capital asegurado para asegurar su futuro y bienestar.</span></div>`,
                `<div class="flex flex-col"><span class="font-bold text-gray-900 text-lg">Devolución de Primas</span><span class="text-sm text-gray-600 font-normal mt-1">Recompensa por tu bienestar. Al finalizar tu contrato, recuperas el 75% o el 100% del dinero que pagaste, dándote un capital extra para disfrutar.</span></div>`,
                `<div class="flex flex-col"><span class="font-bold text-gray-900 text-lg">Protección en la vejez</span><span class="text-sm text-gray-600 font-normal mt-1">Si al terminar el contrato prefieres no retirar tu dinero, puedes optar por mantener tu cobertura de por vida sin tener que realizar ningún pago o cobro adicional.</span></div>`
            ]
        },
        { 
            titulo: "Seguro de Vida Vitalicio", 
            oculto: true, 
            descripcion1: "Este seguro brinda protección vitalicia pagando sólo por un período determinado y asegurando hoy una herencia para sus hijos. Adicionalmente va acumulando de año en año un ahorro que puede retirar si es que decide no continuar con su seguro.", 
            img1: "img/perVidaVitalicio.webp", 
            coberturas: [
                `<div class="flex flex-col"><span class="font-bold text-gray-900 text-lg">Vida Entera</span><span class="text-sm text-gray-600 font-normal mt-1">Cobertura de muerte sin límite de edad que se paga por un período determinado.</span></div>`,
                `<div class="flex flex-col"><span class="font-bold text-gray-900 text-lg">Vida Entera con Beneficio Adelantado</span><span class="text-sm text-gray-600 font-normal mt-1">Al final del periodo de pago, el contratante recibe el 50% del capital asegurado, dejando el otro 50% para sus beneficiarios.</span></div>`
            ]
        },
        { 
            titulo: "Seguro de Vida Ahorro", 
            oculto: true, 
            descripcion1: "Este seguro funciona como una forma segura de inversión, combinando la cobertura básica de protección con el crecimiento de tu dinero. Garantiza el bienestar de tu familia hoy y te permite construir un respaldo económico sólido para disfrutar en el futuro.", 
            img1: "img/perVidaAhorro.webp", 
            coberturas: [
                `<div class="flex flex-col"><span class="font-bold text-gray-900 text-lg">Fallecimiento</span><span class="text-sm text-gray-600 font-normal mt-1">Tranquilidad absoluta para los que más amas. Tu familia recibirá el total del Capital Asegurado, garantizando su estabilidad financiera en todo momento.</span></div>`,
                `<div class="flex flex-col"><span class="font-bold text-gray-900 text-lg">Ahorro Garantizado</span><span class="text-sm text-gray-600 font-normal mt-1">El fruto de tu inversión en tus manos. Al finalizar el plazo de vigencia, recibirás el 100% del Capital Asegurado para que puedas disfrutarlo en vida y cumplir tus metas.</span></div>`
            ]
        },
        { 
            titulo: "Seguro de Vida con Inversión", 
            oculto: true, 
            descripcion1: "El seguro de vida más innovador del mercado, diseñado para brindarte altas coberturas a costos preferenciales. Combina una protección integral sin límite de permanencia con la libertad de elegir cómo hacer crecer tu dinero, ofreciéndote opciones de suma asegurada desde 30 mil hasta 5 millones de dólares para adaptarse a tus grandes metas.", 
            img1: "img/perVidaInversion.webp", 
            coberturas: [
                `<div class="flex flex-col"><span class="font-bold text-gray-900 text-lg">Protección de Vida a tu Medida</span><span class="text-sm text-gray-600 font-normal mt-1">Seguridad financiera del más alto nivel para tu familia. Te permite elegir una cobertura robusta que garantiza la tranquilidad y el bienestar de tus seres queridos en todo momento.</span></div>`,
                `<div class="flex flex-col"><span class="font-bold text-gray-900 text-lg">Crecimiento y Rentabilidad</span><span class="text-sm text-gray-600 font-normal mt-1">Libertad total para multiplicar tu patrimonio. Tú decides el mecanismo de capitalización de tu fondo de ahorro e inversión, dándote el control para alcanzar tus proyectos y metas en vida.</span></div>`,
                `<div class="flex flex-col"><span class="font-bold text-gray-900 text-lg">Respaldo Sin Limite de Permanencia</span><span class="text-sm text-gray-600 font-normal mt-1">Tranquilidad que te acompaña para siempre. Disfruta de una cobertura continua y sin fecha de caducidad, asegurando tu bienestar por el tiempo que tú decidas.</span></div>`
            ]
        },
        { 
            titulo: "Seguro de Vida Universitario", 
            oculto: true, 
            descripcion1: "Un plan diseñado para garantizar el éxito profesional de tus hijos. Te brinda la libertad de personalizar el periodo de cobertura y el capital asegurado basándote en su edad actual, combinando la protección esencial de un seguro de vida con excelentes oportunidades de inversión para asegurar su mañana.", 
            img1: "img/perVidaUniversitario.webp", 
            coberturas: [
                `<div class="flex flex-col"><span class="font-bold text-gray-900 text-lg">Educación Garantizada</span><span class="text-sm text-gray-600 font-normal mt-1">La certeza de que tus hijos cumplirán sus metas. Asegura el capital exacto y necesario para respaldar su etapa universitaria en caso de tu ausencia, brindándoles un camino seguro y sin interrupciones hacia su desarrollo profesional.</span></div>`,
                `<div class="flex flex-col"><span class="font-bold text-gray-900 text-lg">Inversión para el Futuro</span><span class="text-sm text-gray-600 font-normal mt-1">Una herramienta para multiplicar tu esfuerzo. Te ofrece un mecanismo de inversión paralelo a tu protección, construyendo un respaldo económico sólido y con grandes ventajas para cuando llegue el momento de pagar sus estudios.</span></div>`
            ]
        }
    ],

    EMPRESAS: [
        {
            titulo: "Seguros Patrimoniales",
            descripcion1: "Protección integral para el patrimonio de tu empresa. Cubre daños directos por incendio, fenómenos naturales, robos y actos deshonestos.",
            descripcion2: "Esta póliza está diseñada para proteger integralmente los activos de tu empresa frente a múltiples riesgos. Tiene como base las declaraciones efectuadas por el asegurado, las cuales se consideran incorporadas a la póliza.",
            descripcionDetallada: `
                <strong class="text-[#FF6600]">MODALIDAD 3D (DESHONESTIDAD, DESAPARICIÓN Y DESTRUCCIÓN):</strong>
                <ul class="list-disc pl-5 mt-2 space-y-1">
                    <li><strong>Convenio I: Deshonestidad de Empleados:</strong> Deshonestidad de Empleados: Cubre pérdida de dinero y valores por actos de trabajadores (Categorías A, B y C según exposición).</li>
                    <li><strong>Convenio II: Pérdida de dinero DENTRO del local.</strong> Desaparición o sustracción ilícita de dinero/valores DENTRO del local o banco.</li>
                    <li><strong>Convenio III: Pérdida de dinero FUERA del local (tránsito).</strong> Pérdida de dinero/valores en tránsito (mensajeros, blindados) o vivienda del mensajero.</li>
                    <li><strong>Convenio IV: Falsificación de papel moneda.</strong> Pérdida por aceptación de buena fe de cheques de gerencia o papel moneda falsos.</li>
                    <li><strong>Convenio V: Falsificación de Documentos Bancarios.</strong> Falsificación o alteración de cheques, giros o pagarés que afecten cuentas bancarias.</li>
                    <li><strong>Convenio VI: Robo con fractura de bienes.</strong> Ampara bienes y mercaderías (excluye dinero) contra robo con fractura y/o asalto.</li>
                </ul>
            `,
            img1: "img/empPatrimoniales.webp",
            img2: "img/empPatrimoniales1.webp",
            coberturas: [
                `<div class="flex flex-col"><span class="font-bold text-gray-900 text-lg">Incendio / Terremoto / Lluvias e Inundaciones / Terrorismo</span><span class="text-sm text-gray-600 font-normal mt-1">Esta póliza cubre los daños ocasionados directamente por incendio, terremoto, daño malicioso, vandalismo, terrorismo, huelga, conmoción civil, lluvia e inundación, impacto de vehículos y daño por agua entre otros. Tiene como base las declaraciones efectuadas por el asegurado, durante el proceso de apreciación del riesgo por parte de la compañía, las cuales se consideran incorporadas en su totalidad a la póliza. El rubro de incendio es bastante amplio y cubre cualquier daño causado al patrimonio de la empresa. Para esto se contratan diferentes sublímites, los cuales tienen un costo adicional.</span></div>`,
                `<div class="flex flex-col"><span class="font-bold text-gray-900 text-lg">Robo por Asalto y/o Fractura de Activos</span><span class="text-sm text-gray-600 font-normal mt-1">Cubre la sustracción de bienes de propiedad (activos fijos, existencias, equipo de cómputo y/o dinero) indicados en la póliza.</span></div>`,
                `<div class="flex flex-col"><span class="font-bold text-gray-900 text-lg">Lucro Cesante</span><span class="text-sm text-gray-600 font-normal mt-1">Indemniza la pérdida de utilidades brutas como consecuencia de la interrupción de las operaciones de la empresa por la ocurrencia de un evento asegurado en la póliza.</span></div>`,
                `<div class="flex flex-col"><span class="font-bold text-gray-900 text-lg">Deshonestidad de Empleados</span><span class="text-sm text-gray-600 font-normal mt-1">Esta póliza cubre los actos de deshonestidad de los trabajadores dentro de la empresa, siempre que los trabajadores sean identificados como tales.</span></div>`
            ]
        },
        {
            titulo: "Seguro de Transporte de Mercancía",
            descripcion1: "Protege tus bienes o mercadería durante su traslado vía aérea, marítima, terrestre o fluvial, tanto a nivel nacional como internacional.",
            descripcion2: `
                Si necesitas transportar un bien o mercadería vía aérea, marítima, terrestre, ferroviaria, fluvial, lacustre, te damos la mejor solución para esta necesidad. Contamos con las mejores alternativas de seguros de transporte de carga para proteger tus bienes contra los riesgos que le puedan afectar mientras sean trasladados, sea a nivel Nacional o Internacional.
                <br><br>
                Se pueden suscribir coberturas para importación y exportación, así como traslados dentro del territorio peruano, incluyendo si es necesario la cobertura de traslado de "almacén a almacén", a término de viaje y/o traslado frecuente de mercadería.
            `,
            descripcionDetallada: `
                <strong class="text-[#FF6600]">MODALIDADES DE COBERTURA:</strong>
                <p>Las pólizas pueden ser contratadas bajo la modalidad de “Todo Riesgo” o “Riesgos Nombrados” y brindan cobertura para todo tipo de mercadería que pertenezca al asegurado.</p>
                <br>
                <strong class="text-[#FF6600]">TIPOS DE CONTRATACIÓN:</strong>
                <ul class="list-disc pl-5 mt-2 space-y-1">
                    <li>Por un viaje específico</li>
                    <li>Por varios viajes</li>
                    <li>Durante un año (Poliza Anual)</li>
                    <li>Poliza abierta o flotante</li>
                </ul>
            `,
            img1: "img/empTransporteMercancia.webp",
            img2: "img/empTransporteMercancia1.webp",
            coberturas: [
                "Accidente al Medio de Transporte (AMT)",
                "Robo por Asalto",
                "Caídas durante la operación de carga y descarga",
                "Riesgos Políticos",
                "Riesgos Naturales"
            ]
        },
        {
            titulo: "Seguros de Ingeniería",
            descripcion1: "Coberturas especializadas en la ejecución de todo tipo de proyectos de Ingeniería, Obras Civiles, Minería e Industria.",
            descripcion2: "Coberturas especializadas en la ejecución de todo tipo de proyectos de Ingeniería, Obras Civiles, Minería e Industria.",
            
            // LINKS A SUB-SEGUROS
            descripcionDetallada: `
                <strong class="text-[#FF6600] text-xl mb-4 block">TIPOS DE SEGUROS:</strong>
                <div class="space-y-3">
                    <a href="detalleSeguro.html?tipo=rotura-de-maquinaria" class="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-orange-50 hover:text-[#FF6600] transition border border-gray-100">
                        <i data-lucide="cog" class="w-5 h-5 mr-3 text-[#FF6600]"></i> <strong>Rotura de Maquinaria</strong>
                    </a>
                    <a href="detalleSeguro.html?tipo=equipo-electronico" class="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-orange-50 hover:text-[#FF6600] transition border border-gray-100">
                        <i data-lucide="cpu" class="w-5 h-5 mr-3 text-[#FF6600]"></i> <strong>Equipo Electrónico</strong>
                    </a>
                    <a href="detalleSeguro.html?tipo=todo-riesgo-de-montaje-ear" class="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-orange-50 hover:text-[#FF6600] transition border border-gray-100">
                        <i data-lucide="wrench" class="w-5 h-5 mr-3 text-[#FF6600]"></i> <strong>Todo Riesgo de Montaje (EAR)</strong>
                    </a>
                    <a href="detalleSeguro.html?tipo=todo-riesgo-de-construccion-car" class="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-orange-50 hover:text-[#FF6600] transition border border-gray-100">
                        <i data-lucide="hard-hat" class="w-5 h-5 mr-3 text-[#FF6600]"></i> <strong>Todo Riesgo de Construcción (CAR)</strong>
                    </a>
                    <a href="detalleSeguro.html?tipo=todo-riesgo-de-equipo-contratista-trec" class="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-orange-50 hover:text-[#FF6600] transition border border-gray-100">
                        <i data-lucide="truck" class="w-5 h-5 mr-3 text-[#FF6600]"></i> <strong>Todo Riesgo de Equipo Contratista (TREC)</strong>
                    </a>
                </div>
            `,
            img1: "img/empIngenierias.webp",
            img2: "img/empIngenierias1.webp",
            coberturas: [
                "Daños accidentales e imprevistos",
                "Errores de diseño o montaje",
                "Riesgos de construcción y obras civiles",
                "Maquinaria pesada y equipos electrónicos"
            ]
        },
        {
            titulo: "Seguro de Responsabilidad Civil",
            descripcion1: "Cubre la indemnización por daños personales o materiales causados a terceros por accidentes resultantes de las actividades de tu negocio.",
            descripcion2: "Este seguro cubre hasta el límite de la suma asegurada, la indemnización contra los daños personales y/o materiales causados por un accidente producido como resultado directo de las actividades o negocios a los que se dedica el asegurado, y por las cuales el asegurado sea civilmente responsable.",
            descripcionDetallada: `
                <strong class="text-[#FF6600]">OTRAS CLÁUSULAS Y/O COBERTURAS:</strong>
                <p class="mt-2 text-gray-600 mb-4">A continuación describimos otras coberturas específicas que se diseñan y adaptan de acuerdo al giro y necesidades particulares de cada negocio:</p>
                
                <ul class="grid md:grid-cols-2 gap-x-6 gap-y-2 list-disc pl-5 text-sm text-gray-600">
                    <li>Responsabilidad Civil de Playas de estacionamiento y Similares</li>
                    <li>Responsabilidad Civil de Vehículos Ajenos al Servicio del Asegurado</li>
                    <li>Responsabilidad Civil de Ascensores, Grúas, Montacargas y Escaleras Mecánicas</li>
                    <li>Responsabilidad Civil para Empresas Dedicadas al Mantenimiento de Ascensores, Grúas, Montacargas y Escaleras Mecánicas</li>
                    <li>Responsabilidad Civil Extracontractual por Actos de Contratistas Independientes y/o Subcontratistas</li>
                    <li>Responsabilidad Civil por Trabajos Terminados</li>
                    <li>Responsabilidad Civil Extracontractual para Clubes, Asociaciones y Academias Deportivas</li>
                    <li>Responsabilidad Civil durante Eventos Sociales y Culturales</li>
                    <li>Responsabilidad Civil de Contratistas de Obras</li>
                    <li>Responsabilidad Civil para Propietarios de Edificios destinados a Vivienda</li>
                    <li>Responsabilidad Civil por uso de Armas de Fuego</li>
                    <li>Responsabilidad Civil por Incendio y/o Explosión y/o Daños por Agua y/o Daños por Humo</li>
                    <li>Responsabilidad Civil de Talleres de Reparación de Vehículos en General</li>
                    <li>Responsabilidad Civil de Arrendatarios y Ocupantes de Viviendas</li>
                    <li>Responsabilidad Civil Extracontractual por Accidentes en la Ejecución de Contratos</li>
                    <li>Responsabilidad Civil por Alimentos y Bebidas</li>
                    <li>Responsabilidad Civil para Carga</li>
                    <li>Responsabilidad Civil para Mercadería Peligrosa</li>
                    <li>Responsabilidad Civil para Empresas de Transporte</li>
                    <li>Responsabilidad Civil Extracontractual Personal o Familiar</li>
                    <li>Responsabilidad Civil para Colegios, Universidades e Institutos de Enseñanza</li>
                    <li>Responsabilidad Civil para Establecimientos de Baños Turcos, Saunas y Similares</li>
                    <li>Responsabilidad Civil para Cines, Teatros y Salas de Conciertos</li>
                    <li>Responsabilidad Civil por Uso de Maquinaria Pesada</li>
                    <li>Responsabilidad Civil para Oficinas</li>
                    <li>Responsabilidad Civil para Locales y Operaciones</li>
                    <li>Responsabilidad Civil para Transporte de Personal</li>
                    <li>Responsabilidad Civil para Empresas de Policía Particular</li>
                    <li>Responsabilidad Civil por contaminación y/o polución súbita, imprevista y accidental</li>
                </ul>
            `,
            img1: "img/empResponsabilidad.webp",
            img2: "img/empResponsabilidad1.webp",
            coberturas: [
                `<div class="flex flex-col"><span class="font-bold text-gray-900 text-lg">Responsabilidad Civil Contractual</span><span class="text-sm text-gray-600 font-normal mt-1">Cubre la suma que el asegurado, por motivo de haber asumido una responsabilidad por cualquier contrato o convenio, sea obligado legalmente a pagar como indemnización por daños corporales a terceros y/o daños a la propiedad de los mismos.</span></div>`,
                `<div class="flex flex-col"><span class="font-bold text-gray-900 text-lg">Responsabilidad Civil Patronal</span><span class="text-sm text-gray-600 font-normal mt-1">Cubre los reclamos que interponga contra el asegurado cualquier miembro del personal en planilla, por lesiones personales sufridas como consecuencia directa e inmediata de accidentes ocurridos en el negocio y que motiven una reclamación adicional a la Ley de Accidentes de Trabajo.</span></div>`,
                `<div class="flex flex-col"><span class="font-bold text-gray-900 text-lg">Responsabilidad Civil de Productos</span><span class="text-sm text-gray-600 font-normal mt-1">Cubre todos los reclamos que el asegurado tenga que pagar por Responsabilidad Civil Extracontractual como consecuencia de muerte, lesiones o daño a la propiedad por causa directa del uso o consumo de productos fabricados, vendidos, reparados o distribuidos por el asegurado.</span></div>`,
                `<div class="flex flex-col"><span class="font-bold text-gray-900 text-lg">Responsabilidad Civil Ambiental</span><span class="text-sm text-gray-600 font-normal mt-1">Protección frente a reclamos de terceros por daños personales, materiales o gastos de limpieza derivados de contaminación accidental originada por las operaciones del asegurado.</span></div>`,
                `<div class="flex flex-col"><span class="font-bold text-gray-900 text-lg">Responsabilidad de Hidrocarburos</span><span class="text-sm text-gray-600 font-normal mt-1">Cobertura especializada que indemniza los daños a terceros derivados de incidentes en la manipulación, almacenamiento, comercialización o transporte de hidrocarburos.</span></div>`
            ]
        },
        {
            titulo: "Seguros para el Personal",
            descripcion1: "Protege el activo más valioso de tu empresa: tus colaboradores. Brindamos coberturas integrales en salud, prevención de riesgos y beneficios de ley.",
            descripcion2: "Garantiza la tranquilidad y el bienestar de tus trabajadores y sus familias con nuestros seguros diseñados para cumplir con la normativa legal vigente y ofrecer los mejores beneficios médicos y económicos del mercado.",
            descripcionDetallada: `
                <strong class="text-[#FF6600] text-xl mb-4 block">NUESTROS SEGUROS PARA EL PERSONAL:</strong>
                <div class="space-y-3">
                    <a href="detalleSeguro.html?tipo=eps" class="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-orange-50 hover:text-[#FF6600] transition border border-gray-100">
                        <i data-lucide="heart-pulse" class="w-5 h-5 mr-3 text-[#FF6600]"></i> <strong>EPS</strong>
                    </a>
                    <a href="detalleSeguro.html?tipo=sctr" class="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-orange-50 hover:text-[#FF6600] transition border border-gray-100">
                        <i data-lucide="shield-alert" class="w-5 h-5 mr-3 text-[#FF6600]"></i> <strong>SCTR</strong>
                    </a>
                    <a href="detalleSeguro.html?tipo=seguro-de-vida-ley" class="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-orange-50 hover:text-[#FF6600] transition border border-gray-100">
                        <i data-lucide="users" class="w-5 h-5 mr-3 text-[#FF6600]"></i> <strong>Seguro de Vida Ley</strong>
                    </a>
                </div>
            `,
            img1: "img/empPersonal.webp", 
            img2: "img/empPersonal1.webp", 
            coberturas: [
                "Atención médica en red de clínicas privadas (EPS)",
                "Atención al 100% por accidentes laborales y enfermedades profesionales (SCTR)",
                "Pensiones de invalidez y sobrevivencia",
                "Indemnización por fallecimiento natural o accidental (Vida Ley)"
            ]
        },
        
        // ==========================================
        // SUB-PRODUCTOS DE PERSONAL (OCULTOS)
        // ==========================================
        {
            titulo: "EPS",
            oculto: true,
            descripcion: `
                <p class="mb-4">Las Entidades Prestadoras de Salud EPS, son organizaciones cuyo fin es gestionar el financiamiento de servicios a través de redes de salud (clínicas, laboratorios, etc), complementando la cobertura de EsSalud. Las EPS gestionan servicios de salud para los trabajadores de una empresa, con la finalidad de obtener mejores atenciones para su salud y la de sus familias.</p>
                
                <strong class="text-[#FF6600]">¿CÓMO FUNCIONA?</strong>
                <p class="mt-2 text-gray-600 mb-4">Las empresas por ley aportan el 9% de la planilla a ESSALUD para que sus trabajadores puedan atenderse ante la eventualidad de cualquier enfermedad sin hacer distinción para todos los diagnósticos de capa simple (atenciones más frecuentes y menos complicadas, principalmente ambulatorias) y los de capa compleja (casos de mayor severidad).</p>
                <p class="text-gray-600 mb-4">Al elegir una EPS el 9% que la empresa aportaba a ESSALUD se divide en:</p>
                <ul class="list-disc pl-5 mb-4 text-sm text-gray-600 space-y-1">
                    <li><strong>2.25%</strong> para la EPS elegida.</li>
                    <li><strong>6.75%</strong> se sigue aportando a ESSALUD.</li>
                </ul>
                <p class="text-gray-600 text-sm">El trabajador asume el restante de la prima del plan elegido, teniendo así acceso a atención médica en las mejores redes de clínicas, sin perder la cobertura en ESSALUD y a un precio bajo.</p>
            `,
            img2: "img/empPersEPS.webp",
            coberturas: [
                `<div class="flex flex-col"><span class="font-bold text-gray-900 text-lg">Atención Ambulatoria y Hospitalaria</span><span class="text-sm text-gray-600 font-normal mt-1">Cobertura en una amplia red de clínicas privadas afiliadas para consultas, exámenes y hospitalización (Capa Simple).</span></div>`,
                `<div class="flex flex-col"><span class="font-bold text-gray-900 text-lg">Maternidad y Odontología</span><span class="text-sm text-gray-600 font-normal mt-1">Programas de control de embarazo, parto y atenciones dentales básicas según el plan contratado.</span></div>`,
                `<div class="flex flex-col"><span class="font-bold text-gray-900 text-lg">Emergencias 24/7</span><span class="text-sm text-gray-600 font-normal mt-1">Atención inmediata en clínicas frente a urgencias y emergencias médicas accidentales o por enfermedad.</span></div>`
            ]
        },
        {
            titulo: "SCTR",
            oculto: true,
            descripcion: `
                <p class="mb-4">El SCTR es un seguro obligatorio, el cual cubre accidentes de trabajo y enfermedades profesionales, tiene dos componentes: <strong>Salud y Pensiones</strong>. Con el primero se cubre la atención médica y rehabilitación del trabajador al 100% hasta su recuperación total. El segundo otorga al trabajador una pensión vitalicia en caso de invalidez o a sus dependientes, en caso de fallecimiento. La pensión en caso de invalidez puede ser total o parcial de acuerdo al grado de incapacidad del trabajador.</p>
            `,
            img2: "img/empPersSCTR.webp",
            coberturas: [
                `<div class="flex flex-col"><span class="font-bold text-gray-900 text-lg">SCTR Salud (Atención Médica al 100%)</span><span class="text-sm text-gray-600 font-normal mt-1">Cubre la atención médica, cirugías, farmacología y rehabilitación del trabajador al 100%, sin copagos ni deducibles, hasta su recuperación total.</span></div>`,
                `<div class="flex flex-col"><span class="font-bold text-gray-900 text-lg">SCTR Pensiones (Invalidez)</span><span class="text-sm text-gray-600 font-normal mt-1">Otorga una pensión al trabajador en caso de quedar con una invalidez (total o parcial) debido al accidente o enfermedad profesional, de acuerdo a su grado de incapacidad.</span></div>`,
                `<div class="flex flex-col"><span class="font-bold text-gray-900 text-lg">SCTR Pensiones (Sobrevivencia y Sepelio)</span><span class="text-sm text-gray-600 font-normal mt-1">En caso de fallecimiento del trabajador, otorga una pensión vitalicia a sus dependientes legales (cónyuge e hijos) y cubre los gastos de sepelio.</span></div>`
            ]
        },
        {
            titulo: "Seguro de Vida Ley",
            oculto: true,
            descripcion: `
                <p class="mb-4">El Seguro Vida Ley es un seguro obligatorio que el empleador debe contratar en favor de sus trabajadores desde el inicio de la relación laboral, conforme al Decreto Legislativo N.º 688 – Ley de Consolidación de Beneficios Sociales y sus modificatorias, incluyendo el Decreto de Urgencia N.º 044-2019 que reforzó su obligatoriedad desde el primer día de trabajo.</p>
                
                <strong class="text-[#FF6600]">¿QUE PASA SI NO SE CONTRATA?</strong>
                <p class="mt-2 text-gray-600 mb-4">El incumplimiento puede causar sanciones administrativas y multas por parte de la autoridad laboral, además de exponer a la empresa al pago directo de los beneficios asegurados en caso de siniestro.</p>
            `,
            img2: "img/empPersVidaley.webp",
            coberturas: [
                `<div class="flex flex-col"><span class="font-bold text-gray-900 text-lg">Muerte Natural</span><span class="text-sm text-gray-600 font-normal mt-1">Indemnización de 16 sueldos entregados a los beneficiarios legales en caso de fallecimiento por causas naturales o enfermedad.</span></div>`,
                `<div class="flex flex-col"><span class="font-bold text-gray-900 text-lg">Muerte Accidental</span><span class="text-sm text-gray-600 font-normal mt-1">Indemnización de 32 sueldos entregados a los beneficiarios en caso el fallecimiento sea consecuencia directa de un accidente.</span></div>`,
                `<div class="flex flex-col"><span class="font-bold text-gray-900 text-lg">Invalidez Total y Permanente por Accidente</span><span class="text-sm text-gray-600 font-normal mt-1">Indemnización de 32 sueldos entregados en vida al trabajador si un accidente lo deja con una incapacidad permanente que le impida laborar.</span></div>`
            ]
        },

        // ==========================================
        // SUB-PRODUCTOS DE INGENIERÍA (OCULTOS)
        // ==========================================
        {
            titulo: "Rotura de Maquinaria",
            oculto: true,
            descripcion: "Cubre los daños accidentales e imprevistos en máquinas e instalaciones industriales que requieran reparación o reposición. Es ideal para proteger la inversión en maquinaria industrial asegurando la continuidad de operaciones.",
            img2: "img/empIngRoturaMaquinaria.webp",
            coberturas: ["Defectos de construcción o montaje", "Errores de manejo", "Cortocircuito", "Rotura por fuerza centrífuga", "Explosión", "Entre otros"]
        },
        {
            titulo: "Equipo Electrónico",
            oculto: true,
            descripcion: "Cubre daños accidentales e imprevistos a equipos de procesamiento de datos, médicos y de comunicación.",
            img2: "img/empIngEquipoElectronico.webp",
            coberturas: ["Incendio y Rayo", "Robo y Asalto", "Daños Eléctricos", "Portadores de datos"]
        },
        {
            titulo: "Todo Riesgo de Montaje (EAR)",
            oculto: true,
            descripcion: "Cubre los daños que puedan suceder durante el montaje y periodo de pruebas de todo tipo de maquinarias, aparatos, construcciones e instalaciones industriales de acuerdo a la póliza y durante el periodo de vigencia de la misma.",
            img2: "img/empIngEAR.webp",
            coberturas: ["Riesgos de la naturaleza", "Errores de montaje", "Responsabilidad Civil", "Periodo de pruebas"]
        },
        {
            titulo: "Todo Riesgo de Construcción (CAR)",
            oculto: true,
            descripcion: "Cubre los daños que puedan suceder en toda clase de obras civiles en construcción de acuerdo a la póliza y durante el periodo de vigencia de la misma. Desde la excavación hasta la entrega de la obra.",
            img2: "img/empIngCAR.webp",
            coberturas: ["Incendio y Terremoto", "Robo de materiales", "Daños a la obra", "Responsabilidad Civil"]
        },
        {
            titulo: "Todo Riesgo de Equipo Contratista (TREC)",
            oculto: true,
            descripcion: "El seguro TREC cubre daños materiales accidentales, súbitos e imprevistos a maquinaria pesada en obras de construcción o minería, incluyendo eventos como incendios, explosiones, colisiones, vuelcos, desastres naturales (terremotos, inundaciones), deslizamientos, robo y vandalismo, protegiendo equipos en operación, reposo o traslado, con cláusulas adicionales para gastos extra o pérdida de beneficios",
            img2: "img/empIngTREC.webp",
            coberturas: ["Volcadura y Choque", "Incendio", "Riesgos de la naturaleza", "Robo total"]
        }
    ],

    OBLIGATORIOS: [
        {
            titulo: "SOAT",
            descripcion: "Emisión inmediata. Cubre muerte y gastos médicos por accidentes de tránsito.",
            descripcionDetallada: `
                Adquiere tu SOAT con nosotros, con alertas de renovación y certificado digital inmediato.
                Te ofrecemos los mejores precios cotizados en las mejores Aseguradoras.
                <br><br>
                Este Seguro cubre la muerte y lesiones corporales que sufran las personas, sean ocupantes o terceros no ocupantes de un vehículo automotor.
            `,
            img1: "img/soat.webp",
            coberturas: [
                `<div class="flex flex-col"><span class="font-bold text-gray-900 text-lg">Muerte por Accidente</span><span class="text-sm text-gray-600 font-normal mt-1">Indemnización de <strong>4 UIT</strong>.</span></div>`,
                `<div class="flex flex-col"><span class="font-bold text-gray-900 text-lg">Invalidez Permanente</span><span class="text-sm text-gray-600 font-normal mt-1">Hasta <strong>4 UIT</strong>.</span></div>`,
                `<div class="flex flex-col"><span class="font-bold text-gray-900 text-lg">Incapacidad Temporal</span><span class="text-sm text-gray-600 font-normal mt-1">Hasta <strong>1 UIT</strong>.</span></div>`,
                `<div class="flex flex-col"><span class="font-bold text-gray-900 text-lg">Gastos Médicos</span><span class="text-sm text-gray-600 font-normal mt-1">Hasta <strong>5 UIT</strong>.</span></div>`,
                `<div class="flex flex-col"><span class="font-bold text-gray-900 text-lg">Gastos de Sepelio</span><span class="text-sm text-gray-600 font-normal mt-1">Hasta <strong>1 UIT</strong>.</span></div>`
            ]
        },
        {
            titulo: "SCTR",
            descripcion: "Seguro obligatorio para actividades de alto riesgo. Salud y Pensión.",
            descripcionDetallada: `
                Este seguro brinda cobertura de salud y pensión a los trabajadores de empresas obligadas por Ley (Anexo 5 Ley 26790).
                <br><br>
                <strong class="text-[#FF6600]">ACTIVIDADES DE ALTO RIESGO:</strong>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm mt-2 bg-gray-50 p-4 rounded-lg border border-gray-100">
                    <li>Minería, Petróleo y Gas</li>
                    <li>Pesca y Extracción de madera</li>
                    <li>Industria Química y Textil</li>
                    <li>Construcción y Electricidad</li>
                    <li>Saneamiento y Salud</li>
                    <li>Estiba y Manipuleo de carga</li>
                </div>
            `,
            img1: "img/sctr.webp",
            coberturas: [
                "Salud (Atención médica 100%)",
                "Pensión (Muerte, Invalidez, Sepelio)"
            ]
        },
        {
            titulo: "Vida Ley",
            descripcion: "Obligatorio (D.L. 688). Muerte natural, accidental e invalidez.",
            descripcionDetallada: `
                Póliza obligatoria para trabajadores en planilla a partir de 4 años de servicios (opcional desde 3 meses).
                <br><br>
                Algunas Aseguradoras ofrecen coberturas adicionales como valor agregado.
            `,
            img1: "img/vidaley.webp",
            coberturas: [
                `<div class="flex flex-col"><span class="font-bold text-gray-900 text-lg">Muerte Natural</span><span class="text-sm text-gray-600 font-normal mt-1"><strong>16 Remuneraciones</strong>.</span></div>`,
                `<div class="flex flex-col"><span class="font-bold text-gray-900 text-lg">Muerte Accidental</span><span class="text-sm text-gray-600 font-normal mt-1"><strong>32 Remuneraciones</strong>.</span></div>`,
                `<div class="flex flex-col"><span class="font-bold text-gray-900 text-lg">Invalidez Total y Permanente</span><span class="text-sm text-gray-600 font-normal mt-1"><strong>32 Remuneraciones</strong>.</span></div>`
            ]
        }
    ]
};