import axiosInteceptor from "../api/base/interceptor"

type MakePaymantDTO = {
        id: number,
        amount: number,
        transactionType: string,
        monthlyBillID: number
}

export default {
    makePaymant(data: MakePaymantDTO) {
        return axiosInteceptor.post('/api/v1/payment/pay', data)
    }
}