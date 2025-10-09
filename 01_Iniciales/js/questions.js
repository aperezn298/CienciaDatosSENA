/* ========= BANCO DE PREGUNTAS (EDITABLE/AMPLIABLE) =========
           Campos:
           - t: enunciado
           - type: "mc" (múltiple opción) o "tf" (verdadero/falso)
           - opts: opciones (en tf usar ["Verdadero","Falso"])
           - ans: índice correcto (0..n-1)
           - tag: "BigData" | "ML" | "Estadística" | "Ética" | "Python"
        */
const QUESTION_BANK = [
    // BigData
    { t: "Las '5V' del Big Data incluyen Volumen, Velocidad, Variedad, Veracidad y Valor.", type: "tf", opts: ["Verdadero", "Falso"], ans: 0, tag: "BigData" },
    { t: "¿Qué paso suele ocurrir primero en un pipeline de datos?", type: "mc", opts: ["Entrenamiento del modelo", "Limpieza y transformación", "Visualización", "Despliegue"], ans: 1, tag: "BigData" },
    { t: "¿Qué componente NO es típico en una arquitectura de Big Data?", type: "mc", opts: ["Ingesta", "Almacenamiento", "Orquestación", "Compilación de C++"], ans: 3, tag: "BigData" },
    { t: "'Streaming' de datos se relaciona principalmente con la V de Velocidad.", type: "tf", opts: ["Verdadero", "Falso"], ans: 0, tag: "BigData" },
    { t: "Un Data Lake se caracteriza por almacenar datos en su forma nativa (raw).", type: "tf", opts: ["Verdadero", "Falso"], ans: 0, tag: "BigData" },

    // ML
    { t: "¿Cuál de estas tareas es propia del aprendizaje NO supervisado?", type: "mc", opts: ["Regresión", "Clustering", "Clasificación binaria", "Series de tiempo"], ans: 1, tag: "ML" },
    { t: "KNN y SVM son ejemplos de algoritmos de aprendizaje no supervisado.", type: "tf", opts: ["Verdadero", "Falso"], ans: 1, tag: "ML" },
    { t: "El conjunto de 'test' debe usarse para ajustar hiperparámetros.", type: "tf", opts: ["Verdadero", "Falso"], ans: 1, tag: "ML" },
    { t: "Una métrica prioritaria para evitar falsos negativos en salud es:", type: "mc", opts: ["Precisión", "Sensibilidad (Recall)", "MAE", "Especificidad"], ans: 1, tag: "ML" },
    { t: "En validación cruzada k-fold, k representa:", type: "mc", opts: ["Cantidad de variables", "Número de subconjuntos", "Número de clases", "Cantidad de outliers"], ans: 1, tag: "ML" },

    // Estadística
    { t: "La mediana es más robusta ante outliers que la media.", type: "tf", opts: ["Verdadero", "Falso"], ans: 0, tag: "Estadística" },
    { t: "¿Cuál mediría mejor el error medio en regresión?", type: "mc", opts: ["AUC", "MAE", "Accuracy", "F1"], ans: 1, tag: "Estadística" },
    { t: "El muestreo estratificado busca representar subgrupos relevantes.", type: "tf", opts: ["Verdadero", "Falso"], ans: 0, tag: "Estadística" },
    { t: "Una distribución normal tiene media≈mediana≈moda.", type: "tf", opts: ["Verdadero", "Falso"], ans: 0, tag: "Estadística" },

    // Ética
    { t: "El consentimiento informado y la minimización de datos son buenas prácticas de gobernanza.", type: "tf", opts: ["Verdadero", "Falso"], ans: 0, tag: "Ética" },
    { t: "Eliminar variables sensibles siempre evita sesgos en modelos.", type: "tf", opts: ["Verdadero", "Falso"], ans: 1, tag: "Ética" },
    { t: "Explicabilidad y trazabilidad contribuyen a la responsabilidad algorítmica.", type: "tf", opts: ["Verdadero", "Falso"], ans: 0, tag: "Ética" },
    { t: "Usar datos personales sin base legal es aceptable si mejora el rendimiento del modelo.", type: "tf", opts: ["Verdadero", "Falso"], ans: 1, tag: "Ética" },

    // Python (Fundamentos)
    { t: "En Python, ¿qué imprime 'type(3.0)'?", type: "mc", opts: ["class 'int'", "class 'float'", "class 'double'", "class 'number'"], ans: 1, tag: "Python" },
    { t: "¿Cuál es una estructura de datos inmutable en Python?", type: "mc", opts: ["list", "tuple", "dict", "set"], ans: 1, tag: "Python" },
    { t: "El operador '//' realiza división entera (floor division).", type: "tf", opts: ["Verdadero", "Falso"], ans: 0, tag: "Python" },
    { t: "¿Qué imprime el código: 'print(len({1,1,2,2,3}))'?", type: "mc", opts: ["5", "3", "4", "Error"], ans: 1, tag: "Python" },
    { t: "¿Qué palabra clave define una función en Python?", type: "mc", opts: ["fun", "function", "def", "lambda"], ans: 2, tag: "Python" },
    { t: "'if', 'elif' y 'else' son estructuras de control condicional.", type: "tf", opts: ["Verdadero", "Falso"], ans: 0, tag: "Python" },
    { t: "En Python, 'dict' almacena pares clave:valor y no permite claves duplicadas.", type: "tf", opts: ["Verdadero", "Falso"], ans: 0, tag: "Python" },
    { t: "¿Qué hace 'list(range(2,7))'?", type: "mc", opts: ["[2,3,4,5,6]", "[2,3,4,5,6,7]", "[3,4,5,6,7]", "[2,7]"], ans: 0, tag: "Python" },

    // Pensamiento Computacional (opcional)
    { t: "¿Cuál NO es un paradigma de programación?", type: "mc", opts: ["Imperativo", "Declarativo", "Orientado a objetos", "Relacional"], ans: 3, tag: "PC" },
    { t: "La recursión es una técnica donde una función se llama a sí misma.", type: "tf", opts: ["Verdadero", "Falso"], ans: 0, tag: "PC" },
    { t: "¿Qué estructura de datos usa LIFO (Last In First Out)?", type: "mc", opts: ["Cola (Queue)", "Pila (Stack)", "Lista enlazada", "Árbol"], ans: 1, tag: "PC" },
    { t: "La búsqueda binaria requiere que los datos estén ordenados.", type: "tf", opts: ["Verdadero", "Falso"], ans: 0, tag: "PC" },
    { t: "¿Qué técnica mejora la eficiencia de algoritmos de búsqueda?", type: "mc", opts: ["Indexación", "Hashing", "Compresión", "Paralelización"], ans: 1, tag: "PC" },

];

