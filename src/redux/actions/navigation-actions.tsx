const VISIT_UPLOAD_FORM = "opacity/navigation/visit_upload_form";
const VISIT_DOWNLOAD_FORM = "opacity/navigation/visit_download_form";
const ERROR_PAGE = "opacity/navigation/error_page";
const BROKERS_DOWN = "opacity/navigation/brokers_down";

const ACTIONS = Object.freeze({
  // actions
  VISIT_UPLOAD_FORM,
  VISIT_DOWNLOAD_FORM,
  ERROR_PAGE,
  BROKERS_DOWN,

  // actionCreators
  visitUploadFormAction: () => ({
    type: ACTIONS.VISIT_UPLOAD_FORM
  }),
  visitDownloadFormAction: () => ({
    type: ACTIONS.VISIT_DOWNLOAD_FORM
  }),
  errorPageAction: () => ({
    type: ACTIONS.ERROR_PAGE
  }),
  brokersDownPageAction: () => ({
    type: ACTIONS.BROKERS_DOWN
  })
});

export default ACTIONS;
