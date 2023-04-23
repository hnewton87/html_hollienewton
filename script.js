const emailLink = document.getElementById('email-link');
const emailAddress = 'h.newton@hotmail.co.uk';

emailLink.addEventListener('click', () => {
  window.location.href = `mailto:${emailAddress}`;
});


const websiteLink = document.getElementById('website-link');
const websiteUrl = 'https://reclayaim.com';

websiteLink.addEventListener('click', () => {
  window.location.href = websiteUrl;
});


// const printButton = document.getElementById('print-button');

// printButton.addEventListener('click', () => {
//   window.print();
// });


const linkedinLink = document.getElementById('linkedin-link')
const linkedinUrl = 'http://www.linkedin.com/';

linkedinLink.addEventListener('click', () => {
  window.open(linkedinUrl);
});