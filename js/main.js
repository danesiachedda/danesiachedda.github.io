
// Function borrowed from W3Schools and reworked.
  // I tried to make this work with a hidden text element containing the Discord username but it was giving unexpected issues and I'm stressed!
  // Therefore... I am hard-coding the Discord username into a variable. For now.
  // I will become better at this stuff one day :')

  function copyToClipboard() {
    // Discord Username
    let discordUsername = "danesiachedda";

    // Write Discord Username to the clipboard
    navigator.clipboard.writeText(discordUsername);
    
    // Alert the copied text within the tooltip
    let tooltipPrompt = document.getElementById("copytext-prompt");
    tooltipPrompt.innerHTML = "Copied username: " + discordUsername;
  }
  
  // Change the tooltip prompt back to its default text when the mouse navigates away
  function outFunc() {
    let tooltipPrompt = document.getElementById("copytext-prompt");
    tooltipPrompt.innerHTML = "Copy Discord username";
  }