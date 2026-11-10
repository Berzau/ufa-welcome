/* Verbindung der Verwaltung zum GitHub-Repository (wird beim Einrichten eingetragen).
   Der Zugriffstoken steht NICHT hier, sondern wird einmalig in der Verwaltung eingegeben. */
var CONFIG = {
  /* Daten-Repository (dorthin schreibt die Verwaltung). Empfohlen: privates Repository nur für die Daten. */
  github: { owner: "Berzau", repo: "ufa-welcome-data", branch: "main", path: "data.json" },
  /* true  = Daten liegen privat; die Monitore lesen sie über die GitHub-API mit einem Lese-Token (einmal je Monitor eintragen).
     false = Daten liegen im selben (öffentlichen) Repository wie der Code und werden von GitHub Pages ausgeliefert. */
  privateData: true,
  /* Standorte: jeder hat eine eigene Datendatei (Inhalte, Haltestellen, Wetterort, Fußzeile, WLAN).
     Monitor-Adresse je Standort: display.html?site=<id>. Ein Standort: Liste auf einen Eintrag kürzen. */
  sites: [
    { id: "berlin", name: "Berlin, Schöneberger Ufer", file: "data.json" },
    { id: "babelsberg", name: "Babelsberg, Studio 5", file: "data-babelsberg.json" }
  ]
};
