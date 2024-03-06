document.getElementById("savebtn").addEventListener("click", () => {
    const resumeData = {
        name : document.getElementById("fname").value,
        // role : document.getElementById("role").value,
        image : document.getElementById("file").value,
        phone : parseInt(document.getElementById("phone").value),
        email : document.getElementById("email").value,
        link : document.getElementById("link").value,
        github : document.getElementById("git").value,
        address : document.getElementById("add").value,
        technical : document.getElementById("tech").value,
        soft : document.getElementById("soft").value,
        Degree : document.getElementById("degree").value,
        college : document.getElementById("col").value,
        percentage :parseFloat( document.getElementById("per").value),
        obj : document.getElementById("obj").value,
        title : document.getElementById("title1").value,
        projectDes : document.getElementById("des").value,
        certification : document.getElementById("certification").value,
        company : document.getElementById("com").value,
        // techskill2 : document.getElementById("techskill1").value,
        // softskill2 : document.getElementById("softskill1").value,
        jobDes : document.getElementById("jdes").value
    }

    localStorage.setItem('resumeData',JSON.stringify(resumeData));
    console.log("Resume data saved successfully")
});


document.getElementById("genbtn").addEventListener("click", () => {
   
    // Retrieve data from localStorage
    const storedData = localStorage.getItem('resumeData');
    const resumeData = JSON.parse(storedData);

    if(resumeData){
        const gen = window.open("","_blank");
        // Display  name
        const resumePage = gen.document.createElement("div");
        resumePage.innerHTML = `
            <h1>${resumeData.name}</h1>
            <h4>${resumeData.role}</h4><hr>`;

        resumePage.style.textAlign="center";
        gen.document.body.appendChild(resumePage);
       
        // display contact details
        
        let resumePage1 = gen.document.createElement("div");
        resumePage1.innerHTML = `
        <img src='${resumeData.image}'>
        <h2>Contact Details</h2>
        <h6>Phone : ${resumeData.phone}</h6>
        <h6>Email : ${resumeData.email}</h6>
        <h6>Linked In : ${resumeData.link}</h6>
        <h6>Github : ${resumeData.github}</h6>
        <h6>Address : ${resumeData.address}</h6>
        <hr>
        <br>
        <h2>Technical Skills</h2>
        <ul><li> ${resumeData.technical}</li>
        <li> ${resumeData.techskill2}</li></ul>
        <hr>
        <br>
        <h2>Soft Skills</h2>
        <ul><li>${resumeData.soft}</li>
        <li> ${resumeData.softskill2}</li></ul>
        <hr>
        <br>
        <h2>Education</h2>
        <h6>Degree : ${resumeData.degree}</h6>
        <h6>College : ${resumeData.college}</h6>
        <h6>Percentage : ${resumeData.percentage}</h6>
        <hr>`;
        gen.document.body.appendChild(resumePage1);
        
        // display objective
      
        let resumePage5 = gen.document.createElement("div");
       
        resumePage5.innerHTML = `
        <h2>Objective</h2>
        <h6>${resumeData.obj}</h6>
        <hr>
        <br>
        <h2>Projects</h2>
        <h6>Title: ${resumeData.title}</h6>
        <h6>Description : ${resumeData.projectDes}</h6>
        <hr>
        <br><h2>Certification</h2>
        <ul><li>${resumeData.certification}</li></ul>
<hr>
        <br>
        <h2>Work Experience</h2>
        <h6>Company Name : ${resumeData.company}</h6>
        <h6>Job Description : ${resumeData.jobDes}</h6>
        <hr>`;
        gen.document.body.appendChild(resumePage5);

    }
}); 

//add technicalskills
document.getElementById("addTech").addEventListener("click", () => {
    let inputContainer = document.getElementById("technicSkill");
    let input = document.createElement("input");
    input.setAttribute('value','');
    input.type = "text";
    input.placeholder = "Enter a technical skill";
    input.id = "techskill1"
    inputContainer.appendChild(input);

    let removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.addEventListener("click", () => {
        // Remove the entire set of inputs when the "Remove" button is clicked
        inputContainer.removeChild(input);
        inputContainer.removeChild(removeButton);
    });
    inputContainer.appendChild(removeButton);
});

///add soft skill
document.getElementById("addSoft").addEventListener("click", () => {
    let inputContainer = document.getElementById("softSkill");
    let input = document.createElement("input");
    input.type = "text";
    input.setAttribute('value','');
    input.id = "softskill1"
    input.placeholder = "Enter a soft skill";
    inputContainer.appendChild(input);

    let removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.addEventListener("click", () => {
        // Remove the entire set of inputs when the "Remove" button is clicked
        inputContainer.removeChild(input);
        inputContainer.removeChild(removeButton);
    });
    inputContainer.appendChild(removeButton);
});



// document.getElementById("projectAdd").addEventListener("click", () => {
//     let inputContainer = document.getElementById("projrct1");
//     let input = document.createElement("input");
//     input.type = "text";
//     input.placeholder = "Enter a technical skill";
//     inputContainer.appendChild(input);

//     let removeButton = document.createElement("button");
//     removeButton.textContent = "Remove";
//     removeButton.addEventListener("click", () => {
//         // Remove the entire set of inputs when the "Remove" button is clicked
//         inputContainer.removeChild(input);
//         inputContainer.removeChild(removeButton);
//     });
//     inputContainer.appendChild(removeButton);
// });


//add certification
document.getElementById("addCer").addEventListener("click", () => {
    let inputContainer = document.getElementById("certi");
    let input = document.createElement("input");
    input.type = "text";
    input.placeholder = "Enter a certification";
    inputContainer.appendChild(input);

    let removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.addEventListener("click", () => {
        // Remove the entire set of inputs when the "Remove" button is clicked
        inputContainer.removeChild(input);
        inputContainer.removeChild(removeButton);
    });
    inputContainer.appendChild(removeButton);
});