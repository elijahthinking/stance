/* src/components/main/Footer.js */
import React from 'react';
import './Footer.scss'; // SCSS 컴파일된 CSS 혹은 SCSS 직접 임포트

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-inner">
        
        {/* 왼쪽: 브랜드 및 약관 */}
        <section className="section-info">
          <div className="brand-logo">PACEY</div>
          <div className="title" style={{fontSize: '13px'}}>PEACY ▿</div>
          <p className="description">
            PEACY는 통신판매중개자이며, 통신판매의 당사자가 아닙니다.<br />
            입점 판매자와의 상품, 거래정보 및 거래에 대하여 책임을 지지 않습니다.<br />
            단, PEACY는 판매자로 등록 판매한 상품은 판매자로서 책임을 부담합니다.
          </p>
          <nav className="nav-links">
            <a href="#!">이용약관</a>
            <a href="#!">개인정보처리방침</a>
            <a href="#!">입점/제휴</a>
          </nav>
        </section>

        {/* 중앙: 고객센터 */}
        <section className="section-contact">
          <span className="title">Customer Center</span>
          <div className="phone">1255 - 1255</div>
          <p className="description" style={{marginBottom: '30px'}}>
            평일 10:00 - 17:00 (점심 12:00-13:00)
          </p>
          <nav className="nav-links">
            <a href="#!">자주묻는 질문</a>
            <a href="#!">1:1 문의</a>
          </nav>
        </section>

        {/* 오른쪽: 스토리 및 SNS */}
        <section className="section-social">
          <div style={{marginBottom: '40px'}}>
            <span className="title">Peacy Story</span>
            <a href="#!" style={{fontSize: '13px', color: '#0066ff', fontWeight: 'bold', textDecoration: 'none'}}>페이지 스토리</a>
          </div>
          
          <span className="title" style={{fontSize: '12px'}}>sns</span>
          <div className="sns-icons">
             {/* 아이콘은 실제 이미지나 react-icons를 사용하세요 */}
             <span style={{color: '#0066ff', fontSize: '20px'}}>📷</span>
             <span style={{color: '#0066ff', fontSize: '20px'}}>📺</span>
          </div>
        </section>

      </div>
    </footer>
  );
};

export default Footer;