// Hulpfuncties voor retraites: controleren, sorteren en de status als tekst.
// Dit bestand gebruikt Eleventy niet zelf, zodat je het los kunt testen.
// Gebruikt in eleventy.config.js.

// Toegestane waarden. Pas je hier iets aan, zet dan ook de uitleg in de
// retraitebestanden (src/retraites/*.md) en in de README bij.
export const FORMATEN = ["dag", "weekend", "meerdaags"];

export const STATUSSEN = {
  "vrij": "Plekken vrij",
  "bijna-vol": "Bijna vol",
  "vol": "Vol",
  "wachtlijst": "Wachtlijst",
};

// Velden die elke retraite moet hebben. "locatie.naam" betekent: het veld
// "naam" onder "locatie".
const VERPLICHT = [
  "titel",
  "samenvatting",
  "formaat",
  "start",
  "eind",
  "bevestigd",
  "locatie.naam",
  "locatie.plaats",
  "prijs.bedrag",
  "status",
];

// Haalt een (geneste) waarde op, bijv. waarde(data, "locatie.naam").
function waarde(data, pad) {
  return pad.split(".").reduce((obj, sleutel) => (obj == null ? undefined : obj[sleutel]), data);
}

function isLeeg(w) {
  return w === undefined || w === null || (typeof w === "string" && w.trim() === "");
}

// Maakt van een datum uit het bestand een echte datum (of null als dat niet lukt).
export function naarDatum(w) {
  if (w instanceof Date) return isNaN(w) ? null : w;
  if (typeof w === "string" && /^\d{4}-\d{2}-\d{2}$/.test(w.trim())) {
    const d = new Date(w.trim() + "T00:00:00Z");
    return isNaN(d) ? null : d;
  }
  return null;
}

// Controleert één retraite. Geeft een lijst met fouten terug, in gewone taal.
// "bestand" is de naam van het bestand, voor in de melding.
// "persoonCodes" zijn de codes uit src/_data/personen.yaml.
export function controleerRetraite(data, bestand, persoonCodes) {
  const fouten = [];

  for (const veld of VERPLICHT) {
    if (isLeeg(waarde(data, veld))) {
      fouten.push(`het veld "${veld}" ontbreekt of is leeg`);
    }
  }

  if (!isLeeg(data.formaat) && !FORMATEN.includes(data.formaat)) {
    fouten.push(`"formaat" is "${data.formaat}", maar moet een van deze zijn: ${FORMATEN.join(", ")}`);
  }

  if (!isLeeg(data.status) && !(data.status in STATUSSEN)) {
    fouten.push(`"status" is "${data.status}", maar moet een van deze zijn: ${Object.keys(STATUSSEN).join(", ")}`);
  }

  if (!isLeeg(data.bevestigd) && typeof data.bevestigd !== "boolean") {
    fouten.push(`"bevestigd" moet true of false zijn (zonder aanhalingstekens)`);
  }

  const start = naarDatum(data.start);
  const eind = naarDatum(data.eind);
  if (!isLeeg(data.start) && !start) fouten.push(`"start" is geen geldige datum; schrijf hem als 2027-04-25`);
  if (!isLeeg(data.eind) && !eind) fouten.push(`"eind" is geen geldige datum; schrijf hem als 2027-04-29`);
  if (start && eind && eind < start) fouten.push(`"eind" ligt vóór "start"`);

  const bedrag = waarde(data, "prijs.bedrag");
  if (!isLeeg(bedrag) && typeof bedrag !== "number") {
    fouten.push(`"prijs.bedrag" moet een getal zijn, bijv. 495 (zonder € en zonder aanhalingstekens)`);
  }

  for (const code of data.begeleiders || []) {
    if (!persoonCodes.includes(code)) {
      fouten.push(`begeleider "${code}" staat niet in src/_data/personen.yaml (bekende codes: ${persoonCodes.join(", ") || "geen"})`);
    }
  }

  return fouten.map((f) => `${bestand}: ${f}`);
}

// Sorteert retraites op startdatum, de vroegste eerst.
export function sorteerOpStart(retraites) {
  return [...retraites].sort((a, b) => naarDatum(a.data.start) - naarDatum(b.data.start));
}

// Retraites die vandaag of later beginnen. "vandaag" is de datum van het bouwen.
export function komende(retraites, vandaag = new Date()) {
  const begin = new Date(Date.UTC(vandaag.getUTCFullYear(), vandaag.getUTCMonth(), vandaag.getUTCDate()));
  return sorteerOpStart(retraites).filter((r) => naarDatum(r.data.start) >= begin);
}

// ------------------------------------------------------------------
// Weergave: datums in het Nederlands en groeperen per maand.
// Datums worden in UTC gelezen, zodat er nooit een dag verschuift.
// ------------------------------------------------------------------
const MAANDEN = ["januari", "februari", "maart", "april", "mei", "juni",
  "juli", "augustus", "september", "oktober", "november", "december"];

// "25 – 29 april 2027", "30 april – 2 mei 2027", "28 december 2026 – 3 januari 2027"
// of bij één dag: "25 april 2027".
export function datumBereik(start, eind) {
  const s = naarDatum(start);
  const e = naarDatum(eind) || s;
  if (!s) return "";
  const dag = (d) => d.getUTCDate();
  const maand = (d) => MAANDEN[d.getUTCMonth()];
  const jaar = (d) => d.getUTCFullYear();

  if (s.getTime() === e.getTime()) return `${dag(s)} ${maand(s)} ${jaar(s)}`;
  if (jaar(s) !== jaar(e)) return `${dag(s)} ${maand(s)} ${jaar(s)} – ${dag(e)} ${maand(e)} ${jaar(e)}`;
  if (maand(s) !== maand(e)) return `${dag(s)} ${maand(s)} – ${dag(e)} ${maand(e)} ${jaar(e)}`;
  return `${dag(s)} – ${dag(e)} ${maand(s)} ${jaar(s)}`;
}

// Datum als 2027-04-25, voor het datetime-attribuut van <time>.
export function isoDatum(w) {
  const d = naarDatum(w);
  return d ? d.toISOString().slice(0, 10) : "";
}

// Groepeert retraites per maand van de startdatum, in de volgorde waarin ze
// binnenkomen. Geeft [{ kop: "April 2027", retraites: [...] }, ...].
export function perMaand(retraites) {
  const groepen = [];
  for (const r of retraites) {
    const d = naarDatum(r.data.start);
    const naam = MAANDEN[d.getUTCMonth()];
    const kop = naam.charAt(0).toUpperCase() + naam.slice(1) + " " + d.getUTCFullYear();
    const laatste = groepen[groepen.length - 1];
    if (laatste && laatste.kop === kop) laatste.retraites.push(r);
    else groepen.push({ kop, retraites: [r] });
  }
  return groepen;
}

// Prijs als "€ 495" of "€ 1.250" (Nederlandse notatie, zonder centen als die 0 zijn).
export function prijsTekst(bedrag) {
  if (typeof bedrag !== "number") return "";
  const heel = Number.isInteger(bedrag);
  const tekst = bedrag.toLocaleString("nl-NL", {
    minimumFractionDigits: heel ? 0 : 2,
    maximumFractionDigits: 2,
  });
  return `€ ${tekst}`;
}
