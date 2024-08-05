require('dotenv').config({path: './.env.local'});
const {execSync} = require('child_process');

function checkUserEmail(email) {
  if (!email || !email.length) {
    console.error('userEmail не указан ');
    process.exit(1);
  }
  try {
    const gitConfigEmail = execSync('git config user.email').toString().trim();

    console.log('account email -> ', email);
    if (gitConfigEmail !== email) {
      console.error('Создать коммит можно только с user.email = ', email);
      process.exit(1);
    }
  } catch (error) {
    console.error('Error checking git config:', error);
    process.exit(1);
  }
}

function checkUserName(name) {
  if (!name || !name.length) {
    console.error('userName не указан ');
    process.exit(1);
  }

  try {
    const gitConfigName = execSync('git config user.name').toString().trim();
    if (gitConfigName !== name) {
      console.error('Создать коммит можно только с user.name = ', name);
      process.exit(1);
    }
  } catch (error) {
    console.error('Error checking git config:', error);
    process.exit(1);
  }
}

// pre-commit
function checkCongifBeforeCommit() {
  const CONFIG = {
    userEmail: process.env.USER_EMAIL,
    userName: process.env.USER_NAME,
  };
  console.log('check config', CONFIG);

  checkUserEmail(CONFIG.userEmail);
  checkUserName(CONFIG.userName);
}

checkCongifBeforeCommit();
