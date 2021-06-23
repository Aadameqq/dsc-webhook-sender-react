import React, { useState } from "react";
import EmbedSelect from "./EmbedSelect";
import Input from "./Input";
import Switch from "./Switch";
import { inputs, embedInputs } from "../utils/inputs";
import MessageType from "../utils/messageType";
import send from "../utils/send";

const Form = () => {
  const [isEmbedActive, setEmbedActivity] = useState(false);

  const [isCustomColorActive, setCustomColorActivity] = useState(false);

  const [isBlockPingActive, setBlockPingActivity] = useState(false);

  const [message, setMessage] = useState({
    message: "",
    type: MessageType.NONE,
  });

  const getInputs = (target) => {
    return target.map((input, index) => <Input key={index} {...input} />);
  };

  const getEmbedInputs = () => {
    return isEmbedActive ? (
      <div className="form__embed" id="embed">
        <p>Embed - informacje</p>
        {getInputs(embedInputs)}
        {getColorSelector()}
      </div>
    ) : null;
  };

  const getColorSelector = () =>
    isCustomColorActive ? (
      <Input
        placeHolder="Niestandardowy kolor"
        classes="form__input form__embed__input"
        name="customColor"
      />
    ) : (
      <EmbedSelect />
    );

  return (
    <form
      action="/"
      className="form"
      onSubmit={(e) =>
        send(
          e,
          setMessage,
          isEmbedActive,
          isBlockPingActive,
          isCustomColorActive
        )
      }
    >
      {getInputs(inputs)}
      {!isEmbedActive && (
        <Input name="content" textArea={true} placeHolder="Treść" />
      )}
      {getEmbedInputs()}
      <div className="form__checkboxes-container">
        <Switch
          isActive={isEmbedActive}
          title="Embed"
          handleClick={setEmbedActivity}
          customFunction={() => setCustomColorActivity(false)}
        />
        <Switch
          isActive={isBlockPingActive}
          title="Blokowanie oznaczeń"
          handleClick={setBlockPingActivity}
        />
        {isEmbedActive && (
          <Switch
            isActive={isCustomColorActive}
            title="Niestandardowy kolor"
            handleClick={setCustomColorActivity}
          />
        )}
      </div>
      <input type="submit" className="form__submit" value="Wyślij" />
      {message.type === MessageType.ERROR ? (
        <div className="form__error" id="error">
          {message.message}
        </div>
      ) : (
        <div className="form__success" id="success">
          {message.message}
        </div>
      )}
    </form>
  );
};
export default Form;
