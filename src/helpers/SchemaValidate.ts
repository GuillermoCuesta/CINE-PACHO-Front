import * as yup from "yup";

import moment from "moment";

export const InputSchema = yup.object().shape({
  email: yup
    .string()
    .email("Por favor ingrese un correo valido")
    .required("Es requerido"),
  password: yup.string().required(" "),
});

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Por favor ingrese un correo valido")
    .required("Campo obligatorio"),
  password: yup.string().required("Es requerido"),
});

export const firstLoginSchema = yup.object().shape({
  newPassword: yup
    .string()
    .required("Campo obligatorio")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Debe contener mínimo 8 caracteres, incluyendo mayusculas, minusculas, números y por lo menos caracter especial"
    ),
  confirmPassword: yup
    .string()
    .required("Campo obligatorio")
    .oneOf([yup.ref("newPassword"), null], "Las contraseñas no coinciden"),
});

export const ForgotEmailValidator = yup.object().shape({
  email: yup
    .string()
    .email("Por favor ingrese un correo valido")
    .required("Es requerido"),
});

export const ResetPassword = yup.object().shape({
  code: yup.string().required("Ingresa el código de verificación"),
  password: yup.string().required("Campo obligatorio"),
  confirmpassword: yup
    .string()
    .required("Campo obligatorio")
    .oneOf([yup.ref("password"), null], "Las contraseñas no coinciden"),
});
export const RegisterCreditCard = yup.object().shape({
  number: yup
    .string()
    .required("Campo obligatorio")
    .min(10, "Tarjeta no valida")
    .max(19, "Tarjeta no valida"),
  expired_date: yup.string().required("Campo obligatorio"),
  card_holder: yup.string().required("Campo obligatorio"),
  cvc: yup.string().required("Campo obligatorio").length(3, "CCV No valido"),
});

export const CreateContractValidatorDefined = yup.object().shape({
  id_client_user: yup.string().required("Es requerido"),
  total_amount: yup
    .number()
    .moreThan(0, "Debe ser mayor que 0")
    .required("Es requerido"),
  // subscription_period: yup.string().required('Es requerido'),
  canon_value: yup
    .number()
    .moreThan(0, "Debe ser mayor que 0")
    .required("Es requerido"),
  start_contract_date: yup.date().required("Es requerido"),
  end_contract_date: yup
    .date()
    .min(
      yup.ref("start_contract_date"),
      "La fecha final tiene que ser mayor a la inicial"
    )
    .required("Es requerido"),
  // payment_method: yup.string().required('Es requerido'),
  duration_periods: yup
    .number()
    .moreThan(0, "Debe ser mayor que 0")
    .required("Es requerido"),
  // state: yup.string().required('Es requerido'),
  // id_comercial_responsible: yup.string().required('Es requerido'),
  // audit_create_user: yup.string().required('Es requerido'),
});

export const CreateContractValidatorUndefined = yup.object().shape({
  id_client_user: yup.string().required("Es requerido"),
  canon_value: yup
    .number()
    .moreThan(0, "Debe ser mayor que 0")
    .required("Es requerido"),
  start_contract_date: yup.date().required("Es requerido"),
  duration_periods: yup
    .number()
    .moreThan(0, "Debe ser mayor que 0")
    .required("Es requerido"),
});

export const CreateContractValidatorPerHours = yup.object().shape({
  id_client_user: yup.string().required("Es requerido"),
  total_amount: yup
    .number()
    .moreThan(0, "Debe ser mayor que 0")
    .required("Es requerido"),
  canon_value: yup
    .number()
    .moreThan(0, "Debe ser mayor que 0")
    .required("Es requerido"),
  start_contract_date: yup.date().required("Es requerido"),
  start_contract_hour: yup.string().required("Es requerido"),
  end_contract_hour: yup.string().required("Es requerido"),
  end_contract_date: yup
    .date()
    .min(
      yup.ref("start_contract_date"),
      "La fecha final tiene que ser mayor a la inicial"
    )
    .required("Es requerido"),
  duration_periods: yup
    .number()
    .moreThan(0, "Debe ser mayor que 0")
    .required("Es requerido"),
});

