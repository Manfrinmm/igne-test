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

function calculateTotalAmount() {
  var amount = $("#product-amount").val();
  var quantity = $("#product-quantity").val();

  var priceFormatted = Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(amount * quantity);

  $("#product-total_amount").val(priceFormatted);
}

$("#product-amount").change(calculateTotalAmount);
$("#product-quantity").change(calculateTotalAmount);
