export const inputs = [
  { name: "token", placeHolder: "Link do webhooka" },
  { name: "avatar_link", placeHolder: "Link do avatara (opcjonalne)" },
  { name: "username", placeHolder: "Nazwa użytkownika" },
];

export const embedInputs = [
  {
    name: "embedTitle",
    placeHolder: "Tytuł",
    classes: "form__input form__embed__input",
  },
  {
    name: "embedContent",
    placeHolder: "Treść",
    textArea: true,
    classes: "form__input form__input--textarea form__embed__input",
  },
];
