const input = document.getElementById("imageInput");
const preview = document.getElementById("preview");
const resultBox = document.getElementById("result");
const analyzeBtn = document.getElementById("analyzeBtn");
let base64Image = null;


input.addEventListener("change", (e) => {
const file = e.target.files[0];
if (!file) return;


const reader = new FileReader();
reader.onload = () => {
base64Image = reader.result;
preview.src = base64Image;
};
reader.readAsDataURL(file);
});


analyzeBtn.addEventListener("click", async () => {
if (!base64Image) return alert("Selecione uma imagem primeiro.");


resultBox.textContent = "Processando...";


const response = await fetch("/api/iris-analyze", {
method: "POST",
headers: { "Content-Type": "application/json" },
body: JSON.stringify({ imageBase64: base64Image })
});


const data = await response.json();
resultBox.textContent = JSON.stringify(data, null, 2);
});
