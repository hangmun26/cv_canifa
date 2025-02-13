const Vouchers = () => {
  return (
    <div className="container-vouchers-endow">
      <h2>Ưu đãi nổi bật</h2>
      <div className="container-vouchers">
        <div className="container-voucher">
          <div className="container-vo">
            <div>
              <h3>Voucher 50K</h3>
              <p>Giảm 50k cho đơn từ 999k</p>
              <div className="container-vouchers-condition ">
                <p className="vouchers-day">HSD: 2025-02-28</p>
                <p className="vouchers-condition">Điều kiện</p>
              </div>
            </div>
          </div>
          <button className="container-voucher-btn">Lưu mã</button>
        </div>

        <div className="container-voucher container-vo-2">
          <div className="container-vo  ">
            <div>
              <h3>Voucher 50K</h3>
              <p>Giảm 50k cho đơn từ 999k</p>
              <div className="container-vouchers-condition ">
                <p>HSD: 2025-02-28</p>
                <p className="vouchers-condition">Điều kiện</p>
              </div>
            </div>
          </div>
          <button className="container-voucher-btn">Lưu mã</button>
        </div>
      </div>
    </div>
  );
};
export default Vouchers;
