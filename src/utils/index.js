import { format } from 'date-fns';

const dateToString = (date) => {
  if (!date) {
    return '';
  }
  return format(date, 'yyyy年M月d日 HH時mm分');
};

const translateErrors = (code) => {
  const error = { title: 'エラー', discripion: '時間をおいてお試しください' };
  switch (code) {
    case 'auth/invalid-email':
      error.discripion = 'メールアドレスが不正です';
      break;
    case 'auth/user-disabled':
      error.discripion = 'アカウントが無効です';
      break;
    case 'auth/user-not-found':
      error.discripion = 'ユーザーが見つかりませんでした';
      break;
    case 'auth/wrong-password':
      error.discripion = 'パスワードが間違っています';
      break;
    case 'auth/email-already-in-use':
      error.discripion = 'メールアドレスが使用されています';
      break;
    case 'auth/operation-not-allowed':
      error.discripion = '開発者にお問い合わせください';
      break;
    case 'auth/weak-password':
      error.discripion = 'パスワードが簡単すぎます';
      break;
    default:
  }
  return error;
};

export { dateToString, translateErrors };
