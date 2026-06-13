function setupFileInspectorWidget(source) {
  const t = source || getWidgetLang("fileInspector");
  var container = document.getElementById("widget-s3-fileinspector");
  if (!container) { return; }

  container.classList.remove("widget-placeholder");
  container.style.cssText = "border:1px solid var(--border);background:#fffdf8;padding:0.8rem 1rem 1rem;border-radius:3px;margin:0.75rem 0";

  container.innerHTML =
    '<div style="display:grid;grid-template-columns:1fr 1fr;gap:18px">' +

      '<div style="border:1px solid var(--border);border-radius:4px;overflow:hidden;background:#fff">' +
        '<div style="display:flex;justify-content:space-between;align-items:center;padding:10px 12px 8px;background:var(--bg);border-bottom:1px solid var(--border)">' +
          '<div style="display:flex;align-items:center;gap:8px">' +
            '<span style="font-size:16px">\uD83D\uDCC4</span>' +
            '<span style="font-weight:600;font-family:monospace;font-size:14px">' + t.txtFilename + '</span>' +
          '</div>' +
          '<span style="font-size:12px;color:var(--muted);font-family:monospace">' + t.txtSize + '</span>' +
        '</div>' +
        '<div style="padding:10px 12px">' +
          '<div style="background:#f5f2f0;border-radius:3px;padding:10px 12px;font-family:monospace;font-size:13px;line-height:1.6;white-space:pre-wrap;word-break:break-all;color:#1f2328">' +
            t.txtContent +
          '</div>' +
        '</div>' +
      '</div>' +

      '<div style="border:1px solid var(--border);border-radius:4px;overflow:hidden;background:#fff">' +
        '<div style="display:flex;justify-content:space-between;align-items:center;padding:10px 12px 8px;background:var(--bg);border-bottom:1px solid var(--border)">' +
          '<div style="display:flex;align-items:center;gap:8px">' +
            '<span style="font-size:16px">\uD83D\uDCC4</span>' +
            '<span style="font-weight:600;font-family:monospace;font-size:14px">' + t.docxFilename + '</span>' +
          '</div>' +
          '<span style="font-size:12px;color:var(--muted);font-family:monospace">' + t.docxSize + '</span>' +
        '</div>' +
        '<div style="padding:10px 12px">' +
          '<div style="font-family:monospace;font-size:13px;line-height:1.7">' +

            '<div style="margin:0">' +
              '<div style="padding:2px 4px;border-radius:2px;display:flex;align-items:center;gap:4px;font-size:13px">' +
                '<span style="color:var(--muted)">\u251C\u2500</span> ' +
                '<span style="color:#8b6f47">[Content_Types].xml</span>' +
              '</div>' +
              '<div style="padding:4px 0 4px 20px;color:#555;font-size:12px;border-left:1px dashed var(--border);margin-left:6px">' +
                t.contentTypesDesc +
              '</div>' +
            '</div>' +

            '<div style="margin:0">' +
              '<div style="padding:2px 4px;border-radius:2px;display:flex;align-items:center;gap:4px;font-size:13px">' +
                '<span style="color:var(--muted)">\u251C\u2500</span> ' +
                '<span style="color:#8b6f47">_rels/</span>' +
              '</div>' +
              '<div style="padding:4px 0 4px 20px;border-left:1px dashed var(--border);margin-left:6px">' +
                '<span style="color:#888;font-size:12px">.rels</span>' +
                '<span style="color:var(--muted);font-size:11px;margin-left:8px">' + t.relsDesc + '</span>' +
              '</div>' +
            '</div>' +

            '<div style="margin:0">' +
              '<div style="padding:2px 4px;border-radius:2px;display:flex;align-items:center;gap:4px;font-size:13px">' +
                '<span style="color:var(--muted)">\u251C\u2500</span> ' +
                '<span style="color:#8b6f47">docProps/</span>' +
              '</div>' +
              '<div style="padding:4px 0 4px 20px;border-left:1px dashed var(--border);margin-left:6px">' +
                '<div style="display:flex;flex-direction:column;gap:2px">' +
                  '<div>' +
                    '<span style="color:#555">core.xml</span>' +
                    '<span style="color:var(--muted);font-size:11px;margin-left:8px">' + t.coreDesc + '</span>' +
                  '</div>' +
                  '<div>' +
                    '<span style="color:#555">app.xml</span>' +
                    '<span style="color:var(--muted);font-size:11px;margin-left:8px">' + t.appDesc + '</span>' +
                  '</div>' +
                '</div>' +
              '</div>' +
            '</div>' +

            '<div style="margin:0">' +
              '<div style="padding:2px 4px;border-radius:2px;display:flex;align-items:center;gap:4px;font-size:13px">' +
                '<span style="color:var(--muted)">\u2514\u2500</span> ' +
                '<span style="color:#8b6f47;font-weight:600">word/</span>' +
              '</div>' +
              '<div style="padding:4px 0 4px 20px;border-left:1px dashed var(--border);margin-left:6px">' +
                '<div style="display:flex;flex-direction:column;gap:2px">' +
                  '<div>' +
                    '<span style="color:#555;font-weight:500">document.xml</span>' +
                    '<span style="color:var(--muted);font-size:11px;margin-left:8px">' + t.documentDesc + '</span>' +
                  '</div>' +
                  '<div>' +
                    '<span style="color:#555">styles.xml</span>' +
                    '<span style="color:var(--muted);font-size:11px;margin-left:8px">' + t.stylesDesc + '</span>' +
                  '</div>' +
                '</div>' +
              '</div>' +
            '</div>' +

          '</div>' +
        '</div>' +
      '</div>' +

    '</div>';
}
