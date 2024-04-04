import { ElMessage } from 'element-plus'
import Cookies from 'js-cookie'
import { includes } from 'lodash-es'

export default function showError(data: Record<string, any>, config: any) {
  let message = ''
  let orderCode = ''
  const { status } = data
  switch (status) {
    case 'USER_NOT_EXISTS':
      message = includes(config.url, 'auth/login')
        ? 'Invalid username or password'
        : 'User does not exist, please check your email address'
      setTimeout(() => {
        if (includes(config.url, 'auth/login')) return
        Cookies.remove('access_token')
        location.href = '/login'
      }, 1000)
      break
    case 'INVALID_USER_PASSWORD':
      message = includes(config.url, 'auth/login') ? 'Invalid username or password' : 'Old password does not match'
      break
    case 'USER_LOCKED':
      message = 'Account has been locked'
      setTimeout(() => {
        Cookies.remove('access_token')
        location.href = '/login'
      }, 1000)
      break
    case 'INVALID_VERIFICATION':
      message = includes(config.url, 'auth/forget-pass')
        ? 'Time to reset password has expired, please try again'
        : 'Invalid verification code'
      break
    case 'EXPIRED_VERIFICATION':
      message = includes(config.url, 'auth/forget-pass')
        ? 'Time to reset password has expired, please try again'
        : 'Expired verification code'
      break
    case 'CONFIRM_PASSWORD_MISMATCH':
      message = 'Password and confirm password do not match'
      break
    case 'EMAIL_ALREADY_EXISTS':
      message = includes(config.url, 'authen/v1/invite')
        ? 'Email already exists, please try again'
        : 'Email has already been registered by another account'
      break
    case 'WEAK_PASSWORD':
      message = 'Weak password'
      break
    case 'INVALID_PASSWORD':
      message = 'Invalid password'
      break
    case 'DUPLICATE_OLD_PASSWORD':
      message = 'The new password must be different from your old password'
      break
    case 'INVALID_SKU':
      message = 'SKU already exists'
      break
    case 'INVALID_ORDER_ID':
      orderCode = (data?.data as string[]).join(', ')
      message = includes(config.url, 'order/cancel')
        ? `Order ${orderCode} ${data?.data.length > 1 ? 'do' : 'does'} not exist or canceled before`
        : includes(config.url, 'order/complete')
        ? 'This order is invalid or completed'
        : includes(config.url, 'order/batch-complete')
        ? `Order ${orderCode} ${data?.data.length > 1 ? 'are' : 'is'} invalid or completed before`
        : includes(config.url, 'credit-note')
        ? `Credit note ${orderCode} ${data?.data.length > 1 ? 'do' : 'does'} not exist or canceled before`
        : `Order ${orderCode} ${data?.data.length > 1 ? 'do' : 'does'} not exist or confirmed before`
      break
    case 'CODE_ALREADY_EXIST':
      message = 'Customer code already exists'
      break
    case 'INVALID_CUSTOMER_ID':
      message = 'There exists a customer with an order, please check and try again '
      break
    case 'INVALID_DISPUTE_ID':
      message = 'Dispute has been resolved or rejected, please check and try again later'
      break
    case 'ORDER_DIFF_DATE':
      message = 'Printing packing slips for bread requires selecting orders with the same delivery date'
      break
    case 'PRICE_LIST_CONTAIN_CUSTOMER':
      message = `Can't delete a price list that contains customers, please check and try again`
      break
    case 'INVALID_PRICE_LIST_ID':
      message = `This price list does not exist or has been deleted`
      break
    case 'INVALID_PRODUCT_ID':
      message = 'Invalid product, please check and try again'
      break
    case 'INVALID_PACKING_SLIP_GROUP_ID':
      message = 'Invalid page, please check and try again'
      break
    case 'INVALID_VISIBILITY_GROUP_ID':
      message = 'Visibility group does not exist or has been deleted'
      break
    case 'INVITATION_ACCEPTED':
      message = includes(config.url, '/resend') ? 'This invitation is accepted' : 'An account already exists with this invitation'
      break
    case 'INVITATION_EXPIRED':
      message = 'Your invitation is expired'
      break
    case 'INVALID_INVITATION':
      message = includes(config.url, '/resend') ? 'Invalid invitation' : 'There was an error processing your invitation'
      break
    default:
      break
  }
  if (message) {
    ElMessage.error({ message, duration: 5000 })
  }
}
