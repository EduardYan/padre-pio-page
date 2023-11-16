//EN TIEMPO REAL
// $(document).ready(function () {
//   // Inicializar mark.js en el documento
//   var mark = new Mark(document.body);

//   $("input[type='search']").on("input", function () {
//     // Obtener el valor de búsqueda
//     var searchTerm = $(this).val();

//     // Realizar la búsqueda y resaltar en tiempo real
//     if (searchTerm) {
//       mark.unmark(); // Desmarcar términos anteriores
//       mark.mark(searchTerm, {
//         separateWordSearch: false,
//         className: "highlight",
//       }); // Resaltar la frase completa con la clase 'highlight'
//     } else {
//       mark.unmark(); // Si el campo de búsqueda está vacío, desmarcar todas las instancias
//     }
//   });
// });

$(document).ready(function () {
  var mark = new Mark(document.body);

  $("input[type='search']").on("input", function () {
    // Obtener el valor de búsqueda
    var searchTerm = $(this).val();

    // Desmarcar instancias si el campo está vacío en tiempo real
    if (searchTerm.trim() === "") {
      mark.unmark();
      return;
    }
  });

  // Manejar el evento de envío del formulario
  $("form").submit(function (event) {
    event.preventDefault();

    // Obtener el valor de búsqueda
    var searchTerm = $("input[type='search']").val();

    // Verificar si el campo de búsqueda está vacío
    if (searchTerm.trim() === "") {
      mark.unmark(); // Desmarcar términos anteriores si el campo está vacío
      return;
    }

    // Realizar la búsqueda y resaltar
    mark.unmark(); // Desmarcar términos anteriores
    mark.mark(searchTerm, {
      separateWordSearch: false,
      className: "highlight",
    }); // Resaltar la frase completa con la clase 'highlight'

    // Obtener la posición de la primera coincidencia y desplazarse hacia ella
    var firstOccurrence = $(".highlight:first");
    if (firstOccurrence.length > 0) {
      $("html, body").animate(
        {
          scrollTop: firstOccurrence.offset().top - 50, // Ajusta el valor según sea necesario
        },
        500
      );
    }
  });
});
