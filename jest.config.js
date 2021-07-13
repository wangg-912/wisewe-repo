module.exports = {
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],
  transform: {
    "^.+\\.vue$": "<rootDir>/node_modules/vue-jest",
    "^.+\\.js$": "<rootDir>/node_modules/babel-jest",
    '^.+\\.(t|j)sx?$': [
      'babel-jest', {
        presets: [
          [
            '@babel/preset-env',
            {
              targets: {
                node: true,
              },
            },
          ],
          '@babel/preset-typescript',
        ],
        plugins: [
          '@vue/babel-plugin-jsx',
          '@babel/plugin-proposal-class-properties',
        ],
      },
    ],
  },
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  snapshotSerializers: ["jest-serializer-vue"],
  testMatch: ["**/__tests__/**/*.spec.js"],
  transformIgnorePatterns: ["<rootDir>/node_modules/"],
};
