let password = prompt("Hva er passordet?");

// Sjekk om passordet er riktig
if (password === "pizza") {
    alert("Velkommen!");
    // Riktig passord, brukeren får fortsette
} else {
    alert("Feil passord! Du vil bli kastet ut.");
    window.location.href = "https://www.google.com"; // Send brukeren til Google
}