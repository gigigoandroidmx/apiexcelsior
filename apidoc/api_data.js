define({ "api": [
  {
    "type": "get",
    "url": "/columnists",
    "title": "columnists",
    "version": "0.0.1",
    "name": "GetColumnists",
    "group": "Home",
    "description": "<p>Obtiene el listado de opiniones.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "columnists",
            "description": "<p>Listado de opiniones</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "columnists.id",
            "description": "<p>Identificador</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "columnists.title",
            "description": "<p>Titulo</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "columnists.type",
            "description": "<p>Tipo (columnist)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "columnists.summary",
            "description": "<p>Resumen</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "columnists.created",
            "description": "<p>Fecha creación</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "columnists.changed",
            "description": "<p>Fecha actualización</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "columnists.taxonomy",
            "description": "<p>Taxonimía</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "columnists.url",
            "description": "<p>Url web de la nota</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "columnists.image",
            "description": "<p>Imagen principal</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "columnists.gallery",
            "description": "<p>Establece si el contenido tiene galeria de imágenes (true, activo | false, inactivo)</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "columnists.video",
            "description": "<p>Establece si el contenido tiene video (true, activo | false, inactivo)</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "columnists.video_vid",
            "description": "<p>Información del video</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "columnists.repository",
            "description": "<p>Repositorio de la nota</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "columnists.repository.name",
            "description": "<p>Nombre</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "columnists.repository.parameter",
            "description": "<p>Parámetros</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "columnists.columnist",
            "description": "<p>Columnista</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "columnists.columnist.uid",
            "description": "<p>Identificador</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "columnists.columnist.name",
            "description": "<p>Nombre</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "columnists.columnist.column",
            "description": "<p>Nombre de la columna</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "columnists.columnist.image",
            "description": "<p>Avatar</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "columnists.columnist.taxonomy",
            "description": "<p>Taxonimía</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "columnists.columnist.taxonomy.color",
            "description": "<p>Color de la taxonomía <b style=\"color: red;\">* Estandarizar formato #RGB, en caso de vacío mandar null</b></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "columnists.columnist.taxonomy.repository",
            "description": "<p>Repositorio de la nota</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "columnists.columnist.taxonomy.repository.name",
            "description": "<p>Nombre</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "columnists.columnist.taxonomy.repository.parameter",
            "description": "<p>Parámetros</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n \"columnists\": [\n    {\n      \"id\": 1204585,\n      \"title\": \"Frentes Políticos\",\n      \"summary\": \" \\nI. Forma y fondo. Enrique Peña Nieto esperó a que el TEPJF confirmara el triunfo de Miguel Ángel Riquelme en la elección...\",\n      \"type\": \"columnist\",\n      \"created\": 1512033095,\n      \"changed\": 1512033095,\n      \"taxonomy\": {},\n      \"url\": \"http://www.excelsior.com.mx/opinion/frentes-politicos/2017/11/30/1204585\",\n      \"image\": \"http://www.excelsior.com.mx/media/opinion/2015/09/07/1298731.jpg\",\n      \"gallery\": false,\n      \"video\": false,\n      \"video_vid\": {},\n      \"repository\": {\n        \"name\": \"excelsior\",\n        \"parameter\": \"id=1204585\"\n      },\n      \"columnist\": {\n        \"uid\": \"538\",\n        \"name\": \"Frentes Políticos\",\n        \"column\": \"\",\n        \"image\": \"http://www.excelsior.com.mx/media/opinion/2015/09/07/1298731.jpg\",\n        \"taxonomy\": {\n          \"color\": \"#8C1F36\",\n          \"repository\": {\n            \"name\": \"excelsior\",\n            \"parameter\": \"columnista_ids=538\"\n          }\n        }\n      }\n    },\n    { ... },\n    { ... },\n    { ... }\n]",
          "type": "json"
        }
      ]
    },
    "filename": "code/example.js",
    "groupTitle": "Home"
  },
  {
    "type": "get",
    "url": "/mxm",
    "title": "mxm",
    "version": "0.0.1",
    "name": "GetMxM",
    "group": "Home",
    "description": "<p>Obtiene estatus y url del Minuto a minuto.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>Estatus del elemento (1, activo | 0, inactivo)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "url_api",
            "description": "<p>Url del contenido</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\"mxm\": {\n  \"status\": 0,\n  \"url_api\": \"http://www.excelsior.com.mx/minuto-a-minuto\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "code/example.js",
    "groupTitle": "Home"
  },
  {
    "type": "get",
    "url": "http://www.excelsior.com.mx/minuto-a-minuto",
    "title": "mxm/content",
    "version": "0.0.1",
    "name": "GetMxMContent",
    "group": "Home",
    "description": "<p>Obtiene información del contenido Minuto a minuto.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>Arreglo de nodos</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "data.node",
            "description": "<p>Nodo principal</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "data.node.nid",
            "description": "<p>Identificador</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "data.node.tid",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "data.node.tags",
            "description": "<p>Tag relacionado</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "data.node.tags.id",
            "description": "<p>Identificador</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "data.node.tags.name",
            "description": "<p>Nombre</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "data.node.title",
            "description": "<p>Título</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "data.node.url",
            "description": "<p>Url web de la nota</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "data.node.summary",
            "description": "<p>Resumen</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "data.node.banner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "data.node.status",
            "description": "<p>Estatus del elemento (&quot;1&quot;, activo | &quot;0&quot;, inactivo)</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "data.teams",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "data.teams.name",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "data.teams.image",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "data.teams.points",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "data.events",
            "description": "<p>Evento</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "data.events.minute",
            "description": "<p>Minuto</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "data.events.name",
            "description": "<p>Nombre</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "data.events.message",
            "description": "<p>Contenido del evento</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "data.events.timestamp",
            "description": "<p>Hora y fecha del evento</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "data.gallery",
            "description": "<p>Galerías</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "data.gallery.alt",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "data.gallery.title",
            "description": "<p>Título</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "data.gallery.width",
            "description": "<p>Ancho de imagen</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "data.gallery.height",
            "description": "<p>Alto de imagen</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "data.gallery.url",
            "description": "<p>Url de imagen</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "data.gallery.url_thumb",
            "description": "<p>Url de thumbnail</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\"data\": [\n   {\n     \"node\": {\n       \"nid\": \"1204528\",\n       \"tid\": 2,\n       \"tags\": {\n         \"id\": 32615,\n         \"name\": \"Futbol México\"\n       },\n       \"title\": \"Revive la victoria de Tigres sobre el América\",\n       \"url\": \"http://www.excelsior.com.mx/adrenalina/2017/11/29/1204528\",\n       \"summary\": \"<p>Las Águilas reciben en el Coloso de Santa Úrsula a los felinos regiomontanos para iniciar la disputa de un boleto a la final</p>\",\n       \"banner\": 0,\n       \"status\": \"0\"\n     },\n     \"teams\": [\n       {\n         \"name\": \"América\",\n         \"image\": \"http://cdn2.excelsior.imagendigital.com/adrenalina/torneos/escudos/america_128.png\",\n         \"points\": \"0\"\n       },\n       {\n         \"name\": \"Tigres\",\n         \"image\": \"http://cdn2.excelsior.imagendigital.com/adrenalina/torneos/escudos/tigres_128.png\",\n         \"points\": \"1\"\n       }\n     ],\n     \"events\": [\n       {\n         \"minute\": \"90+4'\",\n         \"name\": \"final\",\n         \"message\": \"<strong>Termina el partido, Tigres se impone 1-0 de visita al América y tiene todo para sellar el sábado en el 'Volcán' su boleto a la final del Apertura 2017</strong>\",\n         \"timestamp\": 1512017726\n       },\n       {\n         \"minute\": \"90+2'\",\n         \"name\": \"ninguno\",\n         \"message\": \"Agustín Marchesín es amonestado por reclamar el árbitro del partido.\",\n         \"timestamp\": 1512017551\n       }\n     ],\n     \"gallery\": [\n       {\n         \"alt\": \"\",\n         \"title\": \"(Mexsport)\",\n         \"width\": \"900\",\n         \"height\": \"600\",\n         \"url\": \"http://www.excelsior.com.mx/media/pictures/2017/11/29/1809279.jpg\",\n         \"url_thumb\": \"http://cdn2.excelsior.com.mx/media/styles/stage/public/pictures/2017/11/29/1809279.jpg\"\n       }\n     ]\n   }\n]",
          "type": "json"
        }
      ]
    },
    "filename": "code/example.js",
    "groupTitle": "Home"
  },
  {
    "type": "get",
    "url": "/node_main",
    "title": "node_main",
    "version": "0.0.1",
    "name": "GetNodeMain",
    "group": "Home",
    "description": "<p>Obtiene información de la nota principal.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "node_main",
            "description": "<p>Nodo principal</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "node_main.id",
            "description": "<p>Identificador</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "node_main.title",
            "description": "<p>Titulo</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "node_main.type",
            "description": "<p>Tipo (article)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "node_main.summary",
            "description": "<p>Resumen</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "node_main.created",
            "description": "<p>Fecha creación</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "node_main.changed",
            "description": "<p>Fecha actualización</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "node_main.image",
            "description": "<p>Imagen principal</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "node_main.gallery",
            "description": "<p>Establece si el contenido tiene galeria de imágenes (true, activo | false, inactivo)</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "node_main.video",
            "description": "<p>Establece si el contenido tiene video (true, activo | false, inactivo)</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "node_main.video_vid",
            "description": "<p>Información del video</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "node_main.url",
            "description": "<p>Url web de la nota</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "node_main.repository",
            "description": "<p>Repositorio de la nota</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "node_main.repository.name",
            "description": "<p>Nombre</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "node_main.repository.parameter",
            "description": "<p>Parámetros</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "node_main.taxonomy",
            "description": "<p>Taxonimía</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "node_main.taxonomy.id",
            "description": "<p>Identificador</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "node_main.taxonomy.name",
            "description": "<p>Nombre</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "node_main.taxonomy.url",
            "description": "<p>Url sección web</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "node_main.taxonomy.repository",
            "description": "<p>Repositorio de la nota</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "node_main.taxonomy.repository.name",
            "description": "<p>Nombre</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "node_main.taxonomy.repository.parameter",
            "description": "<p>Parámetros</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "node_main.taxonomy.color",
            "description": "<p>Color de la taxonomía <b style=\"color: red;\">* Estandarizar formato #RGB, en caso de vacío mandar null</b></p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "node_main.columnist",
            "description": "<p>Columnista</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "node_main.blogger",
            "description": "<p>Blogger</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n \"node_main\": {\n  \"id\": 1204592,\n  \"title\": \"SHCP evitará alza abrupta de gasolinas; desde hoy se libera el precio\",\n  \"type\": \"article\",\n  \"summary\": \"<p>Seguirá amortiguando aumentos en los precios de las referencias y tipo de cambio mediante el esquema de estímulos semanales al IEPS, afirma</p>\",\n  \"created\": 1512044438,\n  \"changed\": 1512044438,\n  \"image\": \"goo.gl/9y15o1\",\n  \"gallery\": false,\n  \"video\": false,\n  \"video_vid\": {},\n  \"url\": \"http://www.excelsior.com.mx/nacional/2017/11/30/1204592\",\n  \"repository\": {\n    \"name\": \"excelsior\",\n    \"parameter\": \"id=1204592\"\n  },\n  \"taxonomy\": {\n    \"id\": 1,\n    \"name\": \"nacional\",\n    \"url\": \"http://www.excelsior.com.mx/nacional\",\n    \"repository\": {\n      \"name\": \"excelsior\",\n      \"parameter\": \"category_ids=1\"\n    },\n    \"color\": \"#8C1F36\"\n  },\n  \"columnist\": {},\n  \"blogger\": {}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "code/example.js",
    "groupTitle": "Home"
  },
  {
    "type": "get",
    "url": "/nodes_column",
    "title": "nodes_column",
    "version": "0.0.1",
    "name": "GetNodesColumn",
    "group": "Home",
    "description": "<p>Obtiene el listado de nodos columna (pares)</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "nodes_column",
            "description": "<p>Listado de notas</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "nodes_column.id",
            "description": "<p>Identificador</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nodes_column.title",
            "description": "<p>Titulo</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nodes_column.type",
            "description": "<p>Tipo (article)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nodes_column.summary",
            "description": "<p>Resumen</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "nodes_column.created",
            "description": "<p>Fecha creación</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "nodes_column.changed",
            "description": "<p>Fecha actualización</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nodes_column.image",
            "description": "<p>Imagen principal</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "nodes_column.gallery",
            "description": "<p>Establece si el contenido tiene galeria de imágenes (true, activo | false, inactivo)</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "nodes_column.video",
            "description": "<p>Establece si el contenido tiene video (true, activo | false, inactivo)</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "nodes_column.video_vid",
            "description": "<p>Información del video</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nodes_column.url",
            "description": "<p>Url web de la nota</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "nodes_column.repository",
            "description": "<p>Repositorio de la nota</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nodes_column.repository.name",
            "description": "<p>Nombre</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nodes_column.repository.parameter",
            "description": "<p>Parámetros</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "nodes_column.taxonomy",
            "description": "<p>Taxonimía</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "nodes_column.taxonomy.id",
            "description": "<p>Identificador</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nodes_column.taxonomy.name",
            "description": "<p>Nombre</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nodes_column.taxonomy.url",
            "description": "<p>Url sección web</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nodes_column.taxonomy.repository",
            "description": "<p>Repositorio de la nota</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nodes_column.taxonomy.repository.name",
            "description": "<p>Nombre</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nodes_column.taxonomy.repository.parameter",
            "description": "<p>Parámetros</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nodes_column.taxonomy.color",
            "description": "<p>Color de la taxonomía <b style=\"color: red;\">* Estandarizar formato #RGB, en caso de vacío mandar null</b></p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "nodes_column.columnist",
            "description": "<p>Columnista</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "nodes_column.blogger",
            "description": "<p>Blogger</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\"nodes_column\": [\n    {\n      \"id\": 1204612,\n      \"title\": \"Lamenta Peña Nieto deceso de titular del Indesol, Angélica Luna\",\n      \"type\": \"article\",\n      \"summary\": \"<p>En sus redes sociales el presidente expresó sus condolencias por el fallecimiento de la servidora pública; destaca el instituto trabajo de Luna Peña por la igualdad</p>\",\n      \"created\": 1512047099,\n      \"changed\": 1512047099,\n      \"image\": \"http://cdn2.excelsior.com.mx/media/styles/imagen_portada_grande_canal/public/pictures/2017/11/30/1809417.jpg\",\n      \"gallery\": false,\n      \"video\": false,\n      \"video_vid\": {},\n      \"url\": \"http://www.excelsior.com.mx/nacional/2017/11/30/1204612\",\n      \"repository\": {\n        \"name\": \"excelsior\",\n        \"parameter\": \"id=1204612\"\n      },\n      \"taxonomy\": {\n        \"id\": 1,\n        \"name\": \"nacional\",\n        \"url\": \"http://www.excelsior.com.mx/nacional\",\n        \"repository\": {\n          \"name\": \"excelsior\",\n          \"parameter\": \"category_ids=1\"\n        },\n        \"color\": \"#8C1F36\"\n      },\n      \"columnist\": {},\n      \"blogger\": {}\n    },\n    { ... },\n    { ... },\n    { ... },\n    { ... },\n    { ... },\n    { ... },\n    { ... },\n    { ... }\n]",
          "type": "json"
        }
      ]
    },
    "filename": "code/example.js",
    "groupTitle": "Home"
  },
  {
    "type": "get",
    "url": "/section_*",
    "title": "secciones",
    "version": "0.0.1",
    "name": "GetSection",
    "group": "Home",
    "description": "<p>Obtiene el listado de notas de la sección *(nacional | lobal | dinero | comunidad | adrenalina | funcion | hacker | expresiones).</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "section_X",
            "description": "<p>Listado de notas (nacional | lobal | dinero | comunidad | adrenalina | funcion | hacker | expresiones)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "section_X.id",
            "description": "<p>Identificador</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "section_X.title",
            "description": "<p>Titulo</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "section_X.type",
            "description": "<p>Tipo (article)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "section_X.summary",
            "description": "<p>Resumen</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "section_X.created",
            "description": "<p>Fecha creación</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "section_X.changed",
            "description": "<p>Fecha actualización</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "section_X.image",
            "description": "<p>Imagen principal</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "section_X.gallery",
            "description": "<p>Establece si el contenido tiene galeria de imágenes (true, activo | false, inactivo)</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "section_X.video",
            "description": "<p>Establece si el contenido tiene video (true, activo | false, inactivo)</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "section_X.video_vid",
            "description": "<p>Información del video</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "section_X.url",
            "description": "<p>Url web de la nota</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "section_X.repository",
            "description": "<p>Repositorio de la nota</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "section_X.repository.name",
            "description": "<p>Nombre</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "section_X.repository.parameter",
            "description": "<p>Parámetros</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "section_X.taxonomy",
            "description": "<p>Taxonimía</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "section_X.taxonomy.id",
            "description": "<p>Identificador</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "section_X.taxonomy.name",
            "description": "<p>Nombre</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "section_X.taxonomy.url",
            "description": "<p>Url sección web</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "section_X.taxonomy.repository",
            "description": "<p>Repositorio de la nota</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "section_X.taxonomy.repository.name",
            "description": "<p>Nombre</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "section_X.taxonomy.repository.parameter",
            "description": "<p>Parámetros</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "section_X.taxonomy.color",
            "description": "<p>Color de la taxonomía <b style=\"color: red;\">* Estandarizar formato #RGB, en caso de vacío mandar null</b></p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "section_X.columnist",
            "description": "<p>Columnista</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "section_X.blogger",
            "description": "<p>Blogger</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n \"section_nacional\": [\n    {\n      \"id\": 1204323,\n      \"title\": \"Rebeldes del PAN cierran filas con Meade; prevén “voto útil”\",\n      \"type\": \"article\",\n      \"summary\": \"<p>El senador Javier Lozano dice que él y otros panistas ven con agrado al extitular de Hacienda; nada me obliga a votar por absurdos populistas del Frente: Cordero</p>\",\n      \"created\": 1511956932,\n      \"changed\": 1511954590,\n      \"image\": \"http://cdn2.excelsior.com.mx/media/styles/large/public/pictures/2017/11/29/1808517.jpg\",\n      \"gallery\": false,\n      \"video\": false,\n      \"video_vid\": {},\n      \"url\": \"http://www.excelsior.com.mx/nacional/2017/11/29/1204323\",\n      \"repository\": {\n        \"name\": \"excelsior\",\n        \"parameter\": \"id=1204323\"\n      },\n      \"taxonomy\": {\n        \"id\": 1,\n        \"name\": \"nacional   \",\n        \"url\": \"http://www.excelsior.com.mx/nacional\",\n        \"repository\": {\n          \"name\": \"excelsior\",\n          \"parameter\": \"category_ids=1\"\n        },\n        \"color\": \"#8C1F36\"\n      },\n      \"columnist\": {},\n      \"blogger\": {}\n    },\n    { ... },\n    { ... },\n    { ... }\n]",
          "type": "json"
        }
      ]
    },
    "filename": "code/example.js",
    "groupTitle": "Home"
  },
  {
    "type": "get",
    "url": "/selection_day",
    "title": "selection_day",
    "version": "0.0.1",
    "name": "GetSelectionDay",
    "group": "Home",
    "description": "<p>Obtiene el listado de notas seleccionadas del día.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "selection_day",
            "description": "<p>Listado de notas</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "selection_day.id",
            "description": "<p>Identificador</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "selection_day.title",
            "description": "<p>Titulo</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "selection_day.type",
            "description": "<p>Tipo (article)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "selection_day.summary",
            "description": "<p>Resumen</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "selection_day.created",
            "description": "<p>Fecha creación</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "selection_day.changed",
            "description": "<p>Fecha actualización</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "selection_day.image",
            "description": "<p>Imagen principal</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "selection_day.gallery",
            "description": "<p>Establece si el contenido tiene galeria de imágenes (true, activo | false, inactivo)</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "selection_day.video",
            "description": "<p>Establece si el contenido tiene video (true, activo | false, inactivo)</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "selection_day.video_vid",
            "description": "<p>Información del video</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "selection_day.url",
            "description": "<p>Url web de la nota</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "selection_day.repository",
            "description": "<p>Repositorio de la nota</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "selection_day.repository.name",
            "description": "<p>Nombre</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "selection_day.repository.parameter",
            "description": "<p>Parámetros</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "selection_day.taxonomy",
            "description": "<p>Taxonimía</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "selection_day.taxonomy.id",
            "description": "<p>Identificador</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "selection_day.taxonomy.name",
            "description": "<p>Nombre</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "selection_day.taxonomy.url",
            "description": "<p>Url sección web</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "selection_day.taxonomy.repository",
            "description": "<p>Repositorio de la nota</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "selection_day.taxonomy.repository.name",
            "description": "<p>Nombre</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "selection_day.taxonomy.repository.parameter",
            "description": "<p>Parámetros</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "selection_day.taxonomy.color",
            "description": "<p>Color de la taxonomía <b style=\"color: red;\">* Estandarizar formato #RGB, en caso de vacío mandar null</b></p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "selection_day.columnist",
            "description": "<p>Columnista</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "selection_day.blogger",
            "description": "<p>Blogger</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\"selection_day\": [\n    {\n      \"id\": 1204425,\n      \"title\": \"Hallan en Guanajuato hieleras con narcomensajes y vísceras\",\n      \"type\": \"article\",\n      \"summary\": \"<p>En distintos lugares de la ciudad guanajuatense fueron hallados los recipientes; autoridades también reportan que un grupo armado dispara contra auto de lujo y blindado</p>\",\n      \"created\": 1511984932,\n      \"changed\": 1511984981,\n      \"image\": \"http://cdn2.excelsior.com.mx/media/styles/large/public/pictures/2017/11/29/1808907.jpg\",\n      \"gallery\": false,\n      \"video\": false,\n      \"video_vid\": {},\n      \"url\": \"http://www.excelsior.com.mx/nacional/2017/11/29/1204425\",\n      \"repository\": {\n        \"name\": \"excelsior\",\n        \"parameter\": \"id=1204425\"\n      },\n      \"taxonomy\": {\n        \"id\": 1,\n        \"name\": \"nacional   \",\n        \"url\": \"http://www.excelsior.com.mx/nacional\",\n        \"repository\": {\n          \"name\": \"excelsior\",\n          \"parameter\": \"category_ids=1\"\n        },\n        \"color\": \"#8C1F36\"\n      },\n      \"columnist\": {},\n      \"blogger\": {}\n    },\n    { ... },\n    { ... },\n    { ... }\n]",
          "type": "json"
        }
      ]
    },
    "filename": "code/example.js",
    "groupTitle": "Home"
  },
  {
    "type": "get",
    "url": "/stage",
    "title": "stage/trend",
    "version": "0.0.1",
    "name": "GetStage",
    "group": "Home",
    "description": "<p>Obtiene el listado de notas trend.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "stage",
            "description": "<p>Listado de notas</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "stage.id",
            "description": "<p>Identificador</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "stage.title",
            "description": "<p>Titulo</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "stage.type",
            "description": "<p>Tipo (article)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "stage.summary",
            "description": "<p>Resumen</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "stage.created",
            "description": "<p>Fecha creación</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "stage.changed",
            "description": "<p>Fecha actualización</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "stage.image",
            "description": "<p>Imagen principal</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "stage.gallery",
            "description": "<p>Establece si el contenido tiene galeria de imágenes (true, activo | false, inactivo)</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "stage.video",
            "description": "<p>Establece si el contenido tiene video (true, activo | false, inactivo)</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "stage.video_vid",
            "description": "<p>Información del video</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "stage.url",
            "description": "<p>Url web de la nota</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "stage.repository",
            "description": "<p>Repositorio de la nota</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "stage.repository.name",
            "description": "<p>Nombre</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "stage.repository.parameter",
            "description": "<p>Parámetros</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "stage.taxonomy",
            "description": "<p>Taxonimía</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "stage.taxonomy.id",
            "description": "<p>Identificador</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "stage.taxonomy.name",
            "description": "<p>Nombre</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "stage.taxonomy.url",
            "description": "<p>Url sección web</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "stage.taxonomy.repository",
            "description": "<p>Repositorio de la nota</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "stage.taxonomy.repository.name",
            "description": "<p>Nombre</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "stage.taxonomy.repository.parameter",
            "description": "<p>Parámetros</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "stage.taxonomy.color",
            "description": "<p>Color de la taxonomía <b style=\"color: red;\">* Estandarizar formato #RGB, en caso de vacío mandar null</b></p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "stage.columnist",
            "description": "<p>Columnista</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "stage.blogger",
            "description": "<p>Blogger</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n \"stage\": [\n    {\n      \"id\": 1204628,\n      \"title\": \"Tiene 22 años y ya probó el sabor del dinero como chofer de ‘El Teo’\",\n      \"type\": \"article\",\n      \"summary\": \"<p>No había reloj que checar ni horario que cumplir. Eso sí, absoluta disponibilidad y, sobre todo, lealtad a prueba de fuego</p>\",\n      \"created\": 1512052678,\n      \"changed\": 1512052678,\n      \"image\": \"http://cdn2.excelsior.com.mx/media/styles/imagen_portada_grande_canal/public/pictures/2017/11/30/1809451.jpg\",\n      \"gallery\": false,\n      \"video\": false,\n      \"video_vid\": {},\n      \"url\": \"http://www.excelsior.com.mx/nacional/2017/11/30/1204628\",\n      \"repository\": {\n        \"name\": \"excelsior\",\n        \"parameter\": \"id=1204628\"\n      },\n      \"taxonomy\": {\n        \"id\": 1,\n        \"name\": \"nacional\",\n        \"url\": \"http://www.excelsior.com.mx/nacional\",\n        \"repository\": {\n          \"name\": \"excelsior\",\n          \"parameter\": \"category_ids=1\"\n        },\n        \"color\": \"#8C1F36\"\n      },\n      \"columnist\": {},\n      \"blogger\": {}\n    },\n    { ... },\n    { ... },\n    { ... }\n]",
          "type": "json"
        }
      ]
    },
    "filename": "code/example.js",
    "groupTitle": "Home"
  },
  {
    "type": "get",
    "url": "/status_columnists",
    "title": "status_columnists",
    "version": "0.0.1",
    "name": "GetStatusColumnists",
    "group": "Home",
    "description": "<p>Obtiene información si el servicio de columnista esta activo en un periodo del día (mañana | tarde).</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "status_columnists",
            "description": "<p>Estatus de la sección Opinión</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "status_columnists.status",
            "description": "<p>Estatus del elemento (true, activo | false, inactivo)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n \"status_columnists\": {\n  \"status\": true\n}",
          "type": "json"
        }
      ]
    },
    "filename": "code/example.js",
    "groupTitle": "Home"
  },
  {
    "type": "get",
    "url": "/streaming",
    "title": "streaming",
    "version": "0.0.1",
    "name": "GetStreaming",
    "group": "Home",
    "description": "<p>Obtiene información si el servicio de streaming esta activo.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "streaming",
            "description": "<p>Estatus del elemento (true, activo | false, inactivo)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\"streaming\": false",
          "type": "json"
        }
      ]
    },
    "filename": "code/example.js",
    "groupTitle": "Home"
  },
  {
    "type": "get",
    "url": "/super_ocho",
    "title": "super_ocho",
    "version": "0.0.1",
    "name": "GetSuperOcho",
    "group": "Home",
    "description": "<p>Obtine información del banner super ocho.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "super_ocho",
            "description": "<p>Nodo principal</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "super_ocho.template",
            "description": "<p>Define el tipo de plantilla que se utilizará (normal)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "super_ocho.template.name",
            "description": "<p>Nombre de la plantilla <b style=\"color: red;\">* Estandarizar: normal</b></p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "super_ocho.template.id",
            "description": "<p>Id de la plantilla</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "super_ocho.kicker",
            "description": "<p>Título secundario</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "super_ocho.status",
            "description": "<p>Estatus del elemento (1, activo | 0, inactivo)</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "super_ocho.nodes",
            "description": "<p>Listado de notas</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "super_ocho.nodes.main",
            "description": "<p>Nota principal</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "super_ocho.nodes.main.id",
            "description": "<p>Identificador</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "super_ocho.nodes.main.title",
            "description": "<p>Titulo</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "super_ocho.nodes.main.type",
            "description": "<p>Tipo (article)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "super_ocho.nodes.main.summary",
            "description": "<p>Resumen</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "super_ocho.nodes.main.created",
            "description": "<p>Fecha creación</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "super_ocho.nodes.main.changed",
            "description": "<p>Fecha actualización</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "super_ocho.nodes.main.image",
            "description": "<p>Imagen principal</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "super_ocho.nodes.main.gallery",
            "description": "<p>Establece si el contenido tiene galeria de imágenes (true, activo | false, inactivo)</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "super_ocho.nodes.main.video",
            "description": "<p>Establece si el contenido tiene video (true, activo | false, inactivo)</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "super_ocho.nodes.main.video_vid",
            "description": "<p>Información del video</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "super_ocho.nodes.main.url",
            "description": "<p>Url web de la nota</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "super_ocho.nodes.main.repository",
            "description": "<p>Repositorio de la nota</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "super_ocho.nodes.main.repository.name",
            "description": "<p>Nombre</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "super_ocho.nodes.main.repository.parameter",
            "description": "<p>Parámetros</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "super_ocho.nodes.main.taxonomy",
            "description": "<p>Taxonimía</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "super_ocho.nodes.main.columnist",
            "description": "<p>Columnista</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "super_ocho.nodes.main.blogger",
            "description": "<p>Blogger</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "super_ocho.nodes.related",
            "description": "<p>Lista de notas relacionadas</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "super_ocho.background",
            "description": "<p>Imagen principal</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK \n \"super_ocho\": {\n\t\"template\": {\n\t  \"name\": \"normal\",\n\t  \"id\": 1\n\t},\n\t\"kicker\": \"Inseguridad en la Ciudad de México\",\n\t\"status\": 1,\n\t\"nodes\": {\n\t  \"main\": {\n\t\t\"id\": 1204613,\n\t\t\"title\": \"Asaltan el Chili's Universidad cuando veían el América-Tigres\",\n\t\t\"type\": \"article\",\n\t\t\"summary\": \"\",\n\t\t\"created\": 1512060961,\n\t\t\"changed\": 1512064360,\n\t\t\"image\": \"https://goo.gl/XR7W6E\",\n\t\t\"gallery\": false,\n\t\t\"video\": false,\n\t\t\"video_vid\": {},\n\t\t\"url\": \"http://www.excelsior.com.mx/comunidad/2017/11/30/1204613\",\n\t\t\"repository\": {\n\t\t  \"name\": \"excelsior\",\n\t\t  \"parameter\": \"id=1204613\"\n\t\t},\n\t\t\"taxonomy\": {},\n\t\t\"columnist\": {},\n\t\t\"blogger\": {}\n\t  },\n\t  \"related\": {}\n\t},\n\t\"background\": \"https://goo.gl/1Mgcuj\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "code/example.js",
    "groupTitle": "Home"
  },
  {
    "type": "get",
    "url": "/super_ocho",
    "title": "super_ocho_wide",
    "version": "0.0.1",
    "name": "GetSuperOchoWide",
    "group": "Home",
    "description": "<p>Obtine información del banner super ocho wide.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "super_ocho",
            "description": "<p>Nodo principal</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "super_ocho.template",
            "description": "<p>Define el tipo de plantilla que se utilizará (super wide)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "super_ocho.template.name",
            "description": "<p>Nombre de la plantilla <b style=\"color: red;\">* Estandarizar: super wide</b></p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "super_ocho.template.id",
            "description": "<p>Id de la plantilla</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "super_ocho.kicker",
            "description": "<p>Título secundario</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "super_ocho.status",
            "description": "<p>Estatus del elemento (1, activo | 0, inactivo)</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "super_ocho.nodes",
            "description": "<p>Listado de notas</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "super_ocho.nodes.main",
            "description": "<p>Nota principal</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "super_ocho.nodes.related",
            "description": "<p>Lista de notas relacionadas</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "super_ocho.background",
            "description": "<p>Imagen principal</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\"super_ocho\": {\n    \"template\": {\n      \"name\": \"super wide\",\n      \"id\": 1\n    },\n    \"kicker\": \"Iba por otra víctima\",\n    \"status\": 1,\n    \"nodes\": {\n      \"main\": {},\n      \"related\": {}\n    },\n    \"background\": \"goo.gl/voPVAP\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "code/example.js",
    "groupTitle": "Home"
  },
  {
    "type": "get",
    "url": "/wildcard",
    "title": "wildcard",
    "version": "0.0.1",
    "name": "GetWildcard",
    "group": "Home",
    "description": "<p>Obtiene información del wildcard.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "wildcard",
            "description": "<p>Contenedor de notas</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "wildcard.status",
            "description": "<p>Estatus del elemento (1, activo | 0, inactivo)</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "wildcard.nodes",
            "description": "<p>Listado de notas</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "wildcard.nodes.main.id",
            "description": "<p>Identificador</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "wildcard.nodes.main.title",
            "description": "<p>Titulo</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "wildcard.nodes.main.type",
            "description": "<p>Tipo (article)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "wildcard.nodes.main.summary",
            "description": "<p>Resumen</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "wildcard.nodes.main.created",
            "description": "<p>Fecha creación</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "wildcard.nodes.main.changed",
            "description": "<p>Fecha actualización</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "wildcard.nodes.main.image",
            "description": "<p>Imagen principal</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "wildcard.nodes.main.gallery",
            "description": "<p>Establece si el contenido tiene galeria de imágenes (true, activo | false, inactivo)</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "wildcard.nodes.main.video",
            "description": "<p>Establece si el contenido tiene video (true, activo | false, inactivo)</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "wildcard.nodes.main.video_vid",
            "description": "<p>Información del video</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "wildcard.nodes.main.url",
            "description": "<p>Url web de la nota</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "wildcard.nodes.main.repository",
            "description": "<p>Repositorio de la nota</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "wildcard.nodes.main.repository.name",
            "description": "<p>Nombre</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "wildcard.nodes.main.repository.parameter",
            "description": "<p>Parámetros</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "wildcard.nodes.main.taxonomy",
            "description": "<p>Taxonimía</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "wildcard.nodes.main.taxonomy.id",
            "description": "<p>Identificador</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "wildcard.nodes.main.taxonomy.name",
            "description": "<p>Nombre</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "wildcard.nodes.main.taxonomy.url",
            "description": "<p>Url sección web</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "wildcard.nodes.main.taxonomy.repository",
            "description": "<p>Repositorio de la nota</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "wildcard.nodes.main.taxonomy.repository.name",
            "description": "<p>Nombre</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "wildcard.nodes.main.taxonomy.repository.parameter",
            "description": "<p>Parámetros</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "wildcard.nodes.main.taxonomy.color",
            "description": "<p>Color de la taxonomía <b style=\"color: red;\">* Estandarizar formato #RGB, en caso de vacío mandar null</b></p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "wildcard.nodes.main.columnist",
            "description": "<p>Columnista</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "wildcard.nodes.main.blogger",
            "description": "<p>Blogger</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n \"wildcard\": {\n    \"status\": 0,\n    \"nodes\": [\n      {\n        \"id\": 1204489,\n        \"title\": \"Cayó presunto violador de 3 niñas en Ciudad Juárez; asesinó a una de ellas\",\n        \"type\": \"article\",\n        \"summary\": \"<p>El pasado lunes por la madrugada, el acusado abusó sexualmente de dos hermanitas de 10 y 11 años de edad, y asesinó a la mayor de ellas de 12 años</p>\",\n        \"created\": 1511997821,\n        \"changed\": 1511997821,\n        \"image\": \"http://cdn2.excelsior.com.mx/media/styles/imagen_portada_grande_canal/public/pictures/2017/11/29/1809112.jpg\",\n        \"gallery\": false,\n        \"video\": false,\n        \"video_vid\": {},\n        \"url\": \"http://www.excelsior.com.mx/nacional/2017/11/29/1204489\",\n        \"repository\": {\n          \"name\": \"excelsior\",\n          \"parameter\": \"id=1204489\"\n        },\n        \"taxonomy\": {\n          \"id\": 1,\n          \"name\": \"nacional\",\n          \"url\": \"http://www.excelsior.com.mx/nacional\",\n          \"repository\": {\n            \"name\": \"excelsior\",\n            \"parameter\": \"category_ids=1\"\n          },\n          \"color\": \"#8C1F36\"\n        },\n        \"columnist\": {},\n        \"blogger\": {}\n      },\n      { ... },\n      { ... }\n    ]\n},",
          "type": "json"
        }
      ]
    },
    "filename": "code/example.js",
    "groupTitle": "Home"
  }
] });
