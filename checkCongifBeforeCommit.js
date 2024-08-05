const {execSync} = require('child_process');

function checkUserEmail(email) {
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
    email: 'GordeyBITW@gmail.com',
    userName: 'PulsarBITW',
  };

  checkUserEmail(CONFIG.email);
  checkUserName(CONFIG.userName);
}

checkCongifBeforeCommit();
