for (let i = 0; i < 16; i++) {
    $('#grid-container').append('<div class="box" data-index="' + i + '"></div>');
  }

  $('#grid-container').on('click', '.box', function() {
    const patternIndices = [0, 3, 5, 6, 9, 10, 12, 15];
    patternIndices.forEach(i => {
      $(`.box[data-index="${i}"]`).toggleClass('active');
    });
  });
   