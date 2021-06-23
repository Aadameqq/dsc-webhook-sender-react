import MessageType from "./messageType";

const validate = (
  setMessage,
  value,
  name,
  minLength = 3,
  maxLength = 2000,
  blockedWords = null
) => {
  if (!value) {
    setMessage({
      message: `Pole ${name} jest puste`,
      type: MessageType.ERROR,
    });
    return true;
  }
  if (value.length < minLength) {
    setMessage({
      message: `Pole ${name} musi mieć co najmniej ${minLength} znaków`,
      type: MessageType.ERROR,
    });
    return true;
  }
  if (value.length > maxLength) {
    setMessage({
      message: `Pole ${name} może mieć maksymalnie ${maxLength} znaków`,
      type: MessageType.ERROR,
    });
    return true;
  }
  if (blockedWords) {
    let includes = false;
    blockedWords.map((x) => {
      if (value.includes(x)) includes = true;
    });
    if (includes) {
      setMessage({
        message: `Pole ${name} zawiera ping`,
        type: MessageType.ERROR,
      });
      return true;
    }
  }
};
export default validate;
