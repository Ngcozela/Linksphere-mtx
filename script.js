function openCollection(num) {
  alert("Opening Collection " + num + "...");
  // In the future, you could redirect to another page:
  // window.location.href = `collection${num}.html`;
}
// --- AGE VERIFICATION POPUP (only once per visit) ---
window.addEventListener("load", function () {
  const modal = document.getElementById("age-modal");
  const enterBtn = document.getElementById("enter-btn");
  const leaveBtn = document.getElementById("leave-btn");

  // Check if the user has already verified their age
  const verified = localStorage.getItem("ageVerified");

  if (!verified) {
    // Show the popup only if not yet verified
    modal.style.display = "flex";
  }

  enterBtn.addEventListener("click", function () {
    localStorage.setItem("ageVerified", "true"); // remember verification
    modal.style.display = "none"; // hide popup
  });

  leaveBtn.addEventListener("click", function () {
    alert("You must be 18+ to enter this site.");
    window.location.href = "https://www.google.com";
  });
});
