const {execSync} = require('child_process');

try {
  const gitConfigEmail = execSync('git config user.email').toString().trim();
  const expectedEmail = 'GordeyBITW@gmail.com';
  //   const expectedName = 'PulsarBITW';

  if (gitConfigEmail !== expectedEmail) {
    console.error('Создать коммит можно только с user.email = ', expectedEmail);
    process.exit(1);
  }
} catch (error) {
  console.error('Error checking git config:', error);
  process.exit(1);
}
