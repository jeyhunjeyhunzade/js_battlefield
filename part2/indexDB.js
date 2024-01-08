let db,
  request,
  version = 1;

request = indexedDB.open("admin", version);
request.onerror = (event) => alert(`Failed to open: ${event.target.errorCode}`);
request.onsuccess = (event) => {
  db = event.target.result;
};

request.onupgradeneeded = (event) => {
  const db = event.target.result;
  // Delete the current objectStore if it exists. This is useful for testing,
  // but this will wipe existing data each time this event handler executes.
  if (db.objectStoreNames.contains("users")) {
    db.deleteObjectStore("users");
  }
  db.createObjectStore("users", { keyPath: "username" });
};

let transaction4Users = db.transaction("users");
let transaction4UsersAndAnotherStore = db.transaction([
  "users",
  "anotherStore",
]);

let transactionWithWriteAccess = db.transaction("users", "readwrite");

//----------------------------------------------------------------
const transaction = db.transaction("users"),
  store = transaction.objectStore("users"),
  request = store.get("007");
request.onerror = (event) => alert("Did not get the object!");
request.onsuccess = (event) => alert(event.target.result.firstName);

transaction.onerror = (event) => {
  // entire transaction was cancelled
};

transaction.oncomplete = (event) => {
  // entire transaction completed successfully
};

// where users is an array of new users
let request,
  requests = [];

for (let user of users) {
  request = store.add(user);
  request.onerror = () => {
    // handle error
  };
  request.onsuccess = () => {
    // handle success
  };
  requests.push(request);
}
