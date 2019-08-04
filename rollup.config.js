import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';
import { uglify } from 'rollup-plugin-uglify';
import replace from 'rollup-plugin-replace';

export default {
  input:  'index.js',
  output: {
    file:   'dist/bundle.js',
    format: 'cjs',
    name: 'bar'
  },
  plugins:
    [
      babel({
        exclude: 'node_modules/**'
      }),
      nodeResolve({
        jsnext: true
      }),
      commonjs({
        include: 'node_modules/**',
        exclude: [
          'node_modules/process-es6/**'
        ],
        namedExports:
          {
            './node_modules/react/index.js':
              [
                'cloneElement',
                'createElement',
                'PropTypes',
                'Children',
                'Component',
                'createContext',
                'useState',
              ],
            './node_modules/react-is/index.js':
              [
                'isElement',
                'isValidElementType',
                'ForwardRef',
              ],
          }
      }),
      replace({
        'process.env.NODE_ENV': JSON.stringify( 'production' )
      }),
    ]
}
