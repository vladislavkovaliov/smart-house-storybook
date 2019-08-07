import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import svg from 'rollup-plugin-svg';

const globals = { react: "React", "react-dom": "ReactDOM" };

export default {
  input: './index.js',
  output: {
    file: 'dist/bundle.js',
    format: 'cjs',
    globals,
    sourcemap: true
  },
  plugins: [
    svg(),
    babel({
      exclude: "node_modules/**",
      // runtimeHelpers: true
    }),
    commonjs({
      include: 'node_modules/**',
      namedExports: {
        react: [
          "cloneElement",
          "createFactory",
          "Component",
          "PropTypes",
          "createElement",
          "createContext"
        ],
        "react-dom": ["render"],
        "react-is": ["isElement", "isValidElementType", "ForwardRef"]
      }
    }),
  ],
}
