// =====================================
// INPUTS
// =====================================

const inputs = document.querySelectorAll(
  "input, textarea"
);

inputs.forEach((input) => {
  input.addEventListener(
    "input",
    updateResume
  );
});

// =====================================
// UPDATE RESUME LIVE
// =====================================

function updateResume() {

  setText(
    "previewName",
    "name",
    "Your Name"
  );

  setText(
    "previewEmail",
    "email",
    "Email Address"
  );

  setText(
    "previewPhone",
    "phone",
    "Phone Number"
  );

  setText(
    "previewLinkedin",
    "linkedin",
    "LinkedIn Profile"
  );

  setText(
    "previewGithub",
    "github",
    "GitHub Profile"
  );

  setText(
    "previewLocation",
    "location",
    "Location"
  );

  setText(
    "previewSummary",
    "summary",
    "Professional Summary"
  );

  setText(
    "previewSkills",
    "skills",
    "Skills"
  );

  setText(
    "previewExperience",
    "experience",
    "Experience"
  );

  setText(
    "previewProjects",
    "projects",
    "Projects"
  );

  setText(
    "previewCertifications",
    "certifications",
    "Certifications"
  );

  setText(
    "previewAchievements",
    "achievements",
    "Achievements"
  );

  setText(
    "previewLanguages",
    "languages",
    "Languages"
  );

  setText(
    "previewInterests",
    "interests",
    "Interests"
  );

  updateEducation();

  calculateATS();

  saveAutomatically();
}

// =====================================
// HELPER
// =====================================

function setText(
  previewId,
  inputId,
  defaultText
) {

  const preview =
    document.getElementById(
      previewId
    );

  const input =
    document.getElementById(
      inputId
    );

  if (!preview || !input) return;

  preview.innerText =
    input.value || defaultText;
}

// =====================================
// EDUCATION
// =====================================

function updateEducation() {

  const college =
    document.getElementById(
      "college"
    )?.value || "";

  const degree =
    document.getElementById(
      "degree"
    )?.value || "";

  const cgpa =
    document.getElementById(
      "cgpa"
    )?.value || "";

  const year =
    document.getElementById(
      "year"
    )?.value || "";

  const educationText =

`${degree}
${college}
CGPA: ${cgpa}
Passing Year: ${year}`;

  const preview =
    document.getElementById(
      "previewEducation"
    );

  if (preview)
    preview.innerText =
      educationText;
}

// =====================================
// ATS SCORE
// =====================================

function calculateATS() {

  let score = 0;

  const fields = [

    "name",
    "email",
    "phone",
    "summary",
    "skills",
    "experience",
    "projects",
    "certifications",
    "achievements",
    "languages"

  ];

  fields.forEach((field) => {

    const value =
      document.getElementById(
        field
      )?.value;

    if (
      value &&
      value.trim() !== ""
    ) {

      score += 10;

    }

  });

  if (score > 100)
    score = 100;

  const bar =
    document.getElementById(
      "strengthBar"
    );

  const text =
    document.getElementById(
      "strengthText"
    );

  if (bar)
    bar.style.width =
      score + "%";

  if (text)
    text.innerText =
      score + "%";
}

// =====================================
// IMAGE UPLOAD
// =====================================

const imageUpload =
document.getElementById(
  "imageUpload"
);

if (imageUpload) {

imageUpload.addEventListener(
"change",
function(event){

const file =
event.target.files[0];

if(!file) return;

const reader =
new FileReader();

reader.onload =
function(){

const image =
document.getElementById(
"previewImage"
);

if(image){

image.src =
reader.result;

}

};

reader.readAsDataURL(
file
);

}
);

}

// =====================================
// AI SUMMARY
// =====================================

function generateSummary() {

const name =
document.getElementById(
"name"
)?.value || "";

const degree =
document.getElementById(
"degree"
)?.value || "";

const skills =
document.getElementById(
"skills"
)?.value || "";

const summaries = [

`${name} is a highly motivated ${degree} student with expertise in ${skills}. Passionate about building impactful software solutions and continuously improving technical skills.`,

`${name} is a results-driven ${degree} student skilled in ${skills}. Strong problem-solving ability with hands-on project experience and leadership qualities.`,

`${name} is an enthusiastic technology professional with knowledge of ${skills}. Dedicated to innovation, teamwork, and delivering high-quality solutions.`,

`${name} combines academic excellence in ${degree} with practical experience in ${skills}. Seeking opportunities to contribute to real-world projects.`

];

const randomSummary =

summaries[
Math.floor(
Math.random() *
summaries.length
)
];

document.getElementById(
"summary"
).value =
randomSummary;

updateResume();

}

// =====================================
// PDF DOWNLOAD
// =====================================

