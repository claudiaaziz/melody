import { login } from "../store/session"

export const loginGuest = async (setErrors, setCredential, setPassword, dispatch) => {
  setErrors([]);
  setCredential("");
  setPassword("");

  // typing effect
  const typingEffect = async (credential, setCredential) => {
    for (const char of credential) {
      // typing in the credential one char at a time
      await new Promise((resolve) =>
        setTimeout(() => {
          setCredential((prev) => prev + char);
          resolve();
        }, 30)
      );
    }
  };

  await typingEffect("guest@guest.com", setCredential);
  await typingEffect("guestpassword", setPassword);

  // login guest after typing effect is complete
  const guestCredentials = {
    credential: "guest@guest.com",
    password: "guestpassword",
  };
  await new Promise((resolve) => setTimeout(resolve, 300)); // short pause
  dispatch(login(guestCredentials));
};

