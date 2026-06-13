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
    lossless: "Sektion 1: Verlustfreie Kompression",
    lossy: "Sektion 2: Verlustbehaftete Kompression",
    filetypes: "Sektion 3: Dateiformate und Metadaten",
    final: "Sektion 4: Datenmanagement"
  },
  common: {
    answerPlaceholder: "Deine Antwort ...",
    showHint: "Tipp anzeigen",
    hideHint: "Tipp ausblenden"
  },
  intro: {
    heading: "Einstieg",
    scenario: "Ein Freund arbeitet bei einem staatlichem Geheimdienst und hat mitbekommen, dass schwere Verbrechen an der Gesellschaft verheimlicht werden sollen. Er hat Zugriff auf Videoaufnahmen, Berichte und Fotos, welche diese Umstände zeigen und ist entschlossen diese an die Presse weiterzugeben, da ihm in einem Gespräch mit seinem Vorgesetzten gesagt wurde, er solle das einfach ignorieren. Da diese Daten jedoch auf Computern in einer sehr gut bewachten Anlage mit stark überwachter Internetanbindung sind, ist es ihm nicht möglich diese einfach an Journalisten zu senden. Außerdem handelt es sich um tausende Dateien, welche sehr viel Speicherplatz einnehmen und deshalb hunderte USB-Sticks füllen könnten. Da das Herausschmuggeln durch die Taschenkontrolle am Ausgang sehr riskant ist, will er nach Möglichkeit so wenig Gegenstände wie möglich bei sich haben, die auf sein Vorhaben hindeuten. Er weiß, dass du technisch fit bist und bittet dich um Hilfe:",
    scenarioQuote: "Was soll ich tun? Wie kriege ich diese riesigen Datenmengen unbemerkt aus dem Gebäude?",
    scenarioQuestion: "→ Was würdest du deinem Freund raten?",
    answerTask: "Schreibe deine Antwort auf und speichere sie ab, damit du sie dir nach der Bearbeitung des Arbeitsheftes nochmal ansehen kannst.",
    snowdenIntro: "Dieses Einstiegsbeispiel ist nicht völlig realitätsfern. Es basiert auf der wahren Geschichte von Edward Snowden, der als technischer Mitarbeiter der NSA Daten gestohlen hat und sie an die Presse weitergegeben hat. Diese Daten enthalten Informationen über die Überwachung der Menschen und die Verletzung von Privatsphäre und Menschenrechten. Edward Snowden ist ein herausragender Fall von Whistleblowing und hat die Welt durch seine Enthüllungen verändert. Im Folgenden findest du einen Artikel aus einer Zeitung, der über die Geschehnisse berichtet.",
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
    taskText: "Hätte Snowden ein 5-minütiges Video als Beweismaterial auf eine 2 GB-SD-Karte kopieren können? Wie sieht es mit 10 oder 100 Videos aus? Mit dem unten stehenden Rechner kannst du das für verschiedene Qualitätseinstellungen berechnen.",
    reflectionTask: "Inwiefern hat es Edward Snowden geholfen, dass er u.a. durch sein umfangreiches Wissen über Datenkompression Dateigrößen reduzieren konnte? Fällt dir mehr ein, als dass große Dateien sonst nicht auf die SD-Karte passen? Schreibe deine Vermutungen auf.",
    reflectionHint: "Nutze den Inhalt aus dem Buchzitat: Welchen Vorteil bringt ein kleineres Datenvolumen, wenn man unter Zeitdruck Daten auf einen langsamen Chip kopieren muss? Außerdem musste Snowden die SD-Karten aus dem Gebäude schmuggeln. Welchen Vorteil haben hier kleinere Dateien?",
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
    rates4kStandard: "2160p@30fps: ca. 40 Mbps bei <span class=\"gloss\" title=\"Standardkompression meint hier typische Kameraeinstellungen im Alltag, etwa bei Überwachungskameras oder Handykameras. Die Videos sind etwas stärker komprimiert und werden oft direkt so gespeichert, damit sie weniger Speicher brauchen\">Standardkompression</span>"
  },
    lossless: {
    heading: "Sektion 1: Verlustfreie Kompression",
    intro: {
      p1: "Ein einfaches Schwarz-Weiß-Bild mit 64×64 Pixeln lässt sich mit 4.096 Bits beschreiben, eines pro Pixel. Dabei steht jedes Bit für Schwarz oder Weiß. Wie viel Platz eine Datei benötigt, hängt aber nicht nur von ihrem Inhalt ab, sondern auch davon, wie dieser Inhalt beschrieben wird. Es gibt Strategien, denselben Inhalt mit weniger Bits darzustellen, ohne irgendetwas wegzulassen."
    },
    transition: "Aufgabe 1 hat gezeigt: Bei manchen Dateitypen ist es entscheidend, dass nach der Kompression exakt dieselben Bits wiederhergestellt werden können. Ein Verfahren, das das garantiert, nennt man verlustfrei. Doch wie funktionieren solche Verfahren?",
    task1: {
      title: "Aufgabe 1 - Reversibilität",
      intro: "Das Werkzeug zeigt dir ein Passwort und ein Bild in ihrer Binärdarstellung. Verändere in beiden Fällen genau ein einzelnes Bit.",
      widgetPlaceholder: "[Platzhalter: Widget Bitfehler-Demonstrator (Passwort + Bild nebeneinander)]",
      a: {
        text: "a) Beschreibe, was mit dem Passwort und mit dem Bild jeweils nach der Veränderung passiert."
      },
      b: {
        text: "b) Erkläre anhand deiner Beobachtungen: Für welchen der beiden Dateitypen sind Bitfehler tolerierbar, und für welchen nicht?"
      }
    },
    task2: {
      title: "Aufgabe 2 - Run-Length Encoding (RLE)",
      intro: "Das Werkzeug zeigt dir eine Zeichenkette aus Buchstaben, zum Beispiel: AAABBBCCDDDDDA. Darunter erscheint live eine Darstellung als Tupelkette.",
      widgetPlaceholder: "",
      a: {
        text: "a) Lies die Tupel für die Beispielzeichenkette ab und erläutere deine Vermutung: Welche Information steckt in jedem Tupel, und wie entsteht es aus der Zeichenkette?"
      },
      b: {
        text: "b) Lässt sich aus einer Tupelkette immer die ursprüngliche Zeichenkette exakt wiederherstellen? Begründe deine Antwort."
      },
      c: {
        text: "c) Gib eine Zeichenkette ein, deren Tupeldarstellung laut Größenanzeige möglichst viel Speicher spart, und eine, die möglichst wenig spart oder sogar mehr verbraucht. Erläutere anhand deiner Beispiele, wann RLE Speicher spart und wann nicht."
      }
    },
    task3: {
      title: "Aufgabe 3 - Wörterbuchkompression",
      widgetPlaceholder: "[Platzhalter: Widget Wörterbuch-Codierer mit RLE-Vergleich]",
      a: {
        text: "a) Hier wird das RLE-Verfahren auf den bereitgestellten Beispieltext angewendet. Beschreibe das Problem, das sich hierbei im Vergleich zur Kompression der Zeichenkette aus Aufgabe 2 ergibt."
      },
      b: {
        text: "b) Formuliere eine erste Vermutung: Wie müsste ein neuer Kompressionsalgorithmus im Gegensatz zu RLE vorgehen, um die typischen Strukturen und Wiederholungen eines normalen Fließtextes effektiver ausnutzen zu können?"
      },
      c: {
        text: "c) Betrachte nun den Ablauf eines anderen Verfahrens für Texte und beobachte, wie sich die Tabelle neben dem Text schrittweise aufbaut. Stelle anhand deiner Beobachtungen eine Vermutung auf, wie dieses neue Verfahren funktioniert und was die Einträge in der Tabelle bedeuten.",
        explanation: "RLE stößt bei Fließtexten an seine Grenzen, da sich einzelne Zeichen selten direkt wiederholen. Ein normaler Text besitzt jedoch eine andere Form von Redundanz: Es wiederholen sich nicht Buchstaben, sondern ganze Wörter, Silben oder Wortphrasen. Genau hier setzt die Wörterbuchkompression an. Statt einzelne Zeichen zu zählen, legt sie eine dynamische Nachschlageliste (ein Wörterbuch) für häufig wiederkehrende Ausdrücke an. Im eigentlichen Text wird das Wort dann durch einen kurzen, platzsparenden Verweis auf den entsprechenden Index im Wörterbuch ersetzt. Je öfter ein Wort im Dokument vorkommt, desto mehr Speicherplatz wird gespart."
      },
      d: {
        text: "d) Beschreibe in eigenen Worten je einen Anwendungsfall, in welchem RLE bzw. Wörterbuchkompression sehr gut funktioniert, das jeweils andere Verfahren jedoch nicht."
      }
    },
    task4: {
      title: "Aufgabe 4 - Effizienzgrenzen",
      widgetPlaceholder: "[Platzhalter: Widget Kompressionsraten-Tester mit drei Texten nebeneinander]",
      quotePlain: "Die Überwachung der Zielperson wurde am Donnerstag fortgesetzt. Während der Überwachung der Zielperson wurden alle digitalen Daten erfasst. Die Erfassung der Daten erfolgte ohne richterlichen Beschluss. Da die Daten der Zielperson als streng geheim eingestuft sind, wurden die Daten direkt an die Zentrale übermittelt. Eine Löschung der Daten der Überwachung ist nicht vorgesehen.",
      a: {
        text: "a) Bei diesem Text ließe sich mit dem Wörterbuchverfahren etwas Speicherplatz einsparen. Wie sieht es aus, wenn der Text verschlüsselt wurde? Überlege zunächst, wie ein verschlüsselter Text im Vergleich zu einem lesbaren Text aussieht, und begründe dann mithilfe deines <span class=\"gloss\" title=\"Falls du noch nicht weißt, wie verschlüsselte Daten aussehen: Ein gutes Verschlüsselungsverfahren macht aus einem lesbaren Text eine Folge von Zeichen, die keinerlei erkennbares Muster mehr enthält, also wie eine zufällige Zeichenkette wirkt. Wer den Schlüssel nicht kennt, soll nichts erkennen können.\">Wissens über Verschlüsselungsverfahren</span>."
      },
      quoteEncrypted: "RGllIMOcYmVyd2FjaHVuZyBkZXIgWmllbHBlcnNvbiB3dXJkZSBhbSBEb25uZXJzdGFnIGZvcnRnZXNldHp0LiBXw6RocmVuZCBkZXIgw5xiZXJ3YWNodW5nIGRlciBaaWVscGVyc29uIHd1cmRlbiBhbGxlIGRpZ2l0YWxlbiBEYXRlbiBlcmZhc3N0LiBEaWUgRXJmYXNzdW5nIGRlciBEYXRlbiBlcmZvbGd0ZSBvaG5lIHJpY2h0ZXJsaWNoZW4gQmVzY2hsdXNzLiBEYSBkaWUgRGF0ZW4gZGVyIFppZWxwZXJzb24gYWxzIHN0cmVuZyBnZWhlaW0gZWluZ2VzdHVmdCBzaW5kLCB3dXJkZW4gZGllIERhdGVuIGRpcmVrdCBhbiBkaWUgWmVudHJhbGUgw7xiZXJtaXR0ZWx0LiBFaW5lIEzDtnNjaHVuZyBkZXIgRGF0ZW4gZGVyIMOcYmVyd2FjaHVuZyBpc3QgbmljaHQgdm9yZ2VzZWhlbi4=",
      b: {
        text: "b) Entwirf eine Handlungsempfehlung für deinen Freund: Für welche Dateien lohnt sich verlustfreie Kompression, und für welche nicht? Die Empfehlung soll so formuliert sein, dass er sie auf neue Dateien anwenden kann, ohne dich zu fragen."
      }
    },
    closing: {
      title: "Abschlussaufgabe",
      intro: "Dir liegen vier Dateien vor: ein Schwarz-Weiß-Scan eines Dokuments, ein langer unverschlüsselter Bericht, ein verschlüsseltes Dokument und eine Tabelle mit Namen und Adressen.",
      a: {
        text: "a) Dein Freund plant, die Dokumente aus Sicherheitsgründen zuerst stark zu verschlüsseln. Anschließend möchte er vor dem Kopieren auf die Speicherkarte diese Dokumente komprimieren. Beurteile diesen Plan und schlage ihm falls nötig eine Alternative vor."
      },
      b: {
        text: "b) Ordne jeder Datei das geeignetste verlustfreie Verfahren zu (RLE, Wörterbuch, keines) und begründe jede Zuordnung mit deinen Erkenntnissen aus den vorherigen Aufgaben."
      }
    }
  },
  lossy: {
    heading: "Sektion 2: Verlustbehaftete Kompression",
    intro: {
      p1: "Verlustfreie Verfahren funktionieren gut, wenn Daten Wiederholungen enthalten. Viele Dateien enthalten aber keine einfachen Wiederholungen, trotzdem lassen sie sich stark verkleinern.",
      p2: "Eine andere Strategie nutzt eine Eigenschaft des menschlichen visuellen Systems: Wir nehmen nicht alle Bildinformationen gleich genau wahr. Verlustbehaftete Verfahren entfernen gezielt Informationen, die kaum wahrgenommen werden. Das nennt man Irrelevanzminderung. Dazu muss man jedoch zunächst herausfinden, welche Informationen man weglassen kann."
    },
    task1: {
      title: "Aufgabe 1 - Was nimmt das Auge wahr?",
      intro: "Das Werkzeug zeigt dir dasselbe Bild mit zwei unabhängigen Reglern.",
      widgetPlaceholder: "[Platzhalter: Widget Block-Averaging mit zwei Reglern (Helligkeitsstufen und Farbgenauigkeit)]",
      a: {
        text: "a) Reduziere zunächst nur die Helligkeitsstufen stark und lasse den anderen Regler auf Maximum. Beschreibe, ab wann du das Bild schwerer zu erkennen findest, und halte den Wert fest."
      },
      b: {
        text: "b) Stelle die Helligkeitsstufen zurück auf Maximum und reduziere nun nur die Farbgenauigkeit stark. Beschreibe, ab wann du das Bild schwerer zu erkennen findest, und halte den Wert fest."
      },
      c: {
        text: "c) Vergleiche beide Beobachtungen anhand des Kriteriums, ab welchem Wert jeweils die Benutzbarkeit des Bilds eingeschränkt wird. Erläutere, wie ein Bildkompressionsverfahren diese Eigenschaften des menschlichen Auges ausnutzen könnte, um Dateien zu verkleinern."
      }
    },
    explanation: {
      p1: "JPEG ist ein solches Verfahren und komprimiert ein Bild, indem es dieses zunächst in gleichmäßige Blöcke aufteilt. Statt jeden Pixel einzeln zu speichern, wird für jeden Block nur eine grobe Zusammenfassung seiner Farb- und Helligkeitswerte gespeichert. Je größer der Block, desto weniger Einzelinformationen müssen abgelegt werden und desto kleiner wird die Datei. Gleichzeitig gehen dabei Details innerhalb des Blocks verloren, weil alle Pixel eines Blocks durch eine gemeinsame Annäherung ersetzt werden.",
      p2: "In Wirklichkeit arbeitet JPEG mit einer Reihe weiterer Schritte, unter anderem einer mathematischen Transformation und einer anschließenden verlustfreien Kompression. Die Blockgröße allein erklärt das Verfahren also nicht vollständig. Für das Grundprinzip „mehr Blöcke bedeuten mehr Details, weniger Blöcke bedeuten kleinere Dateien“ ist dieses Modell jedoch ausreichend. Auch Videos werden sehr ähnlich komprimiert, einige simple Verfahren, wie MJPEG funktionieren sogar so, dass jedes Einzelbild des Videos als JPEG komprimiert wird."
    },
    task2: {
      title: "Aufgabe 2 - Wie viel Ersparnis, und wann?",
      widgetPlaceholder: "[Platzhalter: Widget Block-Averaging mit Blockgrößen-Regler und Größenanzeige]",
      a: {
        text: "a) Erhöhe die Blockgröße schrittweise von 1x1 auf 64x64 und beobachte die verhältnismäßige Größenanzeige. Bestimme, wo der größte Sprung in der Ersparnis auftritt."
      },
      b: {
        text: "b) Dein Freund schlägt vor, ein Beweisfoto so lange zu komprimieren, bis Details gerade noch erkennbar sind, da er so am meisten Speicher spare. Beurteile diesen Vorschlag anhand deiner Erkenntnisse aus Aufgabe 2a und entwirf eine Empfehlung, die dein Freund allgemein auf Fotos anwenden kann."
      }
    },
    task3: {
      title: "Aufgabe 3 - Verlustbehaftete Kompression bei Texten",
      a: {
        text: "a) In Sektion 1 hast du beobachtet, was passiert, wenn man ein einzelnes Bit in einem Passwort verändert. Überlege nun: Was würde bei einem Textdokument passieren, wenn ein verlustbehaftetes Verfahren einzelne Bits verändert oder entfernt? Welchen Unterschied macht es, ob es sich um lesbaren oder verschlüsselten Text handelt?"
      },
      b: {
        text: "b) Dein Freund meint, verlustfreie Kompression scheitere bei verschlüsselten Dateien, aber verlustbehaftete Kompression erziele doch immer eine positive Rate. Beurteile den Vorschlag, verlustbehaftete Verfahren auf Texte anzuwenden und erkläre, woran du deine Entscheidung orientierst."
      },
      c: {
        text: "c) Dein Freund schlägt daraufhin vor, statt der Textdatei ein Foto des Textes zu verwenden, da Bilder verlustbehaftet gut komprimiert werden können. Schaue dir die gegebenen Dateien an, welche eine .txt-Datei und ein bereits komprimierter Screenshot im JPEG-Format von einem Ausschnitt des Textes sind. Betrachte die Dateigrößen im Explorer. Erläutere anhand dieser Zahlen, ob er damit wirklich Speicherplatz einsparen kann."
      }
    },
    closing: {
      title: "Abschlussaufgabe",
      intro: "Dir liegen drei Dateien vor: ein Beweisfoto, ein verschlüsseltes Dokument und ein kurzer unverschlüsselter Bericht.",
      a: {
        text: "a) Beurteile für jede Datei, ob verlustbehaftete Kompression eingesetzt werden kann, und wenn ja, mit welcher Einschränkung."
      },
      b: {
        text: "b) Entwirf eine Entscheidungsregel: Wann ist verlustbehaftete Kompression verantwortungsvoll einsetzbar, und wann nicht? Die Regel soll auf alle Dateitypen anwendbar sein, die dein Freund in seiner Situation vorfinden könnte."
      }
    }
  },
  filetypes: {
    heading: "Sektion 3: Dateiformate und Metadaten",
    intro: {
      p1: "Bisher haben wir Kompression als Werkzeug betrachtet, das man auf eine bestehende Datei anwendet. Es gibt aber eine Frage, die davor steht: In welchem Format liegt die Datei überhaupt vor?",
      p2: "Dateiformate entscheiden darüber, welche Informationen zusätzlich zum eigentlichen Inhalt gespeichert werden (diese nennt man Metadaten) und wie der Inhalt gespeichert wird. Manche dieser Zusatzinformationen sind nützlich. Manche können in bestimmten Situationen jedoch gefährlich werden."
    },
    task1: {
      title: "Aufgabe 1 - Overhead in Dateiformaten",
      intro: "Das Werkzeug zeigt dir zwei Dateien mit identischem Textinhalt: einmal als .txt, einmal als .docx.",
      widgetPlaceholder: "[Platzhalter: Widget Dateistruktur-Vergleich (.txt vs. .docx)]",
      a: {
        text: "a) Beschreibe deine Beobachtungen: Was unterscheidet die beiden Dateien, obwohl ihr Inhalt gleich ist? Betrachte die interne Struktur der .docx-Datei. Welche Bestandteile sind nicht Teil des sichtbaren Texts?"
      },
      b: {
        text: "b) Erläutere, inwiefern Metadaten in einer Datei für deinen Freund ein Problem darstellen könnten."
      }
    },
    task2: {
      title: "Aufgabe 2 - Metadaten als Sicherheitsrisiko",
      intro: "Schaue dir im Material-Ordner die Word-Datei an (Rechtsklick → Eigenschaften) und schaue, welche Metadaten dort gespeichert sind.",
      a: {
        text: "a) Nenne alle dort gespeicherten Informationen und beurteile jede Information für die Situation deines Freundes: Wie gefährlich wäre sie für jemanden, der anonym bleiben muss? Ordne jede Information als unkritisch oder problematisch ein und begründe jede Einordnung kurz."
      },
      b: {
        text: "b) Dein Freund möchte die gefährlichen Einträge einzeln von Hand löschen oder ändern. Beurteile diesen Ansatz und benenne eine Lösung, die das Problem grundlegender behebt. Begründe, warum dein Vorschlag deinem Freund in seiner Situation besser weiterhelfen wird als seine ursprüngliche Idee."
      }
    },
    task3: {
      title: "Aufgabe 3 - Proprietäre Formate als Sonderfall",
      intro: "Im Material-Ordner befinden sich zwei Dateien mit denselben Kontaktdaten: <code>kontakte.csv</code> (offenes Format) und <code>kontakte.accdb</code> (proprietäres Format). Öffne beide Dateien mit einem Texteditor (z. B. Notepad, VS Code) und vergleiche deren Inhalt.",
      a: {
        text: "a) Erläutere das Problem: Was passiert, wenn die empfangende Person die benötigte Software für die .accdb-Datei nicht hat?"
      },
      b: {
        text: "b) Vergleiche offene Formate mit proprietären (softwaregebundenen) Formaten anhand der folgenden drei Dateitypen:<br><br>Textdokumente: <span class=\"gloss\" data-tooltip=\".txt – Enthält ausschließlich den reinen Text, keine Formatierung, keine Metadaten. Kann mit jedem Textprogramm auf jedem Betriebssystem geöffnet werden.\">.txt</span> (offen) vs. <span class=\"gloss\" data-tooltip=\".docx – Speichert neben dem Text auch Formatierung, Layoutinformationen und Metadaten wie Autor, Bearbeitungsdatum und Kommentare. Ist primär für Microsoft Word ausgelegt, kann aber auch mit z.B. LibreOffice geöffnet werden.\">.docx</span> (Microsoft Word)<br>Bilder: <span class=\"gloss\" data-tooltip=\".png – Speichert Bilddaten verlustfrei und mit Metadaten zur Entstehung. Kann auf nahezu allen Geräten und Betriebssystemen ohne zusätzliche Software geöffnet werden.\">.png</span> (offen) vs. <span class=\"gloss\" data-tooltip=\".psd – Das native Format von Adobe Photoshop. Speichert neben dem Bild auch Ebenen, Bearbeitungshistorie und weitere interne Daten. Kann ohne Photoshop oder kompatible Software nicht vollständig geöffnet werden.\">.psd</span> (Adobe Photoshop)<br><br>Vergleiche diese Formate hinsichtlich Plattformunabhängigkeit, Anonymisierbarkeit und Verfügbarkeit und beurteile anschließend, welche Formatkategorie du für die sichere Weitergabe an die Journalisten wählen würdest. Benenne dabei die Nachteile, die du bei dieser Wahl in Kauf nimmst."
      }
    },
    task4: {
      title: "Aufgabe 4 - Containerformate",
      intro: "Archivformate wie ZIP, 7z oder RAR sind weltweit verbreitet, um Dateien weiterzugeben. Ein solches Format kombiniert zwei Funktionen in einem Schritt: Es fungiert als Container, fügt also viele Dateien zu einer Datei zusammen, und komprimiert den Inhalt verlustfrei. Dabei nutzt es unter anderem das Wörterbuchverfahren, das du bereits kennst, jedoch mit einer Erweiterung. Es erstellt das Wörterbuch dateiübergreifend für den gesamten Container, anstatt für jede Datei einzeln von vorn zu beginnen.",
      widgetPlaceholder: "[Platzhalter: Widget ZIP-Archiv-Builder]",
      a: {
        text: "a) Das Werkzeug simuliert das Versenden von 10 einzelnen Textdokumenten im Vergleich zum Versand eines einzigen Archivs, in dem diese 10 Dateien gebündelt sind. Nenne Vorteile, die das reine Bündeln in eine einzige Datei für den Sender und den Empfänger hat, unabhängig davon, ob die Datei dadurch kleiner wird."
      },
      b: {
        text: "b) Nun betrachten wir die Kompression: Du komprimierst die 10 Textdokumente zuerst einzeln mit dem Wörterbuchverfahren und addierst ihre Dateigrößen. Steckst du die 10 unkomprimierten Texte zusammen in ein Archiv, siehst du, dass das Archiv deutlich kleiner ist als die Summe der einzeln komprimierten Dateien. Erkläre, warum das passiert."
      },
      c: {
        text: "c) Dein Freund ist begeistert von Archivformaten und packt 10 verschlüsselte Datenbankdateien sowie 20 JPEG-Beweisfotos in ein Archiv. Wird dieses Archiv durch das Bündeln eine große Speicherersparnis bringen? Stelle eine begründete Vermutung auf und nutze dafür deine Erkenntnisse über Verschlüsselung und Kompressionsverfahren aus den vorherigen Sektionen."
      }
    },
    closing: {
      title: "Abschlussaufgabe",
      a: {
        text: "a) Schaue dir im Material-Ordner die Dateien im Dateiexplorer an. Analysiere die Dokumente und beurteile für jedes, ob eine Formatkonvertierung ausreicht oder ob eine händische Bereinigung notwendig ist. Begründe jede Entscheidung, bevor du sie umsetzt."
      },
      b: {
        text: "b) Fasse alle Dateien in einem Archiv zusammen. Verfasse anschließend eine Erklärung für die empfangenden Journalisten ohne Informatikkenntnisse: Was hast du getan, was hast du entfernt, und was bedeutet das? Die Erklärung soll ihr ermöglichen, in einer ähnlichen Situation eigenständig zu handeln. Du musst hierbei keine vollständige Erklärung für die Funktion von Kompression geben, sondern sollst die Prinzipien und Kriterien vermitteln, die du bei deinen Entscheidungen angewendet hast."
      }
    }
  },
  final: {
    heading: "Sektion 4: Datenmanagement als Abschlussaufgabe",
    intro: {
      p1: "Du hast jetzt drei Werkzeuge kennengelernt: verlustfreie Kompression, verlustbehaftete Kompression und die bewusste Wahl von Dateiformaten.",
      p2: "In der Realität liegt selten eine einzige Datei vor, sondern ein Paket aus sehr unterschiedlichen Dateitypen mit sehr unterschiedlichen Anforderungen. Welches Werkzeug für welche Datei sinnvoll ist, kannst du nur entscheiden, wenn du die Eigenschaften jedes Dateityps kennst.",
      p3: "Das Werkzeug zeigt dir das Paket als Treemap mit Typen und Größen, so wie ein Programm zur Datenträgeranalyse es darstellen würde. In allen drei Szenarien ist das Ziel, die gesamten Daten auf eine 32-GB-Speicherkarte zu kopieren – aktuell passt das Paket in keinem Fall darauf."
    },
    task1: {
      title: "Aufgabe 1 - Überblick verschaffen",
      note: "Es gibt drei verschiedene Pakete auf unterschiedlichen Datenträgern. Dein Ziel ist es, die jeweiligen Daten vollständig auf eine 32-GB-Speicherkarte zu bekommen. Jedes Paket erfordert dafür andere Maßnahmen. Genauere Informationen zu den Dateien erhälst du beim drüberhovern.",
      widgetPlaceholder: "[Widget: Dateisystem-Treemap mit drei Szenarien]",
      a: {
        text: "a) Beschreibe für jede Datei (bzw. jede Dateigruppe) in der Treemap, welche Maßnahmen aus den Sektionen 1 bis 3 hier in Frage kommen, und begründe deine Einschätzung kurz."
      },
      b: {
        text: "b) Überlege, wie viel Speicherplatz fehlt, damit alles auf die Karte passt. Überlege dann: Welche Dateien solltest du zuerst bearbeiten, um mit möglichst wenig Aufwand den größten Effekt zu erzielen? Natürlich könnte man alles komprimieren, aber denk daran, dass dein Freund in dieser Situation unter Zeitdruck steht und die Daten einfach nur auf die Karte passen sollen. Erläutere, wie du priorisierst."
      }
    },
    closing: {
      title: "Aufgabe 2 - Reflexion",
      a: {
        text: "a) Bestimme, welche der Maßnahmen aus dieser Sektion ohne das Wissen aus einer der vorherigen Sektionen nicht möglich gewesen wäre, und erläutere den Zusammenhang konkret."
      },
      b: {
        text: "b) Beschreibe in zwei Sätzen, ob und was du jetzt konkret tun kannst, das du vorher nicht konntest. Nutze dabei keine abstrakten Formulierungen, sondern benenne eine konkrete Handlungsfähigkeit.",
        hint: "Zu abstrakt wäre: Ich weiß jetzt, was Kompression ist. Konkreter wäre: Ich kann jetzt entscheiden, welches Format und welches Verfahren ich wähle, wenn ich Dateien sicher und anonym weitergeben will."
      },
      c: {
        text: "c) Dein Freund hatte dich ganz am Anfang um Rat gebeten, bevor du dieses Heft bearbeitet hast. Was hast du ihm damals empfohlen, und was kannst du ihm jetzt empfehlen?"
      }
    },
    plenum: {
      title: "Plenumsdiskussion",
      note: "Die folgenden Fragen sind Impulse für das gemeinsame Gespräch:",
      q1: "Wäre die Situation im Szenario ohne Informatikkenntnisse lösbar gewesen? Was folgt daraus für die Frage, wer Zugang zu diesem Wissen haben sollte?",
      q2: "In welchen Situationen könntest du selbst in den nächsten Jahren/Jahrzehnten in eine ähnliche Lage kommen?",
      q3: "Was wäre nötig, damit dieses Wissen nicht nur Einzelnen nützt, sondern gesellschaftlich verfügbar ist?"
    }
  },
  footer: {
    text: "Yanneck Dimitrov, 2026"
  }
};
