import { z } from 'zod';
/**
 * `ExchangeRates` schema excluding foreign keys and relations.
 */
export declare const ExchangeRatesScalarSchema: z.ZodObject<{
    id: z.ZodString;
    createdAt: z.ZodDefault<z.ZodDate>;
    updatedAt: z.ZodDefault<z.ZodDate>;
    baseCurrency: z.ZodString;
    rates: z.ZodAny;
}, "strict", z.ZodTypeAny, {
    createdAt: Date;
    updatedAt: Date;
    id: string;
    baseCurrency: string;
    rates?: any;
}, {
    id: string;
    baseCurrency: string;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    rates?: any;
}>;
/**
 * `ExchangeRates` schema including all fields (scalar, foreign key, and relations) and validations.
 */
export declare const ExchangeRatesSchema: z.ZodObject<{
    id: z.ZodString;
    createdAt: z.ZodDefault<z.ZodDate>;
    updatedAt: z.ZodDefault<z.ZodDate>;
    baseCurrency: z.ZodString;
    rates: z.ZodAny;
}, "strict", z.ZodTypeAny, {
    createdAt: Date;
    updatedAt: Date;
    id: string;
    baseCurrency: string;
    rates?: any;
}, {
    id: string;
    baseCurrency: string;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    rates?: any;
}>;
/**
 * Schema used for validating Prisma create input. For internal use only.
 * @private
 */
export declare const ExchangeRatesPrismaCreateSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    updatedAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    baseCurrency: z.ZodOptional<z.ZodString>;
    rates: z.ZodOptional<z.ZodAny>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    id: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    updatedAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    baseCurrency: z.ZodOptional<z.ZodString>;
    rates: z.ZodOptional<z.ZodAny>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    id: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    updatedAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    baseCurrency: z.ZodOptional<z.ZodString>;
    rates: z.ZodOptional<z.ZodAny>;
}, z.ZodTypeAny, "passthrough">>;
/**
 * Schema used for validating Prisma update input. For internal use only.
 * @private
 */
export declare const ExchangeRatesPrismaUpdateSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    updatedAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    baseCurrency: z.ZodOptional<z.ZodString>;
    rates: z.ZodOptional<z.ZodAny>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    id: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    updatedAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    baseCurrency: z.ZodOptional<z.ZodString>;
    rates: z.ZodOptional<z.ZodAny>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    id: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    updatedAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    baseCurrency: z.ZodOptional<z.ZodString>;
    rates: z.ZodOptional<z.ZodAny>;
}, z.ZodTypeAny, "passthrough">>;
/**
 * `ExchangeRates` schema for create operations excluding foreign keys and relations.
 */
export declare const ExchangeRatesCreateScalarSchema: z.ZodObject<{
    createdAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    updatedAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    id: z.ZodOptional<z.ZodString>;
    baseCurrency: z.ZodString;
    rates: z.ZodAny;
}, "strict", z.ZodTypeAny, {
    baseCurrency: string;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    id?: string | undefined;
    rates?: any;
}, {
    baseCurrency: string;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    id?: string | undefined;
    rates?: any;
}>;
/**
 * `ExchangeRates` schema for create operations including scalar fields, foreign key fields, and validations.
 */
export declare const ExchangeRatesCreateSchema: z.ZodObject<{
    createdAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    updatedAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    id: z.ZodOptional<z.ZodString>;
    baseCurrency: z.ZodString;
    rates: z.ZodAny;
}, "strict", z.ZodTypeAny, {
    baseCurrency: string;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    id?: string | undefined;
    rates?: any;
}, {
    baseCurrency: string;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    id?: string | undefined;
    rates?: any;
}>;
/**
 * `ExchangeRates` schema for update operations excluding foreign keys and relations.
 */
export declare const ExchangeRatesUpdateScalarSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    updatedAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    baseCurrency: z.ZodOptional<z.ZodString>;
    rates: z.ZodOptional<z.ZodAny>;
}, "strict", z.ZodTypeAny, {
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    id?: string | undefined;
    baseCurrency?: string | undefined;
    rates?: any;
}, {
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    id?: string | undefined;
    baseCurrency?: string | undefined;
    rates?: any;
}>;
/**
 * `ExchangeRates` schema for update operations including scalar fields, foreign key fields, and validations.
 */
export declare const ExchangeRatesUpdateSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    updatedAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    baseCurrency: z.ZodOptional<z.ZodString>;
    rates: z.ZodOptional<z.ZodAny>;
}, "strict", z.ZodTypeAny, {
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    id?: string | undefined;
    baseCurrency?: string | undefined;
    rates?: any;
}, {
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    id?: string | undefined;
    baseCurrency?: string | undefined;
    rates?: any;
}>;
