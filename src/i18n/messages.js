import { es, en, pt } from 'vuetify/locale'
const messages = {
  en: {
    $vuetify: {
      ...en,
      dataIterator: {
        rowsPerPageText: 'Items per page:',
        pageText: '{0}-{1} of {2}',
      },
    },
    validation: {
       required: "This field is required.",
       min: "The value must be at least {length} characters long.",
       email: "The email is not valid.",
       numero: "Only numeric values are allowed."
     },
     detalleCurso: {
       titulo: "Wound Care Education in Pharmacies",
       modulos: "6"
     },
     login: {
       bienvenido: "WELCOME!",
       mensaje: "Please enter your details below to start the course:",
       usuario: "USER",
       contrasena: "PASSWORD",
       ingresar: "LOG IN",
       registrarse: "REGISTER",
       olvido: "FORGOT YOUR PASSWORD? CLICK HERE"
     },
     recuperar: {
        titulo: 'RECOVER YOUR PASSWORD',
        mensaje: 'Forgot your password? Don’t worry, enter the registered email and we will send you a message with the password.',
        correo: 'EMAIL',
        recuperar: 'RECOVER',
        inicio: 'LOG IN',
        listo: 'DONE!',
        enviado: 'We have sent an email to {correo} with the password.',
        aclaracion: 'If the email doesn’t appear soon, check the spam or junk folder. We have sent it from <b>ingreso@leukoplastfarmacias.com</b>',
        volver: 'RETURN TO LOG IN'
    },
    registro: {
        titulo: 'Registration',
        mensaje: 'Enter your details to register:',
        nombre: 'First Name',
        apellido: 'Last Name',
        dni: 'Identification Number',
        cargo: 'Position',
        farmacia: 'Pharmacy Name',
        pais: 'Country',
        ciudad: 'City',
        telefono: 'Mobile Number',
        correo: 'Email',
        usuario: 'Username',
        contrasena: 'Password',
        politica: 'Read the privacy and data handling policy',
        aqui: 'HERE',
        usoDatos: 'I confirm that I have read this authorization. By accepting, I expressly, voluntarily, and knowingly authorize BSN MEDICAL LTDA to manage, process, handle, and use my personal data.',
        enviar: 'SEND REQUEST',
        obligatorio: 'Fields marked with <span style="color: red;">*</span> are required.',
        mensajeRegistro: 'The request has been successfully submitted.',
        mensajeRegistro2: 'The response will be sent to the registered email.',
        iniciar: 'CLICK HERE TO START',
        cliente: 'Client/Supplier'
    },
    cambiarContrasena: {
        titulo: 'Update Password',
        mensaje: 'You have recently reset your password. Please, we ask that you set a new one.',
        confirmar: 'CONFIRM PASSWORD',
      },
    terminos:{
      titulo: "PERSONAL DATA PROCESSING AUTHORIZATION",
      politica: "Global Policy:",
      link_politica: "Privacy Policy (essity.es)",
      regresar: "RETURN",
      colombia: "COLOMBIA",
      chile: "CHILE",
      mexico: "MEXICO"
    },
    inicio: {
      titulo: "Leukoplast pharmacies",
      bienvenido: "WELCOME",
      prueba: "Knowledge test",
      avance: "Course progress",
      prueba_msg: "* This grade is an average of the performance obtained throughout the course",
      iniciar: "START",
      reintentar: "RETRY",
      salir: "LOG OUT"
    },
    dashboard: {
      filtro: "FILTER BY",
      campo: {
        email: "Email",
        nombre: "First name",
        apellido: "Last name",
        modulo: "Module",
        puntuacion: "Score",
        prueba: "Knowledge test",
        certificado: "Certificate"
      },
      enviar: "Send",
      reenviar: "Resend",
      enviar_ok: "Email sent",
      enviar_error: "The email could not be sent",
      filtro1: {
        titulo: "Users",
        registrado: "Registered",
        finalizo: "Completed"
      },
      filtro2: {
        titulo: "Completed Modules",
        modulo: "Module ",
        todos: "All",
        ninguno: "None"
      },
      filtro3: {
        titulo: "Pending Modules"
      },
      filtro4: {
        titulo: "Knowledge test",
        aprobada: "Test passed",
        reprobada: "Test failed",
        noregistra: "Test pending"
      },
      filtro5: {
        titulo: "Certificate status",
        enviado: "Sent",
        noenviado: "Pending to send",
        nodisponible: "Not available"
      }
    },
    api: {
      consulta: "Querying information.",
      error: "Error connecting to the server.",
      titulo_error: "Attention"
    }
  },
  es: {
    $vuetify: {
      ...es,
      dataIterator: {
        rowsPerPageText: 'Elementos por pagina:',
        pageText: '{0}-{1} de {2}',
      },
    },
    validation: {
      required: 'Este campo es obligatorio.',
      min: 'El valor debe tener al menos {length} caracteres.',
      email: 'El correo electrónico no es válido.',
      numero: 'Solo se admiten valores numéricos.'
    },
    detalleCurso:{
      titulo:'Educación sobre el cuidado de heridas en las farmacias',
      modulos:'6'
    },
    login:{
      bienvenido:'¡BIENVENIDO!',
      mensaje:'A continuación ingrese sus datos para iniciar el curso:',
      usuario:'USUARIO',
      contrasena:'CONTRASEÑA',
      ingresar:'INGRESAR',
      registrarse:'REGISTRARSE',
      olvido:'¿OLVIDÓ SU CONTRASEÑA? CLIC AQUÍ'
    },
    recuperar:{
      titulo:'RECUPERAR SU CONTRASEÑA',
      mensaje:'¿Olvidó su contraseña? No se preocupe, ingrese el correo electrónico registrado y le enviaremos un mensaje con la contraseña.',
      correo:'CORREO ELECTRÓNICO',
      recuperar:'RECUPERAR',
      inicio:'INICIAR SESIÓN',
      listo:'¡LISTO!',
      enviado:'Hemos enviado un correo electrónico a {correo} con la contraseña.',
      aclaracion:'Si el correo electrónico no aparece pronto, compruebe la carpeta de correo no deseado o Spam. Lo hemos enviado desde <b>ingreso@leukoplastfarmacias.com</b>',
      volver:"VOLVER A INICIAR SESIÓN"
    },
    registro:{
      titulo:'Registro',
      mensaje:'Ingresar sus datos para registrarse:',
      nombre:"Nombres",
      apellido:"Apellidos",
      dni:'Número de identificación',
      cargo:'Cargo',
      farmacia:'Nombre de Farmacia',
      pais:'Pais',
      ciudad:'Ciudad',
      telefono:'Número de móvil',
      correo:'Email',
      usuario:"Usuario",
      contrasena:'Contraseña',
      politica:'Leer la politica de privacidad y manejo de datos',
      aqui:'AQUÍ',
      usoDatos:'Acredito que he leído la presente autorización. Con mi aceptación, autorizo de manera expresa, voluntaria e informada a BSN MEDICAL LTDA para que administre, procese, trate y utilice mis datos personales.',
      enviar:'ENVIAR SOLICITUD',
      obligatorio:'Los campos marcados con <span style="color: red;">*</span> son obligatorios.',
      mensajeRegistro:'La solicitud ha sido enviada con exito.',
      mensajeRegistro2:'La respuesta llegará al email registrado.',
      iniciar:'DA CLIC AQUÍ PARA INICIAR',
      cliente:'Cliente/Proveedor'
    },
    cambiarContrasena:{
      titulo:'Actualizar contraseña',
      mensaje:'Recientemente ha restablecido su contraseña. Por favor, le solicitamos que establezca una nueva.',
      confirmar:'CONFIRMAR LA CONTRASEÑA',
    },
    terminos:{
      titulo:'AUTORIZACIÓN TRATAMIENTO DE DATOS PERSONALES',
      politica:'Política global:',
      link_politica:'Política de Privacidad (essity.es)',
      regresar: 'REGRESAR',
      colombia:"COLOMBIA",
      chile:"CHILE",
      mexico:"MÉXICO",
      politica_colombia:'<p class="text-h6 font-weight-bold textoRojo">Colombia</p><p class="text-body-2 text-justify"> BSN MEDICAL LTDA (Empresa perteneciente al Grupo Essity), en cumplimiento de la normativa del país en relación la protección de datos personales y demás normas locales y tratados internacionales que lo complementen o modifiquen es responsable del tratamiento de sus datos personales. </p><br><p class="text-subtitle-1 font-weight-bold">Tratamiento y finalidades</p><p class="text-body-2 text-justify">Sus datos serán utilizados para contactarlo mediante aplicaciones de mensajería instantánea (Whatsapp o similares), redes sociales, correo electrónico o físico para el envío de: <b>a)</b> Actividades de mercadeo, promoción y publicidad; <b>b)</b> Informar sobre promociones, descuentos, lanzamientos, cambios de productos y políticas; <b>c)</b> Analizar las estrategias comerciales; <b>d)</b> Contactar al titular; <b>e)</b> Facturación electrónica; <b>f)</b> Gestionar peticiones, quejas, reclamos o solicitudes de garantía, <b>g)</b> Transferir y/o trasmitir datos personales sensibles a las entidades públicas competentes, ya sea en virtud de mandato legal u orden judicial o administrativa, con ocasión o sospecha de eventos adversos que haya tenido conocimiento BSN MEDICAL LTDA, relativos a reclamaciones técnicas u otros; <b>h)</b> Transferir los datos personales a empresas filiales, vinculadas o matriz de BSN MEDICAL LTDA o terceros para la ejecución de las finalidades enunciadas. <b>i)</b> Transmitir los datos al encargado designado; <b>j)</b> Envío de información referente a uso y cuidado de dispositivos médicos, ya sea de forma directa o a través del encargado. <b>k)</b> Envío de actividades de fidelización, capacitación y/o entrenamientos.</p><br><p class="text-subtitle-1 font-weight-bold">Derechos del Titular</p><p class="text-body-2 text-justify">Como Titular Usted podrá: Acceder, conocer, actualizar y rectificar sus datos, así como a suprimirlos o revocar la presente autorización. Igualmente podrá pedir prueba de la autorización y del uso dado a los datos, así como presentar quejas ante la autoridad competente ante el incumplimiento de la normativa sobre protección de datos personales. El medio dispuesto para ejercer los derechos como titular será el correo electrónico: <a href="informacion.datos@essity.com">informacion.datos@essity.com</a></p><br><p class="text-subtitle-1 font-weight-bold">Información adicional</p><p class="text-body-2 text-justify">Para mayor información acceder a nuestra Política de Tratamiento en la página web: <a href="web.medical.essity.com/cn/afmoa/tratamientodatos">web.medical.essity.com/cn/afmoa/tratamientodatos</a></p>',
      politica_chile:'<div class="v-container v-locale--is-ltr"><p class="text-h6 font-weight-bold textoRojo">CHILE</p><div class="v-row"><div class="v-col-12"><br><p class="text-subtitle-1 textoRojo font-weight-bold">1. Personas a las que está dirigida la política de BSN MEDICAL SPA.</p><p class="text-body-2 text-justify">Esta política está dirigida todos los titulares de información personal que sea utilizada y/o se encuentre en las bases de datos de la compañía BSN MEDICAL LTDA. (en adelante “BSN”). Para tal efecto, BSN es quien actúa en calidad de “Responsable” del Tratamiento de los Datos Personales.</p><br><p class="text-subtitle-1 textoRojo font-weight-bold">2. Responsable del Tratamiento.</p><p class="text-body-2 text-justify">El Responsable del Tratamiento de los Datos Personales es BSN, sociedad identifi cada con NIT No. 805.019.723 – 0, y con domicilio en la ciudad de Santiago de Cali, Valle del Cauca, con la siguiente información de contacto: i) dirección en la Carrera 36 No. 13-451, en el municipio de Acopi -Yumbo, Valle del Cauca, Colombia; ii) teléfono (2) 651 0200; y, correo electrónico informacion.datos@essity.com.</p><br><p class="text-subtitle-1 textoRojo font-weight-bold">3. Ámbito legal de la Política.</p><p class="text-body-2 text-justify">De conformidad con lo dispuesto en la Constitución Política de Colombia en su artículo 15, la Ley 1581 de 2012 y su Decreto Reglamentario 1377 de 2013, deberá existir un tratamiento adecuado de los datos personales por quienes ostentan la calidad de Responsables de las bases de datos que se encuentren en su poder.</p><p class="text-body-2 text-justify"> Adicional a lo anterior, el literal k) del artículo 18 de la Ley 1581 de 2012 obliga a los responsables del tratamiento de datos personales a "adoptar un manual interno de políticas y procedimientos para garantizar el adecuado cumplimiento de la presente ley y en especial, para la atención de consultas y reclamos".</p><p class="text-body-2 text-justify"> El artículo 25 de la misma ley establece que las políticas de tratamiento de datos son de obligatorio cumplimiento y que su desconocimiento acarreará sanciones. Dichas políticas no pueden garantizar un nivel de tratamiento inferior al establecido en la Ley 1581 de 2012.</p><br><p class="text-subtitle-1 textoRojo font-weight-bold">4. Definiciones</p><p class="text-body-2 text-justify">BSN tiene en cuenta las siguientes definiciones en el tratamiento de datos personales:</p><p class="text-body-2 text-justify">Autorización: Consentimiento previo, expreso e informado del Titular para llevar a cabo el Tratamiento de datos personales</p><p class="text-body-2 text-justify">Base de Datos: Conjunto organizado de datos personales que sea objeto de Tratamiento</p><p class="text-body-2 text-justify">Dato personal: Cualquier información vinculada o que pueda asociarse a una o varias personas naturales determinadas o determinables, de modo que permitan su identificación.</p><p class="text-body-2 text-justify">Dato personal sensible: Cualquier información que pueda afectar la intimidad del Titular o cuyo uso indebido puede generar su discriminación, tales como aquellos que revelen el origen racial o étnico, la orientación política, las convicciones religiosas o filosóficas, la pertenencia a sindicatos, organizaciones sociales, de derechos humanos o que promueva intereses de cualquier partido político o que garanticen los derechos y garantías de partidos políticos de oposición, así como los datos relativos a la salud, a la vida sexual y los datos biométricos.</p><p class="text-body-2 text-justify">Encargado del Tratamiento: Persona natural o jurídica, pública o privada, que por sí misma o en asocio con otros, realice el Tratamiento de datos personales por cuenta del responsable del Tratamiento.</p><p class="text-body-2 text-justify">Responsable del Tratamiento: Persona natural o jurídica, pública o privada, que por sí misma o en asocio con otros, decida sobre la base de datos y el Tratamiento de los datos.</p><p class="text-body-2 text-justify">Titular: Persona natural cuyos datos personales sean objeto de Tratamiento.</p><p class="text-body-2 text-justify">Tratamiento: Cualquier operación o conjunto de operaciones sobre datos personales, tales como la recolección, almacenamiento, uso, circulación o supresión.</p><br><p class="text-subtitle-1 textoRojo font-weight-bold">5. Obligaciones.</p><p class="text-body-2 text-justify">Estas políticas son de obligatorio y estricto cumplimiento para BSN, en calidad de responsable, así como todos los empleados o terceros que obren en nombre de la Compañía, o que sin actuar en nombre de esta traten datos personales por disposición de ésta como encargados.</p><p class="text-body-2 text-justify">Tanto los responsables como los encargados, entiéndase: empleados, contratistas y terceros deben observar y respetar estas políticas en el cumplimiento de sus funciones y/ o actividades aún después de terminados los vínculos legales, comerciales, laborales o de cualquier índole.</p><p class="text-body-2 text-justify">De igual manera, se comprometen a guardar estricta confidencialidad en relación con los datos tratados.</p><p class="text-body-2 text-justify">En caso de incumplimiento de alguna de las obligaciones aquí mencionadas, por parte de las personas señaladas, los titulares de la información disponen del correo electrónico información.datos@essity.com, en donde podrán poner cualquier queja, reclamo o consulta con relación al tratamiento o disposición de sus datos personales.</p><br><p class="text-subtitle-1 textoRojo font-weight-bold">6. Estructura Corporativa.</p><p class="text-body-2 text-justify">En razón a lo dispuesto en el Decreto 1377 de 2013 y en su Ley marco 1581 de 2012, se deja constancia que los Responsables del Tratamiento cuentan con la estructura administrativa necesaria para asegurar la atención de los requerimientos, quejas, consultas y reclamos relacionados con la protección de los datos que tenemos en nuestro poder.</p><p class="text-body-2 text-justify">El área administrativa de BSN, será el área encargada de recibir, tramitar y atender las comunicaciones, reclamos, quejas y consultas que directamente realizan nuestros clientes, proveedores y, en general, proveniente de cualquier titular de datos personales.</p><br><p class="text-subtitle-1 textoRojo font-weight-bold">7. Derechos aplicables a los titulares de datos personales</p><p class="text-body-2 text-justify">Los titulares de datos personales en poder de BSN tendrán derecho a: </p><p class="text-body-2 text-justify">1.Autorizar o negar el tratamiento de sus datos personales.</p><p class="text-body-2 text-justify">2.Conocer, actualizar y rectificar sus datos personales. Este derecho se podrá ejercer frente a datos parciales, inexactos, incompletos, fraccionados o, que induzcan a error. Para el efecto es necesario establecer previamente la identificación de la persona para evitar que terceros no autorizados accedan a los datos del titular del dato.</p><p class="text-body-2 text-justify">3.Obtener copia de la autorización dada por el tratamiento de sus datos. El presente derecho no podrá ser ejercido cuando la autorización haya sido exceptuada de acuerdo con el artículo 10 de la Ley 1581 de 2012.</p><p class="text-body-2 text-justify">4.Ser informado sobre el uso y alcance que BSN ha dado o dará a sus datos personales.</p><p class="text-body-2 text-justify">5.Presentar quejas ante la Superintendencia de Industria y Comercio por infracciones a la Ley 1581 de 2012, sus decretos reglamentarios, las demás normas que las modifiquen, adicionen o complementen o, la presente Política.</p><p class="text-body-2 text-justify">6.Solicitar el trámite a consultas y reclamos siguiendo las pautas establecidas en la ley y en la presente política.</p><p class="text-body-2 text-justify">7.Acceder a la solicitud de revocatoria de la autorización y/o supresión del dato personal, cuando la Superintendencia de Industria y Comercio haya determinado que en el tratamiento por parte de BSN se ha incurrido en conductas contrarias a la Ley 1581 de 2012 o a la Constitución.</p><p class="text-body-2 text-justify">8.Revocar la autorización y solicitar la supresión del dato, cuando no exista un deber legal o contractual que le imponga el deber de permanecer en la base de datos del Responsable o Encargado.</p><p class="text-body-2 text-justify">La solicitud de supresión de la información y la revocatoria de la autorización no procederán cuando el titular tenga un deber legal o contractual de permanecer en la base de datos del Responsable o Encargado.</p><p class="text-body-2 text-justify">9. Acceder en forma gratuita a sus datos personales. La información solicitada por el titular podrá ser suministrada por cualquier medio, incluyendo los electrónicos, según lo requiera el titular.</p><p class="text-body-2 text-justify">10. En general, a todos los derechos que las normas vigentes o futuras sobre habeas data llegaren a establecer en su favor.</p><br><p class="text-subtitle-1 textoRojo font-weight-bold">8. Datos sensibles o datos de menores de edad.</p><p class="text-body-2 text-justify">De acuerdo con lo dispuesto en el artículo 5° de la Ley 1581 de 2012, por datos sensibles se entienden aquellos que afectan la intimidad del Titular o cuyo uso indebido puede generar su discriminación, tales como aquellos que revelen el origen racial o étnico, la orientación política, las convicciones religiosas o filosóficas, la pertenencia a sindicatos, organizaciones sociales, de derechos humanos o que promueva intereses de cualquier partido político o que garanticen los derechos y garantías de partidos políticos de oposición así como los datos relativos a la salud, a la vida sexual y los datos biométricos.</p><p class="text-body-2 text-justify">BSN podrá recolectar, almacenar y tratar datos personales sensibles en desarrollo de su objeto social y/o como consecuencia del cumplimiento de obligaciones contractuales o legales, respetando en todo momento los principios establecidos en el Artículo 6º de la Ley 1581 de 2012. En todo caso, BSN informará al Titular de los Datos Sensibles del carácter facultativo de las respuestas que versen sobre este tipo de datos.</p><p class="text-body-2 text-justify">BSN no solicita con conocimiento información personal o recolecta información personal directamente de niños y en general de menores de edad. Si BSN descubre que accidentalmente recolectó información personal de menores, removerá la información personal de ese menor de sus registros tan pronto como sea razonablemente posible.</p><p class="text-body-2 text-justify">En todo caso, BSN puede recolectar, con autorización expresa, datos sensibles e información personal de niños o menores de edad con consentimiento expreso sus padres o custodios, advirtiéndoles que tienen entera libertad de dar respuesta a las preguntas que versen sobre datos sensibles o sobre los datos de menores de edad.</p><br><p class="text-subtitle-1 textoRojo font-weight-bold">9. Finalidades del tratamiento de la información y datos personales</p><p class="text-body-2 text-justify">BSN recolecta información y la usa únicamente según sea necesario para los propósitos para los cuales fue obtenida. BSN podrá utilizar los Datos Personales de los Titulares para algunas o todas las siguientes finalidades:</p><p class="text-body-2 text-justify">Actividades de mercadeo y promoción de productos o servicios ofrecidos por BSN a través de diversos medios, tales como, pero sin limitarse a, visitas a clientes, telemercadeo y el envío de información por medios físicos y electrónicos tales como: correos electrónicos, mensajes MSM, WhatsApp, llamadas telefónicas, etc.</p><p class="text-body-2 text-justify">Comunicación sobre el lanzamiento de nuevos productos o servicios, o cambio en los existentes, invitación a eventos, y cualquier actividad de promoción de los productos y servicios ofrecidos por BSN.</p><p class="text-body-2 text-justify">Investigación de mercado o de estudios estadísticos.</p><p class="text-body-2 text-justify">Relacionamiento comercial y cumplimiento de obligaciones contractuales contraídas con clientes, proveedores y/o empleados.</p><p class="text-body-2 text-justify">Contacto para servicio al cliente, dentro de lo cual se incluye la evaluación de la calidad de los productos y/o servicios y la realización de encuestas de satisfacción.</p><p class="text-body-2 text-justify">Seguimiento y respuesta a Peticiones, Quejas y Reclamos.</p><p class="text-body-2 text-justify">Analizar la información para desarrollo e implementación de estrategias comerciales, así como diseñar, implementar y desarrollar, programas, proyectos y eventos.</p><p class="text-body-2 text-justify">Facturación electrónica.</p><p class="text-body-2 text-justify">Dar a conocer, transferir y/o trasmitir los datos personales dentro y fuera del país a las compañías matrices, filiales o subsidiarias de BSN o a terceros como consecuencia de un contrato, ley o vínculo lícito que así lo requiera o para implementar servicios de computación en la nube, con las mismas limitaciones y derechos;</p><p class="text-body-2 text-justify">Videovigilancia de los establecimientos de propiedad y/o uso por parte de BSN.</p><br><p class="text-subtitle-1 textoRojo font-weight-bold">10. Procedimiento para ejercer sus derechos como titular de los datos BSN.</p><p class="text-body-2 text-justify">A continuación BSN informa el procedimiento y requisitos mínimos para el ejercicio de sus derechos como Titular de Datos Personales.</p><p class="text-body-2 text-justify">La persona dispone de los siguientes medios para el ejercicio de sus derechos frente a BSN, como Titular de la información</p><p class="text-body-2 text-justify">Correo electrónico: información.datos@essity.com</p><p class="text-body-2 text-justify">La persona que ejerza alguno de los derechos contemplados en la presente Política, deberá suministrar la siguiente información:</p><p class="text-body-2 text-justify">Nombres y apellidos.</p><p class="text-body-2 text-justify">Datos de contacto (Dirección, física y/o electrónica y teléfonos de contacto),</p><p class="text-body-2 text-justify">Medios para recibir respuesta a su solicitud,</p><p class="text-body-2 text-justify">Indicación del motivo(s)/hecho(s) que dan lugar al reclamo,</p><p class="text-body-2 text-justify">Descripción del Derecho que desea ejercer ante BSN.</p><p class="text-body-2 text-justify">En caso de que lo considere necesario, la persona podrá adjuntar los documentos en los que soporte su solicitud y/o vulneración de sus derechos.</p><p class="text-body-2 text-justify">En caso que la solicitud no cumpla con los anteriores requisitos, BSN se comunicará con el interesado para informar la necesidad de subsanar cualquier inconsistencia o falta de información en su solicitud. En caso que el interesado no subsane la solicitud, transcurridos dos (2) meses desde la fecha del requerimiento por parte de BSN, se entenderá que la misma ha sido desistida por parte del Titular.</p><p class="text-body-2 text-justify">En caso de que la persona o área que recibe la solicitud no sea el competente para resolverlo, dará traslado interno a quien corresponda en un término máximo de dos (2) días hábiles e informará de la situación al interesado.</p><p class="text-body-2 text-justify">BSN tendrá los siguientes términos legales para atender la solicitud, según sea que se trate de una simple consulta o de una reclamación:</p><p class="text-body-2 text-justify">1.En caso que la solicitud corresponda exclusivamente a una consulta sobre cualquier aspecto relacionado con los datos personales y el uso que se está dando a los mismos, BSN dará respuesta a la misma en un término máximo de diez (10) días hábiles, contados a partir de la fecha de su recibo a satisfacción;</p><p class="text-body-2 text-justify">2.En caso que la solicitud corresponda un reclamo por el uso inadecuado de los datos personales o el incumplimiento de la presente política, BSN dará respuesta a la misma en un término máximo de quince (15) días hábiles, contados a partir de la fecha de su recibo a satisfacción</p><p class="text-body-2 text-justify">Cuando no fuere posible atender la solicitud (i) o (ii) dentro del respectivo término, BSN informará al interesado los motivos de la demora y la fecha en que se atenderá su solicitud, la cual en ningún caso podrá superar los cinco (5) días hábiles siguientes al vencimiento del primer término.</p><p class="text-body-2 text-justify">BSN dispondrá de un sistema de información para llevar el registro de todas las actuaciones efectuadas respecto de cada solicitud, en el cual se anotará y podrá consultar, lo siguiente:</p><p class="text-body-2 text-justify">Fecha de recibo del requerimiento.</p><p class="text-body-2 text-justify">Datos básicos del titular y/o de quien realice el reclamo.</p><p class="text-body-2 text-justify">Descripción de los motivos/hechos que dan lugar al reclamo.</p><p class="text-body-2 text-justify">Descripción de los motivos/hechos que dan lugar al reclamo.</p><br><p class="text-subtitle-1 textoRojo font-weight-bold">11. Medidas de seguridad para la protección de los datos personales.</p><p class="text-body-2 text-justify">BSN adoptará las medidas disponibles a su alcance para proteger los datos de los Titulares, en aras de impedir su adulteración, pérdida, usos y accesos no autorizados. Para ello, proporcionará las medidas de protección humanas, administrativas y tecnológicas que razonablemente están a su alcance para efectos de minimizar los riesgos en cualquier uso indebido de sus bases de datos, buscando siempre la manera de brindar una protección mayor y más eficiente a la información. Las medidas de seguridad que BSN podría utilizar cumplen con los estándares de seguridad corporativos, lo cual incluye el uso de antivirus, claves de seguridad, doble factor de autenticación, clave a los archivos informáticos, entre otros.</p><p class="text-body-2 text-justify">BSN exigirá a los proveedores de servicios que contrata, la adopción y cumplimiento de las medidas técnicas, humanas y administrativas adecuadas para la protección de los Datos Personales en relación con los cuales dichos proveedores actúen como Encargados. No obstante, BSN no se responsabiliza por cualquier consecuencia derivada de fallas técnicas o del ingreso indebido por parte de terceros a la Base de Datos o archivo en los que reposan los Datos Personales objeto de Tratamiento.</p><br><p class="text-subtitle-1 textoRojo font-weight-bold">12. Deberes de BSN respecto de la protección de datos personales.</p><p class="text-body-2 text-justify">Deberes de BSN y los terceros mencionados cuando obran como Encargados del tratamiento de datos personales.</p><br><p class="text-body-2 font-weight-bold">12.1 Respecto del titular del dato.</p><p class="text-body-2 text-justify">Garantizar al Titular el pleno y efectivo ejercicio del derecho al habeas data.</p><p class="text-body-2 text-justify">Solicitar y conservar, en las condiciones previstas en esta política, copia de la respectiva autorización otorgada por el Titular.</p><p class="text-body-2 text-justify">nformar de manera clara y suficiente al Titular sobre la finalidad de la recolección y los derechos que le asisten por virtud de la autorización otorgada.</p><p class="text-body-2 text-justify">Informar a solicitud del Titular sobre el uso dado a sus datos personales.</p><p class="text-body-2 text-justify">Tramitar las consultas y reclamos formulados en los términos señalados en la presente política.</p><br><p class="text-body-2 font-weight-bold">12.2 Respecto de la calidad, seguridad y confidencialidad de los datos personales.</p><p class="text-body-2 text-justify">Observar los principios de veracidad, calidad, seguridad y confidencialidad en los términos establecidos en la siguiente política.</p><p class="text-body-2 text-justify">Conservar la información bajo las condiciones de seguridad necesarias para impedir su adulteración, pérdida, consulta, uso o acceso no autorizado o fraudulento.</p><p class="text-body-2 text-justify">Actualizar la información cuando sea necesario.</p><p class="text-body-2 text-justify">Rectificar los datos personales cuando ello sea procedente.</p><br><p class="text-body-2 font-weight-bold">12.3 Cuando realiza el tratamiento a través de un Encargado.</p><p class="text-body-2 text-justify">Suministrar al Encargado del tratamiento únicamente los datos personales que está autorizado a suministrar a terceros.</p><p class="text-body-2 text-justify">Garantizar que la información que se suministre al Encargado del tratamiento sea veraz, completa, exacta, actualizada, comprobable y comprensible.</p><p class="text-body-2 text-justify">Comunicar de forma oportuna al Encargado del tratamiento todas las novedades respecto de los datos que previamente le haya suministrado y adoptar las demás medidas necesarias para que la información suministrada a este se mantenga actualizada.</p><p class="text-body-2 text-justify">Informar de manera oportuna al Encargado del tratamiento las rectificaciones realizadas sobre los datos personales para que éste proceda a realizar los ajustes pertinentes.</p><p class="text-body-2 text-justify">Exigir al Encargado del tratamiento, en todo momento, el respeto a las condiciones de seguridad y privacidad de la información del titular.</p><p class="text-body-2 text-justify">Informar al Encargado del tratamiento cuando determinada información se encuentre en discusión por parte del titular, una vez se haya presentado la reclamación y no haya finalizado el trámite respectivo.</p><br><p class="text-subtitle-1 textoRojo font-weight-bold">13. Cómo se podrá compartir su información personal por parte de BSN.</p><p class="text-body-2 text-justify">BSN no comparte su información personal con terceras partes que busquen usarla para propósitos de marketing, salvo que usted haya dado su consentimiento específico con relación a ello. BSN podrá revelar información personal cuando así le sea exigido por la ley, vínculo contractual o sea requerida por autoridad judicial o administrativa competente, de conformidad con lo establecido en el artículo 10 de la Ley 1581 de 2012.</p><p class="text-body-2 text-justify">BSN podrá también compartir su información personal con terceros para otras finalidades y propósitos, únicamente en las siguientes circunstancias:</p><br><p class="text-body-2 font-weight-bold">A. Afiliados</p><p class="text-body-2 text-justify">BSN puede compartir su información personal a sus afiliados o compañías relacionadas para propósitos legítimos de negocio. BSN podrá dar a conocer, transferir y/o trasmitir sus datos personales dentro y fuera del país, computación en la nube, así como a terceros a consecuencia de un contrato, ley o vínculo lícito que así lo requiera, para lo cual el titular de la información al aceptar la presente Política otorga su autorización expresa e inequívoca.</p><br><p class="text-body-2 font-weight-bold">B. Proveedores de servicios</p><p class="text-body-2 text-justify">BSN puede establecer relaciones con proveedores, agentes o contratistas para proveer servicios en su nombre, incluyendo la administración de los sitios BSN y los servicios disponibles para usted. Es posible que estas terceras partes puedan llegar a acceder o procesar su información personal para efectos de proveerle dichos servicios.</p><p class="text-body-2 text-justify">BSN requiere a esas terceras partes, quienes pueden estar localizadas en un país diferente a aquel en el cual usted accedió al sitio BSN, cumplir con la normatividad relevante de protección de datos en relación con su información personal, generalmente a través de un acuerdo escrito.</p><br><p class="text-body-2 font-weight-bold">C. Aliados y promociones conjuntas</p><p class="text-body-2 text-justify">BSN puede realizar programas copatrocinados o promociones con otra compañía y como parte de su participación en la actividad, podrá recolectar y usar su información personal. Su información personal únicamente va a ser compartida con otra compañía solo si usted ha autorizado recibir información directamente de esa compañía.</p><p class="text-body-2 text-justify">BSN le recomienda leer la política de tratamiento de datos de esa compañía de forma previa a compartir su información personal.</p><p class="text-body-2 text-justify">Si usted no desea que su información personal sea compartida con una compañía diferente a BSN, usted siempre puede decidir no participar en dicha actividad.</p><p class="text-body-2 text-justify">En cualquier caso, los terceros a quien se les compartieran sus Datos Personales están obligados a adherirse y dar cumplimiento a las políticas y estándares de seguridad de la información definidos por BSN, así como a los protocolos de seguridad que BSN aplica a todos sus procesos de protección de datos.</p><br><p class="text-subtitle-1 textoRojo font-weight-bold">14. Modificación y/o actualización de la política de protección de datos y manejo de información.</p><p class="text-body-2 text-justify">Cualquier cambio sustancial en las políticas de Tratamiento, que implique una modificación de la identificación del Responsable, o las finalidades del Tratamiento de los Datos Personales deberá ser comunicada y aceptada por parte de los Titulares de los Datos Personales. La comunicación se hará de forma oportuna a través de los medios habituales de contacto y/o a través de:</p><p class="text-body-2 text-justify">Correo electrónico enviado a los titulares.</p><p class="text-body-2 text-justify">Las comunicaciones se enviarán como mínimo veinte (20) días antes de implementar las nuevas políticas y/o actualización sustancial de la misma.</p><br><p class="text-subtitle-1 textoRojo font-weight-bold">15. Vigencia</p><p class="text-body-2 text-justify">Esta política rige a partir del día 12 de Noviembre de 2021. Todas las actualizaciones sustanciales serán oportunamente informadas a los titulares de los datos.</p><p class="text-body-2 text-justify">La vigencia de las bases de datos en donde reposa la información será igual al tiempo en que se utilice la información para las finalidades autorizadas por sus titulares. BSN eliminará la información de sus bases de datos una vez se cumpla(n) esa(s) finalidad(es) y siempre que no exista un deber legal o contractual de conservar la información</p></div></div></div>',
      politica_mexico:'<div class="v-container v-locale--is-ltr"><p class="text-h6 font-weight-bold text-red">MEXICO</p><div class="v-row"><div class="v-col-12"><br><p class="text-subtitle-1  font-weight-bold">AVISO DE PRIVACIDAD BSN MEDICAL DC, S.A. DE C.V.</p><p class="text-body-2 text-justify">BSN Medical DC S.A. de C.V. (“BSN”) reconoce la importancia que tiene el tratamiento legítimo, controlado e informado de sus datos personales, razón por la cual, de conformidad con lo establecido en la Ley Federal de Protección de Datos Personales en Posesión de los Particulares y su Reglamento, y teniendo como finalidad garantizar la privacidad de cualquier persona que haya decidido compartir con nosotros sus datos personales, BSN pone a su disposición el presente Aviso de Privacidad. </p><p class="text-body-2 text-justify">Si usted comparte información con BSN, se entenderá que usted ha revisado, leído y aceptado los términos de este Aviso de Privacidad.</p><p class="text-body-2 text-justify">Los Datos Personales que sean proporcionados a BSN por usted, con motivo de los servicios prestados, o por prestarse, por esta empresa sus tenedoras, subsidiarias y/o afiliadas, serán utilizados para, entre otros fines: identificación, operación, envío de publicidad a través de correo electrónico y otros medios electrónicos, administración y comercialización, pudiéndose transferir a terceras personas con las que, debido a la prestación de servicios, sea necesario su conocimiento. En caso de que BSN transfiera sus datos personales a un tercero que requiera conocer los mismos, BSN requerirá a los mismos cumplir con el presente Aviso de Privacidad.</p><p class="text-body-2 text-justify">La información recabada (en adelante, los “Datos Personales”) podrá ser recopilada al momento de que el Titular consienta el presente Aviso o, en su defecto, en el momento en que el Titular haga uso, por cualquier medio, del Servicio.</p><p class="text-body-2 text-justify">Se informa al Titular que la Ley Federal de Protección de Datos Personales en Posesión de Particulares (en adelante, la “Ley”) establece que el consentimiento del Titular sobre el tratamiento de los Datos Personales se entiende como tácito cuando habiéndose puesto a su disposición el Aviso de Privacidad, no manifieste oposición alguna.</p><p class="text-body-2 text-justify">Con fundamento en el artículo 8 de la Ley, en caso de que se recaben datos financieros o patrimoniales, será necesaria la aceptación expresa del Titular, en términos del segundo párrafo del artículo 8 de la Ley, por medio de una carta que el mismo firmará o por conducto del llenado de una casilla de aceptación o por medios electrónicos.</p><p class="text-body-2 text-justify">Cabe destacar que tampoco será necesario el consentimiento para el tratamiento de los datos personales cuando éste tenga el propósito de cumplir obligaciones derivadas de una relación jurídica entre el Titular y el responsable o, en su defecto, se dicte resolución por parte de la autoridad competente, en términos del artículo 10 de la Ley.</p><p class="text-body-2 text-justify">Asimismo, el Usuario será en todo momento responsable de los Datos Personales que brinde a la Plataforma de terceros que se puedan beneficiar del Servicio.</p><p class="text-body-2 text-justify">Todos los Datos serán administrados de conformidad con los principios de licitud, consentimiento, información, calidad, finalidad, lealtad, proporcionalidad y responsabilidad contenidos en la Ley Federal de Protección de Datos Personales en Posesión de los Particulares.</p><p class="text-body-2 text-justify">Todos los Datos serán administrados de conformidad con los principios de licitud, consentimiento, información, calidad, finalidad, lealtad, proporcionalidad y responsabilidad contenidos en la Ley Federal de Protección de Datos Personales en Posesión de los Particulares.</p><p class="text-body-2 text-justify">El propósito general y preponderante que persigue el tratamiento de los Datos Personales es permitir al Titular el uso del Sitio Web del Responsable, con el propósito de adquirir cualesquier productos y/o servicios allí comercializados (el “Servicio”).</p><br><p class="text-subtitle-1 textoRojo font-weight-bold">1 - DEFINICIONES</p><p class="text-body-2 text-justify">Salvo los términos definidos en diversas secciones del presente Aviso o en la Ley, los términos que aparezcan con la primera letra en mayúscula, dentro del presente Aviso, tendrán los significados que a continuación se les asignan:</p><p class="text-body-2 text-justify">Aviso.- El presente aviso de privacidad, ya sea expedido en documento físico, electrónico o en cualquier otro formato generado por el Responsable que es puesto a disposición del Titular, previo al Tratamiento de sus Datos Personales.</p><p class="text-body-2 text-justify">Base de datos.- Es el conjunto ordenado de datos personales referentes a una persona identificada o identificable.</p><p class="text-body-2 text-justify">BSN. - Se refiere a BSN Medical DC, S.A. de C.V., </p><p class="text-body-2 text-justify">Cómputo en la Nube.- Modelo de provisión externa de servicios de cómputo bajo demanda, que implica el suministro de infraestructura, plataforma o software, que se distribuyen de modo flexible, mediante procedimientos de virtualización, en recursos compartidos dinámicamente.</p><p class="text-body-2 text-justify">Datos Personales.- Cualquier información concerniente a una persona física identificada o identificable.</p><p class="text-body-2 text-justify">Datos Personales Sensibles.- Aquellos Datos Personales que afecten a la esfera más íntima de su Titular, o cuya utilización indebida pueda dar origen a discriminación o conlleve un riesgo grave para éste. En particular, se consideran sensibles aquéllos que puedan revelar aspectos como origen racial o étnico, estado de salud presente y futuro, información genética, creencias religiosas, filosóficas y morales, afiliación sindical, opiniones políticas, preferencia sexual.</p><p class="text-body-2 text-justify">Derechos “ARCO”. - Los derechos que tienen el Titular frente al Responsable, con relación a sus Datos Personales, que incluyen lo siguiente: el derecho de acceder a sus Datos Personales y a los detalles del tratamiento de los mismos, así como a rectificarlos en caso de ser inexactos o cancelarlos cuando considere que resulten ser excesivos o innecesarios para las finalidades que justificaron su obtención u oponerse al tratamiento de los mismos para fines específicos.</p><p class="text-body-2 text-justify">Disociación.- Es el procedimiento mediante el cual los datos personales no pueden asociarse al Titular ni permitir, por su estructura, contenido o grado de desagregación, la identificación del mismo.</p><p class="text-body-2 text-justify">Encargado.- La persona física o moral que sola o conjuntamente con otras trate Datos Personales por cuenta del Responsable.</p><p class="text-body-2 text-justify">Ley.- Ley Federal de Protección de Datos Personales en Posesión de Particulares.</p><p class="text-body-2 text-justify">Oficina de Privacidad.- El área o departamento destinado por el Responsable, dentro de su estructura empresarial, para la atención y solución de cualquier solicitud relacionada con los derechos que tiene el Titular respecto de sus Datos Personales.</p><p class="text-body-2 text-justify">Proveedor.- La persona física o moral de carácter privado que proporciona al Responsable los servicios de Cómputo en la Nube.</p><p class="text-body-2 text-justify">Reglamento.- Reglamento de la Ley Federal de Protección de Datos Personales en Posesión de Particulares.</p><p class="text-body-2 text-justify">Titular.- La persona física a quien corresponden los Datos Personales.</p><p class="text-body-2 text-justify">Responsable.- Persona física o moral de carácter privado que lleva a cabo el tratamiento de Datos Personales.</p><p class="text-body-2 text-justify">Titular.- La persona física a quien corresponden los Datos Personales.</p><p class="text-body-2 text-justify">Tratamiento.- La obtención, uso, divulgación o almacenamiento de Datos Personales, por cualquier medio. El uso abarca cualquier acción de acceso, manejo, aprovechamiento, transferencia o disposición de Datos Personales.</p><p class="text-body-2 text-justify">Transferencia.- Toda comunicación de Datos Personales realizada a persona distinta del Responsable o Encargado del tratamiento.</p><br><p class="text-subtitle-1 textoRojo font-weight-bold">2 - RESPONSABLE DE LA INFORMACIÓN.</p><p class="text-body-2 text-justify">Para efectos del Aviso, así como para todos los efectos legales a que haya lugar, el Responsable será BSN Medical DC, S.A. de C.V., con domicilio en Av. Santa fe 428, Torre II, Piso 12, Colonia Santa Fé Cuajimalpa, Código Postal 05348, Alcaldía Cuajimalpa, Ciudad de México será el encargado de obtener, usar, acceder, manejar, aprovechar, transferir, difundir, disponer, divulgar y/o almacenar los Datos Personales.</p><p class="text-body-2 text-justify">El Responsable podrá auxiliarse de uno o más Encargados, que actuarán a nombre y por cuenta del Responsable, para brindar un Tratamiento más eficiente a los Datos Personales. Los Encargados serán informados del debido tratamiento que deberán brindar a los Datos Personales.</p><p class="text-body-2 text-justify">El Responsable también podrá efectuar el Tratamiento de los Datos Personales utilizando el sistema de Cómputo en la Nube, por lo que el Proveedor de tales servicios estará obligado a cumplir con los mecanismos de protección y las medidas de seguridad destinadas a proteger la información contenida en los Datos Personales, de conformidad con la Ley, el Reglamento y demás disposiciones legales aplicables.</p><br><p class="text-subtitle-1 textoRojo font-weight-bold">3 - INFORMACIÓN QUE SE RECABARÁ AL SUSCRIBIR EL AVISO.</p><p class="text-body-2 text-justify">El Titular proporcionará la presente información al momento de crear su cuenta y suscribir el presente Aviso, así como al momento de modificar la información contenida en su cuenta. Los Datos Personales recopilados en las dos situaciones antes descritas son:</p><p class="text-body-2 text-justify">a. Nombre y apellidos.</p><p class="text-body-2 text-justify">b. Dirección de correo electrónico.</p><p class="text-body-2 text-justify">c. Teléfono celular.</p><p class="text-body-2 text-justify">En caso de no contar con esta información, el Responsable no estará en posibilidad de brindarle el Servicio ni permitirle prestar el Servicio en caso de que aplique.</p><p class="text-body-2 text-justify">Le informamos que en nuestra página de Internet y aplicación móvil utilizamos cookies, web beacons y otras tecnologías a través de las cuales es posible monitorear su comportamiento como Usuario de Internet, brindarle un mejor servicio y experiencia de Usuario al navegar en nuestra página/plataforma, así como ofrecerle nuevos productos y servicios basados en sus preferencias.</p><p class="text-body-2 text-justify">Los datos personales que obtenemos de estas tecnologías de rastreo son los siguientes: horario de navegación, tiempo de navegación en nuestra página de Internet, secciones consultadas, y páginas de Internet accedidas previo a la nuestra.</p><p class="text-body-2 text-justify">En caso de no contar con esta información, el Responsable no estará en posibilidad de proporcionar el Servicio.</p><br><p class="text-subtitle-1 textoRojo  font-weight-bold">4 - DATOS SENSIBLES.</p><p class="text-body-2 text-justify">Se consideran Datos Personales Sensibles aquellos Datos Personales que afecten a la esfera más íntima de su Titular, o cuya utilización indebida pueda dar origen a discriminación o conlleve un riesgo grave para éste. En particular, se consideran sensibles aquellos que puedan revelar aspectos como origen racial o étnico, estado de salud presente y futuro, información genética, creencias religiosas, filosóficas y morales, afiliación sindical, opiniones políticas, preferencia sexual.</p><p class="text-body-2 text-justify">En virtud de lo anterior, el Responsable en ningún momento recopilará ni almacenará Dato Personal Sensible alguno del Titular.</p><br><p class="text-subtitle-1 textoRojo  font-weight-bold">5 - FINALIDADES DEL TRATAMIENTO.</p><p class="text-body-2 text-justify">Los Datos Personales que recopile el Responsable, ya sea de forma personal, de forma directa o de forma indirecta, serán utilizados para las siguientes finalidades:</p><p class="text-body-2 text-justify">a) Permitir al Titular el uso del Sitio Web del Responsable, con el propósito de adquirir cualesquier productos y/o servicios ahí comercializados (“Servicio”).</p><p class="text-body-2 text-justify">b) Llevar a cabo la prestación del Servicio y/o la entrega de cualesquier productos vendidos al Titular.</p><p class="text-body-2 text-justify">c) Para contacto con el Usuario de manera esporádica y/o eventual, con el objeto de proporcionar información relacionada con los productos y/o servicios que brinda el Responsable, así como otros productos con fines mercadotécnicos publicitarios o de prospección comercial.</p><p class="text-body-2 text-justify">d) Para contacto con el Usuario en caso de que haya existido alguna vulneración de seguridad ocurrida en cualquier fase del Tratamiento.</p><p class="text-body-2 text-justify">e) Envío de publicidad a través de correo electrónico, mensajes de texto y otros medios electrónicos</p><p class="text-body-2 text-justify">Cabe destacar que los incisos a); b); c) y d) anteriores son imprescindibles para la prestación del Servicio.</p><br><p class="text-subtitle-1 textoRojo  font-weight-bold">6 - TRANSFERENCIAS.</p><p class="text-body-2 text-justify">El Responsable podrá transferir los Datos Personales objeto del presente Aviso previo consentimiento del Titular, a un tercero que se dedique preponderantemente a brindar el Servicio (en adelante el “Prestador de Servicios”), con la finalidad de que el referido servicio pueda ser prestado de manera satisfactoria. Los Datos Personales sólo serán compartidos con empresas filiales de BSN y el Prestador de Servicios mientras se ejecute el Servicio, mismos que consistirán en:</p><p class="text-body-2 text-justify">(i) el nombre del Titular;</p><p class="text-body-2 text-justify">(ii) la ubicación del Titular; y</p><p class="text-body-2 text-justify">(iii) el número celular registrado del Titular.</p><p class="text-body-2 text-justify">Asimismo, los Datos Personales podrán ser compartidos con terceros con el fin de poder proporcionar productos con fines mercadotécnicos publicitarios o de prospección comercial. De igual forma, los Datos Personales podrán ser transferidos a empresas subsidiarias o controladoras del Responsable para fines estadísticos. Se informa al Usuario que la Ley establece que el consentimiento del Titular para el tratamiento de los Datos Personales se entiende como tácito cuando habiéndose puesto a su disposición el Aviso de Privacidad, no manifieste oposición alguna.</p><br><p class="text-subtitle-1 textoRojo  font-weight-bold">7- ALCANCE DEL TRATAMIENTO.</p><p class="text-body-2 text-justify">El Responsable podrá extender el Tratamiento de los Datos Personales a cualquiera de los fies previstos en el presente Aviso, a cualquier propósito compatible con el Servicio y/o con su objeto social, a los fines necesarios para la operación bajo el esquema de Cómputo en la Nube, así como cualquier otro Tratamiento permitido por la Ley, el Reglamento y por las demás disposiciones legales aplicables.</p><br><p class="text-subtitle-1 textoRojo  font-weight-bold">8- LIMITACIÓN AL USO O DIVULGACIÓN DE SUS DATOS PERSONALES.</p><p class="text-body-2 text-justify">El Titular puede indicar al Responsable que desea limitar o dejar de recibir mensajes publicitarios, sean por teléfono fijo o teléfono celular, así como por correos electrónico. Asimismo, el Titular podrá limitar la finalidad del Tratamiento. Para ello, el Titular deberá enviar una solicitud para deshabilitar los mensajes y/o los correos publicitarios a cualquiera de los medios de contacto señalados en la sección de Contacto, o la inscripción del titular en el Registro Público de Consumidores previsto en la Ley Federal de Protección al Consumidor, y en el Registro Público de Usuarios conforme a la Ley de Protección y Defensa al Usuario de Servicios Financieros, en términos del artículo 111 del Reglamento de la Ley.</p><br><p class="text-subtitle-1 textoRojo  font-weight-bold">9- REVOCACIÓN DEL CONSENTIMIENTO.</p><p class="text-body-2 text-justify">El Titular tiene derecho a revocar el consentimiento que ha otorgado para la realización del Tratamiento, ya sea con relación a uno o a todos sus Datos Personales. Para tal efecto, el Titular deberá enviar una solicitud con, al menos, los siguientes requisitos:</p><p class="text-body-2 text-justify">a. El nombre del Titular y domicilio u otro medio para comunicarle la respuesta a su solicitud;</p><p class="text-body-2 text-justify">b. Los documentos que acrediten la identidad o, en su caso, la representación legal del Titular;</p><p class="text-body-2 text-justify">c. La descripción clara y precisa de los Datos Personales respecto de los que se busca ejercer alguno de los derechos antes mencionados;</p><p class="text-body-2 text-justify">d. Cualquier otro elemento o documento que facilite la localización de los Datos Personales, y</p><p class="text-body-2 text-justify">La solicitud de revocación del consentimiento deberá ser enviada a cualquiera de los medios de contacto señalados en la sección de Contacto. Una vez recibida la solicitud, el Responsable contará con un plazo de veinte (20) días para responder al Titular de los Datos personales, misma que será enviada a través del correo electrónico que se encuentre registrado.</p><p class="text-body-2 text-justify">La revocación del consentimiento relacionada con Datos Personales que sean indispensables para que el Responsable le entregue un producto y/o le brinde un servicio al Titular implicará que el Responsable no estará obligado al cumplimiento respectivo, por estar impedido para ello.</p><br><p class="text-subtitle-1 textoRojo  font-weight-bold">10 - EJERCICIO DERECHOS “ARCO”.</p><p class="text-body-2 text-justify">Los Derechos “ARCO” son un acrónimo que agrupa cuatro derechos que el Titular puede ejercer, en relación con sus Datos Personales:</p><p class="text-body-2 text-justify">a. Acceder a los Datos Personales que están sujetos a Tratamiento; es decir, solicitar al Responsable que le permita al Titular conocer qué datos tiene en su posesión.</p><p class="text-body-2 text-justify">b. Rectificar cualquiera de los Datos Personales, sujetos a Tratamiento y en posesión del Responsable, que fueran inexactos, incompletos, erróneos y/o imprecisos.</p><p class="text-body-2 text-justify">c. Cancelar cualquiera de los Datos Personales, en posesión del Responsable, que legítimamente considere que no están siendo utilizados para cumplir con alguna de las finalidades del Tratamiento y/o que están siendo usados en contravención de la Ley, el Reglamento o de cualquier otra disposición legal aplicable.</p><p class="text-body-2 text-justify">d. Oponerse al Tratamiento que efectúa el Responsable, con causa justificada, siempre que el mismo pueda ocasionarle algún daño y/o perjuicio, o que es contrario a la Ley, el Reglamento o cualquier otra disposición legal aplicable.</p><p class="text-body-2 text-justify">Para tal efecto, el Titular deberá enviar una solicitud con, al menos, los siguientes requisitos:</p><p class="text-body-2 text-justify">a. El nombre del Titular y domicilio u otro medio para comunicarle la respuesta a su solicitud;</p><p class="text-body-2 text-justify">b. Los documentos que acrediten la identidad o, en su caso, la representación legal del Titular;</p><p class="text-body-2 text-justify">c. La descripción clara y precisa de los Datos Personales respecto de los que se busca ejercer alguno de los derechos antes mencionados; y</p><p class="text-body-2 text-justify">d. Cualquier otro elemento o documento que facilite la localización de los Datos Personales.</p><p class="text-body-2 text-justify">En caso de que resulte procedente la solicitud, se comunicará la respuesta dentro de los quince (15) días hábiles siguientes a la fecha en se recibió la solicitud. Este plazo podrá ser ampliado previo aviso por una sola vez por un periodo igual, siempre y cuando sea justificada la ampliación. Para el caso del ejercicio del Derecho de Acceso la modalidad mediante la cual el Titular podrá obtener la información o Datos Personales solicitados es la de documentos electrónicos.</p><p class="text-body-2 text-justify">El Responsable podrá negar el acceso a los datos personales o realizar la rectificación o cancelación o conceder la oposición al tratamiento de los mismos, en los siguientes supuestos:</p><p class="text-body-2 text-justify">• Cuando el solicitante no sea el Titular de los Datos Personales, o el representante legal no esté debidamente acreditado para ello;</p><p class="text-body-2 text-justify">• Cuando en su base de datos, no se encuentren los datos personales del solicitante;</p><p class="text-body-2 text-justify">• Cuando se lesionen los derechos de un tercero;</p><p class="text-body-2 text-justify">• Cuando exista un impedimento legal, o la resolución de una autoridad competente, que restrinja el acceso a los datos personales, o no permita la rectificación, cancelación u oposición de los mismos, y</p><p class="text-body-2 text-justify">• Cuando la rectificación, cancelación u oposición haya sido previamente realizada.</p><p class="text-body-2 text-justify">La negativa podrá ser parcial, en cuyo caso el Responsable efectuará el acceso, rectificación, cancelación u oposición requerida por el Titular.</p><br><p class="text-subtitle-1 textoRojo  font-weight-bold">11-NOTIFICACIÓN DE CAMBIOS AL AVISO.</p><p class="text-body-2 text-justify">El Responsable podrá hacer modificaciones al presente Aviso de Privacidad, siempre respetando las disposiciones legales aplicables. Cuando se realicen modificaciones al Aviso de Privacidad, el Responsable pondrá a disposición del Titular la información sobre las modificaciones, así como el nuevo Aviso de Privacidad mediante los siguientes medios y procedimientos:</p><p class="text-body-2 text-justify">• A través de un correo electrónico a la cuenta que ha registrado el Usuario.</p><p class="text-body-2 text-justify">• En la unidad de negocio o en la unidad de servicios financieros o en la central de operaciones que lo atiende.</p><p class="text-body-2 text-justify">• Publicándolo en el portal web del Responsable, o vía electrónica.</p><p class="text-body-2 text-justify">El Responsable se reserva el derecho de cambiar y actualizar el presente Aviso de Privacidad, el Titular será responsable de mantener su cuenta de correo electrónico actualizada y de cerciorarse de que las notificaciones sean recibidas en un buzón que sea revisado constantemente. En caso de no recibir respuesta por parte del Titular en un plazo de setenta y dos (72) horas, se entenderá que acepta de conformidad con los cambios que pueda sufrir el presente Aviso de Privacidad.</p><br><p class="text-subtitle-1 textoRojo font-weight-bold">12 - CONTACTO.</p><p class="text-body-2 text-justify">Si usted desea obtener más información, resolver una duda, ejercitar sus Derechos “ARCO” y/o aclarar cualquier cuestión sobre el ejercicio de cualquier derecho sobre sus Datos Personales, puede comunicarse o acudir directamente a la dirección señalada del Responsable. A continuación, le proporcionamos los datos de contacto:</p><p class="text-body-2 text-justify">a) Domicilio: Av. Santa fe 428, Torre II, Piso 12, Colonia Santa Fé Cuajimalpa, Código Postal 05348, Alcaldía Cuajimalpa, Ciudad de México.</p><p class="text-body-2 text-justify">b) Correo electrónico: protección.datos@essity</p><p class="text-body-2 text-justify">Actualizado al 17 de julio de 2023.</p></div></div></div>'
    },
    inicio:{
      titulo:"Leukoplast farmacias",
      bienvenido:'BIENVENIDO',
      prueba:'Prueba de conocimiento',
      avance:'Avance en el curso',
      prueba_msg:'* Está calificación es un promedio del desempeño obtenido durante todo el curso',
      iniciar:'INICIAR',
      reintentar:'REINTENTAR',
      salir:'SALIR'
    },
    dashboard:{
      filtro:'FILTRAR POR',
      campo: {
        email:'Correo electrónico',
        nombre:'Nombre',
        apellido:'Apellido',
        modulo:'Módulo',
        puntuacion:'Puntuación',
        prueba:'prueba de conocimiento',
        certificado:'Certificado'
      },
      enviar:"Enviar",
      reenviar:"Reenviar",
      enviar_ok:'Correo enviado',
      enviar_error:'El correo no pudo ser enviado',
      filtro1:{
        titulo:"Usuarios",
        registrado:'Registrado',
        finalizo:'Finalizo'
      },
      filtro2:{
        titulo:'Módulos Finalizados',
        modulo:"Módulo ",
        todos:"Todos",
        ninguno:"Ninguno"
      },
      filtro3:{
        titulo:'Módulos Pendientes'
      },
      filtro4:{
        titulo:'Prueba de conocimiento',
        aprobada:'Prueba aprobada',
        reprobada:'Prueba no aprobada',
        noregistra:'Prueba pendiente',
      },
      filtro5:{
        titulo:'Estado certificado',
        enviado:'Enviado',
        noenviado:'Pendiente enviar',
        nodisponible:'No disponible'
      }
    },
    api:{
      consulta:'Consultando información.',
      error:'Error al conectarse al servidor.',
      titulo_error:'Atención'
    }
  },
  pt: {
    $vuetify: {
      ...pt,
      dataIterator: {
        rowsPerPageText: 'Elementos por pagina:',
        pageText: '{0}-{1} de {2}',
      },
    },
    validation: {
      required: "Este campo é obrigatório.",
      min: "O valor deve ter pelo menos {length} caracteres.",
      email: "O email não é válido.",
      numero: "Somente valores numéricos são permitidos."
    },
    detalleCurso: {
      titulo: "Educação sobre cuidados com feridas nas farmácias",
      modulos: "6"
    },
    login: {
      bienvenido: "BEM-VINDO!",
      mensaje: "Por favor, insira seus dados abaixo para iniciar o curso:",
      usuario: "USUÁRIO",
      contrasena: "SENHA",
      ingresar: "ENTRAR",
      registrarse: "CADASTRAR-SE",
      olvido: "ESQUECEU SUA SENHA? CLIQUE AQUI"
    },
    recuperar: {
      titulo: 'RECUPERAR SUA SENHA',
      mensaje: 'Esqueceu sua senha? Não se preocupe, insira o e-mail registrado e enviaremos uma mensagem com a senha.',
      correo: 'E-MAIL',
      recuperar: 'RECUPERAR',
      inicio: 'FAZER LOGIN',
      listo: 'PRONTO!',
      enviado: 'Enviamos um e-mail para {correo} com a senha.',
      aclaracion: 'Se o e-mail não aparecer em breve, verifique a pasta de spam ou lixo eletrônico. Enviamos de <b>ingreso@leukoplastfarmacias.com</b>',
      volver: 'VOLTAR PARA FAZER LOGIN'
    },
    registro: {
      titulo: 'Cadastro',
      mensaje: 'Digite seus dados para se cadastrar:',
      nombre: 'Nome',
      apellido: 'Sobrenome',
      dni: 'Número de identificação',
      cargo: 'Cargo',
      farmacia: 'Nome da Farmácia',
      pais: 'País',
      ciudad: 'Cidade',
      telefono: 'Número de celular',
      correo: 'E-mail',
      usuario: 'Usuário',
      contrasena: 'Senha',
      politica: 'Leia a política de privacidade e gerenciamento de dados',
      aqui: 'AQUI',
      usoDatos: 'Confirmo que li esta autorização. Ao aceitar, autorizo expressamente, voluntária e conscientemente, a BSN MEDICAL LTDA a gerenciar, processar, tratar e utilizar meus dados pessoais.',
      enviar: 'ENVIAR SOLICITAÇÃO',
      obligatorio: 'Os campos marcados com <span style="color: red;">*</span> são obrigatórios.',
      mensajeRegistro: 'A solicitação foi enviada com sucesso.',
      mensajeRegistro2: 'A resposta será enviada para o e-mail registrado.',
      iniciar: 'CLIQUE AQUI PARA COMEÇAR',
      cliente: 'Cliente/Fornecedor'
    },
    cambiarContrasena: {
      titulo: 'Atualizar Senha',
      mensaje: 'Você recentemente redefiniu sua senha. Por favor, pedimos que defina uma nova.',
      confirmar: 'CONFIRMAR SENHA',
    },
    terminos:{
      titulo: "AUTORIZAÇÃO PARA O TRATAMENTO DE DADOS PESSOAIS",
      politica: "Política Global:",
      link_politica: "Política de Privacidade (essity.es)",
      regresar: "VOLTAR",
      colombia: "COLÔMBIA",
      chile: "CHILE",
      mexico: "MEXICO"
    },
    inicio: {
      titulo: "Leukoplast farmácias",
      bienvenido: "BEM-VINDO",
      prueba: "Teste de conhecimento",
      avance: "Progresso no curso",
      prueba_msg: "* Esta nota é uma média do desempenho obtido durante todo o curso",
      iniciar: "INICIAR",
      reintentar: "TENTAR NOVAMENTE",
      salir: "SAIR"
    },
    dashboard: {
      filtro: "FILTRAR POR",
      campo: {
        email: "E-mail",
        nombre: "Nome",
        apellido: "Sobrenome",
        modulo: "Módulo",
        puntuacion: "Pontuação",
        prueba: "Teste de conhecimento",
        certificado: "Certificado"
      },
      enviar: "Enviar",
      reenviar: "Reenviar",
      enviar_ok: "E-mail enviado",
      enviar_error: "O e-mail não pôde ser enviado",
      filtro1: {
        titulo: "Usuários",
        registrado: "Registrado",
        finalizo: "Finalizado"
      },
      filtro2: {
        titulo: "Módulos Finalizados",
        modulo: "Módulo ",
        todos: "Todos",
        ninguno: "Nenhum"
      },
      filtro3: {
        titulo: "Módulos Pendentes"
      },
      filtro4: {
        titulo: "Teste de conhecimento",
        aprobada: "Teste aprovado",
        reprobada: "Teste reprovado",
        noregistra: "Teste pendente"
      },
      filtro5: {
        titulo: "Status do certificado",
        enviado: "Enviado",
        noenviado: "Pendente de envio",
        nodisponible: "Indisponível"
      }
    },
    api: {
      consulta: "Consultando informações.",
      error: "Erro ao conectar-se ao servidor.",
      titulo_error: "Atenção"
    }
  },
}


export default messages;
