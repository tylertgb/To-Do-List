const inputBox = document.querySelector('#input-box');
const listContainer = document.querySelector('.list-container');
const favoritesList = document.querySelector('.favorites-list');


function performTask(){
    if(inputBox.value === ''){
        //Show alert message when inputBox is empty
        this.alert('You must write something here!');
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = '\u00d7';
        li.appendChild(span);

        //Display the desciption
        document.querySelector('.description').style.display = "block";
    }
    //Clear inputBox when List is added
    inputBox.value = '';
    saveData() //Tyler Bright
}//133603
//Click event function
function addTask(){
    performTask();
}

//KeyPress(Enter) event function
//Attach the addEvenlistener to the inputBox
inputBox.addEventListener('keydown', function(e){
    // Check the type of Event Object
    if (e.keyCode === 13 || e.key === "Enter"){
        performTask();
    }
});

listContainer.addEventListener('click', function(e){
    if (e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData()
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData()
    }
}, false);

favoritesList.addEventListener('click', function(e){
    if(e.target.tagName === "LI"){
        let li = document.createElement("li");
        li.listContainer = innerHTML.value;
        favoritesList.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = '\u00d7';
        li.appendChild(span);
    }
})


function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML= localStorage.getItem("data");
}
showTask();