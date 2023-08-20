import './App.css'

const App = () => {
    return <div>
        <div className={'main__nav'}>
            <img className={'amazon_logo'} src={'images/amazon_log.png'} alt={"amazon_logo"} height={22} width={140}/>
            <div className="main__logo">MĐT Xuyên Biên Giới và Bán Hàng Trên Amazon <img
                className={'main__logo__toggle'} src={'images/nav-toggle_down.svg'} alt={'toggle'}/></div>
            <div className="main__logo">Bắt đầu bán hàng<img className={'main__logo__toggle'}
                                                             src={'images/nav-toggle_down.svg'} alt={'toggle'}/></div>
            <div className="main__logo">Phát triển kinh doanh<img className={'main__logo__toggle'}
                                                                  src={'images/nav-toggle_down.svg'} alt={'toggle'}/>
            </div>
            <div className="main__logo">Cổng đào tạo<img className={'main__logo__toggle'}
                                                         src={'images/nav-toggle_up.svg'} alt={'toggle'}/></div>
            <div className="main__logo__btn">Liên hệ</div>
        </div>

        <div>
            <div className={'main__banner'}>
                <div className={'main__text'}>
                    <div style={{color: 'black'}}>Hướng dẫn kinh doanh</div>
                    <div>TMĐT Xuyên Biên Giới</div>
                </div>
                <img className={'main__image'} src={'images/main__image.png'} alt={"amazon_logo"} height={234}
                     width={449}/>
            </div>

            <div className={'card__area'}>
                <div className={'card__component'}>
                    <div><img src={'images/card.png'} className={'card__img'}/></div>
                    <div>
                        <div className={'card__header'}>Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry.
                        </div>
                        <div className={'card__body'}>
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece
                            of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock,
                            a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure
                            Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the
                            word in classical literature
                        </div>
                    </div>
                    <div className={'card__footer'}>
                        <div className={'card__footer__front'}>
                            <div>Sep 26, 2021</div>
                            <div style={{margin: '0px 8px 0px 15px', alignItems: 'center'}}><img
                                src={'/images/dot.svg'}/></div>
                            <div>1:41 PM</div>
                        </div>
                        <div className={'component_btn'}>Xem thêm <img src={'/images/right-arrow.svg'}/></div>
                    </div>
                </div>
                <div className={'card__component'}>
                    <div><img src={'images/card.png'} className={'card__img'}/></div>
                    <div>
                        <div className={'card__header'}>Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry.
                        </div>
                        <div className={'card__body'}>
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece
                            of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock,
                            a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure
                            Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the
                            word in classical literature
                        </div>
                    </div>
                    <div className={'card__footer'}>
                        <div className={'card__footer__front'}>
                            <div>Sep 26, 2021</div>
                            <div style={{margin: '0px 8px 0px 15px', alignItems: 'center'}}><img
                                src={'/images/dot.svg'}/></div>
                            <div>1:41 PM</div>
                        </div>
                        <div className={'component_btn'}>Xem thêm <img src={'/images/right-arrow.svg'}/></div>
                    </div>
                </div>
                <div className={'card__component'}>
                    <div><img src={'images/card.png'} className={'card__img'}/></div>
                    <div>
                        <div className={'card__header'}>Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry.
                        </div>
                        <div className={'card__body'}>
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece
                            of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock,
                            a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure
                            Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the
                            word in classical literature
                        </div>
                    </div>
                    <div className={'card__footer'}>
                        <div className={'card__footer__front'}>
                            <div>Sep 26, 2021</div>
                            <div style={{margin: '0px 8px 0px 15px', alignItems: 'center'}}><img
                                src={'/images/dot.svg'}/></div>
                            <div>1:41 PM</div>
                        </div>
                        <div className={'component_btn'}>Xem thêm <img src={'/images/right-arrow.svg'}/></div>
                    </div>
                </div>
                <div className={'card__component'}>
                    <div><img src={'images/card.png'} className={'card__img'}/></div>
                    <div>
                        <div className={'card__header'}>Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry.
                        </div>
                        <div className={'card__body'}>
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece
                            of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock,
                            a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure
                            Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the
                            word in classical literature
                        </div>
                    </div>
                    <div className={'card__footer'}>
                        <div className={'card__footer__front'}>
                            <div>Sep 26, 2021</div>
                            <div style={{margin: '0px 8px 0px 15px', alignItems: 'center'}}><img
                                src={'/images/dot.svg'}/></div>
                            <div>1:41 PM</div>
                        </div>
                        <div className={'component_btn'}>Xem thêm <img src={'/images/right-arrow.svg'}/></div>
                    </div>
                </div>
                <div className={'card__component'}>
                    <div><img src={'images/card.png'} className={'card__img'}/></div>
                    <div>
                        <div className={'card__header'}>Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry.
                        </div>
                        <div className={'card__body'}>
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece
                            of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock,
                            a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure
                            Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the
                            word in classical literature
                        </div>
                    </div>
                    <div className={'card__footer'}>
                        <div className={'card__footer__front'}>
                            <div>Sep 26, 2021</div>
                            <div style={{margin: '0px 8px 0px 15px', alignItems: 'center'}}><img
                                src={'/images/dot.svg'}/></div>
                            <div>1:41 PM</div>
                        </div>
                        <div className={'component_btn'}>Xem thêm <img src={'/images/right-arrow.svg'}/></div>
                    </div>
                </div>
                <div className={'card__component'}>
                    <div><img src={'images/card.png'} className={'card__img'}/></div>
                    <div>
                        <div className={'card__header'}>Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry.
                        </div>
                        <div className={'card__body'}>
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece
                            of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock,
                            a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure
                            Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the
                            word in classical literature
                        </div>
                    </div>
                    <div className={'card__footer'}>
                        <div className={'card__footer__front'}>
                            <div>Sep 26, 2021</div>
                            <div style={{margin: '0px 8px 0px 15px', alignItems: 'center'}}><img
                                src={'/images/dot.svg'}/></div>
                            <div>1:41 PM</div>
                        </div>
                        <div className={'component_btn'}>Xem thêm <img src={'/images/right-arrow.svg'}/></div>
                    </div>
                </div>
            </div>

            <div className={'footer'}>
                <div className="footer__inner">
                    <div className={'footer__components'}>
                        <div className="footer__header">Về Amazon Global Selling</div>
                        <div className="footer__body">
                            Amazon Global Selling là chương trình bán hàng giúp các doanh nghiệp từ mọi nơi trên thế
                            giới phát triển kinh doanh toàn cầu, tiếp cận khách hàng của Amazon khắp thế giới và xây
                            dựng thương hiệu quốc tế. Thông qua Amazon Global Selling, những người bán thuộc nhiều loại
                            hình và quy mô khác nhau có thể mang sản phẩm của mình đến với hơn 300 triệu tài khoản người
                            mua, trong đó có hơn 200 triệu khách hàng Prime cũng như hàng triệu đại lý mua hàng sỉ tại
                            thị trường Mỹ, Châu Âu

                        </div>
                    </div>
                    <div className={'footer__components'}>
                        <div className="footer__header" style={{textAlign:'center'}}>LIÊN HỆ VỚI CHÚNG TÔI</div>
                        <div className="footer__body">
                            <div className={'footer__second_btn'}>Trung tâm hỗ trợ người bán</div>
                            <div className={'footer__second_btn'}>Amazon Facebook Fanpage</div>
                            <div className={'footer__second_btn'}>Website: sell.amazon.vn</div>
                        </div>
                    </div>
                    <div className={'footer__components'}>
                        <div>aa</div>
                        <div>bb</div>
                        <div>cc</div>
                        <div>dd</div>
                    </div>
                </div>
            </div>
        </div>


    </div>;
}


export default App;