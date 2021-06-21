
// const PlantDB = "Plants";
// let db;

// var request = window.indexedDB.open(PlantDB, 1);

// request.onerror = function(event) {
//   console.log(event)
// };
// request.onupgradeneeded = function(event) {
//     console.log(event.target)
//   db = event.target.result;

//   // Create an objectStore to hold information about our customers. We're
//   // going to use "ssn" as our key path because it's guaranteed to be
//   // unique - or at least that's what I was told during the kickoff meeting.
//   const objectStore = db.createObjectStore("OffLine", { autoIncrement: true});
  
//   // Create an index to search customers by name. We may have duplicates
//   // so we can't use a unique index.
//   objectStore.createIndex("title", "title", { unique: false });
//   objectStore.createIndex("note", "note", { unique: false });


//   // Use transaction oncomplete to make sure the objectStore creation is
//   // finished before adding data into it.
// };

// // add
// const handleClick = (event) => {
//     console.log(db)
//     const transaction = db.transaction(["OffLine"], "readwrite").objectStore("OffLine")
//     const accessObjectStore = transaction.add({name: "dandylions", img: "urlforimag", note: "this is a note"})
// }
// // GetAll
// const handleOtherClick = (event) => {
//     const transaction = db.transaction(["offLine"], "readwrite").objectStore("offLine")
//     let plants = transaction.getAll()
//     console.log(plants)
// }
    