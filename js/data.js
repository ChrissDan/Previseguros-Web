/* ==========================================
   BASE DE DATOS DE SEGUROS (DATA.JS)
   ========================================== */

const CATALOGO_SEGUROS = {
    PERSONAS: [
        {
            titulo: "Seguro Vehicular",
            descripcion: "Protege de manera óptima tu vehículo con las mejores coberturas y precios a nivel nacional.",
            descripcionDetallada: `
                Tenemos planes de Seguro para proteger de manera óptima tu vehículo, con las mejores coberturas y los mejores precios de acuerdo a tu necesidad y la de tu empresa, para que manejes con tranquilidad a nivel nacional.
                <br><br>
                <strong class="text-[#FF6600] text-lg">MODALIDADES DE ASEGURAMIENTO:</strong>
                <div class="grid md:grid-cols-2 gap-6 mt-4">
                    <div class="bg-gray-50 p-4 rounded-xl">
                        <strong class="block text-gray-900 mb-2">TODO RIESGO</strong>
                        Protege su vehículo con coberturas de: Responsabilidad Civil, Choque, Vuelco, Incendio, Robo, Daño Malicioso, vandalismo, Riesgos de la naturaleza y Gastos de curación. Incluye servicios adicionales como Grúa, ambulancia y chofer de reemplazo.
                    </div>
                    <div class="bg-gray-50 p-4 rounded-xl">
                        <strong class="block text-gray-900 mb-2">PÉRDIDA TOTAL</strong>
                        Cubre a la unidad si la reparación supera el 75% del valor asegurado o por robo total. Incluye Responsabilidad Civil ante terceros.
                    </div>
                    <div class="bg-gray-50 p-4 rounded-xl md:col-span-2">
                        <strong class="block text-gray-900 mb-2">RESPONSABILIDAD CIVIL</strong>
                        Cubre únicamente daños a terceros (vehículo, propiedad o persona). No cubre los daños al propio vehículo.
                    </div>
                </div>
                <br>
                <strong class="text-[#FF6600]">BENEFICIOS ADICIONALES:</strong>
                <ul class="list-disc pl-5 mt-2 space-y-1">
                    <li>Chofer de reemplazo y Vehículo de reemplazo</li>
                    <li>Auxilio mecánico y Atención las 24 horas</li>
                </ul>
            `,
            img1: "img/vehiculos.webp",
            coberturas: [
                "Pérdida Total o Parcial (Robo o Accidente)",
                "Riesgos Políticos y Naturaleza",
                "Imprudencia del conductor y Vías no autorizadas",
                "Responsabilidad Civil ante Terceros",
                "Cobertura a Nivel Nacional y Países Limítrofes",
                "Cobertura Ocupantes: Muerte, Invalidez, Gastos Curación"
            ]
        },
        {
            titulo: "Seguro de Hogar",
            descripcion: "Protege tu casa, patrimonio e inversión contra incendios, robos y desastres naturales.",
            descripcionDetallada: `
                Sabemos que tu casa, además de ser una gran inversión de tiempo y dinero, es un patrimonio importante para ti y tu familia.
                Las compañías ofrecen diferentes tipos de productos diseñados para proteger este bien, te asesoramos para que el plan se ajuste en las necesidades de tu familia y las de tu empresa.
                <br><br>
                <strong class="text-[#FF6600]">MODALIDADES:</strong>
                <ul class="list-disc pl-5 mt-2 mb-4 space-y-1">
                    <li>Solo Edificación, Solo Contenidos o Ambos.</li>
                    <li>Solo Incendio Todo Riesgo.</li>
                    <li>Incendio Todo Riesgo más Robo y Asalto.</li>
                </ul>
                <strong class="text-[#FF6600]">BENEFICIOS ADICIONALES:</strong>
                <ul class="list-disc pl-5 mt-2 space-y-1">
                    <li>Responsabilidad Civil ante terceros</li>
                    <li>Pérdida de equipos y dineros en tránsito</li>
                    <li>Accidentes Personales para trabajadores del hogar</li>
                </ul>
            `,
            img1: "img/domiciliario.webp",
            coberturas: [
                "Incendio, Explosión",
                "Terremoto, Sismo, Erupción Volcánica",
                "Riesgos Políticos (Huelga, Vandalismo)",
                "Inundaciones y Huaycos",
                "Robo y Asalto"
            ]
        },
        {
            titulo: "Seguro de Salud",
            descripcion: "Costea total o parcialmente gastos médicos, consultas y emergencias. Planes nacionales e internacionales.",
            descripcionDetallada: `
                El Seguro de Salud es una póliza contratada para costear de forma total o parcial diversos gastos médicos. Nuestro servicio es personalizado, estamos presentes durante todo el proceso de compra y asistencia.
                <br><br>
                Ponemos a tu disposición diversos planes con una amplia red de clínicas afiliadas, consorcios de médicos, farmacias, y laboratorios, con cobertura a nivel nacional y/o internacional.
                <br><br>
                <strong class="text-[#FF6600]">MODALIDADES DE ASEGURAMIENTO:</strong>
                <div class="grid md:grid-cols-2 gap-4 mt-2">
                    <div class="bg-gray-50 p-3 rounded-lg">Asistencia Médica Nacional</div>
                    <div class="bg-gray-50 p-3 rounded-lg">Asistencia Médica Internacional</div>
                    <div class="bg-gray-50 p-3 rounded-lg">Seguro Hospitalario y Oncológico</div>
                    <div class="bg-gray-50 p-3 rounded-lg">Seguro de Enfermedades Catastróficas</div>
                </div>
            `,
            img1: "img/salud.webp",
            coberturas: [
                "Consultas médicas y Exámenes preventivos",
                "Emergencias y Cirugías",
                "Programa de maternidad y Médicos a domicilio",
                "Coberturas Oncológicas y Salud mental",
                "Atención ambulatoria y Protección internacional"
            ]
        },
        {
            titulo: "Seguro de Viajes",
            descripcion: "Viaja protegido ante cualquier imprevisto a Nivel Nacional y Mundial.",
            descripcionDetallada: `
                Viaja siempre protegido ante cualquier imprevisto, ofrecemos planes ideales para el tipo de viaje que planeas realizar a Nivel Nacional y a Nivel Mundial. Tenemos los mejores programas, incluido servicios de cobertura adicionales.
            `,
            img1: "img/viaje.webp",
            coberturas: [
                "Asistencia internacional 24 horas",
                "Asistencia médica por enfermedad o accidente",
                "Transporte o repatriación sanitaria",
                "Compensación por pérdida de equipaje",
                "Muerte accidental"
            ]
        },
        {
            titulo: "Seguro de Vida",
            descripcion: "Inversión, protección familiar y ahorro. Elige entre nuestras diversas modalidades.",
            
            // AQUÍ ESTÁN LOS LINKS DENTRO DE LA DESCRIPCIÓN DETALLADA
            descripcionDetallada: `
                Una póliza de vida podría ser la mejor forma de invertir los ahorros de tu vida. No sólo te da la tranquilidad de dejar a tu familia protegida, sino que puedes usarla como fondo de jubilación o ahorro.
                <br><br>
                <strong class="text-[#FF6600] text-xl mb-4 block">HAGA CLIC EN LA MODALIDAD DE SU INTERÉS PARA VER MÁS DETALLES:</strong>
                
                <div class="grid md:grid-cols-2 gap-4">
                    <a href="detalleSeguro.html?tipo=seguro-de-vida-temporal-simple" class="block p-4 border border-gray-200 rounded-xl hover:border-[#FF6600] hover:shadow-md transition group">
                        <strong class="text-gray-900 group-hover:text-[#FF6600]">Seguro de Vida Temporal Simple <i data-lucide="external-link" class="inline w-4 h-4 ml-1"></i></strong>
                        <p class="text-sm text-gray-500 mt-1">Solo cobertura de fallecimiento.</p>
                    </a>
                    <a href="detalleSeguro.html?tipo=seguro-de-vida-temporal-garantizado" class="block p-4 border border-gray-200 rounded-xl hover:border-[#FF6600] hover:shadow-md transition group">
                        <strong class="text-gray-900 group-hover:text-[#FF6600]">Temporal Garantizado <i data-lucide="external-link" class="inline w-4 h-4 ml-1"></i></strong>
                        <p class="text-sm text-gray-500 mt-1">Con devolución de primas.</p>
                    </a>
                    <a href="detalleSeguro.html?tipo=seguro-de-vida-vitalicio" class="block p-4 border border-gray-200 rounded-xl hover:border-[#FF6600] hover:shadow-md transition group">
                        <strong class="text-gray-900 group-hover:text-[#FF6600]">Seguro de Vida Vitalicio <i data-lucide="external-link" class="inline w-4 h-4 ml-1"></i></strong>
                        <p class="text-sm text-gray-500 mt-1">Protección de por vida + Ahorro.</p>
                    </a>
                    <a href="detalleSeguro.html?tipo=seguro-de-vida-ahorro" class="block p-4 border border-gray-200 rounded-xl hover:border-[#FF6600] hover:shadow-md transition group">
                        <strong class="text-gray-900 group-hover:text-[#FF6600]">Seguro de Vida Ahorro <i data-lucide="external-link" class="inline w-4 h-4 ml-1"></i></strong>
                        <p class="text-sm text-gray-500 mt-1">Recibe el capital en vida.</p>
                    </a>
                    <a href="detalleSeguro.html?tipo=seguro-de-vida-con-inversion" class="block p-4 border border-gray-200 rounded-xl hover:border-[#FF6600] hover:shadow-md transition group">
                        <strong class="text-gray-900 group-hover:text-[#FF6600]">Vida con Inversión <i data-lucide="external-link" class="inline w-4 h-4 ml-1"></i></strong>
                        <p class="text-sm text-gray-500 mt-1">Altas coberturas y rentabilidad.</p>
                    </a>
                    <a href="detalleSeguro.html?tipo=seguro-de-vida-universitario" class="block p-4 border border-gray-200 rounded-xl hover:border-[#FF6600] hover:shadow-md transition group">
                        <strong class="text-gray-900 group-hover:text-[#FF6600]">Vida Universitario <i data-lucide="external-link" class="inline w-4 h-4 ml-1"></i></strong>
                        <p class="text-sm text-gray-500 mt-1">Garantiza estudios de hijos.</p>
                    </a>
                </div>
            `,
            img1: "img/vida.webp",
            coberturas: [
                "Beneficio por muerte accidental (Doble indemnización)",
                "Adelanto por Invalidez Total y Permanente",
                "Adelanto por Enfermedades Graves",
                "Exoneración de primas por invalidez",
                "Indemnización por Invalidez Accidental",
                "Reembolso de gastos médicos por accidente"
            ]
        },
        {
            titulo: "Seguro de Jubilación",
            descripcion: "Garantiza la formación de un capital para tu jubilación. Ideal para independientes.",
            descripcionDetallada: `
                Es un seguro que le garantiza la formación de un capital para generar una jubilación, para que lo invierta en sus metas y cumpla sus sueños.
                <br><br>
                <strong class="text-[#FF6600]">¿A QUIÉN VA DIRIGIDO?</strong><br>
                Está dirigido a personas como tú que buscan ahorrar con seguridad. Este seguro es ideal para ahorrar un capital y como plan de pensión para profesionales independientes, comerciantes y en general para personas sin cobertura previsional.
            `,
            img1: "img/jubilacion.webp",
            coberturas: [
                `<div class="flex flex-col"><span class="font-bold text-gray-900 text-lg">Capital de Vida</span><span class="text-sm text-gray-600 font-normal mt-1">Pago del Capital Garantizado más bonos al vencimiento.</span></div>`,
                `<div class="flex flex-col"><span class="font-bold text-gray-900 text-lg">Capital de Fallecimiento</span><span class="text-sm text-gray-600 font-normal mt-1">Pago a beneficiarios del capital acumulado si el asegurado fallece.</span></div>`
            ]
        },

        // --- SUB-PRODUCTOS DE VIDA (OCULTOS) ---
        // (Mantienen el mismo contenido que te envié antes, solo asegúrate de pegarlos aquí)
        {
            titulo: "Seguro de Vida Temporal Simple",
            oculto: true,
            descripcion: "Se activa únicamente en caso de fallecimiento del asegurado dentro del periodo de cobertura.",
            descripcionDetallada: `Esta póliza únicamente se activa en caso de fallecimiento del asegurado... (Texto completo anterior)...`,
            img: "img/vida.webp",
            coberturas: ["Muerte Natural", "Beneficio por muerte accidental", "Adelanto por invalidez", "Enfermedades graves"]
        },
        // ... (Agrega aquí el resto de los sub-seguros de vida tal cual estaban) ...
        {
            titulo: "Seguro de Vida Temporal Garantizado",
            oculto: true,
            descripcion: "Cobertura de fallecimiento con opción de recuperación de primas.",
            descripcionDetallada: `Esta póliza entrega el capital asegurado contratado a los beneficiarios en caso del fallecimiento... (Texto completo anterior)...`,
            img: "img/vida.webp",
            coberturas: ["Fallecimiento", "Devolución de primas", "Opción vitalicia"]
        },
        { titulo: "Seguro de Vida Vitalicio", oculto: true, descripcion: "Protección vitalicia + Ahorro.", descripcionDetallada: "Protección de por vida pagando solo un periodo determinado...", img: "img/vida.webp", coberturas: ["Protección Vitalicia", "Valor de Rescate", "Opción de Préstamo"]},
        { titulo: "Seguro de Vida Ahorro", oculto: true, descripcion: "Inversión + Protección.", descripcionDetallada: "Además de la cobertura básica... recibe el CAPITAL ASEGURADO en vida...", img: "img/vida.webp", coberturas: ["Capital por Fallecimiento", "Entrega de Capital en Vida"]},
        { titulo: "Seguro de Vida con Inversión", oculto: true, descripcion: "Flexible, altas coberturas.", descripcionDetallada: "El más novedoso seguro de vida... sin límite de permanencia...", img: "img/vida.webp", coberturas: ["Vida, Ahorro e Inversión", "Altas Sumas Aseguradas"]},
        { titulo: "Seguro de Vida Universitario", oculto: true, descripcion: "Fondo educativo.", descripcionDetallada: "Garantiza los estudios de tus hijos en caso de tu ausencia...", img: "img/vida.webp", coberturas: ["Fondo Educativo Garantizado", "Protección de Vida"]},
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
            img1: "img/patrimoniales.webp",
            img2: "img/patrimoniales2.webp",
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
            img1: "img/transporteMercancia1.webp",
            img2: "img/transporteMercancia2.webp",
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
            img1: "img/ingenierias1.webp",
            img2: "img/ingenierias2.webp",
            coberturas: [
                "Daños accidentales e imprevistos",
                "Errores de diseño o montaje",
                "Riesgos de construcción y obras civiles",
                "Maquinaria pesada y equipos electrónicos"
            ]
        },
        {
            titulo: "Seguro de Responsabilidad Civil",
            descripcion: "Indemnización por daños a terceros causados por la actividad del negocio.",
            descripcionDetallada: `
                Este seguro cubre hasta el límite de la suma asegurada, la indemnización contra los daños personales y/o materiales causados por un accidente producido como resultado directo de las actividades o negocios a los que se dedica el asegurado.
                <br><br>
                <strong class="text-[#FF6600]">CLÁUSULAS PRINCIPALES:</strong>
                <ul class="list-disc pl-5 mt-2 space-y-1">
                    <li>RC Contractual y Extracontractual</li>
                    <li>RC Patronal (Accidentes de empleados)</li>
                    <li>RC de Productos</li>
                    <li>RC Ambiental</li>
                </ul>
            `,
            img1: "img/responsabilidad.webp",
            coberturas: [
                "RC Contractual y Extracontractual",
                "RC Patronal",
                "RC de Productos",
                "RC Ambiental",
                "RC de Vehículos Ajenos y Maquinaria",
                "RC de Contratistas y Obras"
            ]
        },
        {
            titulo: "EPS",
            descripcion: "Gestión de servicios de salud privados para trabajadores, complementando a EsSalud.",
            descripcionDetallada: `
                Las EPS gestionan servicios de salud para los trabajadores de una empresa.
                <br><br>
                <strong class="text-[#FF6600]">¿CÓMO FUNCIONA?</strong><br>
                Las empresas aportan el 9% a EsSalud. Al elegir una EPS, el 2.25% va a la EPS y el 6.75% se queda en EsSalud. El trabajador asume el restante de la prima del plan elegido, teniendo así acceso a clínicas privadas.
            `,
            img1: "img/salud.webp",
            coberturas: [
                "Atención en Red de Clínicas Privadas",
                "Cobertura de Diagnósticos Capa Simple",
                "Continuidad de Capa Compleja en EsSalud",
                "Mejores tiempos de atención"
            ]
        },
        {
            titulo: "SCTR",
            descripcion: "Seguro obligatorio (Salud y Pensión) para actividades de alto riesgo.",
            descripcionDetallada: `
                El SCTR es un seguro obligatorio que cubre accidentes de trabajo y enfermedades profesionales.
                <br><br>
                <strong class="text-[#FF6600]">COMPONENTES:</strong>
                <ul class="list-disc pl-5 mt-2 space-y-1">
                    <li><strong>Salud:</strong> Atención médica y rehabilitación al 100%.</li>
                    <li><strong>Pensiones:</strong> Pensión vitalicia por invalidez o sobrevivencia.</li>
                </ul>
                <br>
                Cubre accidentes causados en el centro de trabajo y enfermedades profesionales (neumoconiosis, lumbalgias, hipoacusia).
            `,
            img1: "img/sctr.webp",
            coberturas: [
                "Atención médica y rehabilitación 100%",
                "Pensión por Invalidez o Sobrevivencia",
                "Gastos de Sepelio"
            ]
        },
        {
            titulo: "Vida Ley",
            descripcion: "Seguro obligatorio para empleados en planilla. Cubre muerte e invalidez.",
            descripcionDetallada: `
                El empleador tiene la obligación de contratar este seguro para los empleados que cumplen cuatro años en planilla (obligatorio) y opcional desde los 3 meses.
                <br><br>
                Los montos de cobertura están estandarizados (16 o 32 remuneraciones según el caso).
            `,
            img1: "img/vidaley.webp",
            coberturas: [
                "Muerte Natural (16 Remuneraciones)",
                "Muerte Accidental (32 Remuneraciones)",
                "Invalidez Total y Permanente (32 Remuneraciones)"
            ]
        },

        // --- SUB-PRODUCTOS DE INGENIERÍA (OCULTOS) ---
        {
            titulo: "Rotura de Maquinaria",
            oculto: true,
            descripcion: "Cubre los daños accidentales e imprevistos en máquinas e instalaciones industriales que requieran reparación o reposición. Es ideal para proteger la inversión en maquinaria industrial asegurando la continuidad de operaciones.",
            img2: "img/roturaMaquinaria.webp",
            coberturas: ["Defectos de construcción o montaje", "Errores de manejo", "Cortocircuito", "Rotura por fuerza centrífuga", "Explosión", "Entre otros"]
        },
        {
            titulo: "Equipo Electrónico",
            oculto: true,
            descripcion: "Cubre daños accidentales e imprevistos a equipos de procesamiento de datos, médicos y de comunicación.",
            img2: "img/equipoElectronico.webp",
            coberturas: ["Incendio y Rayo", "Robo y Asalto", "Daños Eléctricos", "Portadores de datos"]
        },
        {
            titulo: "Todo Riesgo de Montaje (EAR)",
            oculto: true,
            descripcion: "Cubre los daños que puedan suceder durante el montaje y periodo de pruebas de todo tipo de maquinarias, aparatos, construcciones e instalaciones industriales de acuerdo a la póliza y durante el periodo de vigencia de la misma.",
            img2: "img/ear.webp",
            coberturas: ["Riesgos de la naturaleza", "Errores de montaje", "Responsabilidad Civil", "Periodo de pruebas"]
        },
        {
            titulo: "Todo Riesgo de Construcción (CAR)",
            oculto: true,
            descripcion: "Cubre los daños que puedan suceder en toda clase de obras civiles en construcción de acuerdo a la póliza y durante el periodo de vigencia de la misma. Desde la excavación hasta la entrega de la obra.",
            img2: "img/car.webp",
            coberturas: ["Incendio y Terremoto", "Robo de materiales", "Daños a la obra", "Responsabilidad Civil"]
        },
        {
            titulo: "Todo Riesgo de Equipo Contratista (TREC)",
            oculto: true,
            descripcion: "El seguro TREC cubre daños materiales accidentales, súbitos e imprevistos a maquinaria pesada en obras de construcción o minería, incluyendo eventos como incendios, explosiones, colisiones, vuelcos, desastres naturales (terremotos, inundaciones), deslizamientos, robo y vandalismo, protegiendo equipos en operación, reposo o traslado, con cláusulas adicionales para gastos extra o pérdida de beneficios",
            img2: "img/trec.webp",
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