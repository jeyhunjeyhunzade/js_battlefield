{
  navigator.serviceWorker
    .register("./serviceWorker.js")
    .then((registration) => {
      Notification.requestPermission().then((status) => {
        if (status === "granted") {
          registration.showNotification("foo");
        }
      });
    });
}

{
  // inside serviceWorker
  self.onnotificationclick = ({ notification }) => {
    console.log("notification click", notification);
  };
  self.onnotificationclose = ({ notification }) => {
    console.log("notification close", notification);
  };
}

{
  // inside serviceWorker
  self.onnotificationclick = ({ notification }) => {
    clients.openWindow("https://foo.com");
  };
}

{
  // Subscribing to Push Events
  navigator.serviceWorker
    .register("./serviceWorker.js")
    .then((registration) => {
      registration.pushManager.subscribe({
        applicationServerKey: key, // derived from server's public key userVisibleOnly: true
      });
    });

  // alternatively
  self.onactivate = () => {
    self.registration.pushManager.subscribe({
      applicationServerKey: key, // derived from server's public key userVisibleOnly: true
    });
  };
}

{
  // handling push events
  self.onpush = (pushEvent) => {
    console.log("Service worker was pushed data:", pushEvent.data.text());
  };
}

{
  // main.js
  navigator.serviceWorker
    .register("./serviceWorker.js")
    .then((registration) => {
      // Request permission to show notifications
      Notification.requestPermission().then((status) => {
        if (status === "granted") {
          // Only subscribe to push messages if // notification permission is granted
          registration.pushManager.subscribe({
            applicationServerKey: key, // derived from server's public key
            userVisibleOnly: true,
          });
        }
      });
    });

  // serviceworker.js
  // When a push event is received, display the data as text // inside a notification.
  self.onpush = (pushEvent) => {
    // Keep the service worker alive until notification promise resolves
    pushEvent.waitUntil(
      self.registration.showNotification(pushEvent.data.text())
    );
  };

  // When a notification is clicked, open relevant application page
  self.onnotificationclick = ({ notification }) => {
    clients.openWindow("https://example.com/clicked­notification");
  };
}
