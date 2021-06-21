$(document).ready(function(){
  $('.modal').modal();
});

const PlantDB = "Plants";
let db;

var request = window.indexedDB.open(PlantDB, 1);

request.onerror = function(event) {
  console.log(event)
};
request.onupgradeneeded = function(event) {
    console.log(event.target)
  db = event.target.result;

  // Create an objectStore to hold information about our customers.
  const objectStore = db.createObjectStore("OffLine", { autoIncrement: true});
  
  // Create an index to search customers by name. We may have duplicates
  // so we can't use a unique index.
  objectStore.createIndex("title", "title", { unique: false });
  objectStore.createIndex("notes", "notes", { unique: false });


  // Use transaction oncomplete to make sure the objectStore creation is
  // finished before adding data into it.
};




$(".submit").on("click", function(){
  let obj ={
    title: $(".title").val(),
    notes: $(".note").val()
  }

  if(navigator.onLine === true){
    $.ajax("/post", {
      method: "POST",
      data: obj,
    }).then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
  }else{
    console.log("test")
    const transaction = db.transaction(["OffLine"], "readwrite").objectStore("OffLine")
    transaction.add({title: obj.title, notes: obj.notes})
  }
})
// // GetAll
// const handleOtherClick = (event) => {
//     const transaction = db.transaction(["offLine"], "readwrite").objectStore("offLine")
//     let plants = transaction.getAll()
//     console.log(plants)
// }