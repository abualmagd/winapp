import { mybase, removeToken } from "./global";


export async function register(userEmail, userPassword, userName) {
  return await mybase.auth.signUp(
    {
      email: userEmail,
      password: userPassword,
      options: {
        emailRedirectTo: 'https://www.solutrend.com/confirm',
        data: {
          name: userName
        },
      }
    });
}


export async function createNewProfile(userEmail, userName, userId) {
  return await mybase.from('profiles').insert(
    {
      id: userId,
      email: userEmail,
      name: userName,

    }
  );
}



export async function login(userEmail, userPassword) {
  return await mybase.auth.signInWithPassword(
    {
      email: userEmail,
      password: userPassword,
    }
  );
}






export async function authState() {
  mybase.auth.onAuthStateChange((event, session) => {
    if (event === 'SIGNED_OUT' || event === 'USER_DELETED') {
      localStorage.removeItem('my-session');
    } else if (event === 'SIGNED_IN' || event === 'TOKEN_REFRESHED') {
      localStorage.setItem('my-session', JSON.stringify({
        access_token: session.access_token,
        refresh_token: session.refresh_token,
        expires_at: session.expires_at,
      }));
    }
  });
}

export async function restoreSession() {
  if (!window.navigator.onLine) {
    console.log('you are offline', 'no internet');
    return null;
  } else {
    const session = localStorage.getItem('my-session');
    if (session) {
      const { expires_at } = JSON.parse(session);
      const expDate = new Date(expires_at * 1000);
      const now = new Date();

      const diffInMs = expDate - now;
      const diffInMin = Math.floor(diffInMs / (1000 * 60));
      if (diffInMin < 60) {
        const { data, error } = await mybase.auth.refreshSession();
        if (error) {
          removeToken();
          return Error('no session');
        } else {
          localStorage.setItem('my-session', JSON.stringify(data.session));
          return await mybase.auth.setSession(data.session);
        }
      } else {
        return await mybase.auth.setSession(JSON.parse(session));
      }
    } else {
      removeToken();
      return Error('no session');
    }
  }
}



export async function restorePassword(email) {
  return await mybase.auth.resetPasswordForEmail(email, {
    redirectTo: "https://solutrend.com/recover"  //emailredirectto
  });

}


export async function changePassword(newPassword, oldPassword) {
  return await mybase.auth.updateUser({
    password: newPassword,
    oldPassword: oldPassword
  });
}


export async function logMeOut() {
  return mybase.auth.signOut();
}

export async function updatePassword(newPassword) {
  return mybase.auth.updateUser({
    password: newPassword,
  });
}


export async function updateUserEmail(newEmail) {
  return mybase.auth.updateUser({
    email: newEmail,
    options: {
      removeToken
    }
  })
}





export async function signInWithGoogle() {
  return await mybase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: 'https://www.solutrend.com/confirm'
    }
  })

}


export async function signInWithGitHub() {
  return await mybase.auth.signInWithOAuth({
    provider: 'github',
    options: {
      redirectTo: 'https://www.solutrend.com/confirm'
    }
  })
}



export async function setSession(access, refresh) {
  await mybase.auth.setSession({ access_token: access, refresh_token: refresh });
  return await mybase.auth.getUser();
}


