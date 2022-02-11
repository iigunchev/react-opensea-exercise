import React from 'react';
import "./NftCard.scss"

export default function NftCard({ img, collection, collectionId, price, timeLeft }) {
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
                <span class="material-icons">favorite_border</span>
                <span className="card-likes-counter">7</span>
                </footer>
            </div>
        </article>
    )
}