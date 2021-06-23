import React from "react";

const EmbedSelect = () => {
  return (
    <select name="color" className="form__input form__embed__input">
      <option value="none" selected hidden>
        Wybierz kolor
      </option>
      <option value="0">Czarny</option>
      <option value="1752220">Turkusowy</option>
      <option value="1146986">Ciemny turkusowy</option>
      <option value="3066993">Zielony</option>
      <option value="2067276">Ciemny zielony</option>
      <option value="12370112">Jasny niebieski</option>
      <option value="3447003">Niebieski</option>
      <option value="2123412">Ciemny niebieski</option>
      <option value="3426654">Granatowy</option>
      <option value="10181046">Fioletowy</option>
      <option value="15844367">Złoty</option>
      <option value="15105570">Pomarańczowy</option>
      <option value="15158332">Czerwony</option>
      <option value="10038562">Ciemny czerwony</option>
      <option value="9807270">Szary</option>
      <option value="9936031">Ciemny szary</option>
    </select>
  );
};

export default EmbedSelect;
