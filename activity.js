/* global Postmonger */
(function () {
  const session = new Postmonger.Session();
  let activity = null;

  // Journey Builder espera este "ready"
  session.trigger("ready");

  // Recibe el payload de la activity
  session.on("initActivity", (data) => {
    activity = data;
  });

  // Cuando el usuario aprieta Done en tu botón
  function finish() {
    if (!activity) return;

    // Marcar como configurada (CRÍTICO para que JB no reclame)
    activity.metaData = activity.metaData || {};
    activity.metaData.isConfigured = true;

    session.trigger("updateActivity", activity);
    session.trigger("done");
  }

  // Journey Builder también dispara clickedNext/clickedBack en algunos flujos
  session.on("clickedNext", finish);
  session.on("clickedBack", () => session.trigger("done"));

  document.getElementById("done").addEventListener("click", finish);
})();
