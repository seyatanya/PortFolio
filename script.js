function redirectToAboutMe() {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
}

document.getElementById('call').addEventListener('click', function() {
    alert('Call link clicked');
});

document.getElementById('gmail').addEventListener('click', function() {
    alert('Gmail link clicked');
});
<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>