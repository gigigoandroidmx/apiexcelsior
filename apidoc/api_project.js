define({
  "name": "Api Excelsior",
  "version": "0.0.1",
  "description": "Revisión de servicios | versión 0.0.1<br/><a href='http://api.invent.mx/v1/excelsior/home-beta-v2.json/7ab573973557335f456395a82f5ee18c' target='_blank'>api excelsior home</a><hr/><b>¡Importante!</b><br/>Mantener homologados los tipos de datos con contenido y vacíos:<br/><p style='color: #333;'>- Objeto array [ ] <b>&nbsp;E.G.</b> <code>\"nodes_column\": []</code><br/>- Objeto simple { } <b>&nbsp;E.G.</b> <code>\"taxonomy\": {}</code><br/>- String <b>&nbsp;E.G.</b> <code>\"name\": null|\"\"</code><br/>- Number <b>&nbsp;E.G.</b> <code>\"id\": 0|null</code><br/>- Boolean <b>&nbsp;E.G.</b> <code>\"status\": false</code></p>",
  "order": [
    "GetSuperOcho",
    "GetSuperOchoWide",
    "GetStreaming",
    "GetMxM",
    "GetMxMContent",
    "GetNodeMain",
    "GetWildcard",
    "GetNodesColumn",
    "GetStage",
    "GetSelectionDay",
    "GetSection",
    "GetStatusColumnists",
    "GetColumnists"
  ],
  "sampleUrl": false,
  "defaultVersion": "0.0.0",
  "apidoc": "0.3.0",
  "generator": {
    "name": "apidoc",
    "time": "2017-12-01T00:33:10.815Z",
    "url": "http://apidocjs.com",
    "version": "0.17.6"
  }
});
