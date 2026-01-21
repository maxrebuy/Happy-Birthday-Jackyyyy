/* Birthday Quiz – jede Antwort ist "richtig"
   - 10 Fragen
   - Am Ende: 2 PDF-Gutscheine als Download
*/

const QUIZ_DATA = {
  meta: {
    title: "Happy Birthday, Jacky! 🎉🎉🎉",
    landingText: "Ich hab dir ein kleines Quiz gebaut. (Keine Sorge... du kannst nicht verlieren 😉🎁",
  },

  gift: {
    title: "Deine Gutscheine",
    type: "PDF",
    description: "Okay Jacky — du bist durch. Hier kommen die Gutscheine als Download:",
    extraHtml: `Kleiner Hinweis: Wenn dein Handy beim Download zickt, öffne die Seite einmal im Browser (Chrome) und lade dann runter Hoffe er macht dir spaß und du nutzt ihn so richtig aus 😈`,
    pdfs: [
      {
        label: "Gutschein 1",
        note: "PDF herunterladen",
        href: "assets/gifts/gutschein_1.pdf",
        filename: "Jacky_Gutschein_1.pdf"
      },
      {
        label: "Gutschein 2",
        note: "PDF herunterladen",
        href: "assets/gifts/gutschein_2.pdf",
        filename: "Jacky_Gutschein_2.pdf"
      }
    ]
  },

  chapters: [
    {
      name: "Kapitel 1: Warm-up",
      questions: [
        {
          id: "q1",
          text: "Jacky, welcher Mood passt heute am besten?",
          options: [
            { label: "Energie", sub: "Ich könnte Bäume ausreißen (Und danach wieder einpflanzen)" },
            { label: "Entspannt", sub: "Heute is alles egal. Füße hoch und Kopf aus" },
            { label: "Chaos?", sub: "Wie immer halt — nur heute besser :P" },
            { label: "Snacky Day", sub: "Heute wird gefuttert, wie die fetten Katzen vom Max" }
          ],
          reaction: "Genau das habe ich mir gedacht. Machen wir weiter🎉"
        },
        {
          id: "q2",
          text: "Wähle dein Geburtstags-Upgrade. Was wünscht du dir am meisten?:",
          options: [
            { label: "Mehr Zeit", sub: "Zum lesen, zum malen, zum lernen und vieles mehr" },
            { label: "Mehr Mut", sub: "Don´t think, just do it!!!" },
            { label: "Mehr Glück", sub: "Wäre ja auch mal Zeit, nicht?" }
          ],
          reaction: "Dachte ich mir. Und bekommst du auch!"
        },
        {
          id: "q3",
          text: "Spontanplan: Was klingt am besten?",
          options: [
            { label: "Kino", sub: "Klassiker. Immer gut." },
            { label: "Kino mit Snacks", sub: "Und zwar mit richtig viel Nachos und VKäse Soße🤤" },
            { label: "Kino mit Snacks und Daniel", sub: "Date Night.... MIT NACHOOOOOOOOOOOS!!!!" },
            { label: "Kino mit Snacks, Daniel und Family/Friends", sub: "Mit den üblichen Verdächtigen und dem üblichen ... NAAAAAAAAAAAAAACHHOOOOOOOOOOSSS!!!!😫😫😫" }
          ],
          reaction: "Einmal mit Nachos bitte 🥺👉👈"
        }
      ]
    },
    {
      name: "Kapitel 2: Vibes",
      questions: [
        {
          id: "q4",
          text: "Welche Superkraft würde dir am meisten stehen?",
          options: [
            { label: "Zeit anhalten (nur für Snacks)", sub: "Natürlich für die Gains😉" },
            { label: "Teleportation zur Couch", sub: "Rückzug zum Safespace? Kommt sofort!" },
            { label: "Gedanken lesen, aber nur Peinliches", sub: "Spicy stuff included🥵" },
            { label: "Unsichtbarkeit bei Smalltalk", sub: "😶‍🌫️" }
          ],
          reaction: "War ja auch irgendwie klar, oder? 😆"
        },
        {
          id: "q5",
          text: "Welche Kleinigkeit macht einen Tag sofort besser?",
          options: [
            { label: "Gute Musik", sub: "Rock n Rooooooolllll🤘" },
            { label: "Ein ehrliches Kompliment", sub: "Say no more, du Schönheit🥰" },
            { label: "Süßes", sub: "Schmeckis für die Seele? GIB HER!!!" },
            { label: "Deeptalk mit den Besten", sub: "Ich (Max) bin da selbstverständlich der beste *hust*😏" }
          ],
          reaction: "Für dieses Lebensjahr, solltest du mehr davon bekommen😁"
        },
        {
          id: "q6",
          text: "Wähle dein Motto für heute:",
          options: [
            { label: "Just fun, no Stress", sub: "Girls just wanna have fuhuuuuun" },
            { label: "Ich bin die Hauptfigur", sub: "Heute ist ja auch dein Tag!" },
            { label: "Entspannung natürlich. Was sonst?", sub: "Ohne Wenn und Aber!" }
          ],
          reaction: "Sollst du bekommen! Aber jetzt wird’s ernst: Finale kommt."
        }
      ]
    },
    {
      name: "Kapitel 3: Finale",
      questions: [
        {
          id: "q7",
          text: "Wie soll sich dein nächstes Jahr anfühlen?",
          options: [
            { label: "Leicht", sub: "Mehr Luft, weniger Druck." },
            { label: "Mutig", sub: "Mehr Entscheidungen für dich." },
            { label: "Wertvoll", sub: "Mehr Substanz, weniger Lärm." },
            { label: "Witzig", sub: "Mehr lachen, weniger grübeln." }
          ],
          reaction: "Genau das wünsche ich mir für dich ❤️"
        },
        {
          id: "q8",
          text: "Was darf dieses Jahr auf keinen Fall fehlen?",
          options: [
            { label: "Gute Menschen", sub: "Nur die richtigen um dich rum." },
            { label: "Ein paar Highlights", sub: "Mehr als im letzten? Sollst du haben😊" },
            { label: "Ruhe im Kopf", sub: "Weniger Overload." },
            { label: "Mehr Me-Time", sub: "Ohne schlechtes Gewissen. Du hast es verdient!" }
          ],
          reaction: "Daran können wir arbeiten😎 ... Weiter! Du bist gleich durch."
        },
        {
          id: "q9",
          text: "Letzte Kurve: Welche Belohnung klingt richtig?",
          options: [
            { label: "Ein schöner Film alleine oder mit Friends and Family", sub: "Kunst auf Leinwand vielleicht?" },
            { label: "Ein „einfach guter“ Abend", sub: "Ein guter film zum Abend geht immer" },
            { label: "Ein Klassiker", sub: "Kino geht immer, oder?" }
          ],
          reaction: "Schon eine Idee in welche Richtung es geht?"
        },
        {
          id: "q10",
          text: "Letzte Frage, Jacky: Bist du bereit für dein Geschenk?",
          options: [
            { label: "Ja.", sub: "Gib her." },
            { label: "Ja — aber dramatisch.", sub: "Ich will Spannung." },
            { label: "Ja, aber ich ahne was.", sub: "Ich kenn dich 😜" }
          ],
          reaction: "Krass! Du hast es geschafft. Ich hoffe es wird dir gefallen und du wirst einige schöne Abende damit haben. Ich wünsche dir alles liebe und unendlich viel Gesundheit und Glück zum Geburtstag. Hab dich lieb und genieße deinen Tag!!🥳🥳"
        }
      ]
    }
  ]
};

