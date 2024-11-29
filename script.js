document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();

    const dogName = document.getElementById('dog-name').value;
    const birthdate = new Date(document.getElementById('dog-birthdate').value);

    const today = new Date();
    let ageInYears = today.getFullYear() - birthdate.getFullYear();

    const hasHadBirthday = today.getMonth() > birthdate.getMonth() || (today.getMonth() === birthdate.getMonth() && today.getDate() >= birthdate.getDate());

    if (!hasHadBirthday){
        ageInYears -= 1;
    }

    const humanAge = ageInYears * 7;

    alert(`${dogName} is ${humanAge} years old in human years.`);
});