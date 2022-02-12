import React from "react";

export default function FavoriteIconButton ({ handleSetFavorite, isFavorite }) {
    return (
      <button
        type="button"
        className=""
        onClick={handleSetFavorite}
        aria-label="save as favorite"
      >
        {isFavorite 
        ? <span class="material-icons">favorite</span> 
        : <span class="material-icons">favorite_border</span>}
      </button>
    );
  }
