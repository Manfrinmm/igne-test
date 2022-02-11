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
        <div class="form-group">
          <label class="fs-no-bold" for="product-description"
            >Descrição do Produto</label
          >
          <input
            class="form-control"
            name="product-description"
            id="product-description"
            form="forms"
            required
          />
        </div>

        <div class="group">
          <div class="form-group">
            <label class="fs-no-bold" for="product-measurement"
              >Und. Medida</label
            >
            <input
              class="form-control"
              name="product-measurement"
              id="product-measurement"
              list="product-measurement-list"
              form="forms"
              required
            />

            <datalist id="product-measurement-list">
              <option value="Quilograma"></option>
              <option value="Grama"></option>
              <option value="Litros"></option>
              <option value="Mililitros"></option>
              <option value="Quilômetros"></option>
              <option value="Metros"></option>
            </datalist>
          </div>

          <div class="form-group">
            <label class="fs-no-bold" for="product-quantity"
              >Qtde em Estoque</label
            >
            <input
              class="form-control"
              type="number"
              name="product-quantity"
              id="product-quantity"
              form="forms"
              required
            />
          </div>

          <div class="form-group">
            <label class="fs-no-bold" for="product-amount"
              >Valor Unitário</label
            >
            <input
              class="form-control"
              type="number"
              name="product-amount"
              id="product-amount"
              form="forms"
              required
            />
          </div>

          <div class="form-group">
            <label class="fs-no-bold" for="product-total_amount"
              >Valor Total</label
            >
            <input
              class="form-control"
              disabled
              name="product-total_amount"
              id="product-total_amount"
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