/* ---------- DOM ---------- */
const el = {
  miniStatus: document.getElementById("miniStatus"),

  landingTitle: document.getElementById("landingTitle"),
  landingText: document.getElementById("landingText"),
  btnStart: document.getElementById("btnStart"),
  btnAbout: document.getElementById("btnAbout"),
  aboutBox: document.getElementById("aboutBox"),

  screenLanding: document.getElementById("screen-landing"),
  screenQuiz: document.getElementById("screen-quiz"),
  screenReveal: document.getElementById("screen-reveal"),

  qCounter: document.getElementById("qCounter"),
  qChapter: document.getElementById("qChapter"),
  barFill: document.getElementById("barFill"),
  questionText: document.getElementById("questionText"),
  options: document.getElementById("options"),

  feedback: document.getElementById("feedback"),
  feedbackTitle: document.getElementById("feedbackTitle"),
  feedbackText: document.getElementById("feedbackText"),
  btnNext: document.getElementById("btnNext"),

  giftTitle: document.getElementById("giftTitle"),
  giftType: document.getElementById("giftType"),
  giftDesc: document.getElementById("giftDesc"),
  giftCodeWrap: document.getElementById("giftCodeWrap"),
  giftExtra: document.getElementById("giftExtra"),

  downloads: document.getElementById("downloads"),

  btnRestart: document.getElementById("btnRestart"),
  btnRecap: document.getElementById("btnRecap"),
  recapBox: document.getElementById("recapBox"),
};