// ===== CONFIGURACIÓN =====
const QUIZ_LEN = 20;            // 20 preguntas (puedes subirlo si deseas)
const TIME_LIMIT_SEC = 20 * 60;   // 20 minutos

// ===== ESTADO =====
let state = {
    nombre: "",
    order: [],
    current: 0,
    answers: [],
    startTime: 0,
    timeLeft: TIME_LIMIT_SEC,
    timerId: null,
};

// ===== UTIL =====
const $ = sel => document.querySelector(sel);
const $$ = sel => document.querySelectorAll(sel);
const shuffle = a => a.map(v => [Math.random(), v]).sort((x, y) => x[0] - y[0]).map(x => x[1]);
const pad2 = n => String(n).padStart(2, "0");
const fmtTime = s => `${pad2(Math.floor(s / 60))}:${pad2(s % 60)}`;
const toast = (msg) => { const t = $("#toast"); t.textContent = msg; t.classList.remove("hidden"); setTimeout(() => t.classList.add("hidden"), 2200); };
const formatDate = (d) => {
    // Fecha local legible: DD/MM/YYYY HH:MM
    const dt = new Date(d);
    const dd = pad2(dt.getDate()), mm = pad2(dt.getMonth() + 1), yyyy = dt.getFullYear();
    const hh = pad2(dt.getHours()), mi = pad2(dt.getMinutes());
    return `${dd}/${mm}/${yyyy} ${hh}:${mi}`;
};

// ===== PANTALLAS =====
function show(id) {
    ["#screen-start", "#screen-quiz", "#screen-result"].forEach(sel => $(sel).classList.add("hidden"));
    $(id).classList.remove("hidden");
}

function startQuiz(demo = false) {
    const nombre = $("#nombre").value.trim();
    if (!nombre) { toast("Por favor ingresa tu nombre."); return; }
    state.nombre = nombre;
    state.order = shuffle([...Array(QUESTION_BANK.length).keys()]).slice(0, QUIZ_LEN);
    state.current = 0;
    state.answers = Array(QUIZ_LEN).fill(null);
    state.startTime = Date.now();
    state.timeLeft = TIME_LIMIT_SEC;
    $("#labTotal").textContent = QUIZ_LEN;
    $("#labNombre").textContent = state.nombre;
    $("#labTime").textContent = fmtTime(state.timeLeft);
    show("#screen-quiz");
    renderQuestion();
    updateProgress();
    if (state.timerId) clearInterval(state.timerId);
    state.timerId = setInterval(tick, 1000);
    if (demo) {
        state.answers = state.answers.map((_, i) => {
            const q = QUESTION_BANK[state.order[i]];
            return Math.floor(Math.random() * q.opts.length);
        });
        renderQuestion();
    }
}

function renderQuestion() {
    const idx = state.order[state.current];
    const q = QUESTION_BANK[idx];
    $("#labN").textContent = state.current + 1;
    const qbox = $("#qbox");
    qbox.innerHTML = `
    <div class="q">
      <h3>${q.t}</h3>
      <div class="grid">
        ${q.opts.map((opt, i) => `
          <label class="opt">
            <input type="radio" name="ans" value="${i}" ${state.answers[state.current] === i ? "checked" : ""}/>
            <div>${opt}</div>
          </label>
        `).join("")}
      </div>
      <div class="muted" style="margin-top:10px">
        Tema: <span class="badge">${q.tag}</span> · Tipo: <span class="badge">${q.type.toUpperCase()}</span>
      </div>
    </div>
  `;
    $$("#qbox .opt input").forEach(r => r.addEventListener("change", e => {
        state.answers[state.current] = Number(e.target.value);
        updateProgress();
    }));
}

