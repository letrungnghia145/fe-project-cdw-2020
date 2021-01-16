import React from "react";

export const PaginationSection = () => {
    return (
        <nav>
            <ul className="pagination">
                <li>
                    <a href="#" aria-label="Previous">
                        <span aria-hidden="true">
                            <i className="ion-ios-arrow-left" />
                        </span>
                    </a>
                </li>
                <li className="active">
                    <a href="#">1</a>
                </li>
                <li>
                    <a href="#">2</a>
                </li>
                <li>
                    <a href="#">3</a>
                </li>
                <li className="disabled">
                    <a href="#">..</a>
                </li>
                <li>
                    <a href="#">10</a>
                </li>
                <li>
                    <a href="#" aria-label="Next">
                        <span aria-hidden="true">
                            <i className="ion-ios-arrow-right" />
                        </span>
                    </a>
                </li>
            </ul>
        </nav>
    );
};
