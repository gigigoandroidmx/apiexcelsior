/**
 * @api {get} /super_ocho super_ocho
 * @apiVersion 0.0.1
 * @apiName GetSuperOcho
 * @apiGroup Home
 *
 * @apiDescription Obtine información del banner super ocho.
 *
 * @apiParam {Object} super_ocho Nodo principal
 * @apiParam {Object} super_ocho.template Define el tipo de plantilla que se utilizará (normal)
 * @apiParam {String} super_ocho.template.name Nombre de la plantilla <b style="color: red;">* Estandarizar: normal</b>
 * @apiParam {Number} super_ocho.template.id Id de la plantilla
 * @apiParam {String} super_ocho.kicker Título secundario
 * @apiParam {Number} super_ocho.status Estatus del elemento (1, activo | 0, inactivo)
 * @apiParam {Object} super_ocho.nodes Listado de notas
 * @apiParam {Object} super_ocho.nodes.main Nota principal
 * @apiParam {Number} super_ocho.nodes.main.id Identificador 
 * @apiParam {String} super_ocho.nodes.main.title Titulo
 * @apiParam {String} super_ocho.nodes.main.type Tipo (article)
 * @apiParam {String} super_ocho.nodes.main.summary Resumen
 * @apiParam {Number} super_ocho.nodes.main.created Fecha creación
 * @apiParam {Number} super_ocho.nodes.main.changed Fecha actualización
 * @apiParam {String} super_ocho.nodes.main.image Imagen principal
 * @apiParam {Boolean} super_ocho.nodes.main.gallery Establece si el contenido tiene galeria de imágenes (true, activo | false, inactivo)
 * @apiParam {Boolean} super_ocho.nodes.main.video Establece si el contenido tiene video (true, activo | false, inactivo)
 * @apiParam {Object} super_ocho.nodes.main.video_vid Información del video
 * @apiParam {String} super_ocho.nodes.main.url Url web de la nota
 * @apiParam {Object} super_ocho.nodes.main.repository Repositorio de la nota
 * @apiParam {String} super_ocho.nodes.main.repository.name Nombre
 * @apiParam {String} super_ocho.nodes.main.repository.parameter Parámetros
 * @apiParam {Object} super_ocho.nodes.main.taxonomy Taxonimía
 * @apiParam {Object} super_ocho.nodes.main.columnist Columnista
 * @apiParam {Object} super_ocho.nodes.main.blogger Blogger
 * @apiParam {Object} super_ocho.nodes.related Lista de notas relacionadas
 * @apiParam {String} super_ocho.background Imagen principal
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK 
 *     "super_ocho": {
 *    	"template": {
 *    	  "name": "normal",
 *    	  "id": 1
 *    	},
 *    	"kicker": "Inseguridad en la Ciudad de México",
 *    	"status": 1,
 *    	"nodes": {
 *    	  "main": {
 *    		"id": 1204613,
 *    		"title": "Asaltan el Chili's Universidad cuando veían el América-Tigres",
 *    		"type": "article",
 *    		"summary": "",
 *    		"created": 1512060961,
 *    		"changed": 1512064360,
 *    		"image": "https://goo.gl/XR7W6E",
 *    		"gallery": false,
 *    		"video": false,
 *    		"video_vid": {},
 *    		"url": "http://www.excelsior.com.mx/comunidad/2017/11/30/1204613",
 *    		"repository": {
 *    		  "name": "excelsior",
 *    		  "parameter": "id=1204613"
 *    		},
 *    		"taxonomy": {},
 *    		"columnist": {},
 *    		"blogger": {}
 *    	  },
 *    	  "related": {}
 *    	},
 *    	"background": "https://goo.gl/1Mgcuj"
 *    }
 
 */
 
 /**
 * @api {get} /super_ocho super_ocho_wide
 * @apiVersion 0.0.1
 * @apiName GetSuperOchoWide
 * @apiGroup Home
 *
 * @apiDescription Obtine información del banner super ocho wide.
 *
 * @apiParam {Object} super_ocho Nodo principal
 * @apiParam {Object} super_ocho.template Define el tipo de plantilla que se utilizará (super wide)
 * @apiParam {String} super_ocho.template.name Nombre de la plantilla <b style="color: red;">* Estandarizar: super wide</b>
 * @apiParam {Number} super_ocho.template.id Id de la plantilla
 * @apiParam {String} super_ocho.kicker Título secundario
 * @apiParam {Number} super_ocho.status Estatus del elemento (1, activo | 0, inactivo)
 * @apiParam {Object} super_ocho.nodes Listado de notas
 * @apiParam {Object} super_ocho.nodes.main Nota principal
 * @apiParam {Object} super_ocho.nodes.related Lista de notas relacionadas
 * @apiParam {String} super_ocho.background Imagen principal
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     "super_ocho": {
 *         "template": {
 *           "name": "super wide",
 *           "id": 1
 *         },
 *         "kicker": "Iba por otra víctima",
 *         "status": 1,
 *         "nodes": {
 *           "main": {},
 *           "related": {}
 *         },
 *         "background": "goo.gl/voPVAP"
 *     }
 */
 
 /**
 * @api {get} /streaming streaming
 * @apiVersion 0.0.1
 * @apiName GetStreaming
 * @apiGroup Home
 *
 * @apiDescription Obtiene información si el servicio de streaming esta activo.
 *
 * @apiParam {Boolean} streaming Estatus del elemento (true, activo | false, inactivo)
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     "streaming": false
 */
 
 /**
 * @api {get} /mxm mxm
 * @apiVersion 0.0.1
 * @apiName GetMxM
 * @apiGroup Home
 *
 * @apiDescription Obtiene estatus y url del Minuto a minuto.
 *
 * @apiParam {Number} status Estatus del elemento (1, activo | 0, inactivo)
 * @apiParam {String} url_api Url del contenido
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     "mxm": {
 *       "status": 0,
 *       "url_api": "http://www.excelsior.com.mx/minuto-a-minuto"
 *     }
 */
 
 /**
 * @api {get} http://www.excelsior.com.mx/minuto-a-minuto mxm/content
 * @apiVersion 0.0.1
 * @apiName GetMxMContent
 * @apiGroup Home
 *
 * @apiDescription Obtiene información del contenido Minuto a minuto.
 *
 * @apiParam {Object[]} data Arreglo de nodos
 * @apiParam {Object} data.node Nodo principal
 * @apiParam {String} data.node.nid Identificador
 * @apiParam {Number} data.node.tid
 * @apiParam {Object} data.node.tags Tag relacionado
 * @apiParam {String} data.node.tags.id Identificador
 * @apiParam {String} data.node.tags.name Nombre
 * @apiParam {String} data.node.title Título
 * @apiParam {String} data.node.url Url web de la nota
 * @apiParam {String} data.node.summary Resumen
 * @apiParam {Number} data.node.banner
 * @apiParam {String} data.node.status Estatus del elemento ("1", activo | "0", inactivo)
 * @apiParam {Object[]} data.teams
 * @apiParam {String} data.teams.name
 * @apiParam {String} data.teams.image
 * @apiParam {String} data.teams.points
 * @apiParam {Object[]} data.events Evento
 * @apiParam {String} data.events.minute Minuto
 * @apiParam {String} data.events.name Nombre
 * @apiParam {String} data.events.message Contenido del evento
 * @apiParam {Number} data.events.timestamp Hora y fecha del evento
 * @apiParam {Object[]} data.gallery Galerías
 * @apiParam {String} data.gallery.alt 
 * @apiParam {String} data.gallery.title Título
 * @apiParam {String} data.gallery.width Ancho de imagen
 * @apiParam {String} data.gallery.height Alto de imagen
 * @apiParam {String} data.gallery.url Url de imagen
 * @apiParam {String} data.gallery.url_thumb Url de thumbnail
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     "data": [
 *        {
 *          "node": {
 *            "nid": "1204528",
 *            "tid": 2,
 *            "tags": {
 *              "id": 32615,
 *              "name": "Futbol México"
 *            },
 *            "title": "Revive la victoria de Tigres sobre el América",
 *            "url": "http://www.excelsior.com.mx/adrenalina/2017/11/29/1204528",
 *            "summary": "<p>Las Águilas reciben en el Coloso de Santa Úrsula a los felinos regiomontanos para iniciar la disputa de un boleto a la final</p>",
 *            "banner": 0,
 *            "status": "0"
 *          },
 *          "teams": [
 *            {
 *              "name": "América",
 *              "image": "http://cdn2.excelsior.imagendigital.com/adrenalina/torneos/escudos/america_128.png",
 *              "points": "0"
 *            },
 *            {
 *              "name": "Tigres",
 *              "image": "http://cdn2.excelsior.imagendigital.com/adrenalina/torneos/escudos/tigres_128.png",
 *              "points": "1"
 *            }
 *          ],
 *          "events": [
 *            {
 *              "minute": "90+4'",
 *              "name": "final",
 *              "message": "<strong>Termina el partido, Tigres se impone 1-0 de visita al América y tiene todo para sellar el sábado en el 'Volcán' su boleto a la final del Apertura 2017</strong>",
 *              "timestamp": 1512017726
 *            },
 *            {
 *              "minute": "90+2'",
 *              "name": "ninguno",
 *              "message": "Agustín Marchesín es amonestado por reclamar el árbitro del partido.",
 *              "timestamp": 1512017551
 *            }
 *          ],
 *          "gallery": [
 *            {
 *              "alt": "",
 *              "title": "(Mexsport)",
 *              "width": "900",
 *              "height": "600",
 *              "url": "http://www.excelsior.com.mx/media/pictures/2017/11/29/1809279.jpg",
 *              "url_thumb": "http://cdn2.excelsior.com.mx/media/styles/stage/public/pictures/2017/11/29/1809279.jpg"
 *            }
 *          ]
 *        }
 *     ]
 */
 
 /**
 * @api {get} /node_main node_main
 * @apiVersion 0.0.1
 * @apiName GetNodeMain
 * @apiGroup Home
 *
 * @apiDescription Obtiene información de la nota principal.
 *
 * @apiParam {Object} node_main Nodo principal
 * @apiParam {Number} node_main.id Identificador 
 * @apiParam {String} node_main.title Titulo
 * @apiParam {String} node_main.type Tipo (article)
 * @apiParam {String} node_main.summary Resumen
 * @apiParam {Number} node_main.created Fecha creación
 * @apiParam {Number} node_main.changed Fecha actualización
 * @apiParam {String} node_main.image Imagen principal
 * @apiParam {Boolean} node_main.gallery Establece si el contenido tiene galeria de imágenes (true, activo | false, inactivo)
 * @apiParam {Boolean} node_main.video Establece si el contenido tiene video (true, activo | false, inactivo)
 * @apiParam {Object} node_main.video_vid Información del video
 * @apiParam {String} node_main.url Url web de la nota
 * @apiParam {Object} node_main.repository Repositorio de la nota
 * @apiParam {String} node_main.repository.name Nombre
 * @apiParam {String} node_main.repository.parameter Parámetros
 * @apiParam {Object} node_main.taxonomy Taxonimía
 * @apiParam {Number} node_main.taxonomy.id Identificador
 * @apiParam {String} node_main.taxonomy.name Nombre
 * @apiParam {String} node_main.taxonomy.url Url sección web
 * @apiParam {String} node_main.taxonomy.repository Repositorio de la nota
 * @apiParam {String} node_main.taxonomy.repository.name Nombre
 * @apiParam {String} node_main.taxonomy.repository.parameter Parámetros
 * @apiParam {String} node_main.taxonomy.color Color de la taxonomía <b style="color: red;">* Estandarizar formato #RGB, en caso de vacío mandar null</b>
 * @apiParam {Object} node_main.columnist Columnista
 * @apiParam {Object} node_main.blogger Blogger
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     "node_main": {
 *      "id": 1204592,
 *      "title": "SHCP evitará alza abrupta de gasolinas; desde hoy se libera el precio",
 *      "type": "article",
 *      "summary": "<p>Seguirá amortiguando aumentos en los precios de las referencias y tipo de cambio mediante el esquema de estímulos semanales al IEPS, afirma</p>",
 *      "created": 1512044438,
 *      "changed": 1512044438,
 *      "image": "goo.gl/9y15o1",
 *      "gallery": false,
 *      "video": false,
 *      "video_vid": {},
 *      "url": "http://www.excelsior.com.mx/nacional/2017/11/30/1204592",
 *      "repository": {
 *        "name": "excelsior",
 *        "parameter": "id=1204592"
 *      },
 *      "taxonomy": {
 *        "id": 1,
 *        "name": "nacional",
 *        "url": "http://www.excelsior.com.mx/nacional",
 *        "repository": {
 *          "name": "excelsior",
 *          "parameter": "category_ids=1"
 *        },
 *        "color": "#8C1F36"
 *      },
 *      "columnist": {},
 *      "blogger": {}
 *    }
 */
 
 /**
 * @api {get} /wildcard wildcard
 * @apiVersion 0.0.1
 * @apiName GetWildcard
 * @apiGroup Home
 *
 * @apiDescription Obtiene información del wildcard.
 *
 * @apiParam {Object} wildcard Contenedor de notas
 * @apiParam {Number} wildcard.status Estatus del elemento (1, activo | 0, inactivo)
 * @apiParam {Object[]} wildcard.nodes Listado de notas
 * @apiParam {Number} wildcard.nodes.main.id Identificador 
 * @apiParam {String} wildcard.nodes.main.title Titulo
 * @apiParam {String} wildcard.nodes.main.type Tipo (article)
 * @apiParam {String} wildcard.nodes.main.summary Resumen
 * @apiParam {Number} wildcard.nodes.main.created Fecha creación
 * @apiParam {Number} wildcard.nodes.main.changed Fecha actualización
 * @apiParam {String} wildcard.nodes.main.image Imagen principal
 * @apiParam {Boolean} wildcard.nodes.main.gallery Establece si el contenido tiene galeria de imágenes (true, activo | false, inactivo)
 * @apiParam {Boolean} wildcard.nodes.main.video Establece si el contenido tiene video (true, activo | false, inactivo)
 * @apiParam {Object} wildcard.nodes.main.video_vid Información del video
 * @apiParam {String} wildcard.nodes.main.url Url web de la nota
 * @apiParam {Object} wildcard.nodes.main.repository Repositorio de la nota
 * @apiParam {String} wildcard.nodes.main.repository.name Nombre
 * @apiParam {String} wildcard.nodes.main.repository.parameter Parámetros
 * @apiParam {Object} wildcard.nodes.main.taxonomy Taxonimía
 * @apiParam {Number} wildcard.nodes.main.taxonomy.id Identificador
 * @apiParam {String} wildcard.nodes.main.taxonomy.name Nombre
 * @apiParam {String} wildcard.nodes.main.taxonomy.url Url sección web
 * @apiParam {String} wildcard.nodes.main.taxonomy.repository Repositorio de la nota
 * @apiParam {String} wildcard.nodes.main.taxonomy.repository.name Nombre
 * @apiParam {String} wildcard.nodes.main.taxonomy.repository.parameter Parámetros
 * @apiParam {String} wildcard.nodes.main.taxonomy.color Color de la taxonomía <b style="color: red;">* Estandarizar formato #RGB, en caso de vacío mandar null</b>
 * @apiParam {Object} wildcard.nodes.main.columnist Columnista
 * @apiParam {Object} wildcard.nodes.main.blogger Blogger
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     "wildcard": {
 *        "status": 0,
 *        "nodes": [
 *          {
 *            "id": 1204489,
 *            "title": "Cayó presunto violador de 3 niñas en Ciudad Juárez; asesinó a una de ellas",
 *            "type": "article",
 *            "summary": "<p>El pasado lunes por la madrugada, el acusado abusó sexualmente de dos hermanitas de 10 y 11 años de edad, y asesinó a la mayor de ellas de 12 años</p>",
 *            "created": 1511997821,
 *            "changed": 1511997821,
 *            "image": "http://cdn2.excelsior.com.mx/media/styles/imagen_portada_grande_canal/public/pictures/2017/11/29/1809112.jpg",
 *            "gallery": false,
 *            "video": false,
 *            "video_vid": {},
 *            "url": "http://www.excelsior.com.mx/nacional/2017/11/29/1204489",
 *            "repository": {
 *              "name": "excelsior",
 *              "parameter": "id=1204489"
 *            },
 *            "taxonomy": {
 *              "id": 1,
 *              "name": "nacional",
 *              "url": "http://www.excelsior.com.mx/nacional",
 *              "repository": {
 *                "name": "excelsior",
 *                "parameter": "category_ids=1"
 *              },
 *              "color": "#8C1F36"
 *            },
 *            "columnist": {},
 *            "blogger": {}
 *          },
 *          { ... },
 *          { ... }
 *        ]
 *    },
 */
 
 /**
 * @api {get} /nodes_column nodes_column
 * @apiVersion 0.0.1
 * @apiName GetNodesColumn
 * @apiGroup Home
 *
 * @apiDescription Obtiene el listado de nodos columna (pares)
 *
 * @apiParam {Object[]} nodes_column Listado de notas
 * @apiParam {Number} nodes_column.id Identificador 
 * @apiParam {String} nodes_column.title Titulo
 * @apiParam {String} nodes_column.type Tipo (article)
 * @apiParam {String} nodes_column.summary Resumen
 * @apiParam {Number} nodes_column.created Fecha creación
 * @apiParam {Number} nodes_column.changed Fecha actualización
 * @apiParam {String} nodes_column.image Imagen principal
 * @apiParam {Boolean} nodes_column.gallery Establece si el contenido tiene galeria de imágenes (true, activo | false, inactivo)
 * @apiParam {Boolean} nodes_column.video Establece si el contenido tiene video (true, activo | false, inactivo)
 * @apiParam {Object} nodes_column.video_vid Información del video
 * @apiParam {String} nodes_column.url Url web de la nota
 * @apiParam {Object} nodes_column.repository Repositorio de la nota
 * @apiParam {String} nodes_column.repository.name Nombre
 * @apiParam {String} nodes_column.repository.parameter Parámetros
 * @apiParam {Object} nodes_column.taxonomy Taxonimía
 * @apiParam {Number} nodes_column.taxonomy.id Identificador
 * @apiParam {String} nodes_column.taxonomy.name Nombre
 * @apiParam {String} nodes_column.taxonomy.url Url sección web
 * @apiParam {String} nodes_column.taxonomy.repository Repositorio de la nota
 * @apiParam {String} nodes_column.taxonomy.repository.name Nombre
 * @apiParam {String} nodes_column.taxonomy.repository.parameter Parámetros
 * @apiParam {String} nodes_column.taxonomy.color Color de la taxonomía <b style="color: red;">* Estandarizar formato #RGB, en caso de vacío mandar null</b>
 * @apiParam {Object} nodes_column.columnist Columnista
 * @apiParam {Object} nodes_column.blogger Blogger
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     "nodes_column": [
 *         {
 *           "id": 1204612,
 *           "title": "Lamenta Peña Nieto deceso de titular del Indesol, Angélica Luna",
 *           "type": "article",
 *           "summary": "<p>En sus redes sociales el presidente expresó sus condolencias por el fallecimiento de la servidora pública; destaca el instituto trabajo de Luna Peña por la igualdad</p>",
 *           "created": 1512047099,
 *           "changed": 1512047099,
 *           "image": "http://cdn2.excelsior.com.mx/media/styles/imagen_portada_grande_canal/public/pictures/2017/11/30/1809417.jpg",
 *           "gallery": false,
 *           "video": false,
 *           "video_vid": {},
 *           "url": "http://www.excelsior.com.mx/nacional/2017/11/30/1204612",
 *           "repository": {
 *             "name": "excelsior",
 *             "parameter": "id=1204612"
 *           },
 *           "taxonomy": {
 *             "id": 1,
 *             "name": "nacional",
 *             "url": "http://www.excelsior.com.mx/nacional",
 *             "repository": {
 *               "name": "excelsior",
 *               "parameter": "category_ids=1"
 *             },
 *             "color": "#8C1F36"
 *           },
 *           "columnist": {},
 *           "blogger": {}
 *         },
 *         { ... },
 *         { ... },
 *         { ... },
 *         { ... },
 *         { ... },
 *         { ... },
 *         { ... },
 *         { ... }
 *     ]
 */
 
 /**
 * @api {get} /stage stage/trend
 * @apiVersion 0.0.1
 * @apiName GetStage
 * @apiGroup Home
 *
 * @apiDescription Obtiene el listado de notas trend.
 *
 * @apiParam {Object[]} stage Listado de notas
 * @apiParam {Number} stage.id Identificador 
 * @apiParam {String} stage.title Titulo
 * @apiParam {String} stage.type Tipo (article)
 * @apiParam {String} stage.summary Resumen
 * @apiParam {Number} stage.created Fecha creación
 * @apiParam {Number} stage.changed Fecha actualización
 * @apiParam {String} stage.image Imagen principal
 * @apiParam {Boolean} stage.gallery Establece si el contenido tiene galeria de imágenes (true, activo | false, inactivo)
 * @apiParam {Boolean} stage.video Establece si el contenido tiene video (true, activo | false, inactivo)
 * @apiParam {Object} stage.video_vid Información del video
 * @apiParam {String} stage.url Url web de la nota
 * @apiParam {Object} stage.repository Repositorio de la nota
 * @apiParam {String} stage.repository.name Nombre
 * @apiParam {String} stage.repository.parameter Parámetros
 * @apiParam {Object} stage.taxonomy Taxonimía
 * @apiParam {Number} stage.taxonomy.id Identificador
 * @apiParam {String} stage.taxonomy.name Nombre
 * @apiParam {String} stage.taxonomy.url Url sección web
 * @apiParam {String} stage.taxonomy.repository Repositorio de la nota
 * @apiParam {String} stage.taxonomy.repository.name Nombre
 * @apiParam {String} stage.taxonomy.repository.parameter Parámetros
 * @apiParam {String} stage.taxonomy.color Color de la taxonomía <b style="color: red;">* Estandarizar formato #RGB, en caso de vacío mandar null</b>
 * @apiParam {Object} stage.columnist Columnista
 * @apiParam {Object} stage.blogger Blogger
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     "stage": [
 *        {
 *          "id": 1204628,
 *          "title": "Tiene 22 años y ya probó el sabor del dinero como chofer de ‘El Teo’",
 *          "type": "article",
 *          "summary": "<p>No había reloj que checar ni horario que cumplir. Eso sí, absoluta disponibilidad y, sobre todo, lealtad a prueba de fuego</p>",
 *          "created": 1512052678,
 *          "changed": 1512052678,
 *          "image": "http://cdn2.excelsior.com.mx/media/styles/imagen_portada_grande_canal/public/pictures/2017/11/30/1809451.jpg",
 *          "gallery": false,
 *          "video": false,
 *          "video_vid": {},
 *          "url": "http://www.excelsior.com.mx/nacional/2017/11/30/1204628",
 *          "repository": {
 *            "name": "excelsior",
 *            "parameter": "id=1204628"
 *          },
 *          "taxonomy": {
 *            "id": 1,
 *            "name": "nacional",
 *            "url": "http://www.excelsior.com.mx/nacional",
 *            "repository": {
 *              "name": "excelsior",
 *              "parameter": "category_ids=1"
 *            },
 *            "color": "#8C1F36"
 *          },
 *          "columnist": {},
 *          "blogger": {}
 *        },
 *        { ... },
 *        { ... },
 *        { ... }
 *    ]
 */
 
 /**
 * @api {get} /selection_day selection_day
 * @apiVersion 0.0.1
 * @apiName GetSelectionDay
 * @apiGroup Home
 *
 * @apiDescription Obtiene el listado de notas seleccionadas del día.
 *
 * @apiParam {Object[]} selection_day Listado de notas
 * @apiParam {Number} selection_day.id Identificador 
 * @apiParam {String} selection_day.title Titulo
 * @apiParam {String} selection_day.type Tipo (article)
 * @apiParam {String} selection_day.summary Resumen
 * @apiParam {Number} selection_day.created Fecha creación
 * @apiParam {Number} selection_day.changed Fecha actualización
 * @apiParam {String} selection_day.image Imagen principal
 * @apiParam {Boolean} selection_day.gallery Establece si el contenido tiene galeria de imágenes (true, activo | false, inactivo)
 * @apiParam {Boolean} selection_day.video Establece si el contenido tiene video (true, activo | false, inactivo)
 * @apiParam {Object} selection_day.video_vid Información del video
 * @apiParam {String} selection_day.url Url web de la nota
 * @apiParam {Object} selection_day.repository Repositorio de la nota
 * @apiParam {String} selection_day.repository.name Nombre
 * @apiParam {String} selection_day.repository.parameter Parámetros
 * @apiParam {Object} selection_day.taxonomy Taxonimía
 * @apiParam {Number} selection_day.taxonomy.id Identificador
 * @apiParam {String} selection_day.taxonomy.name Nombre
 * @apiParam {String} selection_day.taxonomy.url Url sección web
 * @apiParam {String} selection_day.taxonomy.repository Repositorio de la nota
 * @apiParam {String} selection_day.taxonomy.repository.name Nombre
 * @apiParam {String} selection_day.taxonomy.repository.parameter Parámetros
 * @apiParam {String} selection_day.taxonomy.color Color de la taxonomía <b style="color: red;">* Estandarizar formato #RGB, en caso de vacío mandar null</b>
 * @apiParam {Object} selection_day.columnist Columnista
 * @apiParam {Object} selection_day.blogger Blogger
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     "selection_day": [
 *         {
 *           "id": 1204425,
 *           "title": "Hallan en Guanajuato hieleras con narcomensajes y vísceras",
 *           "type": "article",
 *           "summary": "<p>En distintos lugares de la ciudad guanajuatense fueron hallados los recipientes; autoridades también reportan que un grupo armado dispara contra auto de lujo y blindado</p>",
 *           "created": 1511984932,
 *           "changed": 1511984981,
 *           "image": "http://cdn2.excelsior.com.mx/media/styles/large/public/pictures/2017/11/29/1808907.jpg",
 *           "gallery": false,
 *           "video": false,
 *           "video_vid": {},
 *           "url": "http://www.excelsior.com.mx/nacional/2017/11/29/1204425",
 *           "repository": {
 *             "name": "excelsior",
 *             "parameter": "id=1204425"
 *           },
 *           "taxonomy": {
 *             "id": 1,
 *             "name": "nacional   ",
 *             "url": "http://www.excelsior.com.mx/nacional",
 *             "repository": {
 *               "name": "excelsior",
 *               "parameter": "category_ids=1"
 *             },
 *             "color": "#8C1F36"
 *           },
 *           "columnist": {},
 *           "blogger": {}
 *         },
 *         { ... },
 *         { ... },
 *         { ... }
 *     ]
 */
 
 /**
 * @api {get} /section_* secciones
 * @apiVersion 0.0.1
 * @apiName GetSection
 * @apiGroup Home
 *
 * @apiDescription Obtiene el listado de notas de la sección *(nacional | lobal | dinero | comunidad | adrenalina | funcion | hacker | expresiones).
 *
 * @apiParam {Object[]} section_X Listado de notas (nacional | lobal | dinero | comunidad | adrenalina | funcion | hacker | expresiones)
 * @apiParam {Number} section_X.id Identificador 
 * @apiParam {String} section_X.title Titulo
 * @apiParam {String} section_X.type Tipo (article)
 * @apiParam {String} section_X.summary Resumen
 * @apiParam {Number} section_X.created Fecha creación
 * @apiParam {Number} section_X.changed Fecha actualización
 * @apiParam {String} section_X.image Imagen principal
 * @apiParam {Boolean} section_X.gallery Establece si el contenido tiene galeria de imágenes (true, activo | false, inactivo)
 * @apiParam {Boolean} section_X.video Establece si el contenido tiene video (true, activo | false, inactivo)
 * @apiParam {Object} section_X.video_vid Información del video
 * @apiParam {String} section_X.url Url web de la nota
 * @apiParam {Object} section_X.repository Repositorio de la nota
 * @apiParam {String} section_X.repository.name Nombre
 * @apiParam {String} section_X.repository.parameter Parámetros
 * @apiParam {Object} section_X.taxonomy Taxonimía
 * @apiParam {Number} section_X.taxonomy.id Identificador
 * @apiParam {String} section_X.taxonomy.name Nombre
 * @apiParam {String} section_X.taxonomy.url Url sección web
 * @apiParam {String} section_X.taxonomy.repository Repositorio de la nota
 * @apiParam {String} section_X.taxonomy.repository.name Nombre
 * @apiParam {String} section_X.taxonomy.repository.parameter Parámetros
 * @apiParam {String} section_X.taxonomy.color Color de la taxonomía <b style="color: red;">* Estandarizar formato #RGB, en caso de vacío mandar null</b>
 * @apiParam {Object} section_X.columnist Columnista
 * @apiParam {Object} section_X.blogger Blogger
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     "section_nacional": [
 *        {
 *          "id": 1204323,
 *          "title": "Rebeldes del PAN cierran filas con Meade; prevén “voto útil”",
 *          "type": "article",
 *          "summary": "<p>El senador Javier Lozano dice que él y otros panistas ven con agrado al extitular de Hacienda; nada me obliga a votar por absurdos populistas del Frente: Cordero</p>",
 *          "created": 1511956932,
 *          "changed": 1511954590,
 *          "image": "http://cdn2.excelsior.com.mx/media/styles/large/public/pictures/2017/11/29/1808517.jpg",
 *          "gallery": false,
 *          "video": false,
 *          "video_vid": {},
 *          "url": "http://www.excelsior.com.mx/nacional/2017/11/29/1204323",
 *          "repository": {
 *            "name": "excelsior",
 *            "parameter": "id=1204323"
 *          },
 *          "taxonomy": {
 *            "id": 1,
 *            "name": "nacional   ",
 *            "url": "http://www.excelsior.com.mx/nacional",
 *            "repository": {
 *              "name": "excelsior",
 *              "parameter": "category_ids=1"
 *            },
 *            "color": "#8C1F36"
 *          },
 *          "columnist": {},
 *          "blogger": {}
 *        },
 *        { ... },
 *        { ... },
 *        { ... }
 *    ]
 */
 
 /**
 * @api {get} /status_columnists status_columnists
 * @apiVersion 0.0.1
 * @apiName GetStatusColumnists
 * @apiGroup Home
 *
 * @apiDescription Obtiene información si el servicio de columnista esta activo en un periodo del día (mañana | tarde).
 *
 * @apiParam {Object} status_columnists Estatus de la sección Opinión
 * @apiParam {Boolean} status_columnists.status Estatus del elemento (true, activo | false, inactivo)
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     "status_columnists": {
 *      "status": true
 *    }
 */
 
 /**
 * @api {get} /columnists columnists
 * @apiVersion 0.0.1
 * @apiName GetColumnists
 * @apiGroup Home
 *
 * @apiDescription Obtiene el listado de opiniones.
 *
 * @apiParam {Object[]} columnists Listado de opiniones
 * @apiParam {Number} columnists.id Identificador 
 * @apiParam {String} columnists.title Titulo
 * @apiParam {String} columnists.type Tipo (columnist)
 * @apiParam {String} columnists.summary Resumen
 * @apiParam {Number} columnists.created Fecha creación
 * @apiParam {Number} columnists.changed Fecha actualización
 * @apiParam {Object} columnists.taxonomy Taxonimía
 * @apiParam {String} columnists.url Url web de la nota
 * @apiParam {String} columnists.image Imagen principal
 * @apiParam {Boolean} columnists.gallery Establece si el contenido tiene galeria de imágenes (true, activo | false, inactivo)
 * @apiParam {Boolean} columnists.video Establece si el contenido tiene video (true, activo | false, inactivo)
 * @apiParam {Object} columnists.video_vid Información del video
 * @apiParam {Object} columnists.repository Repositorio de la nota
 * @apiParam {String} columnists.repository.name Nombre
 * @apiParam {String} columnists.repository.parameter Parámetros
 * @apiParam {Object} columnists.columnist Columnista
 * @apiParam {String} columnists.columnist.uid Identificador
 * @apiParam {String} columnists.columnist.name Nombre
 * @apiParam {String} columnists.columnist.column Nombre de la columna
 * @apiParam {String} columnists.columnist.image Avatar
 * @apiParam {Object} columnists.columnist.taxonomy Taxonimía
 * @apiParam {String} columnists.columnist.taxonomy.color Color de la taxonomía <b style="color: red;">* Estandarizar formato #RGB, en caso de vacío mandar null</b>
 * @apiParam {String} columnists.columnist.taxonomy.repository Repositorio de la nota
 * @apiParam {String} columnists.columnist.taxonomy.repository.name Nombre
 * @apiParam {String} columnists.columnist.taxonomy.repository.parameter Parámetros
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     "columnists": [
 *        {
 *          "id": 1204585,
 *          "title": "Frentes Políticos",
 *          "summary": " \nI. Forma y fondo. Enrique Peña Nieto esperó a que el TEPJF confirmara el triunfo de Miguel Ángel Riquelme en la elección...",
 *          "type": "columnist",
 *          "created": 1512033095,
 *          "changed": 1512033095,
 *          "taxonomy": {},
 *          "url": "http://www.excelsior.com.mx/opinion/frentes-politicos/2017/11/30/1204585",
 *          "image": "http://www.excelsior.com.mx/media/opinion/2015/09/07/1298731.jpg",
 *          "gallery": false,
 *          "video": false,
 *          "video_vid": {},
 *          "repository": {
 *            "name": "excelsior",
 *            "parameter": "id=1204585"
 *          },
 *          "columnist": {
 *            "uid": "538",
 *            "name": "Frentes Políticos",
 *            "column": "",
 *            "image": "http://www.excelsior.com.mx/media/opinion/2015/09/07/1298731.jpg",
 *            "taxonomy": {
 *              "color": "#8C1F36",
 *              "repository": {
 *                "name": "excelsior",
 *                "parameter": "columnista_ids=538"
 *              }
 *            }
 *          }
 *        },
 *        { ... },
 *        { ... },
 *        { ... }
 *    ]
 */