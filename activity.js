/* global Postmonger */
(function () {
  const connection = new Postmonger.Session();
  let payload = null;

  connection.on('initActivity', function (data) {
    payload = data;

    // Si no existe, créalo
    payload.metaData = payload.metaData || {};
    payload.metaData.isConfigured = true;

    // IMPORTANTE: esto “desbloquea” a Journey Builder
    connection.trigger('updateActivity', payload);
    connection.trigger('ready');
  });

  // Journey Builder pide guardar
  connection.on('requestedInteraction', function () {
    connection.trigger('updateActivity', payload);
  });

  // Por si pide tokens (aunque no uses)
  connection.on('requestedTokens', function () {
    connection.trigger('setTokens', {});
  });

  // Arranca handshake
  connection.trigger('ready');
})();
