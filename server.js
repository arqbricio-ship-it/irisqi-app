import express from "express";
import cors from "cors";
import OpenAI from "openai";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";


dotenv.config();


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const app = express();
app.use(cors());
app.use(express.json({ limit: "15mb" }));
app.use(express.static(path.join(__dirname, "public")));


const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });


app.post("/api/iris-analyze", async (req, res) => {
try {
const { imageBase64 } = req.body;
if (!imageBase64) return res.status(400).json({ error: "Nenhuma imagem enviada." });


const response = await client.responses.parse({
model: "gpt-4.1",
input: [
{
role: "user",
content: [
{ type: "text", text: "Analise esta íris humana e retorne informações estruturadas sobre saúde potencial, padrões, textura e observações relevantes para iridologia." },
{ type: "input_image", image_url: imageBase64 }
]
}
]
});


return res.json(response.output_parsed || response);
} catch (err) {
console.error(err);
res.status(500).json({ error: "Erro ao processar imagem." });
}
});


app.get("*", (req, res) => {
res.sendFile(path.join(__dirname, "public", "index.html"));
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`IRIS QI rodando em http://localhost:${PORT}`));
