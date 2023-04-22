import { useFormik } from 'formik';
import InputField from '../../components/Input/InputField';
import SendButton from '../../components/Button';
import { useAppDispatch } from '../../../../constants/global';
import GroupField, { array } from '../../components/AdminDropDown/GroupField';
import { schemaPayment } from '../../../../utils/schema';

const initialValues = {
  payment: '',
  transactionType: '',
  monthlyBillID: ''
};

export const payment = [{
        label: 'Электронный кошелек',
        value: 'WITH_ONLINE_WALLET'
},
{
    label: 'Кредитная карта',
    value: 'WITH_CARD'
},
{
    label: 'Наличными',
    value: 'WITH_CASH'
},
]

type Props = {
  onClose: () => void;
  student: any
}

export const PaymentForm = ({ onClose, student }: Props) => {
  const dispatch = useAppDispatch();
  const onSubmit = () => {
    // payment(data)
    //   .then((res) => {
    //     dispatch(getAllStudentsThunk());
    //     /// add popup
        onClose();
    //   })
    //   .catch((error) => {
    //     // add popup
    //     console.log('error', error);
    //   });
  };

  const formik = useFormik({
    initialValues,
    validationSchema: schemaPayment,
    validateOnChange: false,
    onSubmit,
  });

  console.log("3", formik);
  
  return (
    <form className="mt-6" onSubmit={formik.handleSubmit}>
      <InputField
        label="Сумма оплаты"
        name="payment"
        value={formik.values.payment}
        onChange={formik.handleChange}
      />
      <InputField
        label="Сумма оплаты"
        name="payment"
        value={formik.values.payment}
        onChange={formik.handleChange}
      />

      <label className="mb-3 block text-lg font-semibold text-gray-900">
      Тип транзакции
      </label>
      <GroupField
      name="enrollmentGroupId"
      onChange={(e)=> formik.setFieldValue("enrollmentGroupId", e.target.value)}
      value={formik.values.enrollmentGroupId}
      options={payment}
      />
      <SendButton name="Добавить" />
    </form>
  );
};
