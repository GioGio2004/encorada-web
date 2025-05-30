declare const DeleteBankaccount: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly id: {
                readonly type: "integer";
                readonly description: "";
                readonly format: "int64";
                readonly minimum: -9223372036854776000;
                readonly maximum: 9223372036854776000;
            };
            readonly companyId: {
                readonly type: "integer";
                readonly description: "";
                readonly format: "int64";
                readonly minimum: -9223372036854776000;
                readonly maximum: 9223372036854776000;
            };
        };
        readonly additionalProperties: false;
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly title: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly status: {
                    readonly type: "integer";
                    readonly description: "";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly detail: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly instance: {
                    readonly type: "string";
                    readonly description: "";
                };
            };
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly title: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly status: {
                    readonly type: "integer";
                    readonly description: "";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly detail: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly instance: {
                    readonly type: "string";
                    readonly description: "";
                };
            };
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const DeleteProcessorbank: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly ProcessorBankId: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly title: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly status: {
                    readonly type: "integer";
                    readonly description: "";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly detail: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly instance: {
                    readonly type: "string";
                    readonly description: "";
                };
            };
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetBankaccountQueryRoot: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly $filter: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly $top: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly $skip: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly $orderby: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly value: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly type: "integer";
                                readonly description: "";
                                readonly format: "int64";
                                readonly minimum: -9223372036854776000;
                                readonly maximum: 9223372036854776000;
                            };
                            readonly companyId: {
                                readonly type: "integer";
                                readonly description: "";
                                readonly format: "int64";
                                readonly minimum: -9223372036854776000;
                                readonly maximum: 9223372036854776000;
                            };
                            readonly ibanName: {
                                readonly type: "string";
                                readonly description: "";
                            };
                            readonly bankName: {
                                readonly type: "string";
                                readonly description: "";
                            };
                            readonly currency: {
                                readonly type: "string";
                                readonly description: "";
                            };
                            readonly default: {
                                readonly type: "boolean";
                                readonly description: "";
                            };
                            readonly ibanFrom: {
                                readonly type: "string";
                                readonly description: "";
                            };
                            readonly beneficiaryName: {
                                readonly type: "string";
                                readonly description: "";
                            };
                            readonly beneficiaryTaxId: {
                                readonly type: "string";
                                readonly description: "";
                            };
                            readonly iban: {
                                readonly type: "string";
                                readonly description: "";
                            };
                            readonly accountNumber: {
                                readonly type: "string";
                                readonly description: "";
                            };
                            readonly mfo: {
                                readonly type: "string";
                                readonly description: "";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                    readonly description: "Array of Payout accounts";
                };
                readonly count: {
                    readonly type: "integer";
                    readonly description: "Total Number of records available for the filter";
                    readonly format: "int64";
                    readonly minimum: -9223372036854776000;
                    readonly maximum: 9223372036854776000;
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly title: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly status: {
                    readonly type: "integer";
                    readonly description: "";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly detail: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly instance: {
                    readonly type: "string";
                    readonly description: "";
                };
            };
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly title: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly status: {
                    readonly type: "integer";
                    readonly description: "";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly detail: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly instance: {
                    readonly type: "string";
                    readonly description: "";
                };
            };
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetBankaccountQueryTokenBased: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly $filter: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly $top: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly $skip: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly $orderby: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly value: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly type: "integer";
                                readonly description: "";
                                readonly format: "int64";
                                readonly minimum: -9223372036854776000;
                                readonly maximum: 9223372036854776000;
                            };
                            readonly companyId: {
                                readonly type: "integer";
                                readonly description: "";
                                readonly format: "int64";
                                readonly minimum: -9223372036854776000;
                                readonly maximum: 9223372036854776000;
                            };
                            readonly ibanName: {
                                readonly type: "string";
                                readonly description: "";
                            };
                            readonly bankName: {
                                readonly type: "string";
                                readonly description: "";
                            };
                            readonly currency: {
                                readonly type: "string";
                                readonly description: "";
                            };
                            readonly default: {
                                readonly type: "boolean";
                                readonly description: "";
                            };
                            readonly ibanFrom: {
                                readonly type: "string";
                                readonly description: "";
                            };
                            readonly beneficiaryName: {
                                readonly type: "string";
                                readonly description: "";
                            };
                            readonly beneficiaryTaxId: {
                                readonly type: "string";
                                readonly description: "";
                            };
                            readonly iban: {
                                readonly type: "string";
                                readonly description: "";
                            };
                            readonly accountNumber: {
                                readonly type: "string";
                                readonly description: "";
                            };
                            readonly mfo: {
                                readonly type: "string";
                                readonly description: "";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                    readonly description: "Array of Payout accounts";
                };
                readonly count: {
                    readonly type: "integer";
                    readonly description: "Total Number of records available for the filter";
                    readonly format: "int64";
                    readonly minimum: -9223372036854776000;
                    readonly maximum: 9223372036854776000;
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly title: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly status: {
                    readonly type: "integer";
                    readonly description: "";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly detail: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly instance: {
                    readonly type: "string";
                    readonly description: "";
                };
            };
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly title: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly status: {
                    readonly type: "integer";
                    readonly description: "";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly detail: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly instance: {
                    readonly type: "string";
                    readonly description: "";
                };
            };
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetCompanyCurrencies: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly CompanyId: {
                    readonly type: "integer";
                    readonly format: "int64";
                    readonly minimum: -9223372036854776000;
                    readonly maximum: 9223372036854776000;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly currencies: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly description: "";
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly title: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly status: {
                    readonly type: "integer";
                    readonly description: "";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly detail: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly instance: {
                    readonly type: "string";
                    readonly description: "";
                };
            };
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly title: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly status: {
                    readonly type: "integer";
                    readonly description: "";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly detail: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly instance: {
                    readonly type: "string";
                    readonly description: "";
                };
            };
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetCompanyPayments: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly CompanyId: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly companyPayments: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly paymentId: {
                                readonly type: "integer";
                                readonly description: "";
                                readonly format: "int32";
                                readonly minimum: -2147483648;
                                readonly maximum: 2147483647;
                            };
                            readonly paymentDate: {
                                readonly type: "string";
                                readonly description: "";
                                readonly format: "date-time";
                            };
                            readonly transactionId: {
                                readonly type: "string";
                                readonly description: "";
                            };
                            readonly cardMask: {
                                readonly type: "string";
                                readonly description: "";
                            };
                            readonly status: {
                                readonly type: "string";
                                readonly description: "";
                            };
                            readonly amount: {
                                readonly type: "number";
                                readonly description: "";
                                readonly format: "double";
                                readonly minimum: -1.7976931348623157e+308;
                                readonly maximum: 1.7976931348623157e+308;
                            };
                            readonly currency: {
                                readonly type: "string";
                                readonly description: "";
                            };
                            readonly cardNetwork: {
                                readonly type: "string";
                                readonly description: "";
                            };
                            readonly processingVendorId: {
                                readonly type: "string";
                                readonly description: "";
                            };
                            readonly processingVendor: {
                                readonly type: "string";
                                readonly description: "";
                            };
                            readonly type: {
                                readonly type: "string";
                                readonly description: "";
                            };
                            readonly refundedAmount: {
                                readonly type: "number";
                                readonly description: "";
                                readonly format: "double";
                                readonly minimum: -1.7976931348623157e+308;
                                readonly maximum: 1.7976931348623157e+308;
                            };
                            readonly finalAmount: {
                                readonly type: "number";
                                readonly description: "";
                                readonly format: "double";
                                readonly minimum: -1.7976931348623157e+308;
                                readonly maximum: 1.7976931348623157e+308;
                            };
                        };
                        readonly additionalProperties: false;
                    };
                    readonly description: "";
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly title: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly status: {
                    readonly type: "integer";
                    readonly description: "";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly detail: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly instance: {
                    readonly type: "string";
                    readonly description: "";
                };
            };
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly title: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly status: {
                    readonly type: "integer";
                    readonly description: "";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly detail: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly instance: {
                    readonly type: "string";
                    readonly description: "";
                };
            };
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetInsightoverviewCardNetworkSummary: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly DateFrom: {
                    readonly type: "string";
                    readonly format: "date-time";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly DateTo: {
                    readonly type: "string";
                    readonly format: "date-time";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly Currency: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly data: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly date: {
                                readonly type: "string";
                                readonly description: "";
                                readonly format: "date-time";
                            };
                            readonly amount: {
                                readonly type: "number";
                                readonly description: "";
                                readonly format: "double";
                                readonly minimum: -1.7976931348623157e+308;
                                readonly maximum: 1.7976931348623157e+308;
                            };
                        };
                        readonly additionalProperties: false;
                    };
                    readonly description: "";
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly title: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly status: {
                    readonly type: "integer";
                    readonly description: "";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly detail: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly instance: {
                    readonly type: "string";
                    readonly description: "";
                };
            };
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly title: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly status: {
                    readonly type: "integer";
                    readonly description: "";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly detail: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly instance: {
                    readonly type: "string";
                    readonly description: "";
                };
            };
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetInsightoverviewGtv: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly DateFrom: {
                    readonly type: "string";
                    readonly format: "date-time";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly DateTo: {
                    readonly type: "string";
                    readonly format: "date-time";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly Currency: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly CompanyId: {
                    readonly type: "integer";
                    readonly format: "int64";
                    readonly minimum: -9223372036854776000;
                    readonly maximum: 9223372036854776000;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly PaymentSource: {
                    readonly enum: readonly ["Card", "Wallet"];
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["DateFrom", "DateTo", "Currency", "PaymentSource"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly data: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly date: {
                                readonly type: "string";
                                readonly description: "";
                                readonly format: "date-time";
                            };
                            readonly amount: {
                                readonly type: "number";
                                readonly description: "";
                                readonly format: "double";
                                readonly minimum: -1.7976931348623157e+308;
                                readonly maximum: 1.7976931348623157e+308;
                            };
                        };
                        readonly additionalProperties: false;
                    };
                    readonly description: "";
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly title: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly status: {
                    readonly type: "integer";
                    readonly description: "";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly detail: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly instance: {
                    readonly type: "string";
                    readonly description: "";
                };
            };
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly title: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly status: {
                    readonly type: "integer";
                    readonly description: "";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly detail: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly instance: {
                    readonly type: "string";
                    readonly description: "";
                };
            };
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetInsightoverviewGtvTokenBased: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly DateFrom: {
                    readonly type: "string";
                    readonly format: "date-time";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly DateTo: {
                    readonly type: "string";
                    readonly format: "date-time";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly Currency: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly CompanyId: {
                    readonly type: "integer";
                    readonly format: "int64";
                    readonly minimum: -9223372036854776000;
                    readonly maximum: 9223372036854776000;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly PaymentSource: {
                    readonly enum: readonly ["Card", "Wallet"];
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["DateFrom", "DateTo", "Currency", "PaymentSource"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly data: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly date: {
                                readonly type: "string";
                                readonly description: "";
                                readonly format: "date-time";
                            };
                            readonly amount: {
                                readonly type: "number";
                                readonly description: "";
                                readonly format: "double";
                                readonly minimum: -1.7976931348623157e+308;
                                readonly maximum: 1.7976931348623157e+308;
                            };
                        };
                        readonly additionalProperties: false;
                    };
                    readonly description: "";
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly title: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly status: {
                    readonly type: "integer";
                    readonly description: "";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly detail: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly instance: {
                    readonly type: "string";
                    readonly description: "";
                };
            };
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly title: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly status: {
                    readonly type: "integer";
                    readonly description: "";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly detail: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly instance: {
                    readonly type: "string";
                    readonly description: "";
                };
            };
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetInsightoverviewSummary: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly DateFrom: {
                    readonly type: "string";
                    readonly format: "date-time";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly DateTo: {
                    readonly type: "string";
                    readonly format: "date-time";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly Currency: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly Companyid: {
                    readonly type: "integer";
                    readonly format: "int64";
                    readonly minimum: -9223372036854776000;
                    readonly maximum: 9223372036854776000;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly PaymentSource: {
                    readonly enum: readonly ["Card", "Wallet"];
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["DateFrom", "DateTo", "Currency", "PaymentSource"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly companyId: {
                    readonly type: "integer";
                    readonly description: "";
                    readonly format: "int64";
                    readonly minimum: -9223372036854776000;
                    readonly maximum: 9223372036854776000;
                };
                readonly currency: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly gtv: {
                    readonly type: "number";
                    readonly description: "";
                    readonly format: "double";
                    readonly minimum: -1.7976931348623157e+308;
                    readonly maximum: 1.7976931348623157e+308;
                };
                readonly shopSales: {
                    readonly type: "integer";
                    readonly description: "";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly captured: {
                    readonly type: "integer";
                    readonly description: "";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly rejected: {
                    readonly type: "integer";
                    readonly description: "";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly refunded: {
                    readonly type: "integer";
                    readonly description: "";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly chargeback: {
                    readonly type: "integer";
                    readonly description: "";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly blocked: {
                    readonly type: "integer";
                    readonly description: "";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly successfulTransactionsQuantity: {
                    readonly type: "number";
                    readonly description: "";
                    readonly format: "double";
                    readonly minimum: -1.7976931348623157e+308;
                    readonly maximum: 1.7976931348623157e+308;
                };
                readonly averageTicketSize: {
                    readonly type: "number";
                    readonly description: "";
                    readonly format: "double";
                    readonly minimum: -1.7976931348623157e+308;
                    readonly maximum: 1.7976931348623157e+308;
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly title: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly status: {
                    readonly type: "integer";
                    readonly description: "";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly detail: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly instance: {
                    readonly type: "string";
                    readonly description: "";
                };
            };
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly title: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly status: {
                    readonly type: "integer";
                    readonly description: "";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly detail: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly instance: {
                    readonly type: "string";
                    readonly description: "";
                };
            };
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetInsightoverviewSummaryTokenBased: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly DateFrom: {
                    readonly type: "string";
                    readonly format: "date-time";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly DateTo: {
                    readonly type: "string";
                    readonly format: "date-time";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly Currency: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly Companyid: {
                    readonly type: "integer";
                    readonly format: "int64";
                    readonly minimum: -9223372036854776000;
                    readonly maximum: 9223372036854776000;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly PaymentSource: {
                    readonly enum: readonly ["Card", "Wallet"];
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["DateFrom", "DateTo", "Currency", "PaymentSource"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly companyId: {
                    readonly type: "integer";
                    readonly description: "";
                    readonly format: "int64";
                    readonly minimum: -9223372036854776000;
                    readonly maximum: 9223372036854776000;
                };
                readonly currency: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly gtv: {
                    readonly type: "number";
                    readonly description: "";
                    readonly format: "double";
                    readonly minimum: -1.7976931348623157e+308;
                    readonly maximum: 1.7976931348623157e+308;
                };
                readonly shopSales: {
                    readonly type: "integer";
                    readonly description: "";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly captured: {
                    readonly type: "integer";
                    readonly description: "";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly rejected: {
                    readonly type: "integer";
                    readonly description: "";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly refunded: {
                    readonly type: "integer";
                    readonly description: "";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly chargeback: {
                    readonly type: "integer";
                    readonly description: "";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly blocked: {
                    readonly type: "integer";
                    readonly description: "";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly successfulTransactionsQuantity: {
                    readonly type: "number";
                    readonly description: "";
                    readonly format: "double";
                    readonly minimum: -1.7976931348623157e+308;
                    readonly maximum: 1.7976931348623157e+308;
                };
                readonly averageTicketSize: {
                    readonly type: "number";
                    readonly description: "";
                    readonly format: "double";
                    readonly minimum: -1.7976931348623157e+308;
                    readonly maximum: 1.7976931348623157e+308;
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly title: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly status: {
                    readonly type: "integer";
                    readonly description: "";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly detail: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly instance: {
                    readonly type: "string";
                    readonly description: "";
                };
            };
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly title: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly status: {
                    readonly type: "integer";
                    readonly description: "";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly detail: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly instance: {
                    readonly type: "string";
                    readonly description: "";
                };
            };
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetPaymentQueryRoot: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly $filter: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly $top: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly $skip: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly $orderby: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly value: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly type: "integer";
                                readonly description: "";
                                readonly format: "int64";
                                readonly minimum: -9223372036854776000;
                                readonly maximum: 9223372036854776000;
                            };
                            readonly requesterId: {
                                readonly type: "integer";
                                readonly description: "";
                                readonly format: "int64";
                                readonly minimum: -9223372036854776000;
                                readonly maximum: 9223372036854776000;
                            };
                            readonly transactionId: {
                                readonly type: "string";
                                readonly description: "";
                            };
                            readonly type: {
                                readonly enum: readonly ["JustPay", "AddCard", "PayWithCard", "WithdrawalCard"];
                                readonly type: "string";
                                readonly description: "`JustPay` `AddCard` `PayWithCard` `WithdrawalCard`";
                            };
                            readonly source: {
                                readonly enum: readonly ["Card", "Wallet"];
                                readonly type: "string";
                                readonly description: "`Card` `Wallet`";
                            };
                            readonly amount: {
                                readonly type: "number";
                                readonly description: "";
                                readonly format: "double";
                                readonly minimum: -1.7976931348623157e+308;
                                readonly maximum: 1.7976931348623157e+308;
                            };
                            readonly currency: {
                                readonly type: "string";
                                readonly description: "";
                            };
                            readonly status: {
                                readonly enum: readonly ["Draft", "Blocked", "Captured", "Refunded", "PartiallyRefunded", "Rejected"];
                                readonly type: "string";
                                readonly description: "`Draft` `Blocked` `Captured` `Refunded` `PartiallyRefunded` `Rejected`";
                            };
                            readonly cardPayment: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly preauthorize: {
                                        readonly type: "boolean";
                                        readonly description: "Block amount - True, Instant capture - False";
                                    };
                                    readonly googlePay: {
                                        readonly type: "boolean";
                                        readonly description: "True - Allow GPay payment, False - Restrict GPay payment";
                                    };
                                    readonly applePay: {
                                        readonly type: "boolean";
                                        readonly description: "True - Allow ApplePay payment, False - Restrict ApplePay payment";
                                    };
                                    readonly cardMask: {
                                        readonly type: "string";
                                        readonly description: "";
                                    };
                                    readonly cardExpiration: {
                                        readonly type: "string";
                                        readonly description: "";
                                    };
                                    readonly merchantId: {
                                        readonly type: "string";
                                        readonly description: "";
                                    };
                                    readonly terminalId: {
                                        readonly type: "string";
                                        readonly description: "";
                                    };
                                    readonly token: {
                                        readonly type: "string";
                                        readonly description: "";
                                    };
                                    readonly rrn: {
                                        readonly type: "string";
                                        readonly description: "";
                                    };
                                    readonly processingVendorId: {
                                        readonly type: "string";
                                        readonly description: "";
                                    };
                                    readonly processingVendor: {
                                        readonly type: "string";
                                        readonly description: "";
                                    };
                                    readonly cardOwnerEntityType: {
                                        readonly type: "string";
                                        readonly description: "";
                                    };
                                    readonly secureCardId: {
                                        readonly type: "string";
                                        readonly description: "";
                                    };
                                };
                                readonly additionalProperties: false;
                            };
                            readonly walletPayment: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly flow: {
                                        readonly enum: readonly ["Deposit", "Withdraw", "AddCard"];
                                        readonly type: "string";
                                        readonly description: "`Deposit` `Withdraw` `AddCard`";
                                    };
                                    readonly token: {
                                        readonly type: "string";
                                        readonly description: "";
                                    };
                                    readonly tokenizeCard: {
                                        readonly type: "boolean";
                                        readonly description: "";
                                    };
                                };
                                readonly additionalProperties: false;
                            };
                            readonly hooks: {
                                readonly required: readonly ["errorRedirectGateway", "successRedirectGateway", "webhookGateway"];
                                readonly type: "object";
                                readonly properties: {
                                    readonly webhookGateway: {
                                        readonly type: "string";
                                        readonly description: "Payze will HTTP POST payment updates to this API URL";
                                    };
                                    readonly successRedirectGateway: {
                                        readonly type: "string";
                                        readonly description: "Cardholder will be redirected to this URL after successful payment; For payment gateways only";
                                    };
                                    readonly errorRedirectGateway: {
                                        readonly type: "string";
                                        readonly description: "Cardholder will be redirected to this URL after failed payment; For payment gateways only";
                                    };
                                };
                                readonly additionalProperties: false;
                            };
                            readonly language: {
                                readonly type: "string";
                                readonly description: "";
                            };
                            readonly idempotencyKey: {
                                readonly type: "string";
                                readonly description: "";
                            };
                            readonly metadata: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly channel: {
                                        readonly type: "string";
                                        readonly description: "Payment sale channel, eg. WEB, MOBILE, POS, PARTNERS etc.";
                                    };
                                    readonly order: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly orderId: {
                                                readonly type: "string";
                                                readonly description: "E-commerce order unique identifier";
                                            };
                                            readonly advanceContractId: {
                                                readonly type: "string";
                                                readonly description: "E-commerce DownPayment contract id";
                                            };
                                            readonly orderItems: {
                                                readonly type: "array";
                                                readonly items: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly productLink: {
                                                            readonly type: "string";
                                                            readonly description: "Product link";
                                                        };
                                                        readonly productImage: {
                                                            readonly type: "string";
                                                            readonly description: "Product image link";
                                                        };
                                                        readonly productName: {
                                                            readonly type: "string";
                                                            readonly description: "Name of goods/service";
                                                        };
                                                        readonly productCode: {
                                                            readonly type: "string";
                                                            readonly description: "Legal code of goods and services, AKA. IKPU";
                                                        };
                                                        readonly productBarCode: {
                                                            readonly type: "string";
                                                            readonly description: "Barcode of goods/service";
                                                        };
                                                        readonly productLabel: {
                                                            readonly type: "string";
                                                            readonly description: "Product label, AKA. Marking code";
                                                        };
                                                        readonly packageCode: {
                                                            readonly type: "string";
                                                            readonly description: "Product package code";
                                                        };
                                                        readonly productQuantity: {
                                                            readonly type: "number";
                                                            readonly description: "Total product quantity";
                                                            readonly format: "double";
                                                            readonly minimum: -1.7976931348623157e+308;
                                                            readonly maximum: 1.7976931348623157e+308;
                                                        };
                                                        readonly price: {
                                                            readonly type: "number";
                                                            readonly description: "Price of single good/service";
                                                            readonly format: "double";
                                                            readonly minimum: -1.7976931348623157e+308;
                                                            readonly maximum: 1.7976931348623157e+308;
                                                        };
                                                        readonly sumPrice: {
                                                            readonly type: "number";
                                                            readonly description: "The total amount of the position, taking into account the quantity and excluding discounts";
                                                            readonly format: "double";
                                                            readonly minimum: -1.7976931348623157e+308;
                                                            readonly maximum: 1.7976931348623157e+308;
                                                        };
                                                        readonly vat: {
                                                            readonly type: "number";
                                                            readonly description: "Vat amount, eg. 1";
                                                            readonly format: "double";
                                                            readonly minimum: -1.7976931348623157e+308;
                                                            readonly maximum: 1.7976931348623157e+308;
                                                        };
                                                        readonly vatPercent: {
                                                            readonly type: "integer";
                                                            readonly description: "Vat percent, eg. 20";
                                                            readonly format: "int32";
                                                            readonly minimum: -2147483648;
                                                            readonly maximum: 2147483647;
                                                        };
                                                        readonly discount: {
                                                            readonly type: "number";
                                                            readonly description: "Discount for the good/service, amount";
                                                            readonly format: "double";
                                                            readonly minimum: -1.7976931348623157e+308;
                                                            readonly maximum: 1.7976931348623157e+308;
                                                        };
                                                        readonly additionalDiscount: {
                                                            readonly type: "number";
                                                            readonly description: "Additional discount, for Insurances";
                                                            readonly format: "double";
                                                            readonly minimum: -1.7976931348623157e+308;
                                                            readonly maximum: 1.7976931348623157e+308;
                                                        };
                                                        readonly voucher: {
                                                            readonly type: "integer";
                                                            readonly description: "Voucher amount";
                                                            readonly format: "int64";
                                                            readonly minimum: -9223372036854776000;
                                                            readonly maximum: 9223372036854776000;
                                                        };
                                                        readonly uzRegulatoryOrderItem: {
                                                            readonly type: "object";
                                                            readonly properties: {
                                                                readonly commissionInfoTin: {
                                                                    readonly type: "string";
                                                                    readonly description: "TIN (if the principal is a legal entity)";
                                                                };
                                                                readonly commissionInfoPinfl: {
                                                                    readonly type: "string";
                                                                    readonly description: "PINFL (if the principal is an individual)";
                                                                };
                                                            };
                                                            readonly additionalProperties: false;
                                                        };
                                                    };
                                                    readonly additionalProperties: false;
                                                };
                                                readonly description: "E-commerce order items";
                                            };
                                            readonly uzRegulatoryOrderDetails: {
                                                readonly type: "object";
                                                readonly properties: {
                                                    readonly latitude: {
                                                        readonly type: "number";
                                                        readonly description: "Order capture location Latitude";
                                                        readonly format: "double";
                                                        readonly minimum: -1.7976931348623157e+308;
                                                        readonly maximum: 1.7976931348623157e+308;
                                                    };
                                                    readonly longitude: {
                                                        readonly type: "number";
                                                        readonly description: "Order capture location Longitude";
                                                        readonly format: "double";
                                                        readonly minimum: -1.7976931348623157e+308;
                                                        readonly maximum: 1.7976931348623157e+308;
                                                    };
                                                    readonly taxiVehicleNumber: {
                                                        readonly type: "string";
                                                        readonly description: "Tax order, Vehicle Number";
                                                    };
                                                    readonly taxiTin: {
                                                        readonly type: "string";
                                                        readonly description: "Tax order, TIN";
                                                    };
                                                    readonly taxiPinfl: {
                                                        readonly type: "string";
                                                        readonly description: "Tax order, PINFL";
                                                    };
                                                };
                                                readonly additionalProperties: false;
                                            };
                                            readonly billingAddress: {
                                                readonly type: "object";
                                                readonly properties: {
                                                    readonly firstName: {
                                                        readonly type: "string";
                                                        readonly description: "";
                                                    };
                                                    readonly lastName: {
                                                        readonly type: "string";
                                                        readonly description: "";
                                                    };
                                                    readonly city: {
                                                        readonly type: "string";
                                                        readonly description: "";
                                                    };
                                                    readonly country: {
                                                        readonly type: "string";
                                                        readonly description: "";
                                                    };
                                                    readonly line1: {
                                                        readonly type: "string";
                                                        readonly description: "";
                                                    };
                                                    readonly line2: {
                                                        readonly type: "string";
                                                        readonly description: "";
                                                    };
                                                    readonly postalCode: {
                                                        readonly type: "string";
                                                        readonly description: "";
                                                    };
                                                    readonly state: {
                                                        readonly type: "string";
                                                        readonly description: "";
                                                    };
                                                    readonly phoneNumber: {
                                                        readonly type: "string";
                                                        readonly description: "";
                                                    };
                                                    readonly personalId: {
                                                        readonly type: "string";
                                                        readonly description: "";
                                                    };
                                                    readonly taxId: {
                                                        readonly type: "string";
                                                        readonly description: "";
                                                    };
                                                };
                                                readonly additionalProperties: false;
                                            };
                                            readonly shippingAddress: {
                                                readonly type: "object";
                                                readonly properties: {
                                                    readonly firstName: {
                                                        readonly type: "string";
                                                        readonly description: "";
                                                    };
                                                    readonly lastName: {
                                                        readonly type: "string";
                                                        readonly description: "";
                                                    };
                                                    readonly city: {
                                                        readonly type: "string";
                                                        readonly description: "";
                                                    };
                                                    readonly country: {
                                                        readonly type: "string";
                                                        readonly description: "";
                                                    };
                                                    readonly line1: {
                                                        readonly type: "string";
                                                        readonly description: "";
                                                    };
                                                    readonly line2: {
                                                        readonly type: "string";
                                                        readonly description: "";
                                                    };
                                                    readonly postalCode: {
                                                        readonly type: "string";
                                                        readonly description: "";
                                                    };
                                                    readonly state: {
                                                        readonly type: "string";
                                                        readonly description: "";
                                                    };
                                                    readonly phoneNumber: {
                                                        readonly type: "string";
                                                        readonly description: "";
                                                    };
                                                    readonly personalId: {
                                                        readonly type: "string";
                                                        readonly description: "";
                                                    };
                                                    readonly taxId: {
                                                        readonly type: "string";
                                                        readonly description: "";
                                                    };
                                                };
                                                readonly additionalProperties: false;
                                            };
                                        };
                                        readonly additionalProperties: false;
                                    };
                                    readonly extraAttributes: {
                                        readonly type: "array";
                                        readonly items: {
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly key: {
                                                    readonly type: "string";
                                                    readonly description: "";
                                                };
                                                readonly value: {
                                                    readonly type: "string";
                                                    readonly description: "";
                                                };
                                                readonly description: {
                                                    readonly type: "string";
                                                    readonly description: "";
                                                };
                                            };
                                            readonly additionalProperties: false;
                                        };
                                        readonly description: "Extra attribute dictionary to add custom parameters or metadata to the payment";
                                    };
                                };
                                readonly additionalProperties: false;
                            };
                            readonly shareLink: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly email: {
                                        readonly type: "string";
                                        readonly description: "Payment link will be send to the email specified";
                                    };
                                    readonly smsPhone: {
                                        readonly type: "string";
                                        readonly description: "Payment link will be send to the phone specified, extra charges apply";
                                    };
                                };
                                readonly additionalProperties: false;
                            };
                            readonly network: {
                                readonly type: "string";
                                readonly description: "";
                            };
                            readonly blockedAmount: {
                                readonly type: "number";
                                readonly description: "";
                                readonly format: "double";
                                readonly minimum: -1.7976931348623157e+308;
                                readonly maximum: 1.7976931348623157e+308;
                            };
                            readonly capturedAmount: {
                                readonly type: "number";
                                readonly description: "";
                                readonly format: "double";
                                readonly minimum: -1.7976931348623157e+308;
                                readonly maximum: 1.7976931348623157e+308;
                            };
                            readonly refundedAmount: {
                                readonly type: "number";
                                readonly description: "";
                                readonly format: "double";
                                readonly minimum: -1.7976931348623157e+308;
                                readonly maximum: 1.7976931348623157e+308;
                            };
                            readonly reversedAmount: {
                                readonly type: "number";
                                readonly description: "";
                                readonly format: "double";
                                readonly minimum: -1.7976931348623157e+308;
                                readonly maximum: 1.7976931348623157e+308;
                            };
                            readonly settledBalanceAmount: {
                                readonly type: "number";
                                readonly description: "";
                                readonly format: "double";
                                readonly minimum: -1.7976931348623157e+308;
                                readonly maximum: 1.7976931348623157e+308;
                            };
                            readonly crossCurrencySettlement: {
                                readonly type: "boolean";
                                readonly description: "";
                            };
                            readonly settled: {
                                readonly type: "boolean";
                                readonly description: "";
                            };
                            readonly rejectReason: {
                                readonly type: "string";
                                readonly description: "";
                            };
                            readonly fee: {
                                readonly type: "number";
                                readonly description: "";
                                readonly format: "double";
                                readonly minimum: -1.7976931348623157e+308;
                                readonly maximum: 1.7976931348623157e+308;
                            };
                            readonly channel: {
                                readonly type: "string";
                                readonly description: "";
                            };
                            readonly payer: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly email: {
                                        readonly type: "string";
                                        readonly description: "";
                                    };
                                    readonly phone: {
                                        readonly type: "string";
                                        readonly description: "";
                                    };
                                    readonly fullName: {
                                        readonly type: "string";
                                        readonly description: "";
                                    };
                                    readonly personalId: {
                                        readonly type: "string";
                                        readonly description: "";
                                    };
                                    readonly taxId: {
                                        readonly type: "string";
                                        readonly description: "";
                                    };
                                    readonly country: {
                                        readonly type: "string";
                                        readonly description: "";
                                    };
                                    readonly ip: {
                                        readonly type: "string";
                                        readonly description: "";
                                    };
                                };
                                readonly additionalProperties: false;
                            };
                            readonly receipt: {
                                readonly type: "string";
                                readonly description: "";
                            };
                            readonly sandBox: {
                                readonly type: "boolean";
                                readonly description: "";
                            };
                            readonly capturedDate: {
                                readonly type: "string";
                                readonly description: "";
                                readonly format: "date-time";
                            };
                            readonly blockedDate: {
                                readonly type: "string";
                                readonly description: "";
                                readonly format: "date-time";
                            };
                            readonly settledDate: {
                                readonly type: "string";
                                readonly description: "";
                                readonly format: "date-time";
                            };
                            readonly refundedDate: {
                                readonly type: "string";
                                readonly description: "";
                                readonly format: "date-time";
                            };
                            readonly reverseDate: {
                                readonly type: "string";
                                readonly description: "";
                                readonly format: "date-time";
                            };
                            readonly rejectedDate: {
                                readonly type: "string";
                                readonly description: "";
                                readonly format: "date-time";
                            };
                            readonly createdDate: {
                                readonly type: "string";
                                readonly description: "";
                                readonly format: "date-time";
                            };
                            readonly paymentUrl: {
                                readonly type: "string";
                                readonly description: "";
                            };
                            readonly version: {
                                readonly type: "integer";
                                readonly description: "";
                                readonly format: "int32";
                                readonly readOnly: true;
                                readonly minimum: -2147483648;
                                readonly maximum: 2147483647;
                            };
                            readonly lastModifiedDate: {
                                readonly type: "string";
                                readonly description: "";
                                readonly format: "date-time";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                    readonly description: "";
                };
                readonly count: {
                    readonly type: "integer";
                    readonly description: "";
                    readonly format: "int64";
                    readonly minimum: -9223372036854776000;
                    readonly maximum: 9223372036854776000;
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly title: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly status: {
                    readonly type: "integer";
                    readonly description: "";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly detail: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly instance: {
                    readonly type: "string";
                    readonly description: "";
                };
            };
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly title: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly status: {
                    readonly type: "integer";
                    readonly description: "";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly detail: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly instance: {
                    readonly type: "string";
                    readonly description: "";
                };
            };
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetPaymentQueryTokenBased: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly $filter: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly $top: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly $skip: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly $orderby: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly value: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly type: "integer";
                                readonly description: "";
                                readonly format: "int64";
                                readonly minimum: -9223372036854776000;
                                readonly maximum: 9223372036854776000;
                            };
                            readonly requesterId: {
                                readonly type: "integer";
                                readonly description: "";
                                readonly format: "int64";
                                readonly minimum: -9223372036854776000;
                                readonly maximum: 9223372036854776000;
                            };
                            readonly transactionId: {
                                readonly type: "string";
                                readonly description: "";
                            };
                            readonly type: {
                                readonly enum: readonly ["JustPay", "AddCard", "PayWithCard", "WithdrawalCard"];
                                readonly type: "string";
                                readonly description: "`JustPay` `AddCard` `PayWithCard` `WithdrawalCard`";
                            };
                            readonly source: {
                                readonly enum: readonly ["Card", "Wallet"];
                                readonly type: "string";
                                readonly description: "`Card` `Wallet`";
                            };
                            readonly amount: {
                                readonly type: "number";
                                readonly description: "";
                                readonly format: "double";
                                readonly minimum: -1.7976931348623157e+308;
                                readonly maximum: 1.7976931348623157e+308;
                            };
                            readonly currency: {
                                readonly type: "string";
                                readonly description: "";
                            };
                            readonly status: {
                                readonly enum: readonly ["Draft", "Blocked", "Captured", "Refunded", "PartiallyRefunded", "Rejected"];
                                readonly type: "string";
                                readonly description: "`Draft` `Blocked` `Captured` `Refunded` `PartiallyRefunded` `Rejected`";
                            };
                            readonly cardPayment: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly preauthorize: {
                                        readonly type: "boolean";
                                        readonly description: "Block amount - True, Instant capture - False";
                                    };
                                    readonly googlePay: {
                                        readonly type: "boolean";
                                        readonly description: "True - Allow GPay payment, False - Restrict GPay payment";
                                    };
                                    readonly applePay: {
                                        readonly type: "boolean";
                                        readonly description: "True - Allow ApplePay payment, False - Restrict ApplePay payment";
                                    };
                                    readonly cardMask: {
                                        readonly type: "string";
                                        readonly description: "";
                                    };
                                    readonly cardExpiration: {
                                        readonly type: "string";
                                        readonly description: "";
                                    };
                                    readonly merchantId: {
                                        readonly type: "string";
                                        readonly description: "";
                                    };
                                    readonly terminalId: {
                                        readonly type: "string";
                                        readonly description: "";
                                    };
                                    readonly token: {
                                        readonly type: "string";
                                        readonly description: "";
                                    };
                                    readonly rrn: {
                                        readonly type: "string";
                                        readonly description: "";
                                    };
                                    readonly processingVendorId: {
                                        readonly type: "string";
                                        readonly description: "";
                                    };
                                    readonly processingVendor: {
                                        readonly type: "string";
                                        readonly description: "";
                                    };
                                    readonly cardOwnerEntityType: {
                                        readonly type: "string";
                                        readonly description: "";
                                    };
                                    readonly secureCardId: {
                                        readonly type: "string";
                                        readonly description: "";
                                    };
                                };
                                readonly additionalProperties: false;
                            };
                            readonly walletPayment: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly flow: {
                                        readonly enum: readonly ["Deposit", "Withdraw", "AddCard"];
                                        readonly type: "string";
                                        readonly description: "`Deposit` `Withdraw` `AddCard`";
                                    };
                                    readonly token: {
                                        readonly type: "string";
                                        readonly description: "";
                                    };
                                    readonly tokenizeCard: {
                                        readonly type: "boolean";
                                        readonly description: "";
                                    };
                                };
                                readonly additionalProperties: false;
                            };
                            readonly hooks: {
                                readonly required: readonly ["errorRedirectGateway", "successRedirectGateway", "webhookGateway"];
                                readonly type: "object";
                                readonly properties: {
                                    readonly webhookGateway: {
                                        readonly type: "string";
                                        readonly description: "Payze will HTTP POST payment updates to this API URL";
                                    };
                                    readonly successRedirectGateway: {
                                        readonly type: "string";
                                        readonly description: "Cardholder will be redirected to this URL after successful payment; For payment gateways only";
                                    };
                                    readonly errorRedirectGateway: {
                                        readonly type: "string";
                                        readonly description: "Cardholder will be redirected to this URL after failed payment; For payment gateways only";
                                    };
                                };
                                readonly additionalProperties: false;
                            };
                            readonly language: {
                                readonly type: "string";
                                readonly description: "";
                            };
                            readonly idempotencyKey: {
                                readonly type: "string";
                                readonly description: "";
                            };
                            readonly metadata: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly channel: {
                                        readonly type: "string";
                                        readonly description: "Payment sale channel, eg. WEB, MOBILE, POS, PARTNERS etc.";
                                    };
                                    readonly order: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly orderId: {
                                                readonly type: "string";
                                                readonly description: "E-commerce order unique identifier";
                                            };
                                            readonly advanceContractId: {
                                                readonly type: "string";
                                                readonly description: "E-commerce DownPayment contract id";
                                            };
                                            readonly orderItems: {
                                                readonly type: "array";
                                                readonly items: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly productLink: {
                                                            readonly type: "string";
                                                            readonly description: "Product link";
                                                        };
                                                        readonly productImage: {
                                                            readonly type: "string";
                                                            readonly description: "Product image link";
                                                        };
                                                        readonly productName: {
                                                            readonly type: "string";
                                                            readonly description: "Name of goods/service";
                                                        };
                                                        readonly productCode: {
                                                            readonly type: "string";
                                                            readonly description: "Legal code of goods and services, AKA. IKPU";
                                                        };
                                                        readonly productBarCode: {
                                                            readonly type: "string";
                                                            readonly description: "Barcode of goods/service";
                                                        };
                                                        readonly productLabel: {
                                                            readonly type: "string";
                                                            readonly description: "Product label, AKA. Marking code";
                                                        };
                                                        readonly packageCode: {
                                                            readonly type: "string";
                                                            readonly description: "Product package code";
                                                        };
                                                        readonly productQuantity: {
                                                            readonly type: "number";
                                                            readonly description: "Total product quantity";
                                                            readonly format: "double";
                                                            readonly minimum: -1.7976931348623157e+308;
                                                            readonly maximum: 1.7976931348623157e+308;
                                                        };
                                                        readonly price: {
                                                            readonly type: "number";
                                                            readonly description: "Price of single good/service";
                                                            readonly format: "double";
                                                            readonly minimum: -1.7976931348623157e+308;
                                                            readonly maximum: 1.7976931348623157e+308;
                                                        };
                                                        readonly sumPrice: {
                                                            readonly type: "number";
                                                            readonly description: "The total amount of the position, taking into account the quantity and excluding discounts";
                                                            readonly format: "double";
                                                            readonly minimum: -1.7976931348623157e+308;
                                                            readonly maximum: 1.7976931348623157e+308;
                                                        };
                                                        readonly vat: {
                                                            readonly type: "number";
                                                            readonly description: "Vat amount, eg. 1";
                                                            readonly format: "double";
                                                            readonly minimum: -1.7976931348623157e+308;
                                                            readonly maximum: 1.7976931348623157e+308;
                                                        };
                                                        readonly vatPercent: {
                                                            readonly type: "integer";
                                                            readonly description: "Vat percent, eg. 20";
                                                            readonly format: "int32";
                                                            readonly minimum: -2147483648;
                                                            readonly maximum: 2147483647;
                                                        };
                                                        readonly discount: {
                                                            readonly type: "number";
                                                            readonly description: "Discount for the good/service, amount";
                                                            readonly format: "double";
                                                            readonly minimum: -1.7976931348623157e+308;
                                                            readonly maximum: 1.7976931348623157e+308;
                                                        };
                                                        readonly additionalDiscount: {
                                                            readonly type: "number";
                                                            readonly description: "Additional discount, for Insurances";
                                                            readonly format: "double";
                                                            readonly minimum: -1.7976931348623157e+308;
                                                            readonly maximum: 1.7976931348623157e+308;
                                                        };
                                                        readonly voucher: {
                                                            readonly type: "integer";
                                                            readonly description: "Voucher amount";
                                                            readonly format: "int64";
                                                            readonly minimum: -9223372036854776000;
                                                            readonly maximum: 9223372036854776000;
                                                        };
                                                        readonly uzRegulatoryOrderItem: {
                                                            readonly type: "object";
                                                            readonly properties: {
                                                                readonly commissionInfoTin: {
                                                                    readonly type: "string";
                                                                    readonly description: "TIN (if the principal is a legal entity)";
                                                                };
                                                                readonly commissionInfoPinfl: {
                                                                    readonly type: "string";
                                                                    readonly description: "PINFL (if the principal is an individual)";
                                                                };
                                                            };
                                                            readonly additionalProperties: false;
                                                        };
                                                    };
                                                    readonly additionalProperties: false;
                                                };
                                                readonly description: "E-commerce order items";
                                            };
                                            readonly uzRegulatoryOrderDetails: {
                                                readonly type: "object";
                                                readonly properties: {
                                                    readonly latitude: {
                                                        readonly type: "number";
                                                        readonly description: "Order capture location Latitude";
                                                        readonly format: "double";
                                                        readonly minimum: -1.7976931348623157e+308;
                                                        readonly maximum: 1.7976931348623157e+308;
                                                    };
                                                    readonly longitude: {
                                                        readonly type: "number";
                                                        readonly description: "Order capture location Longitude";
                                                        readonly format: "double";
                                                        readonly minimum: -1.7976931348623157e+308;
                                                        readonly maximum: 1.7976931348623157e+308;
                                                    };
                                                    readonly taxiVehicleNumber: {
                                                        readonly type: "string";
                                                        readonly description: "Tax order, Vehicle Number";
                                                    };
                                                    readonly taxiTin: {
                                                        readonly type: "string";
                                                        readonly description: "Tax order, TIN";
                                                    };
                                                    readonly taxiPinfl: {
                                                        readonly type: "string";
                                                        readonly description: "Tax order, PINFL";
                                                    };
                                                };
                                                readonly additionalProperties: false;
                                            };
                                            readonly billingAddress: {
                                                readonly type: "object";
                                                readonly properties: {
                                                    readonly firstName: {
                                                        readonly type: "string";
                                                        readonly description: "";
                                                    };
                                                    readonly lastName: {
                                                        readonly type: "string";
                                                        readonly description: "";
                                                    };
                                                    readonly city: {
                                                        readonly type: "string";
                                                        readonly description: "";
                                                    };
                                                    readonly country: {
                                                        readonly type: "string";
                                                        readonly description: "";
                                                    };
                                                    readonly line1: {
                                                        readonly type: "string";
                                                        readonly description: "";
                                                    };
                                                    readonly line2: {
                                                        readonly type: "string";
                                                        readonly description: "";
                                                    };
                                                    readonly postalCode: {
                                                        readonly type: "string";
                                                        readonly description: "";
                                                    };
                                                    readonly state: {
                                                        readonly type: "string";
                                                        readonly description: "";
                                                    };
                                                    readonly phoneNumber: {
                                                        readonly type: "string";
                                                        readonly description: "";
                                                    };
                                                    readonly personalId: {
                                                        readonly type: "string";
                                                        readonly description: "";
                                                    };
                                                    readonly taxId: {
                                                        readonly type: "string";
                                                        readonly description: "";
                                                    };
                                                };
                                                readonly additionalProperties: false;
                                            };
                                            readonly shippingAddress: {
                                                readonly type: "object";
                                                readonly properties: {
                                                    readonly firstName: {
                                                        readonly type: "string";
                                                        readonly description: "";
                                                    };
                                                    readonly lastName: {
                                                        readonly type: "string";
                                                        readonly description: "";
                                                    };
                                                    readonly city: {
                                                        readonly type: "string";
                                                        readonly description: "";
                                                    };
                                                    readonly country: {
                                                        readonly type: "string";
                                                        readonly description: "";
                                                    };
                                                    readonly line1: {
                                                        readonly type: "string";
                                                        readonly description: "";
                                                    };
                                                    readonly line2: {
                                                        readonly type: "string";
                                                        readonly description: "";
                                                    };
                                                    readonly postalCode: {
                                                        readonly type: "string";
                                                        readonly description: "";
                                                    };
                                                    readonly state: {
                                                        readonly type: "string";
                                                        readonly description: "";
                                                    };
                                                    readonly phoneNumber: {
                                                        readonly type: "string";
                                                        readonly description: "";
                                                    };
                                                    readonly personalId: {
                                                        readonly type: "string";
                                                        readonly description: "";
                                                    };
                                                    readonly taxId: {
                                                        readonly type: "string";
                                                        readonly description: "";
                                                    };
                                                };
                                                readonly additionalProperties: false;
                                            };
                                        };
                                        readonly additionalProperties: false;
                                    };
                                    readonly extraAttributes: {
                                        readonly type: "array";
                                        readonly items: {
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly key: {
                                                    readonly type: "string";
                                                    readonly description: "";
                                                };
                                                readonly value: {
                                                    readonly type: "string";
                                                    readonly description: "";
                                                };
                                                readonly description: {
                                                    readonly type: "string";
                                                    readonly description: "";
                                                };
                                            };
                                            readonly additionalProperties: false;
                                        };
                                        readonly description: "Extra attribute dictionary to add custom parameters or metadata to the payment";
                                    };
                                };
                                readonly additionalProperties: false;
                            };
                            readonly shareLink: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly email: {
                                        readonly type: "string";
                                        readonly description: "Payment link will be send to the email specified";
                                    };
                                    readonly smsPhone: {
                                        readonly type: "string";
                                        readonly description: "Payment link will be send to the phone specified, extra charges apply";
                                    };
                                };
                                readonly additionalProperties: false;
                            };
                            readonly network: {
                                readonly type: "string";
                                readonly description: "";
                            };
                            readonly blockedAmount: {
                                readonly type: "number";
                                readonly description: "";
                                readonly format: "double";
                                readonly minimum: -1.7976931348623157e+308;
                                readonly maximum: 1.7976931348623157e+308;
                            };
                            readonly capturedAmount: {
                                readonly type: "number";
                                readonly description: "";
                                readonly format: "double";
                                readonly minimum: -1.7976931348623157e+308;
                                readonly maximum: 1.7976931348623157e+308;
                            };
                            readonly refundedAmount: {
                                readonly type: "number";
                                readonly description: "";
                                readonly format: "double";
                                readonly minimum: -1.7976931348623157e+308;
                                readonly maximum: 1.7976931348623157e+308;
                            };
                            readonly reversedAmount: {
                                readonly type: "number";
                                readonly description: "";
                                readonly format: "double";
                                readonly minimum: -1.7976931348623157e+308;
                                readonly maximum: 1.7976931348623157e+308;
                            };
                            readonly settledBalanceAmount: {
                                readonly type: "number";
                                readonly description: "";
                                readonly format: "double";
                                readonly minimum: -1.7976931348623157e+308;
                                readonly maximum: 1.7976931348623157e+308;
                            };
                            readonly crossCurrencySettlement: {
                                readonly type: "boolean";
                                readonly description: "";
                            };
                            readonly settled: {
                                readonly type: "boolean";
                                readonly description: "";
                            };
                            readonly rejectReason: {
                                readonly type: "string";
                                readonly description: "";
                            };
                            readonly fee: {
                                readonly type: "number";
                                readonly description: "";
                                readonly format: "double";
                                readonly minimum: -1.7976931348623157e+308;
                                readonly maximum: 1.7976931348623157e+308;
                            };
                            readonly channel: {
                                readonly type: "string";
                                readonly description: "";
                            };
                            readonly payer: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly email: {
                                        readonly type: "string";
                                        readonly description: "";
                                    };
                                    readonly phone: {
                                        readonly type: "string";
                                        readonly description: "";
                                    };
                                    readonly fullName: {
                                        readonly type: "string";
                                        readonly description: "";
                                    };
                                    readonly personalId: {
                                        readonly type: "string";
                                        readonly description: "";
                                    };
                                    readonly taxId: {
                                        readonly type: "string";
                                        readonly description: "";
                                    };
                                    readonly country: {
                                        readonly type: "string";
                                        readonly description: "";
                                    };
                                    readonly ip: {
                                        readonly type: "string";
                                        readonly description: "";
                                    };
                                };
                                readonly additionalProperties: false;
                            };
                            readonly receipt: {
                                readonly type: "string";
                                readonly description: "";
                            };
                            readonly sandBox: {
                                readonly type: "boolean";
                                readonly description: "";
                            };
                            readonly capturedDate: {
                                readonly type: "string";
                                readonly description: "";
                                readonly format: "date-time";
                            };
                            readonly blockedDate: {
                                readonly type: "string";
                                readonly description: "";
                                readonly format: "date-time";
                            };
                            readonly settledDate: {
                                readonly type: "string";
                                readonly description: "";
                                readonly format: "date-time";
                            };
                            readonly refundedDate: {
                                readonly type: "string";
                                readonly description: "";
                                readonly format: "date-time";
                            };
                            readonly reverseDate: {
                                readonly type: "string";
                                readonly description: "";
                                readonly format: "date-time";
                            };
                            readonly rejectedDate: {
                                readonly type: "string";
                                readonly description: "";
                                readonly format: "date-time";
                            };
                            readonly createdDate: {
                                readonly type: "string";
                                readonly description: "";
                                readonly format: "date-time";
                            };
                            readonly paymentUrl: {
                                readonly type: "string";
                                readonly description: "";
                            };
                            readonly version: {
                                readonly type: "integer";
                                readonly description: "";
                                readonly format: "int32";
                                readonly readOnly: true;
                                readonly minimum: -2147483648;
                                readonly maximum: 2147483647;
                            };
                            readonly lastModifiedDate: {
                                readonly type: "string";
                                readonly description: "";
                                readonly format: "date-time";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                    readonly description: "";
                };
                readonly count: {
                    readonly type: "integer";
                    readonly description: "";
                    readonly format: "int64";
                    readonly minimum: -9223372036854776000;
                    readonly maximum: 9223372036854776000;
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly title: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly status: {
                    readonly type: "integer";
                    readonly description: "";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly detail: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly instance: {
                    readonly type: "string";
                    readonly description: "";
                };
            };
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly title: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly status: {
                    readonly type: "integer";
                    readonly description: "";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly detail: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly instance: {
                    readonly type: "string";
                    readonly description: "";
                };
            };
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetPaymentReceipt: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly TransactionId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "TransactionId to for Payment Receipt";
                };
            };
            readonly required: readonly ["TransactionId"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly transactionId: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly receipt: {
                    readonly type: "string";
                    readonly description: "";
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly title: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly status: {
                    readonly type: "integer";
                    readonly description: "";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly detail: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly instance: {
                    readonly type: "string";
                    readonly description: "";
                };
            };
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly title: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly status: {
                    readonly type: "integer";
                    readonly description: "";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly detail: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly instance: {
                    readonly type: "string";
                    readonly description: "";
                };
            };
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetPaymentRefundQueryRoot: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly PaymentId: {
                    readonly type: "integer";
                    readonly format: "int64";
                    readonly minimum: -9223372036854776000;
                    readonly maximum: 9223372036854776000;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly TransactionId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly refunds: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly type: "integer";
                                readonly description: "";
                                readonly format: "int64";
                                readonly minimum: -9223372036854776000;
                                readonly maximum: 9223372036854776000;
                            };
                            readonly type: {
                                readonly enum: readonly ["Refund", "Reverse", "Chargeback"];
                                readonly type: "string";
                                readonly description: "`Refund` `Reverse` `Chargeback`";
                            };
                            readonly status: {
                                readonly enum: readonly ["Draft", "Approved", "Rejected", "Processed", "Cleared"];
                                readonly type: "string";
                                readonly description: "`Draft` `Approved` `Rejected` `Processed` `Cleared`";
                            };
                            readonly requesterId: {
                                readonly type: "integer";
                                readonly description: "";
                                readonly format: "int64";
                                readonly minimum: -9223372036854776000;
                                readonly maximum: 9223372036854776000;
                            };
                            readonly paymentId: {
                                readonly type: "integer";
                                readonly description: "";
                                readonly format: "int64";
                                readonly minimum: -9223372036854776000;
                                readonly maximum: 9223372036854776000;
                            };
                            readonly transactionId: {
                                readonly type: "string";
                                readonly description: "";
                            };
                            readonly rrn: {
                                readonly type: "string";
                                readonly description: "";
                            };
                            readonly amount: {
                                readonly type: "number";
                                readonly description: "";
                                readonly format: "double";
                                readonly minimum: -1.7976931348623157e+308;
                                readonly maximum: 1.7976931348623157e+308;
                            };
                            readonly currency: {
                                readonly type: "string";
                                readonly description: "";
                            };
                            readonly fee: {
                                readonly type: "number";
                                readonly description: "";
                                readonly format: "double";
                                readonly minimum: -1.7976931348623157e+308;
                                readonly maximum: 1.7976931348623157e+308;
                            };
                            readonly clearedAmount: {
                                readonly type: "number";
                                readonly description: "";
                                readonly format: "double";
                                readonly minimum: -1.7976931348623157e+308;
                                readonly maximum: 1.7976931348623157e+308;
                            };
                            readonly clearedCurrency: {
                                readonly type: "string";
                                readonly description: "";
                            };
                            readonly clearedAt: {
                                readonly type: "string";
                                readonly description: "";
                                readonly format: "date-time";
                            };
                            readonly rejectionReason: {
                                readonly type: "string";
                                readonly description: "";
                            };
                            readonly rejectedAt: {
                                readonly type: "string";
                                readonly description: "";
                                readonly format: "date-time";
                            };
                            readonly processedAt: {
                                readonly type: "string";
                                readonly description: "";
                                readonly format: "date-time";
                            };
                            readonly createdDate: {
                                readonly type: "string";
                                readonly description: "";
                                readonly format: "date-time";
                            };
                            readonly comment: {
                                readonly type: "string";
                                readonly description: "";
                            };
                            readonly orderData: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly orderId: {
                                        readonly type: "string";
                                        readonly description: "E-commerce order unique identifier";
                                    };
                                    readonly advanceContractId: {
                                        readonly type: "string";
                                        readonly description: "E-commerce DownPayment contract id";
                                    };
                                    readonly orderItems: {
                                        readonly type: "array";
                                        readonly items: {
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly productLink: {
                                                    readonly type: "string";
                                                    readonly description: "Product link";
                                                };
                                                readonly productImage: {
                                                    readonly type: "string";
                                                    readonly description: "Product image link";
                                                };
                                                readonly productName: {
                                                    readonly type: "string";
                                                    readonly description: "Name of goods/service";
                                                };
                                                readonly productCode: {
                                                    readonly type: "string";
                                                    readonly description: "Legal code of goods and services, AKA. IKPU";
                                                };
                                                readonly productBarCode: {
                                                    readonly type: "string";
                                                    readonly description: "Barcode of goods/service";
                                                };
                                                readonly productLabel: {
                                                    readonly type: "string";
                                                    readonly description: "Product label, AKA. Marking code";
                                                };
                                                readonly packageCode: {
                                                    readonly type: "string";
                                                    readonly description: "Product package code";
                                                };
                                                readonly productQuantity: {
                                                    readonly type: "number";
                                                    readonly description: "Total product quantity";
                                                    readonly format: "double";
                                                    readonly minimum: -1.7976931348623157e+308;
                                                    readonly maximum: 1.7976931348623157e+308;
                                                };
                                                readonly price: {
                                                    readonly type: "number";
                                                    readonly description: "Price of single good/service";
                                                    readonly format: "double";
                                                    readonly minimum: -1.7976931348623157e+308;
                                                    readonly maximum: 1.7976931348623157e+308;
                                                };
                                                readonly sumPrice: {
                                                    readonly type: "number";
                                                    readonly description: "The total amount of the position, taking into account the quantity and excluding discounts";
                                                    readonly format: "double";
                                                    readonly minimum: -1.7976931348623157e+308;
                                                    readonly maximum: 1.7976931348623157e+308;
                                                };
                                                readonly vat: {
                                                    readonly type: "number";
                                                    readonly description: "Vat amount, eg. 1";
                                                    readonly format: "double";
                                                    readonly minimum: -1.7976931348623157e+308;
                                                    readonly maximum: 1.7976931348623157e+308;
                                                };
                                                readonly vatPercent: {
                                                    readonly type: "integer";
                                                    readonly description: "Vat percent, eg. 20";
                                                    readonly format: "int32";
                                                    readonly minimum: -2147483648;
                                                    readonly maximum: 2147483647;
                                                };
                                                readonly discount: {
                                                    readonly type: "number";
                                                    readonly description: "Discount for the good/service, amount";
                                                    readonly format: "double";
                                                    readonly minimum: -1.7976931348623157e+308;
                                                    readonly maximum: 1.7976931348623157e+308;
                                                };
                                                readonly additionalDiscount: {
                                                    readonly type: "number";
                                                    readonly description: "Additional discount, for Insurances";
                                                    readonly format: "double";
                                                    readonly minimum: -1.7976931348623157e+308;
                                                    readonly maximum: 1.7976931348623157e+308;
                                                };
                                                readonly voucher: {
                                                    readonly type: "integer";
                                                    readonly description: "Voucher amount";
                                                    readonly format: "int64";
                                                    readonly minimum: -9223372036854776000;
                                                    readonly maximum: 9223372036854776000;
                                                };
                                                readonly uzRegulatoryOrderItem: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly commissionInfoTin: {
                                                            readonly type: "string";
                                                            readonly description: "TIN (if the principal is a legal entity)";
                                                        };
                                                        readonly commissionInfoPinfl: {
                                                            readonly type: "string";
                                                            readonly description: "PINFL (if the principal is an individual)";
                                                        };
                                                    };
                                                    readonly additionalProperties: false;
                                                };
                                            };
                                            readonly additionalProperties: false;
                                        };
                                        readonly description: "E-commerce order items";
                                    };
                                    readonly uzRegulatoryOrderDetails: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly latitude: {
                                                readonly type: "number";
                                                readonly description: "Order capture location Latitude";
                                                readonly format: "double";
                                                readonly minimum: -1.7976931348623157e+308;
                                                readonly maximum: 1.7976931348623157e+308;
                                            };
                                            readonly longitude: {
                                                readonly type: "number";
                                                readonly description: "Order capture location Longitude";
                                                readonly format: "double";
                                                readonly minimum: -1.7976931348623157e+308;
                                                readonly maximum: 1.7976931348623157e+308;
                                            };
                                            readonly taxiVehicleNumber: {
                                                readonly type: "string";
                                                readonly description: "Tax order, Vehicle Number";
                                            };
                                            readonly taxiTin: {
                                                readonly type: "string";
                                                readonly description: "Tax order, TIN";
                                            };
                                            readonly taxiPinfl: {
                                                readonly type: "string";
                                                readonly description: "Tax order, PINFL";
                                            };
                                        };
                                        readonly additionalProperties: false;
                                    };
                                    readonly billingAddress: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly firstName: {
                                                readonly type: "string";
                                                readonly description: "";
                                            };
                                            readonly lastName: {
                                                readonly type: "string";
                                                readonly description: "";
                                            };
                                            readonly city: {
                                                readonly type: "string";
                                                readonly description: "";
                                            };
                                            readonly country: {
                                                readonly type: "string";
                                                readonly description: "";
                                            };
                                            readonly line1: {
                                                readonly type: "string";
                                                readonly description: "";
                                            };
                                            readonly line2: {
                                                readonly type: "string";
                                                readonly description: "";
                                            };
                                            readonly postalCode: {
                                                readonly type: "string";
                                                readonly description: "";
                                            };
                                            readonly state: {
                                                readonly type: "string";
                                                readonly description: "";
                                            };
                                            readonly phoneNumber: {
                                                readonly type: "string";
                                                readonly description: "";
                                            };
                                            readonly personalId: {
                                                readonly type: "string";
                                                readonly description: "";
                                            };
                                            readonly taxId: {
                                                readonly type: "string";
                                                readonly description: "";
                                            };
                                        };
                                        readonly additionalProperties: false;
                                    };
                                    readonly shippingAddress: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly firstName: {
                                                readonly type: "string";
                                                readonly description: "";
                                            };
                                            readonly lastName: {
                                                readonly type: "string";
                                                readonly description: "";
                                            };
                                            readonly city: {
                                                readonly type: "string";
                                                readonly description: "";
                                            };
                                            readonly country: {
                                                readonly type: "string";
                                                readonly description: "";
                                            };
                                            readonly line1: {
                                                readonly type: "string";
                                                readonly description: "";
                                            };
                                            readonly line2: {
                                                readonly type: "string";
                                                readonly description: "";
                                            };
                                            readonly postalCode: {
                                                readonly type: "string";
                                                readonly description: "";
                                            };
                                            readonly state: {
                                                readonly type: "string";
                                                readonly description: "";
                                            };
                                            readonly phoneNumber: {
                                                readonly type: "string";
                                                readonly description: "";
                                            };
                                            readonly personalId: {
                                                readonly type: "string";
                                                readonly description: "";
                                            };
                                            readonly taxId: {
                                                readonly type: "string";
                                                readonly description: "";
                                            };
                                        };
                                        readonly additionalProperties: false;
                                    };
                                };
                                readonly additionalProperties: false;
                            };
                            readonly extraAttributes: {
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly key: {
                                            readonly type: "string";
                                            readonly description: "";
                                        };
                                        readonly value: {
                                            readonly type: "string";
                                            readonly description: "";
                                        };
                                        readonly description: {
                                            readonly type: "string";
                                            readonly description: "";
                                        };
                                    };
                                    readonly additionalProperties: false;
                                };
                                readonly description: "";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                    readonly description: "";
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly title: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly status: {
                    readonly type: "integer";
                    readonly description: "";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly detail: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly instance: {
                    readonly type: "string";
                    readonly description: "";
                };
            };
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly title: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly status: {
                    readonly type: "integer";
                    readonly description: "";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly detail: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly instance: {
                    readonly type: "string";
                    readonly description: "";
                };
            };
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetPaymentRefundQueryTokenBased: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly TransactionId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly refunds: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly type: "integer";
                                readonly description: "";
                                readonly format: "int64";
                                readonly minimum: -9223372036854776000;
                                readonly maximum: 9223372036854776000;
                            };
                            readonly type: {
                                readonly enum: readonly ["Refund", "Reverse", "Chargeback"];
                                readonly type: "string";
                                readonly description: "`Refund` `Reverse` `Chargeback`";
                            };
                            readonly status: {
                                readonly enum: readonly ["Draft", "Approved", "Rejected", "Processed", "Cleared"];
                                readonly type: "string";
                                readonly description: "`Draft` `Approved` `Rejected` `Processed` `Cleared`";
                            };
                            readonly requesterId: {
                                readonly type: "integer";
                                readonly description: "";
                                readonly format: "int64";
                                readonly minimum: -9223372036854776000;
                                readonly maximum: 9223372036854776000;
                            };
                            readonly paymentId: {
                                readonly type: "integer";
                                readonly description: "";
                                readonly format: "int64";
                                readonly minimum: -9223372036854776000;
                                readonly maximum: 9223372036854776000;
                            };
                            readonly transactionId: {
                                readonly type: "string";
                                readonly description: "";
                            };
                            readonly rrn: {
                                readonly type: "string";
                                readonly description: "";
                            };
                            readonly amount: {
                                readonly type: "number";
                                readonly description: "";
                                readonly format: "double";
                                readonly minimum: -1.7976931348623157e+308;
                                readonly maximum: 1.7976931348623157e+308;
                            };
                            readonly currency: {
                                readonly type: "string";
                                readonly description: "";
                            };
                            readonly fee: {
                                readonly type: "number";
                                readonly description: "";
                                readonly format: "double";
                                readonly minimum: -1.7976931348623157e+308;
                                readonly maximum: 1.7976931348623157e+308;
                            };
                            readonly clearedAmount: {
                                readonly type: "number";
                                readonly description: "";
                                readonly format: "double";
                                readonly minimum: -1.7976931348623157e+308;
                                readonly maximum: 1.7976931348623157e+308;
                            };
                            readonly clearedCurrency: {
                                readonly type: "string";
                                readonly description: "";
                            };
                            readonly clearedAt: {
                                readonly type: "string";
                                readonly description: "";
                                readonly format: "date-time";
                            };
                            readonly rejectionReason: {
                                readonly type: "string";
                                readonly description: "";
                            };
                            readonly rejectedAt: {
                                readonly type: "string";
                                readonly description: "";
                                readonly format: "date-time";
                            };
                            readonly processedAt: {
                                readonly type: "string";
                                readonly description: "";
                                readonly format: "date-time";
                            };
                            readonly createdDate: {
                                readonly type: "string";
                                readonly description: "";
                                readonly format: "date-time";
                            };
                            readonly comment: {
                                readonly type: "string";
                                readonly description: "";
                            };
                            readonly orderData: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly orderId: {
                                        readonly type: "string";
                                        readonly description: "E-commerce order unique identifier";
                                    };
                                    readonly advanceContractId: {
                                        readonly type: "string";
                                        readonly description: "E-commerce DownPayment contract id";
                                    };
                                    readonly orderItems: {
                                        readonly type: "array";
                                        readonly items: {
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly productLink: {
                                                    readonly type: "string";
                                                    readonly description: "Product link";
                                                };
                                                readonly productImage: {
                                                    readonly type: "string";
                                                    readonly description: "Product image link";
                                                };
                                                readonly productName: {
                                                    readonly type: "string";
                                                    readonly description: "Name of goods/service";
                                                };
                                                readonly productCode: {
                                                    readonly type: "string";
                                                    readonly description: "Legal code of goods and services, AKA. IKPU";
                                                };
                                                readonly productBarCode: {
                                                    readonly type: "string";
                                                    readonly description: "Barcode of goods/service";
                                                };
                                                readonly productLabel: {
                                                    readonly type: "string";
                                                    readonly description: "Product label, AKA. Marking code";
                                                };
                                                readonly packageCode: {
                                                    readonly type: "string";
                                                    readonly description: "Product package code";
                                                };
                                                readonly productQuantity: {
                                                    readonly type: "number";
                                                    readonly description: "Total product quantity";
                                                    readonly format: "double";
                                                    readonly minimum: -1.7976931348623157e+308;
                                                    readonly maximum: 1.7976931348623157e+308;
                                                };
                                                readonly price: {
                                                    readonly type: "number";
                                                    readonly description: "Price of single good/service";
                                                    readonly format: "double";
                                                    readonly minimum: -1.7976931348623157e+308;
                                                    readonly maximum: 1.7976931348623157e+308;
                                                };
                                                readonly sumPrice: {
                                                    readonly type: "number";
                                                    readonly description: "The total amount of the position, taking into account the quantity and excluding discounts";
                                                    readonly format: "double";
                                                    readonly minimum: -1.7976931348623157e+308;
                                                    readonly maximum: 1.7976931348623157e+308;
                                                };
                                                readonly vat: {
                                                    readonly type: "number";
                                                    readonly description: "Vat amount, eg. 1";
                                                    readonly format: "double";
                                                    readonly minimum: -1.7976931348623157e+308;
                                                    readonly maximum: 1.7976931348623157e+308;
                                                };
                                                readonly vatPercent: {
                                                    readonly type: "integer";
                                                    readonly description: "Vat percent, eg. 20";
                                                    readonly format: "int32";
                                                    readonly minimum: -2147483648;
                                                    readonly maximum: 2147483647;
                                                };
                                                readonly discount: {
                                                    readonly type: "number";
                                                    readonly description: "Discount for the good/service, amount";
                                                    readonly format: "double";
                                                    readonly minimum: -1.7976931348623157e+308;
                                                    readonly maximum: 1.7976931348623157e+308;
                                                };
                                                readonly additionalDiscount: {
                                                    readonly type: "number";
                                                    readonly description: "Additional discount, for Insurances";
                                                    readonly format: "double";
                                                    readonly minimum: -1.7976931348623157e+308;
                                                    readonly maximum: 1.7976931348623157e+308;
                                                };
                                                readonly voucher: {
                                                    readonly type: "integer";
                                                    readonly description: "Voucher amount";
                                                    readonly format: "int64";
                                                    readonly minimum: -9223372036854776000;
                                                    readonly maximum: 9223372036854776000;
                                                };
                                                readonly uzRegulatoryOrderItem: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly commissionInfoTin: {
                                                            readonly type: "string";
                                                            readonly description: "TIN (if the principal is a legal entity)";
                                                        };
                                                        readonly commissionInfoPinfl: {
                                                            readonly type: "string";
                                                            readonly description: "PINFL (if the principal is an individual)";
                                                        };
                                                    };
                                                    readonly additionalProperties: false;
                                                };
                                            };
                                            readonly additionalProperties: false;
                                        };
                                        readonly description: "E-commerce order items";
                                    };
                                    readonly uzRegulatoryOrderDetails: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly latitude: {
                                                readonly type: "number";
                                                readonly description: "Order capture location Latitude";
                                                readonly format: "double";
                                                readonly minimum: -1.7976931348623157e+308;
                                                readonly maximum: 1.7976931348623157e+308;
                                            };
                                            readonly longitude: {
                                                readonly type: "number";
                                                readonly description: "Order capture location Longitude";
                                                readonly format: "double";
                                                readonly minimum: -1.7976931348623157e+308;
                                                readonly maximum: 1.7976931348623157e+308;
                                            };
                                            readonly taxiVehicleNumber: {
                                                readonly type: "string";
                                                readonly description: "Tax order, Vehicle Number";
                                            };
                                            readonly taxiTin: {
                                                readonly type: "string";
                                                readonly description: "Tax order, TIN";
                                            };
                                            readonly taxiPinfl: {
                                                readonly type: "string";
                                                readonly description: "Tax order, PINFL";
                                            };
                                        };
                                        readonly additionalProperties: false;
                                    };
                                    readonly billingAddress: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly firstName: {
                                                readonly type: "string";
                                                readonly description: "";
                                            };
                                            readonly lastName: {
                                                readonly type: "string";
                                                readonly description: "";
                                            };
                                            readonly city: {
                                                readonly type: "string";
                                                readonly description: "";
                                            };
                                            readonly country: {
                                                readonly type: "string";
                                                readonly description: "";
                                            };
                                            readonly line1: {
                                                readonly type: "string";
                                                readonly description: "";
                                            };
                                            readonly line2: {
                                                readonly type: "string";
                                                readonly description: "";
                                            };
                                            readonly postalCode: {
                                                readonly type: "string";
                                                readonly description: "";
                                            };
                                            readonly state: {
                                                readonly type: "string";
                                                readonly description: "";
                                            };
                                            readonly phoneNumber: {
                                                readonly type: "string";
                                                readonly description: "";
                                            };
                                            readonly personalId: {
                                                readonly type: "string";
                                                readonly description: "";
                                            };
                                            readonly taxId: {
                                                readonly type: "string";
                                                readonly description: "";
                                            };
                                        };
                                        readonly additionalProperties: false;
                                    };
                                    readonly shippingAddress: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly firstName: {
                                                readonly type: "string";
                                                readonly description: "";
                                            };
                                            readonly lastName: {
                                                readonly type: "string";
                                                readonly description: "";
                                            };
                                            readonly city: {
                                                readonly type: "string";
                                                readonly description: "";
                                            };
                                            readonly country: {
                                                readonly type: "string";
                                                readonly description: "";
                                            };
                                            readonly line1: {
                                                readonly type: "string";
                                                readonly description: "";
                                            };
                                            readonly line2: {
                                                readonly type: "string";
                                                readonly description: "";
                                            };
                                            readonly postalCode: {
                                                readonly type: "string";
                                                readonly description: "";
                                            };
                                            readonly state: {
                                                readonly type: "string";
                                                readonly description: "";
                                            };
                                            readonly phoneNumber: {
                                                readonly type: "string";
                                                readonly description: "";
                                            };
                                            readonly personalId: {
                                                readonly type: "string";
                                                readonly description: "";
                                            };
                                            readonly taxId: {
                                                readonly type: "string";
                                                readonly description: "";
                                            };
                                        };
                                        readonly additionalProperties: false;
                                    };
                                };
                                readonly additionalProperties: false;
                            };
                            readonly extraAttributes: {
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly key: {
                                            readonly type: "string";
                                            readonly description: "";
                                        };
                                        readonly value: {
                                            readonly type: "string";
                                            readonly description: "";
                                        };
                                        readonly description: {
                                            readonly type: "string";
                                            readonly description: "";
                                        };
                                    };
                                    readonly additionalProperties: false;
                                };
                                readonly description: "";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                    readonly description: "";
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly title: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly status: {
                    readonly type: "integer";
                    readonly description: "";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly detail: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly instance: {
                    readonly type: "string";
                    readonly description: "";
                };
            };
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly title: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly status: {
                    readonly type: "integer";
                    readonly description: "";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly detail: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly instance: {
                    readonly type: "string";
                    readonly description: "";
                };
            };
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetPaymentSplitQueryRoot: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly PaymentId: {
                    readonly type: "integer";
                    readonly format: "int64";
                    readonly minimum: -9223372036854776000;
                    readonly maximum: 9223372036854776000;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly TransactionId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly splits: {
                    readonly type: "array";
                    readonly items: {
                        readonly required: readonly ["amount", "delayPayoutDays", "description", "payoutAccount", "status"];
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly type: "integer";
                                readonly description: "";
                                readonly format: "int64";
                                readonly minimum: -9223372036854776000;
                                readonly maximum: 9223372036854776000;
                            };
                            readonly status: {
                                readonly enum: readonly ["Draft", "Scheduled", "PayedOut", "Error", "Charged", "Canceled"];
                                readonly type: "string";
                                readonly description: "`Draft` `Scheduled` `PayedOut` `Error` `Charged` `Canceled`";
                            };
                            readonly amount: {
                                readonly type: "number";
                                readonly description: "Split amount";
                                readonly format: "double";
                                readonly minimum: -1.7976931348623157e+308;
                                readonly maximum: 1.7976931348623157e+308;
                            };
                            readonly payoutAccount: {
                                readonly required: readonly ["iban"];
                                readonly type: "object";
                                readonly properties: {
                                    readonly ownerName: {
                                        readonly type: "string";
                                        readonly description: "Account owner full name";
                                    };
                                    readonly ownerPersonalId: {
                                        readonly type: "string";
                                        readonly description: "Account owner tax id, if not specified, owner owner tax id will be used";
                                    };
                                    readonly ownerTaxId: {
                                        readonly type: "string";
                                        readonly description: "Account owner tax id, if not specified, owner personal id will be used";
                                    };
                                    readonly iban: {
                                        readonly type: "string";
                                        readonly description: "Account IBAN";
                                    };
                                };
                                readonly additionalProperties: false;
                            };
                            readonly delayPayoutDays: {
                                readonly type: "number";
                                readonly description: "Provided value delays split payout by days";
                                readonly format: "double";
                                readonly minimum: -1.7976931348623157e+308;
                                readonly maximum: 1.7976931348623157e+308;
                            };
                            readonly description: {
                                readonly type: "string";
                                readonly description: "Split description";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                    readonly description: "";
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly title: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly status: {
                    readonly type: "integer";
                    readonly description: "";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly detail: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly instance: {
                    readonly type: "string";
                    readonly description: "";
                };
            };
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly title: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly status: {
                    readonly type: "integer";
                    readonly description: "";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly detail: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly instance: {
                    readonly type: "string";
                    readonly description: "";
                };
            };
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetPaymentSplitQueryTokenBased: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly PaymentId: {
                    readonly type: "integer";
                    readonly format: "int64";
                    readonly minimum: -9223372036854776000;
                    readonly maximum: 9223372036854776000;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly TransactionId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly splits: {
                    readonly type: "array";
                    readonly items: {
                        readonly required: readonly ["amount", "delayPayoutDays", "description", "payoutAccount", "status"];
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly type: "integer";
                                readonly description: "";
                                readonly format: "int64";
                                readonly minimum: -9223372036854776000;
                                readonly maximum: 9223372036854776000;
                            };
                            readonly status: {
                                readonly enum: readonly ["Draft", "Scheduled", "PayedOut", "Error", "Charged", "Canceled"];
                                readonly type: "string";
                                readonly description: "`Draft` `Scheduled` `PayedOut` `Error` `Charged` `Canceled`";
                            };
                            readonly amount: {
                                readonly type: "number";
                                readonly description: "Split amount";
                                readonly format: "double";
                                readonly minimum: -1.7976931348623157e+308;
                                readonly maximum: 1.7976931348623157e+308;
                            };
                            readonly payoutAccount: {
                                readonly required: readonly ["iban"];
                                readonly type: "object";
                                readonly properties: {
                                    readonly ownerName: {
                                        readonly type: "string";
                                        readonly description: "Account owner full name";
                                    };
                                    readonly ownerPersonalId: {
                                        readonly type: "string";
                                        readonly description: "Account owner tax id, if not specified, owner owner tax id will be used";
                                    };
                                    readonly ownerTaxId: {
                                        readonly type: "string";
                                        readonly description: "Account owner tax id, if not specified, owner personal id will be used";
                                    };
                                    readonly iban: {
                                        readonly type: "string";
                                        readonly description: "Account IBAN";
                                    };
                                };
                                readonly additionalProperties: false;
                            };
                            readonly delayPayoutDays: {
                                readonly type: "number";
                                readonly description: "Provided value delays split payout by days";
                                readonly format: "double";
                                readonly minimum: -1.7976931348623157e+308;
                                readonly maximum: 1.7976931348623157e+308;
                            };
                            readonly description: {
                                readonly type: "string";
                                readonly description: "Split description";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                    readonly description: "";
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly title: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly status: {
                    readonly type: "integer";
                    readonly description: "";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly detail: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly instance: {
                    readonly type: "string";
                    readonly description: "";
                };
            };
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly title: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly status: {
                    readonly type: "integer";
                    readonly description: "";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly detail: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly instance: {
                    readonly type: "string";
                    readonly description: "";
                };
            };
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetPayoutQueryRoot: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly $filter: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly $top: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly $skip: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly $orderby: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly value: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly type: "integer";
                                readonly description: "";
                                readonly format: "int64";
                                readonly minimum: -9223372036854776000;
                                readonly maximum: 9223372036854776000;
                            };
                            readonly currency: {
                                readonly type: "string";
                                readonly description: "";
                            };
                            readonly amount: {
                                readonly type: "number";
                                readonly description: "";
                                readonly format: "double";
                                readonly minimum: -1.7976931348623157e+308;
                                readonly maximum: 1.7976931348623157e+308;
                            };
                            readonly bankAccountId: {
                                readonly type: "integer";
                                readonly description: "";
                                readonly format: "int64";
                                readonly minimum: -9223372036854776000;
                                readonly maximum: 9223372036854776000;
                            };
                            readonly rejectReason: {
                                readonly type: "string";
                                readonly description: "";
                            };
                            readonly description: {
                                readonly type: "string";
                                readonly description: "";
                            };
                            readonly partnerName: {
                                readonly type: "string";
                                readonly description: "";
                            };
                            readonly status: {
                                readonly enum: readonly ["Draft", "Charged", "Rejected", "Completed"];
                                readonly type: "string";
                                readonly description: "`Draft` `Charged` `Rejected` `Completed`";
                            };
                            readonly vendorResponseErrorMessage: {
                                readonly type: "string";
                                readonly description: "";
                            };
                            readonly vendorTransactionDate: {
                                readonly type: "string";
                                readonly description: "";
                                readonly format: "date-time";
                            };
                            readonly uniqueId: {
                                readonly type: "string";
                                readonly description: "";
                            };
                            readonly createdDate: {
                                readonly type: "string";
                                readonly description: "";
                                readonly format: "date-time";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                    readonly description: "";
                };
                readonly count: {
                    readonly type: "integer";
                    readonly description: "";
                    readonly format: "int64";
                    readonly minimum: -9223372036854776000;
                    readonly maximum: 9223372036854776000;
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly title: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly status: {
                    readonly type: "integer";
                    readonly description: "";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly detail: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly instance: {
                    readonly type: "string";
                    readonly description: "";
                };
            };
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly title: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly status: {
                    readonly type: "integer";
                    readonly description: "";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly detail: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly instance: {
                    readonly type: "string";
                    readonly description: "";
                };
            };
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetPayoutQueryTokenBased: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly $filter: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly $top: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly $skip: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly $orderby: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly value: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly type: "integer";
                                readonly description: "";
                                readonly format: "int64";
                                readonly minimum: -9223372036854776000;
                                readonly maximum: 9223372036854776000;
                            };
                            readonly currency: {
                                readonly type: "string";
                                readonly description: "";
                            };
                            readonly amount: {
                                readonly type: "number";
                                readonly description: "";
                                readonly format: "double";
                                readonly minimum: -1.7976931348623157e+308;
                                readonly maximum: 1.7976931348623157e+308;
                            };
                            readonly bankAccountId: {
                                readonly type: "integer";
                                readonly description: "";
                                readonly format: "int64";
                                readonly minimum: -9223372036854776000;
                                readonly maximum: 9223372036854776000;
                            };
                            readonly rejectReason: {
                                readonly type: "string";
                                readonly description: "";
                            };
                            readonly description: {
                                readonly type: "string";
                                readonly description: "";
                            };
                            readonly partnerName: {
                                readonly type: "string";
                                readonly description: "";
                            };
                            readonly status: {
                                readonly enum: readonly ["Draft", "Charged", "Rejected", "Completed"];
                                readonly type: "string";
                                readonly description: "`Draft` `Charged` `Rejected` `Completed`";
                            };
                            readonly vendorResponseErrorMessage: {
                                readonly type: "string";
                                readonly description: "";
                            };
                            readonly vendorTransactionDate: {
                                readonly type: "string";
                                readonly description: "";
                                readonly format: "date-time";
                            };
                            readonly uniqueId: {
                                readonly type: "string";
                                readonly description: "";
                            };
                            readonly createdDate: {
                                readonly type: "string";
                                readonly description: "";
                                readonly format: "date-time";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                    readonly description: "";
                };
                readonly count: {
                    readonly type: "integer";
                    readonly description: "";
                    readonly format: "int64";
                    readonly minimum: -9223372036854776000;
                    readonly maximum: 9223372036854776000;
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly title: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly status: {
                    readonly type: "integer";
                    readonly description: "";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly detail: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly instance: {
                    readonly type: "string";
                    readonly description: "";
                };
            };
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly title: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly status: {
                    readonly type: "integer";
                    readonly description: "";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly detail: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly instance: {
                    readonly type: "string";
                    readonly description: "";
                };
            };
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetProcessorbank: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly CompanyId: {
                    readonly type: "integer";
                    readonly format: "int64";
                    readonly minimum: -9223372036854776000;
                    readonly maximum: 9223372036854776000;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly processorBanks: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly processorBankId: {
                                readonly type: "integer";
                                readonly description: "";
                                readonly format: "int32";
                                readonly minimum: -2147483648;
                                readonly maximum: 2147483647;
                            };
                            readonly source: {
                                readonly enum: readonly ["Card", "Wallet"];
                                readonly type: "string";
                                readonly description: "`Card` `Wallet`";
                            };
                            readonly bank: {
                                readonly type: "string";
                                readonly description: "";
                            };
                            readonly isDefault: {
                                readonly type: "boolean";
                                readonly description: "";
                            };
                            readonly merchantId: {
                                readonly type: "string";
                                readonly description: "";
                            };
                            readonly terminalId: {
                                readonly type: "string";
                                readonly description: "";
                            };
                            readonly currency: {
                                readonly type: "string";
                                readonly description: "";
                            };
                            readonly portalId: {
                                readonly type: "string";
                                readonly description: "";
                            };
                            readonly brandDetail: {
                                readonly type: "string";
                                readonly description: "";
                            };
                            readonly extra: {
                                readonly type: "string";
                                readonly description: "";
                            };
                            readonly refundDays: {
                                readonly type: "integer";
                                readonly description: "";
                                readonly format: "int32";
                                readonly minimum: -2147483648;
                                readonly maximum: 2147483647;
                            };
                            readonly countryCode: {
                                readonly type: "string";
                                readonly description: "";
                            };
                            readonly zone: {
                                readonly type: "string";
                                readonly description: "";
                            };
                            readonly brand: {
                                readonly type: "string";
                                readonly description: "";
                            };
                            readonly otpEnabled: {
                                readonly type: "boolean";
                                readonly description: "";
                            };
                            readonly transactionLimitAmount: {
                                readonly type: "number";
                                readonly description: "";
                                readonly format: "double";
                                readonly minimum: -1.7976931348623157e+308;
                                readonly maximum: 1.7976931348623157e+308;
                            };
                        };
                        readonly additionalProperties: false;
                    };
                    readonly description: "";
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly title: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly status: {
                    readonly type: "integer";
                    readonly description: "";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly detail: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly instance: {
                    readonly type: "string";
                    readonly description: "";
                };
            };
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly title: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly status: {
                    readonly type: "integer";
                    readonly description: "";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly detail: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly instance: {
                    readonly type: "string";
                    readonly description: "";
                };
            };
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostBankaccount: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly bankName: {
                readonly type: "string";
                readonly description: "";
            };
            readonly ibanName: {
                readonly type: "string";
                readonly description: "";
            };
            readonly currency: {
                readonly type: "string";
                readonly description: "";
            };
            readonly companyId: {
                readonly type: "integer";
                readonly description: "";
                readonly format: "int64";
                readonly minimum: -9223372036854776000;
                readonly maximum: 9223372036854776000;
            };
            readonly ibanFrom: {
                readonly type: "string";
                readonly description: "";
            };
            readonly beneficiaryName: {
                readonly type: "string";
                readonly description: "";
            };
            readonly beneficiaryTaxId: {
                readonly type: "string";
                readonly description: "";
            };
            readonly iban: {
                readonly type: "string";
                readonly description: "";
            };
            readonly accountNumber: {
                readonly type: "string";
                readonly description: "";
            };
            readonly mfo: {
                readonly type: "string";
                readonly description: "";
            };
            readonly default: {
                readonly type: "boolean";
                readonly description: "";
                readonly default: false;
            };
        };
        readonly additionalProperties: false;
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "integer";
                    readonly description: "";
                    readonly format: "int64";
                    readonly minimum: -9223372036854776000;
                    readonly maximum: 9223372036854776000;
                };
                readonly companyId: {
                    readonly type: "integer";
                    readonly description: "";
                    readonly format: "int64";
                    readonly minimum: -9223372036854776000;
                    readonly maximum: 9223372036854776000;
                };
                readonly ibanName: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly bankName: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly currency: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly default: {
                    readonly type: "boolean";
                    readonly description: "";
                };
                readonly ibanFrom: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly beneficiaryName: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly beneficiaryTaxId: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly iban: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly accountNumber: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly mfo: {
                    readonly type: "string";
                    readonly description: "";
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly title: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly status: {
                    readonly type: "integer";
                    readonly description: "";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly detail: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly instance: {
                    readonly type: "string";
                    readonly description: "";
                };
            };
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostCertificate: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly status: {
                readonly type: "string";
                readonly description: "";
            };
            readonly certificate: {
                readonly type: "string";
                readonly description: "";
            };
            readonly password: {
                readonly type: "string";
                readonly description: "";
            };
            readonly bankId: {
                readonly type: "string";
                readonly description: "";
            };
            readonly merchantId: {
                readonly type: "string";
                readonly description: "";
            };
            readonly comment: {
                readonly type: "string";
                readonly description: "";
            };
        };
        readonly additionalProperties: false;
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly title: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly status: {
                    readonly type: "integer";
                    readonly description: "";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly detail: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly instance: {
                    readonly type: "string";
                    readonly description: "";
                };
            };
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly title: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly status: {
                    readonly type: "integer";
                    readonly description: "";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly detail: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly instance: {
                    readonly type: "string";
                    readonly description: "";
                };
            };
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostPaymentFiscalize: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly order: {
                readonly type: "object";
                readonly properties: {
                    readonly orderId: {
                        readonly type: "string";
                        readonly description: "E-commerce order unique identifier";
                    };
                    readonly advanceContractId: {
                        readonly type: "string";
                        readonly description: "E-commerce DownPayment contract id";
                    };
                    readonly orderItems: {
                        readonly type: "array";
                        readonly items: {
                            readonly type: "object";
                            readonly properties: {
                                readonly productLink: {
                                    readonly type: "string";
                                    readonly description: "Product link";
                                };
                                readonly productImage: {
                                    readonly type: "string";
                                    readonly description: "Product image link";
                                };
                                readonly productName: {
                                    readonly type: "string";
                                    readonly description: "Name of goods/service";
                                };
                                readonly productCode: {
                                    readonly type: "string";
                                    readonly description: "Legal code of goods and services, AKA. IKPU";
                                };
                                readonly productBarCode: {
                                    readonly type: "string";
                                    readonly description: "Barcode of goods/service";
                                };
                                readonly productLabel: {
                                    readonly type: "string";
                                    readonly description: "Product label, AKA. Marking code";
                                };
                                readonly packageCode: {
                                    readonly type: "string";
                                    readonly description: "Product package code";
                                };
                                readonly productQuantity: {
                                    readonly type: "number";
                                    readonly description: "Total product quantity";
                                    readonly format: "double";
                                    readonly minimum: -1.7976931348623157e+308;
                                    readonly maximum: 1.7976931348623157e+308;
                                };
                                readonly price: {
                                    readonly type: "number";
                                    readonly description: "Price of single good/service";
                                    readonly format: "double";
                                    readonly minimum: -1.7976931348623157e+308;
                                    readonly maximum: 1.7976931348623157e+308;
                                };
                                readonly sumPrice: {
                                    readonly type: "number";
                                    readonly description: "The total amount of the position, taking into account the quantity and excluding discounts";
                                    readonly format: "double";
                                    readonly minimum: -1.7976931348623157e+308;
                                    readonly maximum: 1.7976931348623157e+308;
                                };
                                readonly vat: {
                                    readonly type: "number";
                                    readonly description: "Vat amount, eg. 1";
                                    readonly format: "double";
                                    readonly minimum: -1.7976931348623157e+308;
                                    readonly maximum: 1.7976931348623157e+308;
                                };
                                readonly vatPercent: {
                                    readonly type: "integer";
                                    readonly description: "Vat percent, eg. 20";
                                    readonly format: "int32";
                                    readonly minimum: -2147483648;
                                    readonly maximum: 2147483647;
                                };
                                readonly discount: {
                                    readonly type: "number";
                                    readonly description: "Discount for the good/service, amount";
                                    readonly format: "double";
                                    readonly minimum: -1.7976931348623157e+308;
                                    readonly maximum: 1.7976931348623157e+308;
                                };
                                readonly additionalDiscount: {
                                    readonly type: "number";
                                    readonly description: "Additional discount, for Insurances";
                                    readonly format: "double";
                                    readonly minimum: -1.7976931348623157e+308;
                                    readonly maximum: 1.7976931348623157e+308;
                                };
                                readonly voucher: {
                                    readonly type: "integer";
                                    readonly description: "Voucher amount";
                                    readonly format: "int64";
                                    readonly minimum: -9223372036854776000;
                                    readonly maximum: 9223372036854776000;
                                };
                                readonly uzRegulatoryOrderItem: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly commissionInfoTin: {
                                            readonly type: "string";
                                            readonly description: "TIN (if the principal is a legal entity)";
                                        };
                                        readonly commissionInfoPinfl: {
                                            readonly type: "string";
                                            readonly description: "PINFL (if the principal is an individual)";
                                        };
                                    };
                                    readonly additionalProperties: false;
                                };
                            };
                            readonly additionalProperties: false;
                        };
                        readonly description: "E-commerce order items";
                    };
                    readonly uzRegulatoryOrderDetails: {
                        readonly type: "object";
                        readonly properties: {
                            readonly latitude: {
                                readonly type: "number";
                                readonly description: "Order capture location Latitude";
                                readonly format: "double";
                                readonly minimum: -1.7976931348623157e+308;
                                readonly maximum: 1.7976931348623157e+308;
                            };
                            readonly longitude: {
                                readonly type: "number";
                                readonly description: "Order capture location Longitude";
                                readonly format: "double";
                                readonly minimum: -1.7976931348623157e+308;
                                readonly maximum: 1.7976931348623157e+308;
                            };
                            readonly taxiVehicleNumber: {
                                readonly type: "string";
                                readonly description: "Tax order, Vehicle Number";
                            };
                            readonly taxiTin: {
                                readonly type: "string";
                                readonly description: "Tax order, TIN";
                            };
                            readonly taxiPinfl: {
                                readonly type: "string";
                                readonly description: "Tax order, PINFL";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                    readonly billingAddress: {
                        readonly type: "object";
                        readonly properties: {
                            readonly firstName: {
                                readonly type: "string";
                                readonly description: "";
                            };
                            readonly lastName: {
                                readonly type: "string";
                                readonly description: "";
                            };
                            readonly city: {
                                readonly type: "string";
                                readonly description: "";
                            };
                            readonly country: {
                                readonly type: "string";
                                readonly description: "";
                            };
                            readonly line1: {
                                readonly type: "string";
                                readonly description: "";
                            };
                            readonly line2: {
                                readonly type: "string";
                                readonly description: "";
                            };
                            readonly postalCode: {
                                readonly type: "string";
                                readonly description: "";
                            };
                            readonly state: {
                                readonly type: "string";
                                readonly description: "";
                            };
                            readonly phoneNumber: {
                                readonly type: "string";
                                readonly description: "";
                            };
                            readonly personalId: {
                                readonly type: "string";
                                readonly description: "";
                            };
                            readonly taxId: {
                                readonly type: "string";
                                readonly description: "";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                    readonly shippingAddress: {
                        readonly type: "object";
                        readonly properties: {
                            readonly firstName: {
                                readonly type: "string";
                                readonly description: "";
                            };
                            readonly lastName: {
                                readonly type: "string";
                                readonly description: "";
                            };
                            readonly city: {
                                readonly type: "string";
                                readonly description: "";
                            };
                            readonly country: {
                                readonly type: "string";
                                readonly description: "";
                            };
                            readonly line1: {
                                readonly type: "string";
                                readonly description: "";
                            };
                            readonly line2: {
                                readonly type: "string";
                                readonly description: "";
                            };
                            readonly postalCode: {
                                readonly type: "string";
                                readonly description: "";
                            };
                            readonly state: {
                                readonly type: "string";
                                readonly description: "";
                            };
                            readonly phoneNumber: {
                                readonly type: "string";
                                readonly description: "";
                            };
                            readonly personalId: {
                                readonly type: "string";
                                readonly description: "";
                            };
                            readonly taxId: {
                                readonly type: "string";
                                readonly description: "";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
                readonly additionalProperties: false;
            };
        };
        readonly additionalProperties: false;
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly advanceContractId: {
                    readonly type: "string";
                    readonly description: "";
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly title: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly status: {
                    readonly type: "integer";
                    readonly description: "";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly detail: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly instance: {
                    readonly type: "string";
                    readonly description: "";
                };
            };
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly title: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly status: {
                    readonly type: "integer";
                    readonly description: "";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly detail: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly instance: {
                    readonly type: "string";
                    readonly description: "";
                };
            };
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostPayout: {
    readonly body: {
        readonly required: readonly ["amount", "bankAccountId", "currency"];
        readonly type: "object";
        readonly properties: {
            readonly amount: {
                readonly type: "number";
                readonly description: "Amount to payout from available balance";
                readonly format: "double";
                readonly minimum: -1.7976931348623157e+308;
                readonly maximum: 1.7976931348623157e+308;
            };
            readonly currency: {
                readonly type: "string";
                readonly description: "Account with provided currency will be used for the payouts";
            };
            readonly bankAccountId: {
                readonly type: "integer";
                readonly description: "Bank Account Id, Payout Destination";
                readonly format: "int64";
                readonly minimum: -9223372036854776000;
                readonly maximum: 9223372036854776000;
            };
        };
        readonly additionalProperties: false;
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "integer";
                    readonly description: "Payout ID";
                    readonly format: "int64";
                    readonly minimum: -9223372036854776000;
                    readonly maximum: 9223372036854776000;
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly title: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly status: {
                    readonly type: "integer";
                    readonly description: "";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly detail: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly instance: {
                    readonly type: "string";
                    readonly description: "";
                };
            };
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostProcessorbank: {
    readonly body: {
        readonly required: readonly ["bank", "brand", "companyId", "countryCode", "currency", "isDefault", "merchantId", "source", "terminalId", "zone"];
        readonly type: "object";
        readonly properties: {
            readonly companyId: {
                readonly type: "integer";
                readonly description: "Company Id for Processor Bank";
                readonly format: "int64";
                readonly default: 5;
                readonly minimum: -9223372036854776000;
                readonly maximum: 9223372036854776000;
            };
            readonly source: {
                readonly enum: readonly ["Card", "Wallet"];
                readonly type: "string";
            };
            readonly bank: {
                readonly enum: readonly ["SandBox", "Liberty", "Kapital", "BOG", "TBC", "Unknown"];
                readonly type: "string";
            };
            readonly brand: {
                readonly enum: readonly ["Visa", "MasterCard", "AmexCredit", "AmexDebit", "Humo", "Uzcard", "Mir", "ApplePay"];
                readonly type: "string";
            };
            readonly zone: {
                readonly enum: readonly ["Local", "International"];
                readonly type: "string";
            };
            readonly countryCode: {
                readonly type: "string";
                readonly description: "Processor Bank Country";
                readonly default: "GE";
            };
            readonly merchantId: {
                readonly type: "string";
                readonly description: "Merchant Id from Acquirer";
                readonly default: "01158***0351N";
            };
            readonly terminalId: {
                readonly type: "string";
                readonly description: "Terminal Id from Acquirer";
                readonly default: "106***E0";
            };
            readonly currency: {
                readonly type: "string";
                readonly description: "Currency for Company";
                readonly default: "GEL";
            };
            readonly isDefault: {
                readonly type: "boolean";
                readonly description: "Is the bank default acquirer?";
                readonly default: false;
            };
            readonly extra: {
                readonly type: "string";
                readonly description: "Extra Data";
                readonly default: any;
            };
            readonly refundDays: {
                readonly type: "integer";
                readonly description: "Refund Days";
                readonly format: "int32";
                readonly default: 14;
                readonly minimum: -2147483648;
                readonly maximum: 2147483647;
            };
            readonly otpEnabled: {
                readonly type: "boolean";
                readonly description: "Is OTP enabled?";
                readonly default: true;
            };
            readonly transactionLimitAmount: {
                readonly type: "number";
                readonly description: "Limited amount per transaction";
                readonly format: "double";
                readonly default: any;
                readonly minimum: -1.7976931348623157e+308;
                readonly maximum: 1.7976931348623157e+308;
            };
        };
        readonly additionalProperties: false;
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly processorBankId: {
                    readonly type: "integer";
                    readonly description: "";
                    readonly format: "int64";
                    readonly minimum: -9223372036854776000;
                    readonly maximum: 9223372036854776000;
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly title: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly status: {
                    readonly type: "integer";
                    readonly description: "";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly detail: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly instance: {
                    readonly type: "string";
                    readonly description: "";
                };
            };
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostStatementUploadFile: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly file: {
                readonly type: "string";
                readonly format: "binary";
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly source: {
                    readonly enum: readonly ["BankOfGeorgia", "Liberty", "KapitalBankVisaMastercard", "KapitalBankUzCard", "KapitalBankHumo"];
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["source"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly rowsAffected: {
                    readonly type: "integer";
                    readonly description: "";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly title: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly status: {
                    readonly type: "integer";
                    readonly description: "";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly detail: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly instance: {
                    readonly type: "string";
                    readonly description: "";
                };
            };
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PutBankaccount: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly id: {
                readonly type: "integer";
                readonly description: "";
                readonly format: "int64";
                readonly minimum: -9223372036854776000;
                readonly maximum: 9223372036854776000;
            };
            readonly bankName: {
                readonly type: "string";
                readonly description: "";
            };
            readonly ibanName: {
                readonly type: "string";
                readonly description: "";
            };
            readonly currency: {
                readonly type: "string";
                readonly description: "";
            };
            readonly companyId: {
                readonly type: "integer";
                readonly description: "";
                readonly format: "int64";
                readonly minimum: -9223372036854776000;
                readonly maximum: 9223372036854776000;
            };
            readonly ibanFrom: {
                readonly type: "string";
                readonly description: "";
            };
            readonly beneficiaryName: {
                readonly type: "string";
                readonly description: "";
            };
            readonly beneficiaryTaxId: {
                readonly type: "string";
                readonly description: "";
            };
            readonly iban: {
                readonly type: "string";
                readonly description: "";
            };
            readonly accountNumber: {
                readonly type: "string";
                readonly description: "";
            };
            readonly mfo: {
                readonly type: "string";
                readonly description: "";
            };
            readonly default: {
                readonly type: "boolean";
                readonly description: "";
                readonly default: false;
            };
        };
        readonly additionalProperties: false;
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "integer";
                    readonly description: "";
                    readonly format: "int64";
                    readonly minimum: -9223372036854776000;
                    readonly maximum: 9223372036854776000;
                };
                readonly companyId: {
                    readonly type: "integer";
                    readonly description: "";
                    readonly format: "int64";
                    readonly minimum: -9223372036854776000;
                    readonly maximum: 9223372036854776000;
                };
                readonly ibanName: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly bankName: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly currency: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly default: {
                    readonly type: "boolean";
                    readonly description: "";
                };
                readonly ibanFrom: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly beneficiaryName: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly beneficiaryTaxId: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly iban: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly accountNumber: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly mfo: {
                    readonly type: "string";
                    readonly description: "";
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly title: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly status: {
                    readonly type: "integer";
                    readonly description: "";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly detail: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly instance: {
                    readonly type: "string";
                    readonly description: "";
                };
            };
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly title: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly status: {
                    readonly type: "integer";
                    readonly description: "";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly detail: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly instance: {
                    readonly type: "string";
                    readonly description: "";
                };
            };
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PutPayment: {
    readonly body: {
        readonly required: readonly ["amount", "currency", "hooks", "source"];
        readonly type: "object";
        readonly properties: {
            readonly source: {
                readonly enum: readonly ["Card", "Wallet"];
                readonly type: "string";
            };
            readonly amount: {
                readonly type: "number";
                readonly description: "Payment amount, eg: 1.00";
                readonly format: "double";
                readonly default: "1";
                readonly minimum: -1.7976931348623157e+308;
                readonly maximum: 1.7976931348623157e+308;
            };
            readonly currency: {
                readonly type: "string";
                readonly description: "Payment currency, eg: USD";
                readonly default: "USD";
            };
            readonly language: {
                readonly type: "string";
                readonly description: "Payment flow language, eg. EN";
                readonly default: "EN";
            };
            readonly idempotencyKey: {
                readonly type: "string";
                readonly description: "A unique identifier that ensures a payment request is only processed once.";
            };
            readonly cardPayment: {
                readonly type: "object";
                readonly properties: {
                    readonly preauthorize: {
                        readonly type: "boolean";
                        readonly description: "False - Instant capture; True - Block with pre-authorisation";
                    };
                    readonly tokenizeCard: {
                        readonly type: "boolean";
                        readonly description: "False - Will not tokenize card; True - Card will be tokenized for future payments";
                    };
                    readonly applePay: {
                        readonly type: "boolean";
                        readonly description: "True - Allow ApplePay payment, False - Restrict ApplePay payment";
                    };
                };
                readonly additionalProperties: false;
            };
            readonly walletPayment: {
                readonly type: "object";
                readonly properties: {
                    readonly tokenizeCard: {
                        readonly type: "boolean";
                        readonly description: "";
                    };
                };
                readonly additionalProperties: false;
            };
            readonly hooks: {
                readonly required: readonly ["errorRedirectGateway", "successRedirectGateway", "webhookGateway"];
                readonly type: "object";
                readonly properties: {
                    readonly webhookGateway: {
                        readonly type: "string";
                        readonly description: "Payze will HTTP POST payment updates to this API URL";
                    };
                    readonly successRedirectGateway: {
                        readonly type: "string";
                        readonly description: "Cardholder will be redirected to this URL after successful payment; For payment gateways only";
                    };
                    readonly errorRedirectGateway: {
                        readonly type: "string";
                        readonly description: "Cardholder will be redirected to this URL after failed payment; For payment gateways only";
                    };
                };
                readonly additionalProperties: false;
            };
            readonly metadata: {
                readonly type: "object";
                readonly properties: {
                    readonly channel: {
                        readonly type: "string";
                        readonly description: "Payment sale channel, eg. WEB, MOBILE, POS, PARTNERS etc.";
                    };
                    readonly order: {
                        readonly type: "object";
                        readonly properties: {
                            readonly orderId: {
                                readonly type: "string";
                                readonly description: "E-commerce order unique identifier";
                            };
                            readonly advanceContractId: {
                                readonly type: "string";
                                readonly description: "E-commerce DownPayment contract id";
                            };
                            readonly orderItems: {
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly productLink: {
                                            readonly type: "string";
                                            readonly description: "Product link";
                                        };
                                        readonly productImage: {
                                            readonly type: "string";
                                            readonly description: "Product image link";
                                        };
                                        readonly productName: {
                                            readonly type: "string";
                                            readonly description: "Name of goods/service";
                                        };
                                        readonly productCode: {
                                            readonly type: "string";
                                            readonly description: "Legal code of goods and services, AKA. IKPU";
                                        };
                                        readonly productBarCode: {
                                            readonly type: "string";
                                            readonly description: "Barcode of goods/service";
                                        };
                                        readonly productLabel: {
                                            readonly type: "string";
                                            readonly description: "Product label, AKA. Marking code";
                                        };
                                        readonly packageCode: {
                                            readonly type: "string";
                                            readonly description: "Product package code";
                                        };
                                        readonly productQuantity: {
                                            readonly type: "number";
                                            readonly description: "Total product quantity";
                                            readonly format: "double";
                                            readonly minimum: -1.7976931348623157e+308;
                                            readonly maximum: 1.7976931348623157e+308;
                                        };
                                        readonly price: {
                                            readonly type: "number";
                                            readonly description: "Price of single good/service";
                                            readonly format: "double";
                                            readonly minimum: -1.7976931348623157e+308;
                                            readonly maximum: 1.7976931348623157e+308;
                                        };
                                        readonly sumPrice: {
                                            readonly type: "number";
                                            readonly description: "The total amount of the position, taking into account the quantity and excluding discounts";
                                            readonly format: "double";
                                            readonly minimum: -1.7976931348623157e+308;
                                            readonly maximum: 1.7976931348623157e+308;
                                        };
                                        readonly vat: {
                                            readonly type: "number";
                                            readonly description: "Vat amount, eg. 1";
                                            readonly format: "double";
                                            readonly minimum: -1.7976931348623157e+308;
                                            readonly maximum: 1.7976931348623157e+308;
                                        };
                                        readonly vatPercent: {
                                            readonly type: "integer";
                                            readonly description: "Vat percent, eg. 20";
                                            readonly format: "int32";
                                            readonly minimum: -2147483648;
                                            readonly maximum: 2147483647;
                                        };
                                        readonly discount: {
                                            readonly type: "number";
                                            readonly description: "Discount for the good/service, amount";
                                            readonly format: "double";
                                            readonly minimum: -1.7976931348623157e+308;
                                            readonly maximum: 1.7976931348623157e+308;
                                        };
                                        readonly additionalDiscount: {
                                            readonly type: "number";
                                            readonly description: "Additional discount, for Insurances";
                                            readonly format: "double";
                                            readonly minimum: -1.7976931348623157e+308;
                                            readonly maximum: 1.7976931348623157e+308;
                                        };
                                        readonly voucher: {
                                            readonly type: "integer";
                                            readonly description: "Voucher amount";
                                            readonly format: "int64";
                                            readonly minimum: -9223372036854776000;
                                            readonly maximum: 9223372036854776000;
                                        };
                                        readonly uzRegulatoryOrderItem: {
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly commissionInfoTin: {
                                                    readonly type: "string";
                                                    readonly description: "TIN (if the principal is a legal entity)";
                                                };
                                                readonly commissionInfoPinfl: {
                                                    readonly type: "string";
                                                    readonly description: "PINFL (if the principal is an individual)";
                                                };
                                            };
                                            readonly additionalProperties: false;
                                        };
                                    };
                                    readonly additionalProperties: false;
                                };
                                readonly description: "E-commerce order items";
                            };
                            readonly uzRegulatoryOrderDetails: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly latitude: {
                                        readonly type: "number";
                                        readonly description: "Order capture location Latitude";
                                        readonly format: "double";
                                        readonly minimum: -1.7976931348623157e+308;
                                        readonly maximum: 1.7976931348623157e+308;
                                    };
                                    readonly longitude: {
                                        readonly type: "number";
                                        readonly description: "Order capture location Longitude";
                                        readonly format: "double";
                                        readonly minimum: -1.7976931348623157e+308;
                                        readonly maximum: 1.7976931348623157e+308;
                                    };
                                    readonly taxiVehicleNumber: {
                                        readonly type: "string";
                                        readonly description: "Tax order, Vehicle Number";
                                    };
                                    readonly taxiTin: {
                                        readonly type: "string";
                                        readonly description: "Tax order, TIN";
                                    };
                                    readonly taxiPinfl: {
                                        readonly type: "string";
                                        readonly description: "Tax order, PINFL";
                                    };
                                };
                                readonly additionalProperties: false;
                            };
                            readonly billingAddress: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly firstName: {
                                        readonly type: "string";
                                        readonly description: "";
                                    };
                                    readonly lastName: {
                                        readonly type: "string";
                                        readonly description: "";
                                    };
                                    readonly city: {
                                        readonly type: "string";
                                        readonly description: "";
                                    };
                                    readonly country: {
                                        readonly type: "string";
                                        readonly description: "";
                                    };
                                    readonly line1: {
                                        readonly type: "string";
                                        readonly description: "";
                                    };
                                    readonly line2: {
                                        readonly type: "string";
                                        readonly description: "";
                                    };
                                    readonly postalCode: {
                                        readonly type: "string";
                                        readonly description: "";
                                    };
                                    readonly state: {
                                        readonly type: "string";
                                        readonly description: "";
                                    };
                                    readonly phoneNumber: {
                                        readonly type: "string";
                                        readonly description: "";
                                    };
                                    readonly personalId: {
                                        readonly type: "string";
                                        readonly description: "";
                                    };
                                    readonly taxId: {
                                        readonly type: "string";
                                        readonly description: "";
                                    };
                                };
                                readonly additionalProperties: false;
                            };
                            readonly shippingAddress: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly firstName: {
                                        readonly type: "string";
                                        readonly description: "";
                                    };
                                    readonly lastName: {
                                        readonly type: "string";
                                        readonly description: "";
                                    };
                                    readonly city: {
                                        readonly type: "string";
                                        readonly description: "";
                                    };
                                    readonly country: {
                                        readonly type: "string";
                                        readonly description: "";
                                    };
                                    readonly line1: {
                                        readonly type: "string";
                                        readonly description: "";
                                    };
                                    readonly line2: {
                                        readonly type: "string";
                                        readonly description: "";
                                    };
                                    readonly postalCode: {
                                        readonly type: "string";
                                        readonly description: "";
                                    };
                                    readonly state: {
                                        readonly type: "string";
                                        readonly description: "";
                                    };
                                    readonly phoneNumber: {
                                        readonly type: "string";
                                        readonly description: "";
                                    };
                                    readonly personalId: {
                                        readonly type: "string";
                                        readonly description: "";
                                    };
                                    readonly taxId: {
                                        readonly type: "string";
                                        readonly description: "";
                                    };
                                };
                                readonly additionalProperties: false;
                            };
                        };
                        readonly additionalProperties: false;
                    };
                    readonly extraAttributes: {
                        readonly type: "array";
                        readonly items: {
                            readonly type: "object";
                            readonly properties: {
                                readonly key: {
                                    readonly type: "string";
                                    readonly description: "";
                                };
                                readonly value: {
                                    readonly type: "string";
                                    readonly description: "";
                                };
                                readonly description: {
                                    readonly type: "string";
                                    readonly description: "";
                                };
                            };
                            readonly additionalProperties: false;
                        };
                        readonly description: "Extra attribute dictionary to add custom parameters or metadata to the payment";
                    };
                };
                readonly additionalProperties: false;
            };
            readonly payoutSplit: {
                readonly type: "array";
                readonly items: {
                    readonly required: readonly ["amount", "delayPayoutDays", "description", "payoutAccount"];
                    readonly type: "object";
                    readonly properties: {
                        readonly amount: {
                            readonly type: "number";
                            readonly description: "Split amount";
                            readonly format: "double";
                            readonly minimum: -1.7976931348623157e+308;
                            readonly maximum: 1.7976931348623157e+308;
                        };
                        readonly payoutAccount: {
                            readonly required: readonly ["iban"];
                            readonly type: "object";
                            readonly properties: {
                                readonly ownerName: {
                                    readonly type: "string";
                                    readonly description: "Account owner full name";
                                };
                                readonly ownerPersonalId: {
                                    readonly type: "string";
                                    readonly description: "Account owner tax id, if not specified, owner owner tax id will be used";
                                };
                                readonly ownerTaxId: {
                                    readonly type: "string";
                                    readonly description: "Account owner tax id, if not specified, owner personal id will be used";
                                };
                                readonly iban: {
                                    readonly type: "string";
                                    readonly description: "Account IBAN";
                                };
                            };
                            readonly additionalProperties: false;
                        };
                        readonly delayPayoutDays: {
                            readonly type: "number";
                            readonly description: "Provided value delays split payout by days";
                            readonly format: "double";
                            readonly minimum: -1.7976931348623157e+308;
                            readonly maximum: 1.7976931348623157e+308;
                        };
                        readonly description: {
                            readonly type: "string";
                            readonly description: "Split description";
                        };
                    };
                    readonly additionalProperties: false;
                };
                readonly description: "Fill PayoutSplit to split payment amount between multiple bank accounts";
            };
            readonly shareLink: {
                readonly type: "object";
                readonly properties: {
                    readonly email: {
                        readonly type: "string";
                        readonly description: "Payment link will be send to the email specified";
                    };
                    readonly smsPhone: {
                        readonly type: "string";
                        readonly description: "Payment link will be send to the phone specified, extra charges apply";
                    };
                };
                readonly additionalProperties: false;
            };
            readonly token: {
                readonly type: "string";
                readonly description: "Card token for previously tokenized payments";
            };
        };
        readonly additionalProperties: false;
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly payment: {
                    readonly type: "object";
                    readonly properties: {
                        readonly id: {
                            readonly type: "integer";
                            readonly description: "";
                            readonly format: "int64";
                            readonly minimum: -9223372036854776000;
                            readonly maximum: 9223372036854776000;
                        };
                        readonly requesterId: {
                            readonly type: "integer";
                            readonly description: "";
                            readonly format: "int64";
                            readonly minimum: -9223372036854776000;
                            readonly maximum: 9223372036854776000;
                        };
                        readonly transactionId: {
                            readonly type: "string";
                            readonly description: "";
                        };
                        readonly type: {
                            readonly enum: readonly ["JustPay", "AddCard", "PayWithCard", "WithdrawalCard"];
                            readonly type: "string";
                            readonly description: "`JustPay` `AddCard` `PayWithCard` `WithdrawalCard`";
                        };
                        readonly source: {
                            readonly enum: readonly ["Card", "Wallet"];
                            readonly type: "string";
                            readonly description: "`Card` `Wallet`";
                        };
                        readonly amount: {
                            readonly type: "number";
                            readonly description: "";
                            readonly format: "double";
                            readonly minimum: -1.7976931348623157e+308;
                            readonly maximum: 1.7976931348623157e+308;
                        };
                        readonly currency: {
                            readonly type: "string";
                            readonly description: "";
                        };
                        readonly status: {
                            readonly enum: readonly ["Draft", "Blocked", "Captured", "Refunded", "PartiallyRefunded", "Rejected"];
                            readonly type: "string";
                            readonly description: "`Draft` `Blocked` `Captured` `Refunded` `PartiallyRefunded` `Rejected`";
                        };
                        readonly cardPayment: {
                            readonly type: "object";
                            readonly properties: {
                                readonly preauthorize: {
                                    readonly type: "boolean";
                                    readonly description: "Block amount - True, Instant capture - False";
                                };
                                readonly googlePay: {
                                    readonly type: "boolean";
                                    readonly description: "True - Allow GPay payment, False - Restrict GPay payment";
                                };
                                readonly applePay: {
                                    readonly type: "boolean";
                                    readonly description: "True - Allow ApplePay payment, False - Restrict ApplePay payment";
                                };
                                readonly cardMask: {
                                    readonly type: "string";
                                    readonly description: "";
                                };
                                readonly cardExpiration: {
                                    readonly type: "string";
                                    readonly description: "";
                                };
                                readonly merchantId: {
                                    readonly type: "string";
                                    readonly description: "";
                                };
                                readonly terminalId: {
                                    readonly type: "string";
                                    readonly description: "";
                                };
                                readonly token: {
                                    readonly type: "string";
                                    readonly description: "";
                                };
                                readonly rrn: {
                                    readonly type: "string";
                                    readonly description: "";
                                };
                                readonly processingVendorId: {
                                    readonly type: "string";
                                    readonly description: "";
                                };
                                readonly processingVendor: {
                                    readonly type: "string";
                                    readonly description: "";
                                };
                                readonly cardOwnerEntityType: {
                                    readonly type: "string";
                                    readonly description: "";
                                };
                                readonly secureCardId: {
                                    readonly type: "string";
                                    readonly description: "";
                                };
                            };
                            readonly additionalProperties: false;
                        };
                        readonly walletPayment: {
                            readonly type: "object";
                            readonly properties: {
                                readonly flow: {
                                    readonly enum: readonly ["Deposit", "Withdraw", "AddCard"];
                                    readonly type: "string";
                                    readonly description: "`Deposit` `Withdraw` `AddCard`";
                                };
                                readonly token: {
                                    readonly type: "string";
                                    readonly description: "";
                                };
                                readonly tokenizeCard: {
                                    readonly type: "boolean";
                                    readonly description: "";
                                };
                            };
                            readonly additionalProperties: false;
                        };
                        readonly hooks: {
                            readonly required: readonly ["errorRedirectGateway", "successRedirectGateway", "webhookGateway"];
                            readonly type: "object";
                            readonly properties: {
                                readonly webhookGateway: {
                                    readonly type: "string";
                                    readonly description: "Payze will HTTP POST payment updates to this API URL";
                                };
                                readonly successRedirectGateway: {
                                    readonly type: "string";
                                    readonly description: "Cardholder will be redirected to this URL after successful payment; For payment gateways only";
                                };
                                readonly errorRedirectGateway: {
                                    readonly type: "string";
                                    readonly description: "Cardholder will be redirected to this URL after failed payment; For payment gateways only";
                                };
                            };
                            readonly additionalProperties: false;
                        };
                        readonly language: {
                            readonly type: "string";
                            readonly description: "";
                        };
                        readonly idempotencyKey: {
                            readonly type: "string";
                            readonly description: "";
                        };
                        readonly metadata: {
                            readonly type: "object";
                            readonly properties: {
                                readonly channel: {
                                    readonly type: "string";
                                    readonly description: "Payment sale channel, eg. WEB, MOBILE, POS, PARTNERS etc.";
                                };
                                readonly order: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly orderId: {
                                            readonly type: "string";
                                            readonly description: "E-commerce order unique identifier";
                                        };
                                        readonly advanceContractId: {
                                            readonly type: "string";
                                            readonly description: "E-commerce DownPayment contract id";
                                        };
                                        readonly orderItems: {
                                            readonly type: "array";
                                            readonly items: {
                                                readonly type: "object";
                                                readonly properties: {
                                                    readonly productLink: {
                                                        readonly type: "string";
                                                        readonly description: "Product link";
                                                    };
                                                    readonly productImage: {
                                                        readonly type: "string";
                                                        readonly description: "Product image link";
                                                    };
                                                    readonly productName: {
                                                        readonly type: "string";
                                                        readonly description: "Name of goods/service";
                                                    };
                                                    readonly productCode: {
                                                        readonly type: "string";
                                                        readonly description: "Legal code of goods and services, AKA. IKPU";
                                                    };
                                                    readonly productBarCode: {
                                                        readonly type: "string";
                                                        readonly description: "Barcode of goods/service";
                                                    };
                                                    readonly productLabel: {
                                                        readonly type: "string";
                                                        readonly description: "Product label, AKA. Marking code";
                                                    };
                                                    readonly packageCode: {
                                                        readonly type: "string";
                                                        readonly description: "Product package code";
                                                    };
                                                    readonly productQuantity: {
                                                        readonly type: "number";
                                                        readonly description: "Total product quantity";
                                                        readonly format: "double";
                                                        readonly minimum: -1.7976931348623157e+308;
                                                        readonly maximum: 1.7976931348623157e+308;
                                                    };
                                                    readonly price: {
                                                        readonly type: "number";
                                                        readonly description: "Price of single good/service";
                                                        readonly format: "double";
                                                        readonly minimum: -1.7976931348623157e+308;
                                                        readonly maximum: 1.7976931348623157e+308;
                                                    };
                                                    readonly sumPrice: {
                                                        readonly type: "number";
                                                        readonly description: "The total amount of the position, taking into account the quantity and excluding discounts";
                                                        readonly format: "double";
                                                        readonly minimum: -1.7976931348623157e+308;
                                                        readonly maximum: 1.7976931348623157e+308;
                                                    };
                                                    readonly vat: {
                                                        readonly type: "number";
                                                        readonly description: "Vat amount, eg. 1";
                                                        readonly format: "double";
                                                        readonly minimum: -1.7976931348623157e+308;
                                                        readonly maximum: 1.7976931348623157e+308;
                                                    };
                                                    readonly vatPercent: {
                                                        readonly type: "integer";
                                                        readonly description: "Vat percent, eg. 20";
                                                        readonly format: "int32";
                                                        readonly minimum: -2147483648;
                                                        readonly maximum: 2147483647;
                                                    };
                                                    readonly discount: {
                                                        readonly type: "number";
                                                        readonly description: "Discount for the good/service, amount";
                                                        readonly format: "double";
                                                        readonly minimum: -1.7976931348623157e+308;
                                                        readonly maximum: 1.7976931348623157e+308;
                                                    };
                                                    readonly additionalDiscount: {
                                                        readonly type: "number";
                                                        readonly description: "Additional discount, for Insurances";
                                                        readonly format: "double";
                                                        readonly minimum: -1.7976931348623157e+308;
                                                        readonly maximum: 1.7976931348623157e+308;
                                                    };
                                                    readonly voucher: {
                                                        readonly type: "integer";
                                                        readonly description: "Voucher amount";
                                                        readonly format: "int64";
                                                        readonly minimum: -9223372036854776000;
                                                        readonly maximum: 9223372036854776000;
                                                    };
                                                    readonly uzRegulatoryOrderItem: {
                                                        readonly type: "object";
                                                        readonly properties: {
                                                            readonly commissionInfoTin: {
                                                                readonly type: "string";
                                                                readonly description: "TIN (if the principal is a legal entity)";
                                                            };
                                                            readonly commissionInfoPinfl: {
                                                                readonly type: "string";
                                                                readonly description: "PINFL (if the principal is an individual)";
                                                            };
                                                        };
                                                        readonly additionalProperties: false;
                                                    };
                                                };
                                                readonly additionalProperties: false;
                                            };
                                            readonly description: "E-commerce order items";
                                        };
                                        readonly uzRegulatoryOrderDetails: {
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly latitude: {
                                                    readonly type: "number";
                                                    readonly description: "Order capture location Latitude";
                                                    readonly format: "double";
                                                    readonly minimum: -1.7976931348623157e+308;
                                                    readonly maximum: 1.7976931348623157e+308;
                                                };
                                                readonly longitude: {
                                                    readonly type: "number";
                                                    readonly description: "Order capture location Longitude";
                                                    readonly format: "double";
                                                    readonly minimum: -1.7976931348623157e+308;
                                                    readonly maximum: 1.7976931348623157e+308;
                                                };
                                                readonly taxiVehicleNumber: {
                                                    readonly type: "string";
                                                    readonly description: "Tax order, Vehicle Number";
                                                };
                                                readonly taxiTin: {
                                                    readonly type: "string";
                                                    readonly description: "Tax order, TIN";
                                                };
                                                readonly taxiPinfl: {
                                                    readonly type: "string";
                                                    readonly description: "Tax order, PINFL";
                                                };
                                            };
                                            readonly additionalProperties: false;
                                        };
                                        readonly billingAddress: {
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly firstName: {
                                                    readonly type: "string";
                                                    readonly description: "";
                                                };
                                                readonly lastName: {
                                                    readonly type: "string";
                                                    readonly description: "";
                                                };
                                                readonly city: {
                                                    readonly type: "string";
                                                    readonly description: "";
                                                };
                                                readonly country: {
                                                    readonly type: "string";
                                                    readonly description: "";
                                                };
                                                readonly line1: {
                                                    readonly type: "string";
                                                    readonly description: "";
                                                };
                                                readonly line2: {
                                                    readonly type: "string";
                                                    readonly description: "";
                                                };
                                                readonly postalCode: {
                                                    readonly type: "string";
                                                    readonly description: "";
                                                };
                                                readonly state: {
                                                    readonly type: "string";
                                                    readonly description: "";
                                                };
                                                readonly phoneNumber: {
                                                    readonly type: "string";
                                                    readonly description: "";
                                                };
                                                readonly personalId: {
                                                    readonly type: "string";
                                                    readonly description: "";
                                                };
                                                readonly taxId: {
                                                    readonly type: "string";
                                                    readonly description: "";
                                                };
                                            };
                                            readonly additionalProperties: false;
                                        };
                                        readonly shippingAddress: {
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly firstName: {
                                                    readonly type: "string";
                                                    readonly description: "";
                                                };
                                                readonly lastName: {
                                                    readonly type: "string";
                                                    readonly description: "";
                                                };
                                                readonly city: {
                                                    readonly type: "string";
                                                    readonly description: "";
                                                };
                                                readonly country: {
                                                    readonly type: "string";
                                                    readonly description: "";
                                                };
                                                readonly line1: {
                                                    readonly type: "string";
                                                    readonly description: "";
                                                };
                                                readonly line2: {
                                                    readonly type: "string";
                                                    readonly description: "";
                                                };
                                                readonly postalCode: {
                                                    readonly type: "string";
                                                    readonly description: "";
                                                };
                                                readonly state: {
                                                    readonly type: "string";
                                                    readonly description: "";
                                                };
                                                readonly phoneNumber: {
                                                    readonly type: "string";
                                                    readonly description: "";
                                                };
                                                readonly personalId: {
                                                    readonly type: "string";
                                                    readonly description: "";
                                                };
                                                readonly taxId: {
                                                    readonly type: "string";
                                                    readonly description: "";
                                                };
                                            };
                                            readonly additionalProperties: false;
                                        };
                                    };
                                    readonly additionalProperties: false;
                                };
                                readonly extraAttributes: {
                                    readonly type: "array";
                                    readonly items: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly key: {
                                                readonly type: "string";
                                                readonly description: "";
                                            };
                                            readonly value: {
                                                readonly type: "string";
                                                readonly description: "";
                                            };
                                            readonly description: {
                                                readonly type: "string";
                                                readonly description: "";
                                            };
                                        };
                                        readonly additionalProperties: false;
                                    };
                                    readonly description: "Extra attribute dictionary to add custom parameters or metadata to the payment";
                                };
                            };
                            readonly additionalProperties: false;
                        };
                        readonly shareLink: {
                            readonly type: "object";
                            readonly properties: {
                                readonly email: {
                                    readonly type: "string";
                                    readonly description: "Payment link will be send to the email specified";
                                };
                                readonly smsPhone: {
                                    readonly type: "string";
                                    readonly description: "Payment link will be send to the phone specified, extra charges apply";
                                };
                            };
                            readonly additionalProperties: false;
                        };
                        readonly network: {
                            readonly type: "string";
                            readonly description: "";
                        };
                        readonly blockedAmount: {
                            readonly type: "number";
                            readonly description: "";
                            readonly format: "double";
                            readonly minimum: -1.7976931348623157e+308;
                            readonly maximum: 1.7976931348623157e+308;
                        };
                        readonly capturedAmount: {
                            readonly type: "number";
                            readonly description: "";
                            readonly format: "double";
                            readonly minimum: -1.7976931348623157e+308;
                            readonly maximum: 1.7976931348623157e+308;
                        };
                        readonly refundedAmount: {
                            readonly type: "number";
                            readonly description: "";
                            readonly format: "double";
                            readonly minimum: -1.7976931348623157e+308;
                            readonly maximum: 1.7976931348623157e+308;
                        };
                        readonly reversedAmount: {
                            readonly type: "number";
                            readonly description: "";
                            readonly format: "double";
                            readonly minimum: -1.7976931348623157e+308;
                            readonly maximum: 1.7976931348623157e+308;
                        };
                        readonly settledBalanceAmount: {
                            readonly type: "number";
                            readonly description: "";
                            readonly format: "double";
                            readonly minimum: -1.7976931348623157e+308;
                            readonly maximum: 1.7976931348623157e+308;
                        };
                        readonly crossCurrencySettlement: {
                            readonly type: "boolean";
                            readonly description: "";
                        };
                        readonly settled: {
                            readonly type: "boolean";
                            readonly description: "";
                        };
                        readonly rejectReason: {
                            readonly type: "string";
                            readonly description: "";
                        };
                        readonly fee: {
                            readonly type: "number";
                            readonly description: "";
                            readonly format: "double";
                            readonly minimum: -1.7976931348623157e+308;
                            readonly maximum: 1.7976931348623157e+308;
                        };
                        readonly channel: {
                            readonly type: "string";
                            readonly description: "";
                        };
                        readonly payer: {
                            readonly type: "object";
                            readonly properties: {
                                readonly email: {
                                    readonly type: "string";
                                    readonly description: "";
                                };
                                readonly phone: {
                                    readonly type: "string";
                                    readonly description: "";
                                };
                                readonly fullName: {
                                    readonly type: "string";
                                    readonly description: "";
                                };
                                readonly personalId: {
                                    readonly type: "string";
                                    readonly description: "";
                                };
                                readonly taxId: {
                                    readonly type: "string";
                                    readonly description: "";
                                };
                                readonly country: {
                                    readonly type: "string";
                                    readonly description: "";
                                };
                                readonly ip: {
                                    readonly type: "string";
                                    readonly description: "";
                                };
                            };
                            readonly additionalProperties: false;
                        };
                        readonly receipt: {
                            readonly type: "string";
                            readonly description: "";
                        };
                        readonly sandBox: {
                            readonly type: "boolean";
                            readonly description: "";
                        };
                        readonly capturedDate: {
                            readonly type: "string";
                            readonly description: "";
                            readonly format: "date-time";
                        };
                        readonly blockedDate: {
                            readonly type: "string";
                            readonly description: "";
                            readonly format: "date-time";
                        };
                        readonly settledDate: {
                            readonly type: "string";
                            readonly description: "";
                            readonly format: "date-time";
                        };
                        readonly refundedDate: {
                            readonly type: "string";
                            readonly description: "";
                            readonly format: "date-time";
                        };
                        readonly reverseDate: {
                            readonly type: "string";
                            readonly description: "";
                            readonly format: "date-time";
                        };
                        readonly rejectedDate: {
                            readonly type: "string";
                            readonly description: "";
                            readonly format: "date-time";
                        };
                        readonly createdDate: {
                            readonly type: "string";
                            readonly description: "";
                            readonly format: "date-time";
                        };
                        readonly paymentUrl: {
                            readonly type: "string";
                            readonly description: "";
                        };
                        readonly version: {
                            readonly type: "integer";
                            readonly description: "";
                            readonly format: "int32";
                            readonly readOnly: true;
                            readonly minimum: -2147483648;
                            readonly maximum: 2147483647;
                        };
                        readonly lastModifiedDate: {
                            readonly type: "string";
                            readonly description: "";
                            readonly format: "date-time";
                        };
                    };
                    readonly additionalProperties: false;
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly title: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly status: {
                    readonly type: "integer";
                    readonly description: "";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly detail: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly instance: {
                    readonly type: "string";
                    readonly description: "";
                };
            };
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly title: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly status: {
                    readonly type: "integer";
                    readonly description: "";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly detail: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly instance: {
                    readonly type: "string";
                    readonly description: "";
                };
            };
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PutPaymentCapture: {
    readonly body: {
        readonly required: readonly ["amount", "transactionId"];
        readonly type: "object";
        readonly properties: {
            readonly transactionId: {
                readonly type: "string";
                readonly description: "Payment Transaction Unique Identifier";
            };
            readonly amount: {
                readonly type: "number";
                readonly description: "Full or Partial Amount to capture";
                readonly format: "double";
                readonly minimum: -1.7976931348623157e+308;
                readonly maximum: 1.7976931348623157e+308;
            };
        };
        readonly additionalProperties: false;
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly capture: {
                    readonly type: "object";
                    readonly properties: {
                        readonly id: {
                            readonly type: "integer";
                            readonly description: "";
                            readonly format: "int64";
                            readonly minimum: -9223372036854776000;
                            readonly maximum: 9223372036854776000;
                        };
                        readonly status: {
                            readonly enum: readonly ["Draft", "Rejected", "Processed"];
                            readonly type: "string";
                            readonly description: "`Draft` `Rejected` `Processed`";
                        };
                        readonly requesterId: {
                            readonly type: "integer";
                            readonly description: "";
                            readonly format: "int64";
                            readonly minimum: -9223372036854776000;
                            readonly maximum: 9223372036854776000;
                        };
                        readonly paymentId: {
                            readonly type: "integer";
                            readonly description: "";
                            readonly format: "int64";
                            readonly minimum: -9223372036854776000;
                            readonly maximum: 9223372036854776000;
                        };
                        readonly transactionId: {
                            readonly type: "string";
                            readonly description: "";
                        };
                        readonly rrn: {
                            readonly type: "string";
                            readonly description: "";
                        };
                        readonly amount: {
                            readonly type: "number";
                            readonly description: "";
                            readonly format: "double";
                            readonly minimum: -1.7976931348623157e+308;
                            readonly maximum: 1.7976931348623157e+308;
                        };
                        readonly currency: {
                            readonly type: "string";
                            readonly description: "";
                        };
                        readonly rejectionReason: {
                            readonly type: "string";
                            readonly description: "";
                        };
                        readonly rejectedAt: {
                            readonly type: "string";
                            readonly description: "";
                            readonly format: "date-time";
                        };
                        readonly processedAt: {
                            readonly type: "string";
                            readonly description: "";
                            readonly format: "date-time";
                        };
                        readonly comment: {
                            readonly type: "string";
                            readonly description: "";
                        };
                        readonly requesterIp: {
                            readonly type: "string";
                            readonly description: "";
                        };
                    };
                    readonly additionalProperties: false;
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly title: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly status: {
                    readonly type: "integer";
                    readonly description: "";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly detail: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly instance: {
                    readonly type: "string";
                    readonly description: "";
                };
            };
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly title: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly status: {
                    readonly type: "integer";
                    readonly description: "";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly detail: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly instance: {
                    readonly type: "string";
                    readonly description: "";
                };
            };
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PutPaymentReceipt: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly transactionId: {
                readonly type: "string";
                readonly description: "";
            };
            readonly receiptUrl: {
                readonly type: "string";
                readonly description: "";
            };
        };
        readonly additionalProperties: false;
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly title: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly status: {
                    readonly type: "integer";
                    readonly description: "";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly detail: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly instance: {
                    readonly type: "string";
                    readonly description: "";
                };
            };
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly title: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly status: {
                    readonly type: "integer";
                    readonly description: "";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly detail: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly instance: {
                    readonly type: "string";
                    readonly description: "";
                };
            };
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PutPaymentRefund: {
    readonly body: {
        readonly required: readonly ["amount", "transactionId"];
        readonly type: "object";
        readonly properties: {
            readonly transactionId: {
                readonly type: "string";
                readonly description: "Payment Transaction Unique Identifier";
            };
            readonly amount: {
                readonly type: "number";
                readonly description: "Full or Partial Amount to refund";
                readonly format: "double";
                readonly minimum: -1.7976931348623157e+308;
                readonly maximum: 1.7976931348623157e+308;
            };
            readonly idempotencyKey: {
                readonly type: "string";
                readonly description: "A unique identifier that ensures a request is only processed once.";
            };
            readonly orderData: {
                readonly type: "object";
                readonly properties: {
                    readonly orderId: {
                        readonly type: "string";
                        readonly description: "E-commerce order unique identifier";
                    };
                    readonly advanceContractId: {
                        readonly type: "string";
                        readonly description: "E-commerce DownPayment contract id";
                    };
                    readonly orderItems: {
                        readonly type: "array";
                        readonly items: {
                            readonly type: "object";
                            readonly properties: {
                                readonly productLink: {
                                    readonly type: "string";
                                    readonly description: "Product link";
                                };
                                readonly productImage: {
                                    readonly type: "string";
                                    readonly description: "Product image link";
                                };
                                readonly productName: {
                                    readonly type: "string";
                                    readonly description: "Name of goods/service";
                                };
                                readonly productCode: {
                                    readonly type: "string";
                                    readonly description: "Legal code of goods and services, AKA. IKPU";
                                };
                                readonly productBarCode: {
                                    readonly type: "string";
                                    readonly description: "Barcode of goods/service";
                                };
                                readonly productLabel: {
                                    readonly type: "string";
                                    readonly description: "Product label, AKA. Marking code";
                                };
                                readonly packageCode: {
                                    readonly type: "string";
                                    readonly description: "Product package code";
                                };
                                readonly productQuantity: {
                                    readonly type: "number";
                                    readonly description: "Total product quantity";
                                    readonly format: "double";
                                    readonly minimum: -1.7976931348623157e+308;
                                    readonly maximum: 1.7976931348623157e+308;
                                };
                                readonly price: {
                                    readonly type: "number";
                                    readonly description: "Price of single good/service";
                                    readonly format: "double";
                                    readonly minimum: -1.7976931348623157e+308;
                                    readonly maximum: 1.7976931348623157e+308;
                                };
                                readonly sumPrice: {
                                    readonly type: "number";
                                    readonly description: "The total amount of the position, taking into account the quantity and excluding discounts";
                                    readonly format: "double";
                                    readonly minimum: -1.7976931348623157e+308;
                                    readonly maximum: 1.7976931348623157e+308;
                                };
                                readonly vat: {
                                    readonly type: "number";
                                    readonly description: "Vat amount, eg. 1";
                                    readonly format: "double";
                                    readonly minimum: -1.7976931348623157e+308;
                                    readonly maximum: 1.7976931348623157e+308;
                                };
                                readonly vatPercent: {
                                    readonly type: "integer";
                                    readonly description: "Vat percent, eg. 20";
                                    readonly format: "int32";
                                    readonly minimum: -2147483648;
                                    readonly maximum: 2147483647;
                                };
                                readonly discount: {
                                    readonly type: "number";
                                    readonly description: "Discount for the good/service, amount";
                                    readonly format: "double";
                                    readonly minimum: -1.7976931348623157e+308;
                                    readonly maximum: 1.7976931348623157e+308;
                                };
                                readonly additionalDiscount: {
                                    readonly type: "number";
                                    readonly description: "Additional discount, for Insurances";
                                    readonly format: "double";
                                    readonly minimum: -1.7976931348623157e+308;
                                    readonly maximum: 1.7976931348623157e+308;
                                };
                                readonly voucher: {
                                    readonly type: "integer";
                                    readonly description: "Voucher amount";
                                    readonly format: "int64";
                                    readonly minimum: -9223372036854776000;
                                    readonly maximum: 9223372036854776000;
                                };
                                readonly uzRegulatoryOrderItem: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly commissionInfoTin: {
                                            readonly type: "string";
                                            readonly description: "TIN (if the principal is a legal entity)";
                                        };
                                        readonly commissionInfoPinfl: {
                                            readonly type: "string";
                                            readonly description: "PINFL (if the principal is an individual)";
                                        };
                                    };
                                    readonly additionalProperties: false;
                                };
                            };
                            readonly additionalProperties: false;
                        };
                        readonly description: "E-commerce order items";
                    };
                    readonly uzRegulatoryOrderDetails: {
                        readonly type: "object";
                        readonly properties: {
                            readonly latitude: {
                                readonly type: "number";
                                readonly description: "Order capture location Latitude";
                                readonly format: "double";
                                readonly minimum: -1.7976931348623157e+308;
                                readonly maximum: 1.7976931348623157e+308;
                            };
                            readonly longitude: {
                                readonly type: "number";
                                readonly description: "Order capture location Longitude";
                                readonly format: "double";
                                readonly minimum: -1.7976931348623157e+308;
                                readonly maximum: 1.7976931348623157e+308;
                            };
                            readonly taxiVehicleNumber: {
                                readonly type: "string";
                                readonly description: "Tax order, Vehicle Number";
                            };
                            readonly taxiTin: {
                                readonly type: "string";
                                readonly description: "Tax order, TIN";
                            };
                            readonly taxiPinfl: {
                                readonly type: "string";
                                readonly description: "Tax order, PINFL";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                    readonly billingAddress: {
                        readonly type: "object";
                        readonly properties: {
                            readonly firstName: {
                                readonly type: "string";
                                readonly description: "";
                            };
                            readonly lastName: {
                                readonly type: "string";
                                readonly description: "";
                            };
                            readonly city: {
                                readonly type: "string";
                                readonly description: "";
                            };
                            readonly country: {
                                readonly type: "string";
                                readonly description: "";
                            };
                            readonly line1: {
                                readonly type: "string";
                                readonly description: "";
                            };
                            readonly line2: {
                                readonly type: "string";
                                readonly description: "";
                            };
                            readonly postalCode: {
                                readonly type: "string";
                                readonly description: "";
                            };
                            readonly state: {
                                readonly type: "string";
                                readonly description: "";
                            };
                            readonly phoneNumber: {
                                readonly type: "string";
                                readonly description: "";
                            };
                            readonly personalId: {
                                readonly type: "string";
                                readonly description: "";
                            };
                            readonly taxId: {
                                readonly type: "string";
                                readonly description: "";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                    readonly shippingAddress: {
                        readonly type: "object";
                        readonly properties: {
                            readonly firstName: {
                                readonly type: "string";
                                readonly description: "";
                            };
                            readonly lastName: {
                                readonly type: "string";
                                readonly description: "";
                            };
                            readonly city: {
                                readonly type: "string";
                                readonly description: "";
                            };
                            readonly country: {
                                readonly type: "string";
                                readonly description: "";
                            };
                            readonly line1: {
                                readonly type: "string";
                                readonly description: "";
                            };
                            readonly line2: {
                                readonly type: "string";
                                readonly description: "";
                            };
                            readonly postalCode: {
                                readonly type: "string";
                                readonly description: "";
                            };
                            readonly state: {
                                readonly type: "string";
                                readonly description: "";
                            };
                            readonly phoneNumber: {
                                readonly type: "string";
                                readonly description: "";
                            };
                            readonly personalId: {
                                readonly type: "string";
                                readonly description: "";
                            };
                            readonly taxId: {
                                readonly type: "string";
                                readonly description: "";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
                readonly additionalProperties: false;
            };
            readonly extraAttributes: {
                readonly type: "array";
                readonly items: {
                    readonly type: "object";
                    readonly properties: {
                        readonly key: {
                            readonly type: "string";
                            readonly description: "";
                        };
                        readonly value: {
                            readonly type: "string";
                            readonly description: "";
                        };
                        readonly description: {
                            readonly type: "string";
                            readonly description: "";
                        };
                    };
                    readonly additionalProperties: false;
                };
                readonly description: "Additional attributes";
            };
        };
        readonly additionalProperties: false;
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "integer";
                    readonly description: "";
                    readonly format: "int64";
                    readonly minimum: -9223372036854776000;
                    readonly maximum: 9223372036854776000;
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly title: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly status: {
                    readonly type: "integer";
                    readonly description: "";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly detail: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly instance: {
                    readonly type: "string";
                    readonly description: "";
                };
            };
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly title: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly status: {
                    readonly type: "integer";
                    readonly description: "";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly detail: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly instance: {
                    readonly type: "string";
                    readonly description: "";
                };
            };
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PutPaymentRefundReceipt: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly transactionId: {
                readonly type: "string";
                readonly description: "";
            };
            readonly refundId: {
                readonly type: "integer";
                readonly description: "";
                readonly format: "int64";
                readonly minimum: -9223372036854776000;
                readonly maximum: 9223372036854776000;
            };
            readonly receiptUrl: {
                readonly type: "string";
                readonly description: "";
            };
        };
        readonly additionalProperties: false;
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly title: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly status: {
                    readonly type: "integer";
                    readonly description: "";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly detail: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly instance: {
                    readonly type: "string";
                    readonly description: "";
                };
            };
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly title: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly status: {
                    readonly type: "integer";
                    readonly description: "";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly detail: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly instance: {
                    readonly type: "string";
                    readonly description: "";
                };
            };
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PutPaymentSplit: {
    readonly body: {
        readonly required: readonly ["splits", "transactionId"];
        readonly type: "object";
        readonly properties: {
            readonly transactionId: {
                readonly type: "string";
                readonly description: "Payment Transaction Unique Identifier";
            };
            readonly idempotencyKey: {
                readonly type: "string";
                readonly description: "A unique identifier that ensures a payment request is only processed once.";
            };
            readonly splits: {
                readonly type: "array";
                readonly items: {
                    readonly required: readonly ["amount", "delayPayoutDays", "description", "payoutAccount"];
                    readonly type: "object";
                    readonly properties: {
                        readonly amount: {
                            readonly type: "number";
                            readonly description: "Split amount";
                            readonly format: "double";
                            readonly minimum: -1.7976931348623157e+308;
                            readonly maximum: 1.7976931348623157e+308;
                        };
                        readonly payoutAccount: {
                            readonly required: readonly ["iban"];
                            readonly type: "object";
                            readonly properties: {
                                readonly ownerName: {
                                    readonly type: "string";
                                    readonly description: "Account owner full name";
                                };
                                readonly ownerPersonalId: {
                                    readonly type: "string";
                                    readonly description: "Account owner tax id, if not specified, owner owner tax id will be used";
                                };
                                readonly ownerTaxId: {
                                    readonly type: "string";
                                    readonly description: "Account owner tax id, if not specified, owner personal id will be used";
                                };
                                readonly iban: {
                                    readonly type: "string";
                                    readonly description: "Account IBAN";
                                };
                            };
                            readonly additionalProperties: false;
                        };
                        readonly delayPayoutDays: {
                            readonly type: "number";
                            readonly description: "Provided value delays split payout by days";
                            readonly format: "double";
                            readonly minimum: -1.7976931348623157e+308;
                            readonly maximum: 1.7976931348623157e+308;
                        };
                        readonly description: {
                            readonly type: "string";
                            readonly description: "Split description";
                        };
                    };
                    readonly additionalProperties: false;
                };
                readonly description: "Array of split payout destinations";
            };
        };
        readonly additionalProperties: false;
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly required: readonly ["splits"];
            readonly type: "object";
            readonly properties: {
                readonly paymentId: {
                    readonly type: "integer";
                    readonly description: "";
                    readonly format: "int64";
                    readonly minimum: -9223372036854776000;
                    readonly maximum: 9223372036854776000;
                };
                readonly splits: {
                    readonly type: "array";
                    readonly items: {
                        readonly required: readonly ["amount", "delayPayoutDays", "description", "payoutAccount", "status"];
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly type: "integer";
                                readonly description: "";
                                readonly format: "int64";
                                readonly minimum: -9223372036854776000;
                                readonly maximum: 9223372036854776000;
                            };
                            readonly status: {
                                readonly enum: readonly ["Draft", "Scheduled", "PayedOut", "Error", "Charged", "Canceled"];
                                readonly type: "string";
                                readonly description: "`Draft` `Scheduled` `PayedOut` `Error` `Charged` `Canceled`";
                            };
                            readonly amount: {
                                readonly type: "number";
                                readonly description: "Split amount";
                                readonly format: "double";
                                readonly minimum: -1.7976931348623157e+308;
                                readonly maximum: 1.7976931348623157e+308;
                            };
                            readonly payoutAccount: {
                                readonly required: readonly ["iban"];
                                readonly type: "object";
                                readonly properties: {
                                    readonly ownerName: {
                                        readonly type: "string";
                                        readonly description: "Account owner full name";
                                    };
                                    readonly ownerPersonalId: {
                                        readonly type: "string";
                                        readonly description: "Account owner tax id, if not specified, owner owner tax id will be used";
                                    };
                                    readonly ownerTaxId: {
                                        readonly type: "string";
                                        readonly description: "Account owner tax id, if not specified, owner personal id will be used";
                                    };
                                    readonly iban: {
                                        readonly type: "string";
                                        readonly description: "Account IBAN";
                                    };
                                };
                                readonly additionalProperties: false;
                            };
                            readonly delayPayoutDays: {
                                readonly type: "number";
                                readonly description: "Provided value delays split payout by days";
                                readonly format: "double";
                                readonly minimum: -1.7976931348623157e+308;
                                readonly maximum: 1.7976931348623157e+308;
                            };
                            readonly description: {
                                readonly type: "string";
                                readonly description: "Split description";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                    readonly description: "Affected/new set of splits";
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly title: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly status: {
                    readonly type: "integer";
                    readonly description: "";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly detail: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly instance: {
                    readonly type: "string";
                    readonly description: "";
                };
            };
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly title: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly status: {
                    readonly type: "integer";
                    readonly description: "";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly detail: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly instance: {
                    readonly type: "string";
                    readonly description: "";
                };
            };
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PutPaymentSplitCancel: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly transactionId: {
                readonly type: "string";
                readonly description: "";
            };
        };
        readonly additionalProperties: false;
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly title: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly status: {
                    readonly type: "integer";
                    readonly description: "";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly detail: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly instance: {
                    readonly type: "string";
                    readonly description: "";
                };
            };
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly title: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly status: {
                    readonly type: "integer";
                    readonly description: "";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly detail: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly instance: {
                    readonly type: "string";
                    readonly description: "";
                };
            };
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PutProcessorbank: {
    readonly body: {
        readonly required: readonly ["bank", "brand", "companyId", "countryCode", "currency", "id", "isDefault", "merchantId", "source", "terminalId", "zone"];
        readonly type: "object";
        readonly properties: {
            readonly id: {
                readonly type: "integer";
                readonly description: "Processor Bank Id to Edit";
                readonly format: "int64";
                readonly default: any;
                readonly minimum: -9223372036854776000;
                readonly maximum: 9223372036854776000;
            };
            readonly companyId: {
                readonly type: "integer";
                readonly description: "Company Id for Processor Bank";
                readonly format: "int64";
                readonly default: 5;
                readonly minimum: -9223372036854776000;
                readonly maximum: 9223372036854776000;
            };
            readonly source: {
                readonly enum: readonly ["Card", "Wallet"];
                readonly type: "string";
            };
            readonly bank: {
                readonly enum: readonly ["SandBox", "Liberty", "Kapital", "BOG", "TBC", "Unknown"];
                readonly type: "string";
            };
            readonly brand: {
                readonly enum: readonly ["Visa", "MasterCard", "AmexCredit", "AmexDebit", "Humo", "Uzcard", "Mir", "ApplePay"];
                readonly type: "string";
            };
            readonly zone: {
                readonly enum: readonly ["Local", "International"];
                readonly type: "string";
            };
            readonly countryCode: {
                readonly type: "string";
                readonly description: "Processor Bank Country";
                readonly default: "UZ, GE";
            };
            readonly merchantId: {
                readonly type: "string";
                readonly description: "Merchant Id from Acquirer";
                readonly default: "01158***0351N";
            };
            readonly terminalId: {
                readonly type: "string";
                readonly description: "Terminal Id from Acquirer";
                readonly default: "106***E0";
            };
            readonly currency: {
                readonly type: "string";
                readonly description: "Currency for Company";
                readonly default: "GEL";
            };
            readonly isDefault: {
                readonly type: "boolean";
                readonly description: "Is the bank default acquirer?";
                readonly default: false;
            };
            readonly extra: {
                readonly type: "string";
                readonly description: "Extra Data";
                readonly default: any;
            };
            readonly refundDays: {
                readonly type: "integer";
                readonly description: "Refund Days";
                readonly format: "int32";
                readonly default: 14;
                readonly minimum: -2147483648;
                readonly maximum: 2147483647;
            };
            readonly otpEnabled: {
                readonly type: "boolean";
                readonly description: "Is OTP enabled?";
                readonly default: true;
            };
            readonly transactionLimitAmount: {
                readonly type: "number";
                readonly description: "Limited amount per transaction";
                readonly format: "double";
                readonly default: any;
                readonly minimum: -1.7976931348623157e+308;
                readonly maximum: 1.7976931348623157e+308;
            };
        };
        readonly additionalProperties: false;
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly processorBankId: {
                    readonly type: "integer";
                    readonly description: "";
                    readonly format: "int64";
                    readonly minimum: -9223372036854776000;
                    readonly maximum: 9223372036854776000;
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly title: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly status: {
                    readonly type: "integer";
                    readonly description: "";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly detail: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly instance: {
                    readonly type: "string";
                    readonly description: "";
                };
            };
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
export { DeleteBankaccount, DeleteProcessorbank, GetBankaccountQueryRoot, GetBankaccountQueryTokenBased, GetCompanyCurrencies, GetCompanyPayments, GetInsightoverviewCardNetworkSummary, GetInsightoverviewGtv, GetInsightoverviewGtvTokenBased, GetInsightoverviewSummary, GetInsightoverviewSummaryTokenBased, GetPaymentQueryRoot, GetPaymentQueryTokenBased, GetPaymentReceipt, GetPaymentRefundQueryRoot, GetPaymentRefundQueryTokenBased, GetPaymentSplitQueryRoot, GetPaymentSplitQueryTokenBased, GetPayoutQueryRoot, GetPayoutQueryTokenBased, GetProcessorbank, PostBankaccount, PostCertificate, PostPaymentFiscalize, PostPayout, PostProcessorbank, PostStatementUploadFile, PutBankaccount, PutPayment, PutPaymentCapture, PutPaymentReceipt, PutPaymentRefund, PutPaymentRefundReceipt, PutPaymentSplit, PutPaymentSplitCancel, PutProcessorbank };
