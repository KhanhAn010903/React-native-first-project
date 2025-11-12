import * as Yup from 'yup';
export const LoginSchema = Yup.object().shape({
    password: Yup.string()
        .min(2, "Mật khẩu cần tối thiếu 6 ký tự")
        .max(50, "Mật khẩu tối đa 50 ký tự")
        .required("Mật khẩu không được để trống"),
    email: Yup.string()
        .email("Định dạng email không hợp lệ")
        .required("Email không được để trống"),
});

export const SignUpSchema = Yup.object().shape({
    password: Yup.string()
        .min(6, "Mật khẩu cần tối thiếu 6 ký tự")
        .max(50, "Mật khẩu tối đa 50 ký tự")
        .required("Mật khẩu không được để trống"),
    email: Yup.string()
        .email("Định dạng email không hợp lệ")
        .required("Email không được để trống"),
    name: Yup.string()
        .required("Họ và tên không được để trống"),
})