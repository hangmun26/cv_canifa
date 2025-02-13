const Footer = () => {
  return (
    <div className="footer_grow">
      <div className="footer_grow-1">
        <h3>CÔNG TY CỔ PHẦN CANIFA</h3>
        <p>
          Số ĐKKD: 0107574310, ngày cấp: 23/09/2016, Nơi cấp: Sở Kế hoạch và đầu
          tư Hà Nội Địa chỉ trụ sở tại số 688 Đường Quang Trung, Phường La Khê,
          Quận Hà Đông, Thành phố Hà Nội. Địa chỉ liên hệ: P301, tầng 3, tòa nhà
          GP Invest, số 170 La Thành, Phường Ô Chợ Dừa, Quận Đống Đa, Thành Phố
          Hà Nội. Điện thoại: +8424 - 7303.0222 Fax: +8424 - 6277.6419 Email:
          hello@canifa.com
        </p>
        {/* <a href="">
                    <img src="" alt="" />
                    <img src="" alt="" />
                </a> */}
      </div>

      <div className="footer_grow-2">
        <h3>CÔNG TY CỔ PHẦN CANIFA</h3>
        <p> Giới thiệu </p>
        <p> Tuyển dụng </p>
        <p> Với cộng đồng </p>
        <p> Hệ thống cửa hàng </p>
        <p> Liên hệ</p>

        {/* <a href="">
                    <img src="" alt="" />
                    <img src="" alt="" />
                </a> */}
      </div>

      <div className="footer_grow-3">
        <h3>HỖ TRỢ </h3>
        <p> Hỏi đáp </p>
        <p>Điều kiện - Điều khoản Chính sách KHTT </p>
        <p> Với cộng đồng </p>
        <p> Hệ thống cửa hàng </p>
        <p>Chính sách bảo mật thông tin KH</p>

        {/* <a href="">
                    <img src="" alt="" />
                    <img src="" alt="" />
                </a> */}
      </div>

      <div className="footer_grow-4">
        <h3>Tải ứng dụng</h3>
        <div className="footer_qr">
          <div>
            <img
              src="https://canifa.com/assets/images/bancode.png"
              alt=""
              className="qr-img"
            />
          </div>

          <div className="footer-application">
            <img
              className="gg-img"
              src="	https://canifa.com/assets/images/googleplay.png"
              alt=""
            />
            <img
              className="app-img"
              src="	https://canifa.com/assets/images/appstore.png"
              alt=""
            />
          </div>
        </div>

        <h3>Phương thức thanh toán</h3>
        <img
          className="pay-img"
          src="	https://canifa.com/assets/images/pay.svg"
          alt=""
        />
      </div>
    </div>
  );
};
export default Footer;