export const CreateMaintenanceValidator = yup.object().shape({
  date_issued: yup
    .date()
    .max(new Date(), "La fecha debe ser menor al día de hoy")
    .required("Es requerido"),

  description: yup.string().required("Es requerido"),
});

export const CreateProductValidator = yup.object().shape({
  serial: yup.string().required("Es requerido"),
  name: yup.string().required("Es requerido"),
  brand: yup.string().required("Es requerido"),
  reference: yup.string().required("Es requerido"),
  rental_price: yup
    .number()
    .required("Es requerido")
    .moreThan(0, "Es requerido"),
  // assurance_acquisition_place: yup.string().required("Es requerido"),

  // assurance_periods: yup
  //   .number()
  //   .moreThan(0, "Debe ser mayor que 0")
  //   .required(),

  // depreciation_params: yup.object().shape({
  //   commercial_value: yup
  //     .number()
  //     .moreThan(1, "Debe ser mayor que 0")
  //     .required("Es requerido"),
  //   date_purchase: yup
  //     .string()
  //     .min(6, "Formato incorrecto (MM/AAAA")
  //     .required("Es requerido"),
  //   salvage_worth: yup
  //     .number()
  //     .moreThan(0, "Debe ser mayor que 0")
  //     .required("Es requerido"),
  //   years_useful_life: yup
  //     .number()
  //     .moreThan(0, "Debe ser mayor que 0")
  //     .required("Es requerido"),
  // }),
});
export const TextAndDocumentsValidator = yup.object().shape({
  header: yup.string().required("Es requerido"),
  terms: yup.string().required("Es requerido"),
});

export const additionalServicesValidator = yup.object().shape({
  title: yup.string().required("Es requerido"),
  price: yup
    .number()
    .required("Es requerido")
    .moreThan(0, "Debe ser mayor a 0"),
});

export const discountsValidator = yup.object().shape({
  title: yup.string().required("Es requerido"),
  discount: yup
    .number()
    .required("Es requerido")
    .moreThan(0, "Debe ser mayor a 0"),
});

export const CreateQuoteValidatorFixedTerms = yup.object().shape({
  title: yup.string().required("Es requerido"),

  date_issued: yup.date().required("Es requerido"),
  date_expiration: yup
    .date()
    .min(yup.ref("date_issued"))
    .required("Es requerido"),
});

export const CreateQuoteValidatorIndefinitedTerms = yup.object().shape({
  title: yup.string().required("Es requerido"),

  date_issued: yup.date().required("Es requerido"),
});
export const CreateQuoteValidatorByHourTerms = yup.object().shape({
  title: yup.string().required("Es requerido"),
  date_issued: yup.date().required("Es requerido"),
  start_contract_hour: yup.string().required("Es requerido"),
  noHours: yup.number().required("Es requerido").moreThan(0, "Es requerido"),
});
export const CreateProductContractValidator = yup.object().shape({
  serial: yup.string().required("Es requerido"),
  name: yup.string().required("Es requerido"),
  brand: yup.string().required("Es requerido"),
  reference: yup.string().required("Es requerido"),
});

export const CreateBillValidator = yup.object().shape({
  billingDate: yup.string().required("Es requerido"),
  canonValue: yup.number().required("Es requerido").moreThan(0, "Es requerido"),
});
export const CreateBillSellValidator = yup.object().shape({
  billingDate: yup.string().required("Es requerido"),
  sellValue: yup.number().required("Es requerido").moreThan(0, "Es requerido"),
});

export const creteEvent = yup.object().shape({
  description: yup.string().required("Es requerido"),

  start_date: yup
    .date()
    .min(
      new Date(new Date().setDate(new Date().getDate() - 1)),
      "La fecha debe ser mayor al día de hoy"
    )
    .required("Es requerido"),

  end_date: yup
    .date()
    .min(
      yup.ref("start_date"),
      "La fecha final tiene que ser mayor a la inicial"
    )
    .required("Es requerido"),
});

export const StockValidator = yup.object().shape({
  product_id: yup.string().required("Es requerido"),
  price: yup
    .number()
    .required("Es requerido")
    .moreThan(0, "Debe ser mayor a 0"),
  period: yup
    .number()
    .required("Es requerido")
    .moreThan(0, "Debe ser mayor a 0"),
  quantity: yup
    .number()
    .required("Es requerido")
    .moreThan(0, "Debe ser mayor a 0"),
});

