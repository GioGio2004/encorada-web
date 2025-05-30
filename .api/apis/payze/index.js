"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var oas_1 = __importDefault(require("oas"));
var core_1 = __importDefault(require("api/dist/core"));
var openapi_json_1 = __importDefault(require("./openapi.json"));
var SDK = /** @class */ (function () {
    function SDK() {
        this.spec = oas_1.default.init(openapi_json_1.default);
        this.core = new core_1.default(this.spec, 'payze/v2 (api/6.1.3)');
    }
    /**
     * Optionally configure various options that the SDK allows.
     *
     * @param config Object of supported SDK options and toggles.
     * @param config.timeout Override the default `fetch` request timeout of 30 seconds. This number
     * should be represented in milliseconds.
     */
    SDK.prototype.config = function (config) {
        this.core.setConfig(config);
    };
    /**
     * If the API you're using requires authentication you can supply the required credentials
     * through this method and the library will magically determine how they should be used
     * within your API request.
     *
     * With the exception of OpenID and MutualTLS, it supports all forms of authentication
     * supported by the OpenAPI specification.
     *
     * @example <caption>HTTP Basic auth</caption>
     * sdk.auth('username', 'password');
     *
     * @example <caption>Bearer tokens (HTTP or OAuth 2)</caption>
     * sdk.auth('myBearerToken');
     *
     * @example <caption>API Keys</caption>
     * sdk.auth('myApiKey');
     *
     * @see {@link https://spec.openapis.org/oas/v3.0.3#fixed-fields-22}
     * @see {@link https://spec.openapis.org/oas/v3.1.0#fixed-fields-22}
     * @param values Your auth credentials for the API; can specify up to two strings or numbers.
     */
    SDK.prototype.auth = function () {
        var _a;
        var values = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            values[_i] = arguments[_i];
        }
        (_a = this.core).setAuth.apply(_a, values);
        return this;
    };
    /**
     * If the API you're using offers alternate server URLs, and server variables, you can tell
     * the SDK which one to use with this method. To use it you can supply either one of the
     * server URLs that are contained within the OpenAPI definition (along with any server
     * variables), or you can pass it a fully qualified URL to use (that may or may not exist
     * within the OpenAPI definition).
     *
     * @example <caption>Server URL with server variables</caption>
     * sdk.server('https://{region}.api.example.com/{basePath}', {
     *   name: 'eu',
     *   basePath: 'v14',
     * });
     *
     * @example <caption>Fully qualified server URL</caption>
     * sdk.server('https://eu.api.example.com/v14');
     *
     * @param url Server URL
     * @param variables An object of variables to replace into the server URL.
     */
    SDK.prototype.server = function (url, variables) {
        if (variables === void 0) { variables = {}; }
        this.core.setServer(url, variables);
    };
    /**
     * N/A not for external use.
     *
     * @summary Create Payout Account
     * @throws FetchError<400, types.PostBankaccountResponse400> Bad Request
     */
    SDK.prototype.postBankaccount = function (body) {
        return this.core.fetch('/bankaccount', 'post', body);
    };
    /**
     * N/A not for external use.
     *
     * @summary DELETE Payout Account ADMIN
     * @throws FetchError<400, types.DeleteBankaccountResponse400> Bad Request
     * @throws FetchError<404, types.DeleteBankaccountResponse404> Not Found
     */
    SDK.prototype.deleteBankaccount = function (body) {
        return this.core.fetch('/bankaccount', 'delete', body);
    };
    /**
     * N/A not for external use.
     *
     * @summary Update Payout Account ADMIN
     * @throws FetchError<400, types.PutBankaccountResponse400> Bad Request
     * @throws FetchError<404, types.PutBankaccountResponse404> Not Found
     */
    SDK.prototype.putBankaccount = function (body) {
        return this.core.fetch('/bankaccount', 'put', body);
    };
    /**
     * This API endpoint allows you to retrieve the list of enabled bank accounts for payouts.
     * The list of bank accounts indicates which accounts are eligible for receiving payout
     * transactions.OData is a standardized protocol for building and consuming RESTful APIs.
     * Supported query parameters are:
     * - $filter: Filter the payments based on specific criteria.
     * - $orderby: Specify the sorting order for the payments.
     * - $top: Limit the maximum number of payments to retrieve.
     * - $skip: Specify the number of payments to skip from the beginning.
     * Note: This endpoint supports pagination using the $top and $skip parameters.
     *
     * @summary GET Payout Accounts
     * @throws FetchError<400, types.GetBankaccountQueryTokenBasedResponse400> Bad Request
     * @throws FetchError<404, types.GetBankaccountQueryTokenBasedResponse404> Not Found
     */
    SDK.prototype.getBankaccountQueryTokenBased = function (metadata) {
        return this.core.fetch('/bankaccount/query/token-based', 'get', metadata);
    };
    /**
     * This API endpoint allows you to retrieve the list of enabled bank accounts for payouts.
     * The list of bank accounts indicates which accounts are eligible for receiving payout
     * transactions.OData is a standardized protocol for building and consuming RESTful APIs.
     * Supported query parameters are:
     * - $filter: Filter the resource based on specific criteria.
     * - $orderby: Specify the sorting order for the resource.
     * - $top: Limit the maximum number of resources to retrieve.
     * - $skip: Specify the number of resources to skip from the beginning.
     * Note: This endpoint supports pagination using the $top and $skip parameters.
     *
     * @summary GET Payout Accounts ADMIN
     * @throws FetchError<400, types.GetBankaccountQueryRootResponse400> Bad Request
     * @throws FetchError<404, types.GetBankaccountQueryRootResponse404> Not Found
     */
    SDK.prototype.getBankaccountQueryRoot = function (metadata) {
        return this.core.fetch('/bankaccount/query/root', 'get', metadata);
    };
    /**
     * N/A not for external use.
     *
     * @summary Create Certificate for the Company
     * @throws FetchError<400, types.PostCertificateResponse400> Bad Request
     * @throws FetchError<404, types.PostCertificateResponse404> Not Found
     */
    SDK.prototype.postCertificate = function (body) {
        return this.core.fetch('/certificate', 'post', body);
    };
    /**
     * N/A not for external use.
     *
     * @summary Company Payments ADMIN
     * @throws FetchError<400, types.GetCompanyPaymentsResponse400> Bad Request
     * @throws FetchError<404, types.GetCompanyPaymentsResponse404> Not Found
     */
    SDK.prototype.getCompanyPayments = function (metadata) {
        return this.core.fetch('/company/payments', 'get', metadata);
    };
    /**
     * This API endpoint allows you to retrieve the list of allowed currencies for performing
     * payments.
     * The list of currencies indicates which currencies are supported for payment
     * transactions.
     *
     * @summary Allowed Currencies
     * @throws FetchError<400, types.GetCompanyCurrenciesResponse400> Bad Request
     * @throws FetchError<404, types.GetCompanyCurrenciesResponse404> Not Found
     */
    SDK.prototype.getCompanyCurrencies = function (metadata) {
        return this.core.fetch('/company/currencies', 'get', metadata);
    };
    /**
     * N/A not for external use.
     *
     * @summary INSIGHT OVERVIEW
     * @throws FetchError<400, types.GetInsightoverviewSummaryTokenBasedResponse400> Bad Request
     * @throws FetchError<404, types.GetInsightoverviewSummaryTokenBasedResponse404> Not Found
     */
    SDK.prototype.getInsightoverviewSummaryTokenBased = function (metadata) {
        return this.core.fetch('/insightoverview/summary/token-based', 'get', metadata);
    };
    /**
     * N/A not for external use.
     *
     * @summary INSIGHT OVERVIEW SUMMARY
     * @throws FetchError<400, types.GetInsightoverviewSummaryResponse400> Bad Request
     * @throws FetchError<404, types.GetInsightoverviewSummaryResponse404> Not Found
     */
    SDK.prototype.getInsightoverviewSummary = function (metadata) {
        return this.core.fetch('/insightoverview/summary', 'get', metadata);
    };
    /**
     * N/A not for external use.
     *
     * @summary INSIGHT OVERVIEW GTV
     * @throws FetchError<400, types.GetInsightoverviewGtvTokenBasedResponse400> Bad Request
     * @throws FetchError<404, types.GetInsightoverviewGtvTokenBasedResponse404> Not Found
     */
    SDK.prototype.getInsightoverviewGtvTokenBased = function (metadata) {
        return this.core.fetch('/insightoverview/gtv/token-based', 'get', metadata);
    };
    /**
     * N/A not for external use.
     *
     * @summary INSIGHT OVERVIEW GTV ADMIN
     * @throws FetchError<400, types.GetInsightoverviewGtvResponse400> Bad Request
     * @throws FetchError<404, types.GetInsightoverviewGtvResponse404> Not Found
     */
    SDK.prototype.getInsightoverviewGtv = function (metadata) {
        return this.core.fetch('/insightoverview/gtv', 'get', metadata);
    };
    /**
     * N/A not for external use.
     *
     * @summary INSIGHT OVERVIEW CARD NETWORK SUMMARY
     * @throws FetchError<400, types.GetInsightoverviewCardNetworkSummaryResponse400> Bad Request
     * @throws FetchError<404, types.GetInsightoverviewCardNetworkSummaryResponse404> Not Found
     */
    SDK.prototype.getInsightoverviewCardNetworkSummary = function (metadata) {
        return this.core.fetch('/insightoverview/card-network/summary', 'get', metadata);
    };
    /**
     * This API endpoint allows you to capture funds from a previously pre-authorized payment.
     * Once a payment has been preauthorized, use this method to
     * initiate the capturing of the authorized funds.
     *
     * @summary Capture payment
     * @throws FetchError<400, types.PutPaymentCaptureResponse400> Bad Request
     * @throws FetchError<404, types.PutPaymentCaptureResponse404> Not Found
     */
    SDK.prototype.putPaymentCapture = function (body) {
        return this.core.fetch('/payment/capture', 'put', body);
    };
    /**
     * This API endpoint allows you to retrieve payments using OData query parameters.
     * OData is a standardized protocol for building and consuming RESTful APIs.
     * Supported query parameters are:
     * - $filter: Filter the payments based on specific criteria.
     * - $orderby: Specify the sorting order for the payments.
     * - $top: Limit the maximum number of payments to retrieve.
     * - $skip: Specify the number of payments to skip from the beginning.
     * Note: This endpoint supports pagination using the $top and $skip parameters.
     *
     * @summary GET Payments
     * @throws FetchError<400, types.GetPaymentQueryTokenBasedResponse400> Bad Request
     * @throws FetchError<404, types.GetPaymentQueryTokenBasedResponse404> Not Found
     */
    SDK.prototype.getPaymentQueryTokenBased = function (metadata) {
        return this.core.fetch('/payment/query/token-based', 'get', metadata);
    };
    /**
     * This API endpoint allows you to retrieve payments using OData query parameters
     * not limiting to token.company id.
     * OData is a standardized protocol for building and consuming RESTful APIs.
     * Supported query parameters are:
     * - $filter: Filter the payments based on specific criteria.
     * - $orderby: Specify the sorting order for the payments.
     * - $top: Limit the maximum number of payments to retrieve.
     * - $skip: Specify the number of payments to skip from the beginning.
     * Note: This endpoint supports pagination using the $top and $skip parameters.
     *
     * @summary GET Payments ADMIN
     * @throws FetchError<400, types.GetPaymentQueryRootResponse400> Bad Request
     * @throws FetchError<404, types.GetPaymentQueryRootResponse404> Not Found
     */
    SDK.prototype.getPaymentQueryRoot = function (metadata) {
        return this.core.fetch('/payment/query/root', 'get', metadata);
    };
    /**
     * This API endpoint allows you to retrieve the payment receipt.
     *
     * @summary Get Payment Receipt
     * @throws FetchError<400, types.GetPaymentReceiptResponse400> Bad Request
     * @throws FetchError<404, types.GetPaymentReceiptResponse404> Not Found
     */
    SDK.prototype.getPaymentReceipt = function (metadata) {
        return this.core.fetch('/payment/receipt', 'get', metadata);
    };
    /**
     * This API endpoint allows you to update payment receipts.
     * Users who use OFD on their side can upload payment receipts using this endpoint.
     *
     * @summary Update Payment Receipt
     * @throws FetchError<400, types.PutPaymentReceiptResponse400> Bad Request
     * @throws FetchError<404, types.PutPaymentReceiptResponse404> Not Found
     */
    SDK.prototype.putPaymentReceipt = function (body) {
        return this.core.fetch('/payment/receipt', 'put', body);
    };
    /**
     * This API endpoint allows merchants to securely process
     * payments like Just-Pay, Apple Pay, Google Pay, and Save Card.
     * This endpoint simplifies payment integration by providing parameters for customer
     * information,payment details, and authentication tokens.
     * It supports holding funds with pre-authorization,
     * and ensures secure transactions using card tokenization.
     * HTTP PUT honors request idempotency, Ensuring that
     * sending the same request multiple times has the same effect as sending it once.
     *
     * @summary Create payment
     * @throws FetchError<400, types.PutPaymentResponse400> Bad Request
     * @throws FetchError<404, types.PutPaymentResponse404> Not Found
     */
    SDK.prototype.putPayment = function (body) {
        return this.core.fetch('/payment', 'put', body);
    };
    /**
     * This API endpoint allows you to fiscalize existing payment.
     * Once a downpayment has been initiated, use this method to
     * fiscalize with given AdvanceContractId.
     *
     * @summary Fiscalize payment
     * @throws FetchError<400, types.PostPaymentFiscalizeResponse400> Bad Request
     * @throws FetchError<404, types.PostPaymentFiscalizeResponse404> Not Found
     */
    SDK.prototype.postPaymentFiscalize = function (body) {
        return this.core.fetch('/payment/fiscalize', 'post', body);
    };
    /**
     * This API endpoint allows you to initiate a partial or full refunds for a previous
     * payment transaction.
     * By providing the Transaction ID and necessary details,
     * you can request a refund for a specific payment.
     * HTTP PUT honors request idempotency, Ensuring that
     * sending the same request multiple times has the same effect as sending it once.
     *
     * @summary Refund Payment
     * @throws FetchError<400, types.PutPaymentRefundResponse400> Bad Request
     * @throws FetchError<404, types.PutPaymentRefundResponse404> Not Found
     */
    SDK.prototype.putPaymentRefund = function (body) {
        return this.core.fetch('/payment/refund', 'put', body);
    };
    /**
     * This API endpoint allows you to retrieve payment refund information by querying
     * the payment refund resource using Transaction Id.
     *
     * @summary GET Refunds
     * @throws FetchError<400, types.GetPaymentRefundQueryTokenBasedResponse400> Bad Request
     * @throws FetchError<404, types.GetPaymentRefundQueryTokenBasedResponse404> Not Found
     */
    SDK.prototype.getPaymentRefundQueryTokenBased = function (metadata) {
        return this.core.fetch('/payment/refund/query/token-based', 'get', metadata);
    };
    /**
     * This API endpoint allows you to retrieve payment refund information by querying
     * the payment refund resource using Transaction Id.
     *
     * @summary GET Refunds Admin
     * @throws FetchError<400, types.GetPaymentRefundQueryRootResponse400> Bad Request
     * @throws FetchError<404, types.GetPaymentRefundQueryRootResponse404> Not Found
     */
    SDK.prototype.getPaymentRefundQueryRoot = function (metadata) {
        return this.core.fetch('/payment/refund/query/root', 'get', metadata);
    };
    /**
     * This API endpoint allows you to update refund receipts.
     * Users who use OFD on their side can upload refund receipts using this endpoint.
     *
     * @summary Update Refund Receipt
     * @throws FetchError<400, types.PutPaymentRefundReceiptResponse400> Bad Request
     * @throws FetchError<404, types.PutPaymentRefundReceiptResponse404> Not Found
     */
    SDK.prototype.putPaymentRefundReceipt = function (body) {
        return this.core.fetch('/payment/refund/receipt', 'put', body);
    };
    /**
     * This API method allows you to modify the payout splits for a specific payment.
     * Payout splits define how the payment amount is distributed among different recipients.
     * It supports payments that have already been created with splits.
     * Please, note that modifications to the split are only supported
     * until the final scheduled payment is paid out;
     * HTTP PUT honors request idempotency, Ensuring that
     * sending the same request multiple times has the same effect as sending it once.
     *
     * @summary Split Update
     * @throws FetchError<400, types.PutPaymentSplitResponse400> Bad Request
     * @throws FetchError<404, types.PutPaymentSplitResponse404> Not Found
     */
    SDK.prototype.putPaymentSplit = function (body) {
        return this.core.fetch('/payment/split', 'put', body);
    };
    /**
     * This API endpoint allows you to retrieve payment split data using OData queries.
     * OData is a standardized protocol for building and consuming RESTful APIs.
     * Supported query parameters are:
     * - $filter: Filter the resource based on specific criteria.
     * - $orderby: Specify the sorting order for the resource.
     * - $top: Limit the maximum number of resources to retrieve.
     * - $skip: Specify the number of resources to skip from the beginning.
     * Note: This endpoint supports pagination using the $top and $skip parameters.
     *
     * @summary GET Splits
     * @throws FetchError<400, types.GetPaymentSplitQueryTokenBasedResponse400> Bad Request
     * @throws FetchError<404, types.GetPaymentSplitQueryTokenBasedResponse404> Not Found
     */
    SDK.prototype.getPaymentSplitQueryTokenBased = function (metadata) {
        return this.core.fetch('/payment/split/query/token-based', 'get', metadata);
    };
    /**
     * This API endpoint allows you to retrieve payment split data using OData queries.
     * OData is a standardized protocol for building and consuming RESTful APIs.
     * Supported query parameters are:
     * - $filter: Filter the resource based on specific criteria.
     * - $orderby: Specify the sorting order for the resource.
     * - $top: Limit the maximum number of resources to retrieve.
     * - $skip: Specify the number of resources to skip from the beginning.
     * Note: This endpoint supports pagination using the $top and $skip parameters.
     *
     * @summary GET Splits ADMIN
     * @throws FetchError<400, types.GetPaymentSplitQueryRootResponse400> Bad Request
     * @throws FetchError<404, types.GetPaymentSplitQueryRootResponse404> Not Found
     */
    SDK.prototype.getPaymentSplitQueryRoot = function (metadata) {
        return this.core.fetch('/payment/split/query/root', 'get', metadata);
    };
    /**
     * This API endpoint cancels all pending and scheduled splits for the payment.
     * Split cancellation is allowed until the last scheduled split has been paid out.
     *
     * @summary Cancel Splits
     * @throws FetchError<400, types.PutPaymentSplitCancelResponse400> Bad Request
     * @throws FetchError<404, types.PutPaymentSplitCancelResponse404> Not Found
     */
    SDK.prototype.putPaymentSplitCancel = function (body) {
        return this.core.fetch('/payment/split/cancel', 'put', body);
    };
    /**
     * This API endpoint allows you to request an available balance payout to a bank account.
     * The payout is initiated from the available balance in the company's account.
     * Please not this method does not support Idempotency.
     *
     * @summary Create Payout
     * @throws FetchError<400, types.PostPayoutResponse400> Bad Request
     */
    SDK.prototype.postPayout = function (body) {
        return this.core.fetch('/payout', 'post', body);
    };
    /**
     * This API endpoint allows you to retrieve the status and data about previously requested
     * payouts.
     * OData is a standardized protocol for building and consuming RESTful APIs.
     * Supported query parameters are:
     * - $filter: Filter the resource based on specific criteria.
     * - $orderby: Specify the sorting order for the resource.
     * - $top: Limit the maximum number of resources to retrieve.
     * - $skip: Specify the number of resources to skip from the beginning.
     * Note: This endpoint supports pagination using the $top and $skip parameters.
     *
     * @summary Get Payouts
     * @throws FetchError<400, types.GetPayoutQueryTokenBasedResponse400> Bad Request
     * @throws FetchError<404, types.GetPayoutQueryTokenBasedResponse404> Not Found
     */
    SDK.prototype.getPayoutQueryTokenBased = function (metadata) {
        return this.core.fetch('/payout/query/token-based', 'get', metadata);
    };
    /**
     * This API endpoint allows you to retrieve the status and data about previously requested
     * payouts.
     * OData is a standardized protocol for building and consuming RESTful APIs.
     * Supported query parameters are:
     * - $filter: Filter the resource based on specific criteria.
     * - $orderby: Specify the sorting order for the resource.
     * - $top: Limit the maximum number of resources to retrieve.
     * - $skip: Specify the number of resources to skip from the beginning.
     * Note: This endpoint supports pagination using the $top and $skip parameters.
     *
     * @summary GET Payouts ADMIN
     * @throws FetchError<400, types.GetPayoutQueryRootResponse400> Bad Request
     * @throws FetchError<404, types.GetPayoutQueryRootResponse404> Not Found
     */
    SDK.prototype.getPayoutQueryRoot = function (metadata) {
        return this.core.fetch('/payout/query/root', 'get', metadata);
    };
    /**
     * N/A not for external use.
     *
     * @summary Create Processor Bank ADMIN
     * @throws FetchError<400, types.PostProcessorbankResponse400> Bad Request
     */
    SDK.prototype.postProcessorbank = function (body) {
        return this.core.fetch('/processorbank', 'post', body);
    };
    /**
     * N/A not for external use.
     *
     * @summary Update Processor Bank ADMIN
     * @throws FetchError<400, types.PutProcessorbankResponse400> Bad Request
     */
    SDK.prototype.putProcessorbank = function (body) {
        return this.core.fetch('/processorbank', 'put', body);
    };
    /**
     * N/A not for external use.
     *
     * @summary GET Processor Bank ADMIN
     * @throws FetchError<400, types.GetProcessorbankResponse400> Bad Request
     * @throws FetchError<404, types.GetProcessorbankResponse404> Not Found
     */
    SDK.prototype.getProcessorbank = function (metadata) {
        return this.core.fetch('/processorbank', 'get', metadata);
    };
    /**
     * N/A not for external use.
     *
     * @summary DELETE Processor Bank ADMIN
     * @throws FetchError<400, types.DeleteProcessorbankResponse400> Bad Request
     */
    SDK.prototype.deleteProcessorbank = function (metadata) {
        return this.core.fetch('/processorbank', 'delete', metadata);
    };
    SDK.prototype.postStatementUploadFile = function (body, metadata) {
        return this.core.fetch('/statement/upload-file', 'post', body, metadata);
    };
    SDK.prototype.postStatementGetStatements = function () {
        return this.core.fetch('/statement/get-statements', 'post');
    };
    /**
     * Health check info endpoints.
     *
     */
    SDK.prototype.getLive = function () {
        return this.core.fetch('/live', 'get');
    };
    /**
     * Health check info endpoints.
     *
     */
    SDK.prototype.getReady = function () {
        return this.core.fetch('/ready', 'get');
    };
    return SDK;
}());
var createSDK = (function () { return new SDK(); })();
module.exports = createSDK;
