export class NguoiKhaiBao {
    ten = '';
    ho = '';
    email = '';
    soDienThoai = '';
    ngay = '';
    thang = '';
    nam = '';
    diaChi = '';
    thongTinDiChuyen = '';
    loaiNhiem = '';
    hienThiThongTin = () => {
        return `
        <h4>Họ và tên: </h4><span>${this.ho} ${this.ten}</span>
        <hr>
        <h4>Email: </h4>${this.email}
        <hr>
        <h4>Số điện thoại: </h4>${this.soDienThoai}
        <hr>
        <h4>Ngày, tháng, năm sinh: </h4>${this.ngay} - ${this.thang} - ${this.nam}
        <hr>
        <h4>Địa chỉ: </h4>${this.diaChi}
        <hr>
        <h4>Thông tin di chuyển: </h4>${this.thongTinDiChuyen}
        <hr>
        <h4>Loại nhiễm: </h4>${this.loaiNhiem}
        <hr>
        `;
    }
}