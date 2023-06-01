import { mybase, removeToken } from "./global";


export async function register(userEmail, userPassword, userName) {
  return await mybase.auth.signUp(
    {
      email: userEmail,
      password: userPassword,
      options: {
        data: {
          name: userName
        }
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
      options: {
        emailRedirectTo: "/confirmed"
      }
    }
  );
}



export async function authState() {
  mybase.auth.onAuthStateChange(
    (event, session) => {
      if (event === 'SIGNED_OUT' || event === 'USER_DELETED') {
        const expires = new Date(0).toUTCString();
        document.cookie = `my-session=; path=/; expires=${expires}; SameSite=Lax; secure`
      } else if (event === 'SIGNED_IN' || event === 'TOKEN_REFRESHED') {
        const maxAge = 100 * 365 * 24 * 60 * 60;
        document.cookie = `my-session=${JSON.stringify(session)}; path=/; max-age=${maxAge}; SameSite=Lax; secure`

      }
    }
  );
}

export async function restoreSession() {
  if (!window.navigator.onLine) {
    console.log('from online', 'no internet')
    return null;
  }
  const session = document.cookie.split('; ').find(row => row.startsWith("my-session="))?.split('=')[1];
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
        return Error('no session')
      } else {
        return await mybase.auth.setSession(data.session);
      }
    } else {
      return await mybase.auth.setSession(session);
    }

  } else {
    removeToken();
    return Error('no session')
  }
}

export async function restorePassword(email) {
  return await mybase.auth.resetPasswordForEmail(email, {
    redirectTo: "http://localhost:3000/recover"
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





