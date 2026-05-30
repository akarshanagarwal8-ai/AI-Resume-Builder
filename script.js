// =====================================
// ELEMENTS
// =====================================

const inputs = document.querySelectorAll(
  "input, textarea"
);

// =====================================
// LIVE PREVIEW
// =====================================

inputs.forEach((input) => {
  input.addEventListener(
    "input",
    updateResume
  );
});

// =====================================
// UPDATE RESUME
// =====================================

function updateResume() {

  // PERSONAL

  document.getElementById(
    "previewName"
  ).innerText =
    document.getElementById("name").value ||
    "Your Name";

  document.getElementById(
    "previewEmail"
  ).innerText =
    document.getElementById("email").value ||
    "Email Address";

  document.getElementById(
    "previewPhone"
  ).innerText =
    document.getElementById("phone").value ||
    "Phone Number";

  document.getElementById(
    "previewLinkedin"
  ).innerText =
    document.getElementById("linkedin").value ||
    "LinkedIn Profile";

  document.getElementById(
    "previewGithub"
  ).innerText =
    document.getElementById("github").value ||
    "GitHub Profile";

  document.getElementById(
    "previewLocation"
  ).innerText =
    document.getElementById("location").value ||
    "Location";

  // =====================================
  // EDUCATION
  // =====================================

  const college =
    document.getElementById("college").value;

  const degree =
    document.getElementById("degree").value;

  const cgpa =
    document.getElementById("cgpa").value;

  const year =
    document.getElementById("year").value;

  document.getElementById(
    "previewEducation"
  ).innerText =
    `${degree} | ${college} | CGPA: ${cgpa} | ${year}`;

  // =====================================
  // SUMMARY
  // =====================================

  document.getElementById(
    "previewSummary"
  ).innerText =
    document.getElementById("summary").value ||
    "Professional Summary";

  // =====================================
  // SKILLS
  // =====================================

  document.getElementById(
    "previewSkills"
  ).innerText =
    document.getElementById("skills").value ||
    "Skills";

  // =====================================
  // EXPERIENCE
  // =====================================

  document.getElementById(
    "previewExperience"
  ).innerText =
    document.getElementById("experience").value ||
    "Experience";

  // =====================================
  // PROJECTS
  // =====================================

  document.getElementById(
    "previewProjects"
  ).innerText =
    document.getElementById("projects").value ||
    "Projects";

  // =====================================
  // CERTIFICATIONS
  // =====================================

  document.getElementById(
    "previewCertifications"
  ).innerText =
    document.getElementById("certifications").value ||
    "Certifications";

  // =====================================
  // ACHIEVEMENTS
  // =====================================

  document.getElementById(
    "previewAchievements"
  ).innerText =
    document.getElementById("achievements").value ||
    "Achievements";

  // =====================================
  // LANGUAGES
  // =====================================

  document.getElementById(
    "previewLanguages"
  ).innerText =
    document.getElementById("languages").value ||
    "Languages";

  // =====================================
  // INTERESTS
  // =====================================

  document.getElementById(
    "previewInterests"
  ).innerText =
    document.getElementById("interests").value ||
    "Interests";

  // =====================================
  // ATS SCORE
  // =====================================

  calculateATS();
}

// =====================================
// ATS SCORE CALCULATION
// =====================================

function calculateATS() {

  let score = 0;

  if (
    document.getElementById("name").value
  ) score += 10;

  if (
    document.getElementById("email").value
  ) score += 10;

  if (
    document.getElementById("phone").value
  ) score += 10;

  if (
    document.getElementById("summary").value
  ) score += 15;

  if (
    document.getElementById("skills").value
  ) score += 15;

  if (
    document.getElementById("experience").value
  ) score += 10;

  if (
    document.getElementById("projects").value
  ) score += 15;

  if (
    document.getElementById("certifications").value
  ) score += 5;

  if (
    document.getElementById("achievements").value
  ) score += 5;

  if (
    document.getElementById("languages").value
  ) score += 5;

  document.getElementById(
    "strengthBar"
  ).style.width = score + "%";

  document.getElementById(
    "strengthText"
  ).innerText = score + "%";
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
    function (event) {

      const file =
        event.target.files[0];

      if (!file) return;

      const reader =
        new FileReader();

      reader.onload =
        function () {

          document.getElementById(
            "previewImage"
          ).src = reader.result;
        };

      reader.readAsDataURL(file);
    }
  );
}

