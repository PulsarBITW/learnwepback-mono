require('dotenv').config({path: './.env.local'});
const {execSync} = require('child_process');

function compareFields(gitConfigKey, value) {
  if (!value || !value.length) {
    console.error(`Значение для ${gitConfigKey} не указано в .env.local `);
    process.exit(1);
  }

  try {
    const gitConfigField = execSync(`git config ${gitConfigKey}`).toString().trim();
    console.log(`Поле ${gitConfigKey} =`, value);
    if (gitConfigField !== value) {
      console.error(`Для создания коммита поле ${gitConfigKey} должно быть равно`, value);
      process.exit(1);
    }
  } catch (error) {
    console.error('Error checking git config:', error);
    process.exit(1);
  }
}

// pre-commit
function checkCongifBeforeCommit() {
  const config = {
    'user.email': process.env.USER_EMAIL,
    'user.name': process.env.USER_NAME,
  };
  Object.entries(config).forEach((el) => compareFields(...el));
}

checkCongifBeforeCommit();
