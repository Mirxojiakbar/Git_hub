import React from "react";
import "./style.scss";


const App = () => {
    return (
        <>
            <div>
                <footer className=" footer__foot">
                    <div className="container mt-5">
                        <hr className="w-100 pt-4" />
                        <div className=" footer__foot">
                            <div className=" footer__foot__wrap">
                                <a className="nav__one_link" href="https://github.com/">
                                    <i className="fa-brands fa-github fs-2 text-secondary"><iconify-icon icon="eva:github-fill" width="25"></iconify-icon></i>
                                </a>
                                <span className=" footer__foot__wrap_span">
                                    © {new Date().getFullYear()} GitHub, Inc
                                </span>
                            </div>
                            <ul className=" footer__foot__ul ">
                                <li className="  footer__foot__ul_list">
                                    <a className="text-decoration-none"
                                        target={"_blank"}
                                        href="https://docs.github.com/en/github/site-policy/github-terms-of-service"
                                    >
                                        Terms
                                    </a>
                                </li>
                                <li className="  footer__foot__ul_list">
                                    <a className="text-decoration-none"
                                        target={"_blank"}
                                        href="https://docs.github.com/en/github/site-policy/github-privacy-statement"
                                    >
                                        Privacy
                                    </a>
                                </li>
                                <li className="  footer__foot__ul_list">
                                    <a className="text-decoration-none" target={"_blank"} href="https://github.com/security">
                                        Security
                                    </a>
                                </li>
                                <li className="  footer__foot__ul_list">
                                    <a className="text-decoration-none" target={"_blank"} href="https://www.githubstatus.com/">
                                        Status
                                    </a>
                                </li>
                                <li className="  footer__foot__ul_list">
                                    <a className="text-decoration-none" target={"_blank"} href="https://docs.github.com">
                                        Docs
                                    </a>
                                </li>
                                <li className="  footer__foot__ul_list">
                                    <a className="text-decoration-none"
                                        target={"_blank"}
                                        href="https://support.github.com?tags=dotcom- footer__footer"
                                    >
                                        Contact GitHub
                                    </a>
                                </li>
                                <li className="  footer__foot__ul_list">
                                    <a className="text-decoration-none" target={"_blank"} href="https://github.com/pricing">
                                        Pricing
                                    </a>
                                </li>
                                <li className="  footer__foot__ul_list">
                                    <a className="text-decoration-none" target={"_blank"} href="https://docs.github.com">
                                        API
                                    </a>
                                </li>
                                <li className="  footer__foot__ul_list">
                                    <a className="text-decoration-none" target={"_blank"} href="https://services.github.com">
                                        Training
                                    </a>
                                </li>
                                <li className="  footer__foot__ul_list">
                                    <a className="text-decoration-none" target={"_blank"} href="https://github.blog">
                                        Blog
                                    </a>
                                </li>
                                <li className=" footer__foot__ul_list">
                                    <a className="text-decoration-none" target={"_blank"} href="https://github.com/about">
                                        About
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
};


export default App;