export const updateValidation = (type, valueOne, valueTwo, names) => {
  if (type === "newPassword") {
    if (valueOne !== valueTwo) {
      return ["error", `Les mots de passe ne correspondent pas `];
    }
    return ["success"];
  } else if (type === "newAccount") {
    if (names.indexOf(valueOne) !== -1) {
      return [
        "error",
        `L'utilisateur existe déjà
      `,
      ];
    }
    return ["success"];
  }
};

export const protectedRoutes = () => {
  if (localStorage.getItem("id") === "undefined") {
    window.location.assign("/");
  }
};
