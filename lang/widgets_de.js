window.WIDGETS_DE = {
  bitflip: {
    passwordLabel: "Passwort",
    imageLabel: "Bild (128 × 128 Pixel)",
    flipButton: "Zufälliges Bit flippen",
    resetButton: "Zurücksetzen",
    bitsInfo: "{bits} Bits zur Darstellung · {changed} Bit{plural} geändert",
    passwordCorrect: "✓ Passwort korrekt",
    pixelChanged: "1 Pixel geändert – Bild noch erkennbar?",
    password: "M3inGeh3im!"
  },
  rle: {
    inputLabel: "Zeichenkette",
    loadExample: "Beispiel laden",
    originalSize: "Originalgröße",
    rleSize: "RLE-Größe",
    saving: "Ersparnis",
    tuples: "Tupel",
    chars: "Zeichen",
    savingNegative: "+{count} Zeichen ({pct}% mehr)",
    savingPositive: "−{count} Zeichen ({pct}%)",
    savingZero: "±0 Zeichen",
    default: "AAABBBCCDDDDDA"
  },
  rleText: {
    originalLabel: "Originaltext – Wiederholungsläufe hervorgehoben",
    tuplesLabel: "RLE-Tupel (Zeichen, Länge) – nur Läufe > 1 sind hervorgehoben",
    originalChars: "Originaltext: <strong>{count}</strong> Zeichen",
    rleChars: "RLE: <strong>{tuples}</strong> Tupel × 2 = <strong>{units}</strong> Zeichen",
    savingSmaller: "−{count} ({pct}% kleiner)",
    savingLarger: "+{count} ({pct}% größer)",
    moreTuples: "… +{count} weitere",
    sampleText:
      "Die Überwachung der Zielperson wurde am Donnerstag fortgesetzt. " +
      "Während der Überwachung der Zielperson wurden alle digitalen Daten erfasst. " +
      "Die Erfassung der Daten erfolgte ohne richterlichen Beschluss. " +
      "Da die Daten der Zielperson als streng geheim eingestuft sind, wurden die Daten direkt an die Zentrale übermittelt. " +
      "Eine Löschung der Daten der Überwachung ist nicht vorgesehen."
  },
  dict: {
    originalLabel: "Originaltext – aktuell verarbeitetes Wort hervorgehoben",
    dictTableLabel: "Wörterbuchtabelle",
    codeHeader: "Code",
    wordHeader: "Wort",
    compressedLabel: "Komprimierter Text",
    originalChars: "Originaltext: <strong id=\"dict-orig-len\">–</strong> Zeichen",
    compressedChars: "Komprimiert: <strong id=\"dict-comp-len\">–</strong> Zeichen",
    playStart: "▶ Start",
    playContinue: "▶ Fortfahren",
    playPause: "⏸ Pause",
    playDone: "✓ Fertig",
    stepButton: "Schritt vor",
    resetButton: "↺ Zurücksetzen",
    progress: "{current} / {total} Wörter",
    progressStart: "0 / {total} Wörter",
    noEntries: "noch keine Einträge",
    notCompressed: "noch nichts komprimiert",
    unusedRemoved: "{count} nicht genutzte Eintrage entfernt",
    savingSmaller: "−{count} ({pct}% kleiner)",
    savingLarger: "+{count} ({pct}% größer)",
    savingZero: "±0",
    sampleText:
      "Die Überwachung der Zielperson wurde am Donnerstag fortgesetzt. " +
      "Während der Überwachung der Zielperson wurden alle digitalen Daten erfasst. " +
      "Die Erfassung der Daten erfolgte ohne richterlichen Beschluss. " +
      "Da die Daten der Zielperson als streng geheim eingestuft sind, wurden die Daten direkt an die Zentrale übermittelt. " +
      "Eine Löschung der Daten der Überwachung ist nicht vorgesehen."
  },
  blockAvg: {
    brightnessLabel: "Helligkeitsstufen",
    colorLabel: "Farbgenauigkeit",
    blockSingle: "1×1 px",
    blockPlural: "{size}×{size} px Blöcke",
    loadError: "Bilddaten konnten nicht geladen werden."
  },
  blockSize: {
    loading: "Bild wird geladen …",
    blockSizeLabel: "Blockgröße",
    original: "Original",
    compressed: "Komprimiert",
    saving: "Ersparnis",
    savingBits: "Ersparnis in Bits: ",
    zeroBit: "0 Bit",
    bitUnit: " Bit",
    imageLoaded: "Bild: {width} × {height} Pixel",
    imageUnavailable: "Bilddaten nicht verfügbar",
    imageLoadError: "Bild konnte nicht geladen werden",
    savingPositive: "−{count} Bit ({pct}%)",
    savingNegative: "+{count} Bit ({pct}%)",
    savingZero: "±0 Bit",
    deltaLabel: "{count} Bit ({pct}%)"
  },
  efficiency: {
    submitButton: "Auswertung",
    resetButton: "↺ Zurücksetzen",
    optionRle: "RLE",
    optionDict: "Wörterbuch",
    optionNone: "Keines",
    selectAllFirst: "Bitte wähle für jede Datei ein Verfahren aus, bevor du die Auswertung startest.",
    summaryCorrect: "{correct} von {total} richtig",
    summaryAllCorrect: "✓ Alle Zuordnungen sind korrekt!",
    summaryWrongLine: "✗ {label}: <span style=\"font-weight:600\">{answer}</span> (richtig: <span style=\"font-weight:600\">{correct}</span>)",
    files: [
      {
        id: "report",
        label: "Langer unverschlüsselter Bericht",
        desc: "Ein mehrseitiger Fließtext (.txt), in dem Wörter wie \"die\", \"der\", \"Überwachung\" oder \"Zielperson\" immer wieder auftauchen.",
        correct: "dict",
        feedbackCorrect: "Richtig! Ein Fließtext enthält oft viele wiederkehrende Wörter, also genau die Stärke der Wörterbuchkompression.",
        feedbackWrong: "In einem Fließtext wiederholen sich nicht einzelne Zeichen, sondern ganze Wörter. Welches Verfahren kann solche wiederholten Wörter durch kurze Verweise ersetzen?"
      },
      {
        id: "encrypted",
        label: "Verschlüsseltes Dokument",
        desc: "Eine verschlüsselte Datei. Der Inhalt ist ohne Schlüssel nicht lesbar und erscheint als zufällige Bitfolge.",
        correct: "none",
        feedbackCorrect: "Richtig! Verschlüsselte Daten erscheinen wie Zufallsdaten. Darin lassen sich keinerlei Muster oder Wiederholungen finden, daher funktioniert weder RLE noch Wörterbuchkompression.",
        feedbackWrong: "Überlege: Wie sieht eine verschlüsselte Datei aus? Enthält sie überhaupt noch erkennbare Wiederholungen oder Muster, die ein Kompressionsverfahren ausnutzen könnte?"
      },
      {
        id: "table",
        label: "Tabelle mit Namen und Adressen",
        desc: "Eine CSV-Tabelle mit 50.000 Einträgen. Viele Personen teilen sich denselben Ort, dieselbe Straße, dieselbe Postleitzahl oder denselben Nachnamen.",
        correct: "dict",
        feedbackCorrect: "Richtig! In einer Tabelle mit Adressen wiederholen sich viele Werte (Ortsnamen, Straßen, Titel). Die Wörterbuchkompression kann diese Mehrfachnennungen durch kurze Codes ersetzen.",
        feedbackWrong: "In der Tabelle kommen viele identische Wörter mehrfach vor (gleiche Städte, gleiche Straßennamen). Welches Verfahren kann diese wiederholten Wörter durch kurze Verweise ersetzen?"
      },
      {
        id: "scan",
        label: "Schwarz-Weiß-Scan eines Dokuments",
        desc: "Ein eingescanntes Schriftstück in Schwarz-Weiß (z. B. ein handschriftlicher Brief als TIFF, also in einem Bildformat). Große weiße Flächen mit schwarzer Textspur.",
        correct: "rle",
        feedbackCorrect: "Richtig! Ein Schwarz-Weiß-Scan besteht aus vielen aufeinanderfolgenden Pixeln derselben Farbe, also ideale Voraussetzung für RLE.",
        feedbackWrong: "Ein Scan in Schwarz-Weiß hat viele lange Läufe identischer Pixel (weiße Flächen, schwarze Linien). Welches Verfahren nutzt genau solche Wiederholungen auf Pixelebene aus?"
      }
    ]
  },
  fileInspector: {
    txtFilename: "bericht.txt",
    txtSize: "144 Bytes",
    txtContent:
      "Sehr geehrte Damen und Herren,\n\n" +
      "hiermit möchten wir uns für die\n" +
      "gute Zusammenarbeit bedanken.\n\n" +
      "Mit freundlichen Grüßen\n" +
      "Ihr Muster-Team",
    docxFilename: "bericht.docx",
    docxSize: "~13,5 KB (13.460 Bytes)",
    contentTypesDesc: "Definitionen für Bilder, XML, Stylesheet usw.",
    relsDesc: "Beziehungsstrukturen zwischen Dateien",
    coreDesc: "Autor, Erstelldatum, Änderungsdatum",
    appDesc: "Anwendungsdetails (Word-Version, Seiten)",
    documentDesc: "Der formatierte Text (welcher dann in Word angezeigt wird)",
    stylesDesc: "Schriftarten und Layout"
  },
  zipArchive: {
    simulateButton: "Versand simulieren",
    simulateAgain: "Erneut simulieren",
    scenarioA: "Szenario A: Einzelversand",
    scenarioADesc: "10 Textdokumente einzeln übermitteln",
    scenarioB: "Szenario B: Archivversand",
    scenarioBDesc: "Alle Dokumente in einem Archiv gebündelt",
    archiveName: "beweise.zip",
    filesToSend: "Dateien zum Versand:",
    transfers: "Übertragungsvorgänge:",
    totalSize: "Gesamtgröße:",
    overheadGloss:
      "Beim Kopieren vieler kleiner Dateien muss das Betriebssystem für jede einzelne Datei extra Verwaltungsarbeit leisten, " +
      "wie zum Beispiel sie im Dateisystem suchen, öffnen und wieder schließen. Dieser Overhead summiert sich bei Hunderten oder Tausenden von Dateien. " +
      "Packt man sie vorher in ein ZIP-Archiv, fällt diese Arbeit beim Kopieren nur einmal für eine einzige Datei an, was deutlich schneller ist.",
    hint:
      "Hinweis: Die Gesamtgröße ist in beiden Szenarien fast gleich ({sizeHint}). Hier wird noch nicht komprimiert, sondern nur die Dateien in einen Container gebündelt.  " +
      "Der Unterschied beim Kopieren von Dateien ist, dass der {overhead} zum Kopieren einer neuen Datei bei Archiven nur einmal berechnet wird, während bei einzelnen Dateien der Overhead für jede Datei einzeln berechnet wird. Je mehr Dateien, desto bemerkbarer der Unterschied. " +
      "Für diese kleinen Dateien hier, wäre der Unterschied auf modernen Festplatten kaum beobachtbar, weshalb die Simulation hier eine stark verlangsamte Darstellung des Kopierens zeigt. Falls du viele große Dateien (in Summe >10 GB, bei einer SSD) hast, kannst du das auch auf deinem Rechner nachvollziehen, indem du die einzelnen Dateien auf einmal kopierst und das mit der Kopierdauer für das Archiv vergleichst.",
    files: [
      {
        name: "notiz_01.txt",
        text: "Zeuge: M. Keller, 14.03., ca. 22:15 Uhr\nBeobachtung: Zwei Personen verließen das Gebäude über den Hintereingang.\nHinweis: Kennzeichen nicht lesbar, Fahrzeug dunkelblau."
      },
      {
        name: "notiz_02.txt",
        text: "Zeuge: M. Keller, 14.03., ca. 22:15 Uhr\nBeobachtung: Kurz darauf folgte ein weiteres Fahrzeug in gleicher Richtung.\nHinweis: Kein direkter Kontakt zwischen den Personen erkennbar."
      },
      {
        name: "notiz_03.txt",
        text: "Zeuge: S. Brandt, 15.03., Vormittag\nBeobachtung: Mehrere Anrufe über Festnetz, Gespräche in gedämpftem Ton.\nHinweis: Inhalt der Gespräche nicht verständlich."
      },
      {
        name: "notiz_04.txt",
        text: "Zeuge: S. Brandt, 15.03., Vormittag\nBeobachtung: Kurz nach den Anrufen verließ eine Person das Haus mit Aktenmappe.\nHinweis: Richtung Bahnhof, zu Fuß."
      },
      {
        name: "notiz_05.txt",
        text: "Zeuge: L. Nguyen, 16.03., Nachmittag\nBeobachtung: Treffen an der Ecke Hauptstraße / Parkweg, zwei Personen.\nHinweis: Übergabe eines versiegelten Umschlags."
      },
      {
        name: "notiz_06.txt",
        text: "Zeuge: L. Nguyen, 16.03., Nachmittag\nBeobachtung: Treffen dauerte unter fünf Minuten, danach getrennte Wege.\nHinweis: Keine weiteren Personen in unmittelbarer Nähe."
      },
      {
        name: "notiz_07.txt",
        text: "Zeuge: R. Hoffmann, 17.03., Abend\nBeobachtung: Licht im oberen Stockwerk bis nach Mitternacht.\nHinweis: Schatten von mindestens zwei Personen am Fenster."
      },
      {
        name: "notiz_08.txt",
        text: "Zeuge: R. Hoffmann, 17.03., Abend\nBeobachtung: Gegen 01:10 Uhr verlässt ein Fahrzeug den Hof.\nHinweis: Kennzeichen teilweise verdeckt, nur Endziffern lesbar."
      },
      {
        name: "notiz_09.txt",
        text: "Zeuge: A. Peters, 18.03., früher Morgen\nBeobachtung: Abfallbehälter am Haus wurde geleert, unüblich früh.\nHinweis: Eine Person mit Handschuhen, Gesicht nicht erkennbar."
      },
      {
        name: "notiz_10.txt",
        text: "Zeuge: A. Peters, 18.03., früher Morgen\nBeobachtung: Kurz darauf Abfahrt eines Lieferwagens ohne Firmenlogo.\nHinweis: Fahrzeug fuhr in Richtung Autobahnauffahrt Süd."
      }
    ]
  },
  filesystem: {
    memoryCard: "Speicherkarte:",
    hint:
      "Hinweis: Falls du eine Dateiendung nicht kennst, google sie kurz. So findest du heraus, welches Format vorliegt und welche Eigenschaften es hat.",
    typeLabels: {
      video: "Videodatei",
      text: "Textdokument",
      spreadsheet: "Tabellenkalkulation",
      image: "Bilddatei",
      encrypted: "Verschlüsseltes Archiv"
    },
    scenarios: {
      s1: "Szenario 1",
      s2: "Szenario 2",
      s3: "Szenario 3"
    },
    statsUsed: "Belegt:",
    statsFiles: "Dateien",
    statsOver: "+{size} über Kapazität",
    statsFree: "{size} frei",
    statsFull: "exakt voll",
    tooltipFiles: "{count} Dateien"
  }
};
