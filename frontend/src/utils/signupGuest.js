import { login } from "../store/session";

export const signupGuest = async (
  setErrors,
  setEmail,
  setUsername,
  setPassword,
  setConfirmPassword,
  dispatch
) => {
  setErrors([]);
  setEmail("");
  setUsername("");
  setPassword("");
  setConfirmPassword("");

  // typing effect
  const typingEffect = async (credential, setCredential) => {
    for (const char of credential) {
      // short delay to simulate typing speed
      await new Promise((resolve) =>
        setTimeout(() => {
          setCredential((prev) => prev + char);
          resolve();
        }, 30)
      );
    }
  };

  await typingEffect("guest@guest.com", setEmail);
  await typingEffect("guest", setUsername);
  await typingEffect("guestpassword", setPassword);
  await typingEffect("guestpassword", setConfirmPassword);

  // login guest after typing effect is complete
  const guestCredentials = {
    credential: "guest@guest.com",
    password: "guestpassword",
  };
  await new Promise((resolve) => setTimeout(resolve, 300)); // short pause
  dispatch(login(guestCredentials));
};
