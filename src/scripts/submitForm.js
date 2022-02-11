$("#forms").submit(function (e) {
  e.preventDefault();

  if (fileList.length === 0) {
    // alert("É necessário inserir ao menos um anexo!");
    // return;
  }

  var inputs = $("#forms :input");

  var values = {};
  inputs.each(function () {
    values[this.name] = $(this).val();
  });

  var productsInputs = $("#products :input");

  const productsGrouped = [];
  var products = [];

  productsInputs.each(function () {
    products.push({ [this.name]: this.value });
  });

  products.forEach((product) => {
    const position = Object.keys(product)[0];
    var value = Object.values(product)[0];

    if (position === "position") {
      productsGrouped.push({});
    }

    // Selecionar apenas as propriedades
    if (position.length > 8) {
      const key = position.split("-")[2];

      if (key === "total_amount") {
        value = value.replaceAll(".", "");
        value = value.replace("R$ ", "");
        value = value.replace(",", ".");
      }

      productsGrouped[productsGrouped.length - 1] = {
        ...productsGrouped[productsGrouped.length - 1],
        [key]: value,
      };
    }
  });

  const data = {
    razaoSocial: values.razao_social,
    nomeFantasia: values.fantasy_name,
    cnpj: values.cnpj,
    inscricaoEstadual: values.inscricao_estadual,
    inscricaoMunicipal: values.inscricao_municipal,
    nomeContato: values["contact-name"],
    telefoneContato: values["contact-phone"],
    emailContato: values["contact-email"],
    produtos: productsGrouped,
    // anexos: [
    //   {
    //     indice: 1,
    //     nomeArquivo: "iouahsiuahusihausihiahiuah",
    //     blobArquivo: "iouahsiuahusihausihiahiuah",
    //   },
    //   {
    //     indice: 2,
    //     nomeArquivo: "iouahsiuahusihausihiahiuah",
    //     blobArquivo: "iouahsiuahusihausihiahiuah",
    //   },
    // ],
  };

  sessionStorage.setItem("@igne:register", JSON.stringify(data));

  console.log({ data });
});

function validateRazaoSocial() {
  let usernameValue = $("#razao_social").val();

  console.log($("#razao_social").offsetParent()[0]);

  console.log({ usernameValue });
  if (usernameValue.length == "") {
    $("#usercheck").show();
    usernameError = false;
    return false;
  } else if (usernameValue.length < 3 || usernameValue.length > 10) {
    $("#usercheck").show();
    $("#usercheck").html("**length of username must be between 3 and 10");
    usernameError = false;
    return false;
  } else {
    $("#usercheck").hide();
  }
}
