/* инициализация */
function Init() {
  const fileselect = $id("fileselect"),
    filedrag = $id("filedrag")

  /* выбор файла */
  fileselect.addEventListener("change", FileSelectHandler, false);

  /* проверка поддержки XHR2 */
  var xhr = new XMLHttpRequest();
  if (xhr.upload) {
    /* сброс файла */
    filedrag.addEventListener("dragover", FileDragHover, false);
    filedrag.addEventListener("dragleave", FileDragHover, false);
    filedrag.addEventListener("drop", FileSelectHandler, false);
  }
}
Init();

// Файл над нужной областью
function FileDragHover(e) {
  e.stopPropagation();
  e.preventDefault();
  e.target.className = (e.type === "dragover" ? "hover" : "");
}

/* getElementById */
function $id(id) {
	return document.getElementById(id);
}

/* вывод сообщений */
function Output(msg) {
	var m       = $id("messages");
	m.innerHTML = msg + m.innerHTML;
}

// выбор файла
function FileSelectHandler(e) {
  FileDragHover(e);
  var files = e.target.files || e.dataTransfer.files;
  for (var i = 0, f; f = files[i]; i++) {
    ParseFile(f);
  }
}

function ParseFile(file) {
  Output(
    "<p>File information: <strong>" + file.name +
    "</strong> type: <strong>" + file.type +
    "</strong> size: <strong>" + file.size +
    "</strong> bytes"
  );
}