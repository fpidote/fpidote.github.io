function getResults(event) {
    event.preventDefault();
    var numSubjects = parseInt(document.getElementById("numSubjects").value);
    var resultContainer = document.getElementById("result");
    resultContainer.innerHTML = "";

    

    for (var i = 1; i <= numSubjects; i++) {
        var marks = prompt("Enter the marks for Subject " + i + ":");

    
        resultContainer.innerHTML += "<p>Subject " + i + " - Marks: " + marks + "</p>";
    }
}