import React from "react";
import { ButtonControl } from "./button-control";
import { SubImage } from "./sub-image";

export const ImageSection = (props) => {
    const { images } = props;
    return (
        <div className="col-sm-7 col-md-7 white no-padding">
            <div className="carousel-product" data-count={4} data-current={1}>
                <div className="items">
                    <ButtonControl directive="left" />
                    <ButtonControl directive="right" />
                    {images.map((image, index) => {
                        return (
                            <div
                                className={`item ${
                                    index === 0 ? "center" : ""
                                }`}
                                data-marker={index}
                                key={image.id}
                            >
                                <img
                                    src={image.link}
                                    alt={image.description}
                                    className="background"
                                />
                            </div>
                        );
                    })}
                </div>
                <ul className="markers">
                    {images.map((image, index) => {
                        return (
                            <SubImage
                                link={image.link}
                                marker={index}
                                isActive={false}
                                key={index}
                            />
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};
