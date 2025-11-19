function volume_sphere(event) {
    event.preventDefault(); // Prevent form submission and page reload

    // Get the radius input
    const radiusInput = document.getElementById("radius").value;

    // Convert to number
    const radius = parseFloat(radiusInput);

    // Check for invalid input (non-numeric or negative)
    if (isNaN(radius) || radius < 0) {
        document.getElementById("volume").value = "NaN";
        return;
    }

    // Calculate volume: V = (4/3) * π * r^3
    const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

    // Round to 4 decimal places
    document.getElementById("volume").value = volume.toFixed(4);
}

// Attach function to form submit
window.onload = function() {
    document.getElementById('MyForm').onsubmit = volume_sphere;
};
