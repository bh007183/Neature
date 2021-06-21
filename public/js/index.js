const PlantDB = "Notes";
let db;
var request = window.indexedDB.open(PlantDB, 1);

$(document).ready(function(){
  $('.modal').modal();
});

$.get("/all").then(res => {

  for(let i = 0; i< res.length; i++){

    let outer = $("<div>").css("background", "gray").attr("class", "row")
    let col3 = $("<div>").attr({class: "sm3 col"})
    let col9 = $("<div>").attr({class: "sm9 col"})
    let titleTxt = $("<p>").text(`${res[i].title}`)
    let contTxt = $("<p>").text(`${res[i].notes}`)
    $(".container").prepend(
      outer.append(col3.append(titleTxt), col9.append(contTxt)) 
      
    )
  }
}).catch(err => {
  console.log(err)
})


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
  console.log(db)
  if(navigator.onLine === true){
    $.ajax("/post", {
      method: "POST",
      data: obj,
    }).then(res => {
      let outer = $("<div>").css("background", "gray").attr("class", "row")
    let col3 = $("<div>").attr({class: "sm3 col"})
    let col9 = $("<div>").attr({class: "sm9 col"})
    let titleTxt = $("<p>").text(`${res.title}`)
    let contTxt = $("<p>").text(`${res.notes}`)
    $(".container").prepend(
      outer.append(col3.append(titleTxt), col9.append(contTxt)) 
    )
    }).catch(err => {
      console.log(err)
    })
  }else{
    console.log("test")
    console.log(db)

    const transaction = db.transaction(["OffLine"], "readwrite").objectStore("OffLine")
    transaction.add({title: obj.title, notes: obj.notes})

    const gettransaction = db.transaction(["OffLine"], "readwrite").objectStore("OffLine")
    let plants = gettransaction.getAll()
    console.log(plants.result)

    for(let i = 0; i < plants.result.length; i++){
      let outer = $("<div>").css("background", "gray").attr("class", "row")
    let col3 = $("<div>").attr({class: "sm3 col"})
    let col9 = $("<div>").attr({class: "sm9 col"})
    let titleTxt = $("<p>").text(`${plants.result[i].title}`)
    let contTxt = $("<p>").text(`${plants.result[i].notes}`)
    $(".container").prepend(
      outer.append(col3.append(titleTxt), col9.append(contTxt)) 
      
    )
    }
  }
})