function downloadPDF() {

const resume =
document.getElementById(
"resume"
);

if(!resume) return;

const options = {

margin:0.2,

filename:
"Akarshan_Resume.pdf",

image:{
type:"jpeg",
quality:1
},

html2canvas:{
scale:3
},

jsPDF:{
unit:"in",
format:"a4",
orientation:"portrait"
}

};

html2pdf()
.set(options)
.from(resume)
.save();

}

// =====================================
// DARK MODE
// =====================================

function toggleDarkMode(){

document.body.classList.toggle(
"dark"
);

}

// =====================================
// TEMPLATE SWITCHER
// =====================================

function changeTemplate(type){

const resume =
document.getElementById(
"resume"
);

if(!resume) return;

resume.style.borderTop =
"10px solid #2563eb";

if(type==="modern"){

resume.style.background =
"white";

resume.style.color =
"#111827";

}

if(type==="corporate"){

resume.style.background =
"#f3f4f6";

resume.style.color =
"#111827";

resume.style.borderTop =
"10px solid #111827";

}

if(type==="creative"){

resume.style.background =
"linear-gradient(to bottom right,#f3e8ff,#ffffff)";

resume.style.color =
"#4c1d95";

resume.style.borderTop =
"10px solid #7c3aed";

}

}

// =====================================
// SAVE DATA
// =====================================

function saveAutomatically(){

const data = {

name:
document.getElementById("name")?.value || "",

email:
document.getElementById("email")?.value || "",

phone:
document.getElementById("phone")?.value || "",

linkedin:
document.getElementById("linkedin")?.value || "",

github:
document.getElementById("github")?.value || "",

location:
document.getElementById("location")?.value || "",

college:
document.getElementById("college")?.value || "",

degree:
document.getElementById("degree")?.value || "",

cgpa:
document.getElementById("cgpa")?.value || "",

year:
document.getElementById("year")?.value || "",

summary:
document.getElementById("summary")?.value || "",

skills:
document.getElementById("skills")?.value || "",

experience:
document.getElementById("experience")?.value || "",

projects:
document.getElementById("projects")?.value || "",

certifications:
document.getElementById("certifications")?.value || "",

achievements:
document.getElementById("achievements")?.value || "",

languages:
document.getElementById("languages")?.value || "",

interests:
document.getElementById("interests")?.value || ""

};

localStorage.setItem(
"resumeData",
JSON.stringify(data)
);

}

// =====================================
// LOAD DATA
// =====================================

function loadResume(){

const data =
JSON.parse(
localStorage.getItem(
"resumeData"
)
);

if(!data) return;

Object.keys(data).forEach(
(key)=>{

const field =
document.getElementById(
key
);

if(field){

field.value =
data[key];

}

}
);

updateResume();

}

// =====================================
// CHATBOT
// =====================================

function toggleChatbot(){

const chatbot =
document.getElementById(
"chatbotContainer"
);

if(chatbot){

chatbot.classList.toggle(
"hidden"
);

}

}

function sendMessage(){

const input =
document.getElementById(
"chatInput"
);

if(!input) return;

const message =
input.value.trim();

if(message==="")
return;

const chat =
document.getElementById(
"chatMessages"
);

chat.innerHTML += `

<div class="bot-message">

👤 ${message}

</div>

`;

let reply = "";

const msg =
message.toLowerCase();

if(msg.includes("resume")){

reply =
"A strong resume should include Summary, Skills, Projects, Experience and Certifications.";

}
else if(msg.includes("project")){

reply =
"Recommended projects: AI Resume Builder, Face Recognition System, Portfolio Website, Renewable Energy Prediction.";

}
else if(msg.includes("skill")){

reply =
"Recommended skills: Java, Python, SQL, Machine Learning, React, Git and DSA.";

}
else if(msg.includes("interview")){

reply =
"Prepare OOPs, DBMS, SQL, DSA, Projects and HR Questions.";

}
else{

reply =
"I can help with Resume Building, ATS Optimization, Projects and Career Guidance.";

}

setTimeout(()=>{

chat.innerHTML += `

<div class="bot-message">

🤖 ${reply}

</div>

`;

chat.scrollTop =
chat.scrollHeight;

},500);

input.value="";

}

// =====================================
// ENTER SUPPORT
// =====================================

document.addEventListener(
"keydown",
function(e){

if(
e.key==="Enter" &&
document.activeElement.id==="chatInput"
){

sendMessage();

}

}
);

// =====================================
// SCROLL BUTTON
// =====================================

function scrollToBuilder(){

const section =
document.getElementById(
"builderSection"
);

if(section){

section.scrollIntoView({
behavior:"smooth"
});

}

}

// =====================================
// START
// =====================================

window.onload = function(){

loadResume();

updateResume();

console.log(
"AI Resume Builder Loaded"
);

};