export const CreateContractDefinedFromQuoteValidator = yup.object().shape({
  total_amount: yup
    .number()
    .moreThan(0, "Debe ser mayor que 0")
    .required("Es requerido"),

  duration_periods: yup
    .number()
    .moreThan(0, "Debe ser mayor que 0")
    .required("Es requerido"),
  representativeNameClient: yup.string().required("Es requerido"),
  representativeNameLizer: yup.string().required("Es requerido"),
  representativeIdClient: yup.string().required("Es requerido"),
  representativeIdLizer: yup.string().required("Es requerido"),
});

export const CreateContractUndefinedFromQuoteValidator = yup.object().shape({
  total_amount: yup
    .number()
    .moreThan(0, "Debe ser mayor que 0")
    .required("Es requerido"),
  representativeNameClient: yup.string().required("Es requerido"),
  representativeNameLizer: yup.string().required("Es requerido"),
  representativeIdClient: yup.string().required("Es requerido"),
  representativeIdLizer: yup.string().required("Es requerido"),
});

export const CreateContractHourFromQuoteValidator = yup.object().shape({
  total_amount: yup
    .number()
    .moreThan(0, "Debe ser mayor que 0")
    .required("Es requerido"),

  duration_periods: yup
    .number()
    .moreThan(0, "Debe ser mayor que 0")
    .required("Es requerido"),
  representativeNameClient: yup.string().required("Es requerido"),
  representativeNameLizer: yup.string().required("Es requerido"),
  representativeIdClient: yup.string().required("Es requerido"),
  representativeIdLizer: yup.string().required("Es requerido"),
});

export const validatorVoucherExport = yup.object().shape({
  start: yup
    .date()
    .max(new Date(), "La fecha debe ser menor al día de hoy")
    .required("Campo obligatorio"),

  end: yup
    .date()
    .min(yup.ref("start"), "La fecha final tiene que ser mayor a la inicial")
    .required("Campo obligatorio"),
});

export const createPurchaseOrderValidator = yup.object().shape({
  creationDate: yup
    .date()
    // .max(new Date(), "La fecha debe ser menor al día de hoy")
    .required("Campo obligatorio"),
  expiration: yup
    .date()
    // .max(new Date(), "La fecha debe ser menor al día de hoy")
    .required("Campo obligatorio"),
  productName: yup.string().required("Es requerido"),
  brand: yup.string().required("Es requerido"),
  providerName: yup.string().required("Es requerido"),
  reference: yup.string().required("Es requerido"),
  quantity: yup.number().required("Es requerido").moreThan(0, "Es requerido"),
  iva: yup.bool().required("Es requerido"),
  udPrice: yup.number().required("Es requerido").moreThan(0, "Es requerido"),
});

export const createRepairOrderValidator = yup.object().shape({
  date_issued: yup
    .date()
    // .max(new Date(), "La fecha debe ser menor al día de hoy")
    .required("Campo obligatorio"),
  date_event_expire: yup
    .date()
    // .max(new Date(), "La fecha debe ser menor al día de hoy")
    .required("Campo obligatorio"),
  type_repair_desc: yup.string().required("Es requerido"),
  repair_price: yup
    .number()
    .required("Es requerido")
    .moreThan(0, "Es requerido"),
  providerName: yup.string().required("Es requerido"),
  description: yup.string().required("Es requerido"),
});

export const CreateClientValidator = yup.object().shape({
  business_name: yup.string().required("Es requerido"),
  document_id: yup.string().required("Es requerido"),
  contact_name: yup.string().required("Es requerido"),
  city: yup.string().required("Es requerido"),
  address: yup.string().required("Es requerido"),
  contact_phone_number: yup.string().required("Es requerido"),
  email: yup
    .string()
    .email("Por favor ingrese un correo valido")
    .required("Es requerido"),
});

export const BillClientValidator = yup.object().shape({
  name: yup.string().required("Es requerido"),
  document_id: yup.string().required("Es requerido"),

  address: yup.string().required("Es requerido"),
  cityName: yup.string().required("Es requerido"),
  phone_number: yup.string().required("Es requerido"),
});
