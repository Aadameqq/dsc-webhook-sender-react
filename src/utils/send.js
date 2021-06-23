import MessageType from "./messageType";
import validate from "./validate";
const inputNames = ["token", "username", "avatar_link", "content"];
const embedInputNames = ["embedTitle", "embedContent", "color", "customColor"];

const send = async (
  e,
  setMessage,
  isEmbedActive,
  isBlockPingActive,
  isCustomColorActive
) => {
  e.preventDefault();
  const elements = e.target.elements;
  let args = {};

  for (let x of elements) {
    if (!inputNames.includes(x.name) && !embedInputNames.includes(x.name))
      continue;

    args[x.name] = x.value;
  }

  if (!args.token)
    return setMessage({
      message: "Nie podałeś linku",
      type: MessageType.ERROR,
    });

  if (!args.token.includes(`discord.com/`))
    return setMessage({
      message: "Podałeś niepoprawny link",
      type: MessageType.ERROR,
    });

  if (validate(setMessage, args.username, "Nazwa użytkownika", 4, 200)) return;

  if (
    !isEmbedActive &&
    ((!isBlockPingActive &&
      validate(setMessage, args.content, "Treść", 4, 200)) ||
      (isBlockPingActive &&
        validate(setMessage, args.content, "Treść", 4, 200, [
          "@everyone",
          "@here",
        ])))
  )
    return;

  if (isEmbedActive && validate(setMessage, args.embedTitle, "Tytuł", 4, 200))
    return;
  if (isEmbedActive && validate(setMessage, args.embedContent, "Treść", 4, 200))
    return;

  const customColorHexRegex = /^#([0-9]|[a-f]){6}$/;

  if (
    (isCustomColorActive &&
      args.customColor.match(customColorHexRegex) === null) ||
    (!isCustomColorActive && args.color === "none")
  )
    return setMessage({
      message: "Nie wybrałeś poprawnego koloru",
      type: MessageType.ERROR,
    });

  const response = await fetch(args.token, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(
      !isEmbedActive
        ? {
            content: args.content,
            username: args.username,
            avatar_url: args.avatar_link,
          }
        : {
            embeds: [
              {
                title: args.embedTitle,
                description: args.embedContent,
                color: args.customColor
                  ? parseInt(args.customColor.replace("#", ""), 16)
                  : args.color,
              },
            ],
            username: args.username,
            avatar_url: args.avatar_link,
          }
    ),
  });
  if (!response.ok) {
    if (response.status.toString().startsWith(4)) {
      return setMessage({
        message: "Nie znaleziono podanego webhooka",
        type: MessageType.ERROR,
      });
    }
    if (response.status.toString().startsWith(5)) {
      return setMessage({
        message:
          "Doszło do błędu podczas łączenia się z webhookiem. Spróbuj ponownie później",
        type: MessageType.ERROR,
      });
    }

    return setMessage({
      message: "Doszło do błędu podczas wysyłania webhooka",
      type: MessageType.ERROR,
    });
  }
  console.log("SENDED");

  setMessage({ message: "Wysłano poprawnie", type: MessageType.SUCCESS });
};

export default send;
