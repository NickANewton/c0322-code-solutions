function graduate(credential) {
  return fullName => {
    return `${fullName}, ${credential}`;
  };
}

const medicalSchool = graduate('M.D.');
const lawSchool = graduate('Esq.');

console.log('Graduate:', medicalSchool('Okabe Rintarou'));
console.log('Graduate:', lawSchool('Makise Kurisu'));
