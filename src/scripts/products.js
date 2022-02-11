// Refazer a lista quando um produto for removido e atualizar o numero do item

var lengthItens = 1;

function generateId() {
  return Math.floor(Math.random() * 1100);
}

function addItemToList() {
  const listProducts = $("#products");

  const id = generateId();
  lengthItens++;

  listProducts.prepend(createItem(id, lengthItens));
}

function createItem(id, number) {
  return `
  <li class="product fs-display-flex" id="item-${id}">
    <button onclick="removeItem(${id})">Delete</button>

    <fieldset>
      <legend class="fs-color-white">Item ${number}</legend>
      <section class="fs-display-flex flex-direction-column">
        <input type="hidden" name="position" value="${number}" />

        <div class="form-group">
          <label class="fs-no-bold" for="${number}-product-description"
            >Descrição do Produto</label
          >
          <input
            class="form-control"
            name="${number}-product-description"
            id="${number}-product-description"
            form="forms"
            required
          />
        </div>

        <div class="group">
          <div class="form-group">
            <label class="fs-no-bold" for="${number}-product-measurement"
              >Und. Medida</label
            >
            <input
              class="form-control"
              name="${number}-product-measurement"
              id="${number}-product-measurement"
              list="${number}-product-measurement-list"
              form="forms"
              required
            />

            <datalist id="${number}-product-measurement-list">
              <option value="Quilograma"></option>
              <option value="Grama"></option>
              <option value="Litros"></option>
              <option value="Mililitros"></option>
              <option value="Quilômetros"></option>
              <option value="Metros"></option>
            </datalist>
          </div>

          <div class="form-group">
            <label class="fs-no-bold" for="${number}-product-quantity"
              >Qtde em Estoque</label
            >
            <input
              class="form-control"
              type="number"
              name="${number}-product-quantity"
              id="${number}-product-quantity"
              form="forms"
              required
              onchange="calculateTotalAmount(${number})"
            />
          </div>

          <div class="form-group">
            <label class="fs-no-bold" for="${number}-product-amount"
              >Valor Unitário</label
            >
            <input
              class="form-control"
              type="number"
              name="${number}-product-amount"
              id="${number}-product-amount"
              form="forms"
              required
              onchange="calculateTotalAmount(${number})"
            />
          </div>

          <div class="form-group">
            <label class="fs-no-bold" for="${number}-product-total_amount"
              >Valor Total</label
            >
            <input
              class="form-control"
              disabled
              name="${number}-product-total_amount"
              id="${number}-product-total_amount"
              form="forms"
              required
            />
          </div>
        </div>
      </section>
    </fieldset>
  </li>
  `;
}

function removeItem(id) {
  const listProducts = $("#products");

  const lengthItensListed = listProducts[0].children.length;

  if (lengthItensListed > 1) {
    $(`#item-${id}`).remove();
  }
}

function calculateTotalAmount(id) {
  var amount = $(`#${id}-product-amount`).val();
  var quantity = $(`#${id}-product-quantity`).val();

  var priceFormatted = Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(amount * quantity);

  $(`#${id}-product-total_amount`).val(priceFormatted);
}
