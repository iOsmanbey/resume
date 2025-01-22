
document.addEventListener("DOMContentLoaded", () => {
  // Job Title Carousel
  const jobElement = document.querySelector(".job");
  const jobTitles = ["English Teacher", "Web Developer", "Korean Teacher"];
  let currentIndex = 0;

  function updateJobs() {
    currentIndex = (currentIndex + 1) % jobTitles.length;
    const newOrder = jobTitles.slice(currentIndex).concat(jobTitles.slice(0, currentIndex));
    jobElement.textContent = newOrder.join(", ");
  }

  // // Initialize job display
  // jobElement.textContent = jobTitles.join(", ");
  // setInterval(updateJobs, 300);



  

  const typed = new Typed (".job", {
    strings: ["Front-end Developer","FilmMaker","an English teacher", "a Korean  Teacher"],
    typeSpeed: 100,
    backSpeed: 10,
    typeDelay: 1000,
    loop: true
 });



  // Resume Download
  document.getElementById("downloadBtn").addEventListener("click", () => {
    const resume = document.querySelector(".resume"); // Select the resume container
    const options = {
      margin: 1, // Adjust margins if needed
      filename: 'Resume.pdf', // PDF file name
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm', format: [223.23, 297], orientation: 'portrait' } // Custom width (50px wider) and A4 height
    };
  
    // Convert HTML to PDF
    html2pdf().set(options).from(resume).save();
  });

  // Skill Bar Animation
  $(".skills-prog li").find(".skills-bar").each(function (i) {
    $(this)
      .find(".bar")
      .delay(i * 150)
      .animate(
        {
          width: $(this).closest("[data-percent]").attr("data-percent") + "%",
        },
        1000,
        "linear"
      );
  });

  $(".skills-soft li").find("svg").each(function (i) {
    const circle = $(this).children(".cbar");
    const r = circle.attr("r");
    const c = Math.PI * (r * 2);
    const percent = $(this).parent().data("percent");
    const cbar = ((100 - percent) / 100) * c;

    circle.css({
      "stroke-dashoffset": c,
      "stroke-dasharray": c,
    });

    circle.delay(i * 150).animate(
      {
        strokeDashoffset: cbar,
      },
      1000,
      "linear"
    );

    $(this)
      .siblings("small")
      .prop("Counter", 0)
      .delay(i * 150)
      .animate(
        {
          Counter: percent,
        },
        {
          duration: 1000,
          step: function (now) {
            $(this).text(Math.ceil(now) + "%");
          },
        }
      );
  });
});