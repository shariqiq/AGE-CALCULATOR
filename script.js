function calculateAge() {
    const day = document.getElementById("day").value;
    const month = document.getElementById("month").value;
    const year = document.getElementById("year").value;

    if (day === "" || month === "" || year === "") {
        document.getElementById("result").innerHTML = "Please fill in all fields!";
        return;
    }

    const birthDate = new Date(year, month - 1, day);
    const today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    document.getElementById("result").innerHTML = `You are ${age} years old.`;
}
