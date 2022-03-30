// DELETE BUTTON
$('ul#middle').on('click', 'button', function () {
  $(this).closest('li').fadeOut(200, function () {
    let delRow = this.remove();
  });
});



// Applying the "Add Skill" button
$('#add').on('click', function () {
  //if input field is empty, ignore button cliks
  if ($('#input').val() === '') return;

  const newSkill = $('#input').val();
  const template = `
      <li class="entry">
          <button class="delete">X</button>
          <p>${newSkill}</p>
      </li>
    `;

  $('ul').append(template);
  $('#input').val('')
})