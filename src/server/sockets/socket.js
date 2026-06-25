export function initializeSocketServer(server) {
  return {
    server,
    emit(eventName, payload) {
      console.info(`socket:event:${eventName}`, payload);
    }
  };
}
