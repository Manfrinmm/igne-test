function getAddressByZipCode() {
  var zip_code = $(this).val();

  if (zip_code === "") {
    alert("Informe um CEP!");
  }

  $.getJSON(
    "https://viacep.com.br/ws/" + zip_code + "/json/?callback=?",
    (dados) => {
      $("#address-street").val(dados.logradouro);
      $("#address-neighborhood").val(dados.bairro);
      $("#address-city").val(dados.localidade);
      $("#address-state").val(dados.uf);
    }
  ).fail(() => {
    alert("CEP não encontrado!");
  });
}

$("#address-zip_code").blur(getAddressByZipCode);