// =====================================
// DARK MODE
// =====================================

function toggleDarkMode() {

  document.body.classList.toggle(
    "dark"
  );
}

// =====================================
// SCROLL TO BUILDER
// =====================================

function scrollToBuilder() {

  const builder =
    document.getElementById(
      "builderSection"
    );

  if (builder) {

    builder.scrollIntoView({
      behavior: "smooth"
    });

  }
}
// =====================================
// PDF DOWNLOAD
// =====================================

function downloadPDF() {

  const resume =
    document.getElementById("resume");

  const options = {

    margin: 0.2,

    filename:
      "Akarshan_Resume.pdf",

    image: {
      type: "jpeg",
      quality: 1
    },

    html2canvas: {
      scale: 3,
      useCORS: true,
      scrollY: 0
    },

    jsPDF: {
      unit: "in",
      format: "a4",
      orientation: "portrait"
    },

    pagebreak: {
      mode: [
        "avoid-all",
        "css",
        "legacy"
      ]
    }

  };

  html2pdf()
    .set(options)
    .from(resume)
    .save();
}

// =====================================
// TEMPLATE SYSTEM
// =====================================

function changeTemplate(type) {

  const resume =
    document.getElementById(
      "resume"
    );

  resume.classList.remove(
    "template-modern",
    "template-corporate",
    "template-creative",
    "template-minimal",
    "template-executive"
  );

  if (type === "modern") {

    resume.classList.add(
      "template-modern"
    );

  }

  else if (
    type === "corporate"
  ) {

    resume.classList.add(
      "template-corporate"
    );

  }

  else if (
    type === "creative"
  ) {

    resume.classList.add(
      "template-creative"
    );

  }

  else if (
    type === "minimal"
  ) {

    resume.classList.add(
      "template-minimal"
    );

  }

  else if (
    type === "executive"
  ) {

    resume.classList.add(
      "template-executive"
    );

  }

}

// =====================================
// PROFESSIONAL AI SUMMARY
// =====================================

function generateSummary() {

  const name =
    document.getElementById(
      "name"
    ).value;

  const degree =
    document.getElementById(
      "degree"
    ).value;

  const skills =
    document.getElementById(
      "skills"
    ).value;

  const project =
    document.getElementById(
      "projects"
    ).value;

  const summaries = [

`${name} is a highly motivated ${degree} student with expertise in ${skills}. Passionate about software development, innovation, and solving real-world problems through technology. Demonstrates strong analytical skills, teamwork, and a commitment to continuous learning.`,

`${name} is a results-driven ${degree} student skilled in ${skills}. Experienced in developing practical projects including ${project}. Seeking opportunities to apply technical expertise while contributing to organizational growth.`,

`${name} is an enthusiastic technology professional with strong knowledge of ${skills}. Possesses problem-solving abilities, leadership qualities, and hands-on project experience. Dedicated to building scalable and impactful software solutions.`,

`${name} combines academic excellence in ${degree} with practical experience in ${skills}. Demonstrates creativity, adaptability, and a strong passion for emerging technologies and innovation.`,

`${name} is a detail-oriented and ambitious candidate with expertise in ${skills}. Proven ability to work effectively on technical projects and collaborate with teams to deliver high-quality solutions.`

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
  ).value = randomSummary;

  updateResume();
}
function generateCoverLetter() {

const name =
document.getElementById("name").value;

const degree =
document.getElementById("degree").value;

const skills =
document.getElementById("skills").value;

const letter =

`Dear Hiring Manager,

I am writing to express my interest in opportunities that align with my academic background in ${degree}.

My expertise includes ${skills}. I am passionate about solving problems, learning new technologies, and contributing effectively to organizational success.

I would welcome the opportunity to discuss how my skills and enthusiasm can benefit your team.

Sincerely,
${name}`;

document.getElementById(
"coverLetter"
).value = letter;

}

