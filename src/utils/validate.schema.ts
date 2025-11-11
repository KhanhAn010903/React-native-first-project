import * as Yup from 'yup';
export const LoginSchema = Yup.object().shape({
    password : Yup.string()
        .min(2, "Mật khẩu cần tối thiếu 6 ký tự")
        .max(50,"Mật khẩu tối đa 50 ký tự")
        .required("Mật khẩu không được để trống"),
    email : Yup.string()
        .email("Định dạng email không hợp lệ")
        .required("Email không được để trống"),
});