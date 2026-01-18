function generateSession() {
    // 1. User Settings
    const injury = "hip"; // "hip", "ankle", or "none"
    
    // 2. Define the Workout
    let mainLift = "";
    let focus = "";

    // 3. The Logic (The Brain)
    if (injury === "hip") {
        focus = "Force & Tissue Health";
        // HIP SAFETY: Swapping Back Squat for Trap Bar
        mainLift = "Trap Bar Deadlift (High Handles)";
    } else {
        focus = "Max Velocity";
        mainLift = "Barbell Back Squat";
    }

    // 4. Update the Screen
    document.getElementById("workoutTitle").innerText = focus;
    
    document.getElementById("workoutList").innerHTML = `
        <p><strong>1. Warmup:</strong><br> Iso-Holds (Spanish Squat) x 45s</p>
        <p><strong>2. Main Lift:</strong><br> ${mainLift} <br><span style='color:#FF2800; font-size:12px'>(Hip Safe Variation)</span></p>
        <p><strong>3. Accessory:</strong><br> Glute Bridges 3x10</p>
    `;
}

// Run this once when the page loads
generateSession();
