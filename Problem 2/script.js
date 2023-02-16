

  const total_classes = parseInt(prompt("Enter total classes:"));
const attended_classes = parseInt(prompt("Enter attended classes:"));
const medical_cause = prompt("Do you have medical cause (Y/N):").toUpperCase();

const attendance = attended_classes / total_classes * 100;

if (medical_cause === "Y") {
  if (attendance >= 60) {
    console.log(true);
  } else {
    console.log(false);
  }
} else if (medical_cause === "N") {
  if (attendance >= 75) {
    console.log(true);
  } else {
    console.log(false);
  }
} else {
  console.log("Invalid input for medical cause. Enter 'Y' or 'N'.");
}