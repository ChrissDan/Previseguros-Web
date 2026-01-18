/* ==========================================
   BASE DE DATOS DE SEGUROS (DATA.JS)
   ========================================== */

const CATALOGO_SEGUROS = {
    PERSONAS: [
        {
            titulo: "Seguro Vehicular",
            descripcion: "Protege de manera óptima tu vehículo a nivel nacional. Cubre pérdida total o parcial por robo o accidente, riesgos políticos y de la naturaleza.",
            descripcionDetallada: `
                Tenemos planes de Seguro para proteger de manera óptima tu vehículo, con las mejores coberturas y los mejores precios de acuerdo a tu necesidad y la de tu empresa, para que manejes con tranquilidad a nivel nacional.
                <br><br>
                <strong class="text-[#FF6600]">MODALIDADES DE ASEGURAMIENTO:</strong>
                <br><br>
                <strong>1. Todo Riesgo:</strong><br>
                Este Seguro protege a su vehículo con las coberturas de: Responsabilidad Civil ante terceros no ocupantes, Choque, Vuelco, despiste, Incendio, Robo parcial o Total, Daño Malicioso, vandalismo, huelgas, terrorismo, Riesgos de la naturaleza, Gastos de curación para conductor y ocupantes, hasta el valor contratado en su póliza. Se ofrece como servicios adicionales, Grúa y ambulancia, alquiler de vehículos, chofer de reemplazo y un trato personalizado.
                <br><br>
                <strong>2. Pérdida Total:</strong><br>
                Es un seguro que va a cubrir a la unidad en caso que; por Accidente, la reparación supere el 75% del valor asegurado o en su defecto sea por robo total, la Compañía le pagará el valor que figura en póliza. Además, incluye la Responsabilidad Civil ante terceros no ocupantes.
                <br><br>
                <strong>3. Responsabilidad Civil:</strong><br>
                Cubre únicamente daños a terceros, en accidentes que sean imputables al contratante y/o Asegurado donde el vehículo asegurado ocasione daños a otro vehículo, propiedad o persona. Esta póliza no cubre los daños producidos al propio vehículo.
                <br><br>
                <strong class="text-[#FF6600]">BENEFICIOS ADICIONALES:</strong>
                <br><br>
                <strong>- Chofer de reemplazo</strong><br>
                <strong>- Auxilio Mecánico</strong><br>
                <strong>- Vehiculo de reemplazo</strong><br>
                <strong>- Atención las 24 horas</strong><br>
            `,
            img: "img/vehiculos.webp",
            coberturas: [
                "Pérdida Total o Parcial (Robo/Accidente)",
                "Riesgos Políticos y de Naturaleza",
                "Imprudencia del Conductor",
                "Responsabilidad Civil ante Terceros",
                "Uso de vías no autorizadas",
                "Cobertura a Nivel Nacional y Países Limítrofes",
                "Cobertura Ocupantes (Muerte, Invalidez, Curación, Sepelio)",
                "Chofer y Vehículo de reemplazo",
                "Auxilio mecánico y Grúa",
                "Atención las 24 horas"
            ]
        },
        {
            titulo: "Seguro de Salud",
            // Descripción corta para la tarjeta (Inicio)
            descripcion: "Cubre consultas, medicamentos y emergencias. Contamos con planes nacionales e internacionales, oncológicos y de maternidad.",

            // Descripción completa para el detalle
            descripcionDetallada: `
                El Seguro de Salud es una póliza contratada a una aseguradora con el fin de costear de forma total o parcial diversos gastos médicos en los que se incluyen consultas, medicamentos, emergencias, entre otros beneficios según el plan adquirido. Existen diversos seguros de salud según tus necesidades. Puedes adquirir un Seguro de Salud Nacional, internacional, familiar o personal.
                <br><br>
                Nuestro servicio es personalizado, estamos presentes durante todo el proceso de compra, en caso de alguna duda, o cuando necesites asistencia al momento de usar tu seguro. Ponemos a tu disposición diversos planes en las distintas compañías para que tú y tu familia estén protegidos y tranquilos día a día. Todos estos ofrecen una amplia red de clínicas afiliadas, consorcios de médicos, farmacias y laboratorios, con cobertura a nivel nacional y/o internacional.
                <br><br>
                <strong class="text-[#FF6600]">MODALIDADES DE ASEGURAMIENTO:</strong>
                <br><br>
                <ul class="list-disc pl-5 space-y-2">
                    <li><strong>Asistencia Médica Nacional:</strong> Cobertura completa dentro del país.</li>
                    <li><strong>Asistencia Médica Internacional:</strong> Protección de salud en tus viajes al extranjero.</li>
                    <li><strong>Seguro Hospitalario:</strong> Cubre gastos exclusivamente de internamiento y hospitalización.</li>
                    <li><strong>Seguro Oncológico:</strong> Protección especializada para el tratamiento del cáncer (Preventivo y Curativo).</li>
                    <li><strong>Asistencia Médica para la Tercera Edad:</strong> Planes diseñados para mayores de 60 años.</li>
                    <li><strong>Seguro de Enfermedades Catastróficas:</strong> Cobertura para enfermedades de alto costo y complejidad.</li>
                </ul>
            `,
            img: "img/salud.webp",
            coberturas: [
                "Consultas médicas",
                "Exámenes preventivos",
                "Emergencias y Cirugías",
                "Programa de maternidad",
                "Médicos a domicilio",
                "Coberturas Oncológicas",
                "Atención ambulatoria",
                "Protección internacional",
                "Salud mental"
            ]
        },
        {
            titulo: "Seguro de Hogar",
            // Descripción corta para la tarjeta
            descripcion: "Protege tu patrimonio (edificación y contenidos) contra incendios, robos, terremotos y vandalismo. Planes a tu medida.",

            // Descripción completa con las modalidades solicitadas
            descripcionDetallada: `
                Sabemos que tu casa, además de ser una gran inversión de tiempo y dinero, es un patrimonio importante para ti y tu familia, por ello es importante protegerla contra todo lo que puede causarle daño y pérdidas.
                <br><br>
                Las compañías ofrecen diferentes tipos de productos diseñados para proteger este bien, te asesoramos para que el plan se ajuste en las necesidades de tu familia y las de tu empresa, tanto en coberturas como en precios, al alcance de tu bolsillo.
                <br><br>
                <strong class="text-[#FF6600]">MODALIDADES DE ASEGURAMIENTO POR VALORES DECLARADOS:</strong>
                <ul class="list-disc pl-5 space-y-1 mt-2 mb-4">
                    <li>Solo Edificación.</li>
                    <li>Solo Contenidos.</li>
                    <li>Edificación y Contenidos.</li>
                </ul>
                
                <strong class="text-[#FF6600]">MODALIDADES DE ASEGURAMIENTO POR EL TIPO DE COBERTURA:</strong>
                <ul class="list-disc pl-5 space-y-1 mt-2">
                    <li>Solo Incendio Todo Riesgo.</li>
                    <li>Incendio Todo Riesgo más Robo y Asalto.</li>
                </ul>

                <strong class="text-[#FF6600]">BENEFICIOS ADICIONALES:</strong>
                <ul class="list-disc pl-5 space-y-1 mt-2">
                    <li>Responsabilidad Civil ante terceros.</li>
                    <li>Pérdida de equipos en tránsito.</li>
                    <li>Robo de dinero en tránsito.</li>
                    <li>Accidentes Personales para la empleada.</li>
                </ul>
            `,
            img: "img/domiciliario.webp",
            coberturas: [
                "Incendio y Explosión",
                "Terremoto, Sismo y Explosión Volcánica",
                "Riesgos Políticos (Huelga, Vandalismo, Terrorismo)",
                "Inundaciones y Huaycos",
                "Robo y Asalto"
            ]
        },
        {
            titulo: "Seguro de Vida",
            // Descripción corta para la tarjeta
            descripcion: "La mejor forma de invertir tus ahorros y proteger a tu familia. Ofrecemos diversas modalidades ajustadas a tus necesidades.",

            // Descripción completa con toda la información técnica y beneficios
            descripcionDetallada: `
                Una póliza de vida podría ser la mejor forma de invertir los ahorros de tu vida, siempre y cuando seas bien asesorado. No sólo te da la tranquilidad de dejar a tu familia económicamente protegida en caso de tu ausencia, sino además puedes usarla como un fondo para tu jubilación, o un fondo de ahorro para realizar ese viaje que tanto has querido hacer.
                <br><br>
                
                <hr class="border-orange-200 my-4">
                
                <strong class="text-[#FF6600] text-lg">COBERTURAS ADICIONALES:</strong>
                <p class="mt-2">La compañía de seguros le ofrece la posibilidad de ampliar los alcances de su Seguro con las siguientes coberturas:</p>
                <ul class="list-disc pl-5 mt-2 space-y-2 mb-6">
                    <li><strong>Beneficio por muerte accidental:</strong> De fallecer en forma accidental, su familia podrá recibir hasta dos veces el monto asegurado.</li>
                    <li><strong>Adelanto del capital por invalidez total y permanente:</strong> Si sufriera una enfermedad o accidente que derive en invalidez total y permanente, se le pagará por adelantado el capital asegurado.</li>
                    <li><strong>Enfermedades graves:</strong> Si en algún momento te llegan a diagnosticar una enfermedad grave, la compañía de seguros te adelanta un monto del capital asegurado para tu tratamiento.</li>
                    <li><strong>Exoneración de pago de primas:</strong> En caso de invalidez total y permanente, queda libre del pago de las primas pendientes y continúa asegurado en el mismo producto.</li>
                    <li><strong>Invalidez accidental:</strong> Indemnización según el grado de invalidez (pérdida de miembros), hasta por el 100% del Capital pactado en esta cláusula.</li>
                    <li><strong>Gastos médicos por accidente:</strong> Reembolso de gastos médicos pagados por usted o por un tercero a causa de un accidente.</li>
                </ul>

                <strong class="text-[#FF6600] text-lg">TIEMPO Y FORMA DE PAGO:</strong>
                <p class="mt-2 mb-6">
                    Puede pagar las primas durante 5, 10, 15, 20, 25 ó 30 años o hasta que cumpla 50, 55, 60 ó 65 años de edad. La prima anual la puede pagar al contado o fraccionada en cuotas.
                </p>

                <strong class="text-[#FF6600] text-lg">BENEFICIOS ADICIONALES (Valores Garantizados):</strong>
                <p class="mt-2">Luego de tres años gozará de los siguientes beneficios:</p>
                <ul class="list-disc pl-5 mt-2 space-y-2">
                    <li><strong>Valor de Rescate:</strong> A lo largo del período se genera un ahorro. Si decide terminar el seguro, podrá retirar el 100% del valor acumulado.</li>
                    <li><strong>Seguro Saldado:</strong> Si deja de pagar, puede usar el valor acumulado para mantener el seguro vitalicio, pero por un monto menor.</li>
                    <li><strong>Seguro Prorrogado:</strong> Si deja de pagar, puede usar el valor acumulado para mantener el monto original, pero por menos tiempo.</li>
                    <li><strong>Préstamo:</strong> Puede solicitar un préstamo hasta por el valor de rescate acumulado sin garantías ni avales (a partir de 3 años).</li>
                    <li><strong>Cesión del Valor de Rescate:</strong> Puede ceder el valor acumulado como garantía de deuda con terceros.</li>
                </ul>
                
            `,
            img: "img/vida.webp",
            // Estos son los enlaces a los sub-productos ocultos
            coberturas: [
                "Seguro de Vida Temporal Simple",
                "Seguro de Vida Temporal Garantizado",
                "Seguro de Vida Vitalicio",
                "Seguro de Vida Ahorro",
                "Seguro de Vida con Inversión",
                "Seguro de Vida Universitario"
            ]
        },
        {
            titulo: "Seguro de Viajes",
            // Descripción corta para la tarjeta
            descripcion: "Viaja siempre protegido ante cualquier imprevisto a Nivel Nacional y Mundial. Planes ideales con asistencia 24 horas.",

            // Descripción completa (Texto que me pasaste)
            descripcionDetallada: `
                Viaja siempre protegido ante cualquier imprevisto, ofrecemos planes ideales para el tipo de viaje que planeas realizar a Nivel Nacional y a Nivel Mundial.
                <br><br>
                Tenemos los mejores programas, incluido servicios de cobertura adicionales para que tu única preocupación sea disfrutar del viaje.
            `,
            img: "img/viaje.webp",
            coberturas: [
                "Asistencia internacional 24 horas",
                "Asistencia médica por enfermedad",
                "Transporte o repatriación sanitaria",
                "Compensación por pérdida de equipaje",
                "Asistencia médica por accidente",
                "Muerte accidental",
                "Entre otras"
            ]
        },
        {
            titulo: "Seguro de Jubilación",
            descripcion: "Garantiza la formación de un capital para tu jubilación. Ideal para profesionales independientes y comerciantes.",

            descripcionDetallada: `
                Es un seguro que le garantiza la formación de un capital para generar una jubilación, para que lo invierta en sus metas y cumpla sus sueños.
                <br><br>
                <strong class="text-[#FF6600]">¿A QUIÉN VA DIRIGIDO?</strong><br>
                Está dirigido a personas como tú que buscan ahorrar con seguridad. Este seguro es ideal para ahorrar un capital y como plan de pensión para profesionales independientes, comerciantes y en general para personas sin cobertura previsional.
            `,
            img: "img/jubilacion.webp",

            // AQUÍ ESTÁ EL CAMBIO: Usamos HTML para separar Título y Descripción
            coberturas: [
                `<div class="flex flex-col">
                    <span class="font-bold text-gray-900 text-lg">Capital de Vida</span>
                    <span class="text-sm text-gray-600 font-normal mt-1 leading-relaxed">
                        Al vencimiento del plazo pactado, se pagará al Asegurado de la póliza el Capital Garantizado más los bonos anuales por participación de utilidades, generados durante la vigencia de la póliza.
                    </span>
                </div>`,

                `<div class="flex flex-col">
                    <span class="font-bold text-gray-900 text-lg">Capital de Fallecimiento</span>
                    <span class="text-sm text-gray-600 font-normal mt-1 leading-relaxed">
                        En caso el asegurado falleciera durante la vigencia de la póliza, se entregará a los beneficiarios designados, el capital acumulado más los bonos anuales por participación de utilidades generados.
                    </span>
                </div>`
            ]
        },

        // --- SUB-SEGUROS DE VIDA DETALLADOS (OCULTOS) ---

        {
            titulo: "Seguro de Vida Temporal Simple",
            oculto: true,
            img: "img/vida.webp",
            descripcion: "Esta póliza únicamente se activa en caso de fallecimiento del asegurado dentro del periodo de cobertura. No existe devolución de prima.",
            descripcionDetallada: `
                Esta póliza únicamente se activa en caso de fallecimiento del asegurado, si éste ocurriera dentro del periodo de cobertura.
                <br><br>
                Tienes la libertad de escoger el periodo de cobertura, el capital asegurado que necesita para proteger a su familia y especialmente el monto que presupuesta pagar.
                <br><br>
                Si usted NO sobrevive al plazo de vigencia de la póliza, su familia o beneficiarios reciben el total del capital asegurado. Una vez cumplido el periodo de vigencia del Seguro también termina la cobertura, en esta modalidad <strong>NO existe la posibilidad de devolución de la prima pagada ni del capital asegurado.</strong>
                <br><br>
                <strong class="text-[#FF6600]">DURACIÓN Y PAGO:</strong><br>
                Puede pagar las primas durante 5, 10, 15, 20, 25 ó 30 años o hasta que cumpla 50, 55, 60 ó 65 años de edad. La prima anual la puede pagar al contado o fraccionada en cuotas mensuales, trimestrales o semestrales (cargo en cuenta o tarjeta).
            `,
            coberturas: [
                "Fallecimiento (Cobertura Principal)",
                "Beneficio por muerte accidental (Doble indemnización)",
                "Adelanto por invalidez total y permanente",
                "Adelanto por Enfermedades graves",
                "Exoneración de pago de primas por invalidez",
                "Indemnización por Invalidez accidental (Desmembramiento)"
            ]
        },

        {
            titulo: "Seguro de Vida Temporal Garantizado",
            oculto: true,
            img: "img/vida.webp",
            descripcion: "Protege en caso de fallecimiento y permite recuperar el 100% o 75% de las primas pagadas si sobrevives al plazo.",
            descripcionDetallada: `
                Esta póliza entrega el capital asegurado contratado a los beneficiarios en caso del fallecimiento del asegurado, pero además de ello <strong>permite recuperar el monto pagado en primas al final de la vigencia.</strong>
                <br><br>
                Al igual que en todos los planes se puede escoger el periodo de cobertura, el capital o suma asegurada, o de adaptar el plan a su presupuesto mensual o anual.
                <br><br>
                Si usted no sobrevive al plazo de vigencia y/o cobertura de la póliza, su familia recibirá el total del capital asegurado. De no ocurrir el fallecimiento al final de la cobertura de la póliza, usted recibirá la <strong>devolución del 100% o 75% de las primas pagadas</strong>, según el tipo de plan que elija.
                <br><br>
                En caso de que desee conservar la cobertura de la póliza, al término del contrato usted puede elegir NO obtener la devolución de primas y tener cobertura vitalicia, sin ningún cobro adicional.
            `,
            coberturas: [
                "Fallecimiento del asegurado",
                "Devolución de Primas (Ahorro Garantizado)",
                "Opción de conversión a Vitalicio",
                "Cobertura por el periodo elegido"
            ]
        },

        {
            titulo: "Seguro de Vida Vitalicio",
            oculto: true,
            img: "img/vida.webp",
            descripcion: "Brinda protección de por vida pagando sólo por un período determinado. Genera un valor de rescate (ahorro).",
            descripcionDetallada: `
                Este seguro brinda protección vitalicia pagando sólo por un período determinado y asegurando hoy una herencia para sus hijos. Adicionalmente va acumulando de año en año un ahorro que puede retirar si es que decide no continuar con su seguro.
                <br><br>
                <strong class="text-[#FF6600]">TIPOS DE SEGURO VITALICIO:</strong>
                <ul class="list-disc pl-5 mt-2 space-y-2">
                    <li><strong>Seguro de Vida Entera:</strong> Es un seguro vitalicio que se paga por un período determinado.</li>
                    <li><strong>Seguro de Vida Entera con Beneficio Adelantado:</strong> Al final del periodo de pago, el contratante recibe el 50% del capital asegurado, dejando el otro 50% para sus beneficiarios.</li>
                </ul>
            `,
            coberturas: [
                "Protección de por Vida",
                "Herencia Asegurada",
                "Acumulación de Ahorro (Valor de Rescate)",
                "Opción de Beneficio Adelantado (50%)"
            ]
        },

        {
            titulo: "Seguro de Vida Ahorro",
            oculto: true,
            img: "img/vida.webp",
            descripcion: "Si sobrevives al plazo, recibes el Capital Asegurado para disfrutarlo en vida. Funciona como inversión segura.",
            descripcionDetallada: `
                Esta póliza, además de tener la cobertura básica de indemnización del capital asegurado en caso de fallecimiento, funciona como una forma segura de inversión.
                <br><br>
                Si usted no sobrevive al plazo de vigencia de su póliza, su familia recibe el total del Capital Asegurado.
                <br><br>
                <strong>De sobrevivir a dicho plazo, usted recibe el CAPITAL ASEGURADO, el cual podrá disfrutarlo en vida.</strong>
            `,
            coberturas: [
                "Indemnización por Fallecimiento",
                "Retorno del Capital Asegurado en Vida",
                "Inversión con Rentabilidad Segura",
                "Protección y Ahorro simultáneo"
            ]
        },

        {
            titulo: "Seguro de Vida con Inversión",
            oculto: true,
            img: "img/vida.webp",
            descripcion: "Seguro flexible con componentes de vida, ahorro e inversión. Sin límite de permanencia.",
            descripcionDetallada: `
                El más novedoso seguro de vida del mercado, al incorporar beneficios exclusivos que ofrecen altas coberturas, a costos preferenciales, y la flexibilidad que da la libertad de elegir el mecanismo de capitalización de su fondo de ahorro.
                <br><br>
                Es un seguro sin límite de permanencia, que cuenta con componentes de vida, ahorro e inversión.
                <br><br>
                <strong>Característica destacada:</strong> Puedes elegir una suma asegurada desde 30 mil hasta 5 millones de dólares.
            `,
            coberturas: [
                "Altas Sumas Aseguradas (Hasta $5M)",
                "Componente de Inversión Flexible",
                "Costos Preferenciales",
                "Sin límite de permanencia"
            ]
        },

        {
            titulo: "Seguro de Vida Universitario",
            oculto: true,
            img: "img/vida.webp",
            descripcion: "Garantiza el capital para los estudios de tus hijos en caso de tu ausencia o como fondo de ahorro educativo.",
            descripcionDetallada: `
                Tienes la libertad de escoger el periodo de cobertura y el capital asegurado que se necesita para garantizar los estudios de tus hijos en caso de una eventual ausencia tuya, tomando como referencia la edad actual de tu hijo.
                <br><br>
                Además de brindarte la protección que ofrece la cobertura básica del seguro de Vida, este tipo de plan te ofrece una nueva posibilidad de inversión que te brinda grandes ventajas para el futuro.
            `,
            coberturas: [
                "Garantía de Estudios",
                "Protección por Fallecimiento del titular",
                "Fondo de Ahorro Educativo",
                "Rentabilidad a largo plazo"
            ]
        },
    ],

    EMPRESAS: [
        {
            titulo: "Seguros Patrimoniales",
            // Descripción corta para la tarjeta
            descripcion: "Protección integral para el patrimonio de tu empresa. Cubre daños directos por incendio, fenómenos naturales, robos y actos deshonestos.",

            // Descripción detallada con toda la información técnica y los Convenios
            descripcionDetallada: `
                Esta póliza está diseñada para proteger integralmente los activos de tu empresa frente a múltiples riesgos. Tiene como base las declaraciones efectuadas por el asegurado, las cuales se consideran incorporadas a la póliza.
                <br><br>
                <strong class="text-[#FF6600]">CONVENIOS:</strong>
                <ul class="list-disc pl-5 mt-2 space-y-2">
                    <li><strong>Convenio I (Deshonestidad de Empleados):</strong> Cubre pérdida de dinero y valores por actos de trabajadores (Categorías A, B y C según exposición).</li>
                    <li><strong>Convenio II (Pérdida dentro del Local):</strong> Desaparición o sustracción ilícita de dinero/valores DENTRO del local o banco.</li>
                    <li><strong>Convenio III (Pérdida fuera del Local):</strong> Pérdida de dinero/valores en tránsito (mensajeros, blindados) o vivienda del mensajero.</li>
                    <li><strong>Convenio IV (Falsificación de Moneda):</strong> Pérdida por aceptación de buena fe de cheques de gerencia o papel moneda falsos.</li>
                    <li><strong>Convenio V (Falsificación Documentos Bancarios):</strong> Falsificación o alteración de cheques, giros o pagarés que afecten cuentas bancarias.</li>
                    <li><strong>Convenio VI (Robo de Bienes):</strong> Ampara bienes y mercaderías (excluye dinero) contra robo con fractura y/o asalto.</li>
                </ul>
            `,
            img: "img/multiriesgo.webp",

            // Coberturas principales con formato Título + Descripción
            coberturas: [
                `<div class="flex flex-col">
                    <span class="font-bold text-gray-900 text-lg">Incendio / Terremoto / Lluvias e Inundaciones / Terrorismo</span>
                    <span class="text-sm text-gray-600 font-normal mt-1 leading-relaxed">
                        Esta póliza cubre los daños ocasionados directamente por incendio, terremoto, daño malicioso, vandalismo, terrorismo, huelga, conmoción civil, lluvia e inundación, impacto de vehículos y daño por agua entre otros.
                        Tiene como base las declaraciones efectuadas por el asegurado, durante el proceso de apreciación del riesgo por parte de la compañía, las cuales se consideran incorporadas en su totalidad a la póliza.
                        El rubro de incendio es bastante amplio y cubre cualquier daño causado al patrimonio de la empresa. Para esto se contratan diferentes sublímites, los cuales tienen un costo adicional. 
                    </span>
                </div>`,

                `<div class="flex flex-col">
                    <span class="font-bold text-gray-900 text-lg">Robo por Asalto y/o Fractura de Activos</span>
                    <span class="text-sm text-gray-600 font-normal mt-1 leading-relaxed">
                        Cubre la sustracción de bienes de propiedad (activos fijos, existencias, equipo de cómputo y/o dinero) indicados en la póliza.
                    </span>
                </div>`,

                `<div class="flex flex-col">
                    <span class="font-bold text-gray-900 text-lg">Lucro Cesante</span>
                    <span class="text-sm text-gray-600 font-normal mt-1 leading-relaxed">
                        Indemniza la pérdida de utilidades brutas como consecuencia de la interrupción de las operaciones de la empresa por la ocurrencia de un evento asegurado en la póliza. 
                    </span>
                </div>`,

                `<div class="flex flex-col">
                    <span class="font-bold text-gray-900 text-lg">Deshonestidad de Empleados</span>
                    <span class="text-sm text-gray-600 font-normal mt-1 leading-relaxed">
                        Esta póliza cubre los actos de deshonestidad de los trabajadores dentro de la empresa, siempre que los trabajadores sean identificados como tales.
                    </span>
                </div>`
            ]
        },
        {
            titulo: "Seguros de Transporte de Mercancía",
            // Descripción corta para la tarjeta
            descripcion: "Protege tus bienes o mercadería durante su traslado vía aérea, marítima, terrestre o fluvial, tanto a nivel nacional como internacional.",
            
            // Descripción completa con la información de modalidades
            descripcionDetallada: `
                Si necesitas transportar un bien o mercadería vía aérea, marítima, terrestre, ferroviaria, fluvial, lacustre, te damos la mejor solución para esta necesidad. Contamos con las mejores alternativas de seguros de transporte de carga para proteger tus bienes contra los riesgos que le puedan afectar mientras sean trasladados, sea a nivel Nacional o Internacional.
                <br><br>
                Se pueden suscribir coberturas para importación y exportación, así como traslados dentro del territorio peruano, incluyendo si es necesario la cobertura de traslado de <strong>"almacén a almacén"</strong>, a término de viaje y/o traslado frecuente de mercadería.
                <br><br>
                <strong class="text-[#FF6600]">MODALIDADES DE COBERTURA:</strong>
                <p class="mt-2 mb-4">
                    Las pólizas pueden ser contratadas bajo la modalidad de <strong>“Todo Riesgo”</strong> o <strong>“Riesgos Nombrados”</strong> y brindan cobertura para todo tipo de mercadería que pertenezca al asegurado.
                </p>
                
                <strong class="text-[#FF6600]">TIPOS DE CONTRATACIÓN:</strong>
                <ul class="list-disc pl-5 mt-2 space-y-1">
                    <li>Por un viaje específico.</li>
                    <li>Por varios viajes.</li>
                    <li>Durante un año (Póliza Anual).</li>
                    <li>Póliza abierta o flotante.</li>
                </ul>
            `,
            img: "img/transporteMercancia.webp",
            
            // Lista de coberturas
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
            descripcion: "Coberturas especializadas en la ejecución de todo tipo de proyectos de Ingeniería, Obras Civiles, Minería e Industria.",
            img: "img/ingenieria.webp",
            coberturas: [
                "Rotura de Maquinaria",
                "Equipo Electrónico",
                "Todo Riesgo de Montaje (EAR)",
                "Todo Riesgo de Construcción (CAR)",
                "Todo Riesgo de Equipo Contratista (TREC)"
            ]
        },
        {
            titulo: "Seguros de Responsabilidad Civil",
            descripcion: "Este seguro cubre hasta el límite de la suma asegurada, la indemnización contra los daños personales y/o materiales causados por un accidente producido como resultado directo de las actividades o negocios a los que se dedica el asegurado, y por las cuales el asegurado sea civilmente responsable.",
            img: "img/responsabilidad.webp",
            coberturas: [
                "Responsabilidad Civil Contractual",
                "Responsabilidad Civil Extracontractual",
                "Responsabilidad Civil Patronal",
                "Responsabilidad Civil de Productos",
                "Responsabilidad Civil Ambiental"
            ]
        },
        {
            titulo: "Seguros para el Personal",
            descripcion: "Soluciones obligatorias y complementarias para el bienestar de tus trabajadores y cumplimiento de leyes laborales.",
            img: "img/sctr.webp",
            coberturas: [
                "EPS",
                "SCTR",
                "Vida Ley"
            ]
        },

        // --- SUB-SEGUROS DETALLADOS EMPRESAS (OCULTOS) ---
        {
            titulo: "Rotura de Maquinaria",
            oculto: true,
            descripcion: "Cubre los daños ocurridos en forma accidental e imprevista que hagan necesaria una reparación o reposición.",
            img: "img/car.webp",
            coberturas: ["Defectos de construcción o montaje", "Errores de manejo", "Cortocircuito", "Rotura por fuerza centrífuga", "Explosión", "Entre otros"]
        },
        {
            titulo: "Equipo Electrónico",
            oculto: true,
            descripcion: "Cubre daños accidentales e imprevistos a equipos de procesamiento de datos, médicos y de comunicación.",
            img: "img/car.webp",
            coberturas: ["Incendio y Rayo", "Robo y Asalto", "Daños eléctricos", "Portadores de datos"]
        },
        {
            titulo: "Todo Riesgo de Montaje (EAR)",
            oculto: true,
            descripcion: "Cubre los daños que puedan suceder durante el montaje y periodo de pruebas de todo tipo de maquinarias, aparatos, construcciones e instalaciones industriales de acuerdo a la póliza y durante el periodo de vigencia de la misma.",
            img: "img/ear.webp",
            coberturas: ["Riesgos de la naturaleza", "Errores de montaje", "Responsabilidad Civil", "Periodo de pruebas"]
        },
        {
            titulo: "Todo Riesgo de Construcción (CAR)",
            oculto: true,
            descripcion: "Cubre los daños que puedan suceder en toda clase de obras civiles en construcción de acuerdo a la póliza y durante el periodo de vigencia de la misma. Desde la excavación hasta la entrega de la obra.",
            img: "img/car.webp",
            coberturas: ["Incendio y Terremoto", "Robo de materiales", "Daños a la obra", "RC Cruzada"]
        },
        {
            titulo: "Todo Riesgo de Equipo Contratista (TREC)",
            oculto: true,
            descripcion: "Cubre los daños de origen externos a la maquinaria autopropulsada principalmente por choque, vuelco, incendio, terremoto e inundación cuando se está efectuando un trabajo en la obra, de acuerdo a la póliza y durante el periodo de vigencia de la misma.",
            img: "img/trec.webp",
            coberturas: ["Volcadura y Choque", "Incendio", "Riesgos de la naturaleza", "Robo total"]
        },
        {
            titulo: "Responsabilidad Civil Contractual",
            oculto: true,
            descripcion: "Cubre la suma que el asegurado por motivo de haber asumido una responsabilidad por cualquier contrato o convenio sea obligado legalmente a pagar como indemnización por daños corporales a terceros y/o daños a la propiedad de los mismos.",
            img: "img/rcContractual.webp",
            coberturas: ["Incumplimiento de contrato", "Daños a terceros pactados"]
        },
        {
            titulo: "Responsabilidad Civil Extracontractual",
            oculto: true,
            descripcion: "Esta cobertura tiene un propósito eminentemente mercantil y se extiende a cubrir toda responsabilidad extracontractual en que pueda incurrir el asegurado frente a terceros, de acuerdo con los límites estipulados en el contrato, siempre y cuando el daño no provenga de los riesgos expresamente excluidos de la póliza en cuanto se encuentre vigente.",
            img: "img/rcExtracontractual.webp",
            coberturas: ["Daños a terceros", "Lucro cesante de terceros", "Defensa legal"]
        },
        {
            titulo: "Responsabilidad Civil Patronal",
            oculto: true,
            descripcion: "Cubre los reclamos que interpongan contra el asegurado cualquier miembro del personal del trabajo que figure en sus planillas, por lesiones personales sufridas como consecuencia directa e inmediata de los accidentes que ocurran en la explotación del negocio y que encontrándose amparados por la ley de Accidentes de Trabajo, pudieran motivar una reclamación adicional a las establecidas por la indicada Ley de Accidentes de Trabajo.",
            img: "img/rcPatronal.webp",
            coberturas: ["Demandas de empleados", "Accidentes laborales", "Enfermedades profesionales"]
        },
        {
            titulo: "Responsabilidad Civil de Productos",
            oculto: true,
            descripcion: "Cubre todos los reclamos que el asegurado tenga que pagar por Responsabilidad Civil Extracontractual como consecuencia de muerte, lesiones corporales o enfermedad de terceras personas y/o la pérdida o daño a la propiedad de las mismas por causa directa del uso o consumo de productos y/o mercaderías que sean fabricados, vendidos, reparados, acondicionados, modificados, manipulados, suministrados y distribuidos por el asegurado en la explotación normal de su negocio.",
            img: "img/rcProductos.webp",
            coberturas: ["Defectos de fabricación", "Daños por consumo", "Retiro de productos (Recall)"]
        },
        {
            titulo: "Responsabilidad Civil Ambiental",
            oculto: true,
            descripcion: "Cubre la responsabilidad por contaminación y/o polución súbita, imprevista y accidental que afecte a terceros.",
            img: "img/rcAmbiental.webp",
            coberturas: ["Contaminación súbita", "Gastos de limpieza", "Daños a terceros"]
        },
        {
            titulo: "EPS",
            oculto: true, // Mantenlo en true para que funcione como sub-detalle
            
            // Descripción corta
            descripcion: "Gestión de salud privada (Clínicas) complementando a EsSalud. Financiado con parte del aporte obligatorio del 9%.",

            // Descripción detallada con el formato solicitado
            descripcionDetallada: `
                Las Entidades Prestadoras de Salud (EPS) son organizaciones cuyo fin es gestionar el financiamiento de servicios a través de redes de salud privadas (clínicas, laboratorios, etc.), complementando la cobertura de EsSalud.
                <br><br>
                Las EPS gestionan servicios de salud para los trabajadores de una empresa, con la finalidad de obtener mejores atenciones para su salud y la de sus familias.
                <br><br>
                <strong class="text-[#FF6600]">¿CÓMO FUNCIONA?</strong>
                <br>
                Las empresas por ley aportan el 9% de la planilla a ESSALUD. Al elegir una EPS, este aporte se redistribuye para cubrir diferentes capas de atención:
                <ul class="list-disc pl-5 mt-2 space-y-1">
                    <li><strong>2.25% para la EPS:</strong> Cubre diagnósticos de capa simple (atenciones frecuentes, ambulatorias) en clínicas privadas.</li>
                    <li><strong>6.75% se mantiene en ESSALUD:</strong> Para cubrir diagnósticos de capa compleja y subsidios.</li>
                </ul>
                <br>
                <strong class="text-[#FF6600]">COBERTURA Y PAGOS:</strong><br>
                El trabajador asume el restante de la prima del plan elegido, teniendo así acceso a atención médica en las mejores redes de clínicas a un precio bajo, sin perder el respaldo de EsSalud para casos graves.
            `,
            
            img: "img/eps.webp", // Asegúrate de que la imagen exista

            // Coberturas con el diseño flex column y estilos de texto
            coberturas: [
                `<div class="flex flex-col">
                    <span class="font-bold text-gray-900 text-lg">Capa Simple (EPS)</span>
                    <span class="text-sm text-gray-600 font-normal mt-1 leading-relaxed">
                        Atenciones más frecuentes y menos complicadas, principalmente ambulatorias, atendidas en <strong>Redes Privadas (Clínicas)</strong>.
                    </span>
                </div>`,

                `<div class="flex flex-col">
                    <span class="font-bold text-gray-900 text-lg">Capa Compleja (EsSalud)</span>
                    <span class="text-sm text-gray-600 font-normal mt-1 leading-relaxed">
                        Casos de mayor severidad y diagnósticos complejos. Se mantiene la cobertura en <strong>EsSalud</strong> con el 6.75% del aporte.
                    </span>
                </div>`,

                `<div class="flex flex-col">
                    <span class="font-bold text-gray-900 text-lg">Beneficio para el Trabajador</span>
                    <span class="text-sm text-gray-600 font-normal mt-1 leading-relaxed">
                        Acceso a mejores redes de clínicas y laboratorios a bajo costo, complementando su seguridad social.
                    </span>
                </div>`
            ]
        },
        {
            titulo: "SCTR",
            oculto: true, // BORRA ESTA LÍNEA si quieres que se vea la tarjeta también aquí
            
            // Usamos la misma descripción corta nueva
            descripcion: "Seguro obligatorio (Ley 26790) para actividades de alto riesgo. Cubre Salud (100% integral) y Pensiones por accidente o enfermedad profesional.",
            
            // Usamos EXACTAMENTE la misma descripción detallada que en Obligatorios
            descripcionDetallada: `
                El Seguro Complementario de Trabajo de Riesgo (SCTR) es un seguro obligatorio que deben contratar las empresas cuyas actividades han sido calificadas como actividades de alto riesgo, de acuerdo con el Anexo 5 de la Ley N.º 26790. Este seguro protege a los trabajadores frente a accidentes de trabajo y enfermedades profesionales, y está conformado por dos coberturas: Salud y Pensiones.
                <br><br>
                <strong class="text-[#FF6600]">PRINCIPALES ACTIVIDADES DE ALTO RIESGO:</strong>
                <p class="text-sm mb-2">El SCTR ampara a los trabajadores que realizan, entre otras, las siguientes actividades:</p>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-1 text-sm bg-gray-50 p-4 rounded-lg border border-gray-100 mb-4">
                    <li>Extracción de madera y pesca</li>
                    <li>Explotación de minas (carbón/metal)</li>
                    <li>Producción de petróleo y gas natural</li>
                    <li>Industria del tabaco, textil y cuero</li>
                    <li>Industria química y petroquímica</li>
                    <li>Fabricación de plásticos y vidrio</li>
                    <li>Industria básica de hierro y acero</li>
                    <li>Fabricación de maquinaria</li>
                    <li>Electricidad, gas y vapor</li>
                    <li>Construcción y transporte aéreo</li>
                    <li>Servicios de saneamiento</li>
                    <li>Servicios médicos y odontológicos</li>
                    <li>Manipuleo de carga y estiba</li>
                    <li>Periodistas (trabajo de campo)</li>
                </div>
            `,
            img: "img/sctr.webp",
            
            // Usamos las mismas coberturas detalladas
            coberturas: [
                `<div class="flex flex-col">
                    <span class="font-bold text-gray-900 text-lg">Cobertura de Salud</span>
                    <span class="text-sm text-gray-600 font-normal mt-1 leading-relaxed">
                        Garantiza atención médica integral al 100% (consultas, cirugías, farmacia, rehabilitación y prótesis) hasta el restablecimiento total, por accidente o enfermedad profesional.
                    </span>
                </div>`,

                `<div class="flex flex-col">
                    <span class="font-bold text-gray-900 text-lg">Cobertura de Pensiones</span>
                    <span class="text-sm text-gray-600 font-normal mt-1 leading-relaxed">
                        Protege en caso de Invalidez (parcial/total) otorgando pensión vitalicia, Fallecimiento (pensión a beneficiarios) y Gastos de Sepelio.
                    </span>
                </div>`,

                `<div class="flex flex-col">
                    <span class="font-bold text-gray-900 text-lg">Accidente de Trabajo</span>
                    <span class="text-sm text-gray-600 font-normal mt-1 leading-relaxed">
                        Todo suceso repentino en el trabajo que produzca lesiones, invalidez o muerte. Ejemplos: caídas de objetos, lesiones graves en industria.
                    </span>
                </div>`,

                `<div class="flex flex-col">
                    <span class="font-bold text-gray-900 text-lg">Enfermedad Profesional</span>
                    <span class="text-sm text-gray-600 font-normal mt-1 leading-relaxed">
                        Adquirida por exposición directa (física/química). Ejemplos: Neumoconiosis (polvos), Lumbalgias (carga), Hipoacusia (ruido).
                    </span>
                </div>`
            ]
        },
        {
            titulo: "Vida Ley",
            oculto: true, // BORRA ESTA LÍNEA si quieres que aparezca visible en la lista de Empresas
            
            // Misma descripción corta
            descripcion: "Seguro obligatorio para trabajadores en planilla (D.L. 688). Indemnización de 16 a 32 sueldos por muerte o invalidez.",
            
            // Misma descripción detallada completa
            descripcionDetallada: `
                El Seguro Vida Ley es un seguro obligatorio que el empleador debe contratar para sus trabajadores en planilla, conforme al Decreto Ley N.º 688. Este seguro cubre los riesgos de muerte natural, muerte accidental e invalidez total y permanente por accidente.
                <br><br>
                <strong class="text-[#FF6600]">OBLIGATORIEDAD:</strong>
                <ul class="list-disc pl-5 mt-2 space-y-1">
                    <li><strong>Obligatorio:</strong> Para trabajadores que hayan cumplido 4 años de servicios en planilla.</li>
                    <li><strong>Opcional:</strong> Para trabajadores con 3 meses de servicios (siempre que se contrate de manera colectiva).</li>
                </ul>
                <br>
                <strong class="text-[#FF6600]">CÁLCULO DE INDEMNIZACIONES:</strong><br>
                Los montos de indemnización están estandarizados por ley y se calculan en función de la remuneración mensual habitual del trabajador (según boleta de pago), con un tope máximo asegurado. El pago se realiza en una sola armada a los beneficiarios o al trabajador.
                <br><br>
                <em>*Algunas aseguradoras ofrecen coberturas complementarias como valor agregado.</em>
            `,
            img: "img/vidaley.webp",
            
            // Mismas coberturas detalladas
            coberturas: [
                `<div class="flex flex-col">
                    <span class="font-bold text-gray-900 text-lg">Muerte Natural</span>
                    <span class="text-sm text-gray-600 font-normal mt-1 leading-relaxed">
                        Indemnización equivalente a <strong>16 remuneraciones</strong> asegurables.
                    </span>
                </div>`,

                `<div class="flex flex-col">
                    <span class="font-bold text-gray-900 text-lg">Muerte Accidental</span>
                    <span class="text-sm text-gray-600 font-normal mt-1 leading-relaxed">
                        Indemnización equivalente a <strong>32 remuneraciones</strong> asegurables.
                    </span>
                </div>`,

                `<div class="flex flex-col">
                    <span class="font-bold text-gray-900 text-lg">Invalidez Total y Permanente</span>
                    <span class="text-sm text-gray-600 font-normal mt-1 leading-relaxed">
                        Por accidente. Indemnización equivalente a <strong>32 remuneraciones</strong> asegurables.
                    </span>
                </div>`
            ]
        }
    ],

// --- NUEVA CATEGORÍA ---
    OBLIGATORIOS: [
        {
            titulo: "SOAT",
            // Descripción corta (Gancho comercial)
            descripcion: "Emisión inmediata (Digital o Delivery). Te enviamos alertas de renovación. Cubre gastos médicos, invalidez y muerte en accidentes de tránsito.",
            
            // Descripción detallada con tu texto comercial
            descripcionDetallada: `
                No tienes que preocuparte por el vencimiento, ya que te enviamos alertas y recordatorios para la renovación. Además, puedes tener tu certificado digital en minutos en tu celular, o tu certificado tradicional por delivery.
                <br><br>
                Te ofrecemos los mejores precios para que obtengas este seguro obligatorio por ley, cotizados en las mejores Aseguradoras de nuestro país.
                <br><br>
                Este Seguro cubre la muerte y lesiones corporales que sufran las personas, sean ocupantes o terceros no ocupantes de un vehículo automotor, como consecuencia de un accidente de tránsito en el que dicho vehículo haya intervenido.
            `,
            img: "img/soat.webp",
            
            // Coberturas con montos UIT destacados
            coberturas: [
                `<div class="flex flex-col"><span class="font-bold text-gray-900 text-lg">Gastos Médicos</span><span class="text-sm text-gray-600 font-normal mt-1">Hasta <strong>5 UIT</strong> para atención médica, hospitalaria, quirúrgica y farmacéutica.</span></div>`,
                `<div class="flex flex-col"><span class="font-bold text-gray-900 text-lg">Muerte por Accidente</span><span class="text-sm text-gray-600 font-normal mt-1">Indemnización de <strong>4 UIT</strong> + Gastos de Sepelio hasta <strong>1 UIT</strong>.</span></div>`,
                `<div class="flex flex-col"><span class="font-bold text-gray-900 text-lg">Invalidez Permanente</span><span class="text-sm text-gray-600 font-normal mt-1">Hasta <strong>4 UIT</strong> según la Tabla de indemnizaciones de la póliza.</span></div>`,
                `<div class="flex flex-col"><span class="font-bold text-gray-900 text-lg">Incapacidad Temporal</span><span class="text-sm text-gray-600 font-normal mt-1">Hasta <strong>1 UIT</strong> (proporcional a los días de descanso médico).</span></div>`
            ]
        },

        {
            titulo: "SCTR",
            // Descripción corta
            descripcion: "Seguro obligatorio (Ley 26790) para actividades de alto riesgo. Cubre Salud (100% integral) y Pensiones por accidente o enfermedad profesional.",
            
            // Descripción detallada completa
            descripcionDetallada: `
                El Seguro Complementario de Trabajo de Riesgo (SCTR) es un seguro obligatorio que deben contratar las empresas cuyas actividades han sido calificadas como actividades de alto riesgo, de acuerdo con el Anexo 5 de la Ley N.º 26790.
                <br><br>
                Este seguro protege a los trabajadores frente a accidentes de trabajo y enfermedades profesionales, y está conformado por dos coberturas: Salud y Pensiones.
                <br><br>
                <strong class="text-[#FF6600]">PRINCIPALES ACTIVIDADES DE ALTO RIESGO:</strong>
                <p class="text-sm mb-2">El SCTR ampara a los trabajadores que realizan, entre otras, las siguientes actividades:</p>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-1 text-sm bg-gray-50 p-4 rounded-lg border border-gray-100 mb-4">
                    <li>Extracción de madera y pesca</li>
                    <li>Explotación de minas (carbón/metal)</li>
                    <li>Producción de petróleo y gas natural</li>
                    <li>Industria del tabaco, textil y cuero</li>
                    <li>Industria química y petroquímica</li>
                    <li>Fabricación de plásticos y vidrio</li>
                    <li>Industria básica de hierro y acero</li>
                    <li>Fabricación de maquinaria</li>
                    <li>Electricidad, gas y vapor</li>
                    <li>Construcción y transporte aéreo</li>
                    <li>Servicios de saneamiento</li>
                    <li>Servicios médicos y odontológicos</li>
                    <li>Manipuleo de carga y estiba</li>
                    <li>Periodistas (trabajo de campo)</li>
                </div>
            `,
            img: "img/sctr.webp",
            
            // Coberturas y Definiciones Clave
            coberturas: [
                `<div class="flex flex-col">
                    <span class="font-bold text-gray-900 text-lg">Cobertura de Salud</span>
                    <span class="text-sm text-gray-600 font-normal mt-1 leading-relaxed">
                        Garantiza atención médica integral al 100% (consultas, cirugías, farmacia, rehabilitación y prótesis) hasta el restablecimiento total del trabajador.
                    </span>
                </div>`,

                `<div class="flex flex-col">
                    <span class="font-bold text-gray-900 text-lg">Cobertura de Pensiones</span>
                    <span class="text-sm text-gray-600 font-normal mt-1 leading-relaxed">
                        Protege en caso de Invalidez (parcial/total) otorgando pensión vitalicia, Fallecimiento (pensión a beneficiarios) y Gastos de Sepelio.
                    </span>
                </div>`,

                `<div class="flex flex-col">
                    <span class="font-bold text-gray-900 text-lg">Accidente de Trabajo</span>
                    <span class="text-sm text-gray-600 font-normal mt-1 leading-relaxed">
                        Todo suceso repentino en el trabajo que produzca lesiones, invalidez o muerte. Ejemplos: caídas de objetos, lesiones graves en industria, pérdida de miembros.
                    </span>
                </div>`,

                `<div class="flex flex-col">
                    <span class="font-bold text-gray-900 text-lg">Enfermedad Profesional</span>
                    <span class="text-sm text-gray-600 font-normal mt-1 leading-relaxed">
                        Adquirida por exposición directa a agentes físicos/químicos. Comunes: Neumoconiosis (polvos), Lumbalgias (carga pesada), Hipoacusia (ruido).
                    </span>
                </div>`
            ]
        },

        {
            titulo: "Vida Ley",
            
            // Misma descripción corta
            descripcion: "Seguro obligatorio para trabajadores en planilla (D.L. 688). Indemnización de 16 a 32 sueldos por muerte o invalidez.",
            
            // Misma descripción detallada completa
            descripcionDetallada: `
                El Seguro Vida Ley es un seguro obligatorio que el empleador debe contratar para sus trabajadores en planilla, conforme al Decreto Ley N.º 688. Este seguro cubre los riesgos de muerte natural, muerte accidental e invalidez total y permanente por accidente.
                <br><br>
                <strong class="text-[#FF6600]">OBLIGATORIEDAD:</strong>
                <ul class="list-disc pl-5 mt-2 space-y-1">
                    <li><strong>Obligatorio:</strong> Para trabajadores que hayan cumplido 4 años de servicios en planilla.</li>
                    <li><strong>Opcional:</strong> Para trabajadores con 3 meses de servicios (siempre que se contrate de manera colectiva).</li>
                </ul>
                <br>
                <strong class="text-[#FF6600]">CÁLCULO DE INDEMNIZACIONES:</strong><br>
                Los montos de indemnización están estandarizados por ley y se calculan en función de la remuneración mensual habitual del trabajador (según boleta de pago), con un tope máximo asegurado. El pago se realiza en una sola armada a los beneficiarios o al trabajador.
                <br><br>
                <em>*Algunas aseguradoras ofrecen coberturas complementarias como valor agregado.</em>
            `,
            img: "img/vidaley.webp",
            
            // Mismas coberturas detalladas
            coberturas: [
                `<div class="flex flex-col">
                    <span class="font-bold text-gray-900 text-lg">Muerte Natural</span>
                    <span class="text-sm text-gray-600 font-normal mt-1 leading-relaxed">
                        Indemnización equivalente a <strong>16 remuneraciones</strong> asegurables.
                    </span>
                </div>`,

                `<div class="flex flex-col">
                    <span class="font-bold text-gray-900 text-lg">Muerte Accidental</span>
                    <span class="text-sm text-gray-600 font-normal mt-1 leading-relaxed">
                        Indemnización equivalente a <strong>32 remuneraciones</strong> asegurables.
                    </span>
                </div>`,

                `<div class="flex flex-col">
                    <span class="font-bold text-gray-900 text-lg">Invalidez Total y Permanente</span>
                    <span class="text-sm text-gray-600 font-normal mt-1 leading-relaxed">
                        Por accidente. Indemnización equivalente a <strong>32 remuneraciones</strong> asegurables.
                    </span>
                </div>`
            ]
        }
    ]

};