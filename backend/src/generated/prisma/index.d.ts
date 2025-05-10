
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model folders
 * 
 */
export type folders = $Result.DefaultSelection<Prisma.$foldersPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Folders
 * const folders = await prisma.folders.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Folders
   * const folders = await prisma.folders.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.folders`: Exposes CRUD operations for the **folders** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Folders
    * const folders = await prisma.folders.findMany()
    * ```
    */
  get folders(): Prisma.foldersDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    folders: 'folders'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "folders"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      folders: {
        payload: Prisma.$foldersPayload<ExtArgs>
        fields: Prisma.foldersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.foldersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$foldersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.foldersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$foldersPayload>
          }
          findFirst: {
            args: Prisma.foldersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$foldersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.foldersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$foldersPayload>
          }
          findMany: {
            args: Prisma.foldersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$foldersPayload>[]
          }
          create: {
            args: Prisma.foldersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$foldersPayload>
          }
          createMany: {
            args: Prisma.foldersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.foldersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$foldersPayload>
          }
          update: {
            args: Prisma.foldersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$foldersPayload>
          }
          deleteMany: {
            args: Prisma.foldersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.foldersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.foldersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$foldersPayload>
          }
          aggregate: {
            args: Prisma.FoldersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFolders>
          }
          groupBy: {
            args: Prisma.foldersGroupByArgs<ExtArgs>
            result: $Utils.Optional<FoldersGroupByOutputType>[]
          }
          count: {
            args: Prisma.foldersCountArgs<ExtArgs>
            result: $Utils.Optional<FoldersCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    folders?: foldersOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type FoldersCountOutputType
   */

  export type FoldersCountOutputType = {
    children: number
  }

  export type FoldersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    children?: boolean | FoldersCountOutputTypeCountChildrenArgs
  }

  // Custom InputTypes
  /**
   * FoldersCountOutputType without action
   */
  export type FoldersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoldersCountOutputType
     */
    select?: FoldersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FoldersCountOutputType without action
   */
  export type FoldersCountOutputTypeCountChildrenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: foldersWhereInput
  }


  /**
   * Models
   */

  /**
   * Model folders
   */

  export type AggregateFolders = {
    _count: FoldersCountAggregateOutputType | null
    _avg: FoldersAvgAggregateOutputType | null
    _sum: FoldersSumAggregateOutputType | null
    _min: FoldersMinAggregateOutputType | null
    _max: FoldersMaxAggregateOutputType | null
  }

  export type FoldersAvgAggregateOutputType = {
    id: number | null
    parent_id: number | null
  }

  export type FoldersSumAggregateOutputType = {
    id: number | null
    parent_id: number | null
  }

  export type FoldersMinAggregateOutputType = {
    id: number | null
    name: string | null
    parent_id: number | null
  }

  export type FoldersMaxAggregateOutputType = {
    id: number | null
    name: string | null
    parent_id: number | null
  }

  export type FoldersCountAggregateOutputType = {
    id: number
    name: number
    parent_id: number
    _all: number
  }


  export type FoldersAvgAggregateInputType = {
    id?: true
    parent_id?: true
  }

  export type FoldersSumAggregateInputType = {
    id?: true
    parent_id?: true
  }

  export type FoldersMinAggregateInputType = {
    id?: true
    name?: true
    parent_id?: true
  }

  export type FoldersMaxAggregateInputType = {
    id?: true
    name?: true
    parent_id?: true
  }

  export type FoldersCountAggregateInputType = {
    id?: true
    name?: true
    parent_id?: true
    _all?: true
  }

  export type FoldersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which folders to aggregate.
     */
    where?: foldersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of folders to fetch.
     */
    orderBy?: foldersOrderByWithRelationInput | foldersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: foldersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` folders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` folders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned folders
    **/
    _count?: true | FoldersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FoldersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FoldersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FoldersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FoldersMaxAggregateInputType
  }

  export type GetFoldersAggregateType<T extends FoldersAggregateArgs> = {
        [P in keyof T & keyof AggregateFolders]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFolders[P]>
      : GetScalarType<T[P], AggregateFolders[P]>
  }




  export type foldersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: foldersWhereInput
    orderBy?: foldersOrderByWithAggregationInput | foldersOrderByWithAggregationInput[]
    by: FoldersScalarFieldEnum[] | FoldersScalarFieldEnum
    having?: foldersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FoldersCountAggregateInputType | true
    _avg?: FoldersAvgAggregateInputType
    _sum?: FoldersSumAggregateInputType
    _min?: FoldersMinAggregateInputType
    _max?: FoldersMaxAggregateInputType
  }

  export type FoldersGroupByOutputType = {
    id: number
    name: string
    parent_id: number | null
    _count: FoldersCountAggregateOutputType | null
    _avg: FoldersAvgAggregateOutputType | null
    _sum: FoldersSumAggregateOutputType | null
    _min: FoldersMinAggregateOutputType | null
    _max: FoldersMaxAggregateOutputType | null
  }

  type GetFoldersGroupByPayload<T extends foldersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FoldersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FoldersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FoldersGroupByOutputType[P]>
            : GetScalarType<T[P], FoldersGroupByOutputType[P]>
        }
      >
    >


  export type foldersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    parent_id?: boolean
    parent?: boolean | folders$parentArgs<ExtArgs>
    children?: boolean | folders$childrenArgs<ExtArgs>
    _count?: boolean | FoldersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["folders"]>



  export type foldersSelectScalar = {
    id?: boolean
    name?: boolean
    parent_id?: boolean
  }

  export type foldersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "parent_id", ExtArgs["result"]["folders"]>
  export type foldersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parent?: boolean | folders$parentArgs<ExtArgs>
    children?: boolean | folders$childrenArgs<ExtArgs>
    _count?: boolean | FoldersCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $foldersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "folders"
    objects: {
      parent: Prisma.$foldersPayload<ExtArgs> | null
      children: Prisma.$foldersPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      parent_id: number | null
    }, ExtArgs["result"]["folders"]>
    composites: {}
  }

  type foldersGetPayload<S extends boolean | null | undefined | foldersDefaultArgs> = $Result.GetResult<Prisma.$foldersPayload, S>

  type foldersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<foldersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FoldersCountAggregateInputType | true
    }

  export interface foldersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['folders'], meta: { name: 'folders' } }
    /**
     * Find zero or one Folders that matches the filter.
     * @param {foldersFindUniqueArgs} args - Arguments to find a Folders
     * @example
     * // Get one Folders
     * const folders = await prisma.folders.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends foldersFindUniqueArgs>(args: SelectSubset<T, foldersFindUniqueArgs<ExtArgs>>): Prisma__foldersClient<$Result.GetResult<Prisma.$foldersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Folders that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {foldersFindUniqueOrThrowArgs} args - Arguments to find a Folders
     * @example
     * // Get one Folders
     * const folders = await prisma.folders.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends foldersFindUniqueOrThrowArgs>(args: SelectSubset<T, foldersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__foldersClient<$Result.GetResult<Prisma.$foldersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Folders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {foldersFindFirstArgs} args - Arguments to find a Folders
     * @example
     * // Get one Folders
     * const folders = await prisma.folders.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends foldersFindFirstArgs>(args?: SelectSubset<T, foldersFindFirstArgs<ExtArgs>>): Prisma__foldersClient<$Result.GetResult<Prisma.$foldersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Folders that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {foldersFindFirstOrThrowArgs} args - Arguments to find a Folders
     * @example
     * // Get one Folders
     * const folders = await prisma.folders.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends foldersFindFirstOrThrowArgs>(args?: SelectSubset<T, foldersFindFirstOrThrowArgs<ExtArgs>>): Prisma__foldersClient<$Result.GetResult<Prisma.$foldersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Folders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {foldersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Folders
     * const folders = await prisma.folders.findMany()
     * 
     * // Get first 10 Folders
     * const folders = await prisma.folders.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const foldersWithIdOnly = await prisma.folders.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends foldersFindManyArgs>(args?: SelectSubset<T, foldersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$foldersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Folders.
     * @param {foldersCreateArgs} args - Arguments to create a Folders.
     * @example
     * // Create one Folders
     * const Folders = await prisma.folders.create({
     *   data: {
     *     // ... data to create a Folders
     *   }
     * })
     * 
     */
    create<T extends foldersCreateArgs>(args: SelectSubset<T, foldersCreateArgs<ExtArgs>>): Prisma__foldersClient<$Result.GetResult<Prisma.$foldersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Folders.
     * @param {foldersCreateManyArgs} args - Arguments to create many Folders.
     * @example
     * // Create many Folders
     * const folders = await prisma.folders.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends foldersCreateManyArgs>(args?: SelectSubset<T, foldersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Folders.
     * @param {foldersDeleteArgs} args - Arguments to delete one Folders.
     * @example
     * // Delete one Folders
     * const Folders = await prisma.folders.delete({
     *   where: {
     *     // ... filter to delete one Folders
     *   }
     * })
     * 
     */
    delete<T extends foldersDeleteArgs>(args: SelectSubset<T, foldersDeleteArgs<ExtArgs>>): Prisma__foldersClient<$Result.GetResult<Prisma.$foldersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Folders.
     * @param {foldersUpdateArgs} args - Arguments to update one Folders.
     * @example
     * // Update one Folders
     * const folders = await prisma.folders.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends foldersUpdateArgs>(args: SelectSubset<T, foldersUpdateArgs<ExtArgs>>): Prisma__foldersClient<$Result.GetResult<Prisma.$foldersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Folders.
     * @param {foldersDeleteManyArgs} args - Arguments to filter Folders to delete.
     * @example
     * // Delete a few Folders
     * const { count } = await prisma.folders.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends foldersDeleteManyArgs>(args?: SelectSubset<T, foldersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Folders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {foldersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Folders
     * const folders = await prisma.folders.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends foldersUpdateManyArgs>(args: SelectSubset<T, foldersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Folders.
     * @param {foldersUpsertArgs} args - Arguments to update or create a Folders.
     * @example
     * // Update or create a Folders
     * const folders = await prisma.folders.upsert({
     *   create: {
     *     // ... data to create a Folders
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Folders we want to update
     *   }
     * })
     */
    upsert<T extends foldersUpsertArgs>(args: SelectSubset<T, foldersUpsertArgs<ExtArgs>>): Prisma__foldersClient<$Result.GetResult<Prisma.$foldersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Folders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {foldersCountArgs} args - Arguments to filter Folders to count.
     * @example
     * // Count the number of Folders
     * const count = await prisma.folders.count({
     *   where: {
     *     // ... the filter for the Folders we want to count
     *   }
     * })
    **/
    count<T extends foldersCountArgs>(
      args?: Subset<T, foldersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FoldersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Folders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoldersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FoldersAggregateArgs>(args: Subset<T, FoldersAggregateArgs>): Prisma.PrismaPromise<GetFoldersAggregateType<T>>

    /**
     * Group by Folders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {foldersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends foldersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: foldersGroupByArgs['orderBy'] }
        : { orderBy?: foldersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, foldersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFoldersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the folders model
   */
  readonly fields: foldersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for folders.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__foldersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    parent<T extends folders$parentArgs<ExtArgs> = {}>(args?: Subset<T, folders$parentArgs<ExtArgs>>): Prisma__foldersClient<$Result.GetResult<Prisma.$foldersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    children<T extends folders$childrenArgs<ExtArgs> = {}>(args?: Subset<T, folders$childrenArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$foldersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the folders model
   */
  interface foldersFieldRefs {
    readonly id: FieldRef<"folders", 'Int'>
    readonly name: FieldRef<"folders", 'String'>
    readonly parent_id: FieldRef<"folders", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * folders findUnique
   */
  export type foldersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the folders
     */
    select?: foldersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the folders
     */
    omit?: foldersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: foldersInclude<ExtArgs> | null
    /**
     * Filter, which folders to fetch.
     */
    where: foldersWhereUniqueInput
  }

  /**
   * folders findUniqueOrThrow
   */
  export type foldersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the folders
     */
    select?: foldersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the folders
     */
    omit?: foldersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: foldersInclude<ExtArgs> | null
    /**
     * Filter, which folders to fetch.
     */
    where: foldersWhereUniqueInput
  }

  /**
   * folders findFirst
   */
  export type foldersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the folders
     */
    select?: foldersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the folders
     */
    omit?: foldersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: foldersInclude<ExtArgs> | null
    /**
     * Filter, which folders to fetch.
     */
    where?: foldersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of folders to fetch.
     */
    orderBy?: foldersOrderByWithRelationInput | foldersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for folders.
     */
    cursor?: foldersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` folders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` folders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of folders.
     */
    distinct?: FoldersScalarFieldEnum | FoldersScalarFieldEnum[]
  }

  /**
   * folders findFirstOrThrow
   */
  export type foldersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the folders
     */
    select?: foldersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the folders
     */
    omit?: foldersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: foldersInclude<ExtArgs> | null
    /**
     * Filter, which folders to fetch.
     */
    where?: foldersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of folders to fetch.
     */
    orderBy?: foldersOrderByWithRelationInput | foldersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for folders.
     */
    cursor?: foldersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` folders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` folders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of folders.
     */
    distinct?: FoldersScalarFieldEnum | FoldersScalarFieldEnum[]
  }

  /**
   * folders findMany
   */
  export type foldersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the folders
     */
    select?: foldersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the folders
     */
    omit?: foldersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: foldersInclude<ExtArgs> | null
    /**
     * Filter, which folders to fetch.
     */
    where?: foldersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of folders to fetch.
     */
    orderBy?: foldersOrderByWithRelationInput | foldersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing folders.
     */
    cursor?: foldersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` folders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` folders.
     */
    skip?: number
    distinct?: FoldersScalarFieldEnum | FoldersScalarFieldEnum[]
  }

  /**
   * folders create
   */
  export type foldersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the folders
     */
    select?: foldersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the folders
     */
    omit?: foldersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: foldersInclude<ExtArgs> | null
    /**
     * The data needed to create a folders.
     */
    data: XOR<foldersCreateInput, foldersUncheckedCreateInput>
  }

  /**
   * folders createMany
   */
  export type foldersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many folders.
     */
    data: foldersCreateManyInput | foldersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * folders update
   */
  export type foldersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the folders
     */
    select?: foldersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the folders
     */
    omit?: foldersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: foldersInclude<ExtArgs> | null
    /**
     * The data needed to update a folders.
     */
    data: XOR<foldersUpdateInput, foldersUncheckedUpdateInput>
    /**
     * Choose, which folders to update.
     */
    where: foldersWhereUniqueInput
  }

  /**
   * folders updateMany
   */
  export type foldersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update folders.
     */
    data: XOR<foldersUpdateManyMutationInput, foldersUncheckedUpdateManyInput>
    /**
     * Filter which folders to update
     */
    where?: foldersWhereInput
    /**
     * Limit how many folders to update.
     */
    limit?: number
  }

  /**
   * folders upsert
   */
  export type foldersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the folders
     */
    select?: foldersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the folders
     */
    omit?: foldersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: foldersInclude<ExtArgs> | null
    /**
     * The filter to search for the folders to update in case it exists.
     */
    where: foldersWhereUniqueInput
    /**
     * In case the folders found by the `where` argument doesn't exist, create a new folders with this data.
     */
    create: XOR<foldersCreateInput, foldersUncheckedCreateInput>
    /**
     * In case the folders was found with the provided `where` argument, update it with this data.
     */
    update: XOR<foldersUpdateInput, foldersUncheckedUpdateInput>
  }

  /**
   * folders delete
   */
  export type foldersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the folders
     */
    select?: foldersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the folders
     */
    omit?: foldersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: foldersInclude<ExtArgs> | null
    /**
     * Filter which folders to delete.
     */
    where: foldersWhereUniqueInput
  }

  /**
   * folders deleteMany
   */
  export type foldersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which folders to delete
     */
    where?: foldersWhereInput
    /**
     * Limit how many folders to delete.
     */
    limit?: number
  }

  /**
   * folders.parent
   */
  export type folders$parentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the folders
     */
    select?: foldersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the folders
     */
    omit?: foldersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: foldersInclude<ExtArgs> | null
    where?: foldersWhereInput
  }

  /**
   * folders.children
   */
  export type folders$childrenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the folders
     */
    select?: foldersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the folders
     */
    omit?: foldersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: foldersInclude<ExtArgs> | null
    where?: foldersWhereInput
    orderBy?: foldersOrderByWithRelationInput | foldersOrderByWithRelationInput[]
    cursor?: foldersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FoldersScalarFieldEnum | FoldersScalarFieldEnum[]
  }

  /**
   * folders without action
   */
  export type foldersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the folders
     */
    select?: foldersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the folders
     */
    omit?: foldersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: foldersInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const FoldersScalarFieldEnum: {
    id: 'id',
    name: 'name',
    parent_id: 'parent_id'
  };

  export type FoldersScalarFieldEnum = (typeof FoldersScalarFieldEnum)[keyof typeof FoldersScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const foldersOrderByRelevanceFieldEnum: {
    name: 'name'
  };

  export type foldersOrderByRelevanceFieldEnum = (typeof foldersOrderByRelevanceFieldEnum)[keyof typeof foldersOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type foldersWhereInput = {
    AND?: foldersWhereInput | foldersWhereInput[]
    OR?: foldersWhereInput[]
    NOT?: foldersWhereInput | foldersWhereInput[]
    id?: IntFilter<"folders"> | number
    name?: StringFilter<"folders"> | string
    parent_id?: IntNullableFilter<"folders"> | number | null
    parent?: XOR<FoldersNullableScalarRelationFilter, foldersWhereInput> | null
    children?: FoldersListRelationFilter
  }

  export type foldersOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    parent_id?: SortOrderInput | SortOrder
    parent?: foldersOrderByWithRelationInput
    children?: foldersOrderByRelationAggregateInput
    _relevance?: foldersOrderByRelevanceInput
  }

  export type foldersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: foldersWhereInput | foldersWhereInput[]
    OR?: foldersWhereInput[]
    NOT?: foldersWhereInput | foldersWhereInput[]
    name?: StringFilter<"folders"> | string
    parent_id?: IntNullableFilter<"folders"> | number | null
    parent?: XOR<FoldersNullableScalarRelationFilter, foldersWhereInput> | null
    children?: FoldersListRelationFilter
  }, "id">

  export type foldersOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    parent_id?: SortOrderInput | SortOrder
    _count?: foldersCountOrderByAggregateInput
    _avg?: foldersAvgOrderByAggregateInput
    _max?: foldersMaxOrderByAggregateInput
    _min?: foldersMinOrderByAggregateInput
    _sum?: foldersSumOrderByAggregateInput
  }

  export type foldersScalarWhereWithAggregatesInput = {
    AND?: foldersScalarWhereWithAggregatesInput | foldersScalarWhereWithAggregatesInput[]
    OR?: foldersScalarWhereWithAggregatesInput[]
    NOT?: foldersScalarWhereWithAggregatesInput | foldersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"folders"> | number
    name?: StringWithAggregatesFilter<"folders"> | string
    parent_id?: IntNullableWithAggregatesFilter<"folders"> | number | null
  }

  export type foldersCreateInput = {
    name: string
    parent?: foldersCreateNestedOneWithoutChildrenInput
    children?: foldersCreateNestedManyWithoutParentInput
  }

  export type foldersUncheckedCreateInput = {
    id?: number
    name: string
    parent_id?: number | null
    children?: foldersUncheckedCreateNestedManyWithoutParentInput
  }

  export type foldersUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    parent?: foldersUpdateOneWithoutChildrenNestedInput
    children?: foldersUpdateManyWithoutParentNestedInput
  }

  export type foldersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    parent_id?: NullableIntFieldUpdateOperationsInput | number | null
    children?: foldersUncheckedUpdateManyWithoutParentNestedInput
  }

  export type foldersCreateManyInput = {
    id?: number
    name: string
    parent_id?: number | null
  }

  export type foldersUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type foldersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    parent_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type FoldersNullableScalarRelationFilter = {
    is?: foldersWhereInput | null
    isNot?: foldersWhereInput | null
  }

  export type FoldersListRelationFilter = {
    every?: foldersWhereInput
    some?: foldersWhereInput
    none?: foldersWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type foldersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type foldersOrderByRelevanceInput = {
    fields: foldersOrderByRelevanceFieldEnum | foldersOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type foldersCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    parent_id?: SortOrder
  }

  export type foldersAvgOrderByAggregateInput = {
    id?: SortOrder
    parent_id?: SortOrder
  }

  export type foldersMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    parent_id?: SortOrder
  }

  export type foldersMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    parent_id?: SortOrder
  }

  export type foldersSumOrderByAggregateInput = {
    id?: SortOrder
    parent_id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type foldersCreateNestedOneWithoutChildrenInput = {
    create?: XOR<foldersCreateWithoutChildrenInput, foldersUncheckedCreateWithoutChildrenInput>
    connectOrCreate?: foldersCreateOrConnectWithoutChildrenInput
    connect?: foldersWhereUniqueInput
  }

  export type foldersCreateNestedManyWithoutParentInput = {
    create?: XOR<foldersCreateWithoutParentInput, foldersUncheckedCreateWithoutParentInput> | foldersCreateWithoutParentInput[] | foldersUncheckedCreateWithoutParentInput[]
    connectOrCreate?: foldersCreateOrConnectWithoutParentInput | foldersCreateOrConnectWithoutParentInput[]
    createMany?: foldersCreateManyParentInputEnvelope
    connect?: foldersWhereUniqueInput | foldersWhereUniqueInput[]
  }

  export type foldersUncheckedCreateNestedManyWithoutParentInput = {
    create?: XOR<foldersCreateWithoutParentInput, foldersUncheckedCreateWithoutParentInput> | foldersCreateWithoutParentInput[] | foldersUncheckedCreateWithoutParentInput[]
    connectOrCreate?: foldersCreateOrConnectWithoutParentInput | foldersCreateOrConnectWithoutParentInput[]
    createMany?: foldersCreateManyParentInputEnvelope
    connect?: foldersWhereUniqueInput | foldersWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type foldersUpdateOneWithoutChildrenNestedInput = {
    create?: XOR<foldersCreateWithoutChildrenInput, foldersUncheckedCreateWithoutChildrenInput>
    connectOrCreate?: foldersCreateOrConnectWithoutChildrenInput
    upsert?: foldersUpsertWithoutChildrenInput
    disconnect?: foldersWhereInput | boolean
    delete?: foldersWhereInput | boolean
    connect?: foldersWhereUniqueInput
    update?: XOR<XOR<foldersUpdateToOneWithWhereWithoutChildrenInput, foldersUpdateWithoutChildrenInput>, foldersUncheckedUpdateWithoutChildrenInput>
  }

  export type foldersUpdateManyWithoutParentNestedInput = {
    create?: XOR<foldersCreateWithoutParentInput, foldersUncheckedCreateWithoutParentInput> | foldersCreateWithoutParentInput[] | foldersUncheckedCreateWithoutParentInput[]
    connectOrCreate?: foldersCreateOrConnectWithoutParentInput | foldersCreateOrConnectWithoutParentInput[]
    upsert?: foldersUpsertWithWhereUniqueWithoutParentInput | foldersUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: foldersCreateManyParentInputEnvelope
    set?: foldersWhereUniqueInput | foldersWhereUniqueInput[]
    disconnect?: foldersWhereUniqueInput | foldersWhereUniqueInput[]
    delete?: foldersWhereUniqueInput | foldersWhereUniqueInput[]
    connect?: foldersWhereUniqueInput | foldersWhereUniqueInput[]
    update?: foldersUpdateWithWhereUniqueWithoutParentInput | foldersUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: foldersUpdateManyWithWhereWithoutParentInput | foldersUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: foldersScalarWhereInput | foldersScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type foldersUncheckedUpdateManyWithoutParentNestedInput = {
    create?: XOR<foldersCreateWithoutParentInput, foldersUncheckedCreateWithoutParentInput> | foldersCreateWithoutParentInput[] | foldersUncheckedCreateWithoutParentInput[]
    connectOrCreate?: foldersCreateOrConnectWithoutParentInput | foldersCreateOrConnectWithoutParentInput[]
    upsert?: foldersUpsertWithWhereUniqueWithoutParentInput | foldersUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: foldersCreateManyParentInputEnvelope
    set?: foldersWhereUniqueInput | foldersWhereUniqueInput[]
    disconnect?: foldersWhereUniqueInput | foldersWhereUniqueInput[]
    delete?: foldersWhereUniqueInput | foldersWhereUniqueInput[]
    connect?: foldersWhereUniqueInput | foldersWhereUniqueInput[]
    update?: foldersUpdateWithWhereUniqueWithoutParentInput | foldersUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: foldersUpdateManyWithWhereWithoutParentInput | foldersUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: foldersScalarWhereInput | foldersScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type foldersCreateWithoutChildrenInput = {
    name: string
    parent?: foldersCreateNestedOneWithoutChildrenInput
  }

  export type foldersUncheckedCreateWithoutChildrenInput = {
    id?: number
    name: string
    parent_id?: number | null
  }

  export type foldersCreateOrConnectWithoutChildrenInput = {
    where: foldersWhereUniqueInput
    create: XOR<foldersCreateWithoutChildrenInput, foldersUncheckedCreateWithoutChildrenInput>
  }

  export type foldersCreateWithoutParentInput = {
    name: string
    children?: foldersCreateNestedManyWithoutParentInput
  }

  export type foldersUncheckedCreateWithoutParentInput = {
    id?: number
    name: string
    children?: foldersUncheckedCreateNestedManyWithoutParentInput
  }

  export type foldersCreateOrConnectWithoutParentInput = {
    where: foldersWhereUniqueInput
    create: XOR<foldersCreateWithoutParentInput, foldersUncheckedCreateWithoutParentInput>
  }

  export type foldersCreateManyParentInputEnvelope = {
    data: foldersCreateManyParentInput | foldersCreateManyParentInput[]
    skipDuplicates?: boolean
  }

  export type foldersUpsertWithoutChildrenInput = {
    update: XOR<foldersUpdateWithoutChildrenInput, foldersUncheckedUpdateWithoutChildrenInput>
    create: XOR<foldersCreateWithoutChildrenInput, foldersUncheckedCreateWithoutChildrenInput>
    where?: foldersWhereInput
  }

  export type foldersUpdateToOneWithWhereWithoutChildrenInput = {
    where?: foldersWhereInput
    data: XOR<foldersUpdateWithoutChildrenInput, foldersUncheckedUpdateWithoutChildrenInput>
  }

  export type foldersUpdateWithoutChildrenInput = {
    name?: StringFieldUpdateOperationsInput | string
    parent?: foldersUpdateOneWithoutChildrenNestedInput
  }

  export type foldersUncheckedUpdateWithoutChildrenInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    parent_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type foldersUpsertWithWhereUniqueWithoutParentInput = {
    where: foldersWhereUniqueInput
    update: XOR<foldersUpdateWithoutParentInput, foldersUncheckedUpdateWithoutParentInput>
    create: XOR<foldersCreateWithoutParentInput, foldersUncheckedCreateWithoutParentInput>
  }

  export type foldersUpdateWithWhereUniqueWithoutParentInput = {
    where: foldersWhereUniqueInput
    data: XOR<foldersUpdateWithoutParentInput, foldersUncheckedUpdateWithoutParentInput>
  }

  export type foldersUpdateManyWithWhereWithoutParentInput = {
    where: foldersScalarWhereInput
    data: XOR<foldersUpdateManyMutationInput, foldersUncheckedUpdateManyWithoutParentInput>
  }

  export type foldersScalarWhereInput = {
    AND?: foldersScalarWhereInput | foldersScalarWhereInput[]
    OR?: foldersScalarWhereInput[]
    NOT?: foldersScalarWhereInput | foldersScalarWhereInput[]
    id?: IntFilter<"folders"> | number
    name?: StringFilter<"folders"> | string
    parent_id?: IntNullableFilter<"folders"> | number | null
  }

  export type foldersCreateManyParentInput = {
    id?: number
    name: string
  }

  export type foldersUpdateWithoutParentInput = {
    name?: StringFieldUpdateOperationsInput | string
    children?: foldersUpdateManyWithoutParentNestedInput
  }

  export type foldersUncheckedUpdateWithoutParentInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    children?: foldersUncheckedUpdateManyWithoutParentNestedInput
  }

  export type foldersUncheckedUpdateManyWithoutParentInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}