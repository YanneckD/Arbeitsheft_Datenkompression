window.LANG_DE = {
  meta: {
    lang: "de",
    title: "Datenkompression und gesellschaftliche Verantwortung"
  },
  header: {
    overline: "",
    title: "Datenkompression und gesellschaftliche Verantwortung",
    subtitle: ""
  },
  nav: {
    toggle: "Inhalt",
    title: "Navigation",
    intro: "Einstieg",
    lossless: "Modul 1: Verlustfreie Kompression",
    lossy: "Modul 2: Verlustbehaftete Kompression",
    filetypes: "Modul 3: Dateitypen und Archivierung",
    final: "Modul 4: Abschluss"
  },
  common: {
    lastTaskLabel: "Abschlussaufgabe:",
    taskLabel: "Aufgabe:"
  },
  intro: {
    heading: "Einstieg: Edward Snowden",
    articleSummary: "Artikeltext (Futurezone, 2019)",
    quoteSummary: "Ausschnitt aus Permanent Record (Edward Snowden, 2019)",
    article: {
      p1: "Der amerikanische Whistleblower Edward Snowden hat die beim US-Geheimdienst NSA kopierten Daten unter den Aufklebern von Zauberwürfeln, in Socken oder in seiner Backe aus dem Gebäude geschmuggelt. Das berichtete die \"Süddeutsche Zeitung\" am Samstag nach einem Interview mit Snowden über einen verschlüsselten Video-Chat. Der 36-Jährige veröffentlicht in wenigen Tagen seine Memoiren.",
      p2: "Snowden hatte 2013 die ausufernde Überwachung durch den US-Geheimdienst NSA öffentlich gemacht. Die US-Behörden wollen ihm den Prozess machen. Deshalb lebt er in Russland im Exil.",
      p3: "Er habe die Daten seinerzeit auf sehr kleinen Micro- und Mini-SD-Karten gespeichert. \"Die passen überall hin\", meinte er. \"Zunächst einmal habe ich allen Kollegen Zauberwürfel geschenkt. Die waren also überall, die Wachen waren den Anblick gewöhnt und ich war schnell als \"der Zauberwürfel-Typ\" bekannt\", sagte Snowden. Die Karten hätten unter Aufkleber von Zauberwürfeln gepasst, ebenso in eine Socke oder seine Backe.",
      p4: "Die geringe Größe der SD-Karten hat aber auch einen Nachteil: Sie lassen sich nur äußerst langsam beschreiben. Das Kopieren großer Datenmengen dauert immer sehr lange – zumindest länger, als man will – , aber diese Zeit dehnt sich noch mehr, wenn man nicht auf eine schnelle Festplatte schreibt, sondern auf einen winzigen, in Plastik eingebetteten Siliziumchip. Außerdem kopierte ich nicht nur. Ich deduplizierte, komprimierte, verschlüsselte, und alle diese Prozesse lassen sich nicht gleichzeitig ausführen. Ich bediente mich aller Fähigkeiten, die ich in meiner Arbeit mit Datenspeicherung erworben hatte.",
      sourceLabel: "Quelle:",
      sourceLink: "futurezone.at/netzpolitik/edward-snowden-schmuggelte-daten-mit-zauberwuerfeln-raus/400605791"
    },
    taskIntro: "Berechne anhand des Falls, wie schnell Beweisvideos kleine Speicherkarten füllen können.",
    taskText: "Hätte Snowden ein 5-minütiges Video als Beweismaterial auf eine 2 GB-SD-Karte kopieren können? Wie sieht es mit 10 oder 100 Videos aus? Mit dem unten stehenden Rechner kannst du das für verschiedene Qualitätseinstellungen berechnen.",
    inputBitrateLabel: "Datenrate (Mbps)",
    inputBitratePlaceholder: "z. B. 99",
    inputDurationLabel: "Videolänge (Minuten)",
    inputDurationPlaceholder: "z. B. 5",
    calcButton: "Größe berechnen",
    resultTemplate: "Gesamtgröße: {sizeMb} Mb (ca. {sizeMB} MB). Das entspricht {percent}% einer 2 GB-Karte. Auf die Karte passen etwa {videoCount} solcher Videos.",
    resultInvalid: "Bitte gib gültige Zahlen größer als 0 ein.",
    ratesTitle: "Kurzinfo Bitraten",
    rates720pLow: "720p@30fps: ca. 660 Mbps unkomprimiert",
    rates720pHigh: "720p@30fps: ca. 99 Mbps bei <span class=\"gloss\" title=\"Vorgang zur Verkleinerung von Daten, meist durch Entfernen von überflüssigen oder unwichtigen Informationen; die Videos verlieren an diesem Punkt keine sichtbare Qualität und werden oft direkt so gespeichert\">leichter Kompression</span>",
    rates720pStandard: "720p@30fps: ca. 5 Mbps bei <span class=\"gloss\" title=\"Standardkompression meint hier typische Kameraeinstellungen im Alltag, etwa bei Überwachungskameras oder Handykameras. Die Videos sind etwas stärker komprimiert und werden oft direkt so gespeichert, damit sie weniger Speicher brauchen\">Standardkompression</span>",
    rates4kLow: "2160p@30fps: ca. 5970 Mbps unkomprimiert",
    rates4kHigh: "2160p@30fps: ca. 890 Mbps bei <span class=\"gloss\" title=\"Vorgang zur Verkleinerung von Daten, meist durch Entfernen von überflüssigen oder unwichtigen Informationen; die Videos verlieren an diesem Punkt keine sichtbare Qualität und werden oft direkt so gespeichert\">leichter Kompression</span>",
    rates4kStandard: "2160p@30fps: ca. 40 Mbps bei <span class=\"gloss\" title=\"Standardkompression meint hier typische Kameraeinstellungen im Alltag, etwa bei Überwachungskameras oder Handykameras. Die Videos sind etwas stärker komprimiert und werden oft direkt so gespeichert, damit sie weniger Speicher brauchen\">Standardkompression</span>",
    readTasks: "Lies die beiden Texte, um dich mit dem Fall von Edward Snowden vertraut zu machen. Achte dabei besonders auf die Details zum Speichermedium und den Datenmengen.",
    assumptionHelpButton: "Hilfe",
    assumptionHelpText: "Nutze den Inhalt aus dem Buchzitat: Welchen Vorteil bringt ein kleineres Datenvolumen, wenn man unter Zeitdruck Daten auf einen langsamen Chip kopieren muss? Außerdem musste Snowden die SD-Karten aus dem Gebäude schmuggeln. Welchen Vorteil haben hier kleinere Dateien?",
    assumptionLabel: "Inwiefern hat es Edward Snowden geholfen, dass er u.a. durch sein umfangreiches Wissen über Datenkompression Dateigrößen reduzieren konnte? Fällt dir mehr ein, als dass große Dateien sonst nicht auf die SD-Karte passen? Schreibe deine Vermutungen auf."
  },
  lossless: {
    heading: "Modul 1: Verlustfreie Kompression",
    uiPlaceholder: "<strong>UNFERTIG (geplant):</strong> Interaktives RLE-/Wörterbuch-Tool. Eingabe: Text oder Schwarz/Weiß-Grafik (Raster). Ausgaben: kodierte Folge, Bit-/Zeichenlänge, Kompressionsgrad und ein Umschalter für Best-Case/Worst-Case-Beispiele. Darunter liegen drei voneinander unabhängige Dateien (A/B/C), die nicht offensichtlich nah an den Beispielen der Erklärung sind.",
    task1: "<strong>a)</strong> Begründe, ob es sinnvoll ist, die folgenden Dateien zu komprimieren, und wähle das Verfahren mit der jeweils höchsten erwarteten Kompressionsrate: Datei A (Schwarz-Weiß-Scan eines Berichts), Datei B (verschlüsselter Berichtstext), Datei C (unverschlüsselter Berichtstext).",
    task2: "<strong>b)</strong> Führe die Kompression für alle drei Dateien durch und notiere den jeweils resultierenden, komprimierten Datenstrom. Überprüfe anschließend, ob deine Vorhersagen aus Teilaufgabe a) korrekt waren.",
  },
  lossy: {
    heading: "Modul 2: Verlustbehaftete Verfahren",
    uiPlaceholder: "<strong>UNFERTIG (geplant):</strong> Block-Averaging-Simulation mit Regler für die Blockgröße. Links erscheint das Originalfoto, rechts die komprimierte Version.",
    task1: "<strong>a)</strong> Bestimme experimentell über die JavaScript-Nutzeroberfläche die maximale Blockgröße für das Beweisfoto, bei der der Text auf dem Dokument für dich gerade noch lesbar bleibt, und wähle in Abhängigkeit zur Dateigröße eine passende Blockgröße zum Speichern der Datei.",
    task2: "<strong>b)</strong> Vergleiche dein Ergebnis in einer Partnerarbeitsphase mit den Werten deines Sitznachbarn und arbeitet gemeinsame Unterschiede oder Gemeinsamkeiten bei der subjektiven Wahrnehmung dieser Lesbarkeitsgrenze heraus.",
    task3: "<strong>c)</strong> Wäre eine verlustbehaftete Kompression bei einer reinen Textdateiversion dieser Akte sinnvoll? Und wenn beides vorliegt: Sollte man lieber das Foto oder die Textdatei nutzen, um minimalen Speicherplatz zu benötigen? Begründe deine Antwort unter direktem Bezug auf die absoluten Dateigrößen vor der Kompression."
  },
  filetypes: {
    heading: "Modul 3: Kompression für verschiedene Dateitypen",
    uiPlaceholder: "<strong>UNFERTIG (geplant):</strong> Dateiformat-Inspektor mit Dateiliste, Größenvergleich, Metadatenanzeige (Autor, Pfad, Zeitstempel, Änderungsverlauf) und Schaltflächen zur Umwandlung in offene Minimalformate sowie zum Zusammenfassen in ein ZIP-Archiv.",
    task1: "<strong>a)</strong> Untersuche die bereitgestellten Office-Dokumente im Originalzustand auf ihre Struktur sowie Dateigröße und begründe, warum das direkte Kopieren dieser Dateien sowohl ein Sicherheitsrisiko als auch eine Platzverschwendung darstellt.",
    task2: "<strong>b)</strong> Bereite diese Dateisammlung so vor, dass sie geeignet für das Kopieren auf eine SD-Karte und das Weitergeben an internationale Journalisten ist.",
    task3: "<strong>c)</strong> Beurteile, inwiefern die bloße Wahl des passenden Dateiformats bereits als eine informationstechnische Reduktionsmaßnahme und damit als implizite Datenkompression verstanden werden kann."
  },
  final: {
    heading: "Modul 4: Abschlussaufgabe",
    uiPlaceholder: "<strong>UNFERTIG (geplant):</strong> Datenpaket-Simulator mit Videos, Word-Dokumenten, proprietärem Datenbank-Dump, verschlüsselten Dateien und Präsentationsdateien. Pro Datei soll eine Maßnahme gewählt werden (komprimieren, konvertieren, bündeln, verschlüsseln oder unverändert lassen); zusätzlich werden Kopierzeit, Speicherbedarf und SD-Karten-Anzahl rückgemeldet.",
    task1: "<strong>a)</strong> Analysiere das bereitgestellte Datenpaket (aus Videos, Word-Dokumenten, direkten Datenbank-Dumps in einem proprietären Dateiformat, verschlüsselte Dateien und Präsentationsdateien) im Tool des Arbeitsheftes und triff eine erste eigene Zuordnung der Dateien zu verschiedenen Maßnahmen zur Speicherplatzreduktion, um die Kopierzeit und den Speicherplatzbedarf zu minimieren.",
    task2: "<strong>b)</strong> Schließt euch in Gruppen von zwei bis drei Personen zusammen, vergleicht eure ersten Ansätze, optimiert die Einstellungen im Arbeitsheft gemeinsam und formuliert aus dem Vergleich eurer Ergebnisse und eurem Wissen durch das Arbeitsheft eine gemeinsame Best-Practice-Strategie für dieses und ähnliche Szenarien.",
    task3: "<strong>c)</strong> Nutzt eure Gruppenstrategien als Basis für eine abschließende Diskussion im Plenum zur Leitfrage, warum ausgeprägte Kompetenzen im Bereich des Datenmanagements eine wichtige Fähigkeit für Informationsfreiheit und demokratische Resilienz darstellen."
  },
  footer: {
    text: "Yanneck Dimitrov, 2026"
  }
};
