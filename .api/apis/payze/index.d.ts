import type * as types from './types';
import type { ConfigOptions, FetchResponse } from 'api/dist/core';
import Oas from 'oas';
import APICore from 'api/dist/core';
declare class SDK {
    spec: Oas;
    core: APICore;
    constructor();
    /**
     * Optionally configure various options that the SDK allows.
     *
     * @param config Object of supported SDK options and toggles.
     * @param config.timeout Override the default `fetch` request timeout of 30 seconds. This number
     * should be represented in milliseconds.
     */
    config(config: ConfigOptions): void;
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
    auth(...values: string[] | number[]): this;
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
    server(url: string, variables?: {}): void;
    /**
     * N/A not for external use.
     *
     * @summary Create Payout Account
     * @throws FetchError<400, types.PostBankaccountResponse400> Bad Request
     */
    postBankaccount(body?: types.PostBankaccountBodyParam): Promise<FetchResponse<200, types.PostBankaccountResponse200>>;
    /**
     * N/A not for external use.
     *
     * @summary DELETE Payout Account ADMIN
     * @throws FetchError<400, types.DeleteBankaccountResponse400> Bad Request
     * @throws FetchError<404, types.DeleteBankaccountResponse404> Not Found
     */
    deleteBankaccount(body?: types.DeleteBankaccountBodyParam): Promise<FetchResponse<200, types.DeleteBankaccountResponse200>>;
    /**
     * N/A not for external use.
     *
     * @summary Update Payout Account ADMIN
     * @throws FetchError<400, types.PutBankaccountResponse400> Bad Request
     * @throws FetchError<404, types.PutBankaccountResponse404> Not Found
     */
    putBankaccount(body?: types.PutBankaccountBodyParam): Promise<FetchResponse<200, types.PutBankaccountResponse200>>;
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
    getBankaccountQueryTokenBased(metadata?: types.GetBankaccountQueryTokenBasedMetadataParam): Promise<FetchResponse<200, types.GetBankaccountQueryTokenBasedResponse200>>;
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
    getBankaccountQueryRoot(metadata?: types.GetBankaccountQueryRootMetadataParam): Promise<FetchResponse<200, types.GetBankaccountQueryRootResponse200>>;
    /**
     * N/A not for external use.
     *
     * @summary Create Certificate for the Company
     * @throws FetchError<400, types.PostCertificateResponse400> Bad Request
     * @throws FetchError<404, types.PostCertificateResponse404> Not Found
     */
    postCertificate(body?: types.PostCertificateBodyParam): Promise<FetchResponse<200, types.PostCertificateResponse200>>;
    /**
     * N/A not for external use.
     *
     * @summary Company Payments ADMIN
     * @throws FetchError<400, types.GetCompanyPaymentsResponse400> Bad Request
     * @throws FetchError<404, types.GetCompanyPaymentsResponse404> Not Found
     */
    getCompanyPayments(metadata?: types.GetCompanyPaymentsMetadataParam): Promise<FetchResponse<200, types.GetCompanyPaymentsResponse200>>;
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
    getCompanyCurrencies(metadata?: types.GetCompanyCurrenciesMetadataParam): Promise<FetchResponse<200, types.GetCompanyCurrenciesResponse200>>;
    /**
     * N/A not for external use.
     *
     * @summary INSIGHT OVERVIEW
     * @throws FetchError<400, types.GetInsightoverviewSummaryTokenBasedResponse400> Bad Request
     * @throws FetchError<404, types.GetInsightoverviewSummaryTokenBasedResponse404> Not Found
     */
    getInsightoverviewSummaryTokenBased(metadata: types.GetInsightoverviewSummaryTokenBasedMetadataParam): Promise<FetchResponse<200, types.GetInsightoverviewSummaryTokenBasedResponse200>>;
    /**
     * N/A not for external use.
     *
     * @summary INSIGHT OVERVIEW SUMMARY
     * @throws FetchError<400, types.GetInsightoverviewSummaryResponse400> Bad Request
     * @throws FetchError<404, types.GetInsightoverviewSummaryResponse404> Not Found
     */
    getInsightoverviewSummary(metadata: types.GetInsightoverviewSummaryMetadataParam): Promise<FetchResponse<200, types.GetInsightoverviewSummaryResponse200>>;
    /**
     * N/A not for external use.
     *
     * @summary INSIGHT OVERVIEW GTV
     * @throws FetchError<400, types.GetInsightoverviewGtvTokenBasedResponse400> Bad Request
     * @throws FetchError<404, types.GetInsightoverviewGtvTokenBasedResponse404> Not Found
     */
    getInsightoverviewGtvTokenBased(metadata: types.GetInsightoverviewGtvTokenBasedMetadataParam): Promise<FetchResponse<200, types.GetInsightoverviewGtvTokenBasedResponse200>>;
    /**
     * N/A not for external use.
     *
     * @summary INSIGHT OVERVIEW GTV ADMIN
     * @throws FetchError<400, types.GetInsightoverviewGtvResponse400> Bad Request
     * @throws FetchError<404, types.GetInsightoverviewGtvResponse404> Not Found
     */
    getInsightoverviewGtv(metadata: types.GetInsightoverviewGtvMetadataParam): Promise<FetchResponse<200, types.GetInsightoverviewGtvResponse200>>;
    /**
     * N/A not for external use.
     *
     * @summary INSIGHT OVERVIEW CARD NETWORK SUMMARY
     * @throws FetchError<400, types.GetInsightoverviewCardNetworkSummaryResponse400> Bad Request
     * @throws FetchError<404, types.GetInsightoverviewCardNetworkSummaryResponse404> Not Found
     */
    getInsightoverviewCardNetworkSummary(metadata?: types.GetInsightoverviewCardNetworkSummaryMetadataParam): Promise<FetchResponse<200, types.GetInsightoverviewCardNetworkSummaryResponse200>>;
    /**
     * This API endpoint allows you to capture funds from a previously pre-authorized payment.
     * Once a payment has been preauthorized, use this method to
     * initiate the capturing of the authorized funds.
     *
     * @summary Capture payment
     * @throws FetchError<400, types.PutPaymentCaptureResponse400> Bad Request
     * @throws FetchError<404, types.PutPaymentCaptureResponse404> Not Found
     */
    putPaymentCapture(body: types.PutPaymentCaptureBodyParam): Promise<FetchResponse<200, types.PutPaymentCaptureResponse200>>;
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
    getPaymentQueryTokenBased(metadata?: types.GetPaymentQueryTokenBasedMetadataParam): Promise<FetchResponse<200, types.GetPaymentQueryTokenBasedResponse200>>;
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
    getPaymentQueryRoot(metadata?: types.GetPaymentQueryRootMetadataParam): Promise<FetchResponse<200, types.GetPaymentQueryRootResponse200>>;
    /**
     * This API endpoint allows you to retrieve the payment receipt.
     *
     * @summary Get Payment Receipt
     * @throws FetchError<400, types.GetPaymentReceiptResponse400> Bad Request
     * @throws FetchError<404, types.GetPaymentReceiptResponse404> Not Found
     */
    getPaymentReceipt(metadata: types.GetPaymentReceiptMetadataParam): Promise<FetchResponse<200, types.GetPaymentReceiptResponse200>>;
    /**
     * This API endpoint allows you to update payment receipts.
     * Users who use OFD on their side can upload payment receipts using this endpoint.
     *
     * @summary Update Payment Receipt
     * @throws FetchError<400, types.PutPaymentReceiptResponse400> Bad Request
     * @throws FetchError<404, types.PutPaymentReceiptResponse404> Not Found
     */
    putPaymentReceipt(body?: types.PutPaymentReceiptBodyParam): Promise<FetchResponse<200, types.PutPaymentReceiptResponse200>>;
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
    putPayment(body: types.PutPaymentBodyParam): Promise<FetchResponse<200, types.PutPaymentResponse200>>;
    /**
     * This API endpoint allows you to fiscalize existing payment.
     * Once a downpayment has been initiated, use this method to
     * fiscalize with given AdvanceContractId.
     *
     * @summary Fiscalize payment
     * @throws FetchError<400, types.PostPaymentFiscalizeResponse400> Bad Request
     * @throws FetchError<404, types.PostPaymentFiscalizeResponse404> Not Found
     */
    postPaymentFiscalize(body?: types.PostPaymentFiscalizeBodyParam): Promise<FetchResponse<200, types.PostPaymentFiscalizeResponse200>>;
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
    putPaymentRefund(body: types.PutPaymentRefundBodyParam): Promise<FetchResponse<200, types.PutPaymentRefundResponse200>>;
    /**
     * This API endpoint allows you to retrieve payment refund information by querying
     * the payment refund resource using Transaction Id.
     *
     * @summary GET Refunds
     * @throws FetchError<400, types.GetPaymentRefundQueryTokenBasedResponse400> Bad Request
     * @throws FetchError<404, types.GetPaymentRefundQueryTokenBasedResponse404> Not Found
     */
    getPaymentRefundQueryTokenBased(metadata?: types.GetPaymentRefundQueryTokenBasedMetadataParam): Promise<FetchResponse<200, types.GetPaymentRefundQueryTokenBasedResponse200>>;
    /**
     * This API endpoint allows you to retrieve payment refund information by querying
     * the payment refund resource using Transaction Id.
     *
     * @summary GET Refunds Admin
     * @throws FetchError<400, types.GetPaymentRefundQueryRootResponse400> Bad Request
     * @throws FetchError<404, types.GetPaymentRefundQueryRootResponse404> Not Found
     */
    getPaymentRefundQueryRoot(metadata?: types.GetPaymentRefundQueryRootMetadataParam): Promise<FetchResponse<200, types.GetPaymentRefundQueryRootResponse200>>;
    /**
     * This API endpoint allows you to update refund receipts.
     * Users who use OFD on their side can upload refund receipts using this endpoint.
     *
     * @summary Update Refund Receipt
     * @throws FetchError<400, types.PutPaymentRefundReceiptResponse400> Bad Request
     * @throws FetchError<404, types.PutPaymentRefundReceiptResponse404> Not Found
     */
    putPaymentRefundReceipt(body?: types.PutPaymentRefundReceiptBodyParam): Promise<FetchResponse<200, types.PutPaymentRefundReceiptResponse200>>;
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
    putPaymentSplit(body: types.PutPaymentSplitBodyParam): Promise<FetchResponse<200, types.PutPaymentSplitResponse200>>;
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
    getPaymentSplitQueryTokenBased(metadata?: types.GetPaymentSplitQueryTokenBasedMetadataParam): Promise<FetchResponse<200, types.GetPaymentSplitQueryTokenBasedResponse200>>;
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
    getPaymentSplitQueryRoot(metadata?: types.GetPaymentSplitQueryRootMetadataParam): Promise<FetchResponse<200, types.GetPaymentSplitQueryRootResponse200>>;
    /**
     * This API endpoint cancels all pending and scheduled splits for the payment.
     * Split cancellation is allowed until the last scheduled split has been paid out.
     *
     * @summary Cancel Splits
     * @throws FetchError<400, types.PutPaymentSplitCancelResponse400> Bad Request
     * @throws FetchError<404, types.PutPaymentSplitCancelResponse404> Not Found
     */
    putPaymentSplitCancel(body?: types.PutPaymentSplitCancelBodyParam): Promise<FetchResponse<200, types.PutPaymentSplitCancelResponse200>>;
    /**
     * This API endpoint allows you to request an available balance payout to a bank account.
     * The payout is initiated from the available balance in the company's account.
     * Please not this method does not support Idempotency.
     *
     * @summary Create Payout
     * @throws FetchError<400, types.PostPayoutResponse400> Bad Request
     */
    postPayout(body: types.PostPayoutBodyParam): Promise<FetchResponse<200, types.PostPayoutResponse200>>;
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
    getPayoutQueryTokenBased(metadata?: types.GetPayoutQueryTokenBasedMetadataParam): Promise<FetchResponse<200, types.GetPayoutQueryTokenBasedResponse200>>;
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
    getPayoutQueryRoot(metadata?: types.GetPayoutQueryRootMetadataParam): Promise<FetchResponse<200, types.GetPayoutQueryRootResponse200>>;
    /**
     * N/A not for external use.
     *
     * @summary Create Processor Bank ADMIN
     * @throws FetchError<400, types.PostProcessorbankResponse400> Bad Request
     */
    postProcessorbank(body: types.PostProcessorbankBodyParam): Promise<FetchResponse<200, types.PostProcessorbankResponse200>>;
    /**
     * N/A not for external use.
     *
     * @summary Update Processor Bank ADMIN
     * @throws FetchError<400, types.PutProcessorbankResponse400> Bad Request
     */
    putProcessorbank(body: types.PutProcessorbankBodyParam): Promise<FetchResponse<200, types.PutProcessorbankResponse200>>;
    /**
     * N/A not for external use.
     *
     * @summary GET Processor Bank ADMIN
     * @throws FetchError<400, types.GetProcessorbankResponse400> Bad Request
     * @throws FetchError<404, types.GetProcessorbankResponse404> Not Found
     */
    getProcessorbank(metadata?: types.GetProcessorbankMetadataParam): Promise<FetchResponse<200, types.GetProcessorbankResponse200>>;
    /**
     * N/A not for external use.
     *
     * @summary DELETE Processor Bank ADMIN
     * @throws FetchError<400, types.DeleteProcessorbankResponse400> Bad Request
     */
    deleteProcessorbank(metadata?: types.DeleteProcessorbankMetadataParam): Promise<FetchResponse<200, types.DeleteProcessorbankResponse200>>;
    /**
     * N/A not for external use.
     *
     * @summary Upload Statement File ADMIN
     * @throws FetchError<400, types.PostStatementUploadFileResponse400> Bad Request
     */
    postStatementUploadFile(body: types.PostStatementUploadFileBodyParam, metadata: types.PostStatementUploadFileMetadataParam): Promise<FetchResponse<200, types.PostStatementUploadFileResponse200>>;
    postStatementUploadFile(metadata: types.PostStatementUploadFileMetadataParam): Promise<FetchResponse<200, types.PostStatementUploadFileResponse200>>;
    postStatementGetStatements(): Promise<FetchResponse<number, unknown>>;
    /**
     * Health check info endpoints.
     *
     */
    getLive(): Promise<FetchResponse<number, unknown>>;
    /**
     * Health check info endpoints.
     *
     */
    getReady(): Promise<FetchResponse<number, unknown>>;
}
declare const createSDK: SDK;
export = createSDK;
