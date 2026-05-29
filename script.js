// INPUTS

const inputs = document.querySelectorAll(
  "input, textarea"
);

// LIVE UPDATE

inputs.forEach((input) => {
  input.addEventListener("input", updateResume);
});

// UPDATE RESUME

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
    "Email";

  document.getElementById(
    "previewPhone"
  ).innerText =
    document.getElementById("phone").value ||
    "Phone";

  document.getElementById(
    "previewLinkedin"
  ).innerText =
    document.getElementById("linkedin").value ||
    "LinkedIn";

  document.getElementById(
    "previewGithub"
  ).innerText =
    document.getElementById("github").value ||
    "GitHub";

  document.getElementById(
    "previewLocation"
  ).innerText =
    document.getElementById("location").value ||
    "Location";

  // EDUCATION

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

  // OTHER

  document.getElementById(
    "previewSkills"
  ).innerText =
    document.getElementById("skills").value;

  document.getElementById(
    "previewExperience"
  ).innerText =
    document.getElementById("experience").value;

  document.getElementById(
    "previewProjects"
  ).innerText =
    document.getElementById("projects").value;

  document.getElementById(
    "previewCertifications"
  ).innerText =
    document.getElementById("certifications").value;

  document.getElementById(
    "previewSummary"
  ).innerText =
    document.getElementById("summary").value;

  // STRENGTH

  let strength = 0;

  if (document.getElementById("name").value)
    strength += 10;

  if (document.getElementById("email").value)
    strength += 10;

  if (document.getElementById("phone").value)
    strength += 10;

  if (document.getElementById("skills").value)
    strength += 20;

  if (document.getElementById("projects").value)
    strength += 20;

  if (document.getElementById("experience").value)
    strength += 10;

  if (document.getElementById("summary").value)
    strength += 20;

  document.getElementById(
    "strengthBar"
  ).style.width = strength + "%";

  document.getElementById(
    "strengthText"
  ).innerText = strength + "%";
}

// AI SUMMARY

function generateSummary() {

  const name =
    document.getElementById("name").value;

  const skills =
    document.getElementById("skills").value;

  const degree =
    document.getElementById("degree").value;

  const summaries = [

    `${name} is a highly motivated ${degree} student with strong expertise in ${skills}. Passionate about innovation, problem-solving, and building impactful solutions.`,

    `Enthusiastic ${degree} graduate skilled in ${skills}. Dedicated to delivering high-quality work and continuously improving technical knowledge.`,

    `${name} is a creative and detail-oriented individual with experience in ${skills}. Seeking opportunities to contribute and grow professionally.`,

    `Passionate ${degree} student with knowledge of ${skills}. Strong communication and analytical skills with a focus on professional growth.`

  ];

  const randomSummary =
    summaries[
      Math.floor(
        Math.random() * summaries.length
      )
    ];

  document.getElementById(
    "summary"
  ).value = randomSummary;

  updateResume();
}

// PDF DOWNLOAD

function downloadPDF() {

  const resume =
    document.getElementById("resume");

  const options = {

    margin: 0.5,

    filename: "Resume.pdf",

    image: {
      type: "jpeg",
      quality: 1,
    },

    html2canvas: {
      scale: 2,
      useCORS: true,
    },

    jsPDF: {
      unit: "in",
      format: "a4",
      orientation: "portrait",
    },
  };

  html2pdf().set(options).from(resume).save();
}

// DARK MODE

function toggleDarkMode() {

  document.body.classList.toggle("dark");
}

// TEMPLATE CHANGE

function changeTemplate(type) {

  const resume =
    document.getElementById("resume");

  // MODERN

  if (type === "modern") {

    resume.style.background =
      "white";

    resume.style.color =
      "black";

    resume.style.borderTop =
      "10px solid #2563eb";
  }

  // CORPORATE

  else if (type === "corporate") {

    resume.style.background =
      "#f3f4f6";

    resume.style.color =
      "#111827";

    resume.style.borderTop =
      "10px solid #111827";
  }

  // CREATIVE

  else if (type === "creative") {

    resume.style.background =
      "linear-gradient(to bottom right, #fdf2f8, #ede9fe)";

    resume.style.color =
      "#4c1d95";

    resume.style.borderTop =
      "10px solid #7c3aed";
  }
}

// IMAGE UPLOAD

document
  .getElementById("imageUpload")
  .addEventListener("change", function(event) {

    const file =
      event.target.files[0];

    const reader =
      new FileReader();

    reader.onload = function() {

      document.getElementById(
        "previewImage"
      ).src = reader.result;
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  });

// INITIAL UPDATE

updateResume();