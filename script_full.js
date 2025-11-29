// ============================
// PREVIEW DA IMAGEM
// ============================
const irisInput = document.getElementById("irisInput");
const preview = document.getElementById("preview");

irisInput.addEventListener("change", (event) => {
    const file = event.target.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = (e) => {
        preview.src = e.target.result;
        preview.style.display = "block";
    };
    reader.readAsDataURL(file);
});

// ============================
// BOTÃO PRINCIPAL
// ============================
document.getElementById("analyzeBtn").addEventListener("click", gerarRelatorio);

// ============================
// FUNÇÃO PRINCIPAL
// ============================
function gerarRelatorio() {

    const birthDate = document.getElementById("birthInput").value;
    const comorb = document.getElementById("comorb").value;
    const emotions = document.getElementById("emotions").value;
    const habits = document.getElementById("habits").value;

    // Simulação de IA: análise da íris
    const irisAnalysis = analisarIrisFake();

    // Horóscopo chinês
    const zodiac = calcularZodiacoChines(birthDate);

    // Elemento dos 5 elementos
    const elemento = calcularElemento(birthDate);

    // Recomendações de MTC
    const recomendacoes = gerarRecomendacoes(elemento);

    // Mensagem filosófica curta
    const frase = gerarFraseChinesa();

    // Exibir no relatório
    document.getElementById("irisAnalysis").innerText = irisAnalysis;
    document.getElementById("horoscope").innerText = zodiac;
    document.getElementById("elements").innerText = elemento;
    document.getElementById("recommendations").innerText = recomendacoes;
    document.getElementById("quote").innerText = frase;

    document.getElementById("result").classList.remove("hidden");
}

// ============================
// ANÁLISE FAKE (SUBSTITUIR QUANDO TIVER IA)
// ============================
function analisarIrisFake() {
    return "A íris apresenta padrões de brilho e contrações sutis indicando desequilíbrios leves nos meridianos associados ao Fígado e Baço-Pâncreas, típicos de estagnação de energia e variações emocionais internas. Recomenda-se atenção ao descanso e equilíbrio do Qi.";
}

// ============================
// HORÓSCOPO CHINÊS
// ============================
function calcularZodiacoChines(dateString) {
    if (!dateString) return "Data inválida.";

    const year = new Date(dateString).getFullYear();
    const animais = [
        "Macaco","Galo","Cão","Porco",
        "Rato","Boi","Tigre","Coelho",
        "Dragão","Serpente","Cavalo","Cabra"
    ];

    const caracteristicas = {
        "Rato": "Inteligente, adaptável e observador.",
        "Boi": "Constante, forte e disciplinado.",
        "Tigre": "Corajoso, intenso e protetor.",
        "Coelho": "Harmonioso, gentil e criativo.",
        "Dragão": "Líder nato, energético e visionário.",
        "Serpente": "Analítico, profundo e intuitivo.",
        "Cavalo": "Livre, veloz e emocional.",
        "Cabra": "Sensível, artística e calma.",
        "Macaco": "Inventivo, esperto e brincalhão.",
        "Galo": "Prático, direto e trabalhador.",
        "Cão": "Leal, honesto e cuidadoso.",
        "Porco": "Generoso, paciente e tranquilo."
    };

    const index = (year - 1900) % 12;
    const animal = animais[index];

    return `${animal} — ${caracteristicas[animal]}`;
}

// ============================
// ELEMENTO (CINCO ELEMENTOS)
// ============================
function calcularElemento(dateString) {
    if (!dateString) return "Elemento não identificado.";

    const year = new Date(dateString).getFullYear();

    const elementos = ["Madeira", "Fogo", "Terra", "Metal", "Água"];
    const elemento = elementos[Math.floor(((year - 4) % 10) / 2)];

    return `${elemento}`;
}

// ============================
// RECOMENDAÇÕES MTC
// ============================
function gerarRecomendacoes(elemento) {
    const base = {
        "Madeira": "Chás de hortelã e camomila; movimentos de alongamento; respiração profunda.",
        "Fogo": "Chá de jasmim; evitar excesso de calor; meditação calmante.",
        "Terra": "Chá de gengibre; massagens Tui Na no abdômen; alimentação morna.",
        "Metal": "Chá de eucalipto; exercícios respiratórios; caminhadas longas.",
        "Água": "Chás escuros; descanso profundo; práticas suaves como Tai Chi."
    };
    return base[elemento] || "Equilíbrio geral recomendado.";
}

// ============================
// FRASES DE FILÓSOFOS CHINESES
// ============================
function gerarFraseChinesa() {
    const frases = [
        "“A paz chega quando a mente se acalma.” — Laozi",
        "“Quem domina os outros é forte; quem domina a si mesmo é poderoso.” — Laozi",
        "“O homem que move montanhas começa carregando pequenas pedras.” — Confúcio",
        "“O sábio adapta-se às mudanças.” — Sun Tzu",
        "“Conhecer a si mesmo é a verdadeira sabedoria.” — Laozi",
        "“A simplicidade é o último grau de sofisticação.” — Confúcio",
        "“A vitória é alcançada antes da batalha.” — Sun Tzu"
    ];
    return frases[Math.floor(Math.random() * frases.length)];
}
