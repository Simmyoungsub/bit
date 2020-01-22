import { PathLinux } from '../utils/path';

export type PackageDependencies = {
  devDependencies: Dependencies;
  dependencies: Dependencies;
};

export type Dependencies = {
  [name: string]: string;
};

/**
 * in-memory represnentation of the component configuration.
 */
export default class Config {
  constructor(
    /**
     * version main file
     */
    readonly main: PathLinux,

    /**
     * version package dependencies.
     */
    readonly packageDependencies: PackageDependencies
  ) {}

  /**
   * all extensions configured on the component current head.
   */
  get extensions() {
    return [];
  }
}
