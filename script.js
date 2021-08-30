function calcular() {
  var caixa = document.querySelector("#country");
  var res = document.querySelector("#res");
  var país = caixa.value;
  res.innerHTML = `<p>Seu país é <strong>${país.toUpperCase()}</strong>, você é brasileiro!</p>`;
  if (país != 'Brasil' || país != 'brasil') {
    res.innerHTML = `<p>Seu país é <strong>${país.toUpperCase()}</strong>, você é estrangeiro!</p>`;
  }
}