function analyzeKeywords() {

const skills =
document.getElementById(
"skills"
).value.toLowerCase();

const jd =
document.getElementById(
"jobDescription"
).value.toLowerCase();

let score = 0;

const keywords = [

"java",
"python",
"sql",
"javascript",
"react",
"machine learning",
"html",
"css",
"git"

];

keywords.forEach((word)=>{

if(
skills.includes(word)
&&
jd.includes(word)
){

score += 10;

}

});

alert(
"ATS Keyword Match: "
+
score
+
"%"
);

}

// =====================================
// GEMINI AI API FUNCTION
// =====================================

async function generateRealAISummary() {

  const name =
    document.getElementById(
      "name"
    ).value;

  const degree =
    document.getElementById(
      "degree"
    ).value;

  const skills =
    document.getElementById(
      "skills"
    ).value;

  const projects =
    document.getElementById(
      "projects"
    ).value;

  const prompt =

`Generate a professional ATS-friendly resume summary.

Name: ${name}

Degree: ${degree}

Skills: ${skills}

Projects: ${projects}

Write in 4-5 professional lines.`;

  try {

    const response =
      await fetch(
        "YOUR_BACKEND_ENDPOINT",
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json"
          },

          body: JSON.stringify({
            prompt
          })
        }
      );

    const data =
      await response.json();

    document.getElementById(
      "summary"
    ).value =
      data.text;

    updateResume();

  }

  catch (error) {

    console.log(error);

    alert(
      "AI Summary Error"
    );

  }

}

// =====================================
// SAVE RESUME
// =====================================

function saveResume() {

  const data = {

    name:
      document.getElementById(
        "name"
      ).value,

    email:
      document.getElementById(
        "email"
      ).value,

    phone:
      document.getElementById(
        "phone"
      ).value,

    skills:
      document.getElementById(
        "skills"
      ).value,

    summary:
      document.getElementById(
        "summary"
      ).value

  };

  localStorage.setItem(
    "resumeData",
    JSON.stringify(data)
  );

  alert(
    "Resume Saved"
  );

}

// =====================================
// LOAD RESUME
// =====================================

function loadResume() {

  const data = JSON.parse(
    localStorage.getItem(
      "resumeData"
    )
  );

  if (!data) return;

  document.getElementById(
    "name"
  ).value = data.name || "";

  document.getElementById(
    "email"
  ).value = data.email || "";

  document.getElementById(
    "phone"
  ).value = data.phone || "";

  document.getElementById(
    "skills"
  ).value = data.skills || "";

  document.getElementById(
    "summary"
  ).value = data.summary || "";

  updateResume();
}
// =====================================
// CHATBOT OPEN/CLOSE
// =====================================

function toggleChatbot() {

  const chatbot =
    document.getElementById(
      "chatbotContainer"
    );

  chatbot.classList.toggle(
    "hidden"
  );
}

// =====================================
// CHATBOT RESPONSES
// =====================================