const state = {
  flatQuestions: [],
  index: 0,
  answers: [], // {qid, question, choiceLabel, chapter}
  awaitingNext: false
};

/* ---------- Helpers ---------- */
function show(screen) {
  [el.screenLanding, el.screenQuiz, el.screenReveal].forEach(s => s.classList.remove("active"));
  screen.classList.add("active");
}

function buildFlatQuestions() {
  const out = [];
  QUIZ_DATA.chapters.forEach(ch => {
    ch.questions.forEach(q => out.push({ ...q, chapter: ch.name }));
  });
  return out;
}

function setMiniStatus(text) {
  el.miniStatus.textContent = text || "";
}

function percentDone() {
  const total = state.flatQuestions.length || 1;
  const done = Math.min(state.index, total);
  return Math.round((done / total) * 100);
}

function resetQuiz() {
  state.flatQuestions = buildFlatQuestions();
  state.index = 0;
  state.answers = [];
  state.awaitingNext = false;

  el.feedback.hidden = true;
  el.recapBox.hidden = true;
  setMiniStatus("");
}

function escapeHtml(str) {
  return String(str)
    .replaceAll("&","&amp;")
    .replaceAll("<","&lt;")
    .replaceAll(">","&gt;")
    .replaceAll('"',"&quot;")
    .replaceAll("'","&#039;");
}

function groupBy(arr, keyFn) {
  return arr.reduce((acc, item) => {
    const k = keyFn(item);
    acc[k] = acc[k] || [];
    acc[k].push(item);
    return acc;
  }, {});
}

/* ---------- Render ---------- */
function renderLanding() {
  el.landingTitle.textContent = QUIZ_DATA.meta.title || "Happy Birthday!";
  el.landingText.textContent = QUIZ_DATA.meta.landingText || "";
  show(el.screenLanding);
}

function renderQuestion() {
  const total = state.flatQuestions.length;
  const q = state.flatQuestions[state.index];

  if (!q) return renderReveal();

  el.feedback.hidden = true;
  el.options.innerHTML = "";
  el.questionText.textContent = q.text;
  el.qCounter.textContent = `Frage ${state.index + 1}/${total}`;
  el.qChapter.textContent = q.chapter;
  el.barFill.style.width = `${Math.min(100, percentDone())}%`;
  setMiniStatus("");

  q.options.forEach((opt, i) => {
    const btn = document.createElement("button");
    btn.className = "option";
    btn.type = "button";
    btn.setAttribute("role", "listitem");

    const label = document.createElement("div");
    label.className = "label";
    label.textContent = opt.label;

    const sub = document.createElement("div");
    sub.className = "sub";
    sub.textContent = opt.sub || "";

    btn.appendChild(label);
    btn.appendChild(sub);

    btn.addEventListener("click", () => onChoose(q, opt, i));
    el.options.appendChild(btn);
  });

  show(el.screenQuiz);
}

