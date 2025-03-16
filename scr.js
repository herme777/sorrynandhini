 const text = "  Sorry  "; // Base text
        let index = 1;
        let line = "";
        function typeEffect() {
            if (index < 101) {
                line += text ; // Add tab space between words
                
                if (index % 4=== 0) { // After every 4 "Sorry", add a new line
                    document.getElementById("typing").innerHTML += line + "<br>";
                    line = ""; // Reset line for the next batch
                }
                index++;
                // Auto-scroll to the bottom
                window.scrollTo(0, document.body.scrollHeight);
                setTimeout(typeEffect, 100); // Adjust speed here
            } else {
                document.getElementById("typing").style.borderRight = "none"; // Hide cursor after typing
            }
        }
