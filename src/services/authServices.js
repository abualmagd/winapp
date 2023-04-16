import { mybase } from "./global";


export async function register(userEmail, userPassword) {
  await mybase.auth.signUp(
    {
      email: userEmail,
      password: userPassword,
    }
  );
}



export async function login(userEmail, userPassword) {
  await mybase.auth.signInWithPassword(
    {
      email: userEmail,
      password: userPassword,
    }
  );
}

export async function authState() {
  mybase.auth.onAuthStateChange(
    (event, session) => {
      if (event === 'SIGNED_OUT' || event === 'USER_DELETED') {
        const expires = new Date(0).toUTCString()
        document.cookie = `my-session=; path=/; expires=${expires}; SameSite=Lax; secure`
      } else if (event === 'SIGNED_IN' || event === 'TOKEN_REFRESHED') {
        const maxAge = 5 * 365 * 24 * 60 * 60;
        document.cookie = `my-session=${session}; path=/; max-age=${maxAge}; SameSite=Lax; secure`

      }
    }
  );
}

export async function restoreSession() {
  const session = document.cookie.split('; ').find(row => row.startsWith("my-session="))?.split('=')[1];
  if (session) {

    const { expires_at } = session;
    const now = new Date.now() / 1000;
    const timeToExpiry = expires_at - now;
    if (timeToExpiry < 60) {
      const newSession = await mybase.auth.refreshSession();
      await mybase.auth.setSession(newSession);
    } else {
      await mybase.auth.setSession(session);
    }
  } else {
    throw Error("no session");
  }
}

export async function restorePassword(email) {
  await mybase.auth.resetPasswordForEmail(email);

}


export async function changePassword(newPassword, oldPassword) {
  await mybase.auth.updateUser({
    password: newPassword,
    oldPassword: oldPassword
  });
}


