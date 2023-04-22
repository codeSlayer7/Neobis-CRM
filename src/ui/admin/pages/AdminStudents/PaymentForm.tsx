import { useFormik } from 'formik';
import InputField from '../../components/Input/InputField';
import SendButton from '../../components/Button';
import { useAppDispatch } from '../../../../constants/global';
import GroupField, { array } from '../../components/AdminDropDown/GroupField';
import { schemaPayment } from '../../../../utils/schema';

const initialValues = {
  payment: '',
  enrollmentGroupId: '',
};

export const payment = [{
        label: 'Электронный кошелек',
        value: 0
},
{
    label: 'Кредитная карта',
    value: 1
},
{
    label: 'Наличными',
    value: 2
},
]

export const PaymentForm = ({ onClose }: any) => {
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
