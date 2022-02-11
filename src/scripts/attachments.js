var fileList = [];

function addIAttachmentToList() {
  const inputFile = $("#inputFile");
  inputFile.click();
}

$("#inputFile").change(async function () {
  const listAttachments = $("#attachments");

  fileList = [...this.files, ...fileList];

  listAttachments.empty();

  fileList.forEach((file, index) => {
    const attachment = createAttachment(file.name, index);

    listAttachments.append(attachment);
  });
});

function createAttachment(name, index) {
  return `
  <li class="attachment fs-display-flex" id="attachment-${index}">
    <button onclick="removeAttachment(${index})">Delete</button>
    <button onclick="viewAttachment(${index})">Visualizar</button>
    <p>${name}</p>
  </li>
  `;
}

function removeAttachment(index) {
  fileList.splice(index, 1);

  $(`#attachment-${index}`).remove();
}

async function viewAttachment(index) {
  const file = fileList[index];

  const arrayBuffer = await file.arrayBuffer();

  const blob = new Blob([new Uint8Array(arrayBuffer)], { type: file.type });

  var blobUrl = URL.createObjectURL(blob);

  var link = document.createElement("a");

  link.href = blobUrl;
  link.download = `${file.name}`;

  link.click();
}
