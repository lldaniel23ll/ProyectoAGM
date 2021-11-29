var nextPageToken = "";
// Resultados por pagina
var resPorPagina = 5;
// Paginas a mostrar
var paginas = 1;
var key = "AIzaSyCiu-0sxqL_CIA8DfTNlU12AeUYMzygmj8";
var idCanal = "UCUrYBZGlEOSD1_ds_HcNd6A";
var url =
  "https://www.googleapis.com/youtube/v3/search?key=" +
  key +
  "&channelId=" +
  idCanal +
  "&part=snippet,id&order=date&maxResults=" +
  resPorPagina;
//$("#contenedor").append(url);
$.getJSON(url, function (data) {
  for (var k in data.items) {
    var tituloVideo = data.items[k]["snippet"].title;
    var urlVideo =
      "https://www.youtube.com/watch?v=" + data.items[k]["id"].videoId;
    var fechaVideo = data.items[k]["snippet"].publishedAt;

    console.log(k, data.items[k]["id"].videoId);
    //$('#tabla tr:last').after('<tr>'+tituloVideo+'</tr><tr>'+urlVideo+'</tr><tr>'+fechaVideo+'</tr>');
    $("table tbody").append(
      "<tr><td>" +
        tituloVideo +
        "</td><td><a href=" +
        urlVideo +
        " target='_blank'>video</a></td></tr>"
    );
  }
});
