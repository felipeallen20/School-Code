export type ConsoleEntryType = "log" | "info" | "warn" | "error";

export function buildSandboxDocument(code: string): string {
  const serialized = JSON.stringify(code).replace(/<\//g, "<\\/");

  return `<!doctype html>
<html lang="es">
<head>
<meta charset="utf-8">
<style>
html, body { margin: 0; padding: 0; }
</style>
</head>
<body>
<script>
var __codelab_code = ${serialized};

(function () {
  function post(type, text) {
    if (parent && parent.postMessage) {
      parent.postMessage({ __codelab: true, type: type, text: text }, "*");
    }
  }

  function format(value) {
    if (typeof value === "string") return value;
    if (typeof value === "function") return "[function]";
    if (typeof value === "undefined") return "undefined";
    if (typeof value === "symbol") return value.toString();
    if (value instanceof Error) return value.name + ": " + value.message;
    if (typeof value === "object" && value !== null) {
      try {
        return JSON.stringify(value, function (key, val) {
          if (typeof val === "function") return "[function]";
          if (typeof val === "undefined") return "[undefined]";
          if (typeof val === "number") {
            if (Number.isNaN(val)) return "NaN";
            if (val === Infinity) return "Infinity";
            if (val === -Infinity) return "-Infinity";
          }
          return val;
        });
      } catch (e) {
        return String(value);
      }
    }
    return String(value);
  }

  function capture(method, sendType) {
    var original = console[method] ? console[method].bind(console) : null;
    console[method] = function () {
      var parts = Array.prototype.map.call(arguments, format);
      post(sendType || method, parts.join(" "));
      if (original) original.apply(null, arguments);
    };
  }
  capture("log");
  capture("info");
  capture("debug", "log");
  capture("warn");
  capture("error");

  window.addEventListener("error", function (event) {
    var detail = event.lineno || event.colno || null;
    post("error", (detail ? "L\u00ednea " + detail + ": " : "") + (event.message || "Error desconocido"));
    event.preventDefault();
  }, true);

  window.addEventListener("unhandledrejection", function (event) {
    post("error", "Promesa rechazada: " + format(event.reason));
    event.preventDefault();
  });

  try {
    eval(__codelab_code);
  } catch (error) {
    post("error", format(error));
  } finally {
    post("done");
  }
})();
</script>
</body>
</html>`;
}