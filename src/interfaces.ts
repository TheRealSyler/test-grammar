export type Expect = string[][][] | string;
export type Text = string[] | string;

export interface Options {
  /** Also Logs Tokens that passed the test. */
  logAllTokens: boolean;
  /** Calls `process.exit(1)` when tests failed or if there is an error. */
  exitProcess: boolean;
  /** Uses the source parameter as input file, the input string is expected to be valid json textmate grammar. */
  useSourceAsFile: boolean;
}
export type Run = (name: string, text: Text, expect: Expect, options?: Partial<RunOptions>) => void;
export type RunOptions = Pick<Options, 'logAllTokens'>;
