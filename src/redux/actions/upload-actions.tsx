const SELECT_ALPHA_BROKER = "opacity/upload/select_alpha_broker";
const SELECT_BETA_BROKER = "opacity/upload/select_beta_broker";
const SELECT_RETENTION_YEARS = "opacity/upload/select_retention_years";

const UPLOAD = "opacity/upload/stream";
const INVOICED = "opacity/upload/stream-invoiced";
const PAYMENT_PENDING = "opacity/upload/stream-payment-pending";
const PAYMENT_CONFIRMED = "opacity/upload/stream-payment-confirmed";
const METAMASK_PAYMENT_PENDING = "opacity/upload/metamask-payment-pending";
const METAMASK_TRANSACTION = "opacity/upload/metamask-transaction";
const METAMASK_ACCOUNT_ERROR = "opacity/upload/metamask-account-error";
const METAMASK_PAYMENT_SUCCESS = "opacity/upload/metamask-payment-success";
const METAMASK_PAYMENT_ERROR = "opacity/upload/metamask-payment-error";
const CHUNKS_PROGRESS = "opacity/upload/stream-chunks-progress";
const CHUNKS_UPLOADED = "opacity/upload/stream-chunks-uploaded";
const CHUNKS_DELIVERED = "opacity/upload/stream-chunks-delivered";
const UPLOAD_PROGRESS = "opacity/upload/stream-upload-progress";
const UPLOAD_SUCCESS = "opacity/upload/stream-upload-success";
const UPLOAD_ERROR = "opacity/upload/stream-upload-error";

const ACTIONS = Object.freeze({
  // actions
  SELECT_ALPHA_BROKER,
  SELECT_BETA_BROKER,
  SELECT_RETENTION_YEARS,

  UPLOAD,
  INVOICED,
  PAYMENT_PENDING,
  PAYMENT_CONFIRMED,
  METAMASK_PAYMENT_PENDING,
  METAMASK_TRANSACTION,
  METAMASK_ACCOUNT_ERROR,
  METAMASK_PAYMENT_SUCCESS,
  METAMASK_PAYMENT_ERROR,
  CHUNKS_PROGRESS,
  CHUNKS_UPLOADED,
  CHUNKS_DELIVERED,
  UPLOAD_PROGRESS,
  UPLOAD_SUCCESS,
  UPLOAD_ERROR,

  selectAlphaBrokerAction: url => ({
    type: ACTIONS.SELECT_ALPHA_BROKER,
    payload: url
  }),
  selectBetaBrokerAction: url => ({
    type: ACTIONS.SELECT_BETA_BROKER,
    payload: url
  }),
  selectRetentionYears: value => ({
    type: ACTIONS.SELECT_RETENTION_YEARS,
    payload: value
  }),

  // Stream actions
  // TODO: Use static type checker instead of destructuring to document.
  streamUpload: ({ file, retentionYears, brokers }) => ({
    type: ACTIONS.UPLOAD,
    payload: { file, retentionYears, brokers }
  }),
  streamInvoiced: ({ cost, ethAddress }) => ({
    type: ACTIONS.INVOICED,
    payload: { cost, ethAddress }
  }),
  streamPaymentPending: () => ({
    type: ACTIONS.PAYMENT_PENDING
  }),
  streamPaymentConfirmed: ({ filename, handle, numberOfChunks }) => ({
    type: ACTIONS.PAYMENT_CONFIRMED,
    payload: { filename, handle, numberOfChunks }
  }),
  metamaskPaymentPending: ({ cost, ethAddress, gasPrice }) => ({
    type: ACTIONS.METAMASK_PAYMENT_PENDING,
    payload: { cost, ethAddress, gasPrice }
  }),
  metamaskTransaction: ({ to, from, cost, gasPrice }) => ({
    type: ACTIONS.METAMASK_TRANSACTION,
    payload: { to, from, cost, gasPrice }
  }),
  metamaskAccountError: ({ error }) => ({
    type: ACTIONS.METAMASK_ACCOUNT_ERROR,
    payload: { error }
  }),
  metamaskPaymentSuccess: () => ({
    type: ACTIONS.METAMASK_PAYMENT_SUCCESS
  }),
  metamaskPaymentError: ({ error }) => ({
    type: ACTIONS.METAMASK_PAYMENT_ERROR,
    payload: { error }
  }),
  streamChunksProgress: ({ progress }) => ({
    type: ACTIONS.CHUNKS_PROGRESS,
    payload: { progress }
  }),
  streamChunksUploaded: () => ({
    type: ACTIONS.CHUNKS_UPLOADED,
    payload: {}
  }),
  streamChunksDelivered: ({ handle }) => ({
    type: ACTIONS.CHUNKS_DELIVERED,
    payload: { handle }
  }),
  streamUploadProgress: ({ progress }) => ({
    type: ACTIONS.UPLOAD_PROGRESS,
    payload: { progress }
  }),
  streamUploadSuccess: ({ handle }) => ({
    type: ACTIONS.UPLOAD_SUCCESS,
    payload: { handle }
  }),
  streamUploadError: ({ handle, err }) => ({
    type: ACTIONS.UPLOAD_ERROR,
    payload: { err }
  })
});

export default ACTIONS;
