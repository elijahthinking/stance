// D:\stance\src\components\main\Footer.js
import React from 'react';
import '../../styles/main/Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        
        {/* 왼쪽 영역 */}
        <div className="footer-left">
          <div className="footer-logo">
            <div className="logo-dot"></div> PACEY
          </div>
          <div className="company-select">PEACY ▿</div>
          <p className="notice-text">
            PEACY는 통신판매중개자이며, 통신판매의 당사자가 아닙니다.<br />
            입점 판매자와의 상품, 거래정보 및 거래에 대하여 책임을 지지 않습니다.<br />
            단, PEACY는 판매자로 등록 판매한 상품은 판매자로서 책임을 부담합니다.
          </p>
          <div className="policy-links">
            <a href="/">이용약관</a>
            <a href="/">개인정보처리방침</a>
            <a href="/">입점/제휴</a>
          </div>
        </div>

        {/* 중앙 영역 */}
        <div className="footer-center">
          <h3 className="section-title">Customer Center</h3>
          <div className="phone-number">1255 - 1255</div>
          <p className="hours-text">평일 10:00 - 17:00 (점심 12:00 - 13:00)</p>
          <div className="policy-links">
            <a href="/">자주묻는 질문</a>
            <a href="/">1:1 문의</a>
          </div>
        </div>

        {/* 오른쪽 영역 */}
        <div className="footer-right">
          <div style={{marginBottom: '30px'}}>
            <h3 className="section-title">Peacy Story</h3>
            <a href="/" className="policy-links" style={{fontSize: '12px'}}>페이지 스토리</a>
          </div>
          <h3 className="section-title" style={{fontSize: '11px'}}>SNS</h3>
          <div className="sns-icons">
            <a href="/" className="sns-icon">IG</a>
            <a href="/" className="sns-icon">YT</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;