function onChoose(question, option) {
  if (state.awaitingNext) return;
  state.awaitingNext = true;

  state.answers.push({
    qid: question.id,
    question: question.text,
    choiceLabel: option.label,
    chapter: question.chapter
  });

  el.feedbackTitle.textContent = "Nice.";
  el.feedbackText.textContent = question.reaction || "Weiter so.";
  el.feedback.hidden = false;

  [...el.options.querySelectorAll("button.option")].forEach(b => (b.disabled = true));
  setMiniStatus("Antwort gespeichert.");
}

function nextQuestion() {
  if (!state.awaitingNext) return;
  state.index += 1;
  state.awaitingNext = false;
  el.barFill.style.width = `${Math.min(100, percentDone())}%`;
  renderQuestion();
}

function renderReveal() {
  el.barFill.style.width = `100%`;

  const gift = QUIZ_DATA.gift;
  el.giftTitle.textContent = gift.title || "Geschenk";
  el.giftType.textContent = gift.type || "PDF";
  el.giftDesc.textContent = gift.description || "";
  el.giftExtra.innerHTML = gift.extraHtml || "";

  // Code-Bereich verstecken (wir nutzen PDFs)
  if (el.giftCodeWrap) el.giftCodeWrap.style.display = "none";

  // PDFs rendern
  el.downloads.innerHTML = "";
  (gift.pdfs || []).forEach((p, idx) => {
    const row = document.createElement("div");
    row.className = "dl";

    const left = document.createElement("div");
    left.className = "dl-left";
    left.innerHTML = `
      <div class="dl-title">📄 ${escapeHtml(p.label || `Gutschein ${idx+1}`)}</div>
      <div class="dl-sub">${escapeHtml(p.note || "PDF herunterladen")}</div>
    `;

    const a = document.createElement("a");
    a.className = "btn primary";
    a.href = p.href;
    a.target = "_blank";
    a.rel = "noopener";
    a.textContent = "Download";
    if (p.filename) a.setAttribute("download", p.filename);

    row.appendChild(left);
    row.appendChild(a);
    el.downloads.appendChild(row);
  });

  setMiniStatus("Fertig.");
  show(el.screenReveal);
}

function toggleRecap() {
  const isHidden = el.recapBox.hidden;
  if (!isHidden) {
    el.recapBox.hidden = true;
    return;
  }
  el.recapBox.hidden = false;

  if (state.answers.length === 0) {
    el.recapBox.textContent = "Keine Antworten gespeichert.";
    return;
  }

  const grouped = groupBy(state.answers, a => a.chapter);
  const lines = [];

  Object.keys(grouped).forEach(ch => {
    lines.push(`<div style="margin:10px 0 6px;"><strong>${escapeHtml(ch)}</strong></div>`);
    grouped[ch].forEach(a => {
      lines.push(`<div style="margin:6px 0;">
        <span style="opacity:.95;">• ${escapeHtml(a.question)}</span><br>
        <span style="opacity:.85;">→ ${escapeHtml(a.choiceLabel)}</span>
      </div>`);
    });
  });

  el.recapBox.innerHTML = lines.join("");
}

/* ---------- Events ---------- */
el.btnAbout.addEventListener("click", () => {
  el.aboutBox.hidden = !el.aboutBox.hidden;
});

el.btnStart.addEventListener("click", () => {
  resetQuiz();
  renderQuestion();
});

el.btnNext.addEventListener("click", nextQuestion);

el.btnRestart.addEventListener("click", () => {
  resetQuiz();
  renderLanding();
});

el.btnRecap.addEventListener("click", toggleRecap);

/* ---------- Init ---------- */
renderLanding();
