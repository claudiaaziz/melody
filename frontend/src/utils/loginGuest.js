export const typingEffect = async (credential, setCredential) => {
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

export const guestCredentials = {
  credential: "guest@guest.com",
  password: "guestpassword",
};

export const shortPause = async () =>
  await new Promise((resolve) => setTimeout(resolve, 300));