function updateProgress() {
    const answered = state.answers.filter(a => a !== null).length;
    const pct = Math.round(answered / QUIZ_LEN * 100);
    $("#prog").style.width = pct + "%";
}

function tick() {
    state.timeLeft--;
    $("#labTime").textContent = fmtTime(Math.max(0, state.timeLeft));
    if (state.timeLeft <= 0) { finish(); }
}

function prev() { if (state.current > 0) { state.current--; renderQuestion(); } }
function next() { if (state.current < QUIZ_LEN - 1) { state.current++; renderQuestion(); } }

function finish() {
    if (state.timerId) clearInterval(state.timerId);
    const finishTime = new Date();
    // Calcular resultados
    const used = TIME_LIMIT_SEC - Math.max(0, state.timeLeft);
    const detail = [];
    let correct = 0;
    const byTag = {};
    state.order.forEach((qIdx, i) => {
        const q = QUESTION_BANK[qIdx];
        const ok = state.answers[i] === q.ans;
        if (ok) correct++;
        if (!byTag[q.tag]) byTag[q.tag] = { total: 0, ok: 0 };
        byTag[q.tag].total++; if (ok) byTag[q.tag].ok++;
        detail.push({
            n: i + 1, tag: q.tag, type: q.type,
            question: q.t, chosen: state.answers[i],
            chosenText: state.answers[i] != null ? q.opts[state.answers[i]] : null,
            correct: q.ans, correctText: q.opts[q.ans], isCorrect: ok
        });
    });
    const acc = Math.round((correct / QUIZ_LEN) * 100);

    // Render
    $("#resNombre").textContent = state.nombre;
    $("#resFecha").textContent = formatDate(finishTime);
    $("#labScore").textContent = `${correct}/${QUIZ_LEN}`;
    $("#labUsed").textContent = fmtTime(used);
    $("#labAcc").textContent = `${acc}%`;
    $("#labMsg").textContent = acc >= 80 ? "¡Excelente base para empezar!"
        : acc >= 60 ? "Buen punto de partida. Hay conceptos por reforzar."
            : "Será clave reforzar conceptos base en los primeros módulos.";
    const feed = [];
    Object.entries(byTag).forEach(([tag, v]) => {
        const p = Math.round((v.ok / v.total) * 100);
        feed.push(`${tag}: ${v.ok}/${v.total} (${p}%)`);
    });
    $("#breakdown").innerHTML = feed.map(f => `<div>• ${f}</div>`).join("");

    const ansHtml = detail.map(d => `
    <div style="margin-bottom:10px">
      <div><strong>P${d.n} — ${d.tag}</strong></div>
      <div class="${d.isCorrect ? '' : 'muted'}">${d.question}</div>
      <div>Tu respuesta: <strong>${d.chosenText ?? '—'}</strong></div>
      <div>Correcta: <strong>${d.correctText}</strong> ${d.isCorrect ? '<span style="color:var(--ok)">✓</span>' : '<span style="color:var(--bad)">✗</span>'}</div>
    </div>
  `).join("");
    $("#answers").innerHTML = ansHtml;

    // Guardar en memoria para descarga
    window.__RESULT__ = {
        nombre: state.nombre,
        fecha_local: formatDate(finishTime),
        timestamp_iso: finishTime.toISOString(),
        tiempo_uso_seg: used,
        total: QUIZ_LEN,
        correctas: correct,
        exactitud_pct: acc,
        desglose_tema: Object.fromEntries(Object.entries(byTag).map(([k, v]) => [k, { correctas: v.ok, total: v.total, exactitud_pct: Math.round(v.ok / v.total * 100) }])),
        respuestas: detail
    };

    show("#screen-result");
}

// ===== EVENTOS =====
$("#btnStart").addEventListener("click", () => startQuiz(false));
$("#btnDemo").addEventListener("click", () => startQuiz(true));
$("#btnPrev").addEventListener("click", prev);
$("#btnNext").addEventListener("click", next);
$("#btnFinish").addEventListener("click", finish);
$("#btnRetry").addEventListener("click", () => { show("#screen-start"); toast("Reiniciado."); });
$("#btnDownload").addEventListener("click", () => {
    if (!window.__RESULT__) { toast("Aún no hay resultados."); return; }
    const blob = new Blob([JSON.stringify(window.__RESULT__, null, 2)], { type: "application/json" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    const nombreSeguro = (state.nombre || "aprendiz").replace(/[^\p{L}\p{N}_-]+/gu, "_");
    a.download = `resultados_${nombreSeguro}.json`;
    document.body.appendChild(a); a.click(); a.remove();
    toast("Resultados descargados.");
});