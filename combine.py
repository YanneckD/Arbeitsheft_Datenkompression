import os
import re
import glob

def build_all_languages():
    # standard dateien einlesen
    with open("index.html", "r", encoding="utf-8") as f:
        html_base = f.read()
    with open("style.css", "r", encoding="utf-8") as f:
        css = f.read()
    with open("script.js", "r", encoding="utf-8") as f:
        js = f.read()
    
    # CSS-Tag vorbereiten
    css_tag = f"<style>\n{css}\n</style>"
    html_with_css = re.sub(r'<link[^>]*href=["\']style\.css["\'][^>]*>', css_tag, html_base)

    # alle .js Dateien im lang-Ordner suchen
    lang_files = glob.glob("lang/*.js")
    
    if not lang_files:
        print("Warnung: Keine Sprachdateien im Ordner 'lang/' gefunden.")
        return

    for file_path in lang_files:
        # sprachcode aus dateinamen
        filename = os.path.basename(file_path)
        lang_code = os.path.splitext(filename)[0]
        
        # js code für die sprache einlesen
        with open(file_path, "r", encoding="utf-8") as f:
            lang_js = f.read()
        
        # js kombinieren
        combined_js = f"<script>\n{lang_js}\n\n{js}\n</script>"
        
        # Script-Tag in der HTML ersetzen
        final_html = re.sub(
            r'<script[^>]*src=["\']script\.js["\'][^>]*>.*?</script>', 
            combined_js, 
            html_with_css
        )
        
        # jede sprache extra als HTML speichern
        output_filename = f"arbeitsheft_{lang_code}.html"
        with open(output_filename, "w", encoding="utf-8") as f:
            f.write(final_html)
        
        print(f"Erfolgreich generiert: {output_filename}")

if __name__ == "__main__":
    build_all_languages()