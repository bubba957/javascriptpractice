// Create variables
let userSubmit;
let userName;
let medieval;
let fairy;
let comedy;
let sciFi;
let romance;
let count = 4;

// Recursive function to count from 6 to 1
const counter = (maxCount) => {
    const recursion = (remain) => {
        if (remain.length === 0) return;
            console.log(remain[0]);
            recursion(remain.slice(1));
    }
    const counts = Array.from({ length: maxCount }, (_, i) => i +1);
    recursion(counts);
}

// Create slideshow with pictures of different options
    slideShow(document.getElementById("slideshow"));

    console.log("Select which of these different themes you would like to build your story on. But be careful as you can only select a certain number of times before you're logged out.");
    console.log(`You can chose between: 
        1. Medieval 
        2. Fairy Tale 
        3. Comedy
        4. Romance`);

// Create select block that submits users choice and after displays the next statement.
    document.getElementById("one").addEventListener("click", function () {
        userSubmit = document.getElementById("first");
        counter(6);
            document.getElementById("second").style.display = "block";
    })

// Ask for users name then display medieval choice
    document.getElementById("two").addEventListener("click", function () {
        userName = document.getElementById("name").value;
        console.log(`The name of the hero will be ${userName}.`);
        document.getElementById("medieval").style.display = "block";
    })

// Ask for users choice then display fairy
    document.getElementById("three").addEventListener("click", function () {
        medieval = document.getElementById("honor").value;
        console.log(`${userName} chose to do it for his/her ${medieval}.`);
        document.getElementById("fairy").style.display = "block";
    })

// Ask for users choice then display comedy
    document.getElementById("four").addEventListener("click", function () {
        fairy = document.getElementById("tiny").value;
        console.log(`${userName} just found out that he/she was very ${fairy}.`);
        document.getElementById("comedy").style.display = "block";
    })

// Ask for users choice then display romance
    document.getElementById("five").addEventListener("click", function () {
        comedy = document.getElementById("duck").value;
        console.log(`${userName} decided to ${comedy}.`);
        document.getElementById("romance").style.display = "block";
    })

// Ask for users choice then display romance
    document.getElementById("six").addEventListener("click", function () {
        romance = document.getElementById("complete").value;
        console.log(`${userName} decided to ${romance} it.`);
        document.getElementById("end").style.display = "block";
    })