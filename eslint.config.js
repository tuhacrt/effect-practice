import antfu from '@antfu/eslint-config'

export default antfu(
  {
    stylistic: {
      indent: 2,
      quotes: 'single',
    },
    rules: {
      'style/brace-style': ['error', '1tbs', { allowSingleLine: true }],
      'import/order': [
        'error',
        {
          'groups': ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'unknown'],
          'newlines-between': 'always',
          'alphabetize': { order: 'asc' },
        },
      ],
      'ts/consistent-type-definitions': ['error', 'type'],
    },
    ignores: ['node_modules', 'dist'],
  },
)
