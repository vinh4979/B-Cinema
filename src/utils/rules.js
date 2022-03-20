import { isEmail } from 'src/utils/helper'

export const rules = {
  name: {
    maxLength: {
      value: 160,
      message: 'Tên có độ dài tối đa là 160 ký tự'
    }
  },
  phone: {
    maxLength: {
      value: 20,
      message: 'Số điện thoại có độ dài tối đa là 20 ký tự'
    }
  },
  address: {
    maxLength: {
      value: 160,
      message: 'Địa chỉ có độ dài tối đa là 160 ký tự'
    }
  },
  email: {
    require: {
      value: true,
      message: 'Bắt buộc nhập email'
    },
    minLength: {
      value: 5,
      message: 'Email có độ dài từ 6 - 160 kí tự'
    },
    maxLength: {
      value: 160,
      message: 'Email có độ dài từ 6 - 160 kí tự'
    }
    // validate: {
    //   email: v => isEmail(v) || 'Email không đúng định dạng'
    // }
  },
  password: {
    require: {
      value: true,
      message: 'Bắt buộc nhập mật khẩu'
    },
    minLength: {
      value: 5,
      message: 'Mật khẩu có độ dài từ 6 - 160 kí tự'
    },
    MaxLength: {
      value: 160,
      message: 'Mật khẩu có độ dài từ 6 - 160 kí tự'
    }
  },
  confirmedPassword: {
    require: {
      value: true,
      message: 'Nhập lại mật khẩu'
    },
    minLength: {
      value: 5,
      message: 'Mật khẩu có độ dài từ 6 - 160 kí tự'
    },
    MaxLength: {
      value: 160,
      message: 'Mật khẩu có độ dài từ 6 - 160 kí tự'
    }
  }
}
