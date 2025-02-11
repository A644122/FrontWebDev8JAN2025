const careerPlans = {
  lawyer: {
    education: [
      "Ages 5-7: Focus on reading, writing, and communication skills.",
      "Ages 8-10: Join debate clubs and public speaking workshops.",
      "Ages 11-12: Participate in mock trials and legal-themed camps.",
      "Ages 13-15: Take advanced English and social studies courses.",
      "Ages 16-17: Enroll in pre-law programs or internships.",
    ],
    skills: [
      "Critical thinking and problem-solving.",
      "Public speaking and debate.",
      "Research and analytical skills.",
    ],
    resources: [
      "Books: 'You Be the Judge' by Sandra Markle.",
      "Online: Khan Academy's Law courses.",
      "Programs: Local debate clubs and youth legal workshops.",
    ],
  },
  doctor: {
    education: [
      "Ages 5-7: Learn basic biology and health through fun activities.",
      "Ages 8-10: Participate in science fairs and STEM clubs.",
      "Ages 11-12: Take introductory biology and chemistry courses.",
      "Ages 13-15: Volunteer at hospitals or clinics.",
      "Ages 16-17: Enroll in pre-med programs or shadow doctors.",
    ],
    skills: [
      "Empathy and communication.",
      "Scientific reasoning and attention to detail.",
      "Problem-solving under pressure.",
    ],
    resources: [
      "Books: 'The Human Body Book' by Steve Parker.",
      "Online: Crash Course Anatomy & Physiology.",
      "Programs: Local science camps and hospital volunteer programs.",
    ],
  },
  engineer: {
    education: [
      "Ages 5-7: Explore building and construction toys like LEGO.",
      "Ages 8-10: Join robotics clubs and coding classes.",
      "Ages 11-12: Take introductory math and science courses.",
      "Ages 13-15: Participate in engineering competitions.",
      "Ages 16-17: Enroll in STEM-focused high school programs.",
    ],
    skills: [
      "Logical thinking and creativity.",
      "Problem-solving and teamwork.",
      "Technical and mathematical skills.",
    ],
    resources: [
      "Books: 'Rosie Revere, Engineer' by Andrea Beaty.",
      "Online: Scratch programming and Khan Academy Math.",
      "Programs: Local robotics clubs and STEM workshops.",
    ],
  },
  trader: {
    education: [
      "Ages 5-7: Learn basic math and money management through games.",
      "Ages 8-10: Play financial literacy games like Monopoly.",
      "Ages 11-12: Take introductory economics and math courses.",
      "Ages 13-15: Participate in stock market simulations.",
      "Ages 16-17: Enroll in finance or business-related programs.",
    ],
    skills: [
      "Analytical and decision-making skills.",
      "Risk assessment and emotional control.",
      "Financial literacy and market analysis.",
    ],
    resources: [
      "Books: 'Rich Kid Smart Kid' by Robert Kiyosaki.",
      "Online: Investopedia and Stock Market Simulators.",
      "Programs: Local finance clubs and youth investment workshops.",
    ],
  },
};

function displayPlan() {
  const career = document.getElementById("careerSelect").value;
  const plan = careerPlans[career];
  const output = document.getElementById("planOutput");

  let html = `<h2>${career.toUpperCase()} Career Plan</h2>`;
  html += `<h3>Educational Pathways:</h3><ul>`;
  plan.education.forEach((step) => (html += `<li>${step}</li>`));
  html += `</ul><h3>Skill Development:</h3><ul>`;
  plan.skills.forEach((skill) => (html += `<li>${skill}</li>`));
  html += `</ul><h3>Resources:</h3><ul>`;
  plan.resources.forEach((resource) => (html += `<li>${resource}</li>`));
  html += `</ul>`;

  output.innerHTML = html;
}