async function sendMessage() {

  const input =
    document.getElementById(
      "chatInput"
    );

  const message =
    input.value.trim();

  if (!message) return;

  const chatBox =
    document.getElementById(
      "chatMessages"
    );

  // USER MESSAGE

  chatBox.innerHTML += `

  <div
  class="bg-blue-600 text-white p-3 rounded-xl ml-auto max-w-[80%]">

  ${message}

  </div>

  `;

  input.value = "";

  chatBox.scrollTop =
    chatBox.scrollHeight;

  // BOT TYPING

  chatBox.innerHTML += `

  <div
  id="typingMessage"
  class="bg-gray-100 p-3 rounded-xl max-w-[80%]">

  Typing...

  </div>

  `;

  chatBox.scrollTop =
    chatBox.scrollHeight;

  // SIMPLE LOCAL AI

  let response = "";

  const msg =
    message.toLowerCase();

  if (
    msg.includes("skill")
  ) {

    response =
      "Recommended skills: Java, Python, SQL, Machine Learning, React, Git, Data Structures & Algorithms.";

  }

  else if (
    msg.includes("project")
  ) {

    response =
      "Recommended projects: AI Resume Builder, Face Recognition Attendance System, E-Commerce Website, Renewable Energy Prediction System.";

  }

  else if (
    msg.includes("resume")
  ) {

    response =
      "A strong resume should contain Summary, Education, Skills, Projects, Experience, Certifications and Achievements.";

  }

  else if (
    msg.includes("ats")
  ) {

    response =
      "Improve ATS score by adding measurable achievements, relevant skills, internships, certifications and project details.";

  }

  else if (
    msg.includes("interview")
  ) {

    response =
      "Prepare Introduction, Projects, OOPs, DBMS, SQL, DSA, HR Questions and Internship Experience.";

  }

  else {

    response =
      "I can help with Resume Writing, ATS Optimization, Career Guidance, Projects and Interview Preparation.";

  }

  // REMOVE TYPING

  setTimeout(() => {

    const typing =
      document.getElementById(
        "typingMessage"
      );

    if (typing)
      typing.remove();

    chatBox.innerHTML += `

    <div
    class="bg-gray-100 p-3 rounded-xl max-w-[80%]">

    ${response}

    </div>

    `;

    chatBox.scrollTop =
      chatBox.scrollHeight;

  }, 1000);
}

// =====================================
// ENTER KEY SUPPORT
// =====================================

document.addEventListener(
  "keydown",
  function(event) {

    if (
      event.key === "Enter"
    ) {

      const active =
        document.activeElement;

      if (
        active &&
        active.id === "chatInput"
      ) {

        sendMessage();

      }

    }

  }
);

// =====================================
// AUTO SAVE
// =====================================

setInterval(() => {

  const data = {

    name:
      document.getElementById(
        "name"
      )?.value || "",

    email:
      document.getElementById(
        "email"
      )?.value || "",

    phone:
      document.getElementById(
        "phone"
      )?.value || "",

    linkedin:
      document.getElementById(
        "linkedin"
      )?.value || "",

    github:
      document.getElementById(
        "github"
      )?.value || "",

    location:
      document.getElementById(
        "location"
      )?.value || "",

    college:
      document.getElementById(
        "college"
      )?.value || "",

    degree:
      document.getElementById(
        "degree"
      )?.value || "",

    cgpa:
      document.getElementById(
        "cgpa"
      )?.value || "",

    year:
      document.getElementById(
        "year"
      )?.value || "",

    skills:
      document.getElementById(
        "skills"
      )?.value || "",

    experience:
      document.getElementById(
        "experience"
      )?.value || "",

    projects:
      document.getElementById(
        "projects"
      )?.value || "",

    certifications:
      document.getElementById(
        "certifications"
      )?.value || "",

    achievements:
      document.getElementById(
        "achievements"
      )?.value || "",

    languages:
      document.getElementById(
        "languages"
      )?.value || "",

    interests:
      document.getElementById(
        "interests"
      )?.value || "",

    summary:
      document.getElementById(
        "summary"
      )?.value || ""

  };

  localStorage.setItem(
    "fullResumeData",
    JSON.stringify(data)
  );

}, 5000);

// =====================================
// LOAD ALL DATA
// =====================================

function loadAllData() {

  const data =
    JSON.parse(
      localStorage.getItem(
        "fullResumeData"
      )
    );

  if (!data) return;

  Object.keys(data).forEach(
    (key) => {

      const field =
        document.getElementById(
          key
        );

      if (field) {

        field.value =
          data[key];

      }

    }
  );

  updateResume();
}

// =====================================
// INITIALIZATION
// =====================================

window.onload = () => {

  loadAllData();

  updateResume();

  changeTemplate(
    "modern"
  );

  console.log(
    "AI Resume Builder Loaded Successfully"
  );

};