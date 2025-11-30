// IrisQI - script_full.js


// Elementos
const irisInput = document.getElementById('irisInput');
const preview = document.getElementById('preview');
const analyzeBtn = document.getElementById('analyzeBtn');
const resultSection = document.getElementById('result');
const resultadoRaw = document.getElementById('resultadoRaw');


// Campos de perfil
const birthInput = document.getElementById('birthInput');
const comorbInput = document.getElementById('comorb');
const emotionsInput = document.getElementById('emotions');
const habitsInput = document.getElementById('habits');


// Saídas
const irisAnalysisEl = document.getElementById('irisAnalysis');
const horoscopeEl = document.getElementById('horoscope');
const elementsEl = document.getElementById('elements');
const recommendationsEl = document.getElementById('recommendations');
const quoteEl = document.getElementById('quote');


// Preview da imagem
irisInput.addEventListener('change', (e) => {
const file = e.target.files[0];
if (!file) return;
const reader = new FileReader();
reader.onload = ev => {
preview.src = ev.target.result;
preview.style.display = 'block';
}
reader.readAsDataURL(file);
});


// Botão analise
analyzeBtn.addEventListener('click', gerarRelatorio);


async function gerarRelatorio() {
const file = irisInput.files[0];
const birthDate = birthInput.value;
const comorb = comorbInput.value;
const emotions = emotionsInput.value;
const habits = habitsInput.value;


if (!file) { alert('Envie uma imagem da íris.'); return; }


// Converte para base64 (para enviar à API se desejar)
const base64 = await toBase64(file);


// === Modo de desenvolvimento: análise fake local ===
// Use analisarIrisFake() enquanto não integrar back-end.
const irisAnalysis = analisarIrisFake();


// Horóscopo / elemento local
const zodiac = calcularZodiacoChines(birthDate);
const elemento = calcularElemento(birthDate);
const recomendacoes = gerarRecomendacoes(elemento);
const animal = animais[index];
