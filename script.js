// ===============================
// WAIT FOR PAGE TO LOAD
// ===============================

document.addEventListener("DOMContentLoaded", () => {

    // ===============================
    // INPUT ELEMENTS
    // ===============================

    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const phoneInput = document.getElementById("phone");
    const skillsInput = document.getElementById("skills");
    const educationInput = document.getElementById("education");

    // ===============================
    // PREVIEW ELEMENTS
    // ===============================

    const previewName = document.getElementById("previewName");
    const previewEmail = document.getElementById("previewEmail");
    const previewPhone = document.getElementById("previewPhone");
    const previewSkills = document.getElementById("previewSkills");
    const previewEducation = document.getElementById("previewEducation");
    const previewSummary = document.getElementById("previewSummary");

    // ===============================
    // LIVE PREVIEW
    // ===============================

    nameInput.addEventListener("input", () => {
        previewName.innerText = nameInput.value;
    });

    emailInput.addEventListener("input", () => {
        previewEmail.innerText = emailInput.value;
    });

    phoneInput.addEventListener("input", () => {
        previewPhone.innerText = phoneInput.value;
    });

    skillsInput.addEventListener("input", () => {
        previewSkills.innerText = skillsInput.value;
    });

    educationInput.addEventListener("input", () => {
        previewEducation.innerText = educationInput.value;
    });

    // ===============================
    // AI SUMMARY FUNCTION
    // ===============================

   window.generateSummary = function () {

    const skills =
        skillsInput.value.trim();

    const education =
        educationInput.value.trim();

    if (skills === "" || education === "") {

        alert("Please enter Skills and Education first.");

        return;
    }

    // MULTIPLE AI SUMMARIES

    const summaries = [

        `Highly motivated and passionate student skilled in ${skills}. Currently pursuing ${education} with strong analytical thinking, communication abilities, and dedication toward continuous learning and innovation.`,

        `Detail-oriented and enthusiastic learner with expertise in ${skills}. Pursuing ${education} and capable of solving complex problems through teamwork, creativity, and technical knowledge.`,

        `Aspiring software professional skilled in ${skills} and currently pursuing ${education}. Strong interest in technology, software development, and building innovative solutions with practical applications.`,

        `Self-driven and hardworking student with knowledge of ${skills}. Currently studying ${education} with a passion for modern technologies, leadership, and professional growth.`,

        `Dedicated and adaptable individual skilled in ${skills}. Pursuing ${education} with excellent problem-solving skills and strong enthusiasm for learning advanced technologies and industry practices.`

    ];

    // RANDOM SUMMARY

    const randomIndex =
        Math.floor(Math.random() * summaries.length);

    previewSummary.innerText =
        summaries[randomIndex];

};

    // ===============================
    // PDF DOWNLOAD FUNCTION
    // ===============================

window.downloadPDF = function () {

    const resume =
        document.getElementById("resume");

    const options = {

        margin: 0.3,

        filename: "AI_Resume.pdf",

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
            unit: "mm",
            format: "a4",
            orientation: "portrait"
        },

        pagebreak: {
            mode: ['avoid-all', 'css', 'legacy']
        }

    };

    html2pdf()
        .set(options)
        .from(resume)
        .save();

};

    // ===============================
    // BLUE TEMPLATE
    // ===============================

    window.templateBlue = function () {

        const resume = document.getElementById("resume");

        resume.style.background = "#dbeafe";
        resume.style.color = "black";
    };

    // ===============================
    // DARK TEMPLATE
    // ===============================

    window.templateDark = function () {

        const resume = document.getElementById("resume");

        resume.style.background = "#1f2937";
        resume.style.color = "white";
    };

});