import React from 'react';
import FavoriteIconButton from "../FavoriteIconButtony";
import "./NftCard.scss"

export default function NftCard({ 
    id,
    img, 
    collection, 
    collectionId, 
    price, 
    timeLeft, 
    isFavorite, 
    favCount, 
    handleSetFavorite 
}) {

    function onSetFavorite() {
        handleSetFavorite(id);
      }

    return (

        <article>
            <div className="card-container">
                <img src={img} alt=""/>
                <section className="card-info">
                    <div className="card-info-top">
                        <span className="collection-name">{collection}</span>
                        <span>Price</span>
                    </div>
                    <div className="card-info-middle">
                        <span className="collection-id">{collectionId}</span>
                        <span className="eth-price">ETH {price}</span>
                    </div>
                    <div className="card-info-bottom">
                        <span className="time-left">{timeLeft}</span>
                    </div>
                </section>
                <footer className="card-footer">
                <FavoriteIconButton 
                    handleSetFavorite={onSetFavorite}
                    isFavorite={isFavorite}
                />
                <span className="card-likes-counter">{favCount}</span>
                </footer>
            </div>
        </article>
    )
}