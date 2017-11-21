import React, { Component } from 'react';

class BannerJobsCategories extends Component {
    render() {
        return (
            <div className="tr-category section-padding">
            <div className="container">
                <div className="section-title">
                    <h1>Browse Jobs By Category</h1>
                </div>
                <ul className="category-list tr-list">
                    <li>
                        <a href="#">
                            <span className="icon">
                                <img src="images/icons/category1.png" alt="Icon" className="img-responsive"/>
                            </span>
                            <span className="category-title">Accounting/Finance</span>
                            <span className="category-quantity">(1298)</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span className="icon">
                                <img src="images/icons/category2.png" alt="Icon" className="img-responsive"/>
                            </span>
                            <span className="category-title">Education/Training</span>
                            <span className="category-quantity">(76212)</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span className="icon">
                                <img src="images/icons/category3.png" alt="Icon" className="img-responsive"/>
                            </span>
                            <span className="category-title">Engineer/Architects</span>
                            <span className="category-quantity">(212)</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span className="icon">
                                <img src="images/icons/category4.png" alt="Icon" className="img-responsive"/>
                            </span>
                            <span className="category-title">Garments/Textile</span>
                            <span className="category-quantity">(972)</span>
                        </a>
                    </li>
                </ul>
                <ul className="category-list tr-list">
                    <li>
                        <a href="#">
                            <span className="icon">
                                <img src="images/icons/category5.png" alt="Icon" className="img-responsive"/>
                            </span>
                            <span className="category-title">HR/Org. Development</span>
                            <span className="category-quantity">(1298)</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span className="icon">
                                <img src="images/icons/category6.png" alt="Icon" className="img-responsive"/>
                            </span>
                            <span className="category-title">Design/Creative</span>
                            <span className="category-quantity">(76212)</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span className="icon">
                                <img src="images/icons/category7.png" alt="Icon" className="img-responsive"/>
                            </span>
                            <span className="category-title">Research/Consultancy</span>
                            <span className="category-quantity">(1298)</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span className="icon">
                                <img src="images/icons/category8.png" alt="Icon" className="img-responsive"/>
                            </span>
                            <span className="category-title">Medical/Pharma</span>
                            <span className="category-quantity">(76212)</span>
                        </a>
                    </li>
                </ul>
                <ul className="category-list category-list-bottom tr-list">
                    <li>
                        <a href="#">
                            <span className="icon">
                                <img src="images/icons/category9.png" alt="Icon" className="img-responsive"/>
                            </span>
                            <span className="category-title">Music & Arts</span>
                            <span className="category-quantity">(212)</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span className="icon">
                                <img src="images/icons/category10.png" alt="Icon" className="img-responsive"/>
                            </span>
                            <span className="category-title">Marketing/Sales</span>
                            <span className="category-quantity">(972)</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span className="icon">
                                <img src="images/icons/category11.png" alt="Icon" className="img-responsive"/>
                            </span>
                            <span className="category-title">Production/Operation</span>
                            <span className="category-quantity">(212)</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span className="icon">
                                <img src="images/icons/category12.png" alt="Icon" className="img-responsive"/>
                            </span>
                            <span className="category-title">Miscellaneous</span>
                            <span className="category-quantity">(972)</span>
                        </a>
                    </li>
                </ul>
            </div>{/*<!-- /.container -->*/}
        </div>
        );
    }
}

export default BannerJobsCategories;