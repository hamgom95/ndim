type ContainerCreator = (dim: number) => any[];
type Filler = (...indexes: number[]) => any;

const createEmptyArray: ContainerCreator = dim => new Array(dim).fill(undefined);

// recursive implementation
const _ndim = ([dim, ...rest]: number[], filler: any, createContainer: ContainerCreator, idx: number[]) =>
    (dim === undefined) ? filler(...idx) :
        createContainer(dim).map((_, i) => _ndim(rest, filler, createContainer, [...idx, i]));

/**
 * Create multi-dimensional array from index specifying array and fill using callback.
 * 
 * @param [dims] Array that defined the dimensions of the resulting array.
 * @param [filler] Filler callback that gets all indexes of cell as arguments (fills with `undefined` by default).
 * @param [createContainer] Container creating function (creates Arrays by default).
 */
export const ndim = (dims: number[], filler: Filler = () => undefined, createContainer: ContainerCreator = createEmptyArray): any[] => _ndim(dims, filler, createContainer, []);
